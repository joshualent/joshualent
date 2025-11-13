---
slug: claude-phone
title: Setup Claude Code on a VPS
authors: [josh]
tags: [programming]
---

Here are the steps I'm using to setup Claude Code using the [GLM Coding Plan](https://z.ai/subscribe) on a VPS that can be accessed anywhere from a web browser. The environment includes python (through uv) and node.js. Remote terminal access  [ttyd](https://github.com/tsl0922/ttyd0) to make claude code available from any device. tmux and vim (with jj to enter normal mode) are included as well. This is all setup on a $5 Ubuntu 24.04 VPS through Hetzner

<!-- truncate -->

## Set up Claude user

We need to setup a user other than root on this vps, which we will name "claude." If you have a different user you want to use (which has sudo power), just switch to it and continue

```bash
apt update

sudo useradd -m -s /bin/bash claude
echo "claude:password" | sudo chpasswd
sudo usermod -aG sudo claude

# setup root ssh keys on claude user
mkdir -p /home/claude/.ssh
cat ~/.ssh/authorized_keys >> /home/claude/.ssh/authorized_keys
sudo chmod 700 /home/claude/.ssh
sudo chmod 600 /home/claude/.ssh/authorized_keys 

su claude

```

# Installation

Next, it is time to install everything we need. You will be prompted to answer "yes" on configuring starship. Right after that, you will be prompted to enter your password, which from the following section is set to `password`

After that, you will also need to input your z.ai api key for claude code setup

```bash
cd ~
mkdir claude

curl -sS https://starship.rs/install.sh | sh
echo '' >> ~/.bashrc
echo 'eval "$(starship init bash)"' >> ~/.bashrc

curl -LsSf https://astral.sh/uv/install.sh | sh

# add `jj` hotkey to .vimrc
echo "inoremap jj <Esc>" >> .vimrc


sudo apt install tmux
# Add a newline and the tmux function to .bashrc
cat >> ~/.bashrc << 'EOF'

tmux() {
  if [ "$1" = "claude" ]; then
    shift
    command tmux new-session -A -s claude "$@"
  else
    command tmux "$@"
  fi
}
EOF
source ~/.bashrc

sudo snap install ttyd --classic


curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# node install
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 24

# Verify the Node.js version:
node -v # Should print "v24.11.1".

# Verify npm version:
npm -v # Should print "11.6.2".

## claude code
# Enter z.ai API key here
curl -O "https://cdn.bigmodel.cn/install/claude_code_zai_env.sh" && bash ./claude_code_zai_env.sh

```

Claude is now installed and ready to use! You can easier use claude code while `ssh`ed into your server, or by starting a web terminal as shown below.

## Change password!!

Change the password to something secure of your choice. 

You will be prompted twice for a new password:
```bash
sudo passwd claude
```

## run web terminal

To create a password protected web terminal to access the VPS, we run the following command. this will setup basic authentication for with the password you set in the placeholder below (remove angle brackets).
:::

```bash
ttyd -c "claude:<YOUR PASSWORD HERE>" -W -p 4562 bash
```

you should see logs from this web shell in your terminal. login with the set username (claude) and whatever password you set. 

To create a durable session you can attach and detach from, use `tmux claude` (alias setup above) to create a new tmux session that you can run claud code in. Detach with <kbd>Ctrl</kbd>+<kbd>b</kbd>+<kbd>d</kbd>, and reattach with `tmux claude`.
