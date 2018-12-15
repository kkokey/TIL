import 'react-native';
import React from 'react';
import AppMain from '../AppMain';
import renderer from 'react-test-renderer';
import ListEx from "../../stores/service/ListEx";

it('renders AppMain', () => {
  const store = new ListEx();
  const tree = renderer.create(<AppMain ListStore={store}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
