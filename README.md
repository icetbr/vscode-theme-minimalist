A minimalist theme for VS Code. You can find it in the [marketplace](https://marketplace.visualstudio.com/items?itemName=icetbr.vscode-theme-minimalist).

Based on Visual Studio Light with the following changes.

### Editor
- Lighter black for **code** provides a more pleasant reading experience
- same color for all occurrences when **selecting a word** because why the hell it isn't by default?

### Tokens
- Lighter gray **comments** for more unobtrusive coding
  - they are important, but not all the time
- Green **strings**, because they shouldn't be red
  - they're not code, so shouldn't be black either
- **Main language constructs** as a light red, because they are the second most important thing in your code (second to the code itself)
  - they serve to guide your reading (conditionals, async, etc)
- **User defined/libs constructs** as blue for the same reason as above
  - allows for clearer code section definitions
- **'this'** as orange because they are note part of your code and don't add as much as a main language construct
  - helps to know it's there, but easy to ignore

## ScreenShot

### Javascript
![ScreenShot](https://raw.githubusercontent.com/icetbr/vscode-theme-minimalist/master/static/sampleJs.png)

### Markdown
![ScreenShot](https://raw.githubusercontent.com/icetbr/vscode-theme-minimalist/master/static/sampleMd.png)

### HTML
![ScreenShot](https://raw.githubusercontent.com/icetbr/vscode-theme-minimalist/master/static/sampleHtml.png)

## Misc: light vs dark

While ultimately this is a matter of preference, if you want to bring science to the mix:
- studies have shown no differences between light/dark colors for eye comfort
- what DOES make a difference is context switching
  - If you go from a dark background to a light background too fast (`alt + tab Google`, for instance), your pupils will have to dilate to adapt to the new background, making your eyes tired faster
- use f.lux or similar blue light filtering software