<svelte:options customElement="custom-element" />

<div>fades in</div>

<style>
	div {
		animation: foo 1s;
	}

	@keyframes foo {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
