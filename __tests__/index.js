import 'react-native';
import React from 'react';
import CircleCi from '../js/index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <CircleCi />,
  );
  expect(tree).toMatchSnapshot();
});
