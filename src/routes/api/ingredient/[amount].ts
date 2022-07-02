import type { RequestEvent, RequestHandler } from "@sveltejs/kit";
import Ingredient from '$lib/db/ingredients';

export const post: RequestHandler = async (event: RequestEvent) => {
  const ingredients = await Ingredient.find();
  const amount = parseInt(event.params.amount);
  const resBody = await event.request.json();

  if (!resBody.restictions) {
    resBody.restictions = [];
  }

  function inRandom(amount = 1) {
    const result = [];
    for (let i = 0; i < amount; i++) {
      let item = ingredients[Math.floor(Math.random() * ingredients.length)];
      while (resBody.restictions.includes(item.category)) {
        item = ingredients[Math.floor(Math.random() * ingredients.length)];
      }
      result.push(item);
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
