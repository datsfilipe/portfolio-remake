---
title: "My Development Environment"
publishedAt: "2023-11-27"
summary: "See the tooling and configs I'm currently using."
---

This is meant to be a brief blog post where I'm only going to show off some tools that I'm using daily to get work done. Most if not all of them are terminal centric. The last section is going to be about Neovim and the plugins I'm using there too.

Of course, any workflow is acceptable, doesn't matter if you use GUI tools for everything. Peace.

## Git

My preference is to write my commits from Neovim, using a plugin. But I still do other operations like: merge, rebase, branch creation, checkout, etc, from the **git cli**.

My `.gitconfig` file contains all my alias for git cli, so even if I change my shell to something else, they would still work. Here are they:

```toml
[alias]
  d = diff
  st = status -sb
  sf = show --name-only
  cm = commit -m
  ca = commit --amend
  co = checkout
  ps = push
  psu = push -u
  psm = "!git push origin $(git rev-parse --abbrev-ref HEAD)"
  pl = pull
  plm = "!git pull origin $(git rev-parse --abbrev-ref HEAD)"
  br = branch
  ba = branch -a
  bm = branch --merged
  bn = branch --no-merged
  df = "!git hist | peco | awk '{print $2}' | xargs -I {} git diff {}^ {}"
  lg = log --graph --name-status --pretty=format:\"%C(red)%h %C(reset)(%cd) %C(green)%an %Creset%s %C(yellow)%d%Creset\" --date=relative
  find = "!f() { git log --pretty=format:\"%h %cd [%cn] %s%d\" --date=relative -S'pretty' -S\"$@\" | peco | awk '{print $1}' | xargs -I {} git diff {}^ {}; }; f"
  edit-unmerged = "!f() { git ls-files --unmerged | cut -f2 | sort -u ; }; vim `f`"
  add-unmerged = "!f() { git ls-files --unmerged | cut -f2 | sort -u ; }; git add `f`"
  # some helpers
  incoming = !(git fetch --quiet && git log --pretty=format:'%C(yellow)%h %C(white)- %C(red)%an %C(white)- %C(cyan)%d%Creset %s %C(white)- %ar%Creset' ..@{u})
  outgoing = !(git fetch --quiet && git log --pretty=format:'%C(yellow)%h %C(white)- %C(red)%an %C(white)- %C(cyan)%d%Creset %s %C(white)- %ar%Creset' @{u}..)
  unstage = reset HEAD --
  undo = checkout --
  rollback = reset --soft HEAD~1
  whoami = config user.name
```

Also, I'm trying to use more the [github cli](https://cli.github.com/), `gh`.

## Terminal

Currently, my terminal emulator is [WezTerm](https://wezfurlong.org/wezterm/index.html), but I also recommend [Alacritty](https://alacritty.org/), both are made with Rust. For shell I'm using [zsh](https://www.zsh.org/) with [ohmyzsh](https://ohmyz.sh/). I also use [zsh-z](https://github.com/agkozak/zsh-z) plugin. And for prompt theme, [spaceship](https://github.com/spaceship-prompt/spaceship-prompt) is what I'm using.

I have a lot of terminal tools too, those enhance some commands that already exists or add different things that I like. Take a look at the list:

- [ghq](https://github.com/x-motemen/ghq) - For managing git repository clones.
- [bat](https://github.com/sharkdp/bat) - Replacement for `cat`.
- [eza](https://github.com/eza-community/eza) - Replacement for `ls`.
- [htop](https://htop.dev/) - An interactive process viewer.
- [curl](https://curl.se/docs/manpage.html) - A tool for transferring data from or to a server using URLs.
- [fd](https://github.com/sharkdp/fd) - Replacement for `find`.
- [fzf](https://github.com/junegunn/fzf) - A command-line fuzzy finder. Allow us to make scripts like this: [tmux-sessionizer](https://github.com/datsfilipe/unix-scripts/blob/main/tmux-sessionizer) (if I'm not mistaken, I took that script from [@ThePrimeagen](https://twitter.com/ThePrimeagen)).
- [direnv](https://direnv.net/) - An extension for your shell. It augments existing shells with a new feature that can load and unload environment variables depending on the current directory. This is a powerful tool to use alongside [nix-shell](https://nixos.org/manual/nix/stable/command-ref/nix-shell.html).
- [tmux](https://github.com/tmux/tmux) - A terminal multiplexer. Even with a [WM](https://wiki.archlinux.org/title/Window_manager).

## Desktop

I'm a **Linux** user and an [Arch](https://archlinux.org/) linux fan, but for my OS nowadays I'm using [Nixos](https://nixos.org/). If you want to know why I made the switch, this simple [guide](https://nixos.org/guides/how-nix-works.html) worths a read.

Other than my operating system, I'm using [Hyprland](https://hyprland.org/) - A highly customizable dynamic tiling [Wayland](https://wayland.freedesktop.org/) compositor. It is the only one I've used with Wayland, but for **xorg** I can recommend [i3WM](https://i3wm.org/) (It is very simple to setup and start working) and [BSPWM](https://github.com/baskerville/bspwm) (for those that want a more configurable approach, ideal for [ricing](https://jie-fang.github.io/blog/basics-of-ricing)).

If you want to use a proper [DE](https://wiki.archlinux.org/title/Desktop_environment), I recommend **Arch** or [Manjaro](https://manjaro.org/).

## Neovim

My Neovim configuration is public ([datsnvim](https://github.com/datsfilipe/datsnvim)), but I know some may not be there yet to read and understand these configurations. If it's your case, you should definitly go for [Kickstart](https://github.com/nvim-lua/kickstart.nvim) and use it for a while until you feel confident enough to write you own config or use something different, like [LazyVim](https://www.lazyvim.org) if you prefer.

Here is a list of plugins I use and recommend:

- [Dap](https://github.com/mfussenegger/nvim-dap) - Debugger.
- [Gist](https://github.com/rawnly/gist.nvim) - Easily create gists.
- [Diffview](https://github.com/sindrets/diffview.nvim) - As the name says, a diff view.
- [Harpoon](https://github.com/ThePrimeagen/harpoon) - Hop between marked files faster.
- [Markdown Preview](https://github.com/iamcco/markdown-preview.nvim) - A markdown previewer.
- [Mason](https://github.com/williamboman/mason.nvim) - Install LSP's, linters, formatters, etc.
- [LSP Zero](https://github.com/VonHeikemen/lsp-zero.nvim) - Easy LSP setup.
- [Luasnip](https://github.com/L3MON4D3/LuaSnip) - Code snippets.
- [Neogit](https://github.com/NeogitOrg/neogit) - Take git actions from Neovim.
- [Spectre](https://github.com/nvim-pack/nvim-spectre) - Project wide find and replace.
- [Trouble](https://github.com/folke/trouble.nvim) - Pretty display lists for diagnostics, quickfix, telescope results, etc.
- [Zenmode](https://github.com/folke/zen-mode.nvim) - Distraction-free coding (I use it most when I'm writing articles).

I've not included the most common ones like [Treesitter](https://github.com/nvim-treesitter/nvim-treesitter) or [Cmp](https://github.com/hrsh7th/nvim-cmp), because everybody already uses those. If you want to see the other plugins either way, take a look at [my repository](https://github.com/datsfilipe/datsnvim/tree/main/lua/plugins) and search for them.

## Final Considerations

Thanks for taking a look at a blog about my development environment, I hope you enjoyed it and also that you found something useful for you. This was supposed to be a short blog and at least my expectations were met. Feel free to give feedback on the blog content, linked resources, or language (I'm learning).