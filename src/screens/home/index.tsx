import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import ListItemComp from '../../components/list';
import {bookShelfData, readingData} from './data';
import Icon from '@react-native-vector-icons/ionicons';

export default function HomeScreen() {
  const [rData, setReadingData] = useState(readingData);
  const [bData, setBookshelfData] = useState(bookShelfData);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Icon name="search" style={styles.searchIcon} size={20} />
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Icon name="mic" style={styles.micIcon} size={20} />
      </View>
      <ListItemComp
        title="Reading"
        to="/reading"
        data={rData}
        horizontal={true}
      />

      <ListItemComp
        title="Bookshelf"
        to="/bookshelf"
        data={bData}
        horizontal={false}
        numsColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 32,
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchInput: {
    borderBottomWidth: 0,

    paddingHorizontal: 42,
    paddingVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 8,
    width: '100%',
    height: 45,
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    top: 12,
    left: 16,
  },
  micIcon: {
    position: 'absolute',
    top: 12,
    right: 16,
  },
});
