var search = require('youtube-search');
module.exports = {
    name : 'youtube',
    description: 'search up youtube videos (usage: youtube [title]',
    execute(message, args, discord) {
        var title = args;

        var options = {
            maxResults : 10,
            key: 'AIzaSyB_bR87mTHEKYROVnXGZ19e8Ezjiw8YksQ'
        };

        search(title, options, function(err, results) {
           if (err) return console.log(err);

           console.dir(results);
        });
    }
}