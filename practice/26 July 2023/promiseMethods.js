const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Async operation successful.");
    } else {
      reject(new Error("Async operation failed."));
    }
  }, 1000);
});

promise.then(
  (result) => {
    console.log(result); // Output: "Async operation successful."
  },
  (error) => {
    console.error(error); // Output: "Async operation failed."
  },
);

promise.catch((error) => {
  console.error(error); // Output: "Async operation failed."
});

const promise2 = Promise.resolve("Resolved promise.");

promise2.then((result) => {
  console.log(result);
});

const promise3 = Promise.reject(new Error("Rejected promise."));

promise3.catch((error) => {
  console.error(error); // Output: "Async operation failed."
});
