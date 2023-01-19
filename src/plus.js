//H5+API调用入口
let plusExtends = (fn)=>{
  if (window.plus) {
    fn();
  } else {
    document.addEventListener('plusready', fn, false)
  }
}

export default plusExtends
