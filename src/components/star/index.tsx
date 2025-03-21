import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from '@react-native-vector-icons/fontawesome6';

interface StarCompProps {
  rating: number;
  quantity: number;
  style?: any;
}

export default function StarComp(props: StarCompProps) {
  const {rating, quantity, style} = props;
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const items_temp = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      items_temp.push(2);
    }
    if (rating - Math.floor(rating) === 0.5) items_temp.push(1);

    for (let i = 0; i < 5 - Math.ceil(rating); i++) items_temp.push(0);

    setItems(items_temp);
  }, [rating]);
  return (
    <View style={style}>
      <View style={styles.wrap}>
        {items.map(item => {
          if (item === 2)
            return <Icon style={styles.star} name="star" color="#FBB622" />;
          else if (item === 1)
            return (
              <Icon style={styles.star} name="star-half" color="#FBB622" />
            );
        })}
        <Text style={styles.text}>{rating}</Text>
        <Text style={styles.quantity}>({quantity})</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {},
  text: {
    color: '#FBB622',
  },
  quantity: {
    color: 'rgba(0,0,0,0.3)',
    marginLeft: 4,
  },
});
