import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface BookDetailFooterCompProps {
  data: any;
}

export default function BookDetailFooterComp(props: BookDetailFooterCompProps) {
  const {data} = props;
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.trial}>
          <Text style={styles.trialText}>Free trials</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buy}>
          <Text style={styles.buyText}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.03)',
    padding: 16,
    position: 'static',
    bottom: 0,
  },
  trial: {
    borderWidth: 1,
    borderColor: '#2EBBC4',
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 8,
  },
  buy: {
    backgroundColor: '#2EBBC4',
    paddingVertical: 8,
    paddingHorizontal: 48,
    borderRadius: 8,
  },
  trialText: {
    color: '#2EBBC4',
  },
  buyText: {
    color: 'white',
  },
});
