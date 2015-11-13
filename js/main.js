import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import AddSongController from './controllers/addSong.controller';
import SongListController from './controllers/songList.controller';
import SongPageController from './controllers/songPage.controller';
import EditSongController from './controllers/editSong.controller';

import SongService from './services/song.service';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'TMkNk8j51JqPYwousgSmo2FaXkMnQcLaVUt8Lh0A',
        'X-Parse-REST-API-Key': 'rbQD1Hl8n48FqWDvwhpJm5y43ypISY6XG4gSQ7Cz'
      }
    }
  })
  .config(config)
  .controller('SongListController', SongListController)
  .controller('AddSongController', AddSongController)
  .controller('SongPageController', SongPageController)
  .controller('EditSongController', EditSongController)
  .service('SongService', SongService)
  .constant('SC', '095fe1dcd09eb3d0e1d3d89c76f5618f')
;