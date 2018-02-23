function forLoop(arr){
  for(let i=0;i<25;i++){
    arr.push("I am "+ i +" strange loops.")
  }
  return arr;
}
function whileLoop(num){
  while(num>0){
    console.log(--num)
  }
  return 'done'
}