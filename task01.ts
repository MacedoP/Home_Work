const addUp=(r:Array<number>)=>{
    let s: number = 0;
    for(let i of r){
        if(Array.isArray(i)){
            s += addUp(i)
        }else if(typeof i == "number"){
            s += i
        }
    }
    return s;

}
let res:any = [1, 2, 3, [[[4], 5], [["6"]], { obj: 10 }]]
console.log(addUp(res)) // 21