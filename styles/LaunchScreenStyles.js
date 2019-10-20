import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../theme';


export default StyleSheet.create({
  //...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
   width: Metrics.wp(100),
   height: Metrics.hp(100)
  },
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.hp(5),
    height: Metrics.hp(15),
    width: Metrics.wp(50),
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center',
    marginVertical: 0,
  },
  titleTextHome: {
    ...Fonts.style.h2,
    fontSize: Metrics.hp(3.5),
    color: Colors.snow,
    height: Metrics.hp(10),
    textAlign: 'center'
  },
  section: {
    margin: Metrics.section,
    padding: Metrics.baseMargin
  },
  sectionTextSmall: {
    ...Fonts.style.description,
    fontSize: Metrics.hp(2.5),
    color: Colors.snow,
    marginTop: Metrics.hp(30),
    marginBottom: Metrics.hp(0),
    textAlign: 'center'
  },
})
