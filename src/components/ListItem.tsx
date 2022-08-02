import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { colors } from '../config/colors';
import {ListItemProps} from '../config/intefaceTypes';

const ListItem: React.FC<ListItemProps> = props => {
  const {item, index} = props;
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    padding: 20,
    margin: 15,
    elevation: 3,
    shadowRadius: 4,
    shadowOpacity: 0.5,
    backgroundColor: colors.white,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 10
  },
  itemText:{
    fontSize: 18,
    fontWeight: '500',
    color: "#35383A",
    textAlign: "center"
  }
});

export default ListItem;
