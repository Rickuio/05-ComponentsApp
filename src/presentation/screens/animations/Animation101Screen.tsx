import React, { useRef } from 'react'
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme'

export const Animation101Screen = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(-100)).current;
    
    const fadeIn = () => {

        Animated.timing( animatedTop, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
            easing: Easing.bounce //Easing.elastic(1)
        }).start( () => console.log('fadeIn finished') );

        Animated.timing( animatedOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start( () => console.log('fadeIn finished') );
    }

    const fadeOut = () => {

        Animated.timing( animatedOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start( () => {
            animatedTop.resetAnimation()
            console.log('fadeOut finished')
        } );

    }

  return (
    <View style={styles.container}>
        
        <Animated.View style={
            [styles.purpleBox, { 
                opacity: animatedOpacity,
                transform: [{
                    translateY: animatedTop
                }]
            }]
        } />
        
        <Pressable onPress={ () => fadeIn() } style={{ marginTop: 10 }}> 
            <Text>FadeIn</Text>
        </Pressable>
        
        <Pressable onPress={ fadeOut } style={{ marginTop: 10 }}> 
            <Text>FadeOut</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150
    }
})