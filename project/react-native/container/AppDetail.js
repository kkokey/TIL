import React from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  btnAlign: {
    flexDirection: 'row',
  }
});

class AppMain extends React.Component {
  static navigationOptions = () => ({
    title: 'Detail',
  });

  constructor(props) {
    super(props);
    this.state = {
      listStore: [],
      isModalVisible: false
    };
  }

  render() {
    // const navigation = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <View>
            <Text>`{this.props.navigation.state.params.selectItemName}`을 선택하셨습니다! :)</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default AppMain;
