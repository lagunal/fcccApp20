import React from 'react'
import { View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'

import { Images, Colors, Metrics } from '../theme';

class GalleryDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      imageuri: this.props.navigation.getParam('src'),
    };

  }

  render () {
        
              return (
                    
                  <View style={stylesGallery.modelStyle}  >
                    <ScrollView style={stylesGallery.scrollStyle} minimumZoomScale={1} maximumZoomScale={3}>
                        <Image
                        style={stylesGallery.fullImageStyle}
                        //imageUrls={this.state.images}
                        //backgroundColor={Colors.blue}
                        //imageIndex={0}
                        //isVisible={'true'}
                        //renderFooter={(currentImage) => (<View><Text>My footer</Text></View>)}
                        source={this.state.imageuri}
                        //resizeMode='contain'
                        />
                    </ScrollView>
                    <TouchableOpacity onPress={() => {
                                          this.props.navigation.goBack();
                                        }}
                      style={{
                      position: 'absolute',
                      paddingTop: 30,
                      paddingHorizontal: 5,
                      zIndex: 10
                        }}>
                          <Image source={Images.backButton} />
                    </TouchableOpacity>
                    </View>
              );
    }
}

export default GalleryDetailsScreen;

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
    height: Metrics.hp(50),
    width: Metrics.wp(100),
    resizeMode: 'contain',
  },
  scrollStyle: {
    paddingTop: Metrics.hp(20)
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