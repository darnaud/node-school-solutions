#!/usr/bin/env bash

first=$1
last=$2

for (( i = $first; i< $last; i++ ))
	do
		if [[ $(( $i % 2 )) != 0 ]]
			then
			echo $i
		fi
done