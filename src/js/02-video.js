import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// знаходимо елемент
const iframe = document.querySelector('iframe');

//створюємо плеєр
const player = new Player(iframe);

//функція - запис у локальне сховище на подію play із інтервалом 1000мс
const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

//виклик методу on на подію play
player.on('timeupdate', throttle(onPlay, 1000));

// змінна, яка витягає дані з Локального сховища
const currentTime = Number(localStorage.getItem('videoplayer-current-time'));


//програвання зі збереженого місця та відловлювання помилок
    player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});