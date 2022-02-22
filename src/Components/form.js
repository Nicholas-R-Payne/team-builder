import React from 'react'

const form = (props) => {

    const handleChange = evt => {
        const { name, value } = evt.target
        props.change(name, value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        props.submit()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name
                <input
                    placeholder='Enter your name here!'
                    value={props.name}
                    name='name'
                    onChange={handleChange}
                />
            </label>
            <label>Email
                <input
                    placeholder='Enter your email here!'
                    value={props.email}
                    name='email'
                    onChange={handleChange}
                />
            </label>
            <label>Role
                <input
                    placeholder='Enter your role here!'
                    value={props.role}
                    name='role'
                    onChange={handleChange}
                />
            </label>
            <input type='submit' value='Create your team!' />
        </form>
    )
}

export default form;