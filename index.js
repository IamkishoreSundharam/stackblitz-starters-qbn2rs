
for (var i =1;i<=100;i++){
  if(i%3==0 && i%5==0){
    console.log(i+"-->Amazon");
  }
  else if(i%3==0){
    console.log(i+"-->Google");
  }
  else if(i%5==0){
    console.log(i+"-->Facebook");
  }
  else{
    console.log(i);
  }
}