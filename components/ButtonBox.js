import React from 'react'
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
import { Tile } from 'react-native-elements'
import { Colors, Metrics, Fonts } from '../theme';
//import styles from './styles/ButtonBoxStyles'

const ButtonBox = props => {

    return (
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
       
        <View>
           <Image resizeMode='cover' source={props.image} style={styles.image} />
                    {/* <Tile
                      imageSrc={props.image}
                      imageContainerStyle={{width: Metrics.wp(85), height: Metrics.hp(20) }} 
                      title={props.text}
                      containerStyle={{width: Metrics.wp(85), height: Metrics.hp(20),
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        overflow: 'hidden',
                        //padding: 20
                     
                      }}
                      titleStyle={styles.label}
                      featured
                      //caption=""
                      //captionStyle={styles.h4}
                      /> */}

        <View style={styles.textContainer}>
          <Text style={styles.label}>{props.text}</Text>
        </View>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.wp(46),
    height: Metrics.hp(20),
    //aspectRatio: 0.9,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: Colors.blue,
    borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        overflow: 'hidden',
    //padding: 20,
    //margin: 15
  },
  image: {
    width: Metrics.wp(50),
    height: Metrics.hp(15),
    //margin: Metrics.baseMargin
  },
  label: {
    ...Fonts.style.h6,
    fontSize: Metrics.hp(1.8),
    color: Colors.snow,
  },
  textContainer: {
    //backgroundColor: Colors.blue,
    //fontSize: Metrics.wp(1),
    //justifyContent: 'flex-end',
    alignItems: 'center',
    //alignSelf: 'flex-start',
    //marginTop: Metrics.hp(6)
  }
})

export default ButtonBox;
