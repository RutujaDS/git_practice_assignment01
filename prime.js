funtion checkprime(num){
	let  num = 47;
	count = 0;
	for(let i=0; i<num;i++){
		if(num%i==0){
		count++
		}
	if(count == 2){
		console.log("Prime");
	}else{
		console.log("not Prime")
	}
}
