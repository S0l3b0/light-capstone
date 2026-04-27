import { supabase } from "../supabaseClient";

function DeleteArchivePost() {
    const handleDelete = async () => {
        const { error: dbError } = await supabase
            .from("archive")
            .delete()
            .where(
                
            )

        if (dbError) {
            alert(dbError.message);
        } else {
            
        }
    }
}