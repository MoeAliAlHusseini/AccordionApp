import React from 'react';

import { Text, View } from 'react-native';

import Item from '../AccordionItem';

import styles from './List.component.style';

interface ListProps {
    items: Array<any>;
}

const List = ({ items }: ListProps) => {
    return items.map((item, index) => {
        return (
            <View style={styles.item}>
                <Item
                    title={item.title}
                    description={item.description}
                    isOpen={item.isOpen}
                />
            </View>
        );
    });
};

export default List;
