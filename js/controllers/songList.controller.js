let SongListController = function($scope, SongService) {
  
  SongService.getSongs().then( (res) => {
    $scope.songs = res.data.results;
  });

};

SongListController.$inject = ['$scope', 'SongService'];

export default SongListController;