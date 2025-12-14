import React, { useContext } from 'react'
import { NameContext } from '../Context'

const User = () => {
   const { Name, Nam } = useContext(NameContext)
  return (
    <div>
        <h2>User1: {Name} </h2>
        <h2>User2: {Nam} </h2>
        <hr></hr>
    </div>
    
  )
}

export default User