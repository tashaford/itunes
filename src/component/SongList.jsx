import React from 'react';

class SongList extends React.Component {

  constructor(props){
    super(props)
    this.state={
      selectedIndex: undefined
    };
  }

  handleChange(event){
    var newIndex = event.target.value;
    this.setState({
      selectedIndex: newIndex
    });
    const selectedSong = this.props.data[newIndex];
    this.props.selectSong(selectedSong);
  }


  render() {
    const options = this.props.data.map((song, index) => {
      return <option value={index} key={index}>{index+1} {song["im:artist"].label}</option>
    })
    return(
      <select id="songs" value={this.state.selectedIndex} onChange={this.handleChange.bind(this)}>
      {options}
      </select>
      );
  }
}

export default SongList;