/**
 * Component represent a related tour list item
 */
import React from 'react';
import {Text, Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {colorGray} from '../styles/colors';

const RelatedToursListItem = ({relatedItem}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image source={{uri: relatedItem.thumbnail_url}} style={styles.image} />
        <View style={styles.row}>
          <View style={styles.smallRow}>
            <Image source={require('../../assets/images/location.png')} />
            <Text style={styles.smallGrayText}>{relatedItem.city}</Text>
          </View>
          <View style={styles.smallRow}>
            <Image source={require('../../assets/images/star.png')} />
            <Text style={styles.smallText}>
              {relatedItem.average_rating.toFixed(2)}
            </Text>
            <Text style={styles.smallGrayText}>
              {`(${relatedItem.number_of_reviews})`}
            </Text>
          </View>
        </View>
        <Text numberOfLines={2} style={styles.name}>
          {relatedItem.name}
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Text
            style={
              styles.priceText
            }>{`From $${relatedItem.price_in_usd}`}</Text>
          <Text style={{color: colorGray}}>/person</Text>
        </View>
        <TouchableOpacity style={styles.heart}>
          <Image source={require('../../assets/images/ic_heart.png')} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 200,
    borderWidth: 0.5,
    borderColor: colorGray,
  },
  image: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    aspectRatio: 1.5,
    width: 200,
    resizeMode: 'cover',
  },
  name: {
    marginHorizontal: 10,
    marginBottom: 5,
    fontWeight: '300',
  },
  smallRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  smallGrayText: {
    marginStart: 5,
    fontSize: 12,
    color: colorGray,
  },
  smallText: {
    marginStart: 5,
    fontSize: 12,
    fontWeight: '500',
  },
  priceText: {
    fontWeight: '600',
    marginStart: 10,
  },
  heart: {
    position: 'absolute',
    top: 10,
    end: 10,
  },
  row: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default RelatedToursListItem;
