const express = require('express');
const mongoose = require('mongoose');
const formRoutes = require('./routes/formRoutes');
const cors = require('cors');
const app = express();
app.use(cors({origin:'*'}));
app.use('/api', formRoutes);
mongoose.connect('mongodb+srv://khushisingh:khushi5716@delivery.remntj8.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Failed to connect to MongoDB Atlas', err));

  const port = 8000; // or any other port number

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  app.get('/test', (req, res) => {
    if (mongoose.connection.readyState === 1) {
      res.send('Connected to MongoDB Atlas');
    } else {
      res.send('Not connected to MongoDB Atlas');
    }
  });
