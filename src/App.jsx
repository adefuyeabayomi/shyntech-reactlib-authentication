import {AuthPage, sendLogin} from "../";

function App() {

  return (
    <>
      <AuthPage sendLogin={sendLogin} baseURL={'http://localhost:3000'} loginEndpoint={'/auth/login'}/>
    </>
  )
}

export default App
