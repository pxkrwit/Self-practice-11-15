// --- ข้อที่ 1: Password Matcher ---
function passwordMatcher() {
  const setup = () => {
    const p2 = document.getElementById('pass2')
    p2.addEventListener('input', checkMatch)
    document.getElementById('pass1').addEventListener('input', checkMatch)
  }

  const checkMatch = () => {
    const p1 = document.getElementById('pass1').value
    const p2 = document.getElementById('pass2').value
    const msg = document.getElementById('msg-match');

    if (p1 === '' || p2 === '') {
        msg.textContent = ''
    } else if (p1 === p2) {
        msg.textContent = 'Password is match'
        msg.style.color = 'green'
    } else {
        msg.textContent = 'Password not match'
        msg.style.color = 'red'
    }
  }

  return { setup, checkMatch }
}

function priceCalculator() {
  const setup = () => {
    const inputQty = document.getElementById('qty')
    inputQty.addEventListener('input', calculate)
  }

  const calculate = () => {
    const input = document.getElementById('qty')
    const display = document.getElementById('total-price')
    const pricePerUnit = 100
    
    let quantity = parseInt(input.value)

    if (isNaN(quantity) || quantity < 0) {
        quantity = 0
    }

    const total = quantity * pricePerUnit
    display.textContent = total
  }

  return { setup, calculate }
}

function fontResizer() {
  let currentSize = 16

  const setup = () => {
    const btnInc = document.getElementById('btn-inc')
    const btnDec = document.getElementById('btn-dec')
    
    btnInc.addEventListener('click', () => updateSize(2))
    btnDec.addEventListener('click', () => updateSize(-2))
  }

  const updateSize = (amount) => {
    const text = document.getElementById('content-text')
    const newSize = currentSize + amount

    if (newSize >= 10 && newSize <= 30) {
        currentSize = newSize
        text.style.fontSize = currentSize + 'px'
    } else {
        alert('font size must be between 10px - 30px')
    }
  }

  return { setup, updateSize };
}

function termsChecker() {
  const setup = () => {
    const checkbox = document.getElementById('accept-terms')
    checkbox.addEventListener('change', toggleButton)
  }

  const toggleButton = () => {
    const checkbox = document.getElementById('accept-terms')
    const btn = document.getElementById('submit-btn')

    if (checkbox.checked) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
  }

  return { setup, toggleButton }
}

function evenOddChecker() {
  const setup = () => {
    const btn = document.getElementById('check-even-odd-btn')
    btn.addEventListener('click', checkNumber)
  }

  const checkNumber = () => {
    const input = document.getElementById('num-input')
    const result = document.getElementById('result-box')
    const num = parseInt(input.value)

    if (isNaN(num)) {
        result.textContent = 'Plase enter number'
        result.style.backgroundColor = 'transparent'
        return
    }

    if (num % 2 === 0) {
        result.textContent = num + ' it is a even number'
        result.style.backgroundColor = '#d4edda'
        result.style.color = '#155724'
    } else {
        result.textContent = num + ' it is a odd number'
        result.style.backgroundColor = '#f8d7da'
        result.style.color = '#721c24'
    }
  }

  return { setup, checkNumber }
}
function charCounter() {
  const maxLimit = 50;

  const setup = () => {
    const textarea = document.getElementById('msg-input');
    textarea.addEventListener('input', updateCount);
  }

  const updateCount = () => {
    const textarea = document.getElementById('msg-input')
    const display = document.getElementById('char-remaining')
    
    const currentLength = textarea.value.length
    const remaining = maxLimit - currentLength

    display.textContent = remaining

    if (remaining < 0) {
        display.style.color = 'red'
        display.style.fontWeight = 'bold'
    } else {
        display.style.color = 'black'
        display.style.fontWeight = 'normal'
    }
  }

  return { setup, updateCount };
}

function colorSlider() {
  const colors = ['red', 'blue', 'green', 'orange', 'purple']
  let currentIndex = 0

  const setup = () => {
    const btn = document.getElementById('next-color-btn')
    btn.addEventListener('click', changeColor)
  }

  const changeColor = () => {
    const box = document.getElementById('color-box')
    
    currentIndex++;
    if (currentIndex >= colors.length) {
        currentIndex = 0;
    }

    box.style.backgroundColor = colors[currentIndex]
  }

  return { setup, changeColor }
}

function todoList() {
  const setup = () => {
    const btn = document.getElementById('add-todo-btn')
    btn.addEventListener('click', addItem)
  }

  const addItem = () => {
    const input = document.getElementById('todo-input')
    const list = document.getElementById('todo-list')
    const text = input.value

    if (text === '') {
        alert('กรุณาพิมพ์รายการก่อน')
        return
    }

    const newItem = document.createElement('li')
    newItem.textContent = text
    list.appendChild(newItem)

    input.value = ''
  }

  return { setup, addItem }
}

function currencyConverter() {
  const rate = 35

  const setup = () => {
    const btn = document.getElementById('convert-btn')
    btn.addEventListener('click', convert)
  }

  const convert = () => {
    const input = document.getElementById('usd-input')
    const display = document.getElementById('thb-result')
    const usd = parseFloat(input.value)

    if (isNaN(usd) || usd < 0) {
        display.textContent = 'กรุณาใส่จำนวนเงินที่ถูกต้อง'
        display.style.color = 'red'
    } else {
        const thb = usd * rate;
        display.textContent = thb.toFixed(2)
        display.style.color = 'black'
    }
  }

  return { setup, convert };
}

function themeToggler() {
  const setup = () => {
    const btn = document.getElementById('theme-toggle-btn')
    btn.addEventListener('click', toggleTheme)
  }

  const toggleTheme = () => {
    const body = document.getElementById('main-body')
    const btn = document.getElementById('theme-toggle-btn')

    body.classList.toggle('dark-mode')

    if (body.classList.contains('dark-mode')) {
        btn.textContent = 'เปลี่ยนเป็น Light Mode'
    } else {
        btn.textContent = 'เปลี่ยนเป็น Dark Mode'
    }
  }

  return { setup, toggleTheme };
}


const app1 = passwordMatcher()
app1.setup()

const app2 = priceCalculator()
app2.setup()

const app3 = fontResizer()
app3.setup()

const app4 = termsChecker()
app4.setup()

const app5 = evenOddChecker()
app5.setup()

const app6 = charCounter()
app6.setup()

const app7 = colorSlider()
app7.setup()

const app8 = todoList()
app8.setup()

const app9 = currencyConverter()
app9.setup()

const app10 = themeToggler()
app10.setup()