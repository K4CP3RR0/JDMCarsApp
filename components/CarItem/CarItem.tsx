import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {View, Text, ImageBackground,StyleSheet, Dimensions} from 'react-native';
import CarInfo from '../CarInfo/';
import StyledButton from '../StyledButton';

const CarItem = (props) => {

    const{name,tagline,image}=props.car;
    const navigation = useNavigation();
    return (
        <View style={styles.carContainer}>
        
        <ImageBackground 
        source={image} 
        style={styles.image}
        // blurRadius={8}
        />
        
        

        <View style={styles.titles}>
          
          <Text style={styles.title}>{name}</Text>
          
          <Text style={styles.subtitle}>{tagline}
          </Text>
       
        </View>
        <View style={styles.buttonsContainer}>

        <StyledButton type="secondary" content="Read More" onPress={()=> {
            // navigation.navigate({'CarInfo'});
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
        textShadowColor: '#000', 
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 8,
        
    
      },
      subtitle:{
        fontSize: 16,
        color:'white',
        textShadowColor: '#000', 
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        
        
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

