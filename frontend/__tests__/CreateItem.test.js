import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import Router from 'next/router';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';

import CreateItem, { CREATE_ITEM_MUTATION } from '../components/CreateItem';
import { fakeitem } from '../lib/testUtils';

const dogImage = 'https://dog.com/dog.jpg';
// mock the global fetch API
global.fetch = jest.fn().mockResolvedValue({
  json: () => ({
    secure_url: dogImage,
    eager: [{ secure_url: dogImage }],
  }),
});

describe('<CreateItem />', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider>
        <CreateItem />
      </MockedProvider>,
    );
    const form = wrapper.find('[data-test="form"]');
    expect(toJSON(form)).toMatchSnapshot();
  });
});
