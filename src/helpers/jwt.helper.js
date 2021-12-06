import jwt from 'jsonwebtoken';
import { storeAccessJWT } from '../modals/session/Session.modal.js';
import { updateAdminUser } from '../modals/user/User.modal.js';

export const createAccessToken = async (_id, email) => {
  const accessJWT = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15m',
  });
  const tokenObj = {
    userId: _id,
    token: accessJWT,
  };

  const result = await storeAccessJWT(tokenObj);
  return result?.token;
};
export const createRefreshToken = async (_id, email) => {
  const refreshJWT = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '30d',
  });
  const filter = {
    _id,
  };
  const tokenObj = {
    'refreshJWT.token': refreshJWT,
    'refreshJWT.addedAt': Date.now(),
  };
  const result = await updateAdminUser(filter, tokenObj);
  return result?.refreshJWT?.token;
};
