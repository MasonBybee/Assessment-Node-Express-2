### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON Web Token
- What is the signature portion of the JWT? What does it do?

  The signature portion of a JWT verifies the token's integrity and authenticity by using a secret key or a public/private key pair.

- If a JWT is intercepted, can the attacker see what's inside the payload?

  Yes, if a JWT is intercepted, the attacker can see the contents of the payload, as it's encoded but not encrypted.

- How can you implement authentication with a JWT? Describe how it works at a high level.

  Authentication with a JWT involves the server creating a signed token for a valid user and the client subsequently presenting this token to access protected resources.

- Compare and contrast unit, integration and end-to-end tests.

  Unit tests assess individual components for correctness, integration tests check how these components work together, and end-to-end tests validate the entire application's flow and user experience.

- What is a mock? What are some things you would mock?

  A mock is a simulated object or system that mimics the behavior of a real one, often used in testing to replicate external systems, like APIs or databases, that are not being tested.

- What is continuous integration?

Continuous integration is a development practice where code changes are frequently integrated and automatically tested to detect problems early.

- What is an environment variable and what are they used for?

  An environment variable is a dynamic-named value stored outside a program, commonly used to configure behavior based on the execution environment (like production or development).

- What is TDD? What are some benefits and drawbacks?

  Test-Driven Development is a software development process where tests are written before the code, promoting better design and maintainability, though it can be more time-consuming initially.

- What is the value of using JSONSchema for validation?

  Using JSONSchema for validation ensures data consistency and correctness by defining the structure, types, and constraints of JSON data.

- What are some ways to decide which code to test?

  Deciding which code to test involves evaluating the complexity, criticality, and past bug history of the code, and considering the impact of potential failures.

- What does `RETURNING` do in SQL? When would you use it?

  The `RETURNING` clause in SQL is used to retrieve specific fields of records that were inserted, updated, or deleted, often to confirm changes or for further processing.

- What are some differences between Web Sockets and HTTP?

  Web Sockets enable continuous two-way communication between a client and server, whereas HTTP is a request-response protocol suited for discrete transactions.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I prefered Flask solely because I prefer Python over JavaScript.
