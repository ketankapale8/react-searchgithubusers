import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Error() {
    return (
           <Wrapper>
               <div>
                   <h1>404</h1>
                   <h3>The page you tried , cannot be found</h3>
                    <Link to='/'>
                    <button className='btn'
                    >Return Home
                    </button>
                    </Link>
               </div>
               
           </Wrapper>
        
    )
}

const Wrapper = styled.section`
  min-height : 100 vh;
  display : grid ;
  place-items : center ;
  backgroud : var(--clr-primary-10) ;
  text-align : center;
  padding-top : 230px;
  h1{
      font-size : 10 rem;

  }
  h3{
      color : var(--clr-grey-3);
      margin-bottom : 1.5rem;
  }
`
