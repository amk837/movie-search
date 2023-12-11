import axios from 'axios';

const objectToQueryString = (params = {}) => Object.entries(params).reduce((acc, [key, value], index) => `${acc}${index > 0 ? '&' : ''}${key}=${value}`, '');

const makeRequest = async (url, options, queryParams, useAxios = true) => {
  const completeUrl = queryParams ? `${url}?${objectToQueryString(queryParams)}` : url;
  try {
    const requestOptions = {
      method: 'GET',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
    };
    if (useAxios) {
      const response = await axios({ url: completeUrl, ...requestOptions });
      if (response.status >= 200 && response.status <= 299) return await response.data;
      throw response;
    }

    const response = await fetch(completeUrl, requestOptions);
    if (response.status >= 200 && response.status <= 299) return await response.json();
    throw response;
  } catch (err) {
    console.log(`API request failed: ${err.url}. Details: ${useAxios ? err : await err.json()}`);
    throw err;
  }
};

export default makeRequest;
