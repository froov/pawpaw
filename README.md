assumes go is installed

These are tools you install just once
```
go install github.com/froov/froov/cmd/froov@v0.1.0
npm i wrangler -g
npm install workbox-cli --global
```

To recompile the markdown and view the results 

*Make sure you are inside your pawpaw directory or you will get the error "no css.yaml"*
```
froov
wrangler pages dev temp
```

When you are satisfied with the results and want to publish them

Delete the current service worker if any. These would be in your pawpaw/temp folder 

<img width="270" alt="Screen Shot 2022-06-29 at 12 07 09 PM" src="https://user-images.githubusercontent.com/105446541/176483853-572a60a7-b959-4eed-b51c-6a669144de21.png">

Rebuild the service worker using:
```
npx workbox-cli generateSW  
```
Publish to cloudflare:
```
wrangler pages publish temp
```
you will need to log into cloudflare to publish.

when adding pages give them a new uuid https://www.uuidgenerator.net/

note that froov copies the public folder into froov as part of the build. If you change the style.css, you will need to run froov again, or copy to froov yourself.

using service worker can be maddening; you will want to often evict the cache that it builds.


A single subject is composed of markdown using --- to divide note cards.

If the card begins with # Title, then it is the beginning of a lesson.

If the card begins with ## Title, then it is a topic for that lesson.

The first lesson, first card, is the table of contents. Note that each heading autogenerates an id in kebab-case so a lesson named "Philosopy of Socrates" can be linked as [Philosophy of Socrates](#philosophy-of-socrates).


## Customization

Most of the interesting HTML is in css.yaml, and public/style.css.
