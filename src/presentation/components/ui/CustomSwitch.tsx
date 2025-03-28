/* eslint-disable react/react-in-jsx-scope */
import { Platform, Text, View } from 'react-native'
import { StyleSheet, Switch } from 'react-native';
import { colors } from '../../../config/theme/theme';

interface Props {
    isOn: boolean;
    text?: string;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, text, onChange}:Props) => {
    return (
      <View style={styles.switchRow}>
        {
            text && <Text style={{color: colors.text}}>{text}</Text>
        }
            <Switch
              thumbColor={ Platform.OS === 'android' ? colors.primary :  '' } /*  false: '#767577', true: '#81b0ff' */
              ios_backgroundColor="#3e3e3e"
              onValueChange={onChange}
              value={isOn}
            />
      </View>
    );
};

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
});
