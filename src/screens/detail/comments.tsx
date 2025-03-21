import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import {Image} from 'react-native-elements';

interface BookCommentsCompProps {
  comments: any;
  style?: any;
}

interface CommentProps {
  id: number;
  name: string;
  comment: string;
  avatar: string;
  date: string;
  liked: boolean;
}

const Comment = (comment: CommentProps) => {
  const handleToggleLike = () => {};

  return (
    <View style={commentStyles.container}>
      <View style={commentStyles.left}>
        <Image source={{uri: comment.avatar}} style={commentStyles.avatar} />
      </View>
      <View style={commentStyles.mid}>
        <Text style={commentStyles.username}>{comment.name}</Text>
        <Text style={commentStyles.comment} numberOfLines={3}>
          {comment.comment}
        </Text>
        {/* <Text>{comment.date}</Text> */}
      </View>
      <View style={commentStyles.right}>
        <TouchableOpacity onPress={handleToggleLike}>
          <Icon
            name="heart"
            size={20}
            color={comment.liked ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function BookCommentsComp(props: BookCommentsCompProps) {
  const {comments, style} = props;

  return (
    <View style={style}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Comments</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerButton}>Write a comment</Text>
          </TouchableOpacity>
        </View>
        <View>
          {comments.map((comment: CommentProps) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerButton: {
    color: '#2EBBC4',
    fontWeight: '500',
  },
});

const commentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  left: {
    marginRight: 16,
  },
  mid: {
    flex: 1,
  },
  right: {
    marginLeft: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  comment: {
    marginTop: 4,
    lineHeight: 16,
  },
});
