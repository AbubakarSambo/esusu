import React, { Component } from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import { View, Image, Text } from 'react-native';
import { login } from "../../actions/auth"
import { SigninForm } from './signinform'
// import logo from '../../assets/google.png'

const LogoView = styled(View)`
  display: flex;
  align-items: center;
`;


class Signin extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  static navigationOptions = { header: null };

  

  submit(data) {
    console.log(data)
    this.props.login(data, this.props.navigation.navigate)
  }
  render() {
    return (
      <View>
        <LogoView>
          <Image style={{ width: 100, height: 100 }} source={require('../../assets/images/google.png')} />
          {/* <Text><b>Exuxu</b></Text> */}
          <Text>Join the Community</Text>
        </LogoView>
        <SigninForm submit={this.submit} />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (registerObj, navigate) => dispatch(login(registerObj, navigate)),
  }
}

function mapStateToProps(state) {
  return {
      loading: state.loading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)