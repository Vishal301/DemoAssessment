import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import CustomButton from '../../components/CustomButton';

const MoreScreen: React.FC = () => {
  const openModal = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'ListModal',
              options: {
                hardwareBackButton: {
                  dismissModalOnPress: true,
                },
              },
            },
          },
        ],
      },
    });
  };

  return (
    <View style={styles.pageContainer}>
      <CustomButton btnText="Open Modal" onPress={() => openModal()} />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MoreScreen;
