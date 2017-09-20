function fib(){
  let first = 0;
  let second = 1;
  let third;
  let list = [0,1];
  let count = 2;
  while (count < 100){
    third = first+second;
    first = second;
    second = third;
    list.push(third);
    count++;
  }
  return list;
}
console.log(fib());

function numToStrings(nums){
  return _.map(nums, function(num){return num.toString();});
}
console.log(numToStrings(fib()));

function numEvenNums(array){
    let count = 0;
    for (let i = 0; i<array.length; i++){
        if (array[i] % 2 === 0){
            count++;
        }
    }
    return count;
}

console.log(numEvenNums(fib()));