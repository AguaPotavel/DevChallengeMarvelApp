import * as React from 'react';
import {  StyleSheet, View,  } from 'react-native'

const SkillBar = (props) => {
    const color = props.color;
    const range = props.value + '%';
    return(
        <View style={styles.bar}>
            <View style={{backgroundColor: color, width: range}}></View>
        </View>)
}

const styles = StyleSheet.create({
    bar:{
        flex: 1,
        width: "100%",
        borderRadius: 20,
        height: 30,
    }
  })


export default SkillBar;