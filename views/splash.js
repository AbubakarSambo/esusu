import React, { Component } from 'react';
import { AsyncStorage } from "react-native"
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';



class Splash extends Component {
    static navigationOptions = { header: null };
        
    // componentDidMount(){
    //     AsyncStorage.getItem('token').then((token) => {
    //         if(token){
    //             this.props.getUserDetails(this.props.navigation.navigate)
    //         }
    //         else {
    //             this.props.navigation.navigate('Login')
    //         }        
    //     })
    //     // AsyncStorage.setItem('token','')
    // }
    render(){
                
        return (
            <View >
                
                <Text>Splash</Text>                                               
            </View>

            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#F7f7f7',
        justifyContent: 'center',
        // marginTop: 50,
        alignSelf: 'stretch', 
      }, 
      FormContainer:{
        flex: 3,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'column',
        justifyContent: 'center',
      },  
      ButtonContainer:{
        flex:2,
      },      
});


export default Splash
