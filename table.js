
document.getElementById('changePractices').addEventListener('click', () => {
	const practicesTable = document.getElementById('practices')
	const tbody = practicesTable.querySelector('tbody')


	tbody.innerHTML = `
        <tr>
            <td>Номер</td>
            <td>Тема</td>
            <td>Посещение</td>
            <td>Выполнение</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Базовое бэкенд-приложение</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>2</td>
            <td>HTTP-запросы</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>3</td>
            <td>JSON и работа с ним</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>4</td>
            <td>HTTP-ответы</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>5</td>
            <td>Проектирование API</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>6</td>
            <td>Роутинг и его настройка</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>7</td>
            <td>NoSQL базы данных</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>8</td>
            <td>Обеспечение авторизации и доступа пользователей</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>9</td>
            <td>Работа сторонних сервисов уведомления и авторизации</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>10</td>
            <td>Основы ReactJS</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>11</td>
            <td>Работа с компонентами динамической DOM</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>12</td>
            <td>Использование хуков в React</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>13</td>
            <td>Основы микросервисной архитектуры</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
        <tr>
            <td>14</td>
            <td>Разработка классических модулей веб-приложений</td>
            <td><input type="checkbox" autocomplete="off" /></td>
            <td><input type="checkbox" autocomplete="off" /></td>
        </tr>
    `
})
document.getElementById('showLectures').addEventListener('click', function () {
	const lecturesTable = document.getElementById('lectures')
	lecturesTable.style.display = 'block' // Показать таблицу
	setTimeout(() => {
		lecturesTable.style.opacity = '1' // Плавно сделать видимой
	}, 0)
})
document.getElementById('hideLectures').addEventListener('click', function () {
    const lecturesTable = document.getElementById('lectures')
    lecturesTable.style.opacity = '0' // Плавно скрыть таблицу
    setTimeout(() => {
        lecturesTable.style.display = 'none' // Скрыть таблицу
    }, 500)
})
