
let number=13;
funtion checkprime(number){
	
	count = 0;
	for(let i=0; i<number;i++){
		if(number%i==0){

		count++
		}
	if(count == 2){
		console.log("Prime");
	}else{
		console.log("not Prime")
	}

	}
	checkprime(13);
