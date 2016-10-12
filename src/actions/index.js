const Preload = (res)=>{
  return {
    type:"GET_TWEET",
    payload:res
  }
}

const actions = {Preload};
export default actions;
