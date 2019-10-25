import React from 'react'
import { View, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

import { Images, Colors } from '../theme';
import styles from '../styles/GalleryScreenStyles';


class GalleryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      imageuri: '',
      ModalVisibleStatus: false,
    };
  }

  ShowModalFunction = (src) => {
    this.props.navigation.navigate('GalleryDetailsScreen', {'src': src})

  }
 
  componentDidMount() {
    var that = this;

    let items = [
      { id: 1, src: Images.iglesiaYmca },
      { id: 2, src: Images.servicio },
      { id: 3, src: Images.iglesia },
      { id: 4, src: Images.calendarImage },
      { id: 5, src: Images.ninos },
      { id: 6, src: Images.bautizo1 },
      { id: 7, src: Images.bautizo2 },
      { id: 8, src: Images.clase },
      { id: 9, src: Images.jovenes },
      { id: 10, src: Images.ninos2 },

    ];

    that.setState({
      dataSource: items,
    });
  }
  

  render () {
   
              return (
                <View style={[styles.container, styles.mainContainer]}>
                <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />  
               
               <ScrollView showsVerticalScrollIndicator={false} style={styles.container}> 
                <View style={stylesGallery.container}>
                  <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                      <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                        <TouchableOpacity
                          key={item.id}
                          style={{ flex: 1 }}
                          onPress={() => {
                            this.ShowModalFunction(item.src);
                          }}>
                          <Image
                            style={stylesGallery.image}
                            source={
                              item.src
                            }
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View> 


        </ScrollView>  
       </View> 
    );
  }
}

export default GalleryScreen;

GalleryScreen.navigationOptions = {
    headerTitle: 'Galeria de fotos'
}
  
const stylesGallery = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  image: {
    height: 120,
    width: '100%',
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: Colors.blue,
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 9,
    right: 9,
    position: 'absolute',
  },
});