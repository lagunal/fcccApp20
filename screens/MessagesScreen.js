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
    props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/PredicaDiosEsSoberano.mp3?alt=media&token=5133570f-ad91-42e2-bd27-a1fcbb4a7227', 
                                                        'nameMedia': 'Dios es Soberano' 
                                                      })
  }
  openDetail2 = () => {
    props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/seaLaLuz.mp3?alt=media&token=c79d4afd-87d5-4960-bc2a-354e85e3aff4', 
                                                        'nameMedia': 'Sea La Luz' 
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
                <View style={styles.imageContainer}>
                    <Image source={Images.mensajesPastorales} style={styles.imageContainer} resizeMode='stretch' />        
                </View>
            </Row>
          

            <Row style={styles.rowMessages}>
              <TouchableOpacity onPress={openDetail1} style={styles.imageAyunoContainer} >
                    <Image source={Images.Diosessoberano} style={styles.imageAyunoContainer} resizeMode='stretch' />        
              </TouchableOpacity>
            </Row>
            <Row style={styles.rowMessages}>
              <TouchableOpacity onPress={openDetail2} style={styles.imageAyunoContainer} >            
                    <Image source={Images.seaLaLuz} style={styles.imageAyunoContainer} resizeMode='stretch' />        
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



