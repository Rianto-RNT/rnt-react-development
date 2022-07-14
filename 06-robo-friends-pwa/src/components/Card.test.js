import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('01 - Expect to render Card component', () => {
  expect(shallow(<Card />).length).toEqual(1);
});

// describe('<Card />', () => {
//   it('01 - Expect to render Card component', () => {
//     const app = shallow(<Card />);

//     expect(app.find().length).toEqual(1);
//   });
// });
