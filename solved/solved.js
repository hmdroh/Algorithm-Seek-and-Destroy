function destroyer(arr) {
    let [initial, ...others] = arguments;
    var rt = initial.filter(x=>{
      return !others.includes(x);
    })
    return rt;
  
  }
  
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));