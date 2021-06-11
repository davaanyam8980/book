import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useState, useEffect} from 'react/cjs/react.development';
import {ScrollView} from 'react-native-gesture-handler';

const Description = props => {
  const [data, setData] = useState([]);
  let id = props.route.params.id;
  useEffect(() => {
    firestore()
      .collection('books')
      .doc(id)
      .collection('comments')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setData({...documentSnapshot?.data(), id: documentSnapshot?.id});
        });
      });
  }, []);
  console.log('comments', data.comment);

  const image =
    'https://img1.wsimg.com/isteam/ip/95dc8c4f-baec-40ec-a525-5776ce6b0d3c/booksbluebanner.jpg';

  return (
    <ImageBackground
      source={{uri: image}}
      style={{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.card}>
        <Image
          source={{uri: props.route.params.image}}
          style={{
            width: 200,
            height: 250,
            borderRadius: 2,
            borderColor: '#b3ffff',
            borderWidth: 1,
          }}
        />
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>Name:</Text>
            <Text>{props.route.params.name}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>Authors:</Text>
            <Text>{props.route.params.author}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>Category :</Text>
            <Text>{props.route.params.categories}</Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderTopColor: '#b3b3b3',
            borderTopWidth: 1,
            paddingTop: 11,
          }}>
          <Text>like</Text>
          <Text>comment</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Description;

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
