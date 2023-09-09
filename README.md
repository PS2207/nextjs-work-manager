This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000] with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!-- *******************noted by me************************************************************************************* -->
In NextJs we can create components in 2 ways- (i)Client side component (ii)Server side component
when we create a website, it follows client-server architecture.
means- (i)client sends request to a server & (ii)server processes that request, & when needed it communicates with database to store data in db or fetch data from db or validate data & then, (ii)response to the client.

For ex- we have a server where we have hosted our website, & server has an ip-address which we connect to domain like .com, .org, .edu etc.

client- which sends request to a server, such as any Browser(chrome,firefox,microsoft edge etc) or any software(postman) etc.
server- which accepts a request & processes that request then response to client ,it is actually a computer but it is accessed across the world.

client-side programming language - which languages are used to code client side, such as javascript,typescript etc.
server-side programming language - which is used to code server side, such as java,nodejs,python etc.

client-side component- when client sends request to a server, then server loads client-side component to the client-side & then it is rendered/executed on client-side itself.
server-side component- when client sends request to a server, then server-side component is executed/renderd on server itself then it sends response to the client.
After version 13 of Nextjs- all the components of Nextjs are server-side components bydefault,
To make it as client-side component use "use client" 
use client is a convention to declare a boundary between server & cient component module graph

There are some disadvantages of both components- like button,event,hooks,window,documents etc are available in cient-side component we can't use these on server-side component.

**Different use cases for server & client components-**
**Use Server component-**
(i)To fetch data
(ii)Access backend resources directly 
(iii)Keep sensitive info on the server(access tokens, api keys etc) 
(iv)Keep large dependencies on the server/Reduce client-side javascript.

**Use client component-**
(i)To Add interactivity & event listeners(onClick(), onChange() etc)
(ii)To Use State, life-cycle effect (useState(), useEffect(), useReducer() etc)
(iii)To use browser-only APIs(window,document,location, history)
(iv)To use custom hooks that depend on state,effect, or browser-only APIs
(v)To use React class component

Build project by using "npm run dev" & deploy to versel,
  when we build nextJs project,it pre-renders pages, if error occurs in any page then it shows error.

















