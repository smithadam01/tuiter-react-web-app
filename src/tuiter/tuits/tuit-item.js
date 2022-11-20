import React from "react";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";



const TuitItem = (
 {
   tuit = {
         "_id": 234,
         "topic": "Space",
         "userName": "SpaceX",
         "time": "2h",
         "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
         "image": "spacex.png",
         "liked": true,
         "replies": 123,
         "retuits": 432,
         "likes": 2345,
         "handle": "@spacex",
         "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in"
   }
 }
) => {
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuitThunk(id));
}
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
            <img width={70} className="float-end rounded-10" src={`/images/${tuit.image}`}/>
     </div>
     <div className="col-10">
            <div>
              <i className="bi bi-x-lg float-end"
                 onClick={() => deleteTuitHandler(tuit._id)}></i>

       <span className="fw-bolder"> {tuit.userName} <i className="fas fa-check-circle text-primary"></i> </span> {tuit.handle} - {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.tuit}</div>
     </div>
   </div>
   <TuitStats  key={tuit._id} tuit={tuit}/>
  </li>
 );
};
export default TuitItem;