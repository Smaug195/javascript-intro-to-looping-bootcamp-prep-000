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

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr){

  do{
    arr.pop()
  }while(maybeTrue()&&arr.length>0);
  return arr

}