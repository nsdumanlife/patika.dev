import React from 'react'
import { useState } from 'react'

function User() {
    const [name, setName ] = useState('omer')

    return (
        <div>
            <h1>His name is {name}</h1>
            <button onClick={() => setName('faruk')} >Change name</button>
        </div>
    )
}

export default User
