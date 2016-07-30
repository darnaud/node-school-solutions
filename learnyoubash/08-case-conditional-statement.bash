#!/usr/bin/env bash

case "$1" in

	(jpeg|jpg|JPEG|JPG) echo "It is jpeg.";;
	(png|PNG) echo "It is png.";;
	(gif|GIF) echo "It is gif.";;
	(*) echo "$1 is not an image!";;
esac
