import instance from './apiConfig';
export const baseApiCall = (config: any) => {
  return new Promise((resolve, reject) => {
    instance(config)
      .then(response => {
        if (response.status === 200) {
          resolve(response.data);
        } else {
          // display alert or toast
          reject(false);
        }
      })
      .catch(e => {
        if (e.response && e.response.data) {
          // display alert or toast
          reject(e.response.data);
        } else {
          reject(e);
        }
      });
  });
};
