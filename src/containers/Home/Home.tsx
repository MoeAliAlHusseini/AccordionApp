import React, { useEffect, useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import List from '../../components/AccordionList';

import styles from './Home.component.style';

interface homeProps {
  name: string;
}

const items = [
  {
    title: 'Moe',
    description: 'Software Engineer',
    isOpen: false,
  },
  {
    title: 'Joe',
    description: 'SDET',
    isOpen: false,
  },
  {
    title: 'Zoe',
    description: 'Product Owner',
    isOpen: false,
  },
];

const Home = (props: homeProps) => {
  return (
    <View style={styles.container}>
      <List items={items} />
    </View>
  );
};

export default Home;
