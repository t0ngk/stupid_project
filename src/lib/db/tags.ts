import mongoose, { Model } from 'mongoose';

interface ITag {
	title: string;
}

const tagSchema = new mongoose.Schema<ITag>({
	title: String
});

const Tag: Model<ITag> = mongoose.model('Tags', tagSchema);
export default Tag;
