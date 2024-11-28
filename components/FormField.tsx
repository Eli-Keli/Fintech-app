import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { icons } from '../constants';

interface FormFieldProps {
    title: string;
    value: string;
    handleChangeText: (text: string) => void;
    placeholder: string;
    otherStyles?: object;
}

const FormField: React.FC<FormFieldProps> = ({
    title,
    value,
    handleChangeText,
    placeholder,
    otherStyles,
}) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.fieldContainer, otherStyles]}>
      <Text style={styles.fieldTitle}>{title}</Text>
      <View style={styles.formContainer}>
        <TextInput
            style={styles.inputField}
            value={value}
            onChangeText={handleChangeText}
            placeholder={placeholder}
            secureTextEntry={title === 'Password' && !showPassword}
        />

        {
          title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={!showPassword ? icons.eye : icons.eyeHide}
                style={styles.eyeImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
    },
    fieldTitle: {
      color: '#000',
    },
    formContainer: {
      width: '100%',
      height: 56,
      paddingHorizontal: 16,
      flexDirection: 'row',
      borderColor: '#161616',
      borderRadius: 10,
      alignItems: 'center',
      borderWidth: 2,
    },
    inputField: {
      flex: 1,
    },
    eyeImage: {
        width: 25,
        height: 25,
    },
});
