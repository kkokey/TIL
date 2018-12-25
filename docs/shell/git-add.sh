#!/bin/bash

AREADY=`git status | grep -n 'Changes not staged for commit:' | cut -d: -f1`

#echo `git status | egrep '(^\t|^Untracked|staged|Changes)' | sed -e 's/modified://g' | cut -f $NOT_COMMITED_NUM | sed 's/   //g' | sed -e 's/Changes/- Changes/g' `


GIT_TARGET_LIST=`git status | egrep '(^\t|^Untracked|staged|Changes)' | sed -e 's/modified://g' | sed 's/new file://g' | sed 's/  //g' | sed -e 's/Changes/\
-Changes/g' | sed -e 's/commit:/commit:/g' | sed -e 's/Untracked/\
-Untracked/g' | sed -n $AREADY,'$p' | fzf --reverse -m`

if [ -n "$GIT_TARGET_LIST" ]
then
  echo `git add $GIT_TARGET_LIST`
fi
