import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../config/colors';
import {CustomButtonProps} from '../config/intefaceTypes';

const width = Dimensions.get('window').width;

const CustomButton: React.FC<CustomButtonProps> = props => {
  const {btnText, btnContainer, btnTextStyle, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnContainer, btnContainer]}>
      <Text style={[styles.btnTextStyle, btnTextStyle]}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.lightBlue,
    borderRadius: 15,
    padding: 20,
    width: width / 1.5,
    alignItems: "center",
    alignSelf: "center"
  },
  btnTextStyle: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "500"
  },
});

export default CustomButton;
