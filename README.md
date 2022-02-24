# Posts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Run the app

Run `npm start` for the app with live server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). I have verified UI interactions along with service testing.

## Bonus point - did not do it >_<

I did not see the purpose of using RxJS Subjects in this case. Felt like an overkill. You guys could enlighten me on that! /O\


## The generic questions

1. Why is it (or isn't it) safe to use this? (hint: the token is one string, the pdf might breaks it
into multiple lines) 
    > JWT is safe (except hijacking) as it is asymmetric encryption (public/private keys). JWT token without expiration is not a safe thing at all.

2. In our web-application, messages sent from one user to another, can contain HTML,
which poses some security risks. Describe two attack vectors bad actors might try to
abuse? And how would you mitigate these vectors?

    > exchanging pure HTML without e2e sanitizing is not a good idea because anyone can inject a script or corrupt data in-between. To mitigate, DO NOT Do such exchange first of all or sanitize e2e and never trust those inputs blindly.

3. Explain the difference between mutable and immutable objects.

    a. What is an example of an immutable object in JavaScript?
    >> String literals are immutables as they occupy a fixed memory in JSHeap.

    b. What are the pros and cons of immutability?
    >> Pros - Side effects while exchanging values such as value being modified by the reader. Single source of truth such as NgRx state management use-case.
      
    >> Cons - Handle with care. Need proven solution such as `immutable.js` libs.

    c. How can you achieve immutability in your own code?
    >> It starts with a simple `const` for types, `Object.freeze` for objects and goes all the way with proven third-party solutions such as `immutable.js` and `NgRx` (state management).

4. If you would have to speed up the loading of our current web-application, how would you
do that? (no need to actually do it, just describe the steps you would take)

    > First contentful paint and interactive time solely depends on the `main.bundle` size. Code-splitting and lazy-lading can reduce the main thread load and encourage faster paint. This is just a start. A proper profiling with `Lighthouse` or related tools will guide us more.

5. What part of a new job do you think is more important:
    > a. Choosing my own hardware, but work with a company supplied operating system image.