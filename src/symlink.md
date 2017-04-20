# Resolving symlinks

## Create a soft symlink

`ln -s [/path/to/actual/directory] [name-of-symlink]`

## Determine actual path of symlink

`readlink [name-of-symlink]`

## Delete a symlink

`rm [name-of-symlink]`