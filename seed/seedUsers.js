const connectDB = require('../config/mongoose'); 
const User = require('../models/user');

const seedUsers = async () => {
    try {
      // Connect to DB
      await connectDB();
  
      // Clear existing users
      await User.deleteMany();
  
      // Create new users
      const users = [
        {
          username: 'johndoe', 
          name: 'John Doe',
          email: 'john@example.com',
          password: 'password123', 
        },
        {
          username: 'janesmith', 
          name: 'Jane Smith',
          email: 'jane@example.com',
          password: 'password123', 
        },
        {
          username: 'alicebrown', 
          name: 'Alice Brown',
          email: 'alice@example.com',
          password: 'password123', 
        },
        {
          username: 'michaeljohnson', 
          name: 'Michael Johnson',
          email: 'michael@example.com',
          password: 'password123', 
        },
        {
          username: 'sophialee', 
          name: 'Sophia Lee',
          email: 'sophia@example.com',
          password: 'password123', 
        },
        {
          username: 'davidmartinez', 
          name: 'David Martinez',
          email: 'david@example.com',
          password: 'password123', 
        },
        {
          username: 'emilydavis', 
          name: 'Emily Davis',
          email: 'emily@example.com',
          password: 'password123', 
        },
        {
          username: 'jameswilson', 
          name: 'James Wilson',
          email: 'james@example.com',
          password: 'password123', 
        },
        {
          username: 'oliviamoore', 
          name: 'Olivia Moore',
          email: 'olivia@example.com',
          password: 'password123', 
        },
        {
          username: 'abdoukaba',
          name: 'Abdou Kaba',
          email: 'abdou@example.com',
          password: 'password123', 
        }
      ];
      const insertedUsers = await User.insertMany(users);

      console.log('Users seeded successfully!');
      console.log(insertedUsers); 
  
      process.exit();
    } catch (error) {
      console.error('Error seeding users:', error);
      process.exit(1);
    }
  };
  

// Run the script
seedUsers();