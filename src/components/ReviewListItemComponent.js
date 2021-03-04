/**
 * Component represent an item of review list
 */
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as Colors from '../styles/colors';
import moment from 'moment';
import Avatar from './AvatarComponent';

const screenWidth = Dimensions.get('window').width;

const ReviewListItem = ({reviewItem}) => {
  return (
    <View style={styles.card}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            url={reviewItem.reviewer_avatar}
            name={reviewItem.reviewer_name}
          />
          <View style={{marginStart: 10}}>
            <Text style={styles.reviewerName}>{reviewItem.reviewer_name}</Text>
            <Text style={styles.reviewTime}>
              {moment(reviewItem.reviewed_at).fromNow()}
            </Text>
          </View>
        </View>
        <Text numberOfLines={5} style={styles.reviewContent}>
          {reviewItem.comment.replaceAll('<p>', '').replaceAll('</p>', '')}
        </Text>
        <TouchableOpacity>
          <View style={{borderBottomWidth: 0.5, alignSelf: 'flex-end'}}>
            <Text style={styles.readMore}>read more</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.colorGray,
    width: screenWidth - 100,
    padding: 15,
  },
  roundedAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  readMore: {
    fontWeight: '500',
    alignSelf: 'flex-end',
    marginTop: 10,
    lineHeight: 18,
  },
  reviewContent: {
    fontWeight: '300',
    marginTop: 5,
  },
  reviewerName: {
    fontWeight: '600',
  },
  reviewTime: {
    color: Colors.colorGray,
    marginTop: 5,
    fontSize: 13,
  },
});

export default ReviewListItem;
