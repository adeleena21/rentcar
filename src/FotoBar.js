import React from 'react';
import {View} from 'react-native';


const FotoBar = (props) =>{
    const {viewStyle} = styles;
    return(
        <View style = {viewStyle}>
        <Image style={{width: 300, height: 300}}
        source={require('./img/mobil.jpg')} />
        </View>
    );
};

export default FotoBar;