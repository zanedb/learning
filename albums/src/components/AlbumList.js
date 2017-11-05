import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  // Runs when component is about to be rendered
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }

  // Renders data on device
  render() {
    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  }
}

// Export (make available to other parts of app) default
export default AlbumList;
