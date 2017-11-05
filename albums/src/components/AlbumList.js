import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  // Runs when component is about to be rendered
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  // Renders data on device
  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

// Export (make available to other parts of app) default
export default AlbumList;
