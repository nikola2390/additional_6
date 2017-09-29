module.exports = function zeros(expression) {
  let arr = expression.split('*');
	let two = 0;
	let five = 0;
	let arr1 = [];
	let a = 0;
	for ( let i = 0; i < arr.length; i++ ) {
		if (arr[i].slice(-2) !== '!!') {
			a = Number(arr[i].slice(0,-1));
			let b = a;
			for (let j = 0; j < b; j++ ) {
				arr1.push(a);
				a--;
			}
		} else {
			a = Number(arr[i].slice(0, -2));
			let b = a;
			for (let j = 0; j < b/2; j++ ) {
				arr1.push(a);
				a-= 2;
			}
		}
	}

	for (let i = 0; i < arr1.length; i++ ) {
		if (arr1[i] % 2 == 0) {
			two++;
		}
		if (arr1[i] % 5 == 0) {
			five++;
		}
		if (arr1[i] % 25 == 0) {
			five++;
		}
	}
	return Math.min(two,five);
}
