import mongoose from "mongoose";
const schema = mongoose.Schema;

const ingredientsSchema = new schema({
  ingredient_name: String,
  ingredient_type: String,
  ingredient_band: String,
});

const IngredientsModel = mongoose.model("Ingredients", ingredientsSchema);
export default IngredientsModel;
