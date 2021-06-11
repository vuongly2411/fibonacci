let a=0, b=1;
let fibonacci = "";
for (let i=0; i<20; i++) {
    let kq = a;
    if (i==0) fibonacci += i;
    else fibonacci += ", " + kq;
    a = b;
    b = kq + b;
}
document.write(fibonacci);
