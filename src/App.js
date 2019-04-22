import React, { Component } from "react";
import "./App.css";

import Header from './Components/Header';
import FavArtist from './Components/FavArtist';

class App extends Component {
  render() {
    const favArtist = {
      img_url: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-215297-blocparty.jpg?crop=900:600&width=1910",
      name: "Bloc Party",
      song: "Helicopter"
    }

    return (
      <div>
        <Header header="The best Music Artist of all time is:"/>
        <FavArtist favArtist = {favArtist}/>
      </div>
      )
  }
}

export default App;
