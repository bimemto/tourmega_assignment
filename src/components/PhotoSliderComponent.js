/**
 * Component represent tuor image slider
 */
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import * as Colors from '../styles/colors';

const PhotoSlider = ({images}) => {
  return (
    <SliderBox
      images={images}
      sliderBoxHeight={300}
      onCurrentImagePressed={(index) => console.log(`image ${index} pressed`)}
      dotColor={Colors.colorPrimary}
      inactiveDotColor={Colors.colorGray}
      circleLoop
      dotStyle={{
        width: 15,
        height: 15,
        borderRadius: 15,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
      }}
    />
  );
};

export default PhotoSlider;
