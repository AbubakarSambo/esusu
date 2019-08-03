import React, { Component } from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { View, Image, Text, ScrollView } from 'react-native';
import { SignupForm } from './signupform'
import { register } from "../../actions/auth"
import { Loader } from "../../components"

const LogoView = styled(View)`
  display: flex;
  align-items: center;
`;


class Signup extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  static navigationOptions = { header: null };



  submit(data) {
    console.log(data)
    this.props.register(data, this.props.navigation.navigate)
  }
  render() {
    const { loading } = this.props
    return (
      <ScrollView>
        <LogoView>
          <Image style={{ width: 100, height: 100 }} source={require('../../assets/images/google.png')} />
          {/* <Text><b>Exuxu</b></Text> */}
          <Text>Join the Community</Text>
        </LogoView>
        <SignupForm submit={this.submit} />
        <Button
          title="Log In"
          onPress={() => this.props.navigation.navigate('Signin')}
          type="solid"
          containerStyle={{
            width: '90%',
            margin: 10
          }}
        />
        <Loader  visible={loading}/>
      </ScrollView>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    register: (registerObj, navigate) => dispatch(register(registerObj, navigate)),
  }
}

function mapStateToProps(state) {
  return {
      loading: state.loading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
