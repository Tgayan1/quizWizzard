import type { PageServerLoad } from "./$types"
import { supabase } from "$lib/supabase.client"


type User = {
    id:number,
    name:string
}

export const load : PageServerLoad = async () =>{
    

    const {data, error} = await supabase.from('users').select<'users', User>();

    if (error){
        console.error('Error loading', error.message);
        return { users: [] , error:error.message};

    }
    return{ users:data ?? [], error:null };
}