import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
const filteredRobots = [{
    id: 1,
    name: 'Rianto RNT',
    username: 'rian',
    email: 'rian@rnt.io'
  }]

it('renders without crashing', () => {
  expect(shallow(<CardList robots={filteredRobots}/>)).toMatchSnapshot();
});