Install:

```shellsession
$ npm install --save nice-classification
```

Use in JavaScript:

```javascript
// Require all of the data.
var nice = require('nice-classification')

nice.edition // string
nice.version // string

nice.classes // array
nice.classes[0].number // string
nice.classes[0].type // "goods" or "services"
nice.classes[0].heading  // string

nice.goods // array
nice.goods[0].number // string
nice.goods[0].description // string

nice.services // array
nice.services[0].number // string
nice.services[0].description // string

// Require subsets of the data.
var justClasses = require('nice-classification/classes')
justClasses.classes // array, as above

var justGoods = require('nice-classification/goods')
justGoods.goods // array, as above

var justServices = require('nice-classification/services')
justServices.services // array, as above
```
