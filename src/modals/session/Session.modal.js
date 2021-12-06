import SchemaSchema from './Session.schema.js';

// create token
export const storeAccessJWT = (userObj) => {
  return SchemaSchema(userObj).save();
};

//get user by id
export const getAccessJWT = (filter) => {
  return SchemaSchema.findOne(filter);
};

//delete user
export const deleteSessionToken = (filter) => {
  return SchemaSchema.findOneAndDelete(filter);
};
