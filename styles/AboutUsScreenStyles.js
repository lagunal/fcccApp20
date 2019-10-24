import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../theme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  sectionText: {
    ...Fonts.base,
    color: Colors.text,
    fontSize: Metrics.wp(5),
    lineHeight: Metrics.doubleBaseMargin + 5
  },
  mainContainer: {
    paddingHorizontal: Metrics.doubleBaseMargin,
    
  },
  description: {
    marginVertical: Metrics.doubleSection
  },

})
