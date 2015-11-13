let AddSongController = function($scope, SongService, $state) {

  $scope.addSong = (obj) => {
    SongService.addSong(obj).then( (res) => {
      $scope.song = {};
      $state.go('root.list');
    });
  };

};

AddSongController.$inject = ['$scope', 'SongService', '$state'];

export default AddSongController;