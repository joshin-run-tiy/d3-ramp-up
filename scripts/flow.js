window.onload = function Maxicom () {

const url = `http://ckjacobson.com/maxicom/reports/flow/1.json`;

$.ajax({
  url: url
}).done(function(data) {
  console.log('The returned object is:', data)
})

}
//
//
// var myArrayOfObjects = [
//         { x: 100, y: 100},
//         { x: 130, y: 120},
//         { x: 80 , y: 180},
//         { x: 180, y: 80 },
//         { x: 180, y: 40 }
//       ];
//
//       myArrayOfObjects.forEach(function (d){
//         console.log(d.x + ", " + d.y);
//       });


// d3.csv("data.csv", function (myArrayOfObjects){
//   myArrayOfObjects.forEach(function (d){
//     console.log(d.x + ", " + d.y);
//   });
// });


// d3.csv("data.csv", type, function (myArrayOfObjects){
//         myArrayOfObjects.forEach(function (d){
//           console.log(d.x + d.y);
//         });
//       });
//
//       function type(d){
//         d.x = parseFloat(d.x);
//         d.y = parseFloat(d.y);
//         return d;
//       }
