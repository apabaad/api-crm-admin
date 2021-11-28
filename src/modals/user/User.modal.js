import AdminUserSchema from './User.schema.js';

// create user
export const createAdminUser = (userObj) => {
  return AdminUserSchema(userObj).save();
};

//get user by id
export const getAdminUserById = (_id) => {
  return AdminUserSchema.findById(_id);
};

//get one user by filter
export const getAdminUser = (filter) => {
  return AdminUserSchema.findOne(filter); // findone returns object
};

//get all users by filter
export const getAllAdminUsers = (filter) => {
  return AdminUserSchema.find(filter); //find returns array even u have 1 data
};

// update user
export const updateAdminUser = (filter, obj) => {
  return AdminUserSchema.findOneAndUpdate(filter, obj);
};

//delete user
export const deleteAdminUser = (filter) => {
  return AdminUserSchema.findOneAndDelete(filter);
};
