// date
function updateTime() {
    const now = new Date();
    const options = {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true};
    const formattedDate = now.toLocaleDateString("en-US", options);
    document.getElementById('date-time').textContent = formattedDate;
}

setInterval(updateTime, 1000);

// приветствие
const greetingGenerator = {
    currentTime: new Date(),

    getHours: function () {
        return this.currentTime.getHours();
    },

    getGreeting: function () {
        const hours = this.getHours();
        let greeting;

        switch (true) {
            case (hours < 12):
                greeting = "Good morning!"; // Утро (00:00 - 11:59)
                break;
            case (hours < 18):
                greeting = "Good afternoon!"; // День (12:00 - 17:59)
                break;
            default:
                greeting = "Good evening!"; // Вечер (18:00 - 23:59)
                break;
        }

        return greeting;
    }
};
document.getElementById('greeting').innerText = greetingGenerator.getGreeting();


//тема
const themeToggleBtn = document.getElementById('theme-toggle');
const main = document.getElementsByClassName('main-content')[0];
const body = document.body;

// Add an event listener for the button
themeToggleBtn.addEventListener('click', function () {
    // Check the current theme
    if (body.classList.contains('day-theme')) {
        // Switch to night theme
        body.classList.remove('day-theme');
        body.classList.add('night-theme');
        main.classList.remove('day-theme');
        main.classList.add('night-theme');
        themeToggleBtn.textContent = 'Switch to Night Theme'; // Change button text
    } else {
        body.classList.remove('night-theme');
        body.classList.add('day-theme');
        main.classList.remove('night-theme');
        main.classList.add('day-theme');
        themeToggleBtn.textContent = 'Switch to Day Theme'; // Change button text
    }
});


//API
const apiKey = '2d5c7316';  // Замените на ваш реальный API ключ
const getMovieBtn = document.getElementById('getMovieBtn');
const movieTitleInput = document.getElementById('movieTitle');
const movieInfo = document.getElementById('movieInfo');

// Функция для получения данных о фильме
async function getMovie() {
    const movieTitle = movieTitleInput.value.trim();

    if (movieTitle === '') {
        movieInfo.textContent = 'Введите название фильма.';
        return;
    }

    // Строка URL должна быть в кавычках
    const url = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok && data.Response !== "False") {
            displayMovie(data);
        } else {
            movieInfo.textContent = `Фильм не найден: ${data.Error}`;
        }
    } catch (error) {
        movieInfo.textContent = 'Ошибка сети или API: ' + error.message;
    }
}

// Функция для отображения данных о фильме
function displayMovie(data) {
    // HTML должен быть строкой, заключённой в кавычки
    movieInfo.innerHTML = `
        <h3>${data.Title} (${data.Year})</h3>
        <p>Genre: ${data.Genre}</p>
        <p>Rating IMDb: ${data.imdbRating}</p>
        <p>Director: ${data.Director}</p>
        <p>Plot: ${data.Plot}</p>
        <img src="${data.Poster !== 'N/A' ? data.Poster : 'placeholder.jpg'}" alt="Постер фильма">
    `;
}

// Обработчик события на кнопку
getMovieBtn.addEventListener('click', getMovie);

/* keydown*/
document.addEventListener('keydown', (event) => {
    const key = event.key;

    switch (key) {
        case '1':
            // Переключиться на раздел Home
            window.location.href = 'index.html';
            break;
        case '2':
            // Переключиться на раздел Attractions
            window.location.href = 'review.html';
            break;
        case '3':
            // Переключиться на раздел Food
            window.location.href = 'releases.html';
            break;
        case '4':
            // Переключиться на раздел Team
            window.location.href = 'contact.html';
            break;
        default:
            break;
    }
});

// Define the sound functions
function playAvatarSound() {
    var avatarSound = new Audio('sound/avatar.mp3');
    avatarSound.play();
}

function playGoneWithTheWindSound() {
    var windSound = new Audio('sound/Gone with the wind.mp3');
    windSound.play();
}

function playLittleWomenSound() {
    var womenSound = new Audio('sound/little women.mp3');
    womenSound.play();
}

function playTitanicSound() {
    var titanicSound = new Audio('sound/titanic.mp3');
    titanicSound.play();
}

function playSpiderManSound() {
    var spiderManSound = new Audio('sound/New spider-man.mp3');
    spiderManSound.play();
}
