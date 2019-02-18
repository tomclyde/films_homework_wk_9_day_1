import React, {Component} from "react";
import FilmItem from "../components/FilmItem";

class FilmList extends Component {
  render(){

    const filmNodes = this.props.data.map(filmItem => {
      return(
        <FilmItem url={filmItem.url} key={filmItem.id}> {filmItem.name} </FilmItem>
      );
    });

    return(
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }

}


export default FilmList;
