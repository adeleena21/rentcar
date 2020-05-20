import React from 'react';
import {View, Text} from 'react-native';

const Header = (props) =>{
    const {textStyle,viewStyle} = styles;
    return(
        <View style = {viewStyle}>
            <Text Style = {textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor :'#8FBC8F',
        justifyContent :'center',
        alignItems :'center',
        height : '60',
        shadowColor :'#000',
        shadowOffset : {width: 0 , height :2},
        shadowOpacity : 0.2,
        elevation : 2,
        position :'relative'
    },
    textStyle:{fontSize : 25
    }
};

export default Header;