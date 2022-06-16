# [Frontend Mentor - Calculator app solution](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Functionality](#functionality)
  - [Theme](#theme)
  - [Keyboard](#keyboard)
  - [Constraints](#constraints)
  - [Errors](#errors)

## Overview

### The challenge

Users should be able to:

- [x] See the size of the elements adjust based on their device's screen size
- [x] Perform mathmatical operations like addition, subtraction, multiplication, and division
- [x] Adjust the color theme based on their preference
- [ ] **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshots

| Theme1                                                    | Theme 2                                                   | Theme 3                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| ![](https://i.postimg.cc/XYxbR2XP/calculator-theme-1.png) | ![](https://i.postimg.cc/LsXp2z18/calculator-theme-2.png) | ![](https://i.postimg.cc/MGF8Tv7b/calculator-theme-3.png) |

## My process

### Built with

- [SolidJS](https://www.solidjs.com/) - Simple and performant reactivity for building user interfaces
- [big.js](https://mikemcl.github.io/big.js/) - A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic
- [classnames](https://github.com/JedWatson/classnames) - A simple javascript utility for conditionally joining classNames together
- [Cypress](https://www.cypress.io/) - Fast, easy and reliable testing for anything that runs in a browser

### Useful resources

- [Mozilla's Calculator Test Suite](https://mozilla.github.io/calculator/test/)
- [Sebastian Marucci's Overcoming Javascript numeric precision issues](https://www.avioconsulting.com/blog/overcoming-javascript-numeric-precision-issues)

## Functionality

This calculator should behave similar to the macOS Calculator.

### Theme

The theme can be changed by:

- mouse, clicking on the `range input`
- keyboard, tabbing into the `range input` and pressing the `arrow` keys

### Keyboard

The keyboard can be used by:

- mouse, clicking on the calculator's keyboard buttons
- keyboard, pressing the equivalent keys on the physical keyboard
  - `r` for RESET
  - `backspace` or `delete` for DEL
- keyboard, tabbing into the calculator's keyboard buttons and pressing `enter` or `space bar`

### Constraints

- upper limit: `999,999,999.9999`
- lower limit: `-999,999,999.9999`
- decimal precision: `4`

### Errors

When an error occurs, an alert is shown and the display is cleared.

- `[Error] Division by zero`
- `[Error] Out of bounds`
- `[Error] Internal error`
