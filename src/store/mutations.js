import {
  SET_HOME_INFO
} from './types';

export default {
  [SET_HOME_INFO](state, homeInfo){
      // var _o = {};
      // Object.keys(info||{}).forEach(i=>{
      //     if (!!info[i]){
      //         _o[i] = idcard[i]
      //     }
      // });
      state.homeInfo = {...state.homeInfo, ...homeInfo};
  },
}