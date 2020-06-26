
![logo do ticketor](https://user-images.githubusercontent.com/17733053/85210608-c5a89180-b317-11ea-9d13-5b326778f59f.png)

<p align="center">
    <a href="#">
        <img src="https://img.shields.io/badge/ticketor-v.1.0-brightgreen"
            alt="Ticketor version"/></a>
    <a href="https://www.npmjs.com/">
        <img src="https://img.shields.io/npm/v/npm"
            alt="npm"/></a>
    <a href="https://www.npmjs.com/package/jsonwebtoken">
        <img src="https://img.shields.io/badge/jsonwebtoken-latest-brightgreen"
            alt="jsonwebtoken"/></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-yellow.svg"
            alt="License: MIT"/></a>
   
</p>

# Ticketor
Ticketor is a helpdesk API to assist users in contacting support. We safely handle tickets sent to technical support filtering in different ways

## Features
 - Token Based Authentication
 <p align="left">
    <img src="https://user-images.githubusercontent.com/17733053/85808576-a650a080-b72b-11ea-8b78-f73f9406500e.png"/>
 </p> 
 
 - Endpoint access by types of users
 <p align="left">
    <img src="https://user-images.githubusercontent.com/17733053/85808441-3d692880-b72b-11ea-8969-8734d5dd7a0d.png"/>
 </p> 
 
 - Encrypted Password
 <p align="left">
    <img src="https://user-images.githubusercontent.com/17733053/85808330-e5322680-b72a-11ea-94f3-ad4d30b972d6.png"/>
 </p>  
 
 - Swagger Endpoints documentation
   Start the API(see instalation topic below) end go to [Swagger documentation endpoint](http://localhost:5000/docs/)
   

## Installation

Install node dependencies from API
```
npm install
```
Start API service with the following code

```
npm start
```

### Note
It is important that in production you NEVER HAVE YOUR SECRET KEY VISIBLE like left in [config.js](https://github.com/arielroque/Ticketor/blob/master/src/config.js). Your secret key should be stored in an environment variable, like all sensitive information.

## Contributing

Pull request are also welcome , please read  [CONTRIBUTING.md](https://github.com/arielroque/Ticketor/blob/master/CONTRIBUTING.md)  for details on our code of conduct, and the process for submitting pull requests to us.
    
-   Check  [issue templates](https://github.com/arielroque/Ticketor/issues)  for the suggested issue formats
