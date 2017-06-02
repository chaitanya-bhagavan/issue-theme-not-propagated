import Expo from 'expo';
import * as React from 'react';
import {
  StyleProvider,
  getTheme,
  Button,
  Text,
  H3,
  variables
} from 'native-base';
import material from './native-base-theme/variables/commonColor';
import { View } from 'react-native';
import Btn from './ButtonComponent';

export default class App extends React.Component {
  state = {
    theme: material,
    themeName: 'material'
  };
  render() {
    return (
      <StyleProvider style={getTheme(this.state.theme)}>
        <View>
          <Button onPress={this._toggle.bind(this)}>
            <Text>
              Change theme
            </Text>
          </Button>
          <Button>
            <Text>
              No OP
            </Text>
          </Button>
          <Btn />
        </View>
      </StyleProvider>
    );
  }

  _toggle() {
    if (this.state.themeName === 'material') {
      this.setState({ theme: variables, themeName: 'other' });
    } else {
      this.setState({ theme: material, themeName: 'material' });
    }
  }
}

Expo.registerRootComponent(App);
