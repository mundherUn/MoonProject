function test() {
    let x = 5;


    if (true) {
        let x = 10;

        console.log("this is OK  " + x)
    }
    console.log(x)
    return "Don";
}

console.log(test())

function Con() {
    const BON = {
        "name": "monther",
        "age": 12
    };


    if (true) {
        const BON = 3;
        console.log(BON)
    }
    Object.freeze(BON);
    BON.name = "Ali";
    console.log(BON)
}

Con()