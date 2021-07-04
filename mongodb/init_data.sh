#!/bin/bash -eux

docker exec -it mongodb mongo hellodb --eval "$(cat init_hellodb.js)"
docker exec -it mongodb mongo tododb --eval "$(cat init_tododb.js)"
