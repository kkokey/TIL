import 'react-native';
import React from 'react';
import List from '../List';
import renderer from 'react-test-renderer';
import ListEx from "../../stores/service/ListEx";

it('renders List component', () => {
  const store = new ListEx();
  const navigation = { navigate: jest.fn() };
  const renderedJson = renderer.create(<List listService={store} navigation={navigation} />).toJSON();

  expect(renderedJson).toMatchSnapshot();
});
