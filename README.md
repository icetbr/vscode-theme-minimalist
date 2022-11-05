
# [VSCode Minimalist Theme][1]
Based on Visual Studio Light with the following changes.


## Editor
- lighter black for **code** provides a more pleasant reading experience
- same color for all occurrences when **selecting a word** because why the hell it isn't by default?


## Tokens
- lighter gray **comments** for more unobtrusive coding
  - they are important, but not all the time
- green **strings**, because they shouldn't be red
  - they're not code, so shouldn't be black either
- **main language constructs** as a light red, because they are the second most important thing in your code (second to the code itself)
  - they serve to guide your reading (conditionals, async, etc)
- **user defined/libs constructs** as blue for the same reason as above
  - allows for clearer code section definitions
- `this` as orange because they are note part of your code and don't add as much as a main language construct
  - helps to know it's there, but easy to ignore


## Tokens (alternative Purple Object Keys)
- I've been experimenting with this and it helps a lot with json files and my "object creating" heavy JS code


## Markdown
- lighter syntax decoration, like the `**`from bold, **nearly** hiding them
- decorate bold and italic as such
- distinctive and pleasant heading colors: bold navy blue for all but H3, which uses regular black


## Markdown (alternative Blue H3)
- makes H3 the same as the other headings


## Light vs Dark
- studies have shown **no differences** between light/dark colors for eye comfort
- what DOES make a difference is **context switching**
  - If you go from a dark background to a light background too fast (`alt + tab Google`, for instance), your **pupils** will have to **dilate** to adapt to the new background, making your eyes tired faster
- use `f.lux` or similar blue light filtering software
- work in a well lit environment, based on my experience I would rate:
  - 10 natural light from windows
  - 8 overhead light
  - 5 ScreenBar (don't buy Baseus, go for Xiaomi or Benq)
  - 4 strong bias light (I never had a good one)
  - 3 desk light
  - 0 no light, monitor only
- use white light (~6000k) by day and warm light (~3000) by night
- https://www.wired.co.uk/article/dark-mode-chrome-android-ios-science
- https://www.androidauthority.com/dark-mode-1046425/


## Screenshots

### Javascript
![Javascript screenshot](static/sampleJs.png)

### Markdown
![Markdown screenShot](static/sampleMd.png)

### HTML
![HTML ScreenShot](static/sampleHtml.png)

### JSON (alternative Purple Keys variant)
![JSON screenshot](static/sampleJson.png)

### Changes v1.4
![Changes 1.4 screenshot](static/changes_v1.4.png)

### Bash
![Bash screenshot](static/sampleSh.png)


## Recommended Extensions

### [Highlight](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-highlight)
Example to make code blocks in markdown to look the same as when rendered as HTML and to nearly hides tables borders

![Highlight screenshot](static/highlight.png)

```js
    "highlight.regexes": {
          "(```.+?```)": {
            "regexFlags": "gs",
            "decorations": [{
              "backgroundColor": "rgba(0, 0, 0, 0.03)",
              "isWholeLine": true,
            }],
            "filterLanguageRegex": "markdown",
            "filterFileRegex": ".*\\.md"
          },

        "(\\|)": {
            "filterLanguageRegex": "[markdown]",
            "decorations": [{
                "color": "rgba(0, 0, 0, 0.1)"
            }]
        }
    },
  ```


### [Customize UI](https://marketplace.visualstudio.com/items?itemName=iocave.customize-ui)

```js
    "customizeUI.stylesheet": {
        "div.monaco-split-view2.horizontal.separator-border div.title-actions": "display: none !important;",                                        // Hide title actions in Zen-mode
        ".monaco-workbench .part.editor>.content .editor-group-container>.title>.label-container": "display: none !important;",                     // Hide File and title actions bar

        "[title='Open Changes']": "display: none !important;",
        "[title^='Split Editor Right']": "display: none !important;",

        ".monaco-list-row:hover:not(.selected):not(.focused)": "background-color: #ffffff !important",

        ".fullscreen .scroll-decoration": "display: none !important",
        ".monaco-split-view2.horizontal.separator-border": "--separator-border: #ffffff !important",
    },
```

### Others
- [JSDoc Markdown highlighting](https://marketplace.visualstudio.com/items?itemName=bierner.jsdoc-markdown-highlighting)
- [es6-string-css](https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css)
- [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)
- [es6-string-markdown](https://marketplace.visualstudio.com/items?itemName=jeoht.es6-string-markdown)
- [MdTableEditor](https://marketplace.visualstudio.com/items?itemName=clover.md-table-editor)

## How to customize it
The following can be applied to `settings.json`.

If your inline code blocks have a frame, it's because of an extension. Use this to disable:

```json
"markdown.extension.syntax.decorations": false,
```

If you dislike any of the changes, you can override them. See the [source](themes/Minimalist-color-theme.json) code for scope rules, or type `CTRL + ALT + SHIFT + I` to toggle inspect mode, and that will give you the `scope` name you need to customize.

To revert the H2 heading color for instance:

```json
"editor.tokenColorCustomizations": {
    "[Minimalist]": {
        "textMateRules": [
          {
            "name": "Markdown h2 heading",
            "scope": "heading.2.markdown punctuation.definition.heading.markdown, heading.2.markdown entity.name.section.markdown, heading.2.markdown string.other.link.title.markdown",
            "settings": {
              "foreground": "#365f91",
            }
          },
        ]
    }
}
```

<!-- explain overhead light position -->

[1]: https://marketplace.visualstudio.com/items?itemName=icetbr.vscode-theme-minimalist
