import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from "../component/text"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "main text"
    };
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}> index </Text>
        <Button title='okey' onPress={(value) => {
          alert("okey")
        }}></Button>
        <TouchableOpacity onPress={() => {
          alert(this.state.val)
          this.setState({
            val:"change it"
          })
        }}>
        <CustomText detail="detail of text" text="text property" />

        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    color: "red"

  }
})
