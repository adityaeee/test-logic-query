// Soal no 3

const n = [12, 9, 13, 6, 10, 4, 7, 2];

const sortArrayWithoutMultipleThree = (arr) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 !== 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};

sortArrayWithoutMultipleThree(n);
