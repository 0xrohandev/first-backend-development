# My First Backend Development

I will update more on the go

Earlier I was Using node js version 24, but using that version, I couldn't connect my MongoDB Atlas.

Later on I downgraded my Node js version to version 20.18.0, which works fine to connect my MongoDB Atlas.

Used dependencies: express, cors, cookie-parser.

cors is for cross origin resource sharing, this means you can restrict your backend application to talk to specific websites only. You can learn more on this link: [official npm documentation](https://www.npmjs.com/package/cors)

cookie-parser is mainly used to perform CRUD operations on the secure cookies present on the client side. You can learn more on this link: [official npm documentation](https://www.npmjs.com/package/cookie-parser)

Also built asyncHandler, which is a higher order function means, a function which can take a function as a parameter and can also return a function. This async handler is built using try catch and promises. you can switch between two accordingly.

Also built custom api response and error handling.

Note:
HTTP respose status codes
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

node js api error: [official npm documentation](https://nodejs.org/api/errors.html)


We have added user and video model.

In User model we have used dependencies like bcrypt (to encrypt passwords) and jsonwebtoken (to generate access and refresh token).

bcrypt [official doc](https://www.npmjs.com/package/bcrypt)
jsonwebtoken [official doc](https://www.npmjs.com/package/jsonwebtoken)

Built a custom method generateAccessToken is defined to generate access token and also built a custom method generateRefreshToken is defined to generate refresh token.

Also used a pre hook to listen for a save event and when completed returns next (because it is a middleware). This pre hook when triggered on save event checks if the password is modified and sets the password (if modified).
Built custom method to check password is correct or not.

In Video model we have used dependency like mongoose-aggregate-paginate-v2 to write complex queries. we will learn more about this in future.
mongoose-aggregate-paginate-v2 [official doc](https://www.npmjs.com/package/mongoose-aggregate-paginate-v2)
mongoDB aggregation pipe line [mongoDB official doc](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/)


Add cloudinary.js as util and multer.middleware.js as middleware for file upload

We have decieded, that when a user uploads a file via multer, we will store it on the local storage (over here public/temp), after that we will upload the file in cloudinary and unlink the file from local storsge using built-in file system of nodejs. We are storing this file in our local storage temporarily because in production grade application, this type of practices are very common. The real pupose of doing this is if there is a condition where the file fails to upload in cloudinary, we can always reattempt to upload it.

Dependencies used here: cloudinary, multer.

cloudinary: [How to get started? official doc](https://console.cloudinary.com/app/c-8a4731e6ac5eb3c17a8d85f1b62c5c/image/getting-started)

multer: [official doc](https://github.com/expressjs/multer)


HTTP - Hyper Text Transfer Protocol

What are HTTP headers?
HTTP headers are nothing but meta data => key - value pair sent along with request & response.

Used in caching, authentication, manage state.

HTTP headers are of different types mainly:
1) request headers --> from client
2) response headers --> from server
3) representation headers --> encoding compression
4) pay-load headers --> data

Most common headers:
Accecpt : application/ json
User - Agent
Authorization
Content-Type
Cookie
Cache-Control

CORS
Acess-Control-Allow-Origin
Acess-Control-Allow-Credentials
Acess-Control-Allow-Method

Security
Cross-Origin-Embedder-Policy
Cross-Origin-Opener-Policy
Content-Security-Policy
X-XCS-Protection

HTTP Methods

Basic set of opperations that can be used to interact with server

1) .GET       : Retrieve a resource.

2) .HEAD      : No message boody (response header only).

3) .OPTIONS   : What operations are available?

4) .TRACE     : Loop back test (get same data).

5) .DELETE    : Remove a resource.

6) .PUT       : Replace a resource.

7) .POST      : Interact with resource (mostly add).

8) .PATCH     : Change part of a resource.

HTTP status code already mentioned above.