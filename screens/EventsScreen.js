import React from 'react';
import { View, Text, ScrollView, Image, Linking, FlatList, TouchableOpacity } from 'react-native';
import { Tile } from 'react-native-elements'
import { Col, Row, Grid } from "react-native-easy-grid";

import { Images, Metrics } from '../theme';
import ButtonBox from '../components/ButtonBox';

//Styles
import styles from '../styles/EventsScreenStyles';

const EventsScreen = props => {
  // openScreen = () => {
  //   props.navigation.navigate('AyunoScreen')
  // }
  


    return (
      <View style={styles.mainContainer}>
             {/* <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' /> */}
      <ScrollView minimumZoomScale={1} maximumZoomScale={3} showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
      <Grid>

            {/* <Row style={styles.row}>
              <TouchableOpacity onPress={openScreen} style={styles.imageContainer}>
                    <ScrollView minimumZoomScale={1} maximumZoomScale={3}>
                      <Image source={Images.bannerAyuno} style={styles.imageContainer} resizeMode='stretch' />    
                    </ScrollView>    
              </TouchableOpacity>
            </Row> */}

            <Row style={{alignSelf: 'center'}}>
              <View style={styles.imageContainer}>
                        <Image source={Images.movieLikeArrows} style={styles.imageContainer} resizeMode='stretch' />  
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

