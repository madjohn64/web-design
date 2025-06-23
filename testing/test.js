function createGreeting(name) {
    const greeting = `Hello, ${name}!`;
    return greeting;
  }
  
  nameInput = prompt("Input your name","Jack")
  greeting = createGreeting(nameInput)
  alert(greeting)