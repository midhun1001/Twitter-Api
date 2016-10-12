import React, { Component } from 'react';
import { Link } from 'react-router';

class SampleCard extends Component {
  more(e) {
    var target = e.target.parentElement.parentElement;
    target.classList.add("over");
    setTimeout(function(){
      target.classList.add("hide");
      target.nextSibling.classList.remove('hide','over');
    },1000);
  }
  render() {
    return (
      <div className='card well col-lg-12'>
        <div className="col-lg-3">
          <label>Name:</label>
        </div>
        <div className="col-lg-9">
          <p>
            <a href={"https://twitter.com/"+this.props.user.screen_name} target="_blank">
              {this.props.user.name}
            </a>
          </p>
        </div>
        <div className="col-lg-3">
          <label>Tweet:</label>
        </div>
        <div className="col-lg-9">
          <p>{this.props.tweet.text}</p>
        </div>
        <div className="col-lg-12 fix-btm">
          <button className="btn btn-info detail_tweet" onClick={(e)=>this.more(e)}>Show User Detail</button>
        </div>
      </div>
    )
  }
}

export default SampleCard;
