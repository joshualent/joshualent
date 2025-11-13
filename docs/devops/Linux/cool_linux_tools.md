---
id: cool-linux-tools
title: Cool Linux Tools
sidebar_label: Cool Linux Tools
---

Some of my favorite tools I use on linux

## Zsh

`Zsh` is a shell, very similar to `bash`, which provides a great developer experience especially with the use of plugins (which can be installed with a plugin manager like [`zinit`](https://github.com/zdharma-continuum/zinit)).

- [Dream's of Autonomy Zenful Zsh config](https://www.youtube.com/watch?v=ud7YxC33Z3w)

## [Tmux](https://github.com/tmux/tmux/wiki)

Tmux is a terminal multiplexer. It helps create multiple windows and sessions inside your terminal. It has QOL features like being able to create sessions that can be detached and reattached to. It replaces whatever window management your terminal multiplexer comes with. You can configure it with a `tmux.conf` and use plugins [Tmux Plugin Manager](https://github.com/tmux-plugins/tpm)

## [Starship prompt](https://starship.rs/)

Starship is a sleek cross-shell prompt that comes with great defaults for developers and looks pretty nice. 

## [Tailscale](https://tailscale.com/)

Tailscale is a mesh vpn that let's you setup a mesh network called a "tailnet." Devices on a tailnet can be accessed from anyw

## Stow for dotfiles

GNU stow is a great utility for managing dotfiles with symlinks, especially for use across multiple computers with the help of a [personal dotfiles git repository](https://github.com/joshualent/dotfiles). 

here using their tailnet names. Tailscale will resolve these DNS requests and connect together your devices using their mesh network. Very useful for setting up a homeserver that you can access from anywhere with the safety of keeping it on LAN.

## [Docker](https://docs.docker.com/)

Docker is a very popular containerization tool for running applications of all sorts. Very useful for homelabbing, as well as deploying apps