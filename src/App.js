import { useState, useEffect } from 'react'
import Contacts from './components/Contacts'

function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      }).then(data => setContacts(data))
  })

  return (
    <div>
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;
