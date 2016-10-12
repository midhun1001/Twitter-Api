import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';
import Card from './card';
import actions from "../actions/index";

class App extends Component {
  componentDidMount(){
    var self = this;
    this.fetch();

    setInterval(function(){
      self.fetch();
    }, 60000);
  }
  fetch() {
    var self = this;
    console.log("Fetching");
    $.ajax({
      url:"/tweets",
      type:"GET",
      success:function(res) {
        self.props.dispatch(actions.Preload(res));
      }, error:function(err) {
        console.log(err)
      }
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Card {...this.props}/>
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return state;
}


export default connect(mapStatetoProps)(App);
