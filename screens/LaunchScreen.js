import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import RoundedButton from '../components/RoundedButton';
//import MainNavigator from '../navigation/AppNavigator';
import { Images }  from '../theme';
import styles from '../styles/LaunchScreenStyles';



const LaunchScreen = props => {

    const handleButton = () => {
        props.navigation.navigate('HomeScreen');
        //return <MainNavigator />
    }

    return (
        <View style={styles.mainContainer}>
        <Image source={Images.pastores}  style={styles.backgroundImage}/>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logoFCCC} style={styles.logo} />
            <Text style={styles.titleTextHome}>
              Primera Iglesia Cristiana Carismática
            </Text>
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionTextSmall}>
              Así que, somos embajadores en nombre de Cristo; y como Dios os exhorta por medio nuestro, rogamos en nombre de Cristo: ¡Reconciliaos con Dios! (2 Corintios 5:20)
            </Text>
          </View>

          
          <RoundedButton onPress={handleButton}>
          Entrar
          </RoundedButton>
        </ScrollView>
      </View>

    )
}


export default LaunchScreen;

