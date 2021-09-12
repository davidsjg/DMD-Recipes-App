const mongoose = require("mongoose");
const db = require("../models");

// This file empties the destination collection and inserts the destinations below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/DMDrecipesDB");

const recipeSeed = [
  {
    name: "Monster Cinnamon Rolls",
    book: "The Last Suppers",
    ingredients: [
      "unsalted butter",
      "milk",
      "sugar",
      "salt",
      "yeast",
      "warm water",
      "eggs",
      "flour",
      "brown sugar",
      "butter",
      "cinnamon",
      "cream cheese",
      "whipping cream",
      "vanilla extract",
      "powdered sugar",
    ],
    quantities: [
      "3/4 cups (1 1/2 sticks) unsalted",
      "1 cup",
      "3/4 cup plus 1 teaspoon",
      "1 1/4 teaspoons",
      "3-1/4 ounce envelopes (7.5 tsp) active dry",
      "1/2 cup warm",
      "5 large",
      "8 1/2 to 9 1/2 cups all-purpose",
      "8 cups firmly packed",
      "1 1/4 cups (2 1/2 sticks) unsalted",
      "3 tablespoons ground",
      "1/2 pound softened",
      "1/4 cup whipping cream",
      "1 teaspoon",
      "3 to 4 cups sifted",
    ],
    course: "breakfast",
    glutenFree: false,
    lowCarb: false,
    instructions: `For the DOUGH, heat the butter with the milk, 1/4 cup of the sugar, and the salt in a small saucepan until the butter is melted. Set aside to cool. In a large mixing bowl, sprinkle the yeast over the warm water, add the remaining teaspoon sugar, stir, and set aside for 10 minutes, until the mixture is bubbly. Add the lukewarm milk mixture and the eggs and beat until well combined. Add the flour a cup at a time, stirring and using enough flour to form a stiff dough. Turn out on a floured board and knead until smooth and satiny, approximately 10 minutes. Place the dough in a very large buttered bowl, turn to butter the top, and allow to rise, covered loosely with a kitchen towel, in a warm place until doubled in bulk, approximately 1 hour. Punch the dough down and roll out to a large rectangle, 24 inches by 36 inches.

    Butter two 9x13 inch glass baking dishes. For the FILLING, beat together the brown sugar, butter, and cinnamon until well combined. Spread evenly over the surface of the dough. Roll up lengthwise and cut at 2-inch intervals to make 12 rolls. Place 6 rolls in each buttered dish. Cover loosely with a kitchen towel and allow to rise until doubled in bulk, about 1 hour. (Refrigerate overnight after covering with kitchen towel if you want to bake them the next morning. They will rise in the fridge).
    
    Preheat the oven to 350° F. Bake the rolls for about 20 to 30 minutes (40 if they go into the oven from the fridge) or until puffed and browned. Cool to room temperature on racks.
    
    For the FROSTING, beat the cream cheese, cream, and vanilla until well combined. Add the sugar and beat until smooth and soft, not stiff. Frost the rolls and serve immediately.
    Makes 12 large rolls.`,
  },

  {
    name: "Almond Poppy Seed Muffins",
    book: "The Last Suppers",
    ingredients: [
      "eggs",
      "sugar",
      "evaporated milk",
      "milk",
      "vegetable oil",
      "baking powder",
      "salt",
      "flour",
      "vanilla extract",
      "almond extract",
      "poppy seeds",
    ],
    quantities: [
      "4 large",
      "2 cups",
      "1.25 cups (13 ounce can)",
      "0.25 cups",
      "2 cups",
      "3.5 teaspoons",
      "0.5 teaspoon",
      "4 cups",
      "1 teaspoon",
      "1 teaspoon",
      "0.5 cup",
    ],
    course: "breakfast",
    glutenFree: false,
    lowCarb: false,
    instructions: `Preheat the oven to 325 degrees. Line 30 muffin cups with paper liners. In a large mixing bowl, beat together the eggs, sugar, evaporated milk, milk, and vegetable oil. Sift together the baking powder, salt and flour. Gradually add the flour mixture to the egg mixture, beating until well combined. Add the extracts and poppy seeds, stirring only until well combined. Using a 1/3-cup measure, pour the batter into the muffin cups. Bake for 25 to 30 minutes or until a toothpick inserted into the center of a muffin comes out clean.
    Makes 30 muffins`,
  },

  {
    name: "Mexican Pizza",
    book: "The Last Suppers",
    ingredients: [
      "yeast",
      "water",
      "sugar",
      "salt",
      "olive oil",
      "flour",
      "olive oil and cornmeal for the pans",
      "picante sauce",
      "cheddar cheese",
    ],
    quantities: [
      "2 ¼-ounce envelopes (5 teaspoons) active dry",
      "2 cups warm",
      "1 teaspoon",
      "1 teaspoon",
      "4 teaspoons",
      "5 to 6 cups all-purpose",
      "1.5 cups",
      "6 cups grated",
    ],

    course: "main",
    glutenFree: false,
    lowCarb: false,
    instructions: `In a large mixing bowl, sprinkle the yeast over the warm water. Add the sugar, stir and set aside for 10 minutes, until the mixture is bubbly. Stir in the salt and olive oil. Beat in 5 cups of the flour, then add as much extra flour as needed to make a dough that is not too sticky to knead. Knead on a floured surface until the dough is smooth and satiny, 5 to 10 minutes. (Or place the dough in the bowl of an electric mixer and knead with a dough hook until the dough cleans the sides of the bowl, approx. 5 minutes.) Place the dough in an oiled bowl, turn to oil the op, cover with a kitchen towel, and let rise in a warm place until doubled in bulk, about 1 hour.

    Preheat the oven to 425 degreed. Brush a little olive oil over the bottom and sides of four 9- or 10- inch springform pans. Sprinkle cornmeal over the oiled bottoms and sides. Punch the dough down and divide it into quarters. Press each piece of dough out to fit the bottom of a pan, making a small collar around the edges. Spread 1/3 cup picante sauce on top of the dough circles; top each pizza with 1 ½ cups cheese. Bake for 10 to 20 minutes or until the dough is cooked through and the cheese is completely melted.
    Makes four 9- or 10 each pizzas`,
  },

  {
    name: "Canterbury Jumbles",
    book: "The Last Suppers",
    ingredients: [
      "vegetable shortening",
      "butter",
      "brown sugar",
      "eggs",
      "buttermilk",
      "vanilla",
      "flour",
      "baking soda",
      "salt",
      "coconut",
      "macadamia nuts",
      "raisins",
      "chocolate chips",
    ],

    quantities: [
      "½ cup solid",
      "½ cup (1 stick) unsalted",
      "2 cups firmly-packed dark",
      "2 large",
      "½ cup",
      "2 teaspoons",
      "3 ½ cups",
      "1 teaspoon",
      "1 teaspoon",
      "1 cup sweetened flaked",
      "1 cup coarsely chopped",
      "1 ½ cups",
      "3 cups semisweet",
    ],
    course: "dessert",
    glutenFree: false,
    lowCarb: false,
    instructions: `Preheat oven to 400 degrees. In a large mixing bowl, beat the shortening, butter and brown sugar together until smooth. Beat in the eggs, then stir in the buttermilk and vanilla. Blend the flour, baking soda and salt together in a small bowl; stir the flour mixture into the butter mixture until incorporated. Stir in the coconut, nuts, raisins and chocolate chips. Drop by level half-tablespoons onto greased cookie sheets. Bake for 7-10 minutes, until the cookies are puffed and slightly brown. Cool on a rack. The cookies keep well in an airtight tin.
    Makes 11 dozen`,
  },

  {
    name: "Lemon Butter Wafers",
    book: "The Last Suppers",
    ingredients: [
      "butter",
      "sugar",
      "eggs",
      "flour",
      "lemon zest (see notes)",
      "almonds (see notes)",
    ],
    quantities: [
      "¾ cup (1 ½ sticks) unsalted",
      "1 cup",
      "2 large",
      "1 ¼ cups sifted",
      "2 tablespoons very firmly minced",
      "1/3 cup ground",
    ],
    course: "dessert",
    glutenFree: false,
    lowCarb: false,
    instructions: `In the large bowl of an electric mixer, beat the butter until smooth and add the sugar, beating until creamy. Beat in the eggs, scraping down the sides of the bowl. Add the flour, beating just until combined. Add the lemon zest and almonds, stirring until well incorporated. Cover the bowl with plastic wrap and place in the refrigerator until well chilled, at least 3 hours. Preheat the oven to 350 degrees. Butter a non-stick cookie sheet. Using a ½ tablespoon measure, spoon out level ½ tablespoons of chilled cookie dough onto the cooking sheet, placing them 3 inches apart. Bake for about 10 minutes or until the cookies have just flattened and are lightly browned around the edges. Cool the cookies on racks. Stir in a covered tin. Makes 64 cookies 
      
      Note: It is best to grind the almonds an mince the lemon zest in a small electric grinder such as a clean coffee grinder. The result is superior to that obtained with an ordinary food processor. 
      
      Variation: Spread 1 tablespoon best quality seedless raspberry jam on the bottom of one cookie, then place the bottom of another cookie on top. This makes a delicious lemon-raspberry cookie sandwich. Makes 32.`,
  },

  {
    name: "Shrimp on Wheels",
    book: "The Last Suppers",
    ingredients: [
      "pasta",
      "salt",
      "water",
      "crab and shrimp seasoning",
      "lemon",
      "shrimp",
      "butter",
      "shallots",
      "flour",
      "chicken bouillon granules",
      "milk",
      "white wine",
      "mayonnaise",
      "mustard",
      "cheddar cheese",
      "peas",
    ],

    quantities: [
      "5 ounces wagon wheel",
      "to taste",
      "1 quart",
      "1 tablespoon",
      "¼",
      "¾ lb large deveined raw",
      "2 tablespoon unsalted",
      "2 tablespoon minced",
      "2 tablespoon",
      "1 tablespoon (dissolved in 1/4 cup boiling water)",
      "1 cup",
      "1/2 cup dry",
      "2 tablespoon best-quality",
      "1 tablespoon Dijon",
      "1 cup shredded sharp",
      "1 cup frozen baby",
    ],

    course: "main",
    glutenFree: false,
    lowCarb: false,
    instructions: `Preheat oven to 350 degrees. Butter a 2-quart casserole dish with a lid. Set aside.

    Cook the pasta in a large pot of boiling, salted water for 10-12 minutes, until al dente. Drain and set aside.
    
    In a large frying pan, bring the quart of water to a boil and add the lemon and the crab and shrimp seasoning. Add the shrimp, cook until just pink, (about 1 minute) and immediately transfer with a slotted spoon, leaving the seasoning behind, to a colander to drain. Do not over cook. Drain and peel shrimp and set aside.
    
    In another large frying pan, melt the butter over low heat and saute the shallot in it for several minutes, until limp, but not browned. Sprinkle the flour over the shallot and cook over low heat for 1-2 minutes, until the mixture bubbles. Stirring constantly, slowly add the chicken bouillon, milk and wine, stirring until thickened.
    
    Combine the mayonnaise and mustard in a small bowl. Add a small amount of the sauce to the mustard and mayonnaise and stir until smooth, then add the mixture to the sauce. Stir until heated through. Add the cheese, stirring until melted. Add the pasta, shrimp and peas and stir until well combined. Transfer the mixture to the buttered dish and bake, covered, for about 15-25 minutes or until heated through.
    Makes 4 servings`,
  },
];

db.Recipe.remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// name: "",
// book: "",
// quantities: ['','','','','','',''],
// ingredients: ['','','','','','',''],
// course: "",
// glutenFree: false,
// lowCarb: false,
