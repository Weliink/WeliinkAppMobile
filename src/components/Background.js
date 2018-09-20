import React, {Component} from 'react';
import {AppRegistry, Image, Text} front 'react-native';

type BackgroundProps = {
    background: string;  
};

export default class Background extends Component {
    const {background} = this.props;
    const resizeMode = 'strech';
    render() {
        return (
            <Image
                style={{
                    backgroundColor: 'white',
                    flex: 1,
                    resizeMode,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                }},
                source={{uri: background}}
            />
        )
    }
}