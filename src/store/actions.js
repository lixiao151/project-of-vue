import * as types from './types'
import {VIEW_FOOT,VIEW_LOADING,UPDATE_USER,USER} from './types'
export default {
  [VIEW_FOOT]:({commit},payload)=>{commit(VIEW_FOOT,payload)},
  [VIEW_LOADING]:({commit},payload)=>{commit(VIEW_LOADING,payload)},
  [UPDATE_USER]:({commit},payload)=>{commit(UPDATE_USER,payload)},
  [USER]:({commit},payload)=>{commit(USER,payload)},

  addItem:({commit,state},payload)=>{ // state是复制的一份，修改不影响真实state
    //判断购物车是否存在当前项目，存在number+1，不存在，添加一项
    // console.log(state);

    let arr=[...state.buycar];
    let find=false;
    arr.forEach((item)=>{
      if(item.id==payload.id){
        item.number++;//数量递增
        find=true;
      }
    });
    if(!find) {
      payload.number=1;//数量
      arr.push(payload);
    }
    // commit(types.ADD_ITEM,[...state.buycar])
    commit(types.ADD_ITEM,arr)
  },
  changeItem:({commit,state},payload)=>{
    // [...state.buycar]
    // {....state}
    state.buycar.forEach((item)=>{
      if(item.id==payload.id){
        item.number+=payload.num;
      }
    });
    //如果是对象，需要复制一份，不然state.buycar指向的是复制后state修改之前的引用
    commit(types.CHANGE_ITEM,[...state.buycar])
    // commit(types.CHANGE_ITEM,state.buycar)
  },
  removeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        state.buycar.splice(index,1);
      }
    });
    commit(types.REMOVE_ITEM,[...state.buycar]);
    // commit(types.REMOVE_ITEM,state.buycar);
  },
  clearBuycar:({commit})=>{
    commit(types.CLEAR_BUYCAR,[]);
  }
}