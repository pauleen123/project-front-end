import React from 'react'
import {useEffect, useState} from "react";
// import '/src/components/Comment.js'

const Fundi = () => {
  const [Fundi, setFundi] = useState([])

    useEffect(()=>{
        fetch("https://localhost/9292/contracts")
        .then(res=>res.json())
        .then((data) =>
        setFundi(data)   
        )
    },[])
    console.log(Fundi)

    // const allComments = Fundi.map((fundi)=>{
    // //   return( <Comment  key={fundi.id}
    //     name={fundi.name}
    //     location ={fundi.location}
    //     body = {fundi.ratings.map(rating => {
    //         return rating.body     
    //     })}
    //      user = {fundi.ratings.map(rating => {
    //         return rating.user.name

    //      })}

    //     />)
    // })
    // return(
    // <>
    // <div className="allCommnets">
    // {allComments}
    // </div>
    // </>
    // )
}
export default Fundi