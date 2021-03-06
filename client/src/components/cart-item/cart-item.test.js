import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item';

it('should render CartItem component', () => {
  const mockItem = {
    imageUrl: 'www.testImage.com',
    price: 10,
    name: 'hats',
    quantity: 2
  };

  // const wrapper = shallow(<CartItem/>);
  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
