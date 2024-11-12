export const load = async ({ locals: { supabase } }) => {
    await supabase.auth.signOut();
    return { status: 200 };
}