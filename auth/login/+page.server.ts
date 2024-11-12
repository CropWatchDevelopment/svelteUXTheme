import { fail, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginFormSchema } from './forms/login.schema';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    const form = await superValidate(zod(loginFormSchema));
    return form
}

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        const form = await superValidate(request, zod(loginFormSchema));
        if (form.valid) {
            const { email, password } = form.data;
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            if (error) {
                return setError(form, '', error.message);
            }
            return { status: 200, form };
        }
        return fail(400, { form });
    }
};