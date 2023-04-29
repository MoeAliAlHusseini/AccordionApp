/* eslint-disable prettier/prettier */
import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './Item.component.style';
import Colors from '../../style/colors';
import Icons from '../../style/icons';

interface ItemProps {
    id: number;
    title: string;
    description: string;
    experience: string;
    isOpen: boolean;
    onItemPress(id: number): void
    onLearnMorePress(id: number): void
}

const Item = (props: ItemProps) => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity testID="itemTouchableOpacity" activeOpacity={0.6} key={`item - ${props.id}`} style={styles.touchableOpacityContainer} onPress={() => props.onItemPress(props.id)}>
                    <View>
                        <Text style={styles.title}>Name: {props.title}</Text>
                        <Text style={styles.description}>Job: {props.description}</Text>
                    </View>
                    <Image source={Icons.chevronIcon} style={[styles.chevron, { transform: [{ rotate: props.isOpen ? '0deg' : '180deg' }] }]} />
                </TouchableOpacity>
                {props.isOpen && <View>
                    <Text>
                        {props.experience}
                    </Text>

                </View>}
                {props.isOpen && <TouchableOpacity testID="learnMoreTouchableOpacity" onPress={() => props.onLearnMorePress(props.id)}><Text style={{ color: Colors.BLUE }}>Learn more</Text></TouchableOpacity>}
            </View>

        </>
    );
};

export default Item;
