/**
 * Component represent the top bar and it's buttons
 */
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const TopBar = ({style}) => {
  return (
    <View style={style}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/ic_close.png')} />
        </TouchableOpacity>
        <View style={styles.right}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/ic_share.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/ic_fav.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  right: {
    flexDirection: 'row',
  },
});

export default TopBar;
