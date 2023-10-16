import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Topp() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.container}>
        <Text style={styles.txtStyling}>ログインに成功しました</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#646464',
    width: 163,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  txtStyling: {
    // padding: 5,
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 16,
  },
});
