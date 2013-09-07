#!/bin/bash

WATCHED_DIR="./workbench/khill/lavacharts/public/"

echo "Watching directory: $WATCHED_DIR for file changes"

inotifywait -m -e modify -r "$WATCHED_DIR" --format %w%f |

while read FILE
do
    echo "$FILE was modified, publishing"
    php artisan asset:publish --bench="khill/lavacharts"
done
