
go install -v github.com/froov/froov@latest
npm i @cloudflare/wrangler -g
froov



A single subject is composed of markdown using --- to divide note cards.

If the card begins with # Title, then it is the beginning of a lesson.

If the card begins with ## Title, then it is a topic for that lesson.

The first lesson, first card, is the table of contents. Note that each heading autogenerates an id in kebab-case so a lesson named "Philosopy of Socrates" can be linked as [Philosophy of Socrates](#philosophy-of-socrates).


