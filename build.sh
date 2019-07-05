#!/bin/bash

ng build --prod

http-server -p 4200 -c-1 dist/calculator