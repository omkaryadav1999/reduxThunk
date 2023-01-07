import React from 'react'

const User = ({ user }) => {
    return (
        <div style={{ margin: "30px" }}>
            <table >
                <thead>
                    <tr>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((value) => {
                        const { name, id, username, email, phone } = value
                        return <tr key={id}>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default User