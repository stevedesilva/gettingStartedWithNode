const job = (name, age) => {
  console.log('My name is ' + name + ", age = " + age + ".");
};
const timeoutInSecs = 4 * 1000;

setTimeout(job,timeoutInSecs,'Steve','40');
