/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';

import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import List from '../../components/AccordionList';

import { setList } from '../../store/reducers/listSlice';

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
  const list = useSelector(state => state.list.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setList(items));

  }, []);


  const handleOnItemPress = (id: number) => {
    // this will handle which item was pressed and act accordingly
    const updatedArrayOfItems = list.map((item, index) => {
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
    dispatch(setList(updatedArrayOfItems));
  };

  const handleOnLearnMore = (id: number) => {

    navigation.navigate('Details', {
      title: list[id].title,
      experience: list[id].experience,
    });
  };


  return (
    <View style={styles.container}>
      <List items={list} onItemPress={handleOnItemPress} onLearnMorePress={handleOnLearnMore} />
    </View>
  );
};

export default Home;
