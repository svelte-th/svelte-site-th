---
title: Checkbox inputs
---

Checkboxes are used for toggling between states. Instead of binding to `input.value`, we bind to `input.checked`:

```svelte
<input type="checkbox" bind:checked={yes} />
```
