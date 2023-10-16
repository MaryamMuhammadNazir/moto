import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ImagSlider from './ImagSlider';

export default function Card() {
  let data =
    'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ';
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 20}}>
        <View style={styles.circle}></View>
        <View style={{paddingLeft: 10}}>
          <Text style={styles.txtstyletop}>田中 太郎</Text>
          <Text style={styles.txtstyle}>九十九里浜</Text>
        </View>
      </View>
      <View style={{height: 320, zIndex: 999, backgroundColor: 'transparent'}}>
        <ImagSlider />
      </View>
      <View style={styles.iconmainView}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('..//assets/Images/bx_like.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={[styles.icon, {marginLeft: 10}]}
              source={require('..//assets/Images/chaticon.png')}
            />
          </TouchableOpacity>
        </View>
        <Text>2日前</Text>
      </View>

      <View
        style={[
          {
            padding: 10,
            // justifyContent: 'space-between',
            flexWrap: 'wrap',
            flexDirection: 'row',
          },
        ]}>
        <View
          style={{
            justifyContent: 'space-between',
            // width: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.circlepink}>
            <Image
              style={styles.iconlike}
              source={require('..//assets/Images/likewhite.png')}
            />
          </View>
          <Text style={styles.countliketxt}>9,999</Text>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            // width: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.circleblue}>
            <Image
              style={styles.iconlike}
              source={require('..//assets/Images/msgwhite.png')}
            />
          </View>
          <Text style={styles.countliketxt}>9,999</Text>
        </View>

        {/* <View style={{}}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={require('..//assets/Images/chaticon.png')}
            />
          </TouchableOpacity>
        </View> */}
      </View>
      <View style={styles.detailmainView}>
        {/* <View style={{}}> */}
        <Text style={styles.detailedText}>
          {data.length > 74 ? data.slice(0, 74) + '...' : data}
        </Text>
        {/* </View> */}
        <Text style={styles.bottmimgtxt}>もっと見る</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // flex: 1,
  },
  circle: {
    width: 35, // Adjust the size of the circle as needed
    height: 35, // Make width and height equal for a perfect circle
    borderRadius: 50, // Half of the width and height to make it a circle
    backgroundColor: 'black',
  },
  circlepink: {
    width: 17, // Adjust the size of the circle as needed
    height: 17, // Make width and height equal for a perfect circle
    borderRadius: 50, // Half of the width and height to make it a circle
    backgroundColor: '#FF4F8E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleblue: {
    width: 17, // Adjust the size of the circle as needed
    height: 17, // Make width and height equal for a perfect circle
    borderRadius: 50, // Half of the width and height to make it a circle
    backgroundColor: '#3FBAFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconlike: {
    width: 10,
    height: 9,
    resizeMode: 'contain',
  },
  txtstyletop: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
    color: 'black',
    textAlign: 'left',
    paddingBottom: 5,
  },
  slidrbottomcontainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    flex: 1,
    paddingTop: 10,
  },
  slidrbottominnercontainer: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  txtstyle: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#646464',
    textAlign: 'left',
  },
  iconmainView: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
  },
  icon: {width: 24, height: 24},
  leftText: {
    justifyContent: 'space-between',
    backgroundColor: 'blue',
  },

  bottmimgtxt: {
    marginLeft: '80%',
    color: '#646464',
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '500',
    paddingBottom: 10,
  },
  detailedTextView: {
    padding: 10,
  },
  detailmainView: {
    flexDirection: 'column',
    width: '100%',
    // alignSelf: 'center',
    paddingHorizontal: 10,
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
  },
  detailedText: {
    color: '#323232',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
  },
  countLikeView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'orange',
    marginTop: 50,
  },
  countliketxt: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    marginLeft: 10,
    marginRight: 20,
  },
});
