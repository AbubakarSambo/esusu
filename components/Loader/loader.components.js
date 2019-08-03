import React from 'react';
import { StyleSheet } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";


export const Loader =({visible}) => {
    return (
        <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      />
    )
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});