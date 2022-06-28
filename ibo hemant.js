// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// {
//   "TV": 2,
//   "AC": 2,
//   "FAN": 1
// }

//---------

// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

//Solution for first Assignment
function getUniqueProductCount(listOfProducts) {
  let output = {};
  for (let i = 0; i < listOfProducts.length; i++) {
    if (output[listOfProducts[i].productName] == undefined) {
      output[listOfProducts[i].productName] = 1;
    } else {
      output[listOfProducts[i].productName]++;
    }
  }
  return output;
}

let output = getUniqueProductCount(listOfProducts);
console.log(output);

// -----------------------

//Solution for second Assignment

function getUniquePrducts(listOfProducts) {
  let output = [];
  for (let i = 0; i < listOfProducts.length; i++) {
    CheckData(output, listOfProducts[i]);
  }
  console.log(output);
}

function CheckData(arr, el) {
  let index = arr.findIndex((item) => item.productName === el.productName);

  if (index === -1) {
    arr.push(el);
  } else {
    arr[index].quantity += el.quantity;
  }
  return arr;
}

getUniquePrducts(listOfProducts);
