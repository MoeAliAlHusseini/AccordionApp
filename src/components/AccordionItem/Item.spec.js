import * as React from 'react';
import {render, screen} from '@testing-library/react-native';
import '@testing-library/jest-dom';

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
  });

  it('should check the text is rendered', () => {
    let nameText = screen.getByText('Name:');
    let jobText = screen.getByText('Job:');

    //using queryByText here since the experience props is null here since the isOpen is false by default
    let experienceText = screen.queryByText('5 years');

    expect(nameText).toBeDefined();
    expect(jobText).toBeDefined();
    expect(experienceText).not.toBeInTheDocument();
  });
});
