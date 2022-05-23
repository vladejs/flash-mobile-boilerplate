#!/bin/bash
DIR="node_modules/.vite/"
if [[ -d "$DIR" ]]
then
    rm -r node_modules/.vite/
fi
cp  $PWD/.devfix/indexCore.js $PWD/node_modules/@ionic/core/node_modules/@stencil/core/internal/client/index.js
cp  $PWD/.devfix/indexReact.js $PWD/node_modules/@ionic/react/node_modules/@stencil/core/internal/client/index.js
