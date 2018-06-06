import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
	classNames: ["header", "navbar", "navbar-expand-lg", "fixed-top"],
	tagName: "header",

	actions: {
		scrollTo(target) {
			setTimeout(() => {
				$('html, body').animate({
					scrollTop: $(target).offset().top
				}, 500);
			}, 50);
		}
	},
});
