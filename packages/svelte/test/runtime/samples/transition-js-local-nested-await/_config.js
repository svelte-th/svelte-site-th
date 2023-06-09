let fulfil;

const promise = new Promise((f) => {
	fulfil = f;
});

export default {
	get props() {
		return { x: false, promise };
	},

	test({ assert, component, target, raf }) {
		component.x = true;
		fulfil();

		return promise.then(() => {
			const div = target.querySelector('div');
			assert.equal(div.foo, 0);

			raf.tick(100);
			assert.equal(div.foo, 1);

			component.x = false;
			assert.htmlEqual(target.innerHTML, '');

			raf.tick(150);
			assert.equal(div.foo, 1);
		});
	}
};
