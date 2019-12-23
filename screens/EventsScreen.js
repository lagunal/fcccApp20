import React from 'react';
import { View, Text, ScrollView, Image, Linking, FlatList } from 'react-native';
import { Tile } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";

import { Images, Metrics } from '../theme';
import ButtonBox from '../components/ButtonBox';

//Styles
import styles from '../styles/EventsScreenStyles';

const EventsScreen = props => {
//   openAbout = () => {
//     props.navigation.navigate('AboutUsScreen')
//   }
  


    return (
      <View style={styles.mainContainer}>
             {/* <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' /> */}
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
      <Grid>
            <Row style={{alignSelf: 'center'}}>
                  <Tile
                          imageSrc={Images.calendar}
                          imageContainerStyle={styles.imageContainer} 
                          title="Eventos Especiales"
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
                          />
            </Row>

            <Row style={styles.row}>
              <View>
                  <Tile
                          imageSrc={Images.regaloPerfecto}
                          imageContainerStyle={styles.imageContainer} 
                          //title="Eventos Especiales"
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
                          />
              </View>
            </Row>

            <Row style={styles.row}>
                  <Tile
                          imageSrc={Images.maelo}
                          imageContainerStyle={styles.imageContainer} 
                          //="Eventos Especiales"
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
                          />
            </Row>

            <Row style={styles.row}>
                  <Tile
                          imageSrc={Images.boss}
                          imageContainerStyle={styles.imageContainer} 
                          //="Eventos Especiales"
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
                          />
            </Row>

            {/* <Row style={styles.rowMenu}>
              <Col>
                  <ButtonBox onPress={this.openAbout}  image={Images.ministries} text='Acerca de nosotros' />
              </Col>
              <Col>
                  <ButtonBox onPress={this.openFindUs}  image={Images.findUs} text='Encuéntranos' />
              </Col>
            </Row>

            <Row style={styles.rowMenu}
            >
              <Col>
                 <ButtonBox onPress={this.openCalendar}  image={Images.calendar} text='Calendario' />
              </Col>
              <Col>
                   <ButtonBox onPress={this.openGive}  image={Images.give} text='Ofrendar' />
              </Col>
            </Row>
            <Row style={styles.rowMenu}
            >
              <Col>
                   <ButtonBox onPress={this.openPrayer}  image={Images.prayerRequest} text='Pedir Oración' />
              </Col>
              <Col>
                    <ButtonBox onPress={this.openGallery}  image={Images.iglesia} text='Galeria' />
              </Col>
            </Row>   */}
     
        </Grid>
      </ScrollView>
      </View>
    )
}

EventsScreen.navigationOptions = {
  headerTitle: 'Eventos Especiales',
  //headerLeft: null,
}

export default EventsScreen;

