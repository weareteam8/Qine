var working = function () {
  console.log("Connected - hello from script.js");
};
working();

//variables
var cockTailUrl = "https://the-cocktail-db.p.rapidapi.com/random.php";
var yumlyUrl = "https://yummly2.p.rapidapi.com/categories/list";
var MealsUrl = "https://themealdb.p.rapidapi.com/latest.php";

var vodkaLinkEl = document.querySelector("#vodka");

// // API CALL 1 COCKTAILDB
// const cockTails = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
//     "X-RapidAPI-Key": "37f2a9a7cemsh5b611bc49e7a303p1e79e6jsn6b86cc035e5d",
//   },
// };

// fetch(cockTailUrl, cockTails)
//   .then((response) => response.json())
//   .then((response) => console.log(response.drinks))
//   .catch((err) => console.error(err + "Error with Drinks"));

// //API CALL 2 YUMLY

// const yumlyMeals = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
//     "X-RapidAPI-Key": "37f2a9a7cemsh5b611bc49e7a303p1e79e6jsn6b86cc035e5d",
//   },
// };

// fetch(yumlyUrl, yumlyMeals)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// // API CALL 3 TheMealDB
// const Meals = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Host": "themealdb.p.rapidapi.com",
//     "X-RapidAPI-Key": "37f2a9a7cemsh5b611bc49e7a303p1e79e6jsn6b86cc035e5d",
//   },
// };

// fetch(MealsUrl, Meals)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
//functions
