import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const Search = ({value, Change, onFinishEnter, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <View style={styles.searchPannel}>
        <TextInput
          value={value}
          onChangeText={Change}
          style={styles.searchText}
          placeholder="Search"
          placeholderTextColor="#DAE0E2"
          onEndEditing={onFinishEnter}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchPannel: {
    height: 50,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 7,
    flexDirection: 'row',
    marginTop: 63,
    marginBottom: 10,
  },
  searchText: {
    color: 'black',
    fontSize: 18,
    flex: 1,
    marginHorizontal: 15,
  },
});
