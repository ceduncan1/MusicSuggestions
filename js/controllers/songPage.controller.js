let SongPageController = function($scope, $stateParams, SongService, $state, SC, $http, $sce) {
  
  SongService.getSong($stateParams.songId).then( (res) => {
    // console.log(res);
    $scope.songPage = res.data;
  });

  $scope.deleteMe = function(obj) {
    SongService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');
    });
  };

  $scope.search = function(artist, name) {
    let musicUrl = 'http://api.soundcloud.com/tracks?client_id=' + SC;
    let query = encodeURI(artist + ' ' + name);
    console.log(query);
    $http.get(musicUrl + '&q=' + query).then( (res) => {
      $scope.songs = res.data;
      console.log($scope.songs);
    });
  };

  $scope.playMe = (song) => {
    $scope.audio = $sce.trustAsResourceUrl(song.stream_url + '?client_id=' + SC);
    $scope.playing = song;
  };

};

SongPageController.$inject = ['$scope', '$stateParams', 'SongService', '$state', 'SC', '$http', '$sce'];

export default SongPageController;