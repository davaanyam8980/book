import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  Touchable,
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
  const [clicked, setClicked] = useState(false);
  const [writting, setWritting] = useState(false);
  const [textComment, setCommentText] = useState();
  const [textAcumlator, setTextAcumlator] = useState([]);

  console.log('text', textComment);
  const createComment = () => {
    setTextAcumlator(textAcumlator => [...textAcumlator, {textComment}]);
  };
  const onPress = () => {
    setClicked(!clicked);
  };

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
        <ScrollView>
          <Image
            source={{uri: props.route.params.image}}
            style={{
              width: 200,
              height: 250,
              borderRadius: 2,
              borderColor: '#b3ffff',
              borderWidth: 1,
              marginLeft: 40,
              marginTop: 40,
            }}
          />
          <View style={{marginVertical: 20}}>
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
            <TouchableOpacity onPress={onPress}>
              <View style={{flexDirection: 'row-reverse'}}>
                {!clicked && (
                  <Text style={{color: '#808080'}}>see more...</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
          {clicked &&
            textAcumlator.map(text => {
              return (
                <View
                  style={{
                    marginVertical: 10,
                    width: '100%',
                    backgroundColor: '#e6e6e6',
                    borderRadius: 10,
                    padding: 10,
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Guest</Text>
                  <Text>{text.textComment}</Text>
                </View>
              );
            })}
          {clicked && (
            <TextInput
              style={{
                width: '100%',
                backgroundColor: '#d9d9d9',
                borderRadius: 10,
                padding: 10,
                marginBottom: 10,
              }}
              placeholder="write comment"
              onEndEditing={createComment}
              onChangeText={setCommentText}
            />
          )}

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              borderTopColor: '#b3b3b3',
              borderTopWidth: 1,
              paddingTop: 11,
            }}>
            <TouchableOpacity onPress={onPress}>
              <Text>comment</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
