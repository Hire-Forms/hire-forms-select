#!/bin/sh

node_modules/.bin/watchify src/index.jsx \
  --detect-globals false \
  --extension=.jsx \
  --external classnames \
  --external react \
  --external react-dom \
  --outfile 'node_modules/.bin/derequire > build/index.js' \
  --standalone HireFormsSelect \
  --transform [ babelify --plugins object-assign ] \
  --verbose