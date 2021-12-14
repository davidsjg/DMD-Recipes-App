import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import { loggerMiddleware } from "./addons/middleware";

const store = createStore(rootReducer, preloadedState, loggerMiddleware);

export default store;

let preloadedState = {
  recipe: [
    {
      name: "Monster Cinnamon Rolls",
      book: "The Last Suppers",
      ingredients: [
        "",
        "unsalted butter",
        "milk",
        "sugar",
        "salt",
        "yeast",
        "warm water",
        "eggs",
        "",
        "flour",
        "brown sugar",
        "butter",
        "",
        "cinnamon",
        "cream cheese",
        "whipping cream",
        "vanilla extract",
        "powdered sugar",
      ],
      quantities: [
        "DOUGH",
        "3/4 cups (1 1/2 sticks) unsalted",
        "1 cup",
        "3/4 cup plus 1 teaspoon",
        "1 1/4 teaspoons",
        "3-1/4 ounce envelopes (7.5 tsp) active dry",
        "1/2 cup warm",
        "5 large",
        "FILLING",
        "8 1/2 to 9 1/2 cups all-purpose",
        "8 cups firmly packed",
        "1 1/4 cups (2 1/2 sticks) unsalted",
        "FROSTING",
        "3 tablespoons ground",
        "1/2 pound softened",
        "1/4 cup whipping cream",
        "1 teaspoon",
        "3 to 4 cups sifted",
      ],
      course: "breakfast",
      glutenFree: false,
      lowCarb: false,
      instructions1: `For the DOUGH, heat the butter with the milk, 1/4 cup of the sugar, and the salt in a small saucepan until the butter is melted. Set aside to cool. In a large mixing bowl, sprinkle the yeast over the warm water, add the remaining teaspoon sugar, stir, and set aside for 10 minutes, until the mixture is bubbly. Add the lukewarm milk mixture and the eggs and beat until well combined. Add the flour a cup at a time, stirring and using enough flour to form a stiff dough. Turn out on a floured board and knead until smooth and satiny, approximately 10 minutes. Place the dough in a very large buttered bowl, turn to butter the top, and allow to rise, covered loosely with a kitchen towel, in a warm place until doubled in bulk, approximately 1 hour. Punch the dough down and roll out to a large rectangle, 24 inches by 36 inches.`,
      instructions2: `Butter two 9x13 inch glass baking dishes. For the FILLING, beat together the brown sugar, butter, and cinnamon until well combined. Spread evenly over the surface of the dough. Roll up lengthwise and cut at 2-inch intervals to make 12 rolls. Place 6 rolls in each buttered dish. Cover loosely with a kitchen towel and allow to rise until doubled in bulk, about 1 hour. (Refrigerate overnight after covering with kitchen towel if you want to bake them the next morning. They will rise in the fridge).`,
      instructions3: `Preheat the oven to 350° F. Bake the rolls for about 20 to 30 minutes (40 if they go into the oven from the fridge) or until puffed and browned. Cool to room temperature on racks.`,
      instructions4: `For the FROSTING, beat the cream cheese, cream, and vanilla until well combined. Add the sugar and beat until smooth and soft, not stiff. Frost the rolls and serve immediately.
        Makes 12 large rolls.`,
    },
  ],
};
