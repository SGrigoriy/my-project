function countBs(str) {
	let char = str.length;
	for(let i = 0; i < str.length; i++);
	console.log(char);
}
countBs("floccinaucinihilipilification");

function countChar(str, n) {
	let countCh = 0;
	for(let i = 0; i < str.length; i++)
		if(str.charAt(i) == n)
			countCh += 1;
	console.log(countCh);
	return countCh;
}
countChar(" floccinaucinihilipilification", "i");