import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import IonIcon from '@react-native-vector-icons/ionicons';
import AntIcon from '@react-native-vector-icons/ant-design';

interface BookIntroductionCompProps {
  data: any;
  style?: any;
}

export default function BookIntroductionComp(props: BookIntroductionCompProps) {
  const {data, style} = props;

  const handleAddToBookshelf = () => {};

  const handleShowCatalog = () => {};

  return (
    <View style={style}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Introduction</Text>
        <Text style={styles.description} numberOfLines={3}>
          {data.description}
        </Text>
        <View style={styles.catalog}>
          <Text style={styles.catalogText}>
            Catalog: The {data.catalog.length} chapter
          </Text>
          <TouchableOpacity onPress={handleShowCatalog}>
            <IonIcon name="list" size={20} color="#2EBBC4" />
          </TouchableOpacity>
        </View>
        <View style={styles.catalog}>
          <Text style={styles.catalogText}>Add to bookshelf</Text>
          <TouchableOpacity onPress={handleAddToBookshelf}>
            <AntIcon name="plus-square" size={20} color="#2EBBC4" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {},
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: 'rgba(0, 0, 0, 0.5)',
    borderBottomColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomWidth: 1,
    paddingVertical: 16,
    lineHeight: 20,
  },
  catalog: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomWidth: 1,
  },
  catalogText: {
    fontSize: 20,
    fontWeight: '500',
  },
});
