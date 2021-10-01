import lodash from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  lodash(function ({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000),
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')?? 0);
