import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: String,
	password: String
});

const User = new mongoose.Model('Users', userSchema);
export default User;
