$(document).ready(function() {
    // Array of JavaScript questions with their answers
    const questions = [
        {
            question: "What is the difference between `let`, `const`, and `var`?",
            answer: "`var` is function-scoped, while `let` and `const` are block-scoped. `let` allows reassignment, but `const` does not allow reassignment of the variable's value after it's been set."
        },
        {
            question: "Explain the concept of closures in JavaScript.",
            answer: "A closure is a function that retains access to its outer scope even after the outer function has completed. Closures are commonly used for data encapsulation and to create private variables."
        },
        {
            question: "What is hoisting in JavaScript?",
            answer: "Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution. This applies to `var` declarations and function declarations, but not to `let` and `const`."
        },
        {
            question: "Describe the difference between `==` and `===` operators.",
            answer: "`==` is the abstract equality operator that performs type coercion before comparison, whereas `===` is the strict equality operator that checks both value and type without coercion."
        },
        {
            question: "What is a promise in JavaScript, and how do you use it?",
            answer: "A promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: `pending`, `resolved`, and `rejected`. Promises are used with `.then()`, `.catch()`, and `.finally()` methods for handling asynchronous code."
        },
        {
            question: "How does prototypal inheritance work in JavaScript?",
            answer: "Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects. This is achieved through the prototype chain, where an object can access the properties and methods of its prototype."
        },
        {
            question: "What is the event loop in JavaScript?",
            answer: "The event loop is a mechanism in JavaScript that handles asynchronous operations. It continuously checks the call stack to see if it's empty, and if it is, it checks the callback queue to push any pending callback functions onto the call stack for execution."
        },
        {
            question: "Explain the use of arrow functions and how they differ from regular functions.",
            answer: "Arrow functions are a concise syntax for writing functions in JavaScript. They do not have their own `this` context and cannot be used as constructors. They also do not have an `arguments` object."
        },
        {
            question: "What are JavaScript modules, and why are they useful?",
            answer: "JavaScript modules allow you to break up your code into separate files, each with its own scope. Modules help in organizing code, promoting code reuse, and managing dependencies more effectively."
        },
        {
            question: "How do you handle asynchronous code in JavaScript?",
            answer: "Asynchronous code in JavaScript can be handled using callbacks, promises, or `async/await` syntax. Each method provides different ways to deal with non-blocking code execution and handling asynchronous tasks."
        }
    ];

    // Handle question button click
    $('.question-btn').click(function() {
        var questionIndex = $(this).data('question'); // Get the index of the question
        var selectedQuestion = questions[questionIndex]; // Fetch the corresponding question and answer
        
        // Display the corresponding question and answer
        $('#question-content').html(`
            <h5>${selectedQuestion.question}</h5>
            <p>${selectedQuestion.answer}</p>
        `);
    });

    // Handle score range slider input change
    $('#scoreRange').on('input', function() {
        var score = $(this).val();
        $('#scoreValue').text(score);
        $('#progressBar').css('width', score + '%').attr('aria-valuenow', score).text(score + '%');
    });
});
