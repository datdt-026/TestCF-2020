let n1 = [1, 2, "a"];
let n2 = [1, 3, "b"];

function A1(n1, n2) {
    let n3 = [];
    for (let i = 0; i < n1.length; i++) {
        if (n2.includes(n1[i]) == true) {
            n3.push(n1[i]);
        }
    }

    let n4 = [];
    for (let i = 0; i < n1.length; i++) {
        if (n3.includes(n1[i]) == false) {
            n4.push(n1[i]);
        }
    }

    for (let i = 0; i < n2.length; i++) {
        if (n3.includes(n2[i]) == false) {
            n4.push(n2[i]);
        }
    }
    return n4;
}
console.log(A1(n1, n2));