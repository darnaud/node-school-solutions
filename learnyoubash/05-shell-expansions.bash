#!/usr/bin/env bash

RESULT=$(($1*($2+$3)))

echo project-$RESULT/{src,dest,test}/{index,util}.js
