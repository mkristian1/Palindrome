// To check if a string is a palindrome or not

const palindrom = () => {
	let str = document.getElementById('text').value;
	str = str.toLowerCase();
	alert(str == str.split('').reverse().join(''));

}

document.getElementById('check').addEventListener('click', palindrom);

