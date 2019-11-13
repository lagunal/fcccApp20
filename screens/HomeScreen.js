import React from 'react';
import { View, Text, ScrollView, Image, Linking, FlatList } from 'react-native';
import { Tile } from 'react-native-elements'

import { Images } from '../theme';
import ButtonBox from '../components/ButtonBox';
import MenuGridTile from '../components/MenuGridTile';
import { MENU } from '../data/data';

//Styles
import styles from '../styles/HomeScreenStyles';


const HomeScreen = props => {
  openAbout = () => {
    props.navigation.navigate('AboutUsScreen')
  }
  
  openFindUs = () => {
    props.navigation.navigate('FindUsScreen')
  }
  
  openPrayer = () => {
    //this.props.navigation.navigate('APITestingScreen')
    Linking.openURL('https://app.easytithe.com/App/Form/59c8b656-0707-4654-9276-8054abbd8d0f')
  }
  
  openGive = () => {
    Linking.openURL('https://app.easytithe.com/app/giving/fccchurch')
  }
  
  openCalendar = () => {
    props.navigation.navigate('CalendarScreen')
  }
  
  openGallery = () => {
    props.navigation.navigate('GalleryScreen')
  }

  const renderGridItem = itemData => {
    return (
      <MenuGridTile
        title={itemData.item.title}
        image={itemData.item.image}
        //keyId={[`${day}Helper${i}`]}
        onSelect={() => {
          // props.navigation.navigate({
          //   routeName: 'CategoryMeals',
          //   params: {
          //     categoryId: itemData.item.id
          //   }
          // });
        }}
      />
    );
  };
    //console.log(MENU);
    return (

      //  <View style={styles.mainContainer}>
      //       <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
      //       <Tile
      //           imageSrc={Images.iglesiaYmca}
      //           imageContainerStyle={styles.logo}
      //           title="First Christian Charismatic Church"
      //           containerStyle={{marginTop: 1}}
      //           titleStyle={styles.tileTextHomeOptions}
      //           featured
      //           caption=""
      //           captionStyle={styles.h1}
      //           />
          <FlatList
              keyExtractor={(item, index) => item.id}
              data={MENU}
              renderItem={renderGridItem}
              numColumns={2}
          />
    //   {/* <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
    //             <Tile
    //             imageSrc={Images.iglesiaYmca}
    //             imageContainerStyle={styles.logo}
    //             title="First Christian Charismatic Church"
    //             containerStyle={{marginTop: 1}}
    //             titleStyle={styles.tileTextHomeOptions}
    //             featured
    //             caption=""
    //             captionStyle={styles.h1}
    //             />
    //       <View style={styles.buttonsContainer}>
    //         <ButtonBox onPress={this.openAbout}  image={Images.ministries} text='Acerca de nosotros' />
    //         <ButtonBox onPress={this.openFindUs}  image={Images.findUs} text='Encuéntranos' />
    //       </View>
    //       <View style={styles.buttonsContainer}>
    //          <ButtonBox onPress={this.openCalendar}  image={Images.calendar} text='Calendario' />
    //         <ButtonBox onPress={this.openGive}  image={Images.give} text='Ofrendar' />
    //       </View>
    //       <View style={styles.buttonsContainer}>
    //         <ButtonBox onPress={this.openPrayer}  image={Images.prayerRequest} text='Pedir Oración' />
    //         <ButtonBox onPress={this.openGallery}  image={Images.iglesia} text='Galeria' />
    //       </View>
    //     </ScrollView>
    //     <View style={styles.banner}>
    //       <Text style={styles.bannerLabel}>First Christian Charismatic Church</Text>
    //     </View> 
    //  </View> */}
    )
}

HomeScreen.navigationOptions = {
  headerTitle: 'Home',
  headerLeft: null,
}

export default HomeScreen;

