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
      name: 'El Gozo del Senor es Nuestra Fortaleza',
      image: Images.elGozoDelSenor,
      date:'31-May-2020',
      function: openDetail8 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/ElGozoDelSenor.mp4?alt=media&token=71dcf05a-5e23-43d5-ac48-a976836055d8', 
                                                                      'nameMedia': 'El Gozo del Senor es Nuestra Fortaleza',
                                                                      'video': true ,
                                                                    })
                }
    },
    {
      name: 'Una Puerta Abierta!',
      image: Images.unaPuertaAbierta,
      date:'24-May-2020',
      function: openDetail8 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/UnaPuertaABierta.mp4?alt=media&token=845f0f91-670a-4ca7-9a37-86442bb54561', 
                                                                      'nameMedia': 'Una Puerta Abierta!',
                                                                      'video': true ,
                                                                    })
                }
    },
    {
      name: 'Cuando Dios pelea nuestras batallas',
      image: Images.DiosPeleaNuestrasBatallas,
      date:'19-May-2020',
      function: openDetail8 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/DiosPeleaNuestrasBatallas.mp3?alt=media&token=0903429c-206e-446f-ad50-ec1d87e06eb4', 
                                                                      'nameMedia': 'Cuando Dios pelea nuestras batallas',
                                                                      'video': false,
                                                                     // 'src': Images.DiosPeleaNuestrasBatallas, 
                                                                    })
                }
    },
    {
      name: 'Estad quietos y conoced que yo soy Dios',
      image: Images.estadQuietos,
      date:'18-May-2020',
      function: openDetail8 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/estadQuietos.mp3?alt=media&token=205418b1-274f-4ddd-8ee5-352f61d63f90', 
                                                                      'nameMedia': 'Estad quietos y conoced que yo soy Dios',
                                                                      'video': false 
                                                                    })
                }
    },
    {
      name: 'Recomendaciones para nuestro viaje espiritual',
      image: Images.viajeEspiritual,
      date:'26-Abr-2020',
      function: openDetail8 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/RecomendacionesParaNuestroViajeEspiritual.mp4?alt=media&token=cb07a054-e25d-4e63-a4a8-527fc0a4a4e0', 
                                                                      'nameMedia': 'Recomendaciones para nuestro viaje espiritual',
                                                                      'video': true 
                                                                    })
                }
    },
    {
      name: 'Analfabetismo Biblico',
      image: Images.analfabetismoBiblico,
      date:'24-Abr-2020',
      function: openDetail8 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/Analfabetismo%20B%C3%ADblico.mp4?alt=media&token=d8e17ce5-52a3-47f6-9a2f-ebd556ed9feb', 
                                                                      'nameMedia': 'Analfabetismo Biblico',
                                                                      'video': true 
                                                                    })
                }
    },
    {
      name: 'Jesus el camino, la verdad y la vida',
      image: Images.jesuselcaminolaverdadylavida,
      date:'19-Abr-2020',
      function: openDetail8 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/jesuselcaminolaverdadylavida.mp3?alt=media&token=f6b30b3b-a187-4630-9a66-a8c4df35bba0', 
                                                                      'nameMedia': 'Jesus el camino, la verdad y la vida',
                                                                      'video': false  
                                                                    })
                }
    },
    {
      name: 'Consumado es',
      image: Images.consumadoes,
      date:'10-Abr-2020',
      function: openDetail7 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/consumadoes.mp3?alt=media&token=26167440-5e5b-4815-8b67-dc85fa0819f5', 
                                                                      'nameMedia': 'Consumado es',
                                                                      'video': false 
                                                                    })
                }
    },
    {
      name: 'Quien movio mi queso',
      image: Images.Queso,
      date:'9-Abr-2020',
      function: openDetail6 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/quienmoviomiqueso.mp3?alt=media&token=5aff7a6b-1931-40c8-b35d-e3cd3d8165b6', 
                                                                      'nameMedia': 'Quien movio mi queso',
                                                                      'video': false
                                                                    })
                }
    },
    {
      name: 'Al Dios no conocido',
      image: Images.DiosNoConocido,
      date:'29-Mar-2020',
      function: openDetail5 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/DiosNoConocido.mp3?alt=media&token=4bcd6e35-bc83-4427-b5f2-fef4ee5707ad', 
                                                                      'nameMedia': 'Dios no conocido',
                                                                      'video': false 
                                                                    })
                }
    },
    {
      name: 'Paz en la tormenta',
      image: Images.PazEnLaTormenta,
      date:'22-Mar-2020',
      function: openDetail4 = () => {
                  props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/PazEnLaTormenta.mp3?alt=media&token=7bf2f61c-8298-4445-b0bd-82311fb4f64d', 
                                                                      'nameMedia': 'Paz en la tormenta',
                                                                      'video': false
                                                                    })
                }
    },
    {
      name: 'Orad sin cesar',
      image: Images.oradSinCesar,
      date:'15-Mar-2020',
      function: openDetail3 = () => {
        props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/OradSinCesar.mp3?alt=media&token=71faadfa-ece3-42ee-9a90-2f9faf88bbb1', 
                                                            'nameMedia': 'Orad sin cesar',
                                                            'video': false
                                                          })
      }
    },
    {
      name: 'Sea La Luz',
      image: Images.seaLaLuz,
      date:'16-Feb-2020',
      function: openDetail2 = () => {
                    props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/seaLaLuz.mp3?alt=media&token=c79d4afd-87d5-4960-bc2a-354e85e3aff4', 
                                                                        'nameMedia': 'Sea La Luz',
                                                                        'video': false 
                                                                      })
                  }
    },
    {
      name: 'Dios es Soberano',
      image: Images.Diosessoberano,
      date:'26-Ene-2020',
      function: openDetail1 = () => {
                    props.navigation.navigate('MessagesDetailScreen', {'uriMedia': 'https://firebasestorage.googleapis.com/v0/b/rn-fccc.appspot.com/o/PredicaDiosEsSoberano.mp3?alt=media&token=5133570f-ad91-42e2-bd27-a1fcbb4a7227', 
                                                                        'nameMedia': 'Dios es Soberano',
                                                                        'video': false 
                                                                      })
                  }
    }
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



