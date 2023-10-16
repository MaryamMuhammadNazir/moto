import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

export default function Bottom() {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  // const [imageSource1, setImageSource1] = useState(
  //   require('../assets/Images/homewhite.png'),
  // );
  // const [imageSource2, setImageSource2] = useState(
  //   require('../assets/Images/tabler_motorbike.png'),
  // );

  // const handleButton1Click = () => {
  //   setButton1Style([styles.button, styles.clickedButton]);
  //   setButton2Style(styles.button);
  //   setImageSource1(require('../assets/Images/homeSelect.png'));
  //   setImageSource2(require('../assets/Images/tabler_motorbike.png'));
  // };

  // const handleButton2Click = () => {
  //   setButton2Style([styles.button, styles.clickedButton]);
  //   setButton1Style(styles.button);
  //   setImageSource2(require('../assets/Images/greendairy.png'));
  //   setImageSource1(require('../assets/Images/homewhite.png'));
  // };

  return (
    <View style={styles.containers}>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: button1 ? 'white' : '#68D4AD'},
        ]}
        onPress={() => {
          setButton1(true);
          setButton2(false);
        }}>
        <Image
          style={{height: 36, width: 43}}
          resizeMode="cover"
          source={
            !button1
              ? require('../assets/Images/homewhite.png')
              : require('../assets/Images/homeselect.png')
          }
        />
        <Text style={!button1 ? styles.buttonText : styles.clickedButtonText}>
          投稿
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: button2 ? 'white' : '#68D4AD'},
        ]}
        onPress={() => {
          setButton1(false);
          setButton2(true);
        }}>
        <Image
          style={{height: 36, width: 43, resizeMode: 'cover'}}
          source={
            !button2
              ? require('../assets/Images/dairy.png')
              : require('../assets/Images/greendairy.png')
          }
        />
        <Text style={!button2 ? styles.buttonText : styles.clickedButtonText}>
          整備記録
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    backgroundColor: '#68D4AD',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 50,
    width: 192,
    height: 72,
  },
  button: {
    padding: 5,
    margin: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    height: 62,
    width: 85,
    color: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  clickedButton: {
    backgroundColor: 'white',
    color: 'red', // Text color for clicked state
  },
  clickedButtonText: {
    color: '#68D4AD',
  },
});
