/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

import List from '../../components/AccordionList';

import styles from './Home.component.style';

const items = [
  {
    title: 'Moe',
    description: 'Software Engineer',
    experience: '4.5 years of web and mobile development experience - Mainly in Javascript, Typescript, React and React Native',
    isOpen: false,
  },
  {
    title: 'Joe',
    description: 'SDET',
    experience: 'Experienced in Cypress',
    isOpen: false,
  },
  {
    title: 'Zoe',
    description: 'Product Owner',
    experience: 'Experienced in handling requirements and communicating with stakeholders',
    isOpen: false,
  },
];

const Home = ({ navigation }) => {

  const [arrayOfItems, setArrayOfItems] = useState(items);

  useEffect(() => {

  }, [arrayOfItems]);


  const handleOnItemPress = (id: number) => {
    // this will handle which item was pressed and act accordingly
    const updatedArrayOfItems = arrayOfItems.map((item, index) => {
      if (index === id) {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      }
      else {
        return item;
      }
    });
    setArrayOfItems(updatedArrayOfItems);
  };

  const handleOnLearnMore = (id: number) => {
    console.log('id on learn more: ', id);
    navigation.navigate('Details', {
      title: arrayOfItems[id].title,
      experience: arrayOfItems[id].experience,
    });
  };


  return (
    <View style={styles.container}>
      <List items={arrayOfItems} onItemPress={handleOnItemPress} onLearnMorePress={handleOnLearnMore} />
    </View>
  );
};

export default Home;
