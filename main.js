const hbs = require("hbs");

const templatepath = path.join(__dirname,"../templates/views");

const partialspath = path.join(__dirname,"../templates/partials");

hbs.registerPartials(partialspath);