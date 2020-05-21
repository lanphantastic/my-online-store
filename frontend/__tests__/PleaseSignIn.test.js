import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';

import PleaseSignIn from '../components/PleaseSignIn';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser } from '../lib/testUtils';

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: null,
      },
    },
  },
];

const signInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me: fakeUser(),
      },
    },
  },
];

describe('<PleaseSignIn />', () => {
  it('renders the sign in dialog to logged out users', async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignIn />
      </MockedProvider>,
    );
    await wait()
    wrapper.update();
    expect(wrapper.text()).toContain('Please sign in before continuingSign into your accountEmailPasswordSign In!');
    const SignIn = wrapper.find('Signin');
    expect(SignIn.exists()).toBe(true);
    // console.log(wrapper.debug());
  });

  it('renders the child component when the user is signed in', async () => {
    const Hey = () => <p>Hey!</p>;
    const wrapper = mount(
      <MockedProvider mocks={signInMocks}>
        <PleaseSignIn>
          <Hey />
        </PleaseSignIn>
      </MockedProvider>
    );
    await wait()
    wrapper.update();
    // console.log(wrapper.debug())
    expect(wrapper.contains(<Hey />)).toBe(true);
  })
});
