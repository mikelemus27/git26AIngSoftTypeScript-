console.log("holamundo")
let num: number = 0.444;
let hex: number = 0xbeef;
let bin: number = 0b0010;
console.log("num",num)
console.log("hex",hex)
console.log("bin",bin)

num=0xbbb
console.log("num",num)
let yes: boolean =true;
let no: boolean =false;

console.log("yes",yes)
console.log("no",no)

const arr3: (Date| String[])[] = [new Date(),
                                   new Date(),
                                  ["1","a"]
]
console.log("arr3",arr3)
console.log("arr3[2]:",arr3[2])
const arrNum: number[]=[1,2,3,4,5]
console.log("arrNum",arrNum)
let numberTuple : [number, number,number]=[1,2,3]
console.log("numberTuple",numberTuple)
let heteroTuple : [Date,number,String] = [new Date(), 2,"juana"]
console.log("heteroTuple",heteroTuple)
console.log("heteroTuple[0]",heteroTuple[0])