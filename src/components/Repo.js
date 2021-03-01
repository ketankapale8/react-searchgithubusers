import React , {useState , useEffect}from 'react'
import {useGlobalContext} from '../Context/Context'
// import {ExampleChart} from '../Charts/Index'
import styled from 'styled-components'
import Pie3d from '../Charts/Pie3d'
import Doughnut from '../Charts/Doughnut'
import Column3d from '../Charts/Column3d'
import Bar3d from '../Charts/Bar3d'

export default function Repo() {
  useEffect(()=>{
    getValues()
  

  },[])

  const [lang , getLang] = useState([])

    const {repos} = useGlobalContext()
    const getValues = () =>{
    let items = repos.map((item)=>{
      return (
        <div key={item.id}>
          {item.language}

        </div>
      )
    })
    getLang(items)
  } 

  const languages = repos.reduce((total , item )=>{
    const {language , stargazers_count} = item;
    if(!language) return total
    if(!total[language]){
      total[language] = {label : language , value : 1 , stars : stargazers_count}
    }else{
      total[language] = {
        ...total[language] , 
        value : total[language].value + 1 , 
        stars : total[language].stars + stargazers_count, };
    }

    return total
    
  }, {});
 
  const mostUsed = Object.values(languages).sort((a,b)=>{
    return b.value-a.value
  }).slice(0,5)


  // most stars per language.

  const mostPopular = Object.values(languages).sort((a,b)=>{
    return b.stars-a.stars
  }).map(item=>{
    return {...item , value : item.stars}
  }).slice(0,5)
  // console.log(mostPopular)


let {stars , forks} = repos.reduce((total, item)=>{
    const {stargazers_count , name, forks} = item;
    total.stars[stargazers_count] = {label : name , value : stargazers_count }
    total.forks[forks] = {label : name , value : forks}
    return total
  }, {stars : {} , forks : {}})
  
  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()

  // let language = lang.map((item)=>{return (item.props.children)})
  // console.log(language)
  let js = lang.filter(item=>{return item.props.children ==='JavaScript'})
  let css = lang.filter(item=>{return item.props.children==='CSS'})
  // console.log(css)
  let html = lang.filter(item=>{return item.props.children==='HTML'})
  // console.log(html)

    const chartData = [
   {
    label: 'Javascript',
    value: js.length
  },
  {
    label: 'CSS',
    value: css.length
  },
  {
    label: html,
    value: html.length
  },
   
];
    return (
        <section className='section'>
            <Wrapper className ='section-center' >
                {/* <ExampleChart data={chartData}/> */}
                <Pie3d data={chartData}/>
                <Column3d data={stars}></Column3d>
                <Doughnut data={mostPopular}/>
                <Bar3d data={forks}></Bar3d>
                
            </Wrapper>
        </section>  
    )
}


const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;





  // let starValcss = stars.filter(item=> {return (item.props.children === 'CSS' || item.props.children.stargazers_count>=0)})
  // console.log(starValcss)

  // let starValhtml = stars.filter(item=> {return (item.props.children === 'HTML' || item.props.children.stargazers_count>=0)})
  // console.log(starValhtml)