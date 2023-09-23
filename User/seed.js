const User = require('./user');

// Define the seed data
const userData = [
  { first: 'John', last: 'Wick', email: 'john@example.com', response: 'Hello, World!' },
  { first: 'Jane', last: 'Wick', email: 'jane@example.com', response: 'Hi there! Now your my target!' },
  // Add more user data as needed
];

// Function to seed the data
const seedData = async () => {
  try {
    
    // Clear existing users
    await User.deleteMany();

    // Create new users using the seed data
    await User.create(userData);

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

// Call the seedData function to start seeding the data
seedData();