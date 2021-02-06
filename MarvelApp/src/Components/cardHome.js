import * as React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import ResponsiveText from '../Components/ResponsiveText'


const CardHome = (props) => {
    const name = props.name
    const realName = props.realName
    const imagePath = props.image
    return(
    <TouchableOpacity>
        <View style={styles.card}>
            <Image
                style={styles.cover}
                source={require('../Assets/chars/spider-man.png')}
                resizeMode={'stretch'}
            />
            <View style={styles.text}>
                <ResponsiveText p title={realName} style={{ color: "#fff" }}></ResponsiveText >
                <ResponsiveText h4 title={name} style={{ color: "#fff", fontWeight: 'bold' }}></ResponsiveText >
            </View>
        </View>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 5,
        width: 100,
        height: 200
    },
    cover:{
        borderRadius: 15,
        height: 200,
        width:125,
        position: 'absolute',
        top:0,
        left:0
    },
    text:{
        position: 'absolute',
        bottom:'5%',
        left:5,
        color: '#fff',
        fontFamily: 'gilroy-regular'
    }
  })


export default CardHome;