/* Configuration env
Here exports an object with configuration settings. 
The production variables are the "process.env.(...)"
We can have here all the project process.env's, like
JWT token, AUTH, extra services...
*/
 
module.exports = {
  PORT: process.env.PORT || 3000,
  DB: process.env.DB || 'mongodb://localhost:27017/node-mongo-api',
  useNewUrlParser: true
}