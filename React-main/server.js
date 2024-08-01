const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const mongoose = require('mongoose');
const app = require('./app');

const dbName = 'natours';

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then((con) => {
    console.log('database connected')
    console.log(con.connection.name);
    })
  .catch((err) => console.log(err.message));




const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app running on port ${port}`)
});
