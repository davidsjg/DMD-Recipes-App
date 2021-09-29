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

  {
    name: "Chocolate Truffle Cheesecake",
    book: "The Last Suppers",
    ingredients: [
      "chocolate wafer cookies",
      "butter",
      "chocolate",
      "cream cheese",
      "eggs",
      "sugar",
      "Amaretto liquer",
      "vanilla extract",
      "whipping cream",
    ],

    quantities: [
      "9 ounce",
      "6 tablespoons",
      "½ pound unsweetened",
      "1 ½ pounds",
      "3 large",
      "1 cup",
      "¼ cup",
      "1 ½",
      "½",
    ],
    course: "dessert",
    glutenFree: false,
    lowCarb: false,
    instructions: `Whirl the chocolate cookies in a blender until they form crumbs. Mix with the melted butter. Press into the bottom and sides of a buttered 10-inch springform pan and refrigerate until you’re ready to fill and bake.
    Preheat the oven to 350 degrees. I n the top of a double boiler over boiling water, melt the chocolate. Set aside to cool. In the large bowl of an electric mixer, heat the cream cheese until smooth. Add the eggs and sugar and beat until well incorporated. Stir a small amount of this mixture into the chocolate to loosen. Add the chocolate mixture to the cream cheese mixture and stir well. Stir in the Amaretto, vanilla, and cream. Stir until all ingredients are well mixed.
    
    Pour the filling into the prepared crust and bake for 50 to 55 minutes or until the cheesecake is puffed slightly and no longer giggles in the center. Cool to room temperature, then refrigerate until chilled, at least 2 hours. Take the cheesecake out of the refrigerator 30 minutes before serving for ease of slicing. Remove the sides of the pan and cut with a sharp knife. If the cheesecake is hard to slice, hold a long, unflavored piece of dental floss in 2 hands and carefully saw through the cake to cut even pieces.
    Makes 16 servings`,
  },

  {
    name: "Chilean Sea Bass with Garlic, Basil and Vegetables",
    book: "The Last Suppers",
    ingredients: [
      "butter",
      "basil",
      "garlic cloves",
      "lemon juice",
      "potatoes",
      "baby carrots",
      "Chilean sea bass fillets",
      "asparagus",
    ],
    quantities: [
      "4 tablespoons unsalted",
      "4 tablespoons finely chopped fresh",
      "2 pressed",
      "2 tablespoons fresh",
      "4 red-skinned new",
      "8 baby",
      "1 ½ pounds fillets fresh boneless",
      "8 slender",
    ],
    course: "main",
    glutenFree: false,
    lowCarb: false,
    instructions: `Preheat the oven to 425 degrees. In a small bowl, beat the butter, basil, garlic, and lemon juice until well combined. Set aside. Parboil the potatoes and baby carrots for 5 minutes; drain. Divide the fillets into 4 equal portions.

    Place the fillets in a buttered 9- by 13-inch pan. Arrange the vegetables over the fish in a appealing pattern. Top each fish portion with one-fourth of the butter-garlic mixture. Cover tightly with aluminum foil. Bake for 20 to 30 minutes or until the fish flakes easily with a fork. Serve immediately.
    Makes 4 servings.`,
  },

  {
    name: "The First Wasp Latkes",
    book: "The Last Suppers",
    ingredients: ["potatoes", "butter", "olive oil", "salt and pepper"],
    quantities: [
      "4 large or 8 small",
      "2 tablespoons",
      "2 tablespoons",
      "to taste",
    ],
    course: "appetizer",
    glutenFree: false,
    lowCarb: false,
    instructions: `Grate the potatoes into a large clean kitchen towel that can be stained. Roil the potatoes up in the towel and wring to remove moisture. (It is best to do this over the sink, since it will produce a surprising amount of liquid).

    Melt the butter with the olive oil on a large griddle. Form the grated potatoes into 4 pancakes. Cook the pancakes over medium heat for about 10 minutes, until the bottom is golden brown, then flip the pancakes. Cook on the other side for about 5 minutes. Season with salt and pepper and serve plain, or with sour cream and applesauce.
    Makes 4 servings`,
  },

  {
    name: "Portobello Mushrooms Stuffed With Grilled Chicken, Pesto, and Sun Dried Tomatoes",
    book: "The Last Suppers",
    ingredients: [
      "portabello mushrooms",
      "olive oil",
      "sherry",
      "olive oil",
      "balsamic vinegar",
      "garlic",
      "chicken breast",
      "pesto",
      "sun-dried tomatoes",
    ],
    quantities: [
      "4 large",
      "5 tablespoons",
      "5 tablespoons",
      "½ cup extra virgin",
      "2 tablespoons",
      "1 clove pressed",
      "4 boneless skinless, cut in half",
      "¼ cup",
      "2 tablespoons finely chopped, drained, and patted with a paper towels if packed in oil",
    ],
    course: "main",
    glutenFree: false,
    lowCarb: false,
    instructions: `Carefully clean the mushrooms with damp paper towel and trim. Remove and chop the stems. Place the mushroom caps, tops down, and the chopped stems in a 9 by 13-inch glass-baking dish. Pour 1 tablespoon olive oil and 1 tablespoon sherry over the underside of each mushroom cap, pour the remaining olive oil and sherry over the stems. Cover and set aside to marinate at room temperature for 1 hour.

    Mix together the marinade for the chicken and pour over the chicken slices. Cover and set aside to marinate at room temperature for 1 hour.
    
    Preheat a grill. Grill the chicken quickly, about 1 to 2 minutes per side (they will be cooked further). Preheat oven to 400 degrees. Carefully spread 1-tablespoon pesto over the underside of each mushroom cap. Sprinkle 1 ½ teaspoons sun-dried tomatoes on top of each pesto-covered mushroom. Evenly distribute the marinated mushroom stems on top of the tomatoes.
    
    Place 2 slices of chicken on top. Place the stuffed mushrooms in a greased 9 by 13-inch pan. Bake for approximately 20 to 25 minutes or until heated through. Serve immediately.
    Makes 4 servings`,
  },

  {
    name: "Goldy’s Marvelous Mayonnaise",
    book: "Catering to Nobody",
    quantities: [
      "1 Large",
      "1 Tablespoon fresh",
      "1 Tablespoon",
      "½ Tablespoon dry",
      "½ Tablespoon",
      "1 Cup",
    ],
    ingredients: [
      "egg",
      "lemon juice",
      "white wine vinegar",
      "mustard",
      "salt",
      "safflower oil",
    ],
    course: "main",
    glutenFree: false,
    lowCarb: false,
    instructions: `Put the egg, juice vinegar, mustard and salt in a food processor fitted with a metal blade. Process until well blended, about 30 to 40 seconds.

    Place the oil in a small pitcher, and with the food processor running, dribble the oil into the egg mixture in a thin stream. When all the oil has been added, turn off the processor and scrape the mayonnaise from the bowl and the blade into a small bowl that can be tightly covered. Keep the mixture well chilled. It is best to use homemade mayonnaise within 24 hours.`,
  },
  {
    name: "Wild Man’s Wild Rice Salad",
    book: "Catering to Nobody",
    quantities: [
      "½ Cup raw",
      "2 Cups chicken or vegetable",
      "2 Tablespoons",
      "1 Tablespoon",
      "½ Teaspoon Dijon",
      "1 Tablespoon",
      "2 finely chopped",
      "3 diced",
      "1 small drained, seeded, and diced",
      "1/3 cup peeled and diced",
      "1 Cup washed and drained baby",
    ],
    ingredients: [
      "wild rice",
      "broth",
      "mayonnaise",
      "tarragon vinegar",
      "mustard",
      "olive oil",
      "Scallions",
      "Radishes",
      "tomato",
      "jicama",
      "spinach",
      "Salt and pepper to taste",
    ],
    course: "main",
    glutenFree: false,
    lowCarb: false,
    instructions:
      "The night before you are to serve the salad, thoroughly rinse the rice, place it in a glass bowl, and completely cover the kernels with water. Allow the rice to soak overnight.  The next morning, carefully strain the rice and discard the water. In a large pan, bring the broth to a boil and add the rice. Cover the pan and immediately lower the heat to the lowest setting. Allow the rice to cook, covered about 1 hour to 1 ¼ hours, or until the kernels have puffed and taste done (i.e., they are not chewy or hard). Drain the rice and measure it. You should have between 1 ¾ and 2 cups cooked rice. Spread the kernels out on two plates to cool completely. For the salad the kernels must be dry and cool. Pat the kernels dry with paper towels, if necessary.  In a small bowl, combine the mayonnaise, vinegar and mustard, and whisk well. Add the oil in a thin stream whisking all the while, until you have a smooth, blended dressing. In a medium-sized bowl, gently combine the cool rice kernels with the scallions, radishes, tomato, jicama, and spinach. Pour the dressing over this mixture and mix very gently. Taste and correct the seasoning. Chill at least 2 hours before serving. Turn out onto a small platter that you may line with spinach leaves, if desired. The salad must be consumed the day it is made; it does not keep well.",
  },

  {
    name: "Goldy’s Dream Cake",
    book: "Catering to Nobody",
    quantities: [
      "4 1/2 cups all-purpose",
      "1 1/2 cups",
      "1 1/2 cups well chilled, cut into 1 tbsp, unsalted",
      "1 teaspoon",
      "1 teaspoon",
      "1/2 teaspoon",
      "6 cups reserved",
      "2 large beaten",
      "1 ½ cups",
      "2 teaspoons",
      "1 pound (two 8-ounce packages) softened",
      "1/4 teaspoon",
      "½ cup",
      "2 large beaten",
      "¼ teaspoon",
      "1 cup red sieved(seeds removed)",
      "2/3 cups raw whole",
      "2 cups reserved",
    ],
    ingredients: [
      "flour",
      "sugar",
      "butter",
      "baking powder",
      "baking soda",
      "Salt",
      "crumb mixture",
      "eggs",
      "sour cream",
      "almond extract",
      "cream cheese",
      "Vanilla",
      "sugar",
      "eggs",
      "vanilla extract",
      "raspberry preserves",
      "almonds",
      "crumb mixture",
    ],
    course: "dessert",
    glutenFree: false,
    lowCarb: false,
    instructions: `Preheat the oven to 350 degrees. Butter two 9- or 10-inch spring form pans and set aside.

    In the large bowl of a food processor fitted with a steel blade, blend the flour and sugar until well combined, about 5 seconds. With the motor running, quickly drop the butter pieces through the chute, blending until the mixture resembles small, sandy crumbs, less the than a minute. Measure out 6 cups o this mixture for the cake. Measure the last 2 cups of the mixture for the topping and set aside.
    
    For the cake, gently stir the baking powder, soda and salt into the 6 cups of reserved crumb mixture. In a separate bowl, mix the beaten eggs with the sour cream and almond extract, stirring until well combined. Pour the egg mixture over the crumb mixture and stir until smooth and thick. Spread the cake batter over the bottom and up the sides of each of the prepared pans.
    
    For the filling, beat the cream cheese, sugar, eggs and vanilla extract in the large bowl of an electric mixer until smooth. Spread half of this mixture over the cake batter in each of the prepared pans. Top with cream cheese mixture in each pan with ½ cup of the sieved preserves.
    
    For the topping, whirl the raw almonds in a food processor fitted with the steel blade until chunky. Mix the almonds into the 2 cups reserved crumb mixture and sprinkle half of this mixture over the preserves layer in each pan.
    
    Bake the cakes for 45 to 55 minutes. Test with a toothpick for doneness. (All that should adhere to the toothpick is cream cheese and preserves, not cake batter. Cool the cakes thoroughly on racks, then cover with foil and refrigerate several hours or, even better, overnight. Serve in the morning with coffee, if desired.
    
    Makes 2 large cakes.`,
  },

  {
    name: "Dungeon Bars",
    book: "Catering to Nobody",
    quantities: [
      "1 cup all-purpose",
      "½ teaspoon",
      "¼ teaspoon",
      "1 cup (2 sticks) unsalted",
      "½ cup packed dark",
      "½ cup granulated",
      "2 large",
      "2 teaspoons",
      "1 cup rolled",
      "1 cup",
    ],
    ingredients: [
      "flour",
      "salt",
      "baking soda",
      "butter",
      "brown sugar",
      "sugar",
      "eggs",
      "vanilla extract",
      "oats",
      "raisins",
    ],
    course: "dessert",
    glutenFree: false,
    lowCarb: false,
    instructions: `Preheat the oven to 350 degrees. Butter a 9 x 13- inch baking pan and set aside.

    Sift together the flour, salt, and baking soda. Set aside.
    
    In a large mixing bowl, cream the butter with the sugars until the mixture is light and fluffy. Turn the mixer to low, and bet in the eggs and vanilla until well combined. Carefully stir in the flour mixture, oats, and raisins until well combined. Spread in the prepared pan (batter will be thick). Smooth the top. Bake from 20 – 30 minutes, until the batter has puffed and flattened, is brown around the edges, no longer appears wet in the center, and testes d one with a toothpick. Cool slightly. While warm, cut into 32 bars. Allow to cool completely on a rack. Serve with best quality vanilla or cinnamon ice cream.
    
    Makes 32 bars`,
  },

  {
    name: "Goldy’s Terrific Toffee",
    book: "Catering to Nobody",
    quantities: [
      "2 cups coarsely chopped",
      "2 pounds (8 sticks) unsalted",
      "2 pounds best-quality milk",
      "4 cups packed",
    ],
    ingredients: ["pecans", "butter", "chocolate", "sugar"],
    course: "dessert",
    glutenFree: false,
    lowCarb: false,
    instructions: `Note: A candy thermometer is essential for this recipe.

    Preheat the oven to 375 degrees. Spread the pecans in two 9-inch glass pie plates, and roast until the nuts have turned slightly darker and are well toasted, about 10 minutes. Stir once or twice during the roasting process to ensure even browning. Remove the pecans from the oven, spread out to cool on paper towels, and set aside until you finish the toffee.
    
    Butter two 9 x 13 inch glass pans and set aside. Unwrap the chocolate and divide between tow plates. Break all the chocolate into squares and set aside. Using a deep, heavy-bottomed pan, melt the butter with the sugar and cook over medium to medium-high heat, stirring constantly, until a candy thermometer hits 285 degrees to 290 degrees, the soft-crack stage. (Candy will be very hot: be sure to protect your skin and clothing through the cooking and pouring process.) Pour the toffee into the prepared pan and immediately place the squares of chocolate in rows across the toffee (1 pound of chocolate per pan). When the chocolate has softened, spread it to the edges of the toffee. Sprinkle 1 cup of the roasted pecans over the chocolate in each pan. Allow to cool, then cover with foil and chill.
    
    Using a large, heavy-duty knife, break the toffee into 1- to 3-inch pieces.
    
    Makes approximately 6 dozen pieces`,
  },

  {
    name: "Honey I’m Home Gingersnaps",
    book: "Catering to Nobody",
    quantities: [
      "2 cups all-purpose",
      "2 teaspoons",
      "¼ teaspoon",
      "1 ½ teaspoon ground",
      "1 teaspoon ground",
      "½ teaspoon ground",
      "¼ teaspoon freshly grated",
      "¼ cup solid vegetable",
      "½ cup (1 stick) unsalted",
      "1 cup",
      "1 large",
      "¼ cup",
      "¼ teaspoon finely minced",
    ],
    ingredients: [
      "flour",
      "baking soda",
      "salt",
      "ginger",
      "cinnamon",
      "cloves",
      "nutmeg",
      "shortening",
      "butter",
      "sugar",
      "egg",
      "honey",
      "lemon zest",
    ],
    course: "dessert",
    glutenFree: false,
    lowCarb: false,
    instructions: `Preheat the oven to 375 degrees. Butter two cookie sheets.

    Sift together the flour, soda, salt, ginger, cinnamon, cloves and nutmeg. Set aside.
    
    In a large mixer bowl, cream the shortening, butter and sugar until light and fluffy. Beat in the egg and honey until well combined. Stir in the flour mixture and the zest, stirring until well combined, with no traces of flour visible.
    
    Using a 1-tablespoon scoop, measure the cookie onto the cooking sheets, keeping them two inches apart. Do not attempt to make more than one dozen per sheet. Bake the batches one at a time, until the cookies have puffed and flattened and have a crinkly surface, 10 – 12 minutes per batch.
    
    Cool the cookies completely on racks.
    
    Makes 32 cookies`,
  },

  {
    name: "Holy Moly Guacamole",
    book: "Catering to Nobody",
    quantities: [
      "1 large or 2 small pitted and mashed",
      "1 ½ teaspoons fresh",
      "1 teaspoon freshly grated",
      "¼ teaspoon",
      "1 tablespoon",
      "¼ cup",
    ],
    ingredients: [
      "avocado (make 1 cup)",
      "lemon juice",
      "onion",
      "salt",
      "picante sauce",
      "mayonnaise",
      "Corn Chips",
    ],
    course: "appetizer",
    glutenFree: false,
    lowCarb: false,
    instructions: `Place the mashed avocado in a non-metallic bowl. Mix the juice, onion, salt, and picante sauce until well blended. Spread the mayonnaise over the top to the edges, cover the bowl, and refrigerate. At serving time, uncover the bowl and thoroughly mix in the mayonnaise. Serve with corn chips

    Makes 1 ¼ cups`,
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
// book: "Catering to Nobody",
// quantities: ['','','','','','',''],
// ingredients: ['','','','','','',''],
// course: "",
// glutenFree: false,
// lowCarb: false,
