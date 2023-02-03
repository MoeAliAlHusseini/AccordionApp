/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import List from '../../components/AccordionList';

import styles from './Home.component.style';

const items = [
  {
    id: 0,
    title: 'Moe',
    description: 'Software Engineer',
    isOpen: false,
  },
  {
    id: 0,
    title: 'Joe',
    description: 'SDET',
    isOpen: false,
  },
  {
    id: 0,
    title: 'Zoe',
    description: 'Product Owner',
    isOpen: false,
  },
];

const Home = () => {

  const [arrayOfItems, setArrayOfItems] = useState(items);

  useEffect(() => {
    const updatedArray = items?.map((item, index) => {
      return {
        ...item,
        id: index,
      };
    });
    setArrayOfItems(updatedArray);
  }, []);


  const handleOnItemPress = (id: number) => {
    // this will handle which item was pressed and act accordingly
    console.log('id in the handleOnItemPress: ', id);
  };


  return (
    <View style={styles.container}>
      <List items={arrayOfItems} onItemPress={handleOnItemPress} />
    </View>
  );
};

export default Home;
