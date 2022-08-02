import {getList} from '../apiEndPoints';
import {baseApiCall} from '../apiInstance';

export const fetchAll = () => {
  return baseApiCall({
    url: `${getList}`,
    method: 'get',
  });
};
