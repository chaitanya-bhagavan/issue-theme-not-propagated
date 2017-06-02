import * as React from 'react';
import {
  connectStyle,
  StyleProvider,
  getTheme,
  Button,
  View,
  Text,
  H3,
  variables
} from 'native-base';
import material from './native-base-theme/variables/commonColor';

class ButtonComponent extends React.Component {
  state = {
    theme: material,
    themeName: 'material'
  };
  render() {
    return (
      <Button>
        <Text>
          This should also change
        </Text>
      </Button>
    );
  }
}

export default connectStyle('ui.ButtonComponent', {})(ButtonComponent);
