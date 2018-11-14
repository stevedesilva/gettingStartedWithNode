{
  // Block Scope
}

if (true) {
  // Block Scope
}

for (var i = 1; i <= 10; i++) {
  // Block Scope
}

function sum(a, b) {
  // Function Scope
  var result = a + b;
  return result;
}


console.log(sum(4, 3));

{
  var a = 1;
  let aa = 1;
  {
    var b = 2;
    let bb = 2;
    const bbb = 2;

    console.log(a);
    console.log(aa);
    console.log(b);
    console.log(bb);
  }
  console.log(b);
  // console.log(bb);
  console.log(bbb);
}

// console.log(a);
// //console.log(aa);
//
// console.log(b);
//console.log(bb);
