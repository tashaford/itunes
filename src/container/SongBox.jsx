import React from 'react';
import Song from '../component/Song.jsx';
import SongList from '../component/SongList.jsx';

class SongBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      focusSong: null
    }
  }

    componentDidMount() {
     const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
     const request = new XMLHttpRequest();
     request.open("GET", url);
     request.addEventListener('load', () => {
       if(request.status === 200){
         const jsonString = request.responseText;
         const data = JSON.parse(jsonString);
         this.setState({
           data: data.feed.entry,
         });
       }
     });
     request.send()
   }

   setFocusSong(song){
     this.setState({
       focusSong: song
     });
   }

   render(){
    return (
      <div className="song-box">
      <SongList data={this.state.data} selectSong={this.setFocusSong.bind(this)}/>
      <Song song={this.state.focusSong}/>
      </div>
      )
  }
}

export default SongBox