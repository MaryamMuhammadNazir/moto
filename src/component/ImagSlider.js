import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {ImageSlider} from 'react-native-image-slider-banner';

const images = [
  {
    img: require('../assets/Images/image1.png'),
  },
];

const ImagSlider = () => {
  return (
    <ImageSlider
      data={[
        {img: require('../assets/Images/image1.png')},
        {img: require('../assets/Images/image2.png')},
        {img: require('../assets/Images/image1.png')},
      ]}
      localImg
      autoPlay={false}
      // timer={5000}
      caroselImageContainerStyle={{
        // backgroundColor: 'red',
        alignSelf: 'center',
      }}
      // previewImageStyle={{width: '50%'}}
      caroselImageStyle={{
        height: 375,
        resizeMode: 'cover',
      }}
      indicatorContainerStyle={{
        position: 'absolute',
        top: 46,
      }}
      onItemChanged={item => console.log('item', item)}
      closeIconColor="#fff"
      activeIndicatorStyle={{
        width: 10,
        height: 10,
        // borderRadius: 5,
        backgroundColor: '#68D4AD',
      }}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 375,
    height: 375,
  },
});

export default ImagSlider;
