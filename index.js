/**
 * @author seri <seriputera2@gmail.com>
 */

import React from 'react';
import { View, Text, TextInput } from 'react-native';

class Form extends React.Component {
  /**
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * @returns {ReactComponent}
   */
  render() {
    switch (this.props.type) {
      case 'TextInput':
        return (
          <View style={this.props.containerStyle}>
            <Text style={this.props.titleStyle}>{this.props.title}</Text>
            <TextInput
              style={this.props.textInputStyle}
              placeholder={this.props.placeholder}
              onChangeText={value => this.props.onChangeText(value)}
            >
              {this.props.value}
            </TextInput>
            <Text style={this.props.errorStyle}>
              {this.props.error || null}
            </Text>
          </View>
        );

      default:
        break;
    }
  }
}

export default Form;
