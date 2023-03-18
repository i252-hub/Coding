//1empty = []
/*2element = ['orange', 'banana', 'apple', 'grapes', 'mango']
//3document.getElementById('name').innerHTML= element.length
one_ele = element.slice(0,1)
two_ele= element.slice(2,3)
three_ele = element.splice(4,1)

4document.getElementById('name').innerHTML= three_ele + ',' + two_ele + ',' + one_ele*/

/*5mixedDatatypes = [
'Name',
17,
{'Birthday': 05-10},
null,
98.7,
{"Parmesan": 30}
]

document.getElementById("name").innerHTML= mixedDatatypes.length*/

//itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']
//7console.log(itCompanies.length)
//8console.log(itCompanies[0] + ', '+ itCompanies[4]+', '+ itCompanies[6])
//9console.log(itCompanies.join())
//10it_Companies = itCompanies.slice(0,5)
//11console.log(it_Companies.toUpperCase().length)
//Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companie
/*12-13it_companies = itCompanies.splice(6,1)
last = it_Companies.join(', ')+' and '+ it_companies + ' are big IT companies'
if(last.match('Netflix')=== null){
    console.log('Company not found.')
}
else{
    return last
}*/

/*one = itCompanies[0].toString()
two =  itCompanies[1].toString()
three =  itCompanies[2].toString()
four =  itCompanies[3].toString()
five =  itCompanies[4].toString()
six =  itCompanies[5].toString()

co_one =one.match(/o/gi)
co_two =two.match(/o/gi)
co_three =three.match(/o/gi)
co_four =four.match(/o/gi)
co_five =five.match(/o/gi)
co_six =six.match(/o/gi)

console.log(co_one,co_two,co_three,co_four,co_five,co_six)
console.log(one,two,three)*/

//console.log(itCompanies.sort()) sort a-z
//console.log(itCompanies.reverse()) reverse order 
//console.log(itCompanies.slice(4,7))
//console.log(itCompanies.splice(3,1))

/*console.log(itCompanies.shift())
console.log(itCompanies.pop())
console.log(itCompanies)
console.log(itCompanies.splice())*/



//import {countries} from 'countries.js'




/*const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
willo = text.replace(/,/gi,'').replace(/\./gi,'')
console.log(willo.split(' '))
console.log(willo.split(' ').length)*/

//---------------------------------------------------------------------------------------------------------

/*

add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of your shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'

*/

/*const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar') 
shoppingCart.splice(4,1)
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)*/

/*const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullstack = frontEnd.concat(backEnd)
console.log(fullstack)*/

/*const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

age_order = ages.sort()
//console.log(Math.min(age_order[0], age_order[9]), Math.max(age_order[0], age_order[9]))

average = (age_order[5] + age_order[6])/2
//sum = ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9] 
//console.log(sum/ages.length)

max = Math.max(age_order[0], age_order[9])
min = Math.min(age_order[0], age_order[9])

console.log(min - average, max - average)*/

