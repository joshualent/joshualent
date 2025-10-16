---
title: Windokku
---
I am (somewhat) working on a solution for multi-user dokku usage I have called windokku (named such becuase `dokku.win` is available).

Here is [the Dokku plugin](https://github.com/joshualent/windokku-acl)

There is also a [webapp](https://github.com/joshualent/windokku-web) in the works which will help admins invite users on and provide info to users about how to deploy their apps over the cli.

## How it works

Each user get's added to the system using the public ssh-key from a private-key they control. The web app will allow it so admins can invite users over email, have them sign up, upload their public key, and then automatically add them as a user on the server

Once they have their account setup, they might run the following commands:

```bash
# web app will recommend users set up an alias for `ssh dokku@dokku.win` to `dokku`
ssh dokku@dokku.win apps:create my-django
ssh dokku@dokku.win dokku postgres:create my-django-db
ssh dokku@dokku.win dokku postgres:link my-django-db my-django

git remote add dokku dokku@dokku.win:my-django
git push dokku main
```

## Completed

- user app creation
- user service creation

aka, a user can create an app and services (assuming command restrictions are set up), push to the repo, and have their app deployed 🎊. although, a little bit more  testing on this is probably needed.

## Todo

- create a recommended command restrictions configuration
- create `apps` and `services` acl subcommands so users can see their apps and services
- Continue work on webapp for better user orchestration
