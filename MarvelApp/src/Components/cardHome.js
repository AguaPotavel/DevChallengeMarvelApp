import * as React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import ResponsiveText from '../Components/ResponsiveText'


const CardHome = (props) => {
    const name = props.name
    const realName = props.realName
    const imagePath = props.image
    return(
        <View style={styles.card}>
            <View style={{position:'absolute', top:0, left:0, bottom:0, right:0, backgroundColor:'black', zIndex: 1, opacity:0.25, borderRadius:15}}></View>
            <Image
                style={styles.cover}
                source={imagePath}
                resizeMode={'stretch'}
            />
            <View style={styles.text}>
                <ResponsiveText p title={realName} style={{ color: "#fff" }}></ResponsiveText >
                <ResponsiveText h4 title={name} style={{ color: "#fff", fontWeight: 'bold', fontFamily:'gilroy-heavy'}}></ResponsiveText >
            </View>
        </View>)
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 5,
        width: 150,
        height: 225
    },
    cover:{
        borderRadius: 15,
        height: 225,
        width:150,
        position: 'absolute',
        top:0,
        left:0
    },
    text:{
        position: 'absolute',
        bottom:'5%',
        left:6,
        color: '#fff',
        zIndex: 2
    }
  })


export default CardHome;