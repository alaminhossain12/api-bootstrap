const loadMeal = () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
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
    console.log(meal);
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
    </div>
  </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
};

loadMeal();
