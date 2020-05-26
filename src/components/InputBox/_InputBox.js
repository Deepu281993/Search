import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import InputBoxStyles from '@inputBox/inputBoxStyles';
import IconEmail from 'react-native-vector-icons/Fontisto';
import IconPassword from 'react-native-vector-icons/AntDesign';
import IconPerson from 'react-native-vector-icons/MaterialIcons';
import IconMobile from 'react-native-vector-icons/FontAwesome';
import {appColors} from '@values/colors';

class _InputBox extends Component {
  render() {
    const {textBoxView, inputBox, inputView} = InputBoxStyles;
    const {
      fieldValue,
      keyboardType,
      maxLength,
      minLength,
      onChangeText,
      secureTextEntry,
      style: propStyle,
      placeholder,
      multiline,
      onBlur,
      onFocus,
    } = this.props;

    return (
      <View>
        <View style={[textBoxView, propStyle]}>
          <TextInput
            style={[inputBox]}
            value={fieldValue}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            maxLength={maxLength}
            minLength={minLength}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            multiline={multiline}
            onBlur={onBlur}
            onFocus={onFocus}
          />
        </View>
      </View>
    );
  }
}

export {_InputBox};
