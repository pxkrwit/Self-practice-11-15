function charCounter() {
  function setup() {
    //write your code...
    const messageBox = document.getElementById('messageBox')
    messageBox.addEventListener('input',charCounting)
  }
  function charCounting() {
    //write your code...
    const input = document.getElementById('messageBox')
    const count = document.getElementById('charCount')
    if (input.value.length < 100) {
        count.textContent = input.value.length
        count.style.color = 'black'
    } else {
        count.textContent = input.value.length
        count.style.color = 'red'
    }
  }
  return { setup, charCounting }
}
//run on browser
const { setup, charCounting } = charCounter()
setup()