import React from 'react';
import { View, Text, ScrollView, Image, Linking, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";
//import TrackPlayer from 'react-native-track-player';
import { Audio } from 'expo-av';

import { Images, Metrics } from '../theme';
import ButtonBox from '../components/ButtonBox';

//Styles
import styles from '../styles/EventsScreenStyles';




const MessagesScreen = props => {

  const list = [
    {
      name: 'Dios es Soberano',
      image: Images.Diosessoberano,
      date:'26-Ene-2020',
      function: openDetail1 = () => {
                    props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/PredicaDiosEsSoberano.mp3?alt=media&token=5133570f-ad91-42e2-bd27-a1fcbb4a7227', 
                                                                        'nameMedia': 'Dios es Soberano' 
                                                                      })
                  }
    },
    {
      name: 'Sea La Luz',
      image: Images.seaLaLuz,
      date:'16-Feb-2020',
      function: openDetail2 = () => {
                    props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/seaLaLuz.mp3?alt=media&token=c79d4afd-87d5-4960-bc2a-354e85e3aff4', 
                                                                        'nameMedia': 'Sea La Luz' 
                                                                      })
                  }
    },
    {
      name: 'Orad sin cesar',
      image: Images.oradSinCesar,
      date:'15-Mar-2020',
      function: openDetail3 = () => {
        props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/OradSinCesar.mp3?alt=media&token=71faadfa-ece3-42ee-9a90-2f9faf88bbb1', 
                                                            'nameMedia': 'Orad sin cesar' 
                                                          })
      }
    },
    {
      name: 'Paz en la tormenta',
      image: Images.PazEnLaTormenta,
      date:'22-Mar-2020',
      function: openDetail4 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/PazEnLaTormenta.mp3?alt=media&token=7bf2f61c-8298-4445-b0bd-82311fb4f64d', 
                                                                      'nameMedia': 'Paz en la tormenta' 
                                                                    })
                }
    },
    {
      name: 'Al Dios no conocido',
      image: Images.DiosNoConocido,
      date:'29-Mar-2020',
      function: openDetail5 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/DiosNoConocido.mp3?alt=media&token=4bcd6e35-bc83-4427-b5f2-fef4ee5707ad', 
                                                                      'nameMedia': 'Dios no conocido' 
                                                                    })
                }
    },
  
  ]

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
      <Grid style={{marginBottom: 20}}>
            
            <Row style={{alignSelf: 'center'}}>
                <View style={styles.imageContainer}>
                    <Image source={Images.mensajesPastorales} style={styles.imageContainer} resizeMode='cover' />        
                </View>
            </Row>
          

            {/* <Row style={styles.rowMessages}>
              <TouchableOpacity onPress={openDetail1} style={styles.imageAyunoContainer} >
                    <Image source={Images.Diosessoberano} style={styles.imageAyunoContainer} resizeMode='cover' />        
              </TouchableOpacity>
            </Row>
            <Row style={styles.rowMessages}>
              <TouchableOpacity onPress={openDetail2} style={styles.imageAyunoContainer} >            
                    <Image source={Images.seaLaLuz} style={styles.imageAyunoContainer} resizeMode='cover' />        
              </TouchableOpacity>
            </Row>
            <Row style={styles.rowMessages}>
              <TouchableOpacity onPress={openDetail3} style={styles.imageAyunoContainer} >            
                    <Image source={Images.oradSinCesar} style={styles.imageAyunoContainer} resizeMode='stretch' />        
              </TouchableOpacity>
            </Row>
            <Row style={styles.rowMessages}>
              <TouchableOpacity onPress={openDetail4} style={styles.imageAyunoContainer} >            
                    <Image source={Images.PazEnLaTormenta} style={styles.imageAyunoContainer} resizeMode='stretch' />        
              </TouchableOpacity>
            </Row> */}

        </Grid>

        <View>
          {
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: (l.image) } }
                title={l.name}
                subtitle={l.date}
                bottomDivider
                onPress={l.function}
                chevron
                //rightIcon={{name: 'chevron-forward'}}
                //containerStyle={styles.rowMessages}
              />
            ))
          }
        </View>
      </ScrollView>
      </View>
    )
}

// MessagesScreen.navigationOptions = {
//   headerTitle: 'Mensajes Pastorales',
//   //headerLeft: null,
// }

export default MessagesScreen;



