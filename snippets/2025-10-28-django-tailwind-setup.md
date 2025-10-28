---
slug: django-tailwind-setup
title: Setup TailwindCSS and DaisyUI in Django
authors: [josh]
tags: [programming, django, tailwindcss]
---

TailwindCSS is a modern way to style web applications using small utility classes. I'm looking to try it in more of my django web applications and in that process discovered a good setup for it I thought I should document. This not only includes getting tailwind setup, but also making sure you're getting intellisense with the VSCode Tailwind Intellisense extension. After that, I'll show you how to use [rustywind](https://github.com/avencera/rustywind) to sort your tailwind classes. I'll also show a method to get intellisense for DaisyUI classes

<!-- truncate -->

DaisyUI is a styling framework similar to bootstrap, but built for use with TailwindCSS. DaisyUI defines componenents you can apply through class names, but you'll still use Tailwind utility classes to change your components appearance and position them on the page. I'm coming from Bootstrap and choosing to use DaisyUI keep some of the same developer experience as I shift to using Tailwind.

## Getting started

You need to create a django project and within that project create a new app. Once you have your project setup and an app (ex. `pages`), then you are ready to get started.

:::info "global static & templates folder"
I'm using a global static folder, although you may want to keep your static files contained in your app. If you do, you'll need to change up some of the paths when you run commands to include that path. Ex, you'll use `pages/static/css/output.css` instead of `static/css/output.css`. I'm also using a global templates folder by including the dir `BASE_DIR / "templates"` in my `TEMPLATES` setting in settings.py
:::

Set some static files settings in `settings.py`:

```py
# https://docs.djangoproject.com/en/5.2/howto/static-files/

STATIC_URL = "static/"
STATICFILES_DIRS = [BASE_DIR / "static"]
STATIC_ROOT = BASE_DIR / "staticfiles"
```

Now, you can install daisyUI has a tailwind installation guide which I follow to setup both tailwindCSS and DaisyUI at [daisyui.com/docs/install/django/](https://daisyui.com/docs/install/django/). I will not recount these steps here, just use the `Fast Install` option and it should be pretty easy.

If you did that correctly, you know have TailwindCSS ready to use in your django project. Make sure to run the tailwind executable in a terminal session when you're developing so that your styles update. If a tailwindCSS style seems to not be working, check that you're still running the executable

```bash
static/css/tailwindcss -i static/css/input.css -o static/css/output.css --watch
```

## TailwindCSS Intellisense

TailwindCSS is not to hard to acheive using the [Tailwind CSS IntelliSense extension for VSCode](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss). Make sure you have this installed. If you're not using VSCode, there should be a similar tool I don't know about that you can find.

For me, it seems like the only thing I need to get Tailwind CSS IntelliSense working is a `tailwind.config.js` file at the root of my project. I've tested this with an empty file and it works, but normally i use this config:

```js
import daisyui from "./static/css/daisyui.mjs";
import theme from "./static/css/daisyui-theme.mjs";
export default {
  content: ["./templates/**/*.html", "./*/templates/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [daisyui, theme()],
};

```

Then, make sure you have settings for the extension to your liking. I use:

```json
// settings.json
"tailwindCSS.includeLanguages": {
    "django-html": "html"
  }
  "tailwindCSS.experimental.configFile": "./tailwind.config.js",
  "tailwindCSS.emmetCompletions": true,
  "tailwindCSS.suggestions": true
```

This should work, but you may have to tweak things. I've tried to test exactly how this works, but it seems like even without these settings the intellisense is working as long as I have a file named `tailwind.config.js` at the root of my project.

### DaisyUI intellisense
The way I have to setup DaisyUI intellisense is to use [Intellisense for CSS VSCode extension](https://github.com/Zignd/HTML-CSS-Class-Completion). I don't actually point it to the real css file, but instead a mock I made by extracting the classes. It doesn't seem to include rules using `/` in the emmet completions. The intellisense extension is kinda old and I'm guessing that's the problem.

Anyway, copy this [mock CSS file](/daisyui-classes-mock) and point the extension to it:
```json
  "html-css-class-completion.includeGlobPattern": "**/dev-css-mock/daisyui-mock.css",
  "html-css-class-completion.excludeGlobPattern": "",
  "html-css-class-completion.HTMLLanguages": [
    "html",
    "php",
    "blade",
    "vue",
    "twig",
    "erb",
    "ejs",
    "django-html"
  ],
  "html-css-class-completion.JavaScriptLanguages": [
    "javascript",
    "javascriptreact",
    "typescriptreact"
  ],
```

## Rustywind

Lastly, I like to use Rustywind for class sorting. It seems to handle this well. From my testing, it will ignore sorting if it encounters django template syntax in the class attribute.

I used `cargo binstall rustywind`, but there are other installation methods. Then run `rustywind --write templates/` and that should sort all your templates in the `templates/` folder.

```bash
rustywind --write templates/
```

