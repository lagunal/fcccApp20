import React from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'

import styles from './styles/ButtonBoxStyles'

const ButtonBox = props => {

    return (
      <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
        <Image resizeMode='cover' source={props.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.label}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    )
}

export default ButtonBox;
