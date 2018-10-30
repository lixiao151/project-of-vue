import * as types from './types';
export default{
    //修改state的数据   做突变
  [types.VIEW_FOOT]:(state,payload)=>{state.bFoot=payload},
  [types.VIEW_LOADING]:(state,payload)=>{state.bLoading=payload},
  [types.UPDATE_USER]:(state,payload)=>{state.user=payload},
  [types.ADD_ITEM]:(state,payload)=>{
    state.buycar=payload;  //
  },
  [types.CHANGE_ITEM]:(state,payload)=>{
    state.buycar=payload; //替换的是actions传递过来的新值
  },
  [types.REMOVE_ITEM]:(state,payload)=>{
    state.buycar=payload;
  },
  [types.CLEAR_BUYCAR]:(state,payload)=>{
    state.buycar=payload;
  },
  [types.USER]:(state,payload)=>{
    state.user=payload
  }
}