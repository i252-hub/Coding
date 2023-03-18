
  

  

  /*for(i=1;i<11;i++){


    console.log(i)
  }

  let j=1

  while(j<11){
    console.log(j)
    j++;
  }

  let k =1

  do{
    console.log(k)
    k++;
  } while(k<11)*/

  /*for(i=10; i>0; i--){
    console.log(i)
  }

  let j = 10
  while(j>0){
    console.log(j)
    j--;
  }*/

  /*let k=10
  do{
    console.log(k)
    k--;
  }while(k>0)*/

  /*for(i=0;i<50;i++){
    console.log(i)
  }*/

  /*0 x 0 = 0
  1 x 1 = 1
  2 x 2 = 4
  3 x 3 = 9
  4 x 4 = 16
  5 x 5 = 25
  6 x 6 = 36
  7 x 7 = 49
  8 x 8 = 64
  9 x 9 = 81
  10 x 10 = 100*/

  /*for(i=0; i<11; i++){
    console.log(i, ' x ', i, ' = ', i*i)
  }*/

  /*i    i^2   i^3
  0    0     0
  1    1     1
  2    4     8
  3    9     27
  4    16    64
  5    25    125
  6    36    216
  7    49    343
  8    64    512
  9    81    729
  10   100   1000*/

  /*console.log('i', 'i^2', 'i^3')
  for(i=0;i<11;i++){
    console.log( i, '',i**2,' ', i**3)
  }*/

  /*Use for loop to iterate from 0 to 100 and print only even numbers
  //for(i=0; i<100;i++){
    if(i%2===0){
        console.log(i)
    }
}

Use for loop to iterate from 0 to 100 and print only odd numbers
for(i=0; i<100;i++){
    if(i%2===1){
        console.log(i)
    }
}


Use for loop to iterate from 0 to 100 and print the sum of all numbers.*/

/*arr = []
sum =0;
for(i=0;i<101;i++){
    arr.push(i)
}
for(j=0;j<arr.length;j++){
sum += arr[j]
}

console.log(sum)*/

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
/*arr = []
arrs = []
sum =0;
sum2=0;
for(i=0;i<101;i++){
    if(i%2===0){
        arr.push(i)
    }
    else{
        arrs.push(i)
    }
}
for(j=0;j<arr.length;j++){
    
        sum += arr[j]

}

for(k=0;k<arrs.length;k++){
    
    sum2 += arrs[k]

}


console.log(sum, sum2)
*/



/*arr =[]
Math =Math.random() * 100
for(i=0; i< 5; i++){

arr.push(parseInt(Math))
}
if(arr===[null]){
     arr = 0;
}
console.log(arr)*/


/*arr =[]
for(i=0; i< 5; i++){

arr.push(parseInt(Math.random() * 100))
}
if(arr===[null]){
     arr = 0;
}
console.log(arr)*/


/*for(i=1;i<2;i++){
    id = (Math.random()*5).toString(36).slice(2)
    console.log(id)

}*/

/*new_array =[]

for(i=0;i<countries.length;i++){
    new_array.push(countries[i].length)

}

console.log(new_array)*/

/*
[
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/ 

/*const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    'Iceland'
  ]*/


/*console.log('[')
for(i=0; i<countries.length;i++){
   
  loo=  [countries[i],countries[i].substr(0,3).toUpperCase(),countries[i].length]
 console.log(loo)
}
console.log(']')*/

//color = countries.toString()

/*if(color.match(/land/gi)!= null){
    console.log(countries[5], countries[8], countries[11])
}
else{
   console.log(color)
}*/

/*for(i=0;i<countries.length; i++){
    if(countries[i].length < 6){
        console.log(countries[i])
    }
}*/

/*const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]*/

  /*for(i=0;i<webTechs.length;i++){
    longst_word = Math.max(webTechs[i].length,webTechs[i].length)
    console.log(longst_word)
  }

console.log(webTechs[2])*/
/*ai=[]
for(i=0; i<webTechs.length;i++){
    arr=[webTechs[i], webTechs.length]
    ai.push(arr)
}
console.log(ai)*/

/*const mernStack = ['MongoDB', 'Express', 'React', 'Node']

new_lang=mernStack.toString()
word = new_lang.substr(0,1) + new_lang.substr(8,1) + new_lang.substr(16,1) + new_lang.substr(22,1)

console.log(word)*/

/*tech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(i of tech){
    console.log(i)
}*/

/*newarr=[]
fruit =  ['banana', 'orange', 'mango', 'lemon'] 

for(i= fruit.length-1; i>=0; i--){
    newarr.push(fruit[i])
}

console.log(newarr)*/

/*const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for(i of fullStack){
    for(j of i){
        console.log(j)
    }
  }*/
  

  /*co = countries.toString()
  for(i=0; i<co.match(/land/gi).length; i++){
    console.log(co[i])
  }*/
  /*country = countries

  sortedCountries=country.sort()
console.log(sortedCountries)*/

/*const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

tech = mernStack.concat(webTechs)

for (i of tech){
    console.log(i)
}*/
/*const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
  'Iceland'
]*/
/*for(i=0;i<countries.length;i++){
if(countries.length >=2){
  console.log(countries[i])
}

}*/

/*new_array = []
countries.reverse()
country = countries.toString()

 new_array.push(country.toUpperCase())

console.log(new_array)*/


