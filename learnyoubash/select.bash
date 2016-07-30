#!/usr/bin/env bash

PS3="What do you want to do?: "
select ACTION in shoot drive pass dribble calltime ; do
  case "$ACTION" in
    shoot) echo You shot the ball!;;
    drive) echo You drive to the basket;;
    pass) echo You passed the ball to a teammate;;
    dribble) echo You show off your handles!;;
    calltime) echo you called time-out; break;;
  esac
done
  
  
