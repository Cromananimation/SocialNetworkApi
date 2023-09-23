const connection = require('../config/connection');
const usersData = require('./data');
const User = require('../models/User');

connection.on('error', (err) => err);

connection.once('open', async () => {
  try {
    console.log('connected');
    // Delete the collections if they exist
    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }
    await User.insertMany(usersData);
    console.log('Users seeded');
    process.exit(0)   
  }
  catch (error) {
    console.error("Error seeding: ", error);
  }
  finally {
    connection.close();
  }
});