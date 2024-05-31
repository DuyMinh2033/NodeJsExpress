const mongoose = require('mongoose');

async function connect() {
    mongoose.connect('mongodb://localhost:27017/dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.log(err));
}

module.exports = connect