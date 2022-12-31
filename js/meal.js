const loadMeal = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  // console.log(meals);
  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";
  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h1>${meal.strTags}</h1>
      <h2>${meal.strCategory}</h2>
      <h3>${meal.strArea}</h3>
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">
        ${meal.strInstructions.slice(0, 240)}
      </p>
      <button class="bg-success text-white" onclick="loadMealDetails('${
        meal.idMeal
      }')">SHOW DETAILS</button>
    </div>
  </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
};

const searchMeal = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  loadMeal(searchText);
  searchField.value = "";
};

const loadMealDetails = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayShowDetails(data.meals[0]));
};

const displayShowDetails = (meal) => {
  console.log(meal);
  const mealsDetails = document.getElementById("meals-details");
  mealsDetails.innerHTML = "";
  const mealDiv = document.createElement("div");
  mealDiv.classList.add("card");
  mealDiv.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
  <h1>${meal.strTags}</h1>
  <h2>${meal.strCategory}</h2>
  <h3>${meal.strArea}</h3>
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">
    ${meal.strInstructions.slice(0, 240)}
  </p>
    <a href="${meal.strYoutube}" class="btn btn-success">Go somewhere</a>
  </div>
  `;
  mealsDetails.appendChild(mealDiv);
};

loadMeal("fish");
