import React,{useState,useEffect} from 'react'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import axios from '../../axios'
import './Rawpost.css'
function Rawpost(props) {
  const [movies,setMovies] =useState([])
  useEffect(()=>{
      axios.get(props.url).then(response=>{
          console.log(response.data)
          setMovies(response.data.results)
      }).catch(err=>{
          alert("Error!")
      })
      },[])
  
    return (
        <div className="raw">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>{
                  return(
                    <img src={`${imageUrl+obj.backdrop_path}`} alt="post" className={props.isSmall ? 'smallposter' :"poster"} />
                  )
                })} 
              
            </div>
        </div>
    )
}

export default Rawpost
