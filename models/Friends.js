const Friend = require('./Friend');

// Define the seed data
const friendData = [
  { name: 'John Wick', age: 45 },
  { name: 'Jane Wick', age: 35 },
  // Add more friend data as needed
];

// Function to seed the data
const seedData = async () => {
  try {
    // Clear existing friends
    await Friend.deleteMany();

    // Create new friends using the seed data
    await Friend.create(friendData);

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }

};

// Call the seedData function to start seeding the data
seedData();
