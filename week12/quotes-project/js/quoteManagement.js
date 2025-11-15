//CRUD on quotes
import { getItems } from "./myLib/fetchUtils.js"

//GET Quotes
async function loadQuotes() {
  try {
    const quotes = await getItems(`${import.meta.env.VITE_APP_URL}/quotes`)
    console.log(quotes)
    return quotes
  } catch (error) {
    alert(error)
  }
}
//Create Quote
//Edit Quote
//Delete Quote

export { loadQuotes }