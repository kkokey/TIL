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
      data: this.props.WalletsStore,
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
    const URL = `${Utils.serverUrl()}/request/gettransactions?address=${accountAddr}`;
    try {
      const fetchResult = fetch(URL);
      return await fetchResult
        .then((response) => response.json())
        .then((resJson) => {
          this.setState({
            tranList: resJson.data,
            lastTran: resJson.data[0].timestamp,
          });
          return resJson;
        });
    } catch (error) {
      console.error(error);
    }
    return '';
  }

  @action
  async fetchFromApi(addr, pubKey, priKey) {
    if( addr === '' || pubKey === '' || priKey === '') {
      addr = '0x6f085df4022b83c80e6c61caf5ccbe128755cf874a28c2';
      pubKey = '82df74db81fd0c1072aa0a6679a9ad34b36899044512c68b13edc0d91dcbee7d';
      priKey = 'e201ef79c6dd79b7611d94b4ba877d7c18855a60aaa7cf6b00057a726456336c';
    }
    console.log('fetchFromApi');
    console.log(this.props.walletListStore);
    await this.props.walletListStore.addCustomLubicsWallet('지갑',addr, priKey, pubKey);

    // addr = '0x6fb6085c3fdba5f30bf6b66fcc0902d5d946f464743846';
    // priKey = 'a44c7d1c99f28c5be57bade8b1162e39d8ce31586bdc70f700057a0d7626810e';
    // pubKey = 'a78053952ae664e40b21ea06d2b36e50679086afbecd6a0f9d83c53df53f2432';
    // await this.props.walletListStore.addCustomLubicsWallet('지갑',addr, priKey, pubKey);
    console.log('fetchFromApi!!!!!!');
    this.setState({
      data: this.props.walletListStore.walletList
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
      <FlatList
        data={this.state.data}
        renderItem={({ item }) =>
          <Touchable
            style={walletListStyles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={() => navigate('detail', { account: item.walletAddr, balance: item.balance, balanceLbt: item.balanceLbt, lastTransaction: item.lastTran, priKey: item.priKey, pubKey: item.pubKey })}>
            <View style={{ flexDirection: 'row' }}>
              <View style={walletListStyles.optionIconContainer}>
                <Text>!!</Text>
              </View>
              <View style={walletListStyles.optionIconContainer}>
                <Text style={walletListStyles.optionText}>
                  Name: {item.name}
                </Text>
                <Text style={walletListStyles.addressText}>
                  Address: {item.walletAddr}
                </Text>
                <Text style={walletListStyles.optionText}>
                  {Utils.numberWithCommas(item.balance)} LBK / {Utils.numberWithCommas(item.balanceLbt)} LBT
                </Text>
                {item.lastTran !== '' ?
                  (
                    <Text style={walletListStyles.optionText}>
                      LastTransaction: {Utils.getDateStr(this.state.lastTran)}
                    </Text>
                  ) : (
                    <Text style={walletListStyles.optionText}>
                      LastTransaction: -
                    </Text>
                  )
                }
              </View>
            </View>
          </Touchable>
        }
        keyExtractor={(item, index) => index.toString()}
        extraData={this.state}
      />
    );
  }

  @action
  handleFormSubmit = e => {
    console.info(e)
  };
}

export default List;
