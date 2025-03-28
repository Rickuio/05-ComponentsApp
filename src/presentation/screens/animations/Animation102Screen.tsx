import { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

export const Animation102Screen = () => {

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            { dx: pan.x, dy: pan.y },
        ]),
        onPanResponderRelease: () => {
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false,
            }).start();
        },
    });
  return (
    <View style={styles.container}>
        <Animated.View 
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]} 
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 80,
        height: 80,
        backgroundColor: '#61dafb',
        borderRadius: 4,
    },
});
