import React from 'react';
import { View, Text } from 'react-native';

import styles from './Text.component.style';

interface TextProps {
    value: string;
    containerStyle: Object;
    textStyle: Object;
}

const Text = ({ value, containerStyle, textStyle }: TextProps) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={textStyle}>{value}</Text>
        </View>
    );
};

export default Text;
