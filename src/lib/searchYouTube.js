import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  var endpoint = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&max=5&key=' + YOUTUBE_API_KEY + '&videoEmbeddable=true' + '&type=video';
  $.ajax({
    url: endpoint,
    type: 'GET',
    data: {},
    contentType: 'application/json',
    success: function (data) {
      callback(data['items']);
    },
    error: function(error) {
      console.error('Could not retrieve data from Youtube', error);
    }
  });
};

export default searchYouTube;
