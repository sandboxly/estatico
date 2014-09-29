'use strict';

// Handlebars
var handlebars = require('handlebars');

// Make handlebars layout helpers available
require('handlebars-layouts')(handlebars);


// Custom Handlebars Helper

// Remove whitespace from string
handlebars.registerHelper('removeWhiteSpace', function(value) {
	return new handlebars.SafeString(
		value.replace(/\s+/g, '')
	);
});

// Output raw block (use: {{{{raw}}}} blabla {{title}} bla{{{{/raw}}}})
handlebars.registerHelper('raw', function(options) {
  return options.fn();
});