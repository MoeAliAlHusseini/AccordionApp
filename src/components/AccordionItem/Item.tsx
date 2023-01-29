import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './Item.component.style';

interface ItemProps {
    title: string;
    description: string;
    isOpen: boolean;
}

const Item = (props: ItemProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ width: '100%' }}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Item;
