function solution(start, finish) 
{
  let sum = finish-start;
  let count=0
  while(sum>2){
    sum -=3;
    count++;
  }
  while(sum>0){
    sum -=1;
    count++;
  }
  return count
}