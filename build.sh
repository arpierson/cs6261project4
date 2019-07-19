#!/bin/bash

ng build --prod

http-server dist/cs6261project4 -p 4200 -c-1 