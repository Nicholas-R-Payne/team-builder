import React from 'react'

const form = (props) => {
    return (
        <form>
            <label>Name
                <input
                    placeholder='Enter your name here!'
                    value={values.name}
                    name='name'
                    onChange={handleChange}
                />
            </label>
            <label>Email
                <input
                    placeholder='Enter your email here!'
                    value={values.email}
                    name='email'
                    onChange={handleChange}
                />
            </label>
            <label>Role
                <input
                    placeholder='Enter your role here!'
                    value={values.role}
                    name='role'
                    onChange={handleChange}
                />
            </label>
            <input type='submit' value='Create your team!' />
        </form>
    )
}

export default form;