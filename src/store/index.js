// Create a new store instance.
export default {
  state() {
    return {
      recipes: [
        {
          id: 1,
          brewer: "Aeropress",
          author: "Szymon Podstufka",
          amountOfCoffee: 18,
          grindSize: "Medium",
          amountOfWater: 200,
          recipeDetails:
            "Add coffee: Add 18g coffee to inverted AeroPress. Pour water: Start timer and pour 200g water within 10 seconds. Stir: Stir back to front gently 5 times. Allow to brew: Remove lid from kettle and leave kettle off the base. Attach filter cap: Attach Filter cap and press out air.",
          recipeName: "The basic one",
          favouriteOf: [],
        },
        {
          id: 2,
          brewer: "V60",
          author: "Natalia Podstufka",
          amountOfCoffee: 21,
          grindSize: "Medium-coarse",
          amountOfWater: 350,
          recipeDetails:
            "Add 21 grams of coffee to preheated brewer. Make a well inside of the coffee bed and start pouring approx. 45 g of water. Swirl until all water is incorporated into the coffee and there are no dry pockets. At 0:45 start pouring to get 60% of the water (around 210 grams) until 1:15. Slow down and pour the rest of the water in next 30 seconds.",
          recipeName: "The James Hoffmann Masterclass",
          favouriteOf: [],
        },
        {
          id: 3,
          brewer: "Other",
          author: "Tim Wendelboe",
          amountOfCoffee: 35,
          grindSize: "Coarse",
          amountOfWater: 500,
          recipeDetails:
            "Pre-heat your French press by pouring hot water into it. Discard this water right before you start brewing.  Using a pair of scales, measure your coffee. The rule of thumb is 65 – 70 grams per 1 litre of water. The dose will vary according to your taste and the coffee used.  3Grind the coffee. We recommend to use a coarseness of the grind similar to filter ground or slightly finer to make sure you extract enough. A coarse grind will lead to sour and weak coffees and will not necessarily prevent sediments to get in to your cup. This is because fine particles (fines) are produced during the grinding process regardless of the grind setting. Again by using your scales, place the french press containing the ground coffee on the scales. Then, tare the scale so it reads zero and measure1 litre (963 grams at seal level) of boiling water. It is important to ensure all the ground coffee is wet. A good way to do this is to pour half of the water first, then stir a little, then pour the rest of the water. Do not put the lid / plunger on top. Let the coffee steep between 4 and 5 minutes. Very close to when the brew time has expired, using a spoon, gently push all the ground coffee so it falls to the bottom of the French press and stir 3-5 times making sure all the grounds are stirred. Then remove the the pale floating foam from the surface – this results in a cleaner tasting cup. After removing the foam place the lid and the plunger on the french press and  plunge away. It should be nice and easy to press down. Wait 1-5 minutes before you pour the coffee in to your cup or dispense to a thermos. Believe me, this makes the coffee a lot cleaner in taste as sediments will settle to the bottom of the french press. Make sure you stop poring when you see grounds and sediments appearing. Let the coffee cool to a comfortable drinking temperature and enjoy! And don’t forget to clean the french press after use. All parts need to be spotless for the best results.",
          recipeName: "How to Brew French Press Coffee",
          favouriteOf: [],
        },
        {
          id: 4,
          brewer: "Aeropress",
          author: "Sigit Tri",
          amountOfCoffee: 13,
          grindSize: "Coarse",
          amountOfWater: 180,
          recipeDetails:
            "Prep your aeropress in inverted position. Add your coffee ground. Blooming - add 30g water, stir 5x, wait until 30s. At 30s, pour water until 180gr then stir again 5x. Wait until 1:30. Flip your AeroPress and press slowly for 1 minute - should finish at around 02:30. Wait 20-30 seconds, then serve and enjoy!",
          recipeName: "13g that makes you happy",
          favouriteOf: [],
        },
      ],
      users: [{ login: "szymonp1992", password: "loleklol" }],
      loggedIn: false,
      loggedInUser: null,
    };
  },
  getters: {
    allRecipes(state) {
      return state.recipes;
    },
    allUsers(state) {
      return state.users;
    },
    isLoggedIn(state) {
      return state.loggedIn;
    },
    loggedInUser(state) {
      return state.loggedInUser;
    },

  },
  mutations: {
    addRecipe(state, payload) {
      state.recipes.push(payload);
    },
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    },
    updateLoggedInUser(state, payload) {
      state.loggedInUser = payload;
    },
    addToFavorites(state, payload) {
      const index = state.recipes.findIndex(recipe => recipe.recipeName === payload.recipeName);
      state.recipes[index].favouriteOf.push(payload.user);
    },
    removeFromFavorites(state, payload) {
      const recipeIndex = state.recipes.findIndex(recipe => recipe.recipeName === payload.recipeName);
      const favouredByIndex = state.recipes[recipeIndex].favouriteOf.findIndex(user => user === payload.user);
      state.recipes[recipeIndex].favouriteOf.splice(favouredByIndex, 1);
    }
  },
  actions: {
    addRecipe(context, payload) {
      context.commit("addRecipe", payload);
    },
    logIn(context) {
      context.commit("logIn");
    },
    logOut(context) {
      context.commit("logOut");
    },
    updateLoggedInUser(context, payload) {
      context.commit("updateLoggedInUser", payload);
    },
    addToFavorites(context, payload) {
      context.commit("addToFavorites", payload);
    },
    removeFromFavorites(context, payload) {
      context.commit("removeFromFavorites", payload)
    }
  },
};

// [ ] form validation
// [ ] some cool animations for buttons and page rendering
// [ ] firebase for keeping the data there
// [ ] password security?
