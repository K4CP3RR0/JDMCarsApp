import React from "react";
import {View, Text,FlatList,Dimensions} from 'react-native';

import Cars from './Cars';
import CarItem from "../CarItem/";
const CarsList = (props) =>{
    return(
        <View style={styles.container}>
            <FlatList
            data={Cars}
            renderItem={({item}) => <CarItem car={item}/>}
            snapToAlignment={"start"}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}/>
        </View>
    );
};
export default CarsList;


import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        position: "absolute",
    }
});
