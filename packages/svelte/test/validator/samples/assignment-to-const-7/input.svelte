<script>
	const arr = [{1: {arr: 2}}, 2];
	[{1: { arr }}, arr[1]] = [arr[1], arr[0]];
</script>

{arr}