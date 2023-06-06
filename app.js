// npm --version

// local dependency 
// npm i <packageName>

// global dependency
// npm install -g <packageName>

//package.json  --manifest file(stores important info about project)
//manual approach
//npm init(steep by step,press Enter)
//npm init -y(everything default)


const v=require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems=v.flattenDeep(items)
console.log(newItems)