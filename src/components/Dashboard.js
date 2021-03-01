import React from 'react'
import {Info , Navbar , Repo , Search ,User} from './Index'
import preloader from '../images/preloader.gif'
import {useGlobalContext} from '../Context/Context'

export default function Dashboard() {
    const {loading} = useGlobalContext()
    if(loading){
        return(
        <main>
            <Navbar/>
            <Search/>   
            <img src={preloader} alt='loading' className='loading-img' />
        </main>
        )
    }
    return (
        <div>
            <Navbar/>
            <Search/>
            <Info/>
            <User/>
            <Repo/>
            
        </div>
    )
}
 