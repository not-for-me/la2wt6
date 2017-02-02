let myObj = {
	nums:  [1,2,3,4,5,6,7,8,9,10],
	evenNums: [],
	filterOddNum: function () {
		this.nums
			.filter(function(n){ 
				return n % 2 == 0;
			})
			.forEach(n => this.evenNums.push(n));
		
		console.log(JSON.stringify(this.evenNums));
	}
}

myObj.filterOddNum();

