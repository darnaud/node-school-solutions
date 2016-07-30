#!/usr/bin/env bash

new_array=(I am ${@:2:2} and $4)

echo ${new_array[*]}
