import React from 'react';

import { View, Text } from 'react-native';

const Details = ({ route }) => {
    const { title, experience } = route.params;

    return (
        <View>
            <Text>Hello {title}</Text>
            <Text>Experience: {experience}</Text>
        </View>
    );
};

export default Details;
