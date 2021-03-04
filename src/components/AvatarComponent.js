/**
 * Component to render user circle avatar
 */
import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {colorGray, colorPrimary} from '../styles/colors';

/**
 * Returns Component that represent circle avatar
 *
 * @param {String} url The avatar image url.
 * @param {String} name The name of user. If avatar url is fail to load, then display circle avatar with the first letter of user name inside.
 * @return {Component} Component that represent circle avatar.
 */
const Avatar = ({url, name}) => {
  if (url && url.length > 0) {
    return <Image source={{uri: url}} style={styles.roundedAvatar} />;
  } else {
    return (
      <View style={styles.avatarContainer}>
        <Text style={styles.textAvatar}>
          {name.substring(0, 1).toUpperCase()}
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  roundedAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textAvatar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colorGray,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorPrimary,
  },
});

export default Avatar;
