import { redirect } from '@sveltejs/kit';
import {match} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const supportedLocales = ['en','es', 'pl'];
const defaultLocale = 'en';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({cookies, request}) => {
	const res = match(
		new Negotiator({
			headers: {'accept-language': request.headers.get('accept-language') || ''},
		}).languages(),
		[...supportedLocales],
		defaultLocale
	)
	redirect(307, '/'+res);
}