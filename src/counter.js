function Counter(date_1, date_2, haserror) {
  if (date_1 === "" || date_2 === "") {
    console.log("the fields must be filled");
    haserror = true;
    return 0;
  } else {
    const date1 = new Date(date_1);
    const date2 = new Date(date_2);

    return Math.abs((date1 - date2) / 86400000);
  }
}

export default Counter;
