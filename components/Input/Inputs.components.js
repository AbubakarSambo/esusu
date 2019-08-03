import styled from "styled-components";
import React from "react";
import { Text, View, TextInput } from 'react-native';
import PropTypes from "prop-types";
import { Theme } from "../theme";
import { lighten } from "polished";

const FontSizes = {
  small: '0.8rem',
  standard: '1rem',
  medium: '1.2rem',
  large: '1.6rem',
  xlarge: '2rem'
}

export const Label = styled.Text`
    font-size: ${props => props.size ? FontSizes[props.size] : 12};
    font-weight: normal;
    letter-spacing: 0.25;
    text-transform: uppercase;
    color: ${props => props.color ? props.color : Theme.PrimaryGrey};`


export const TextInputMod = styled(TextInput)`
        height: 44px;
        padding: 10px;
        line-height: 22px;
        width: 95%;
        border-radius: ${Theme.PrimaryRadius};
        border: 1px solid ${lighten(0.6, Theme.PrimaryFontColor)};
        z-index:2;
        font-size: ${Theme.PrimaryFontSize};
`;
 
export const InputWrapper = styled(View)`
    display: flex;
    width: 100%;
    font-size: ${Theme.PrimaryFontSize};
    background: #fff;
    position: relative;
    margin: 5px;
`;

export class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <InputWrapper {...this.props}>
        {this.props.label && <Label>{this.props.label}</Label>}
        <TextInputMod {...this.props}/>
        {this.props.error && <Text>{this.props.error}</Text>}
      </InputWrapper>
    );
  }
}

Input.defaultProps = {
  forminput: false
};

Input.propTypes = {
  forminput: PropTypes.bool
};
