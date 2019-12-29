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
              <View style={styles.imageContainer}>
                    <Image source={Images.bannerAyuno} style={styles.imageContainer} resizeMode='stretch' />        
              </View>
            </Row>

            <Row style={styles.row}>
              <View style={styles.imageContainer}>
                    <Image source={Images.boss} style={styles.imageContainer} resizeMode='stretch' />        
              </View>
            </Row>
     
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

