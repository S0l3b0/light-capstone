import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";

function LikeButton({ noteId }) {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    const fetchLikes = async () => {
      const { data, error } = await supabase
        .from("notes")
        .select("likes")
        .eq("noteID", noteId)
        .single();

      if (!error) setLikes(data.likes);
    };

    fetchLikes();
  }, [noteId]);
  
  const like = async () => {
    const newLikes = likes + 1;

    const { error } = await supabase
      .from("notes")
      .update({ likes: newLikes })
      .eq("noteID", noteId);

    if (!error) {
      setLikes(newLikes);
    } else {
      alert(error.message);
    }
  };

  return (
    <button
      onClick={like}
      className="flex items-center gap-2 bg-gray-100 hover:bg-red-100 px-4 py-2 rounded-full transition-all duration-200"
    >
      <span className="text-xl">❤️</span>
      <span className="font-bold text-gray-700">{likes}</span>
    </button>
  );
}

export default LikeButton;