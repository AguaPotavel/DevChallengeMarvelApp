import * as React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'


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
            <Text style={styles.realName}>
                {realName}
            </Text>
            <Text style={styles.name}>
                {name}
            </Text>
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
    realName:{
        position: 'absolute',
        top:'63%',
        left:5,
        zIndex: 1,
        fontSize: 12,
        color: '#fff'
    },
    name:{
        position: 'absolute',
        top:'70%',
        left:5,
        zIndex: 1,
        fontSize: 20,
        color: '#fff'
    }
  })


export default CardHome;