import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class CustomText extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.detail}>{this.props.text}</Text>
                <Text style={styles.detail}>{this.props.detail}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    detail: {
        color: "grey",
        fontSize: 30
    },
    view:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start"
    }
});
