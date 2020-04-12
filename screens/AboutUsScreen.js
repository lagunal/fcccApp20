import React from 'react'
import { View, ScrollView, Image } from 'react-native'
import { Card, Button, Icon, Text } from 'react-native-elements'
import { Images } from '../theme';
import styles from '../styles/AboutUsScreenStyles';


const AboutUsScreen = () => {
 
    return (
      <View style={[styles.container, styles.mainContainer]}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
       
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <View style={styles.scrollContent}>

          {/* <Card
            title='ACERCA DE NOSOTROS'
            image={{ source: (Images.churchIcon) } }>
            <Text style={{marginBottom: 10}}>
                Dios nos ha provisto los recursos necesarios para hacer todo lo que EL nos ha llamado a hacer. Como líderes debemos cuidar de nuestras vidas espirituales: lo que leemos, lo que miramos, los hábitos que practicamos, las actitudes y conversaciones ya que a veces resulta fácil sucumbir bajo el bombardeo constante que hay en el mundo exterior. Para esto es importante y fundamental “caminar de la mano del Espíritu Santo”. Nuestra iglesia se ha forjado una misión y visión de acuerdo a las Sagradas Escrituras. Nuestra misión es RECONCILIAR y nuestra visión es PLANTAR. ¡Vamos a unirnos para llevar a cabo la labor que nuestro Dios nos ha encomendado! No olvidemos que trabajamos para el SEÑOR. 
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card> */}






            <View style={{alignItems: 'center', paddingTop: 60}}>
              <Image source={Images.churchIcon} style={styles.logo} />
              <Text style={styles.titleText}>ACERCA DE NOSOTROS</Text>
            </View>
            <View style={styles.description}>
           
              <Text style={styles.sectionText}>
                Dios nos ha provisto los recursos necesarios para hacer todo lo que EL nos ha llamado a hacer. Como líderes debemos cuidar de nuestras vidas espirituales: lo que leemos, lo que miramos, los hábitos que practicamos, las actitudes y conversaciones ya que a veces resulta fácil sucumbir bajo el bombardeo constante que hay en el mundo exterior. Para esto es importante y fundamental “caminar de la mano del Espíritu Santo”. Nuestra iglesia se ha forjado una misión y visión de acuerdo a las Sagradas Escrituras. Nuestra misión es RECONCILIAR y nuestra visión es PLANTAR. ¡Vamos a unirnos para llevar a cabo la labor que nuestro Dios nos ha encomendado! No olvidemos que trabajamos para el SEÑOR. 
              </Text>
              <View style={{alignItems: 'center', padding: 30}}>
                  <Image source={Images.iconHeart} style={styles.logo} />
                  <Text style={styles.titleText}>MISION: RECONCILIAR</Text>
              </View>
              <Text style={styles.sectionText}>
              “De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas. Y todo esto proviene de Dios, quien nos reconcilió consigo mismo por medio de Cristo y nos ha dado el ministerio de la reconciliación: que Dios estaba en Cristo reconciliando al mundo consigo mismo, no tomándoles en cuenta sus transgresiones y encomendándonos a nosotros la palabra de reconciliación. Así que, somos embajadores en nombre de Cristo; y como Dios os exhorta por medio nuestro, rogamos en nombre de Cristo: ¡Reconciliaos con Dios! (2 Corintios 5:17-20)
              </Text>
              <View style={{alignItems: 'center', padding: 30}}>
                  <Image source={Images.iconBible} style={styles.logo} />  
                  <Text style={styles.titleText}>VISION: PLANTAR</Text>
              </View>
              <Text style={styles.sectionText}>
              {`\u2022`} Plantar la semilla del evangelio y establecer nuevas iglesias donde haya la necesidad, sea local o internacionalmente.
              </Text>
              <Text style={styles.sectionText}>
              {`\u2022`} Levantar las manos caídas y las rodillas endebles y fortalecer a través de la unción del Espíritu los corazones heridos.
              </Text>
              <Text style={styles.sectionText}>
              {`\u2022`} Alcanzar las vidas proclamando el poderoso y glorioso mensaje de Jesucristo al mundo entero a través de todos los medios y recursos disponibles.
              </Text>
              <Text style={styles.sectionText}>
              {`\u2022`} Nutrir la fe de cada creyente y miembro de nuestra iglesia a través del estudio de la Palabra de Dios.
              </Text>
              <Text style={styles.sectionText}>
              {`\u2022`} Tocar los corazones de los necesitados a través de la misericordia y la compasión de nuestro Dios y traerlos a ser parte de la familia de Cristo, nuestro Señor.
              </Text>
              <Text style={styles.sectionText}>
              {`\u2022`} Adiestrar y capacitar líderes por medio del ministerio educativo de la iglesia cuya base es la Palabra de Dios.
              </Text>
              <Text style={styles.sectionText}>
              {`\u2022`} Restaurar al caído, brindando la oportunidad de levantarse con nuestro servicio, amor y compasión. La Palabra de Dios es un vivo ejemplo de misericordia y amor; “y el que crea estar firme, mire que no caiga.”
              </Text>
              




            </View>

          </View>
        </ScrollView>
      </View>
    )
}

AboutUsScreen.navigationOptions = {
    headerTitle: 'Acerca de nosotros'
}

export default AboutUsScreen;
