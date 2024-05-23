instal:
	npm ci

brain-games:
	bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	bin/brain-even.js