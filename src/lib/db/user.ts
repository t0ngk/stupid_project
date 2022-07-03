import mongoose, { Model } from 'mongoose';

export interface IUser {
	username: string;
	password: string;
}

const userSchema = new mongoose.Schema<IUser>({
	username: String,
	password: String
});

const User: Model<IUser> = mongoose.models.Users || mongoose.model('Users', userSchema);
export default User;
