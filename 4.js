const bucket = ["vegetable", "oil", "rice", "egg"];

const cocked = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetable") &&
    bucket.includes("oil") &&
    bucket.includes("rice") &&
    bucket.includes("egg")
  ) {
    resolve("Your fried rice is ready to eat");
  }
  reject("Sorry you cant eat fried rice today");
});
cocked
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
