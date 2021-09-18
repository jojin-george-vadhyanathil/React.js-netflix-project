import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube'
import {API_KEY, imageUrl } from '../../Constants/Constants'
import axios from '../../axios'
import './Rawpost.css'
function Rawpost(props) {
  const [movies,setMovies] =useState([])
  const [urlid,setUrlId] = useState('')
  useEffect(()=>{
      axios.get(props.url).then(response=>{
          console.log(response.data)
          setMovies(response.data.results)
      }).catch(err=>{
          alert("Error!")
      })

      },[])
      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    const handleMovie = (id) =>{
       console.log(id)
       axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
           console.log(response.data)
           if(response.data.results.length !==0){
               setUrlId(response.data.results[0])
           }else{
               console.log("Array is empty")
           }
       })
    }
    return (
        <div className="raw">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>{
                  return(
                    <img onClick={()=>handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="post" className={props.isSmall ? 'smallposter' :"poster"} />
                  )
                })} 
              
            </div>
          { urlid && <YouTube opts={opts} videoId={urlid.key}/> }
        </div>
    )
}

export default Rawpost
