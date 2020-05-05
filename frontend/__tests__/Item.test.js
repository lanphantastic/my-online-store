import React from 'react';
import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';

const fakeItem = {
  id: 'ABC123',
  title: 'A Cool item',
  description: 'Hdesljsf',
  image: 'dog.jpg',
  largeImage: 'largeDog.jpg',
  price: 5000,
};

describe('<Item/>', () => {
  it('renders the image properly', () => {
  const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const img = wrapper.find('img');
    // console.log(img.debug({verbose: true}))
    // console.log(img.props())
    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title);
  })

  it('renders the priceTag and title', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const PriceTag = wrapper.find('PriceTag');
    expect(PriceTag.children().text()).toBe('$50');
    expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
  });

  it('renders out the buttons properly (Edit, Add to cart, and Delete Item)', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const buttonList = wrapper.find('.buttonList');
    console.log(buttonList.debug())
    // console.log(buttonList);
    console.log(buttonList.children().length);
    expect(buttonList.children()).toHaveLength(3);
    expect(buttonList.find('Link')).toHaveLength(1);
    expect(buttonList.find('AddToCart').exists()).toBe(true);
    expect(buttonList.find('DeleteItem').exists()).toBe(true);
    // expect(buttonList.find('Link').exists()).toBeTruthy();
  })
});
