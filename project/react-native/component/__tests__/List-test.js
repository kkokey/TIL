import 'react-native';
import React from 'react';
import List from '../List';
import renderer from 'react-test-renderer';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import ListEx from "../../stores/service/ListEx";

describe('components snapshot', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it('should renders List component', () => {
    const listStore = new ListEx();
    const navigation = { navigate: jest.fn() };
    const renderedJson = renderer.create(<List listStore={listStore} navigation={navigation} />).toJSON();

    expect(renderedJson).toMatchSnapshot();
  });


});
