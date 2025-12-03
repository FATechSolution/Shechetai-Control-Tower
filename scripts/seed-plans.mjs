import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '../.env.local');

// Parse .env.local
let serviceAccountKey = null;
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const match = envContent.match(/FIREBASE_SERVICE_ACCOUNT_KEY=(.*?)(?:\n|$)/);
  if (match) {
    try {
      serviceAccountKey = JSON.parse(match[1]);
    } catch (e) {
      console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY:', e.message);
    }
  }
}

if (!serviceAccountKey) {
  console.error('FIREBASE_SERVICE_ACCOUNT_KEY not found in .env.local');
  process.exit(1);
}

// Initialize Firebase
const app = initializeApp({
  credential: cert(serviceAccountKey),
});

const db = getFirestore(app);

async function seedPlans() {
  try {
    console.log('🌱 Seeding subscription plans...');

    const plans = [
      {
        name: 'Free',
        description: 'Perfect for getting started',
        price: 0,
        currency: 'USD',
        interval: 'month',
        agents: 1,
        seats: 5,
        requests: 100,
        features: ['Basic dashboard', 'Email support', '1 agent', '5 team seats', '100 API requests/month'],
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'Starter',
        description: 'For small teams',
        price: 99,
        currency: 'USD',
        interval: 'month',
        agents: 5,
        seats: 25,
        requests: 10000,
        features: ['Advanced dashboard', 'Priority email support', '5 agents', '25 team seats', '10k API requests/month', 'Basic analytics'],
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'Pro',
        description: 'For growing businesses',
        price: 299,
        currency: 'USD',
        interval: 'month',
        agents: 50,
        seats: 100,
        requests: 100000,
        features: ['Full dashboard', '24/7 chat support', '50 agents', '100 team seats', '100k API requests/month', 'Advanced analytics', 'Custom integrations'],
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: 'Enterprise',
        description: 'For large organizations',
        price: 999,
        currency: 'USD',
        interval: 'year',
        agents: 999,
        seats: 999,
        requests: 10000000,
        features: ['Everything in Pro', 'Dedicated account manager', 'Custom SLA', 'White-label options', 'Advanced security', 'Unlimited everything'],
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    for (const plan of plans) {
      const planRef = db.collection('subscriptionPlans').doc(plan.name.toLowerCase());
      await planRef.set(plan);
      console.log(`✅ Created plan: ${plan.name}`);
    }

    console.log('🎉 All plans seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding plans:', error.message);
    process.exit(1);
  }
}

seedPlans();
