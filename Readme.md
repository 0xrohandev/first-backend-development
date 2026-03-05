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