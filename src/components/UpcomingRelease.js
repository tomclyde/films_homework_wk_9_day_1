import React, {Component} from "react";


class UpcomingRelease extends Component {
  render(){
    return(
      <div className="UpcomingRelease">
        <a href={this.props.data.url}>{this.props.data.text}</a>
      </div>
    )
  }

}


export default UpcomingRelease;
