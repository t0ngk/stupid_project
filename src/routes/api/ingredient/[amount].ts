import type { RequestEvent, RequestHandler } from "@sveltejs/kit";
import Ingredient from '$lib/db/ingredients';

export const get: RequestHandler = async (event: RequestEvent) => {
  const ingredients = await Ingredient.find();
  const amount = parseInt(event.params.amount);

  function inRandom(amount = 1) {
    const result = [];
    for (let i = 0; i < amount; i++) {
      result.push(ingredients[Math.floor(Math.random() * ingredients.length)]);
    }
    return result;
  }

  return {
    status: 200,
    body: {
      data: inRandom(amount),
    }
  }
}
