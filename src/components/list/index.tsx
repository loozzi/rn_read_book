import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/ant-design';
import {Image} from 'react-native-elements';

type ListItemCompProps = {
  title: string;
  to: string;
  data: any;
  horizontal?: boolean;
  numsColumns?: number;
};

export default function ListItemComp({
  title,
  to,
  data,
  horizontal,
  numsColumns,
}: ListItemCompProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.viewAll}>
          <Text style={styles.viewAllText}>View all</Text>
          <Icon name="right" color="gray" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          horizontal={horizontal}
          numColumns={numsColumns}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={horizontal ? styles.itemHorizontal : styles.item}>
              <Image source={{uri: item.image}} style={styles.image} />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemAuthor}>{item.author}</Text>
            </View>
          )}
          style={styles.listItem}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  viewAll: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listItem: {
    marginTop: 16,
  },
  item: {
    // padding: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    width: '30%',
    marginRight: 16,
    marginBottom: 16,
  },
  itemHorizontal: {
    width: 110,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: 150,
  },
  itemTitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemAuthor: {
    fontSize: 16,
    color: 'gray',
  },
});
