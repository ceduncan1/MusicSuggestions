let SongService = function($http, PARSE) {
  
  let parseUrl = PARSE.URL + 'classes/artist';

  this.getSongs = function () {
    return $http({
      url: parseUrl,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      // cache: true
    });
  };

  this.getSong = function (songId) {
    return $http({
      method: 'GET',
      url: parseUrl + '/' + songId,
      headers: PARSE.CONFIG.headers,
      // cache: true
    });
  };

  let Song = function (obj) {
    this.name = obj.name;
    this.artist = obj.artist;
    this.suggested = obj.suggested;
  };

  this.addSong = function (obj) {
    let s = new Song(obj);
    return $http.post(parseUrl, s, PARSE.CONFIG);
  };

  this.update = function (obj) {
    return $http.put(parseUrl + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(parseUrl + '/' + obj.objectId, PARSE.CONFIG);
  };

  // this.soundCloud = function (obj) {
  //   let musicUrl = 'http://api.soundcloud.com/tracks?client_id=' + SC;
  //   let query = encodeURI({{ songPage.artist }}+ ' ' + {{ songPage.name }});
  //   console.log(query);
  // }

};

SongService.$inject = ['$http', 'PARSE'];

export default SongService;
