const Helper = require('handlebars');

Helper.registerHelper('addOne', function (index) {
    return index + 1;
});