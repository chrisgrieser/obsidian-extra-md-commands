# Alternative Markdown Syntax

![](https://img.shields.io/github/downloads/chrisgrieser/obsidian-alternative-md-syntax/total?label=Total%20Downloads&style=plastic)  ![](https://img.shields.io/github/v/release/chrisgrieser/obsidian-alternative-md-syntax?label=Latest%20Release&style=plastic)

This plugin adds commands with alternative Markdown syntax to [Obsidian](https://obsidian.md/), underscore bold & altalics: `__bold__` and `_italics_`.

## Commands added

| Command            | Default Hotkey[^1]     | Effect       |
| ------------------ | ---------------------- | ------------ |
| Underscore Bold    | `cmd/ctrl + shift + B` | `__foobar__` |
| Underscore Italics | `cmd/ctrl + shift + I` | `_foobar_`   |

If you want to replace the default commands from Obsidian, remember to remove their htokey binding before changing the hotkeys from this plugin. Example for `Underscore Bold`:
1. Remove the hotkey `cmd/ctrl + B` for the default command `Toggle Bold`.
2. Change the hotkey of the command `Underscore Bold` to `cmd/ctrl + B`.

## Credits

Thanks to @SKepticMystic and @koala for their support.

Donations via [PayPal](https://www.paypal.com/paypalme/ChrisGrieser) or [Ko-Fi](https://ko-fi.com/pseudometa) are much appreciated! 🙏

This plugin has been created by @pseudometa#9546 ([Discord](https://discord.gg/veuWUTm)) aka [@pseudo_meta (Twitter)](https://twitter.com/pseudo_meta) aka Chris Grieser (rl). In my day job, I am a PhD student in sociology, studying the governance of the app economy. If you are interested in this subject, check out [my academic homepage](https://chris-grieser.de/) and get in touch.


[^1]: MacOS uses `cmd`, Windows/Linux use `ctrl`.
