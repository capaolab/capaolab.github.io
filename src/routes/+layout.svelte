<script>
	import '../app.css';
	let { children } = $props();
</script>

<main class="w-full h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
	{@render children()}
</main>
