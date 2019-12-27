import * as homeService from '../utils/services/home'
import {
  SET_HOME_INFO
} from './types';

export default {
  fetchIdcardInfo({
    commit
  }) {
    return new Promise((resolve) => {
      homeService.fetchLoanList().then(info => {
        commit(SET_HOME_INFO, info);
        resolve(info);
        console.log(info);
      })
    })
  }
}