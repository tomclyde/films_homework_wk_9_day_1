import React, {Component} from "react";


class FilmItem extends Component {
  render(){
    return(
      <div className="filmItem">
        <a href={this.props.url}>{this.props.children}</a>
      </div>
    )
  }

}


export default FilmItem;
