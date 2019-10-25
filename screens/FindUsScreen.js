import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'

import { Images } from '../theme';

// Styles
import styles from '../styles/FindUsScreenStyles';

const FindUsScreen = () => {

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
  
        <ScrollView style={styles.container}>
          <View style={styles.scrollContent}>
            
            <View style={styles.section}>
                <View style={{alignItems: 'center', paddingTop: 30}}>
                  <Image source={Images.findUsIcon} style={styles.logo} />
                  <Text style={styles.titleText}>Dirección</Text>
                </View>
                <Text style={styles.sectionText} >
                    224 Cook Ave. Meriden CT 06451
                 </Text>
                <View style={{alignItems: 'center', paddingTop: 10}}>
                    <Image source={Images.churchIcon} style={styles.logo} />
                    <Text style={styles.titleText}>Servicios</Text>    
                </View>
                <Text style={styles.sectionText} >
                  Hora de Oración / Escuela Ministerial {`\n`}
                    Miercoles 7:00 PM {`\n`}
                  Servicio de Adoración / Escuela Bíblica {`\n`}
                    Viernes 7:00 PM {`\n`}
                  Servicio de Adoración {`\n`}
                    Domingo 10:00 AM - 12:00 PM    
                </Text>
                <View style={{alignItems: 'center', paddingTop: 20}}>
                  <Image source={Images.iconoPhone} style={styles.logo} />
                  <Text style={styles.titleText}>Teléfonos</Text>
                </View>
                <Text style={styles.sectionText} >
                  (203)-237-1122 
                </Text> 
                <View style={{alignItems: 'center', paddingTop: 20}}>
                  <Image source={Images.iconEmail} style={styles.logo} />
                  <Text style={styles.titleText}>Correo Electrónico</Text>
                </View>
                <Text style={styles.sectionText} >
                  ernie4m@yahoo.com
                </Text> 
            </View>

            <View style={styles.screenButtons} />
          </View>
        </ScrollView>
      </View>
    )
  }


FindUsScreen.navigationOptions = {
    headerTitle: 'Encuéntranos'
}

export default FindUsScreen;