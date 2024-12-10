const connectDB = require('../config/mongoose'); 
const Sneaker = require('../models/Sneaker');

const seedData = [
  { brand: 'Nike', model: 'Dunk Low', size: 10, colorway: 'University Red', status: 'Owned' },
  { brand: 'Adidas', model: 'Yeezy Boost 350', size: 9, colorway: 'Zebra', status: 'Wishlist' },
  { brand: 'New Balance', model: '990v3', size: 10.5, colorway: 'Grey', status: 'Owned' },
  { brand: 'Asics', model: 'Gel-Lyte III', size: 9.5, colorway: 'Orange Blaze', status: 'Wishlist' },
  { brand: 'Puma', model: 'Suede Classic', size: 11, colorway: 'Black/White', status: 'Owned' },
  { brand: 'Jordan', model: 'Air Jordan 4', size: 10, colorway: 'Bred', status: 'Owned' },
];

const seedDatabase = async () => {
  try {
    await connectDB(); 
    await Sneaker.deleteMany({}); 
    await Sneaker.insertMany(seedData); 
    console.log('Database seeded successfully!');
    process.exit(); 
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1)
  }
};

seedDatabase(); 
