# shyntech-reactlib-auth

> Made Vite Library Mode

[![NPM](https://img.shields.io/npm/v/shyntech-reactlib-auth.svg)](https://www.npmjs.com/package/shyntech-reactlib-auth) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Install

```bash
npm install --save shyntech-reactlib-auth;
```

# Usage

```jsx
import React, { Component } from 'react'
import {AuthPage, sendLogin} from 'shyntech-reactlib-auth'

class Example extends Component {
  render() {
    return <AuthPage sendLogin={sendLogin} baseURL={'http://localhost:3000'} loginEndpoint={'/auth/login'}  />
  }
}
```
.

# Props
.

#### __*sendLogin: Function (required)*__
The component takes a request function. the library exports a default request function which can be imported with "import { sendLogin } from 'shyntech-reactlib-auth'". However, if you use this function, then you are required to provide the baseURL and loginEndpoint Props.
You can however pass a custom function to make the request. Make sure you use the method "POST" since you are making a login request. 
```jsx

import {component} from 'react'
// your custom sendLogin function must be an async function
async function customSendLogin(data){
  // your code here
}

// in your JSX File
class Example extends Component {
  render() {
    // the props baseURL <string> and loginEndpoint <string> are required if you use the default login function as they tell the function the url where to send the request.
    return <AuthPage sendLogin={customSendLogin} />
  }
}

// usage for default sendLogin function
import {sendLogin} from 'shyntech-reactlib-auth'

class Example extends Component {
    render() {
        return <AuthPage sendLogin={sendLogin} baseURL={'http://localhost:3000'} loginEndpoint={'/auth/login'}/>
    }
}
```
The library calls the *__sendLogin__* function with the following arguments __sendLogin(data,baseURL,loginEndpoint)__. But the baseURL and LoginEndpoint are only required if you are using the sendLogin function provided by the library.

.

#### __*baseURL: String*__
Base url to the server. Takes the format "https://myserveraddress.com", "http://localhost:3000" or any other server address

.

#### __*loginEndpoint: String*__
Login endpoint on the server . "/mypath/to/auth" 




![Alt text](./src/svgs/index.svg "Title")

#### License

MIT © [Adefuye Abayomi](https://github.com/adefuyeabayomi)
