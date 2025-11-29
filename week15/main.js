function digitalClock() {
  const setup = () => {
    const btn = document.getElementById('start-clock-btn')
    btn.addEventListener('click', startClock)
  }

  const startClock = () => {
    const btn = document.getElementById('start-clock-btn')
    btn.disabled = true
    btn.textContent = "loading..."

    updateTime()

    setInterval(updateTime, 1000)
  }

  const updateTime = () => {
    const display = document.getElementById('clock-display')
    const now = new Date()
    display.textContent = now.toLocaleTimeString('th-TH')
  }

  return { setup, startClock }
}

function dayCalculator() {
  const setup = () => {
    const btn = document.getElementById('calc-days-btn')
    btn.addEventListener('click', calculateDifference)
  }

  const calculateDifference = () => {
    const inputDate = document.getElementById('target-date').value
    const display = document.getElementById('result-days')

    if (!inputDate) {
        display.textContent = "Please select date"
        display.className = "error"
        return
    }

    const target = new Date(inputDate)
    const today = new Date()
    
    today.setHours(0,0,0,0)
    target.setHours(0,0,0,0)

    const diffTime = target - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays > 0) {
        display.textContent = `เหลือเวลาอีก ${diffDays} วัน`
        display.className = "success"
    } else if (diffDays === 0) {
        display.textContent = "ถึงกำหนดวันแล้ว (วันนี้)"
        display.className = "success"
    } else {
        display.textContent = `เลยกำหนดมาแล้ว ${Math.abs(diffDays)} วัน`
        display.className = "error"
    }
  }

  return { setup, calculateDifference }
}

function userFetcher() {
  const setup = () => {
    const btn = document.getElementById('load-user-btn')
    btn.addEventListener('click', fetchData)
  }

  const fetchData = async () => {
    const nameSpan = document.getElementById('user-name')
    const emailSpan = document.getElementById('user-email')
    
    nameSpan.textContent = "Loading..."
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        if (!response.ok) throw new Error('Network response was not ok')
        
        const data = await response.json()
        
        nameSpan.textContent = data.name
        emailSpan.textContent = data.email
    } catch (error) {
        nameSpan.textContent = "Error loading data"
        emailSpan.textContent = ""
        console.error('Fetch Error:', error)
    }
  }

  return { setup, fetchData }
}

function postList() {
  const setup = () => {
    const btn = document.getElementById('load-posts-btn')
    btn.addEventListener('click', loadPosts)
  }

  const loadPosts = async () => {
    const list = document.getElementById('post-list')
    list.innerHTML = '<li>กำลังโหลดข้อมูล...</li>'

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const posts = await response.json()

        list.innerHTML = ''

        posts.forEach(post => {
            const li = document.createElement('li')
            li.innerHTML = `<strong>${post.title}</strong><br><span style="font-size:0.8em; color:gray;">ID: ${post.id}</span>`
            list.appendChild(li)
        })
    } catch (error) {
        list.innerHTML = '<li class="error">เกิดข้อผิดพลาดในการโหลด</li>'
    }
  }

  return { setup, loadPosts }
}

function activityLogger() {
  const setup = () => {
    const input = document.getElementById('log-input')
    input.addEventListener('change', addLog)
  }

  const addLog = () => {
    const input = document.getElementById('log-input')
    const list = document.getElementById('history-log')
    
    if (input.value.trim() === '') return

    const now = new Date()
    const timeString = now.toLocaleTimeString('th-TH')

    const li = document.createElement('li')
    li.textContent = `[${timeString}] : ${input.value}`
    
    list.prepend(li)
    
 
    input.value = ''
  }

  return { setup, addLog }
}


const app1 = digitalClock()
app1.setup()
const app2 = dayCalculator()
app2.setup()
const app3 = userFetcher()
app3.setup()
const app4 = postList()
app4.setup()
const app5 = activityLogger()
app5.setup()