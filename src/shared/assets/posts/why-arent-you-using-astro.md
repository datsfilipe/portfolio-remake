---
title: "Why aren't you using Astro?"
publishedAt: "2023-08-17"
summary: "Why Astro might be the best solution for your next project."
heroImage: "/blogs/why-arent-you-using-astro/index.png"
---

First of all, if you don't know [Astro](https://astro.build) yet, take a look at their website and repository, they're doing a great job. Of course I'm going to tell you what it is here anyways.

## What is Astro?

Astro is a performant web framework for building content-focused websites. It is a server-first solution, which means that it generates static HTML at build time. Besides having a lot of features, Astro tries to keep being simple and flexible.

## Use cases

You might want to use Astro for building blogs, documentation sites, portfolios, and more. It is a great solution for content-focused websites, but it can also be used for other types of websites.

## Why Astro?

So, let's say you want to build your own portfolio, why should you use Astro instead of other solutions? here are some valid points:

- Astro was made with focus on performance.
- Astro integrations let you extend the framework with a lot of features.
- Astro is flexible and simple, most of the time you will be writing HTML, CSS and JavaScript.

Let's dive in a little bit more on each of these points.

### Performance

Astro being a server-first solution means it will ship by default less JavaScript to the client, which is great for performance.

Since `v0.21` Astro is built with [Vite](https://vitejs.dev), which has a lot of performance improvements for your development experience and build optimization.

### Integrations

Astro have a [variety of integrations](https://astro.build/integrations) that you can use to extend the framework with features. For example, you can use the [Tailwind integration](https://docs.astro.build/en/guides/integrations-guide/tailwind) to have it working on your website easily.

You can also add [Vite/Rollup plugins](https://docs.astro.build/en/recipes/add-yaml-support) to your Astro project!

To add integrations, take a look at [their integrations guide](https://docs.astro.build/en/guides/integrations-guide).

### Flexibility and simplicity

Astro syntax is very similar to HTML, CSS and JavaScript, take a look at this example:

```astro
---
import { Foo } from './components/Foo.astro'
import { Bar } from './components/Bar' // React component
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Astro Site</title>
  </head>
  <body>
    <Foo />
    <Bar client:load /> <!-- it needs client:load specification to run on client side -->
  </body>
</html>
<script>
  console.log('Hello from Astro!')
</script>
```

As you can see, it is very straightforward, the first part is executed on the server, so you can import modules and do other stuff.

Also, the bottom part is ***almost*** just `html`, so you can have have tags like `script`. Which means you can have interactivity on your website without using any UI framework.

And just like that you just have created a page, easy right?

#### Components

You can have `.astro` components that follows the same syntax as the pages. To use a component inside another component you can make use of the `<slot/>` tag (for React folks, it's like `children`). Let's see an example:

```astro
---
import { Foo } from './components/Foo.astro'
---
<Foo>
  <h1>Hello from Astro!</h1>
</Foo>
```

And in your `Foo.astro` component:

```astro
<div>
  <slot />
</div>
```

*Obs: you can omit the top part if you don't need to have anything being executed from the server.*

## Other Important Points

Astro have some other amazing features that you might love, like:

- Besides being `SSG` by default, you can also have `SSR` or `SSG + SSR` at the same time in your project, look at [their documentation](https://docs.astro.build/en/guides/server-side-rendering).
- It has **API endpoints**, so you can fetch data from your backend or third-party APIs, just like you would do with Next.js. It also support creating **middlewares**.
- It has **Markdown support**, so you can write your content in Markdown and Astro will convert it to HTML. Yes, you can have Markdown and Mdx pages.
- Their **content collections** feature allows you to deliver content from a folder in your project, so you can easily have a blog with Astro. It is an awesome approach that integrates well with the ecosystem.

## Conclusion

I've created this article with the intetion to present a great solution for creating websites. Hopefully I've made you interested in Astro and you will give it a try.

I hope you liked this article. Have a great day!