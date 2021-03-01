import React from 'react'
import styled from 'styled-components'
import {useAuth0} from '@auth0/auth0-react'
import image from '../images/login-img.svg'

export default function Login() {
    const {loginWithRedirect} = useAuth0();
    return (
        <Wrapper>
            <div className='container'>
                <img src={image} alt='login-image'></img> 
                <h1>Github User</h1>
                <button  className='btn' onClick={loginWithRedirect}>Login/Sign Up</button>
            </div>
            
        </Wrapper>
    )
}


const Wrapper = styled.section`
min-height : 100 vh;
display : grid ;
place-items : center;
.container{
    width : 90vh;
    max-width : 600px;
    text-align : center;
    padding-top : 80px;
}
img{
    margin-bottom : 2rem;
}
h1{
    margin-bottom : 1.5rem;
}

`

