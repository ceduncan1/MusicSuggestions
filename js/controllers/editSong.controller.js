let EditController = function($scope, $stateParams, SongService, $state) {
  
  SongService.getSong($stateParams.songId).then( (res) => {
    $scope.songPage = res.data;
  });

  $scope.updateSong = function (obj) {
    SongService.update(obj).then( (res) => {
      $state.go('root.list');
      // console.log(res);
    });
  };

};

EditController.$inject = ['$scope', '$stateParams', 'SongService', '$state'];

export default EditController;