import React from 'react';
import {
  Vibration,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { BarCodeScanner, Camera, Permissions } from 'expo';

import qrCode from 'qrcode-reader';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  closeView: {
    alignItems: 'center',
  },
  closeText: {
    color: '#2f95dc',
    fontSize: 30,
    fontFamily: 'bold',
  },
});

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    qrData: '',
    torchMode: 'off',
    cameraType: 'back',
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  constructor(props) {
    super(props);
    this.state = {
      flashMode: false,
      zoom: 0.2
    };
  }

  readQrCode() {
    let qr = new qrCode();
    qr.callback = function(error, result) {
      if(error) {
        console.error(error);
        return;
      }
      console.info(result);
    };
  }

  render() {
    this.readQrCode();
    return (
      <View style={styles.container}>
        <View>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={{ top:70, height: 400, width: '100%' }}
            torchMode={this.state.torchMode}
          />
        </View>
        <View style={{ top: 200 }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ width: '100%', height: 35, }} >
            <View style={styles.closeView}>
              <Text style={styles.closeText}>돌아가기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  _handleBarCodeRead = ( { data }) => {
    Vibration.vibrate(100);
    this.props.navigation.navigate('detail', { qrAddr: data });
  }
}
