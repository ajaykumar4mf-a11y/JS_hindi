const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//1.  arr.push(arg)
// marvel_heroes.push(dc_heroes)              //push elements in the original array
// console.log(marvel_heroes)


//2.  arr1.concat(arr2)
// const All_heroes = marvel_heroes.concat(dc_heroes)  //return new combined array and does NOT modify original array
// console.log(All_heroes)

//3.  spread operator -> working: same as concat
// SYNTAX : newarr = [...arr1, ...arr2, ...arr3, _________________________, ...arrn]

// const All_heroes2 = [...marvel_heroes, ...dc_heroes]
// console.log(All_heroes2)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//4.   SYNTAX : arr.flat(depth_to_flat) ->working: flaten the array
// const real_another_array = another_array.flat(Infinity)           
// console.log(real_another_array)

//5. Array.isArray(arg)
// console.log(Array.isArray("Ajay"))

// 6. Array.from(args=literals->something having length property)takes literals(string, set) as input and NOT number bcz it is not a literal
// console.log(Array.from({name: "Ajay"}))     //Interesting Case     =>     //op: [] -> they need command , whether we want to create with the help of keys or values


//7. Array.of() : it creates a new array from a variable number of arguments, regardless of their type.

console.log(Array.of(1, 2, 3, 4)); 
// Output: [1, 2, 3, 4]