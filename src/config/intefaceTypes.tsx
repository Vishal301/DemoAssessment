import {TextProps, ViewProps, ViewStyle} from 'react-native';

export type CustomButtonProps = {
  btnText: string;
  btnContainer?: ViewStyle;
  btnTextStyle?: TextProps;
  onPress(): void;
};

export type ListProps = {
  body?: string;
  id?: Number;
  title: string;
  user_id: Number
};

export type ListItemProps = {
  item: ListProps;
  index: Number;
};

export type ListArrayProps = {
  list: {
    list: Array<ListProps> | [];
  };
};
