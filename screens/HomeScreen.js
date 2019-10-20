import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { Tile } from 'react-native-elements'

import { Images } from '../theme';
import ButtonBox from '../components/ButtonBox';

//Styles
import styles from '../styles/HomeScreenStyles';


const HomeScreen = props => {
    return (
        <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('LaunchScreen')} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity> */}
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
                <Tile
                imageSrc={Images.iglesiaYmca}
                imageContainerStyle={styles.logo}
                title="First Christian Charismatic Church"
                //containerStyle={{marginTop: 1}}
                titleStyle={styles.tileTextHomeOptions}
                featured
                caption=""
                captionStyle={styles.h1}
                />
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openAbout} style={styles.componentButton} image={Images.ministries} text='Acerca de nosotros' />
            <ButtonBox onPress={this.openFindUs} style={styles.usageButton} image={Images.findUs} text='Encuéntranos' />
          </View>
          <View style={styles.buttonsContainer}>
             <ButtonBox onPress={this.openCalendar} style={styles.deviceButton} image={Images.calendar} text='Calendario' />
            <ButtonBox onPress={this.openGive} image={Images.give} text='Ofrendar' />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openPrayer} style={styles.apiButton} image={Images.prayerRequest} text='Pedir Oración' />
            <ButtonBox onPress={this.openFaq} style={styles.usageButton} image={Images.iglesia} text='Galeria' />
          </View>
        </ScrollView>
        <View style={styles.banner}>
          <Text style={styles.bannerLabel}>First Christian Charismatic Church</Text>
        </View>
      </View>
    )
}


export default HomeScreen;

