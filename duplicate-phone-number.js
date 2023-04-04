function findDuplicatePhoneNumbers(phoneNumbers){
    let newArr=[];
    let countArr = phoneNumbers;
    countArr = countArr.map(val => 1);
    phoneNumbers.map(val=>{
      val = val.replace(/-/g, '');
      val = val.replace(/[abc]/gi, '2');
      val = val.replace(/[def]/gi, '3');
      val = val.replace(/[ghi]/gi, '4');
      val = val.replace(/[jkl]/gi, '5');
      val = val.replace(/[mno]/gi, '6');
      val = val.replace(/[prs]/gi, '7');
      val = val.replace(/[tuv]/gi, '8');
      val = val.replace(/[wxy]/gi, '9');
      val = val.substr( 0, 3) + '-' + val.substr(3);
      newArr.indexOf(val)==-1? newArr.push(val) : countArr[newArr.indexOf(val)] += 1;
    });
    
    
    let count = 0;
    newArr = newArr.map((val,i) => {
       if(countArr[i]!=1){
         count++;
         return `${val}:${countArr[i]}`;
       };
    }).sort();
    newArr=newArr.slice(0,count);
    return newArr;
  }