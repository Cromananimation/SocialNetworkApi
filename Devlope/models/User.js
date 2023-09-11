
   const { Schema, model } = require('mongoose');
   
   const userSchema = new Schema({
     // Define the properties of the User schema
   });
   
   const User = model('User', userSchema);
   
   module.exports = User; 
