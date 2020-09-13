var name2, height, weight, bodyMassIndex;


name2 = window.prompt('Please enter your name:');
height = Number(window.prompt('Please enter your height in meters (e.g. 1.8)'));
weight = Number(window.prompt('Please enter your weight in kilograms'));
bodyMassIndex = Math.ceil(weight / (height * height));
window.alert(['Hi,',name2,'! Your body mass index is ',bodyMassIndex].join(''));


// https://blockly-demo.appspot.com/static/demos/code/index.html#fwaxku
