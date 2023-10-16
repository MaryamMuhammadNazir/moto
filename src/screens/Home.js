import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import ResponsiveText from '../component/ResponsiveText';
import Card from '../component/Card';
import Bottom from '../component/Bottom';
import ScrollBarr from '../component/ScrollBarr';
import Topp from '../component/Topp';

const {width, height} = Dimensions.get('window');

export default function Home() {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}
        translucent
      />
      <View style={styles.container}>
        <View style={styles.motoFellowView}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/Images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            {/* <Text style={styles.motoFellowText}>motoFellow</Text> */}
          </View>
          <View style={styles.searchContainer}>
            <Image
              source={require('../assets/Images/search.png')}
              style={styles.search}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.topView}>
          <Topp />
        </View>
        {/* <Topp /> */}
        <ScrollBarr />
        {/* <Card /> */}
        <ScrollView style={{marginBottom: 100}}>
          <Card />
          <Card />
          <Card />
        </ScrollView>
        <View style={styles.bottomView}>
          <Bottom />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    // flex: 0.5,
    backgroundColor: 'white',
  },
  motoFellowView: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    padding: 20,
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    height: 24,
    width: 216,
  },
  topView: {
    position: 'absolute',
    top: 45,
    zIndex: 999,
    left: width / 3.5,
  },
  motoFellowText: {
    // width: 111.72,
    fontSize: 6,
    fontWeight: '600',
    color: '#68D4AD',
    marginLeft: 10,
    marginTop: 5,
  },
  searchContainer: {justifyContent: 'flex-end', alignItems: 'center'},
  search: {
    height: 24,
    width: 24,
  },
  bottomView: {
    position: 'absolute',
    top: height / 1.2,
    left: width / 3.5,
    right: 0,
    bottom: 0,
  },
});
