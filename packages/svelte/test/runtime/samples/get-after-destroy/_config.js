export default {
	get props() {
		return { foo: 1 };
	},

	html: '<div>1</div>',

	test({ assert, component }) {
		component.$destroy();
		const { foo } = component;
		assert.equal(foo, undefined);
	}
};
