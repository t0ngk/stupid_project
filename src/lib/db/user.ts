import mongoose, { Model } from 'mongoose';

interface IUser {
	username: string;
	password: string;
}

const userSchema = new mongoose.Schema<IUser>({
	username: String,
	password: String
});

const User: Model<IUser> = mongoose.model('Users', userSchema);
export default User;
