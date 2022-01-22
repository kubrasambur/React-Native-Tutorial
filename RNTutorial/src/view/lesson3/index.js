import React, { Component } from 'react';
import { View, Text ,Dimensions, StyleSheet, Image , ScrollView} from 'react-native';

const {width, heigh}=Dimensions.get("screen");
class Lesson3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.view}>
          <ScrollView>
        <Image style={styles.image} source={{uri:"https://picsum.photos/200/300"}}></Image>
        <Image style={styles.image} source={{uri:"https://picsum.photos/200/300"}}></Image>
        <Image style={styles.image} source={{uri:"https://picsum.photos/200/300"}}></Image>
        <Image style={styles.image} source={{uri:"https://picsum.photos/200/300"}}></Image>
        <Image style={styles.image} source={{uri:"https://picsum.photos/200/300"}}></Image>
        <Image style={styles.image} source={{uri:"https://picsum.photos/200/300"}}></Image>
        <Image style={styles.image} source={{uri:"https://picsum.photos/200/300"}}></Image>
        <Image style={styles.image} source={{uri:"https://picsum.photos/200/300"}}></Image>

          </ScrollView>
        <Text> {width}</Text>
        {/* <View style={styles.test}>
            <Text>gsfgd</Text>
        </View> */}
      </View>
    );
  }
}

export default Lesson3;

const styles = StyleSheet.create({
    view:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    test:{
        backgroundColor:"red",
        height:"50%",
        position:"absolute",
        right:50,
        left:20 
    },
    image:{
        width:400,
        height:200
    }

    
});
