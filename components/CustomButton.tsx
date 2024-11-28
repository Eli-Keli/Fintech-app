import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
    title: string;
    handlePress: () => void;
    containerStyles?: object;
    textStyles?: object;
    isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading,
}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        style={[styles.container, containerStyles]}
        disabled={isLoading}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#000000',
        paddingVertical: 17,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
