import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { Box, NativeBaseProvider, Container, Header, Icon, Fab, Content, Accordion } from 'native-base';
const dataArray = [
    {
        title: 'First Element',
        content: 'Lorem ipsum dolor sit amet',
    },
    { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
    {
        title: 'Third Element',
        content: 'Lorem ipsum dolor sit amet',
    },
];
export class NativeBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    render() {
        return (
                <NativeBaseProvider>   
 
                <Fab style={{ alignItems: "center" }}
                    placement="bottom-right"
                    colorScheme="blue"
                    size="lg"
                    icon={<Icon name="share" type="Entypo" />}
                />
           
            </NativeBaseProvider>

        );
    }
}

export default NativeBase


