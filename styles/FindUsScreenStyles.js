import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Fonts, Colors } from '../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  sectionText: {
    ...Fonts.normal,
    paddingVertical: Metrics.doubleBaseMargin,
    color: Colors.text,
    fontSize: Metrics.wp(5.5),
    marginVertical: Metrics.smallMargin,
    textAlign: 'center'
  },
  
})
