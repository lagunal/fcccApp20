import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    //marginBottom: 36,
    //paddingTop: Metrics.section
    //marginBottom: Metrics.hp(5),
    marginTop: Metrics.hp(1)
  },
  logo: {
    //height: Metrics.hp(30),
    width: Metrics.wp(80),
    //resizeMode: 'contain',
    //marginTop: Metrics.hp(2.7),
    //padding: 10,
    alignSelf: 'center',
    //marginLeft: 40
    borderRadius: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
    width: Metrics.wp(100)
  },
  centered: {
    alignItems: 'center',
  },
  componentButton2: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    //padding: 20,
    borderRadius: 20,
    margin: 10
  },

  sectionText: {
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: Metrics.hp(2.5),
    //marginHorizontal: Metrics.wp(1),
    lineHeight: Metrics.hp(3),
    marginVertical: Metrics.hp(1),
    color: Colors.text
  },
  banner: {
    position: 'absolute',
    width: Metrics.screenWidth,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    height: 36
  },
  bannerLabel: {
    ...Fonts.style.h5,
    fontSize: 12,
    color: Colors.snow
  },
  tileTextHomeOptions: {
    //paddingTop: 100,
    //marginTop: 100,
    alignSelf: 'center',
    //textAlignVertical: 'bottom'
  },
  row: {
    alignSelf: 'center',
    marginTop: Metrics.hp(2),
    //backgroundColor: 'yellow', 
    //paddingLeft: Metrics.wp(3), 
    //paddingVertical: Metrics.hp(2), 
    //paddingRight: Metrics.wp(1)
  },
  rowMessages: {
    alignSelf: 'center',
    marginTop: Metrics.hp(2),
    //height: Metrics.hp(1)
    //backgroundColor: 'yellow', 
    //paddingLeft: Metrics.wp(3), 
    //paddingVertical: Metrics.hp(2), 
    //paddingRight: Metrics.wp(1)
  },
  imageContainer: {
    width: Metrics.wp(95), 
    height: Metrics.hp(30),
    //resizeMode: 'cover',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden'
  },
  imageAyunoContainer: {
    width: Metrics.wp(95), 
    height: Metrics.hp(15),
    //resizeMode: 'cover',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden'
  }
})
