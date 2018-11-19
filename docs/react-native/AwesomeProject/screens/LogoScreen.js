import React, { Component } from 'react';
import {
  Image,
  Animated,
  Platform,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

class FadeInView extends Component {
  constructor()
  {
    super();

    this.state = {
      fadeAnim: new Animated.Value(1),  // Initial value for opacity: 0
    }
  }
  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    // ).start();                        // Starts the animation
    )
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class Logo extends Component {
  onPressGoTo() {
    this.props.navigation.navigate('Main');
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.onPressGoTo.bind(this)} underlayColor={styles.background.backgroundColor}>
          <View>
            <View style={{
              width: '100%',
              height: '100%',
              backgroundColor: styles.background.backgroundColor,
              alignItems: 'center',
            }}>
            <Image source={require('../assets/images/logo_white.png')}
                   style={{
                     resizeMode: 'stretch',
                     marginTop: 100,
                     width: 340,
                     height: 340,
                     flex: 0,
                   }}/>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    borderRadius: 3,
    backgroundColor: '#4d4d4d',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
});
