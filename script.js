// Функция для вывода сообщения в консоль
function showMessage(message) {
	console.log(message)
}
// Функция для изменения цвета фона
function changeBackgroundColor(color) {
	document.body.style.backgroundColor = color
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
	const element = document.querySelector(selector)
	if (element) {
		const currentDisplay = getComputedStyle(element).display
		element.style.display = currentDisplay === 'none' ? 'block' : 'none'
	} else {
		console.warn(`Элемент с селектором "${selector}" не найден.`)
	}
}


function updateHeaderFromUTM() {
	const params = new URLSearchParams(window.location.search)
	const utmTerm = params.get('utm_term')
	const header = document.querySelector('h1')

	if (header && utmTerm) {
		header.textContent = utmTerm
	}
}

// Функция для вывода текущего времени
function logCurrentTime() {
	const now = new Date()
	const formattedTime = now.toTimeString().split(' ')[0] // "ЧЧ:ММ:СС"
	console.log(`Текущее время: ${formattedTime}`)
}

// Функция для сброса цвета фона на белый
function resetBackgroundColor() {
	document.body.style.backgroundColor = 'white'
}

// Вызов функций
showMessage('Скрипт загружен!')
logCurrentTime()

// Обработчик события DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
	resetBackgroundColor()
	changeBackgroundColor('lightblue')
	toggleVisibility('.content')
	updateHeaderFromUTM()
})

document.querySelector('h1').addEventListener('click', () => {
	alert('Вы кликнули на заголовок - так держать!')
})
document.getElementById('nikolay').addEventListener('mouseover', event => {
	event.target.style.width = '220px'
	event.target.style.height = '220px'
})


document.getElementById('nikolay').addEventListener('mouseout', event => {
	event.target.style.width = '200px'
	event.target.style.height = '200px'
})


document.getElementById('nikolay').addEventListener('click', event => {
	event.target.src = 'photo/СИЛАЧ.jpg' 
})


document.getElementById('nikolay').addEventListener('dblclick', () => {
	alert('Не налегай, у меня не так много любимых преподавателей')
})
document.querySelector('p').addEventListener('click', function () {
	this.style.transition = 'background-color 0.5s ease'
	this.style.backgroundColor =
		this.style.backgroundColor === 'white' ? 'blue' : 'white'
})