import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var TweetSchema = new Schema({
  tweet:{
    id:'',
    text:''
  },
  user:{
    name:'',
    screen_name:'',
    profile_image:'',
    followers:'',
    friends:'',
    time_zone:''
  }
});

export default mongoose.model('Tweet',TweetSchema);
