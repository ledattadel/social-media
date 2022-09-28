import React, { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import {postDataAPI} from '../utils/fetchData'
import { resetpassword } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'


const initialState = {
    email: '',
    err: '',
    success: ''
}

const isEmpty = value => {
    if (!value) return true
    return false
}

const isEmail = email => {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const isLength = password => {
    if (password.length < 6) return true
    return false
}

const isMatch = (password, cf_password) => {
    if (password === cf_password) return true
    return false
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)
    const dispatch = useDispatch()

    const { email, err, success } = data

    const handleChangeInput = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value, err: '', success: '' })
    }

    const forgotPassword = async () => {
        if (isEmail(email)){
            try {
                
                
                dispatch(resetpassword(  {email} ))
                // return setData({ ...data, err: '', success: res.data.msg })
            } catch (err) {
                // err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: '' })
            }
        }
            

       
        console.log("Aaa");
    }

    return (



        <div className="auth_page">
            <form >
                <h3 className="text-uppercase text-center mb-4">Reset password</h3>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                        aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />

                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>


                <div type="submit" className="btn btn-dark w-100"
                    onClick={forgotPassword}
                    disabled={email ? false : true}>
                    Send email
                </div>

                <p className="my-2">
                    <Link to="/" style={{ color: "crimson" }}>Back to login</Link>
                </p>
            </form>
            <div class="drops">
                <div class="drop drop-1"></div>
                <div class="drop drop-2"></div>
                <div class="drop drop-3"></div>
                <div class="drop drop-4"></div>
                <div class="drop drop-5"></div>
            </div>
        </div>
    )
}

export default ForgotPassword


