```shellsession
$ npm install --save nice-classification
```

```javascript
// Require all of the data.
var nice = require('nice-classification')

nice.classes[0].number // string
nice.classes[0].type // "goods" or "services"
nice.classes[0].heading  // string

nice.goods[0].number // string
nice.goods[0].description // string

nice.services[0].number // string
nice.services[0].description // string

// Require just the subsets of the data you need.
var classes = require('nice-classification/classes.json')
var goods = require('nice-classification/goods.json')
var services = require('nice-classification/services.json')
```
