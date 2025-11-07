---
slug: tailwind-at-speed-of-bootstrap
title: Tailwind At the Speed of Bootstrap
authors: [josh]
tags: [programming, django, tailwindcss]
---

TailwindCSS is a modern way to style web applications using small utility classes. I like the idea of it, but I find that switching to it is having a few roadblocks.

I want to start using tailwindCSS in my projects, but I find that the slow down from using it is making me too annoyed to use it on personal projects I am making to have fun. I get that you have to get used to it, but I stil feel like their should be an easier way to use it for MVP type projects where you just want to move fast and don't care if you get the CSS right the first time.

## Bootstrap
I really enjoy using Bootstrap. I think the developer experience is great and it removes a lot of decision overheard for styling my HTML. But even though I like Bootstrap, I have a few problems with it.
- Extensibility: It is hard to change Bootstrap. It is possible using Sass, but I worry about moving off of Bootstrap if I no longer like it's styling opinions.
- Appearence: I actually think Bootstrap's appearance is quite tasteful, but I don't like that the "Bootstrap site" appearance is hard to escape.

Most of the time I don't care about how my apps look, but I do worry about my ability to move off bootstrap as my projects grow. I start most of my apps with an "MVP mindset," but those projects could reach a point where I care about their appearance and don't want them to scream Bootstrap.

The main thing I like about bootstrap is that I can stay in my editor for the most common use cases. I don't have to think about styling basic tags like `a` and `p`. When I do need to use classes, It's really easy to layout the page, change how text looks, add buttons, etc.

## what I want to have for TailwindCSS

I think TailwindCSS forms is really cool. I don't like that TailwindCSS fully resets al of my HTML's appearance, and I think forms are one of those things where I just don't want to style them myself.

## component libraries?

DaisyUI, Flowbite, and HyperUI are popular component libraries I've looked at in aiding my transition from bootstrap to tailwind. But, I don't think any of them really replace what I'm used to with bootstrap. I like DaisyUI's use of semantic colors and large number of components, but I don't really like it's appearance by default and I don't want to lean on the website for simple styles.

I want my same workflow where I stay in my editor for the simple stuff and can quickly build out UIs

I have come around to daisyui, and I think it is actually a pretty solid option. You can use it as much or little as you want, which is nice. Unlike bootstrap, you can add it to your project without your bundlesize gorwing out of hand from styles you aren't even using.

## Tailwind Forms
The Tailwind Forms plugin is pretty much exactly what I want. Sensible defaults for forms, in an unstyled (easy to style with utility classes) and styled.

## shadcn-django
shadcn-django is an unofficial component collection that operates similar to shadcn/ui using django-cotton, alpine.js, and tailwindCSS. I think this looks pretty cool and is one of hte reasons I'm considering Tailwind more. I really believe modern fullstack django is going to adopt tailwindcss, and I'd like to be part of it to take advantage of new tooling.

## Tailwind Typography

While Tailwind Typography is mostly meant for markdown or CMS content, It's not locked into that use case. When I use bootstrap, normally half of my tags don't need any classes becuase of bootstrap's sensible default styling. I like that tailwind typography offers that, and opting into the styles is as easy as adding `.prose` to whatever block of content you want default styles for (for text elements).

## Conclusion

All in all, I'm pretty happy about some of the research I've done into tailwind. I think locality of behavior is a huge win and tailwindCSS is likely the best styling option for LoB. With a combination of Tailwind Forms, Tailwind Typography, DaisyUI, and shadcn-django, it seems like I will be able to start transitioning some of my projects from Bootstrap to TailwindCSS.