import express from 'express';
import { comparePassword } from '../helpers/bcrypt.helper.js';
import {
  createAccessToken,
  createRefreshToken,
} from '../helpers/jwt.helper.js';
import { loginAdminUserFormValidation } from '../middlewares/formValidation.middleware.js';
import {
  createAdminUser,
  getAdminUser,
  getAllAdminUsers,
} from '../modals/user/User.modal.js';

const Router = express.Router();

// get admin
Router.get('/', (req, res) => {
  res.send('from get method');
});

// loginuser
Router.post('/', loginAdminUserFormValidation, async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // get user by email

    const user = await getAdminUser({ email });

    if (user?._id) {
      // check if password match
      const matched = comparePassword(password, user.password);
      if (matched) {
        // create tokens and store them
        const accessJWT = await createAccessToken(user._id, user.email);
        const refreshJWT = await createRefreshToken(user._id, user.email);

        // return the tokens to store in fd
        return res.json({
          status: 'success',
          accessJWT,
          refreshJWT,
        });
      }
    }

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
    next(error);
  }
});

export default Router;
