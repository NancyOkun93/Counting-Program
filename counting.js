//var 1=namebox var 2=numbox//
function doCount (var1,var2) {
	var minNumber=1
	var maxNumber=100

//|| or//
//! nothing NULL//
	if (isNaN(var2) || !var1 || !var2){
		alert("Please enter both name and number");
		info.reset();
		return
	 }
//isNaN =not a number
// !isNan=is number
	if(!isNaN(var1)){
		alert("Please enter your name");
//otherwise//
	} else {

	if (var2>maxNumber){
		var2=maxNumber
		alert("Please use number smaller than 100");
		alert("resetting to 100");
		document.info.numbox.value=maxNumber;
		document.info.numbox.focus()

	} else {

	if(var2<minNumber){
		alert("Number must be between 1-100");
		info.reset()
		document.info.numbox.focus()

	} else {

		alert("Your name is " + var1);
		alert("Your number is " +var2)
		var var1 ="<p> My Name is " + var1 + "</p>"
		var numBreak = ""

	if(var2 % 2==0) {
			startNumber = 0
	} else {
			startNumber = 1
		}
			for (l=startNumber; l<var2; l+=2){
				numBreak = numBreak + l + "<br>"
			}

		document.getElementById("outputArea").innerHTML = var1 + numBreak;
  }}}}
