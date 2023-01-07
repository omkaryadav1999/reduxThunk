import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userAction } from "./Redux/action/userAction"
import User from "./component/User"
function App() {
    const dispatch = useDispatch()
    const userList = useSelector((state) => state.userList)
    const { loding, users, error } = userList

    useEffect(() => {
        dispatch((userAction()))
    }, [dispatch])
    return (
        <div className="App">
            <h1>Redux thunk</h1>
            {loding ? <h2>loding...</h2> : error ? <h2>{error}</h2> :

                <User user={users} />
            }
        </div>
    )
}

export default App