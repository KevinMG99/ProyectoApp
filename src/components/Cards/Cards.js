
import { useState } from "react"
const Cards = ({user}) => {
    const {name,login,picture} = user
    const [color, setColor] = useState(true)
    console.log(user)
    return (
        <div className ="card">
            <img src={picture.large} className="card-img-top" alt={login.username}/>
            <div className="card-body">
                <h5 className="card-title">{name.last}</h5>
                <button className={color ? 'btn btn-secundary' : 'btn btn-success'} 
                    onClick={()=> setColor(!color)}>
                    Follow
                </button>
            </div>        
        </div>
    )
}

export default Cards;
