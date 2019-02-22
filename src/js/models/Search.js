import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = `aab5372034a011d2e22680ec60e6bdd6`;
    try {
      const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.results = res.data.recipes;
      console.log(this.results);
    } catch (error) {
       alert(error) 
    }
  }
}