import React from 'react';
import {View, Text, ImageBackground,StyleSheet, Dimensions , VideoBackground} from 'react-native';

import StyledButton from '../StyledButton';

const CarItem = (props) => {

    const{name,tagline,image,video}=props.car;
    return (
        <View style={styles.carContainer}>
        
        <ImageBackground 
        source={image} 
        style={styles.image}
        />
        <VideoBackground
        source={video}
        style={styles.image}/>

        <View style={styles.titles}>
          
          <Text style={styles.title}>{name}</Text>
          
          <Text style={styles.subtitle}>{tagline}
          </Text>
       
        </View>
        <View style={styles.buttonsContainer}>

        <StyledButton type="secondary" content="Read More" onPress={()=> {
            console.warn('Read More was pressed');
        }}/>
       

        </View>
        
      </View>
    );
};
export default CarItem;



const styles = StyleSheet.create({
    carContainer:{
        width: '100%',
        height: Dimensions.get('window').height,
      },
      titles:{
        marginTop: '30%',
        width: '100%',
        alignItems:'center',
    
      },
      title:{
        fontSize: 40,
        fontWeight:'bold',
        color:'white',
        
    
      },
      subtitle:{
        fontSize: 16,
        color:'white',
      
        
        
      },
      subtitleCTA:{
        textDecorationLine:'underline',
      },
      image:{
        width: '100%',
        height: '100%',
        resizeMode:'cover',
        position:'absolute',
      },
      buttonsContainer:{
          position:'absolute',
          width: '100%',
          bottom:50,
      }
});

