import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
	classNames: ["header"],
	tagName: "header",

	actions: {
		scrollTo(target) {
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 500);
		}
	},
});
