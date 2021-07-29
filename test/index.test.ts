import Index from '$/routes/index.svelte';
import { render } from '@testing-library/svelte';

test('Welcome the user', () => {
	const { getByText } = render(Index);

	expect(getByText('Welcome to SvelteKit foo')).toBeInTheDocument();
});
