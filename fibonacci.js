function run() {
    let a=0, b=1;
    let n = document.getElementById("fibonacci").value;
    let fibonacci = "";
    for (let i=0; i<n; i++) {
        let kq = a;
        if (i==0) fibonacci += i;
        else fibonacci += ", " + kq;
        a = b;
        b = kq + b;
    }
    document.write(n + " số Fibonacci đầu tiên là: " +fibonacci);
}