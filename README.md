# My Blog

A small blog built with React, TypeScript, Vite, Tailwind CSS, and React Router.

## Run locally

1. Install the project packages with `npm install`.
2. Start the development server with `npm run dev`.
3. Open the local address printed in the terminal.

## Build and preview

1. Create a production build with `npm run build`.
2. Preview that build with `npm run preview`.

## Routes

| URL | Page or behavior |
| --- | --- |
| `/` | Home page with the three latest posts |
| `/posts` | Posts list with tag filters |
| `/posts/:slug` | One post, loaded by its slug |
| `/about` | About page |
| `/blog` | Redirects to `/posts` |
| Any other URL | Not Found page |

## Features

- Tag filters are stored in the URL, so they can be shared and survive refresh.
- Post details use a route loader.
- Unknown post slugs show the Not Found page.
- The app resets scroll position when the page changes.
- `vercel.json` rewrites app addresses to `index.html` for client-side routing.