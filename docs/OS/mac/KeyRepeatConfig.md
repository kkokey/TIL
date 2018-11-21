Upgrading to Lion or Yosemite and WebStorm 9, I noticed key repeat was  
turned off for the IdeaVim plugin h j k l keys.

## System-wide key repeat

`defaults write -g ApplePressAndHoldEnabled -bool false` in a terminal will enable  
key repeat for every app. This can alternatively be found in the `accessibility` 
settings in OS X' preferences.

## App specific key repeat

If you only want this behavior for specific JetBrains' apps, use:

- Community Edition IntelliJ: - `defaults write com.jetbrains.intellij.ce ApplePressAndHoldEnabled -bool false`
- Ultimate Edition IntelliJ: `defaults write com.jetbrains.intellij ApplePressAndHoldEnabled -bool false`
- AppCode: `defaults write com.jetbrains.AppCode ApplePressAndHoldEnabled -bool false`
- PyCharm: `defaults write com.jetbrains.PyCharm ApplePressAndHoldEnabled -bool false`
- Android Studio: `defaults write com.google.android.studio ApplePressAndHoldEnabled -bool false`
- WebStorm: `defaults write com.jetbrains.WebStorm ApplePressAndHoldEnabled -bool false` *
- RubyMine: `defaults write com.jetbrains.RubyMine ApplePressAndHoldEnabled -bool false` *

** * These are assumptions, use Spotlight `com.jetbrains.` to get type hinting for your 
specific app**

from https://gist.github.com/lsd/1e1826907ab7e49c536a#file-ideavim-os-x-key-repeat-markdown

- Goland: `defaults write com.jetbrains.Goland ApplePressAndHoldEnabled -bool false`
