import { loadQuotes } from "./quoteManagement.js"

document.addEventListener("DOMContentLoaded", async () => {
  const quotes = await loadQuotes()
  console.log(quotes)

  quotes.forEach(quote => {const quoteCard = newQuoteCard()})
  function newQuoteCard(){
    const card = document.createElement('div')
    card.className = 'quote-card'
    card.dataset.id = quotes.id
    
    const p = document.createElement('p')
    p.className = 'author'
    card.append(p)
    
    const divBtn = document.createElement('div')
    divBtn.className = 'actions'
    
    const editBtn = document.createElement('button')
    edit.className = 'edit'
    edit.textContent = 'Edit'
    divBtn.append(editBtn)

    const deleteBtn = document.createElement('button')
    edit.className = 'delete'
    edit.textContent = 'Delete'
    divBtn.append(deleteBtn)
  }

})
 