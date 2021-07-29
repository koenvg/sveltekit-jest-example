<script lang="ts">
	import { getName } from '$/api'
	let name: string = getName();
</script>

<h1>Welcome to SvelteKit {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentations</p>
