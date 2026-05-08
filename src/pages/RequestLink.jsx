import React, { useState } from 'react'
import API from '../services/api'

const RequestLink = () => {
    const [email, setEmail] = useState('')

    const handleRequestLink = async (e) => {
        e.preventDefault()

        try {
            const res = await API.post('/auth/request-authlink', { email })
            
            alert(res.data.message)
        } catch (err) {
            console.log(err)
            alert('Something went wrong')
        }
    }

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <form onSubmit={handleRequestLink}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button type="submit">Send Link</button>
            </form>
        </div>
    )
}

export default RequestLink