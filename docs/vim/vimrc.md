# 이 파일을 통해 VIM 설정 파일을 관리합니다.

- tab과 space를 vim editor에 표현해주는 설정 정보 입니다.
set list listchars=tab:\|\
highlight Whitespace cterm=underline gui=underline ctermbg=NONE guibg=NONE ctermfg=yellow guifg=yellow
autocmd ColorScheme * highlight Whitespace gui=underline ctermbg=NONE guibg=NONE ctermfg=yellow guifg=yellow
match Whitespace /  \+/

- 현재 사용중인 정보 (추후 어떤 내용인지 정리가 필요함.)
syntax enable
filetype plugin indent on
set nocompatible "vim 안의 기능을 사용
set mouse=a " 마우스 클릭 사용 가능
set number  " 라인 넘버 출력
set incsearch
set cursorline " 커서가 있는 곳에 라인 생성
set ts=2
set smartindent
set tabstop=2
set expandtab
set shiftwidth=2
set hlsearch

set list listchars=tab:\|\
highlight Whitespace cterm=underline gui=underline ctermbg=NONE guibg=NONE ctermfg=yellow guifg=yellow
autocmd ColorScheme * highlight Whitespace gui=underline ctermbg=NONE guibg=NONE ctermfg=yellow guifg=yellow
match Whitespace /  \+/
