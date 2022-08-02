import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ListArrayProps} from '../../config/intefaceTypes';
import {addListData} from '../../redux/Actions/listAction';
import {fetchAll} from '../../restApis/apiServices/listService';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const listing: any = useSelector<ListArrayProps>(state => state.list.list);

  useEffect(() => {
    if (!listing.length) {
      fetchAll().then(res => {
        dispatch(addListData(Object.assign([], res)));
      });
    }
  }, []);

  return null;
};

export default HomeScreen;
