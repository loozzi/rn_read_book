import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import {bookComments, bookData} from './data';
import {Image} from 'react-native-elements';
import StarComp from '../../components/star';
import BookSummaryComp from './summary';
import BookIntroductionComp from './introduction';
import BookCommentsComp from './comments';
import BookDetailFooterComp from './footer';

export default function DetailScreen() {
  const [data, setData] = useState(bookData);
  const [comments, setComments] = useState(bookComments);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="share-outline" size={24} />
        </TouchableOpacity>
      </View>
      <BookSummaryComp data={data} />
      <BookIntroductionComp data={data} style={styles.introduction} />
      <BookCommentsComp comments={comments} />
      <BookDetailFooterComp data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  introduction: {
    marginTop: 16,
  },
});
