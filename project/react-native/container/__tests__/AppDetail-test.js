import 'react-native';
import React from 'react';
import AppDetail from '../AppDetail';
import renderer from 'react-test-renderer';

describe('App Detail screen', () => {
  it('should renders AppDetail', () => {
    const detailRenderJSON = renderer.create(<AppDetail/>).toJSON();
    expect(detailRenderJSON).toMatchSnapshot();
  });
});
