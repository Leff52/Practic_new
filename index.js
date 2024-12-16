// let name = prompt('Как Вас зовут? ')
// let age = prompt('Сколько Вам лет? ')
// alert(`Привет ${name}, тебе правда ${age}?`)
// console.log(`Привет ${name}, тебе правда ${age}?`)

// if (age<=18){
//     console.log('Ты малолетка!')

// }else{
//     console.log('Уффф какой взрослый')
// }

// const min = 1
// const max = 10
// const random = Math.floor(Math.random() * (max - min + 1)) + min;

//     let a = prompt('Угадай число лол? ')

// 		if (a == random) {
// 			console.log('Угадал!')
// 		}
//         else if(random<5){
//             console.log(`Число меньше 5 а точнее оно равно ${random}`)

//         }
//         else if(random > 5){
//             console.log(`Число больше 5 а точнее оно равно ${random}`)
//         }


// let first = prompt('Введите пароль ')
// let second = prompt('Введите пароль для проверки ')
// if (first != '' && second != '') {
// 	if (first == second) {
// 		console.log('Доступ разрешен')
// 	} else if (first != second) console.log('Доступ запрещен')
// } else {
// 	console.log('Вы ничего не ввели')
// }

// let a = parseFloat(prompt('Введите первое число : '))
// let b = parseFloat(prompt('Введите второе число : '))
// let znak = prompt('Введите оператор действия (+, -, *, /) : ')

// if (znak == '+'){
//     console.log(a+b)
// }
// else if(znak=='-'){
//     console.log(a - b)
// }
// else if(znak=='*'){
//     console.log(a * b)
// }
// else if(znak=='/'){
//     console.log(a / b)
// }
// else{
//     console.log('Вы ввели не верный оператор')
// }



for (let i = 1; i <= 10; i += 1) {
	console.log(i)
}
let i = 10
while (i) {
	console.log(i)
	i--
}
function OO(arr) {
	return arr.filter(element => element.startsWith('О'))
}
function par6I(arr) {
	return arr.join(', ')
}

const lectures = ['Матан', 'Основы программирования', 'Фронтенд и бэкенд']
const practics = ['ТИПок', 'ФИЗРА', 'Русский язык']
lectures.push('ОРГ')
practics.unshift('ИИ и БД')
lectures.forEach(element => console.log(element))
practics.forEach(element => console.log(element))


console.log(par6I(lectures));
console.log(par6I(practics));

let neww = OO(lectures);
console.log(par6I(neww))