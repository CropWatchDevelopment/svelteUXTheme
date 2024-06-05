// src/routes/update_password/+page.server.js
import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"

export const actions = {
    default: async ({ request, locals }) => {
        debugger;
        const formData = await request.formData()
        const password = formData.get('new_password')

        const { data, error: err } = await locals.supabase.auth.updateUser({
            password
        })

        if (err) {
            if (err instanceof AuthApiError && err.status >= 400 && err.status < 500) {
                return fail(400, {
                    error: "invalidCredentials", invalid: true, message: err.message
                });
            }
            return fail(500, {
                error: "Server error. Please try again later.",
            });
        }

        return { success: !err}
    },
}
