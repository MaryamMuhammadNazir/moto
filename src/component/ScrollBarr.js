// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';

// export default function ScrollBarr() {
//   return (
//     <View>
//       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//         <View style={styles.topButtonsView}>
//           <TouchableOpacity style={styles.opacity}>
//             <Text styles={styles.topButtons}>すべて</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.opacity}>
//             <Text styles={{}}>バイク</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.opacity}>
//             <Text styles={styles.topButtons}>整備・カスタム</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.opacity}>
//             <Text styles={styles.topButtons}>ツーリング</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.opacity}>
//             <Text styles={styles.topButtons}>グルメ</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.opacity}>
//             <Text styles={styles.topButtons}>レース</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.opacity}>
//             <Text styles={styles.topButtons}>レース</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.opacity}>
//             <Text styles={styles.topButtons}>レース</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   topButtonsView: {
//     flexDirection: 'row',
//     backgroundColor: '#68D4AD',
//   },
//   topButtons: {color: 'black'},
//   opacity: {padding: 10, paddingLeft: 7, paddingRight: 7},
// });

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function ScrollBar() {
  const [selectedButton, setSelectedButton] = useState('すべて');

  const handleButtonPress = button => {
    setSelectedButton(button);
  };

  const renderButtons = [
    'すべて',
    'バイク',
    '整備・カスタム',
    'ツーリング',
    'グルメ',
    'レース',
    'レース',
    'レース',
  ];

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.topButtonsView}>
          {renderButtons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.opacity,
                selectedButton === button && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress(button)}>
              <Text
                style={[
                  styles.topButtons,
                  selectedButton === button && styles.selectedButtonText,
                ]}>
                {button}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topButtonsView: {
    flexDirection: 'row',
    backgroundColor: '#68D4AD',
  },
  topButtons: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  selectedButtonText: {
    color: 'white', // Text color when selected
  },
  opacity: {
    padding: 10,
    paddingLeft: 7,
    paddingRight: 7,
    borderBottomWidth: 3,
    borderColor: 'transparent',
    marginHorizontal: 5,
  },
  selectedButton: {
    borderColor: 'white', // Border color when selected (white line)
  },
});
