"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printValue = (value) => {
    // console.log(value.toUpprtCase());
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
};
printValue("samurai");
printValue(123.456);
