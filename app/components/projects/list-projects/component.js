import Component from '@ember/component';
import projects from '../projects';

export default Component.extend({
	classNames: ["list-projects"],
	tagName: "ul",

	init() {
		this._super(...arguments);
		this.set("projects", projects);
	}
});
