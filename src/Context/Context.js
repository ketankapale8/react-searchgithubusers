import React , {useContext , useState , useEffect} from 'react'
import mockUser from '../Context/mockData.js/mockUser'
import mockRepos from '../Context/mockData.js/mockRepos'
import mockFollowers from '../Context/mockData.js/mockFollowers'

import axios from 'axios'


    
const rooturl = 'https://api.github.com'

const GithubContext = React.createContext()

const GithubProvider = ({children}) =>{
    const [githubUser , setgithubUser] = useState(mockUser)
    const [repos , setRepos] = useState(mockRepos)
    const [followers , setfollowers] = useState(mockFollowers)
    // request , loading
    const [request , setRequest] = useState(0);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState({show:false ,msg : ''})
    //error
    //check rate    

    // https://api.github.com/users/john-smilga/repos?per_page=100  //repos
    // https://api.github.com/users/john-smilga/followers/per_page

    const searchGithubUser = async(user) =>{
        toggleError()
        setLoading(true)
        const response = await axios.get(`${rooturl}/users/${user}`).catch(err =>console.log(err))
        
        if(response){
            setgithubUser(response.data)
            const {login, followers_url} = response.data
            //followers
            axios.get(`${followers_url}?per_page=100`)
            .then((resp)=>{
                setfollowers(resp.data)
            })
            //repos
            axios.get(`${rooturl}/users/${login}/repos?per_page=100`)
            .then((resp)=>{
                setRepos(resp.data)
            }) 
        }else{
            toggleError(true , 'your search doesnt match any users')
        }
        checkRequest()
        setLoading(false)
    }

    const checkRequest = () =>{ 
        axios.get(`${rooturl}/rate_limit`)
        .then((resp)=>{ 
            setRequest(resp.data.rate.remaining)
            if(resp.data.rate.remaining === 0){
                toggleError(true , 'you have exhausted your hourly-limits')
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    const toggleError = (show = false, msg = '') =>{
        return setError({show , msg})
    }

    useEffect(checkRequest, []) 



    return <GithubContext.Provider value={{githubUser , repos , followers , request , error , searchGithubUser , loading }}>{children}</GithubContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(GithubContext)
}

export {GithubContext , GithubProvider}




/// ANOTHER APPROACH TO UPDATE THE APP ONCE WE GET ALL THE DATA BY USING "PROMISES" ///

//-----------------------USEFUL APPROACH----------------------------------------

// await Promise.allSettled([
//         axios(`${rootUrl}/users/${login}/repos?per_page=100`),
//         axios(`${followers_url}?per_page=100`),
//       ])
//         .then((results) => {
//           const [repos, followers] = results;
//           const status = 'fulfilled';
//           if (repos.status === status) {
//             setRepos(repos.value.data);
//           }
//           if (followers.status === status) {
//             setFollowers(followers.value.data);
//           }
//         })
//         .catch((err) => console.log(err));