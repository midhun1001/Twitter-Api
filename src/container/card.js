import React, { Component } from 'react';
import SampleCard from './cards/samplecard';
import DetailCard from './cards/detailcard';

class Card extends Component {
  fetch(){
    return (
      this.props.TweetList.tweetArray.map((value, index)=>{
        return(
          <div key={index} className='box col-lg-4'>
            <SampleCard {...value}/>
            <DetailCard {...value}/>
          </div>
        )
      })
    )
  }
  render() {
    return (
      <div className="container-fluid">
        {this.fetch()}
      </div>
    )
  }
}

export default Card;
