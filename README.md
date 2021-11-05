# Extra Markdown & HTML Syntax

![](https://img.shields.io/github/downloads/chrisgrieser/obsidian-alternative-md-syntax/total?label=Total%20Downloads&style=plastic)  ![](https://img.shields.io/github/v/release/chrisgrieser/obsidian-alternative-md-syntax?label=Latest%20Release&style=plastic)

This plugin adds commands with extra Markdown syntax to [Obsidian](https://obsidian.md/), underscore bold & altalics: `__bold__` and `_italics_`.

## Commands added

| Command                    | Effect                  |
| -------------------------- | ----------------------- |
| Underscore Bold            | `__foobar__`            |
| Underscore Italics         | `_foobar_`              |
| HTML Comment               | `<!--foobar--> `        |
| <cite> Tags                | `<cite>foobar</cite>`   |
| <aside> Tags               | `<aside>foobar</aside>` |
| Multicolor Highlight 1[^1] | `*==foobar==*`          |
| Multicolor Highlight 2     | `**==foobar==**`        |

💡 If you want to replace the default commands from Obsidian, remember to remove their hotkey binding before changing the hotkeys from this plugin. Example for `Underscore Bold`:
1. Remove the hotkey `cmd/ctrl + B`[^2] for the default command `Toggle Bold`.
2. Assign `cmd/ctrl + B` as the hotkey for the command `Underscore Bold`.

## Credits

Thanks to @SkepticMystic and @koala for their support.

Donations via [PayPal](https://www.paypal.com/paypalme/ChrisGrieser) or [Ko-Fi](https://ko-fi.com/pseudometa) are much appreciated! 🙏

This plugin has been created by @pseudometa#9546 ([Discord](https://discord.gg/veuWUTm)) aka [@pseudo_meta (Twitter)](https://twitter.com/pseudo_meta) aka Chris Grieser (rl). In my day job, I am a PhD student in sociology, studying the governance of the app economy. If you are interested in this subject, check out [my academic homepage](https://chris-grieser.de/) and get in touch.

[^1]: Multicolor Highlighting is a form of custom syntax used by some themes like [Sanctum](https://github.com/jdanielmourao/obsidian-sanctum) or [Shimmering Focus](https://github.com/chrisgrieser/shimmering-focus).
[^2]: MacOS uses `cmd`, Windows and Linux use `ctrl`.
