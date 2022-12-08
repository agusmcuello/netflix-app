import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import {UserAuth} from "../Context/AuthContext";
import {db} from "../Firebase";
import {arrayUnion, doc, updateDoc} from "firebase/firestore";

function Movie({item}) {
  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState(false)
  const {user} = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow =async ()=>{
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
    }else{
      alert("Registrate para guardar una película o serie")
    }
  }

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
    <img
      className="w-full h-auto block"
      src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
      alt={item?.title}
    />
    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/90 opacity-0 hover:opacity-80 text-zinc-100">
      <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
        {item?.title}
      </p>
      <p onClick={saveShow}>
          {like? <FaHeart className="absolute top-4 left-4 text-zinc-100"/> : <FaRegHeart className="absolute top-4 left-4 text-zinc-100"/>}
      </p>
    </div>
  </div>
  )
}

export default Movie