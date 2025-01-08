// events_dom2.js
//   The last part of validator2. Registers the 
//   event handlers
//   Note: This script does not work with IE8

// Get the DOM addresses of the elements and register 
//  the event handlers


document.getElementById("custName").addEventListener("change", chkName, false);
document.getElementById("phone").addEventListener("change", chkPhone, false);