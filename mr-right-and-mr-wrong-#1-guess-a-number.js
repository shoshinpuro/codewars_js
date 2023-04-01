function guessNumber(right,wrong){
    let min = 0,
        max = 10000;
    let arr = ['odd', 'even', 'divisible by', 'starting with', 'ending with'];
    
    right.forEach((phrase, i) =>{
        let indexM = phrase.indexOf('more than');
        let indexL = phrase.indexOf('less than');
        if(indexM!=-1){
          let val = +phrase.slice(indexM + 10);
          if( min < val){
            min = val;
          }
        }
        if(indexL!=-1){
          let val = +phrase.slice(indexL + 10);
          if( max > val){
            max = val;
          }
        }
    });
    
    wrong.forEach(phrase =>{
      let indexM = phrase.indexOf('more than');
      let indexL = phrase.indexOf('less than');
      
      
      if(indexM!=-1 ){
        let val = +phrase.slice(indexM + 10);
        if( max > val){
          max = val;
        }
      }
      if(indexL!=-1){
        let val = +phrase.slice(indexL + 10);
        if( min < val){
          min = val;
        }
      }
    });
    
    let isEven = null,
        divisibleBy = [],
        startingWith = null,
        endingWith = null,
        notDivisibleBy = [],
        notStartingWith = [],
        notEndingWith = [];
        
        
    right.forEach(phrase =>{
      for(let i=0; i < arr.length; i++){
        let index = phrase.indexOf(arr[i]);
        let num = phrase.slice(index + arr[i].length);
        if(index!=-1){
          switch (i) {
            case 0:
              isEven = false;
              break;
            case 1:
              isEven = true;
              break;
            case 2:
              divisibleBy.push(+num)
              break;
            case 3:
              startingWith = +num;
              break;
            case 4:
              endingWith = phrase.slice(-1);
              break;
          }
        }
      }
    });
    wrong.forEach(phrase =>{
      for(let i=0; i < arr.length; i++){
        let index = phrase.indexOf(arr[i]);
        let num = phrase.slice(index + arr[i].length);
        if(index!=-1){
          switch (i) {
            case 0:
              isEven = true;
              break;
            case 1:
              isEven = false;
              break;
            case 2:
              notDivisibleBy.push(+num)
              break;
            case 3:
              notStartingWith.push(num) ;
              break;
            case 4:
              console.log(phrase.slice(-1));
              notEndingWith.push(+phrase.slice(-1));
              break;
          }
        }
      }
    });
    
    let nums = [];
    for(let i=min+1; i < max; i++){ 
      let count = 0;
      if(isEven==null || i%2!=isEven){
        divisibleBy.forEach((val)=>{
          if(i%val!=0){
            count++;
          }
        });
        if(count!=0){
          continue;
        }
        let starting = i.toString()[0];
        let ending = i.toString().slice(-1);
        if(endingWith == null || ending==endingWith){
          if(startingWith == null || starting==startingWith){
            notDivisibleBy.forEach((val)=>{
              if(i%val==0){
                count++;
              }
            });
            if(count!=0){
              continue;
            }
            if(notEndingWith == null || (+ending!=notEndingWith[0] && +ending!=notEndingWith[1])){
              console.log(starting==notStartingWith[1])
              console.log(starting)
              console.log(notStartingWith[1])
              if(notStartingWith == null || !(+starting==notStartingWith[0] || +starting==notStartingWith[1] ||  +starting==notStartingWith[2] || +starting==notStartingWith[3])){
                nums.push(i);
              }
            }
          }
        }
      }
    }
    console.log(nums);
    console.log('AAA'+notEndingWith);
    if(nums.length == 1){
      return nums[0];
    } else{
      return null;
    }
  }