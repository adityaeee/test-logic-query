// Soal no 2

// 2-a
const pola1 = (n) => {
    for (let i = 1; i <= n; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += i;
        }
        console.log(pattern);
    }
};

// 2-b
const pola2 = (n) => {
    for (let i = 1; i <= n; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern = j + pattern;
        }
        console.log(pattern);
    }
};

// 2-c
const pola3 = (n) => {
    let val = 0;
    let flag = true;
    for (let i = 1; i <= n; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            if (flag) {
                val++;
            } else val--;

            pattern += val;
            if (val == 5) {
                flag = false;
            } else if (val == 1) {
                flag = true;
            }
        }
        console.log(pattern);
    }
};

// 2-d
const pola4 = (n) => {
    let flag = true;
    let val = 0;
    let pattern = [];
    for (let i = 0; i < n; i++) {
        pattern[i] = [];
        for (let j = 0; j < n; j++) {
            if (flag == false) {
                val--;
            } else {
                val++;
            }
            pattern[i][j] = val;
        }
        if (flag) {
            flag = false;
            val += n + 1;
        } else {
            flag = true;
            val += n - 1;
        }
    }

    for (let i = 0; i < pattern.length; i++) {
        let row = [];
        for (let j = 0; j < pattern.length; j++) {
            row.push(pattern[j][i]);
        }
        console.log(row.join("\t"));
    }
};

pola1(5);
console.log("\n========\n");
pola2(5);
console.log("\n========\n");
pola3(5);
console.log("\n========\n");
pola4(5);
