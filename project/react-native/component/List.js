import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { FlatList, Text, StyleSheet, View, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Utils } from '../constants/Utils';

const walletListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 10,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 13,
    margin: 3,
  },
  addressText: {
    fontSize: 9,
    margin: 3,
  },
});

@observer class List extends React.Component {
  // This method will be called whenever a new object is created.
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      refreshing: false,
      data: this.props.ListStore,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      data: prevState.data
    };
  }


  componentDidMount() {
    this.fetchFromApi('', '', '');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate prevProps');
    console.log('getSnapshotBeforeUpdate prevState');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate prevState');
    console.log('>componentDidUpdate');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  // }

  componentDidCatch(error, info) {
    // fallback UI
    console.error(error);
    console.info(info);
  }


  setState(state, callback) {
    console.log('=======================================state');
    console.log('state=======================================');
    super.setState(state, callback);
  }

  @action
  async fetchHistoryFromApi(accountAddr){
    return '';
  }

  @action
  async fetchFromApi(addr, pubKey, priKey) {
    let resPromise = this.props.listService.ExListPost();
    await resPromise.then( (promiseData) => {

    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  @action
  handlePressAccount() {
    this.props.navigation.navigate('main', { token: true });
  }

  render() {
    const { navigate } = this.props.navigation;
    // console.log(this.props.navigation);
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={walletListStyles.optionIconContainer}>
          <Text>!!</Text>
        </View>
      </View>
    );
  }

  @action
  handleFormSubmit = e => {
    console.info(e)
  };
}

export default List;
