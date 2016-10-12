const TweetList=(state={},actions)=>{
  switch(actions.type) {
    case "GET_TWEET":
    var copy = Object.assign({},state);
    copy.tweetArray = JSON.parse(actions.payload);
    return copy;
    break;
    default:
    return state;
  }
}
const active = {TweetList};
export default active;
