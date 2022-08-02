import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/CustomButton';
import {colors} from '../config/colors';
import {backIcon} from '../config/imageSources';
import {ListArrayProps} from '../config/intefaceTypes';
import {addListData} from '../redux/Actions/listAction';

const {height} = Dimensions.get('window');

const AddStringModal: React.FC = () => {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState('');

  const listing: any = useSelector<ListArrayProps>(state => state.list.list);

  const generateNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const addText = () => {
    if (newText.trim() == '') {
      return;
    }

    let newData = [
      {
        title: newText,
        user_id: generateNumber(),
        id: generateNumber(),
        body: newText,
      },
      ...listing,
    ];
    dispatch(addListData(Object.assign([], newData)));
    Navigation.dismissModal('addString');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Adding Data</Text>
      </View>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => Navigation.dismissModal('addString')}>
        <Image source={backIcon} resizeMode="contain" style={styles.backIcon} />
      </TouchableOpacity>

      <TextInput
        multiline={true}
        placeholder="Add your text here"
        style={styles.inputStyle}
        autoFocus={true}
        onChangeText={setNewText}
        value={newText}
      />

      <CustomButton
        btnContainer={styles.btnContainer}
        btnText="Done"
        onPress={() => addText()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  backContainer: {
    position: 'absolute',
    left: 0,
    padding: 20,
  },
  backIcon: {
    height: 20,
    width: 20,
    tintColor: colors.grey,
  },

  inputStyle: {
    margin: 20,
    elevation: 3,
    shadowRadius: 4,
    shadowOpacity: 0.5,
    backgroundColor: colors.white,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 10,
    height: height / 4,
    padding: 15,
    paddingVertical: 50,
  },
  btnContainer: {
    marginTop: 15,
  },
});

export default AddStringModal;
