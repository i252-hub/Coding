let challenge = '30 Days Of Javascript' //Variable Declaration
//console.log(challenge.length) //Finding the length of string
//console.log(challenge.toUpperCase()) //Uppercase
//console.log(challenge.toLowerCase()) //Lowercase

/* --- 0 IS THE STARTING POINT IN AN ELEMENT ---- */
//console.log(challenge.substr(0,2)) //from starting index, to no. of char to slice)
//console.log(challenge.substring(3, 21)) //from starting index, to last index not being not included 

//console.log(challenge.includes('Script')) //Check if the word is included on the string
//console.log(challenge.split(''))// Split the string into an array 
//console.log(challenge.split(' ')) // Split the string to array on space

/*companies= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'*/
//console.log(companies.split(',')) // Splits the string to array on comma
//console.log(challenge.replace('Javascript','Python'))
//console.log(challenge.charAt(15)) // find the character of in an index
//console.log(challenge.charCodeAt('J')) // find the character code of a char in string
//console.log(challenge.indexOf('a')) //Find the first occurence of a char in string
//console.log(challenge.lastIndexOf('a')) //Find the last occurence of a char in string

/*bec = 'You cannot end a sentence with because because because is a conjunction'*/

//console.log(bec.indexOf('because')) 
//console.log(bec.lastIndexOf('because'))
//console.log(bec.search('because')) //searches for the position of a char in string
//console.log(challenge.trim(0,22)) // Removes trailing white space
//console.log(challenge.startsWith('30')) //check if the starting word is true
//console.log(challenge.endsWith('Javascript')) //check if the ending word is true

/* Regular Expression */

//|      / -> start or end
//|      gi -> to search everywhere
//console.log(challenge.match(/a/gi)) // returns matching index

/* CONCAT 
first = challenge.substr(0, 11)
last  = challenge.substr(11,21)
console.log(first.concat(last)) */
//console.log(challenge.repeat(2)) //Takes the argument as a number and returns its copy

/*quote = 'There is no exercise better for the heart than reaching down and lifting people up.' 
console.log(quote)*/

//console.log(typeof '10' === 10) //type of checks the data type
//console.log(parseInt('10') === 10)
//console.log(Math.round(parseFloat('9.8'))===10) //Math.round rounds off the float
//rhyme = 'python and jargon'
//console.log(rhyme.match(/on/gi))

//hope = 'I hope this course is not full of jargon'
//console.log(hope.match('jargon'))

//let number = Math.random()
//console.log(Math.floor(number * 100))
//console.log(Math.floor(number * (100 - 50))+50)
//console.log(Math.floor(number*(255-0))+0)
//js= "Javascript"
//console.log(js[Math.floor(Math.random()*11)])

/*console.log(
'1\t 1\t 1\t 1\t 1\n2\t 
1\t 2\t 4\t 8\n3\t 1\t 3\t 9\t 27\n4\t 1\t 4\t 16\t 64\n5\t 1\t 5\t 25\t 125')*/

//sentence = 'You cannot end a sentence with because because because is a conjunction'
//console.log(sentence.substr(sentence.indexOf('because'),24))

//x  = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
//console.log(x.match(/love/gi).length)
//console.log(sentence.match(/because/gi).length)
/* Regex
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;.The@re$is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I foundtea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to bea tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/@/gi,'').replace(/#/gi,'').replace(/%/gi,'').replace(/&/gi,'').replace(/;/gi,'').replace(/\$/g,''))*/

annual ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(annual.match(/\d+/g), ":", (5000+15000*12)+10000)
