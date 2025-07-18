import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import usePhoneBookStore from '../stores/usePhoneBook';

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const {addContact} = usePhoneBookStore()
  const handleAddContact = () =>{  
    //연락처 저장 장소 - 배열(phoneBook = [])
    //연락처르 추가
    if(!name.trim() || !phoneNumber.trim()) return
    addContact(name, phoneNumber)
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <TextField id="outlined-basic" label="ID" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="PASS" variant="outlined" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
      <Button variant='contained' size='large' onClick={handleAddContact}>추가</Button>
    </Box>
  )
}

export default ContactForm
