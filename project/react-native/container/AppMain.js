import React from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import ListComp from '../component/List';
import WalletsService from '../stores/service/ListEx'
import Modal from 'react-native-modal';
import { inject } from 'mobx-react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  main: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  },
  btnAlign: {
    flexDirection: 'row',
  }
});

@inject('listStore')
class AppMain extends React.Component {
  static navigationOqptions = () => ({
    title: 'Sample',
  });

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.main}>
            <Text>˙∆˚• MAIN</Text>
          </View>
          <ListComp listStore={this.props.listStore} navigation={this.props.navigation}/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default AppMain;
