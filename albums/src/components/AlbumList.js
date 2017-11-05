import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    // Runs when component is about to be rendered
  }

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
