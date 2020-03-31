import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  sectionHeaderContainer: {
    ...ApplicationStyles.darkLabelContainer
  },
  sectionHeader: {
    ...ApplicationStyles.darkLabel,
    paddingTop: 50,
    fontSize: Metrics.wp(6),
    textAlign: 'center'
  },
  cardTitle: {
    alignSelf: 'center',
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    marginVertical: Metrics.baseMargin,
    color: Colors.snow
  },
  cardContainer: {
    backgroundColor: Colors.ember,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
    shadowColor: Colors.panther,
    shadowOffset: {
      height: 7,
      width: 7
    },
    shadowRadius: 2,
    paddingBottom: Metrics.baseMargin,
    margin: Metrics.baseMargin
  },
  rowContainer: {
    flexDirection: 'row',
    borderColor: Colors.snow,
    borderWidth: 0.5,
    borderRadius: 2,
    //width: Metrics.wp(100),
    //marginLeft: 0
    marginHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.hp(1)
  },
  rowLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.blue
  },
  rowLabel: {
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    //marginVertical: Metrics.baseMargin,
    marginLeft: Metrics.wp(4),
    color: Colors.snow
  },
  number: {
    fontSize: Metrics.hp(6),
    fontWeight: 'bold',
    color: Colors.snow,
    marginLeft: Metrics.wp(4)
  },
  rowInfoContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: Colors.blue
  },
  rowInfo: {
    fontSize: Fonts.size.regular,
    margin: Metrics.baseMargin,
    color: Colors.snow
  },
  logo: {
    height: Metrics.hp(53),
    width: Metrics.wp(100),
    //resizeMode: 'contain',
    marginTop: Metrics.hp(10)
  },
  tile : {
    marginBottom: Metrics.hp(4),

  },
  imageTop: {
    width: Metrics.wp(95), 
    height: Metrics.hp(30),
    //resizeMode: 'cover',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden'
  }
})
