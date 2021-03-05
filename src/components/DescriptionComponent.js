/**
 * Component represent Description section of tour detail
 */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import * as Colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import Line from './LineComponent';

const Description = ({includes, excludes}) => {
  const [includedServices, setIncludedServices] = useState([]);
  const [excludedServices, setExcludedServices] = useState([]);

  useEffect(() => {
    handleIncludeExclude(includes, excludes);
  }, []);

  /**
   * Function to process inclusions and exclusions and convert them into arrays
   *
   * @param {String} includedStr Raw string contains inclusions from api.
   * @param {String} excludedStr Raw string contains exclusions from api.
   */
  const handleIncludeExclude = (includedStr, excludedStr) => {
    setIncludedServices(includedStr.split('<br>'));
    setExcludedServices(excludedStr.split('<br>'));
  };

  /**
   * Function to render inclusion and exclusion row item
   *
   * @param {boolean} isIncluded Indicate wether the service is included or excluded.
   * @param {String} title The title of the service.
   * @return {Component} Component to render inclusion and exclusion row item.
   */
  const buildItem = (isIncluded, title) => {
    return (
      <View style={styles.rowContainer} key={title}>
        {isIncluded ? (
          <Icon name="check" size={18} color={Colors.colorPrimary} />
        ) : (
          <Icon name="x" size={18} color={Colors.red} />
        )}
        <Text style={styles.rowText}>{title}</Text>
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity>
        <View style={styles.fullDescRow}>
          <Text style={styles.title}>Full Description</Text>
          <Icon name="chevron-right" size={24} />
        </View>
      </TouchableOpacity>
      <Line />
      <Text style={styles.title}>What's Included</Text>
      {includedServices.map((service) => {
        return buildItem(true, service);
      })}
      {excludedServices.map((service) => {
        return buildItem(false, service);
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    ...commonStyles.sectionTitle,
    marginHorizontal: 15,
  },
  fullDescRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 15,
    marginVertical: 6,
  },
  rowText: {
    fontSize: 16,
    marginStart: 15,
    opacity: 0.8,
  },
});

export default Description;
