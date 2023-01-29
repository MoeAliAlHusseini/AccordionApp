import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Home.component.style';

interface homeProps {
  name: string;
}

const Home = (props: homeProps) => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

export default Home;
