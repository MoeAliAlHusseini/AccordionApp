import * as React from 'react';
import {render, screen} from '@testing-library/react-native';
import '@testing-library/jest-dom';

import List from './List';

const items = [
  {
    title: 'Moe',
    description: 'Software Engineer',
    experience:
      '4.5 years of web and mobile development experience - Mainly in Javascript, Typescript, React and React Native',
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
    experience:
      'Experienced in handling requirements and communicating with stakeholders',
    isOpen: false,
  },
];

describe('List', () => {
  let props = {
    items: items,
    onItemPress: jest.fn(),
    onLearnMorePress: jest.fn(),
  };

  beforeEach(() => {
    render(<List props={props} />);
  });

  it('should render', () => {
    expect(screen).toMatchSnapshot();

    screen.debug();
  });
});
