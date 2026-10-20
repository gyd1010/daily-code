let todos = JSON.parse(localStorage.getItem('todos')) || []
let filter = 'all'
const box = document.querySelector('.box')
const input = document.querySelector('.input-box input')
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const text = input.value.trim();
    if (text === '') {
      return
    }
    todos.push({
      text: text,
      completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    input.value = ''
    render()
  }
})
const arrow = document.querySelector('.arrow')

arrow.addEventListener('click', function () {
  const allCompleted = todos.length > 0 && todos.every(function (todo) {
    return todo.completed === true
  })

  todos.forEach(function (todo) {
    todo.completed = !allCompleted
  })

  localStorage.setItem('todos', JSON.stringify(todos))
  render()
})
function updateFilter() {
  const filters = document.querySelectorAll('.filter span')
  filters.forEach(function (item) {
    item.classList.remove('active')
  })

  if (filter === 'all') {
    filters[0].classList.add('active')
  }

  if (filter === 'active') {
    filters[1].classList.add('active')
  }

  if (filter === 'completed') {
    filters[2].classList.add('active')
  }

  if (filter === 'clear') {
    filters[3].classList.add('active')
  }
}
function render() {
  const oldTodos = document.querySelectorAll('.todo-item')
  oldTodos.forEach(function (item) {
    item.remove()
  })
  const footer = document.querySelector('.footer')
  const arrow = document.querySelector('.arrow')
  if (todos.length === 0) {
    footer.style.display = 'none'
    arrow.style.visibility = 'hidden'
  } else {
    footer.style.display = 'flex'
    arrow.style.visibility = 'visible'
  }
  const allCompleted = todos.length > 0 && todos.every(function (todo) {
    return todo.completed === true
  })

  if (allCompleted) {
    arrow.classList.add('all-completed')
  } else {
    arrow.classList.remove('all-completed')
  }
  const filteredTodos = todos.filter(function (todo) {
    if (filter === 'all') {
      return true
    }
    if (filter === 'active') {
      return todo.completed === false
    }
    if (filter === 'completed') {
      return todo.completed === true
    }
    if (filter === 'clear') {
      return true
    }
  })
  filteredTodos.forEach(function (todo) {
    const item = document.createElement('div')
    item.className = todo.completed ? 'todo-item completed' : 'todo-item'
    item.innerHTML = `
    <input type="checkbox" class="toggle" ${todo.completed ? 'checked' : ''}>
    <span class="check-icon">&#xea10;</span>
    <span class="text">${todo.text}</span>
    <span class="delete"></span>
    `
    const toggle = item.querySelector('.toggle')
    const deleteButton = item.querySelector('.delete')
    deleteButton.addEventListener('click', function () {
      const index = todos.indexOf(todo)
      todos.splice(index, 1)
      localStorage.setItem('todos', JSON.stringify(todos))
      render()
    })
    toggle.addEventListener('change', function () {
      todo.completed = toggle.checked
      localStorage.setItem('todos', JSON.stringify(todos))
      render()
    })
    box.insertBefore(item, footer)
  })
  const count = document.querySelector('.footer > span')
  const activeCount = todos.filter(function (todo) {
    return todo.completed === false
  }).length
  count.textContent = `${activeCount} item${activeCount === 1 ? '' : 's'} left`
  updateFilter()
}
const filters = document.querySelectorAll('.filter span')
filters[0].addEventListener('click', function () {
  filter = 'all'
  render()
})
filters[1].addEventListener('click', function () {
  filter = 'active'
  render()
})
filters[2].addEventListener('click', function () {
  filter = 'completed'
  render()
})
filters[3].addEventListener('click', function () {
  todos = todos.filter(function (todo) {
    return todo.completed === false
  })
  localStorage.setItem('todos', JSON.stringify(todos))
  filter = 'clear'
  render()
})

render()