```shellsession
$ npm install --save nice-classification
```

```javascript
var nice = require('nice-classification')

nice.classes[0].number // string
nice.classes[0].type // "goods" or "services"
nice.classes[0].heading  // string

nice.goods[0].number // string
nice.goods[0].description // string

nice.services[0].number // string
nice.services[0].description // string
```
