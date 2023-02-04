/* eslint-disable prettier/prettier */
import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './Item.component.style';
import Colors from '../../style/colors';

interface ItemProps {
    id: number;
    title: string;
    description: string;
    experience: string;
    isOpen: boolean;
    onItemPress(id: number): string
}

const Item = (props: ItemProps) => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity key={`item - ${props.id}`} style={styles.touchableOpacityContainer} onPress={() => props.onItemPress(props.id)}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </TouchableOpacity>
                {props.isOpen && <View>
                    <Text>
                        {props.experience}
                    </Text>

                </View>}
                {props.isOpen && <Text style={{ color: Colors.BLUE }}>Learn more</Text>}
            </View>

        </>
    );
};

export default Item;
