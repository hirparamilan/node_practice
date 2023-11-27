## Back End Challenge14

Create a [REST API](https://www.restapitutorial.com) using any language or web framework you prefer, which performs the following functionality:

- Provides a POST endpoint at `/data` where a user submits a JSON formatted list of 500 random numbers. The list has to be exactly 500 numbers, if there are more or less than 500 an error must be returned. Similarly, if something other than a list of numbers is submitted, an error must be returned.
- Provides a GET endpoint at `/data` which provides the same JSON formatted list of 500 numbers that are sorted from lowest to highest.

**BONUS:**

- Provides a PATCH endpoint at `/data` which allows insertion of a single number into the list which gets placed in the proper order.
