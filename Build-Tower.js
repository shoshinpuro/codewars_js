function towerBuilder(nFloors) {
    let arr= [];
    let length = nFloors*2-1
    for(let i=0; i<nFloors; i++){
      let str = '';
      let count = i+1;
      while(count>0){
        str += '*'
        if(str!='*'){
          str += '*';
        }
        count--;
      }
      while(str.length < length){
        str += ' ';
        str = ' ' + str;
      }
      arr.push(str);
    }
    return arr;
  }