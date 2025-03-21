import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import StarComp from '../../components/star';
import {Image} from 'react-native-elements';

interface BookSummaryCompProps {
  data: any;
}

export default function BookSummaryComp(props: BookSummaryCompProps) {
  const {data} = props;

  return (
    <View style={styles.summary}>
      <Image source={{uri: data.thumbnail}} style={{width: 100, height: 150}} />
      <View style={styles.summaryDetails}>
        <Text style={styles.summaryTitle}>{data.title}</Text>
        <Text style={styles.summaryAuthor}>By {data.author}</Text>
        <View style={styles.summaryCategories}>
          {data.categories.map((category: any) => (
            <TouchableOpacity key={category.id} style={styles.summaryCategory}>
              <Text style={styles.summaryCategoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <StarComp
          style={styles.summaryRating}
          rating={data.rating.star}
          quantity={data.rating.votes}
        />
        <Text style={styles.summaryPrice}>${data.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  summaryDetails: {
    flex: 1,
    marginLeft: 24,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  summaryAuthor: {
    color: 'rgba(0, 0, 0, 0.3)',
    fontWeight: '500',
    marginTop: 4,
  },
  summaryCategories: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
  summaryCategory: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    padding: 8,
    borderRadius: 8,
  },
  summaryCategoryText: {
    color: 'gray',
  },
  summaryRating: {
    marginVertical: 8,
  },
  summaryPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2EBBC4',
  },
});
