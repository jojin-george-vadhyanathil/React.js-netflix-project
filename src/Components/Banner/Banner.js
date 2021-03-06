import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import './Banner.css'
function Banner() {
    const [movie,setMovie] = useState()
    useEffect(()=>{
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
           console.log(response.data.results[7])
           setMovie(response.data.results[7])
          
          
          
       })
    },[])
    const history = useHistory()
    return (
        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+ movie.backdrop_path : ''})`}}
        className="banner">
           
            <div className="content">
                <h1 className="title">{movie ? movie.title : ''}</h1>
                <div className="banner_buttons">
                    <button onClick={()=>history.push('/play')} className="button">play</button>
                    <button onClick={()=>history.push('/mylist')} className="button">my list</button>
                </div>
                <h1 className="discription">{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
