<svelte:options customElement="custom-element" />

<div>
	<slot>
		<p>default fallback content</p>
	</slot>

	<slot name="foo">
		<p>foo fallback content</p>
	</slot>
</div>
