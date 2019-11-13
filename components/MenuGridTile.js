import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from 'react-native';
import { Tile } from 'react-native-elements';

import { Images, Metrics, Colors } from '../theme';

const MenuGridTile = props => {
    
    let imageSource = 'Images.'+props.image;
    console.log(imageSource);
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
      
           {/* <Image source={Images.calendar} style={{ ...styles.container,...styles.image}} /> */}
           <View style={{ ...styles.container, backgroundColor: Colors.blue}}>
           {/* helper={this.state.data[day + 'Helper' + i]}  */}
                {/* <Text style={styles.title} numberOfLines={2}>
                    {props.title}
                </Text> */}
                <Tile
                    imageSrc={Images.calendar}
                    imageContainerStyle={styles.image}
                    title={props.title}
                    containerStyle={styles.container}
                    //titleStyle={styles.tileTextHomeOptions}
                    featured
                    caption=""
                    //captionStyle={styles.h1}
                />
            </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 5
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: Metrics.wp(5),
    textAlign: 'right',
    color: Colors.snow
     
  },
  image: {
    width: Metrics.wp(40), 
    height: Metrics.hp(15),
    
  }
});

export default MenuGridTile;
