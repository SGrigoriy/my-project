function countChar(string, ch)
{
	var result = 0;
	for (var i = 0; i < string.length; i++)
	{
		if (string[i] == ch)
			result++;
	}
	return result;
}

console.log(countChar('BBC', 'B'));
console.log(countChar('kakkerlak', 'k'));
