let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.list', {
      url: '/',
      controller: 'SongListController',
      templateUrl: 'templates/songList.tpl.html'
    })
    .state('root.add', {
      url: '/addSong',
      controller: 'AddSongController',
      templateUrl: 'templates/addSong.tpl.html'
    })
    .state('root.songPage', {
      url: '/song/:songId',
      controller: 'SongPageController',
      templateUrl: 'templates/songPage.tpl.html'
    })
    .state('root.edit', {
      url: '/edit/:songId',
      controller: 'EditSongController',
      templateUrl: 'templates/editSong.tpl.html'
    })
  ;

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;