function c(){
  var Input = document.getElementById('input').value;
  var result = n2 + n1 ;
  if (Input == result){
    document.getElementById('next').innerHTML = "Next";
    document.getElementById('submit').style.display = "none";
    document.getElementById('next').style.display = "unset";
  }
 }