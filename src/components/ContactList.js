import React from 'react'
import usePhoneBookStore from '../stores/usePhoneBook'

const ContactList = () => {
  const {phoneBook} = usePhoneBookStore()
  console.log(phoneBook)
  return (
    <div>
      {phoneBook.map((item)=>(
        <div>
          <p>{item.name}</p>
          <p>{item.phoneNumber}</p>
        </div>
      ))}
      
      
    </div>
  )
}

export default ContactList
