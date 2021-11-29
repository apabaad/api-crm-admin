import express from 'express';

const Router = express.Router();

// get admin
Router.get('/', (req, res) => {
  res.send('from get method');
});

// create an admin user
Router.post('/', (req, res, next) => {
  try {
    res.json({
      status: 'success',
      message: 'Admin user created successfully',
    });
  } catch (error) {
    next(error);
  }
});

//patch to update single object, put to update all
Router.patch('/', (req, res) => {});
Router.put('/', (req, res) => {});

// delete admin user
Router.delete('/', (req, res) => {});

export default Router;
