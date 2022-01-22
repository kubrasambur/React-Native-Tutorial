import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, PricingCard, Rating } from "react-native-elements"



class NativeElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    ratingCompleted(rating) {
        console.log('Rating is: ' + rating);
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Avatar
                    size="large"
                    rounded
                    source={{ uri: "https://picsum.photos/200/300" }}
                    onPress={() => console.log("works")}
                    activeOpacity={0.7}
                />
                <PricingCard
                    color="red"
                    title="Enterprise"
                    price="$49"
                    info={['100 Users', 'One on One Support', 'All Core Features']}
                    button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
                />
                <Rating
                    type="custom"
                    ratingColor="#3498db"
                    ratingCount={10}
                    imageSize={30}
                    onFinishRating={this.ratingCompleted}
                    showRating
                    style={{ paddingVertical: 10 }}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    rating: {
        paddingVertical: 10,
    },
});

export default NativeElements;
