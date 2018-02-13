/*
  trimPhoneNumber.js - nativeBridge
    Betterment Labs
    Created by BettermentLabs. 
    Copyright © 2018 Betterment Labs, LLC. All rights reserved.

Component trimPhoneNumber.js
  Description:  
*/
export const trimPhoneNumber = (number) => {
	if (number) {
		if (number.toString().constructor === String) {
		  let trimmedNumber = number.toString()
		  	.split(" ")
		  	.join("")
			  	.split("(")
			  	.join("")
				  	.split(")")
				  	.join("")
					  	.split("+")
					  	.join("")
						  	.split("-")
						  	.join("");
		  if (trimmedNumber.charAt(0) != "1") {
		      trimmedNumber = "1".concat(trimmedNumber);
		  }
	  return trimmedNumber
	}}
	return ""
}
