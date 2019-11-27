import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
//   Icon.getImageSource('user', 20, 'red').then(source =>
//     this.setState({userIcon: source}),
//   );
  return (
    <View style={styles.background}>
      <Icon name="rocket" size={'{30}'} color="#900" />
      {/* <Icon name="search" /> */}
      <Text>SearchBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default SearchBar;
