/* eslint-disable prettier/prettier */
import React from 'react';

import { Text, View } from 'react-native';

import Item from '../AccordionItem';

import styles from './List.component.style';

interface ListProps {
    items: Array<any>;
    onItemPress(): string
}

const List = ({ items, onItemPress }: ListProps) => {
    return items.map((item, index) => {
        return (
            <View style={styles.item}>
                <Item
                    key={`item - ${item} - ${index}`}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    isOpen={item.isOpen}
                    onItemPress={onItemPress}
                />
            </View>
        );
    });
};

export default List;
