/**
 * Component represent "Before You Book" section of tour detail
 */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import * as Colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import ReviewListItem from './ReviewListItemComponent';
import Icon from 'react-native-vector-icons/Feather';

const Review = ({tour}) => {
  /**
   * We just want to show a short list of reviews so if reviews count is greater than 10, we pick the first 10 reviews
   */
  let reviewList = tour.reviews;
  let all = tour.reviews.length;
  if (reviewList.length > 10) {
    reviewList = reviewList.splice(10);
  }
  return (
    <View style={commonStyles.innerContainer}>
      <TouchableOpacity>
        <View style={styles.fullDescRow}>
          <Text style={commonStyles.sectionTitle}>Before You Book</Text>
          <Icon name="chevron-right" size={24} />
        </View>
      </TouchableOpacity>
      <View style={[commonStyles.line, {marginHorizontal: 0}]} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 28, height: 28}}
          resizeMode="stretch"
          source={require('../../assets/images/star.png')}
        />
        <Text style={styles.rateText}>
          {tour.average_rating + ' (' + tour.no_of_reviews + ')'}
        </Text>
      </View>
      <FlatList
        data={reviewList}
        horizontal
        renderItem={renderItem}
        keyExtractor={(_, index) => `key_${index}`}
        style={styles.reviewListStyle}
        ItemSeparatorComponent={renderSeparator}
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={{color: Colors.colorPrimary}}>
            {'Show all ' + all + ' Reviews'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

/**
 * Render list view separator to show space between items
 */
const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: 20,
      }}
    />
  );
};

const renderItem = ({item, _}) => {
  return <ReviewListItem reviewItem={item} />;
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.colorPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
    marginTop: 20,
  },
  fullDescRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 15,
  },
  reviewListStyle: {
    marginTop: 20,
  },
});

export default Review;
