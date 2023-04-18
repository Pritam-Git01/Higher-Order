// write your own find and findIndex function
// (Hint: using for loop and if else)
const x = Number(prompt('Eneter Your Number = '))
function find (arr) {
  for(let i = 0; i < arr.length; i++){
    if(x < arr[i]){
      return;
    } 
  } 
    return ('not found grater elements than x ')
  }

find([1,2,3,4,5,6]);


const y = Number(prompt('Enter Your Number = '))
function findIndex (arr2){
  for(let j = 0; j < arr2.length; j++){
    if(y < arr2[j]){
      return j;
    }  
  }
    return ('not found grater elements than x ')
  }

findIndex([1,2,3,4,5,6]);


// ======================================================== //



const practiceData = [[14,21,23,64], [33,46,51,65]]
/**
 * requirement one
 * increment each number by one and output the resultant array using a higher order method and for loop
 * HINT: use nesting
 * solution =  [[15,22,24,65], [34,47,52,66]]
 * function 
 * 
 * 
 * requirement two
 * from the above array, create an array of array of even numbers using a higher order method and for loop
 * solution = [[14,64], [46]]
 */
  const incr = practiceData.map(num => num.map(x => x + 1));
  console.log(incr);


// ======================================================== //

    const array = [23 , 45,467, 789, 34, 989, 56]

    // problem => return an array such that numbers at odd idex are multiplied by 2
    // and numbers at even index are multiplied by 10

    const res = array.map((num,index) => {
      if(index % 2 === 0){
          return num * 2;
      } else {
          return num * 10;
      }
  });
  console.log(res);
  
    

// ======================================================== //




const carBrands = ["honda", "toyota", "maruti","tata"]
const carModel = ["city", "innova", "alto", "nano"]


  const carObject = carBrands.reduce((acc, cur, i) => {
    
    acc[cur] = carModel[i]; // assign the car model to the corresponding car brand
    return acc; // return the updated accumulator
  }, {}); 

  console.log(carObject)

//  using a higher order method, create a carObject variable such that 
/**
* 
* {
* honda:city,
* toyota:innova,
* maruti:alto,
* tata:nano
* }
*/

 
 
// ======================================================== //


 /**
  *  Flattening
 Use the reduce method 
 to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 
// 
  * 
  * 
  */

// if we use the reduce method here but we have to also concat these 
const arrays = [[1, 2, 3], [4, 5], [6]];
   result =  [1, 2, 3, 4, 5, 6];

   const res4 = array.reduce((element,index) => element.concat(index));
   console.log(res4);

// ======================================================== //


 /**
  * const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
  * return an array with all words converted into uppercase using higher order function
  * const countries = ['FINLAND', 'DENMARK', 'SWEDEN', 'NORWAY', 'ICELAND']
  * 
  * 
  * 
  */
 const res3 = countries.map(num => num.toUpperCase());
 console.log(res3);

// ======================================================== //





