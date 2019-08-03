import styled from "styled-components/native";
import React from "react";
import { Theme } from "../theme";
import { Button, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const FontSizes = {
    small: '0.8rem',
    standard: '1rem',
    medium: '1.2rem',
    large: '1.6rem',
    xlarge: '2rem'
}

const ButtonContainer = styled.View`
display: flex;
height: 34px;
align-items:center;
justify-content:center;
border-radius:  ${props => props.rounded ? "22px" : Theme.PrimaryRadius};
background-color: ${props => props.color ? props.color : Theme.PrimaryColor};
width: 90%;
margin: 20px;
`;
const StyledText = styled.Text`
color: #fff;
`



export class ButtonComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ButtonContainer {...this.props}>
                <TouchableOpacity>
                    <StyledText>Sign Up</StyledText>
                </TouchableOpacity>
            </ButtonContainer>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
      },
      container: {
        display: 'flex'
      },
});