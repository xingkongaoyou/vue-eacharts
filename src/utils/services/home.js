import {$GET} from '../libs/http';

export function fetchLoanList(params){
  return $GET('/e/home', params)
}