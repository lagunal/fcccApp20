import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { Fonts, Colors, Metrics } from '../theme';


const RoundedButton = (props) => {
    
    const getText = () => {
        const buttonText = props.text || props.children || ''
        return buttonText.toUpperCase()
    }

    return (
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{getText()}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.blue,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})

export default RoundedButton;