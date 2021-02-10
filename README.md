# Coding Test _ FrontEnd Round 1

Todo List web application

### How to submit the test

Create an PR from your own code branch and assign to me `@tintran-pops` before the deadline.

### Requirements
#### #1

- Handle Task's status as described in the screenshot bellow. Task lists statuses will be stored offline which mean I can see the latest status after I close and re-open the web even though there're no api available.

- Only valid actions are displayed on the task. For example: when the task is `todo`, there should only be `Start` and `Delete` buttons. When the task is `in-progress`, there should only be `Done` or `Cancel` buttons.

![alt text](./public/TaskFlow.png)

#### #2

- Synchronize the status to server so that I can see the changes from other places too.

#### A Good to Have

- The Task's transition logics should be clear, easy to review and change in the future.

### What can you do?

- You can refactor and edit everything As long as your code can full fill the requrirement. If you add any other library/third party, please mention it in the PR and explain why would you use it.

### Notes

PR Template:

```
Added:
 - General idea of what you have added such as an utility function, base component or so and why do you need to add them.
Refactored
 - General idea of what you have refactored such as move a function from component A to component B and why do you need to do that.
Solution for #1:
....
Solution for #2:
....
```