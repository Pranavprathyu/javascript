const obj = {
    a: {
        a1: 1,
        a2: 2,
        a3: 3
    },
    b: {
        b1: 3,
        b2: 4,
        b3: 5,
        z: {
            z1: 0,
            z2: -1
        }
    },
    c: 5,
    d: 6
}

// {a1:1,a2:2,a3:3,b1:3,b2:4,b3:5,z1:0,z2:-1,c:5,d:6}

 i=obj
 target = i.map((a)=>a)
console.log(target);
    



 
