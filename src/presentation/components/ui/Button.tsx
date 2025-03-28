import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import React, { } from 'react';
import { colors, globalStyles } from '../../../config/theme/theme';

interface Props {
    text: string;
    styles?: StyleProp<ViewStyle>;
    onPress: () => void;
}

export const Button = ({ text, styles, onPress }:Props) => {
    return (
        <Pressable
            onPress={ onPress}
            style={({ pressed }) => ([
                globalStyles.btnPrimary,
                {
                    opacity: pressed ? 0.5 : 1,
                    backgroundColor: colors.primary,
                },
            ])}
        >
            <Text style={[
                globalStyles.btnPrimaryText,
                {
                    color: colors.buttonTextColor,
                },
            ]}>Button {text}</Text>
        </Pressable>
    );
};
