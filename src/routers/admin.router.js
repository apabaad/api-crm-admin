import express from 'express';
import { hashPassword } from '../helpers/bcrypt.helper.js';
import { newAdminUserFormValidation } from '../middlewares/formValidation.middleware.js';
import { createAdminUser } from '../modals/user/User.modal.js';

const Router = express.Router();

// get admin
Router.get('/', (req, res) => {
  res.send('from get method');
});

// create an admin user
Router.post('/', newAdminUserFormValidation, async (req, res, next) => {
  try {
    const { password } = req.body;
    req.body.password = hashPassword(password);

    const user = await createAdminUser(req.body);
    console.log(user);

    user._id
      ? res.json({
          status: 'success',
          message: 'Admin user created successfully',
        })
      : res.json({
          status: 'error',
          message: 'Error, unable to create an account.',
        });
  } catch (error) {
    if (error.message.includes('E11000 duplicate key error collection')) {
      error.status = 200;
      error.message = 'Email already exists';
    }
    next(error);
  }
});

//patch to update single object, put to update all
Router.patch('/', (req, res) => {});
Router.put('/', (req, res) => {});

// delete admin user
Router.delete('/', (req, res) => {});

export default Router;
