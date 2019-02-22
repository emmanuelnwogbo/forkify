import axios from 'axios';

async function getResult(query) {
  const key = `aab5372034a011d2e22680ec60e6bdd6`;
  try {
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
     alert(error) 
  }
}

getResult('orange');