import React from 'react';
import Song from '../component/Song.jsx';
import SongList from '../component/SongList.jsx';

class SongBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      focusSong: null,
      chartPosition: 0
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

   setFocusSong(song, index){
     this.setState({
       focusSong: song,
       chartPosition: parseInt(index) +1
     });
   }

   render(){
    return (
      <div className="song-box">
      <SongList data={this.state.data} selectSong={this.setFocusSong.bind(this)}/>
      <Song song={this.state.focusSong} chartPosition={this.state.chartPosition}/>
      </div>
      )
  }
}

export default SongBox