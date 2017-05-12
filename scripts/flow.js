window.onload = function Maxicom () {

const url = `http://ckjacobson.com/maxicom/reports/flow/1.json`;

$.ajax({
  url: url
}).done(function(data) {
  console.log('The returned object is:', data)
})

}
