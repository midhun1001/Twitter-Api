import React, { Component } from 'react';

class DetailCard extends Component {
  less(e) {
    var target = e.target.parentElement.parentElement;
    target.classList.add("over");
    setTimeout(function(){
      target.classList.add("hide");
      target.previousSibling.classList.remove('hide','over');
    },1000)
  }

  Time(){
    if(this.props.user.time_zone) {
      return this.props.user.time_zone;
    } else {
      return "Not Mentioned";
    }
  }

  render() {
    return (
      <div className='card-detail well col-lg-12 hide'>
        <div className='head col-lg-12 well'>
        <a href={"https://twitter.com/"+this.props.user.screen_name} target="_blank">
          <div className="col-lg-3">
            <label>
              <img src={this.props.user.profile_image} alt="Profile Image" />
            </label>
          </div>
          <div className="col-lg-9">
            <strong className="text-primary">{this.props.user.name}</strong>
            <p className="text-info">{this.props.user.screen_name}</p>
          </div>
        </a>
        </div>
        <div className="col-lg-3">
          <label>Followers</label>
        </div>
        <div className="col-lg-9">
          <p>{this.props.user.followers}</p>
        </div>
        <div className="col-lg-3">
          <label>Friends:</label>
        </div>
        <div className="col-lg-9">
          <p>{this.props.user.friends}</p>
        </div>
        <div className="col-lg-3">
          <label>Zone:</label>
        </div>
        <div className="col-lg-9">
          <p>{this.Time()}</p>
        </div>
        <div className="col-lg-12 fix-btm">
          <button className="btn btn-info show-less" onClick={(e)=>this.less(e)}>Hide</button>
        </div>
      </div>
    )
  }
}

export default DetailCard;
