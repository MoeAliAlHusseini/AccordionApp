import React from 'react';

import { View, Text } from 'react-native';

import styles from './Details.component.style';

const Details = ({ route }) => {
    const { title, experience } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Name: {title}</Text>
            <Text>Experience: {experience}</Text>
        </View>
    );
};

export default Details;
