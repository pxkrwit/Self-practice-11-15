function displayPassword() {
  const setup = () => {
    //write your code...
    const checkBox = document.getElementById('togglePassword')
    checkBox.addEventListener('click', changeDisplayMode)
  }
  const changeDisplayMode = () => {
    ////write your code...
        const password = document.getElementById('password')
          if(password.type === 'password'){
            password.type = 'text'
          } else {
            password.type = 'password'
          } 
  }
  return {
    setup,
    changeDisplayMode
  }
}
//run on browser
const { setup, changeDisplayMode } = displayPassword()
setup()
//run on node.js
// module.exports = displayPassword