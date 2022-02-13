# Web-Security-Node.js

## In this repo i have covered 6 levels of websecurity using Node.JS and Google APIs

## I wish i could write alot of what web security is being defined about nowadays but i would strongly recommend you guys to go over the documentations of all of them,
 i have made presentations from Level 1 to 6 covering most of the factual and technical and logical parts of the Project and have also considered that i had to make one 
repository instead of 6 repos for each level,Why you may ask, well in my opinion its better to deal with the same Project with old security paches commented out so you can go through the presentation that i am about to show you so that from there you can have an idea and use the documentations to your advantage to uncomment and also read the intructions 
like a switch board it'll help you find mistakes and fix them faster and will result in more practicing but again thats just my own opinion. ##

# Level One - Plain Text Passwords

![Regardless the password is stored as plain text meaning that Hackers or even DB admins can see confidential passwords easily hence level 1 security](https://user-images.githubusercontent.com/34340232/153736720-ed6d8157-d60b-4483-a4ff-50332d47d7b9.png)

![Login DB exist verification](https://user-images.githubusercontent.com/34340232/153736734-d36d01f3-45a0-49fa-8c7e-5a76fef2fd01.png)

## Registering Users

![Registered User](https://user-images.githubusercontent.com/34340232/153736740-c9c4c152-83e9-40b0-9c0b-b8ee1cee84ca.png)

## Logging in

![Login to verify](https://user-images.githubusercontent.com/34340232/153736745-1e9c72cc-04b3-42bf-bbab-e399ea65b085.png)

## Username and Password in Robo3T

![userdata in DB](https://user-images.githubusercontent.com/34340232/153736750-05eb3e6b-dd14-4cb9-ab1a-81175eecc225.png)

# Level Two - Encryption

![diagram](https://user-images.githubusercontent.com/34340232/153736802-d3f0ea89-c4cd-49eb-8e0f-9fe752e03fb6.png)

## The Method

![The method we are using](https://user-images.githubusercontent.com/34340232/153736831-e6b510b8-d486-4453-818f-f3930fc62ff4.png)

## npm package

![Mongoose Encryption](https://user-images.githubusercontent.com/34340232/153736853-1d918ba9-093e-434e-802c-3e0522a74065.png)

![Mongoose Encryption Schema Example](https://user-images.githubusercontent.com/34340232/153736859-1d7c4e45-8124-4855-9e70-b278a8de29cf.png)

![Le code](https://user-images.githubusercontent.com/34340232/153736862-7e04116e-f083-4fc7-b14f-371b0f9195f5.png)

## The Encrypted Password

![password is now encrypted in the DB2](https://user-images.githubusercontent.com/34340232/153736869-c5c7eb38-dfe4-4f35-ab6b-795f8c1e0013.png)


# Level Three - Hashing 

## How does it work

![hashing-function-structure](https://user-images.githubusercontent.com/34340232/153736919-85e25d43-9b98-4101-8bda-7992ec543d68.png)

## npm package

![npm MD5 Hashing](https://user-images.githubusercontent.com/34340232/153736904-e6d6bac0-43a9-437e-8f2c-3163519be130.png)

## Scientific Diagram

![sci diag MD5](https://user-images.githubusercontent.com/34340232/153736913-6ec9261b-a148-4463-a8e0-fb510b755020.png)

## How do we format the code to process

![le code](https://user-images.githubusercontent.com/34340232/153736947-01a724b8-268e-497f-9fe2-bf454d01aa20.png)

![login hash code modify](https://user-images.githubusercontent.com/34340232/153736950-5c7a2399-8e77-4388-aef9-f89e004c13d0.png)

## Hashed Password Stored

![DB password stored as Hash](https://user-images.githubusercontent.com/34340232/153736958-36f3f830-d329-45dc-aa65-f6f05b7b4c9d.png)

# Level Four - Salting

![Node js-bcrypt-authentication](https://user-images.githubusercontent.com/34340232/153736983-8d48fe59-4f7e-457d-9489-eeb4af9ad8a9.png)

![Untitled](https://user-images.githubusercontent.com/34340232/153736989-075e75e5-83db-47ff-a27c-b4815ea87f3d.png)

![storing_salted_passwords](https://user-images.githubusercontent.com/34340232/153736992-f8ba416d-2b2b-4968-8dd7-23f8446a2adf.png)

![login code](https://user-images.githubusercontent.com/34340232/153737002-035728e4-5854-4f4f-9ca6-e1b4da3b00de.png)

![le code](https://user-images.githubusercontent.com/34340232/153737003-d3157878-39e2-40c8-8dfd-1bce026a492e.png)

![salted hash DB data](https://user-images.githubusercontent.com/34340232/153737006-5a39476a-453f-4262-baa3-842a4bf3df4b.png)

# Environment Variables

## Sometimes when we store secret keys we should always store them in a seperate file to avoid data theft and also those keys are not even stored into repos by [.gitignore]


![dotenv](https://user-images.githubusercontent.com/34340232/153737071-64d8e7b1-a790-45c2-b62b-80d40d2630d3.png)

## The seperate file called .env where the key is stored

![jjj](https://user-images.githubusercontent.com/34340232/153737112-b6b5e8e5-8cb5-42ab-a239-8d87cc14573b.png)

## How it is retrieved

![code update](https://user-images.githubusercontent.com/34340232/153737136-4586cbfc-5163-4548-9dc1-5fdecbf1b7d6.png)

# Level Five - Cookies and Sessions

![61c2e4a03dbcc29dc3c3d01c_618255c28b041fcecefe9ab1_fp4483y9b (1)](https://user-images.githubusercontent.com/34340232/153737184-0f511791-502c-44e5-b9f2-096a9cbd0af6.jpeg)

![npm passportlocal](https://user-images.githubusercontent.com/34340232/153737188-1d76fc22-e343-4454-bcf9-9e307b2fea02.png)

![npm passportlocalmongoose](https://user-images.githubusercontent.com/34340232/153737192-d09cdf10-7949-4832-b7ed-afe9067c9835.png)

![npm express-sessions](https://user-images.githubusercontent.com/34340232/153737194-4fadfff5-ddfc-4ddd-90ff-ceba70b9aea1.png)

![npm passport](https://user-images.githubusercontent.com/34340232/153737196-7fdc5ead-fbaa-4d76-bd75-c279b8ed3fc5.png)

![le code1](https://user-images.githubusercontent.com/34340232/153737202-d0a3270f-72a9-4fc9-8c68-05ff757a5b37.png)

![le code2](https://user-images.githubusercontent.com/34340232/153737203-c65a5fba-8fe2-4410-9230-5d5c0389a1d5.png)

![le code3](https://user-images.githubusercontent.com/34340232/153737204-06cd6e49-3bc3-4946-9b51-e83bcb798d2f.png)

![le code4](https://user-images.githubusercontent.com/34340232/153737206-ebd167e0-9efe-40b0-b74f-1c04ac2641da.png)

## We use Passports [https://www.passportjs.org/]

![61c2e4a03dbcc29dc3c3d01c_618255c28b041fcecefe9ab1_fp4483y9b (1)](https://user-images.githubusercontent.com/34340232/153737212-5d192af4-5ccc-445c-9031-661cacd7b2f5.jpeg)

![npm passport](https://user-images.githubusercontent.com/34340232/153737230-ba7d66a1-c769-4570-8607-199d7191d7f9.png)

## Data Salted & Hashed

![Data Salt and Hashed automatically by Passport in DB](https://user-images.githubusercontent.com/34340232/153737241-e9772d5d-88b0-41c7-8cf1-551003ca2e2c.png)

## Saved Cookie

![saved cookie](https://user-images.githubusercontent.com/34340232/153737267-070ef6c5-fade-4045-98e1-c60465f17b79.png)


# Level Six - OAuth 2.0 [Google Signin Implementation]

![OAuth-2 0-Oro-integration-750x440](https://user-images.githubusercontent.com/34340232/153737289-e8cbedab-58ed-4f41-84b3-3886f9b772dc.jpg)

## Authorization Flow

![oauth-authorization-flow](https://user-images.githubusercontent.com/34340232/153737290-9e44ca90-ba95-4770-bff5-a22bb4a18744.png)

![oauth-windows-phone-authorization-flow](https://user-images.githubusercontent.com/34340232/153737388-f897f7a6-2145-4431-9baa-5a6f93cf2613.png)

![mongoose findorcreate npm for passports](https://user-images.githubusercontent.com/34340232/153737408-4e62d470-0045-4a69-b96a-688adf99d8ad.png)

![passportjs org strategy](https://user-images.githubusercontent.com/34340232/153737410-c863af81-7307-4846-a911-4f6675e0a07e.png)

![google strategy](https://user-images.githubusercontent.com/34340232/153737411-73ea3dd8-63f7-4606-9b59-2827b03da171.png)

![serializing for google](https://user-images.githubusercontent.com/34340232/153737469-10aadabb-94f9-4990-b4dc-251facfd19d3.png)

![activating google sign in for front end](https://user-images.githubusercontent.com/34340232/153737597-88672ee5-1d66-404c-89a3-af9a9288dfc7.png)

![re](https://user-images.githubusercontent.com/34340232/153737610-2f0b2ec0-7ed7-4409-a37d-95ea9d768997.png)

## Remember to go through the Documentations and learn how to create a Google Dev Console Account for APIs

![google API](https://user-images.githubusercontent.com/34340232/153737475-8a62c3b2-af58-48c1-b174-ac2370899f80.png)

![google API-OAuth Client created](https://user-images.githubusercontent.com/34340232/153737619-56775688-915f-4582-aa06-e64cb2f1ca43.png)

## Google Sign-in implemented successfully

![Front-End Google](https://user-images.githubusercontent.com/34340232/153737632-7ac4121e-5bdc-49d0-8562-168c372f4796.png)

## Data stored perfectly hidden in the Database

![DB](https://user-images.githubusercontent.com/34340232/153737654-0fb2a7a0-c90e-402a-955b-08d3d7357f28.png)


# THANK YOU 


