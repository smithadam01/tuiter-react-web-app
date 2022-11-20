import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";


const TuitStats = (
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
                let heart = <i onClick={() => dispatch(updateTuitThunk({ ...tuit, liked: true, likes: tuit.likes + 1}))}
                className="far fa-heart"></i>;
                if (tuit.liked) {
                    heart = <i onClick={() => dispatch(updateTuitThunk({ ...tuit, liked: false, likes: tuit.likes - 1}))}
                    className="fas fa-heart text-danger"></i>;
                }
                const dispatch = useDispatch();
                return (
    <div className="container pt-2">
    <div className="row">
        <div className="col">
        </div>
        <div className="col">
            <i class="fa-regular fa-comment"></i> {tuit.replies}
        </div>
        <div className="col">
            <i class="fa fa-retweet" aria-hidden="true"></i> {tuit.retuits}
        </div>
        <div className="col">
            {heart}
            {tuit.likes}
        </div>
        <div className="col">
            <i className="fa-solid fa-share-alt"></i>
        </div>
    </div>
    </div>
);
};

export default TuitStats