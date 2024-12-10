const connectDB = require('../config/mongoose');
const Comment = require('../models/comment'); 
const User = require('../models/user'); 

// Seed Comments
const seedComments = async () => {
  try {
    // Connect to DB
    await connectDB();

    await Comment.deleteMany();


    const users = await User.find(); 

    if (users.length === 0) {
      console.log('No users found, skipping comment seeding.');
      process.exit();
    }
    const comments = [
        {
          text: 'Great sneaker, I love the design!',
          userId: users[0]._id, 
        },
        {
          text: 'The fit is perfect, but the color could be better.',
          userId: users[1]._id, 
        },
        {
          text: 'Comfortable and stylish!',
          userId: users[2]._id, 
        },
        {
          text: 'Amazing shoes, would buy again!',
          userId: users[3]._id, 
        },
        {
          text: 'Nice pair, but the quality could be improved.',
          userId: users[4]._id, 
        },
        {
          text: 'These sneakers are very durable and comfy.',
          userId: users[5]._id, 
        },
        {
          text: 'Not my favorite, but they look good.',
          userId: users[6]._id, 
        },
        {
          text: 'Perfect for everyday wear!',
          userId: users[7]._id, 
        },
        {
          text: 'Stylish and trendy. Love them!',
          userId: users[8]._id, 
        },
        {
          text: 'Love these sneakers, highly recommend!',
          userId: users[9]._id, 
        },
      ];

    
    await Comment.insertMany(comments);
    console.log('Comments seeded successfully!');
    process.exit(); 
  } catch (error) {
    console.error('Error seeding comments:', error);
    process.exit(1); 
  }
};

seedComments();