import React from 'react';

class Song extends React.Component {

  render(){
    if(!this.props.song){
      return null;
    }
    return(
      <div>
        <p>Song title: {this.props.song["im:name"].label}</p>
        <p>Artist: {this.props.song["im:artist"].label}</p>
        <p>Chart position: {this.props.song.index}</p>
        <img src={this.props.song["im:image"][2].label} alt={this.props.song["im:artist"].label}/>
      </div> 
      )
  }
}

export default Song