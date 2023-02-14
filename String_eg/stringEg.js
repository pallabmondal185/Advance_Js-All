let str='This is our Home';
//slice
//slice extracts apart of string
// console.log('slice:...................,');
// console.log(str.slice(5,13));
// console.log(str.slice(5));
// console.log(str.slice(-4));
// console.log(str.slice(-8,-5));

//substring
//substring is similar to slice
//difference is that values less than 0 are treated as 
// console.log('substring:...............');
// console.log(str.substring(5,11));
// console.log(str.substring(-5));
// console.log(str.substring(-8,-4),'no output');

//substr
//the second parameter specifies the length
// console.log('substr:...............');
// console.log(str.substr(5,6));
// console.log(str.substr(-4,5));
// console.log(str.substr(5));

//replace
//replace method does not change the original string
//it replace only the first match

// let str1='your house is our house';
// console.log('replace:.................')
// console.log(str1);
// console.log(str1.replace('house','home'));

//to replace all matches use regular expression with a /g flag (global match)
// console.log(str1.replace(/house/g,'home'));

//to replace case sensitive use regular expression /i (insensitive)
// let str2='your House is our House';
// console.log(str2.replace('house','home'));
// console.log(str2.replace(/house/i,'home'));
// console.log(str2.replace(/house/ig,'home'));

//trim
//trim method removes white space from both sides of astring
// console.log('trim:.................');
// let str3='         hellow    world        ';
// console.log(str3.trim());

//toUpperCase and toLowerCase
// console.log('toUpperCase and toLowerCase:.................');
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

//charAt() and charCodeAt()
//charAt() nethod returns a character at a specific index (position) in a string 
//charCodeAt() a unicode of character at a specific index
// console.log('charCodeAt() a unicode of character:...........');
// console.log(str);
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));
// console.log(str[0]);

//padStart() and padEnd()
// console.log('padStart() and padEnd():.................');
// let str4='5';
// console.log(str4.padStart(4,'0'));
// console.log(str4.padEnd(4,'0'));

//split()
//a string can be convarted to array with split method
// console.log('split()...................');
// let str5='this,is,my,garden.';
// let text=str5.split(",");
// console.log(typeof(str5),'  ',typeof(text));
// console.log(text);


//includes()
// The includes() method returns true if a string contains a specified string.
// Otherwise it returns false.
// The includes() method is case sensitive.
let str6="Hellow Pallab, Welcome To The New World";
console.log(str6.includes('pallab'));
console.log(str6.includes('Pallab'))













