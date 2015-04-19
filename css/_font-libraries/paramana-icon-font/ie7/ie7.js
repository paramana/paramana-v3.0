/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'paramana-icon-font\'">' + entity + '</span>' + html;
	}
	var icons = {
		'pi-dribbble': '&#xe600;',
		'pi-twitter': '&#xe601;',
		'pi-github': '&#xe602;',
		'pi-linkedin': '&#xe603;',
		'pi-down-arrow-circle': '&#xe604;',
		'pi-plus-circle': '&#xe605;',
		'pi-plus': '&#xe606;',
		'pi-close-circle': '&#xe607;',
		'pi-close': '&#xe608;',
		'pi-down-arrow': '&#xe609;',
		'pi-up-arrow-circle': '&#xe60a;',
		'pi-up-arrow': '&#xe60b;',
		'pi-left-arrow-circle': '&#xe60c;',
		'pi-left-arrow': '&#xe60d;',
		'pi-fullscreen': '&#xe60e;',
		'pi-hamburger': '&#xe60f;',
		'pi-loading': '&#xe610;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/pi-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
