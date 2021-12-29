import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';




const StyledButton = (props) => {
   

    const {type,content,onPress} = props;
    
    const backgroundColor = type ==="primary" ? '#2B2D42' : '#EDF2F4';
    const color = type ==="primary" ? '#EDF2F4' : '#2B2D42';
    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.button,{backgroundColor:backgroundColor}]}
            onPress={() => onPress()}>
                 
                <Text style={[styles.text,{color:color}]}>{content}</Text>
            </Pressable>
            
        </View>
    );
};
export default StyledButton;
const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:10,

    },

    button:{
        backgroundColor:'#fff',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    
    text:{
        fontSize:12,
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center',
    },
});
