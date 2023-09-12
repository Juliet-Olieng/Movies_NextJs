'use client';
import { useState,useEffect } from "react";
 import { getMovieDetails } from "@/app/utilities/getMovieDetails";

 const MovieDatail =({params:{movieId}}:{params:{movieId:number}})=>{
    const [MovieDatail,setMovieDetail]=useState()
    useEffect(()=>{
        (async()=>{
            const movieDetail = await getMovieDetails(movieId)
        })()
    },[])
    return(
        <div>
            hello
        </div>
    )

 }
 export default MovieDatail