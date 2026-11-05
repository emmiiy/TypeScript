const printValue = (value: string | number): void => {
  // console.log(value.toUpprtCase());
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
};

printValue("samurai");
printValue(123.456);
