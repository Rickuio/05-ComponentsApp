import { Animated, Easing } from 'react-native';
import { useRef } from 'react';

export const useAnimation = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({ duration = 300, toValue = 1, callback = () => {} }) => {
    /*
        Animated.timing( animatedTop, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
            easing: Easing.bounce, //Easing.elastic(1)
        }).start( () => console.log('fadeIn finished') );
    */
        Animated.timing( animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        }).start( callback /*() => console.log('fadeIn finished')*/ );
    };

    const fadeOut = ({ toValue = 0, duration = 300, callback = () => {} }) => {

        Animated.timing( animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        }).start( () => {
        callback;
        /*
            animatedTop.resetAnimation();
            console.log('fadeOut finished');
        */
        } );

    };

    const startMovingTop = ({
        initialPosition = 0,
        toValue = 0,
        duration = 300,
        easing = Easing.linear,
        callback = () => {},
    }) => {
        animatedTop.setValue(initialPosition);
        Animated.timing( animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
            easing: easing,
        }).start( callback );
    };

    return {
        //Methods
        fadeIn,
        fadeOut,
        startMovingTop,
        //Properties
        animatedOpacity,
        animatedTop,
    };
};
