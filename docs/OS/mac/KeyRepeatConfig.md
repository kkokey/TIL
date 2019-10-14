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

defaults write -g InitialKeyRepeat -int 10   # normal minimum is 15 (225 ms)  
defaults write -g KeyRepeat -int 1           # normal minimum is 2 (30 ms)  

맥에서 최대한 빠른 걸로 설정 할 경우 아래 값이 적용된다.
- InitialKeyRepeat : 15
- KeyRepeat        : 2

마이너스 값을 사용할 경우 너무 빠르게 눌려서 문제가 생길 수 있으니 0 이하로는 세팅하지 않는 것이 좋다.(권장)
