import Component from '@ember/component';
import gallery from './gallery';

export default Component.extend({
	classNames: ["image-gallery"],

	init() {
		this._super(...arguments);
		this.set("gallery", gallery);
	}
});
