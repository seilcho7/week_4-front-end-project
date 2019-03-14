const URL1 = ""
const storageKey= "vegetarian-breakfast"
// Adds function that fetch data from api
function retrieveData1() {
    fetch(URL1)
        .then(function (response) {
            return response.json();
        })
        .then(function (actualData) {
            console.log(actualData);
        })
}

// Change URL1 depending on type of meal and dietary chosen.
function getRelevantData(meal, dietary) {
    let URL1 = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=${meal}%2C+${dietary}`;

    return URL1;
}


function accumulateRecipes(theActualData) {
    recipeArray = [
        ...Object.values(theActualData)
    ];
    storeRecipes(recipeArray);
};

function storeRecipes() {
    const jsonRecipes = JSON.stringify
    (recipeArray)
    console.log(`saving ${recipeArray.length} recipes`);

//  set that string in localStorage
localStorage.setItem(storageKey,
jsonRecipes);
}
function loadRecipes() {
    //  get the JSON string from LocalStorage
    const jsonRecipes = localStorage.getItem(storageKey);

    //  convert it back into an array 
    const arrayOfRecipes = JSON.parse(jsonRecipes);

    console.log(`loaded ${arrayOfRecipes.length}recipes`)
    // return it 
    console.log(arrayOfRecipes)
    return arrayOfRecipes

}


// Adds function that fetch data from api
function retrieveData() {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=vegetarian%2Cbreakfast", {
  headers: {
    "X-Rapidapi-Key": "8391aa4cdbmshde28ddc86fa9aecp1d4b08jsn757b24698283"
  }
})
        .then(function (response) {
            return response.json(); 
        })
        .then(accumulateRecipes)
        .then(function (actualData) {
            console.log(actualData);
        })
}

function main () {
    retrieveData() 
    loadRecipes();
    console.log(recipeArray);
    
}
main(); 