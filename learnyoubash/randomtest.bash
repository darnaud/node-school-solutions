#!/usr/bin/env bash

secret=(Orange Kiwi Banana Mango Apple Tomato Carrot Cucumber Beet Pineapple Maracuja)

$(say "${secret[$RANDOM%10+1]}")




# Random number : $RANDOM % (max - min) + min + 1
