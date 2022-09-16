import React, { useState } from 'react'
// import './Ratings.css'
import {FaTrash, FaEdit} from "react-icons/fa"

const Ratings = () => {

  const [form, setForm] = useState({artisan: "", rating:"", id:null })
  const [ratings, setRatings] = useState([])
  const [edit, setEditing] = useState(false)

  const sendit = (e) => {
    e.preventDefault()
    setRatings([...ratings, form])
    setForm({artisan: "", rating:"", id:null })

  }

  const update = e =>{
    e.preventDefault()
    setEditing(false)
    const updatedRates = ratings.map(rating => rating.id === form.id ? form : rating)
    setRatings(updatedRates)
    setForm({resturant: "", review:"", id:null })
  }
  
  const handleEdit = id => {
    const editPost = ratings.filter(ratings => ratings.id === id)
    setForm(editPost[0])
    setEditing(true)
  }

  const change = e =>{
    const {name, value} = e.target
    setForm({...form, [name]:value})
  }

  const deleting = id => {
    const uprev = ratings.filter(rating => 
      rating.id !== id
      )
      setRatings(uprev)
    
  }

  return (
    <div className='master'>
      <form action="" onSubmit={edit ? update : sendit } className="form">
        <h2>Add Artisan Rating</h2>
        <label> Name</label>
        <input type="text" 
        placeholder='Artisan name' 
        id="artisan" name='artisan' value={form.artisan} onChange={change}/>

        <label> Rating </label>
        <textarea type="text" 
        placeholder='Please rate our services...' 
        id="rating" name='rating' value={form.rating} onChange={change}/>
        <button type='submit'>{edit ? "Update" : "Submit"}</button>
      </form>
      <div className='ratelist'>
        {ratings.map((rating) => 
        <div className='rateitem'>
          <h2>{rating.resturant}</h2>
          <p>{rating.rating}</p>
          <div className="buttons">
            <button onClick={() => deleting(rating.id)}> <FaTrash/> </button>
            <button onClick={() => handleEdit(rating.id)}><FaEdit/></button>
          </div>
        </div>
        )}

      </div>
    </div>
  )
}

export default Ratings