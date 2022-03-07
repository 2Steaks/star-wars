/** @format */

import Axios from 'axios';

export const Client = Axios.create({
  baseURL: process.env.REACT_APP_SWAPI
});
