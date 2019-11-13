import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth / 2,
    height: Metrics.hp(5),
    //aspectRatio: 0.9,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 30,
    padding: 20,
    margin: 15
  },
  image: {
    width: Metrics.wp(50),
    height: Metrics.hp(20),
    //margin: Metrics.baseMargin
  },
  label: {
    ...Fonts.style.h2,
    fontSize: Metrics.hp(2.5),
    color: Colors.text
  },
  textContainer: {
    backgroundColor: Colors.blue,
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: Metrics.hp(1)
  }
})
