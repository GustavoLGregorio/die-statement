# die() - Because Sometimes Code Needs to Just... Stop

[![npm](https://img.shields.io/npm/v/die-statement.svg)](https://www.npmjs.com/package/entropy-particles)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

A simple and easy way to kill any application whenever you want, be it on a new line or as an inline statement!

## Installation

```javascript
npm i die-statement
```

Or just drop the function in your codebase. No npm bloat, no build step, no regrets. Here it is, i'll make it easy for ya!

```javascript
function die(message = "Fatal Error") {
    return (() => {
        const error = new Error();
        const match = error.stack?.match(/^(?!die).*@(.*:\d+:\d+)$/m);
        if (match) {
            console.error(message, "\n\nDied at:", match[1]);
        } else {
            console.error(message, "\n\nDied at (location unknown)");
        }
        throw error;
    })();
}
```

## Usage

```javascript
die(message?)
```

### Parameters

- `message` (string, optional): Your last words before everything crashes. Defaults to `"Fatal Error"` if you're feeling uncreative.

### Returns

Nothing. It throws an Error. Your code stops here. Game over.

## Examples

**As a fallback (the fancy way):**

```javascript
const necessaryElement = document.getElementById("#important") || die();
```

**When you've had enough (the direct way):**

```javascript
if (userDidSomethingDumb) {
    die("User did something unforgivable");
}
```

**The dramatic exit:**

```javascript
const config = loadConfig() || die("No config, no service. I quit.");
```

## What It Does

When called, `die()` will:

1. Log your message (or the default one) to the console
2. Show you exactly where your code gave up on life (`Died at: file.js:42:10`)
3. Throw an Error to stop execution immediately

## Why Use This?

Sometimes `throw new Error()` is too many characters. Sometimes you want your failures to feel more... deliberate. Sometimes you just want to watch the world burn, but in a traceable way.

Also, if you've ever missed PHP's `die()` function and tried to use `throw new Error()` in a statement only to have JavaScript laugh at you—well, now you don't have to miss it anymore.

## Notes

- The stack trace parsing works in modern browsers. If it fails, you'll get `"(location unknown)"` instead. Even `die()` has its limits.
- This is blocking and synchronous. If you call it, everything stops. That's the point.

---

_"To die, to sleep—no more—and by a sleep to say we end the heartache..."_ - Shakespeare, probably talking about JavaScript
