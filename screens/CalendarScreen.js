import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Tile } from 'react-native-elements'

import { Images } from '../theme';
import styles from '../styles/CalendarScreenStyles';

class CalendarScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      calendarData: []
    }
  }

  async componentDidMount () {
    const response = await fetch('https://rn-fccc.firebaseio.com/calendar.json');
    const responseJson = await response.json();
    this.setState({
      calendarData: responseJson
    })

  }

  renderCard (rowData) {
    return (
      <View>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>{this.getMonth().toUpperCase()}</Text>
        </View>

        {this.renderRows(rowData)}
      </View>
    )
  }
  
  getMonth() {
    let months = new Array(12);
    months[0] = "Enero";
    months[1] = "Febrero";
    months[2] = "Marzo";
    months[3] = "Abril";
    months[4] = "May0";
    months[5] = "Junio";
    months[6] = "Julio";
    months[7] = "Agosto";
    months[8] = "Septiembre";
    months[9] = "Octubre";
    months[10] = "Noviembre";
    months[11] = "Diciembre";  

    let current_date = new Date();
    month_value = current_date.getMonth();
    year_value = current_date.getFullYear();

    return months[month_value] + ' ' + year_value;
  }

  renderRows (rowData) {
    return rowData.map((cell) => {
      const {title, info} = cell
      return (
        <View key={title} style={styles.rowContainer}>
          <View style={styles.rowLabelContainer}>
            <Text style={styles.rowLabel}>{title}</Text>
          </View>
          <View style={styles.rowInfoContainer}>
            <Text style={styles.rowInfo}>{info}</Text>
          </View>
        </View>
      )
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />

        <ScrollView style={styles.container}>
          <View style={styles.scrollContent}>
   
                <Tile
                  imageSrc={Images.calendarScreen}
                  imageContainerStyle={styles.logo}
                  title="Calendario Iglesia"
                  containerStyle={styles.tile}
                  //titleStyle={styles.tileTextHomeOptions}
                  featured
                  //caption="Ministries"
                  //captionStyle={styles.h4}
                />
   
            <View>
              {this.renderCard(this.state.calendarData)}
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}


CalendarScreen.navigationOptions = {
    headerTitle: 'Calendario'
}

  
export default CalendarScreen;
