import React from 'react';
import {Text, View} from 'react-native';

import styles from './style';

const Header = (props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
        </View>
    );
}

export default Header;