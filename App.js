import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import Dice1 from './src/images/Dice1.png';
import Dice2 from './src/images/Dice2.png';
import Dice3 from './src/images/Dice3.png';
import Dice4 from './src/images/Dice4.png';
import Dice5 from './src/images/Dice5.png';
import Dice6 from './src/images/Dice6.png';
import Happy from './src/images/happy.gif';

const App = () => {
  const [imgUrl, setImgUrl] = useState(Happy);
  const [score, setScore] = useState(0);

  const RollMe = () => {
    var RandomNumber = Math.floor(Math.random() * 6) + 1;
    setScore(RandomNumber)

    ToastAndroid.showWithGravityAndOffset('Dice Rolled',ToastAndroid.SHORT,ToastAndroid.TOP,0,0)

    switch (RandomNumber) {
      case 1:
        setImgUrl(Dice1);
        break;
      case 2:
        setImgUrl(Dice2);
        break;
      case 3:
        setImgUrl(Dice3);
        break;
      case 4:
        setImgUrl(Dice4);
        break;
      case 5:
        setImgUrl(Dice5);
        break;
      case 6:
        setImgUrl(Dice6);
        break;

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Dice Roller</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={imgUrl} />
        <TouchableOpacity style={styles.button} onPress={() => RollMe()}>
          <Text style={styles.Roll}>Roll Me</Text>
        </TouchableOpacity>
        <Text style={styles.score}>Score: {score}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE0',
  },
  imageContainer: {
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 120,
    height: 120,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#804040',
    marginTop: 40,
  },
  button: {
    width: 150,
    height: 50,
    marginTop: 70,
    backgroundColor: '#AA4A44',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  Roll: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  score:{
    color: '#AA4A44',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop:70,
  },
});

export default App;
