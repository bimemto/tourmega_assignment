/*
  Component represent for Activity Overview section of tour detail
 */

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colorPrimary} from '../styles/colors';
import commonStyles from '../styles/commonStyles';

const ActivityOverview = ({tour}) => {
  /**
   * Function to render activity row item
   * Returns Component to render row item.
   *
   * @param {String} image The icon of activity item.
   * @param {String} title The title of activity item.
   * * @param {boolean} highlight should highlight the activity icon and text color.
   * @return {Component} Component to render row item.
   */
  const buildItemRow = (image, title, highlight) => {
    return (
      <View style={styles.rowContainer}>
        <Image
          style={highlight ? styles.imageAvailable : styles.image}
          source={image}
        />
        <Text style={highlight ? styles.rowTextAvailable : styles.rowText}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container} testID="overview">
      <Text style={commonStyles.sectionTitle}>Activity Overview</Text>
      {tour.cancellation_policy && tour.cancellation_policy.length > 0
        ? buildItemRow(
            require('../../assets/images/cancellation.png'),
            'Free Cancelation',
            true,
          )
        : null}
      {tour.duration_in_text && tour.duration_in_text.length > 0
        ? buildItemRow(
            require('../../assets/images/duration.png'),
            tour.duration_in_text,
          )
        : null}
      {tour.meeting_point_or_pickup_address &&
      tour.meeting_point_or_pickup_address.length > 0
        ? buildItemRow(
            require('../../assets/images/car.png'),
            'Pickup included',
          )
        : null}
      {tour.max_quantity && tour.max_quantity > 0
        ? buildItemRow(
            require('../../assets/images/people.png'),
            `Up to ${tour.max_quantity} people`,
          )
        : null}
      {tour.languages && tour.languages.length > 0
        ? buildItemRow(
            require('../../assets/images/language.png'),
            'Offer in English',
          )
        : null}
      {tour.covid19_precautions && tour.covid19_precautions.length > 0
        ? buildItemRow(
            require('../../assets/images/covid.png'),
            'COVID-19 Precautions',
          )
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rowText: {
    fontSize: 14,
    marginStart: 15,
    opacity: 0.6,
  },
  rowTextAvailable: {
    fontSize: 16,
    marginStart: 15,
    color: colorPrimary,
  },
  imageAvailable: {
    tintColor: colorPrimary,
    width: 30,
    height: 30,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default ActivityOverview;
