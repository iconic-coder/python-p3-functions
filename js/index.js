/*
  You should be able to call this function with no arguments and see its output in the terminal:
  greetProgrammer();
  => "Hello, programmer!"
*/
def greet_programmer():
print("Hello, programmer!")
greet_programmer()


/*
  You should be able to call this function with one argument and see its output in the terminal:
  greet("Naureen");
  => "Hello, Naureen!"
*/
def greet(name):
print(f"Hello, {name}!")
greet("Naureen")

/*
  You should be able to call this function with no arguments and see its output in the terminal:
  greetWithDefault();
  => "Hello, programmer!"

  You should also be able to call this function with one argument and see its output in the terminal:
  greetWithDefault("Sunny");
  => "Hello, Sunny!"
*/
def greet_with_default(name = "programmer"):
    print(f"Hello, ${name}!")
greet_with_default("Sunny")
/*
  You should be able to call this function with two arguments and get back its return value:
  const sum = add(1, 2);
  console.log(sum);
  => 3
*/
def add(num1, num2):
  const sum = add(1, 2)
  print(sum)

/*
  You should be able to call this function with two arguments and get back its return value:
  const result = halve(4);
  console.log(result);
  => 2

  If the function is called with an argument that isn't a number, it should return null:
  const result = halve("two")
  => null
*/
def halve(number):
  if (typeof number !== "number"):
  null
  return number / 2
