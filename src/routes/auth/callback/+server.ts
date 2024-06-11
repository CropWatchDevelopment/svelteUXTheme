import { redirect } from '@sveltejs/kit';

export const GET = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;
	const code = url.searchParams.get('code') as string;
	const next = url.searchParams.get('next') ?? '/';
  console.log('code: ', code);

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    console.log('Google Auth Error!: ', error);
    console.error('Google Auth Error!: ', error);
    if (!error) {
      throw redirect(303, `/${next.slice(1)}`);
    }
  }

  // return the user to an error page with instructions
  throw redirect(303, '/auth-code-error');
};