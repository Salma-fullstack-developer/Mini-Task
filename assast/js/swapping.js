let a=6;
let b=3;
document.write("<h1 style='background-color:brown;color:white;text-align:center;font-family:verdana;font-size:x-large;text-transform:capitalize'> before swapping the variable a contain "+a+" </h1>")

document.write("<h1 style='background-color:blue;color:white;text-align:center; font-family:verdana;font-size:x-large;text-transform:capitalize'> before swapping the variable b contain "+b+" </h1>")
a=a+b;
b=a-b;
a=a-b;
document.write("<h1 style='background-color:purple;color:white;text-align:center;font-family:verdana;font-size:x-large;text-transform:capitalize'> after swapping the variable a contain "+a+" </h1>")

document.write("<h1 style='background-color:green;color:white;text-align:center;font-family:verdana;font-size:x-large;text-transform:capitalize'> after swapping the variable b contain "+b+" </h1>")