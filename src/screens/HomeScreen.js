import axios from 'axios';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {navigation} from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Search from '../components/Search';
import BookCard from '../components/BookCard';

const HomeScreen = props => {
  const [searchValue, setSearchValue] = useState();
  const [data, setData] = useState([]);
  const image =
    'https://img1.wsimg.com/isteam/ip/95dc8c4f-baec-40ec-a525-5776ce6b0d3c/booksbluebanner.jpg';

  const booksCollection = firestore().collection('books');

  // const books = (async = await firestore().collection('books').get());
  // const user = await firestore().collection('Users').doc('ABC').get();
  // console.log(books);
  const onSearch = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
      .then(result => {
        setData(result.data.items);
      })
      .catch(err => console.log(err));
  };
  // console.log(data)
  return (
    <SafeAreaView style={styles.body}>
      <ImageBackground
        source={{uri: image}}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Search
          value={searchValue}
          Change={setSearchValue}
          onFinishEnter={onSearch}
        />
        <BookCard navigation={props.navigation} data={data} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});
