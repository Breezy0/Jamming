
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import React from 'react';
import Spotify from '../../../../../Sam notes/jammming-project-solution/src/util/Spotify';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlistName: 'My Playist',
      playListTracks: [],
      searchResults: []
    };

    this.search=this.search.bind(this);
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);

  }

  search(term)
  {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }


  




  render() {
    return (
      <div>
        <SearchBar />
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playListTracks} />
           </div>
        </div>
      </div>
        );
  }

}



export default App;
