import React from 'react';
import { View, Text, ScrollView, Image, Linking, FlatList, TouchableOpacity } from 'react-native';
import { Tile } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";
//import TrackPlayer from 'react-native-track-player';
import { Audio } from 'expo-av';

import { Images, Metrics } from '../theme';
import ButtonBox from '../components/ButtonBox';

//Styles
import styles from '../styles/EventsScreenStyles';


const MessagesScreen = props => {
  openDetail1 = () => {
    props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/predica1.mp3?alt=media&token=d08edee9-e569-45f4-aa9f-dc25a6cba9ed', 
                                                        'nameMedia': 'Dios es Soberano' 
                                                      })
  }

  // async componentDidMount () {
  //   const soundObject = new Audio.Sound();
  //   try {
  //     await soundObject.loadAsync(require('../assets/media/predica1.mp3'));
  //     await soundObject.playAsync();
  //     // Your sound is playing!
  //   } catch (error) {
  //     // An error occurred!
  //   }
  // }

    return (
      <View style={styles.mainContainer}>
             {/* <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' /> */}
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
      <Grid>
            <Row style={{alignSelf: 'center'}}>
                  {/* <Tile
                          imageSrc={Images.mensajesPastorales}
                          imageContainerStyle={styles.imageContainer} 
                          //title="Mensajes Pastorales"
                          containerStyle={{width: Metrics.wp(95), height: Metrics.hp(30),
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            overflow: 'hidden'
                          }}
                          titleStyle={styles.tileTextHomeOptions}
                          featured
                          //caption=""
                          //captionStyle={styles.h4}
                          /> */}
                <View style={styles.imageContainer}>
                    <Image source={Images.mensajesPastorales} style={styles.imageContainer} resizeMode='stretch' />        
                </View>
            </Row>
          

            <Row style={styles.rowMessages}>
              <TouchableOpacity onPress={openDetail1} style={styles.imageAyunoContainer} >
                  {/* <ScrollView minimumZoomScale={1} maximumZoomScale={3}> */}
                    <Image source={Images.Diosessoberano} style={styles.imageAyunoContainer} resizeMode='stretch' />        
                  {/* </ScrollView> */}
              </TouchableOpacity>
            </Row>

       
     
        </Grid>
      </ScrollView>
      </View>
    )
}

MessagesScreen.navigationOptions = {
  headerTitle: 'Mensajes Pastorales',
  //headerLeft: null,
}

export default MessagesScreen;



