// import "./comment.css"
function Comment({location, name, body, user}){
   return( <>
        <div className="singleComment">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Comment: {body}</p>
        <p>User: {user} </p>
        <div className="buttons">
        <button>Delete</button>
        <button>Edit</button>
        </div>
        </div>
        </>

)}
export default Comment