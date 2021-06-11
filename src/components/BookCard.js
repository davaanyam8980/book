import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const BookCard = ({data, navigation}) => {
  return (
    <View style={{width: '100%'}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                margin: 20,
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
              onPress={() =>
                navigation.navigate('Description', {
                  image: item.volumeInfo.imageLinks.thumbnail,
                  name: item.volumeInfo.title,
                  author: item.volumeInfo.authors,
                  categories: item.volumeInfo.categories,
                  id: item.id,
                })
              }>
              <View style={styles.BookCard}>
                {item.volumeInfo.imageLinks.thumbnail && (
                  <Image
                    source={{uri: item.volumeInfo.imageLinks.thumbnail}}
                    style={{width: 160, height: '100%'}}
                    resizeMode="contain"
                  />
                )}
                <View
                  style={{
                    flexDirection: 'column',
                    width: 200,
                    justifyContent: 'space-evenly',
                    height: 200,
                  }}>
                  <View>
                    <Text
                      style={{
                        fontWeight: '700',
                        color: '#3399ff',
                        fontSize: 18,
                      }}>
                      {item.volumeInfo.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{fontWeight: '700', color: '#999999'}}>
                        like 120
                      </Text>
                    </View>
                    <View style={{width: 100}}>
                      <Text style={{fontWeight: '700', color: '#999999'}}>
                        price : 2$
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  BookCard: {
    height: 200,
    width: '100%',
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
});
