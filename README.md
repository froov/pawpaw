assumes go is installed

These are tools you install just once
```
go install -v github.com/froov/froov@latest
npm i wrangler -g
npm install workbox-cli --global
```

To recompile the markdown and view the results
```
froov
wrangler pages dev froov
```

When you are satisfied with the results and want to publish them
```
wrangler pages publish froov
```
you will need to log into cloudflare to publish.

when adding pages give them a new uuid https://www.uuidgenerator.net/

when making changes to the files you want to cache:
```
npx workbox-cli generateSW     
```

note that froov copies the public folder into froov as part of the build. If you change the style.css, you will need to run froov again, or copy to froov yourself.

using service worker can be maddening; you will want to often evict the cache that it builds.


A single subject is composed of markdown using --- to divide note cards.

If the card begins with # Title, then it is the beginning of a lesson.

If the card begins with ## Title, then it is a topic for that lesson.

The first lesson, first card, is the table of contents. Note that each heading autogenerates an id in kebab-case so a lesson named "Philosopy of Socrates" can be linked as [Philosophy of Socrates](#philosophy-of-socrates).


## Customization

Most of the interesting HTML is in css.yaml, and public/style.css.
