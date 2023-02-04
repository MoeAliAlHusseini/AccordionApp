/* eslint-disable prettier/prettier */
import React from 'react';

import { View } from 'react-native';

import Item from '../AccordionItem';

import styles from './List.component.style';

interface ListProps {
    items: Array<any>;
    onItemPress(): string
    onLearnMorePress(): string
}

const List = ({ items, onItemPress, onLearnMorePress }: ListProps) => {
    return items.map((item, index) => {
        return (
            <View key={`list - item - ${item} - ${index}`} style={styles.item}>
                <Item
                    id={index}
                    title={item.title}
                    description={item.description}
                    experience={item.experience}
                    isOpen={item.isOpen}
                    onItemPress={onItemPress}
                    onLearnMorePress={onLearnMorePress}
                />
            </View>
        );
    });
};

export default List;
