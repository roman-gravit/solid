## SOLID

SOLID is an acronym for a group of five good principles (rules) in computer programming. 

It allows programmers to write code that is easier to understand and change later on. 

Solid is often used with systems that use an object-oriented design.


**S**  Single-responsiblity Principle(SPR): Class has one job to do. Each change in requirements can be done by changing just one class.

**O**  Open-closed Principle(OCP): Objects or entities should be open for extension but closed for modification.

**L**  Liskov Substitution Principle(LSP): Class can be replaced by any of its children. Children classes inherit parent's behaviours.

**I**  Interface Segregation Principle:  A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t 
										be forced to depend on methods they do not use.

**D**  Dependency Inversion Principle: Entities must depend on abstractions, not on concretions. It states that the high-level module must not 
                                      depend on the low-level module, but they should depend on abstractions.


## CI/CD

Stands for continuous integration and continuous delivery/deployment, aims to streamline and accelerate the software development lifecycle.

 - **Continuous integration (CI)** refers to the practice of automatically and frequently integrating code changes into a shared source code repository.

 - **Continuous delivery** and/or **Continuous deployment (CD)**  is a 2 part process that refers to the integration, testing, and delivery of code changes.
 

 1. Code: write, commit and push to repository

 2. Make build after code changes

 3. Test: after auto tests do manual testing.

 4. Make release.

 5. Deploy release

 6. Operate/Monitor

 7. Plan new features