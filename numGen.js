function numGen(num) { //Roll over effect. Requires knowledge of ascii? 
  if (num + 13 <= 90)
    return num + 13;
  
  else
   return 64 + (-(90 - (num + 13)));
}

function rot13(str) { 
  var myString = "";
  
  for (var i = 0; i <str.length; i++) {
    if ((/[A-Z]/gi).test(str[i])) 
      myString += String.fromCharCode(numGen(str.charCodeAt(i))); 
    else
      myString += str[i];
  }
  
  return myString;
}

//Test case
//rot13("SERR PBQR PNZC");
