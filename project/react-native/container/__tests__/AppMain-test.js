import 'react-native';
import React from 'react';
import AppMain from '../AppMain';
import renderer from 'react-test-renderer';
import ListEx from "../../stores/service/ListEx";
import List from "../../component/List";

describe('App screen', () => {
  it('should renders AppMain', () => {
    const store = new ListEx();
    const navigation = { navigate: jest.fn() };
    const mainRenderJSON = renderer.create(<AppMain listStore={store} navigation={navigation}/>).toJSON();

    expect(mainRenderJSON).toMatchSnapshot();
  });
});
