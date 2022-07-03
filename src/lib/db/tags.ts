import mongoose, { Model } from 'mongoose';

export interface ITag {
	title: string;
}

const tagSchema = new mongoose.Schema<ITag>({
	title: String
});

const Tag: Model<ITag> = mongoose.models.Tags || mongoose.model('Tags', tagSchema);
export default Tag;
