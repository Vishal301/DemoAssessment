import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Navigation,
  OptionsModalPresentationStyle,
  OptionsModalTransitionStyle,
} from 'react-native-navigation';
import { useSelector } from 'react-redux';
import ListItem from '../components/ListItem';
import {colors} from '../config/colors';
import { ListArrayProps } from '../config/intefaceTypes';

const ListModal: React.FC = () => {

  const listing: any = useSelector<ListArrayProps>(
    state => state.list.list,
  );

  const addNewString = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'AddStringModal',
              id: 'addString',
              options: {
                hardwareBackButton: {dismissModalOnPress: true},
                modalPresentationStyle:
                  OptionsModalPresentationStyle.currentContext,
                modalTransitionStyle: OptionsModalTransitionStyle.coverVertical
              },
            },
          },
        ],
      },
    });
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>My Modal</Text>
      </View>
      <TouchableOpacity
        onPress={() => addNewString()}
        style={styles.addContainer}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>

      <FlatList data={listing} renderItem={item => <ListItem {...item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addContainer: {
    position: 'absolute',
    right: 0,
    padding: 20,
  },
  addText: {
    color: colors.lightBlue,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListModal;
