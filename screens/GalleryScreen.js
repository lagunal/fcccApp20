import React from 'react'
import { View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'

import { Images } from '../theme';
import styles from '../styles/GalleryScreenStyles';


const GalleryScreen = (props) => {
 
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

  ShowModalFunction = (src) => {
    props.navigation.navigate('GalleryDetailsScreen', {'src': src})
  }

  const dataSource = items;

    return (
        <View style={[styles.container, styles.mainContainer]}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />  
        
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}> 
        <View style={styles.container}>
            <FlatList
            data={dataSource}
            renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <TouchableOpacity
                    key={item.id}
                    style={{ flex: 1 }}
                    onPress={() => {
                    this.ShowModalFunction(item.src);
                    }}>
                    <Image
                    style={styles.image}
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


export default GalleryScreen;

GalleryScreen.navigationOptions = {
    headerTitle: 'Galeria de fotos'
}
