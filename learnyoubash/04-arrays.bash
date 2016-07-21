#!/usr/bin/env bash

# exercise no 4


arr=("$@")

words=${arr[*]:1:2}

words=(I am ${words[*]} and $4 )

echo ${words[*]}

