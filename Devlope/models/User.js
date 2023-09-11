
   const { Schema, model } = require('mongoose');
   
   const userSchema = new Schema(
    {
     // Define the properties of the User schema
     first: String,
     last: String,
     email: String,
     response: String,
    },
     {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and to Object.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
   );
   // Create a virtual property `fullName` that gets and sets the user's full name
userSchema
.virtual('fullName')
// Getter
.get(function () {
  return `${this.first} ${this.last}`;
})
// Setter to set the first and last name
.set(function (v) {
  const first = v.split(' ')[0];
  const last = v.split(' ')[1];
  this.set({ first, last });
  
});
   const User = model('User', userSchema);
   
   module.exports = User; 
