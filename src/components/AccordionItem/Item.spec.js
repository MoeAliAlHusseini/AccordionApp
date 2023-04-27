import * as React from 'react';
import {render, screen} from '@testing-library/react-native';

import Item from './Item';

describe('Item', () => {
  let props = {
    id: 0,
    title: 'Engineer',
    description: 'FrontEnd',
    experience: '5 years',
    isOpen: false,
    onItemPress: jest.fn(),
    onLearnMorePress: jest.fn(),
  };

  beforeEach(() => {
    render(<Item props={props} />);
  });

  it('should render', () => {
    expect(screen).toMatchSnapshot();

    screen.debug();
  });

  it('should check the text is rendered', () => {
    let nameText = screen.getByText('Name:');
    expect(nameText).toBeDefined();
  });
});
