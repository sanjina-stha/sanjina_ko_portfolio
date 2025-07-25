import React from 'react'

const Contact = () => {
    const isLoggedIn = false;
    if(isLoggedIn){
        return(
            <h1>Welcome back</h1>
        )
    }
    else {
        return(
            <h1>Please log in</h1>
        )
    }
  return (
    <div>
      
    </div>
  )
}

export default Contact
