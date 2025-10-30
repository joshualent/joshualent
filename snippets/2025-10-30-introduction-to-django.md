---
slug: introduction-to-django
title: Introduction to Django
authors: [josh]
tags: [programming, django]
---

Django is a mature batteries-included fullstack framework for building web applications with Python. Django enables rapid development and makes CRUD easy. It has a [great third-party package ecosystem](https://djangopackages.org/) and [great documentation](https://docs.djangoproject.com/)

<!-- truncate -->

Django is an MVC based framework with some changes. It is commonly described as **MVT**, **M*odel *V*iew *T*emplate, which leaves out URLs and forms which are other key parts of Django. Django provides authentication out of the box, although it is common (and encouraged) to extend this base authentication model. You can also bring in [django-allauth](https://docs.allauth.org/en/latest/) to implement auth, where you will still define your User Model.

Django can be used fullstack, or to create REST APIs with [Django Rest Framework (DRF)](https://www.django-rest-framework.org/) or [django-ninja](https://django-ninja.dev/). I prefer a fullstack approach (for django and pretty much every framework), but for larger projects an API approach can be beneficial.

When using django for fullstack apps, you will be using Django Templating Language (or another templating language like Jinja) to create what has came to be known as Multi-Page Apps (MPAs). MPAs can get a bad rep for poor UX compared to SPAs (Single-Page-Apps) created with modern frontend frameworks like React, Vue, and Svelte. Luckily, libraries like HTMX and Alpine.js exist to improve the UX for Multi-Page apps and are commonly used with Django.

Being a batteries included framework, Django has a higher learning curve to something like Flask. But the benefit is that you get more out of the box and can work faster once you have gotten used to the framework. Django provides primitives that make common patterns like doing CRUD with your Models very easy, and I find myself missing them when I venture into other frameworks like Flask or Next.js. Most web apps just aren't that bespoke, and not having to implement Models, Forms, Routing, and more from scratch can really help to speed up development.

Why would you pick Django today? I think the best reasons to choose Django are if you already know Python or if you want to create a backend-focused web app.

If you already know Python, Learning Django will be easier than learning another language and a web framework for that language. TypeScript is very popular for web development because it can run on both the client and the server. If you want to create a highly interactive Single-Page-App using a library like React, you could choose to use Django as an API (where DRF or Ninja will help you quickly scaffold an API using your models), or you could pick a fullstack framework like Next.js

Even if you know TypeScript, if you're app doesn't need to be highly interactive (think blog or e-commerce), using Django might reduce complexity and make it easier to create your app. That way you can benefit from an included ORM and Forms integration and keep your frontend simpler with HTML templates. That way, you can maintain most of the complexity to your backend but still have the option to use libraries like HTMX or Alpine.js to sprinkle in client side interactivity.

In conclusion, Django is still relevant and might be the right choice for your next app. There are plenty of choices, but if you want a framework for rapid development with Python, Django is a great choice.