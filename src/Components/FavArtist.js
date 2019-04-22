import React from 'react';

export default class FavArtist extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className="artist-card">
        <img src={this.props.favArtist.img_url} alt="artist"/>
        <h3>{this.props.favArtist.name}</h3>
        <h3>{this.props.favArtist.song}</h3>
      </div>
    )
  }
}
