import express from 'express';
import Twitter from 'twitter';
import mongoose from 'mongoose';
import Tweet from './models/tweetSchema';

//Check Mongo connection status
mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
  console.log('Could not connect to mongo server!');
  console.log(err);
});

//Connec to MongoDb
mongoose.connect('mongodb://localhost/trialtweet2');
//Initialize Twitter API
var client = new Twitter({
  consumer_key: 'jow7ZGpsDN2PSD9haDp2sjnSl',
  consumer_secret: 'LDWIH450Ni8jyptGbdCNtaiUSdw5b9xIkr8YGMhfnFjPWDMN6I',
  access_token_key: '735038888939397120-fggBEHkRycskThseD7cythmu1yPtVTM',
  access_token_secret: 'DZJvNIBNzJJfR8opJAD6yNcJZrb34vSneTnFfHbqdUFiI'
});

//Fetch Tweets with keyword Cricket
client.stream('statuses/filter', {track: 'Cricket'}, function(stream) {
  stream.on('data', function(event) {
    // create a new user called chris
    var tweet = new Tweet({
      tweet:{
        id:event.id,
        text:event.text
      },
      user:{
        name:event.user.name,
        screen_name:event.user.screen_name,
        profile_image:event.user.profile_image_url,
        followers:event.user.followers_count,
        friends:event.user.friends_count,
        time_zone:event.user.time_zone
      }
    });

    // call the built-in save method to save to the database
    tweet.save(function(err) {
      if (err) throw err;
      console.log('Tweet saved successfully!');
    });
  });

  stream.on('error', function(error) {
    throw error;
  });
});

const app = express();

app.use('/', express.static('public'));

app.get("/tweets",function(req, res){
  var user = {
    "name":"Midhun"
  }
  var query = Tweet.find().limit(12).sort({$natural:-1});
  query.exec(function (err, tweets) {
    if (err) return handleError(err);

    res.end(JSON.stringify(tweets));
  })
})

app.listen(process.env.PORT || 3000);
