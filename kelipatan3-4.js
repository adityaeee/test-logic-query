// Soal no 1

const kelipatan = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
            if (i % 4 === 0) {
                console.log("OKYES");
            } else {
                console.log("OK");
            }
        } else if (i % 4 === 0) {
            console.log("YES");
        } else {
            console.log(i);
        }
    }
};

kelipatan(15);
