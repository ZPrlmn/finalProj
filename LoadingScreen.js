import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, ImageBackground, StyleSheet, Text } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';
import Styles from './Styles/Styles';
import LoadingStyles from './Styles/LoadingStyles';


const LoadingScreen = () => {
  return (
    <View style={[Styles.container, { width: '100%' }]}>
        <ActivityIndicator size="large" color="gray" />
        <View>
          <Animated.View/>
        </View>
    </View>
  );
};


export default LoadingScreen;
