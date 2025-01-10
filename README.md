# JavaScript Bug: Unexpected Null Return in Addition Function

This repository demonstrates a common JavaScript bug involving the unexpected return of `null` values in a simple addition function.

## Bug Description

The `foo` function is designed to add two numbers. However, it returns `null` if either input is `null`, which might not be the desired behavior in all situations. A more robust solution might be to throw an error or use default values (e.g., 0) for null inputs. 

## Solution

The provided solution file (`bugSolution.js`) offers improved handling of `null` inputs, providing more controlled and predictable behavior.
