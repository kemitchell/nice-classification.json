source=nice-classification.json
without=./subset-without.js

all: classes.json goods.json services.json

classes.json: $(source)
	$(without) goods services < $< > $@

goods.json: $(source)
	$(without) classes services < $< > $@

services.json: $(source)
	$(without) classes goods < $< > $@
