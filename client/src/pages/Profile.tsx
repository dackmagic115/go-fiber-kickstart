import axios from 'axios'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import Wrapper from '../components/Wrapper'

const Profile = () => {
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [password_confirm, setPasswordConfirm] = useState('')

   useEffect(() => {
      (
         async () => {
            const {data} = await axios.get('user')

            setFirstName(data.first_name)
            setLastName(data.last_name)
            setEmail(data.email)
         }
      )
   })

   const submit = async (e: SyntheticEvent) => {
      e.preventDefault()

      await axios.post('users', {
         firstName,
         lastName,
         email,
      })

   }

   const passwordSubmit = async (e: SyntheticEvent) => {
      e.preventDefault()

      await axios.post('users.password', {
         password,
         password_confirm
      })

   }

   return (
      <Wrapper>
            <h3>Account Information</h3>
            <form onSubmit={submit}>
               <div className="mb-3">
                  <label>First Name</label>
                  <input className="form-control" 
                     defaultValue = {firstName}
                     onChange={e => setFirstName(e.target.value)}
                  />
               </div>
               <div className="mb-3">
                  <label>Last Name</label>
                  <input className="form-control" 
                      defaultValue = {lastName}
                      onChange={e => setLastName(e.target.value)} 
                  />
               </div>
               <div className="mb-3">
                  <label>First Name</label>
                  <input className="form-control" 
                      defaultValue = {email}
                      onChange={e => setEmail(e.target.value)} 
                  />
               </div>

               <button className="btn btn-outline-secondary">Save</button>
            </form>
            <h3 className="mt-4">Change Password</h3>
            <form onSubmit={passwordSubmit}>
               <div className="mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" 
                     onChange={e => setPassword(e.target.value)}
                  />
               </div>
               <div className="mb-3">
                  <label>Password Confirm</label>
                  <input type="password" className="form-control"
                     onChange={e => setPasswordConfirm(e.target.value)}
                  />
               </div>

               <button className="btn btn-outline-secondary">Save</button>
            </form>
      </Wrapper>
   )
}

export default Profile