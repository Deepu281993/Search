import React, {Component} from 'react';
import {ImageBackground} from 'react-native';

import {_Text, _Header} from '@components';
import ContainerStyles from '@container/containerStyles';

class _Container extends Component {
  render() {
    const {imgBGStyle} = ContainerStyles;
    const {
      children: propChildren,
      style: propStyle,

      showMenu,
      title,
      showNotification,
    } = this.props;
    return (
      <ImageBackground
        source={require('@images/homeBG.png')}
        style={imgBGStyle}>
        <_Header
          title={title}
          showNotification={showNotification}
          showMenu={showMenu}
          navigation={this.props.navigation}
        />
        {propChildren}
      </ImageBackground>
    );
  }
}

export {_Container};
