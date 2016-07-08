$(document).ready(function () {

  // $('#sendSms').on('submit', function(){
  //   event.preventDefault();
  //   $('#results').empty();
  //   $.ajax({
  //     url: 'https://api.transmitsms.com',
  //     Authorization: 'b9dd9aa7d56b6585cde8d081a88e1066',
  //     message: 'Hello [Firstname]',
  //     list_id: '36060',
  //     from: 'WT'
  //   });
  // });

  $('#spotifySearch1').on('submit', function (event) {
    event.preventDefault();
    $('#results').empty();
    var query = $('#spotify1').val();
    $.ajax({
      url: 'https://api.spotify.com/v1/search',
      data: {
        q: query,
        type: 'album',
        limit: 16
      },
      success: function (result) {
        $.each(result.albums.items, function(index, item) {
          $('#results').append('<li>' + '<img src="' + item.images[0].url + '" height="100" width="100" class="art">' + item.name + '</li>' + '<br>');
        });
      }
    });
  });

  $('#spotifySearch2').on('submit', function (event) {
    event.preventDefault();
    $('#results').empty();
    var query = $('#spotify2').val();
    $.ajax({
      url: 'https://api.spotify.com/v1/search',
      data: {
        q: query,
        type: 'artist',
        limit: 16
      },
      success: function (result) {
        $.each(result.artists.items, function (index, item) {
        $('#results').append('<li>' + '<img src="' + item.images[0].url + '" height="100" width="100" class="art">' + item.name + '</li>' + '<br>');
      });
    }
  });
  });

  $('#spotifySearch3').on('submit', function (event) {
    event.preventDefault();
    console.log('clicked');
    $('#results').empty();
        var query = $('#spotify3').val();
        $.ajax({
              url: 'https://api.spotify.com/v1/search',
              data: {
                q: query,
                type: 'artist,album',
                limit: 30
              },
          success: function (result) {
            console.log('request sent');
                $.each(result.artists.items.concat(result.albums.items), function (index, item) {
                  $('#results').append('<li>' + item.name + '</li>' + '<br>');
                });
              }
        });
  });

  $('#spotifySearch4').on('submit', function (event) {
    event.preventDefault();
    $('#results').empty();
    var query = $('#spotify4').val();
    $.ajax({
      url: 'https://api.spotify.com/v1/search',
      data: {
        q: query,
        type: 'track',
        limit: 12
      },
      success: function (result) {
        console.log(result);
        $.each(result.tracks.items, function (index, item) {
        $('#results').append('<iframe src="' + 'https://embed.spotify.com/?uri=' + item.uri + '"' + ' width="250" height="330" frameborder="0" allowtransparency="true" id="iframePad"></iframe>');
        });
      }
    });
  });
});
