import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AdminUserSchema = new Schema(
  {
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    fName: {
      type: String,
      required: true,
      maxLength: 30,
    },
    lName: {
      type: String,
      required: true,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      maxLength: 100,
      indexes: 1,
      unique: true,
    },
    phone: {
      type: String,
      //   required: true,
      maxLength: 15,
    },
    password: {
      type: String,
      required: true,
      maxLength: 500,
    },
    role: {
      type: String,
      required: true,
      maxLength: 30,
      default: 'developer', //admin, developer, user, customerService
    },
  },
  {
    timestamps: true,
  }
);

export default Schema.model('Admin_user', AdminUserSchema);
