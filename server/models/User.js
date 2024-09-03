import mongoose from 'mongoose';
import { type } from 'os';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age:{
    type:Number,
    required:true,
  },
  gender:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage:{
    type: String,
    default: ''
  }
  
  
});

const User = mongoose.model('User', UserSchema);
export default User;

