import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles/RoundedButtonStyles';



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

export default RoundedButton;