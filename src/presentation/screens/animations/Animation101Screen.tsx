/* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {

  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTop } = useAnimation();

  return (
    <View style={styles.container}>

        <Animated.View style={
            [styles.purpleBox, {
                opacity: animatedOpacity,
                transform: [{
                    translateY: animatedTop,
                }],
            }]
        } />

        <Pressable onPress={ () => {
            fadeIn({});
            startMovingTop({
                initialPosition: -100,
                easing: Easing.elastic(1),
                duration: 750,
            });
        }} style={{ marginTop: 10 }}>
            <Text>FadeIn</Text>
        </Pressable>

        <Pressable onPress={ () => fadeOut({}) } style={{ marginTop: 10 }}>
            <Text>FadeOut</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
    },
});
