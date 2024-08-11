#1/bin/bash

# to clear all folders if excist before run the commands
shopt -s extglob 
rm -r !(setup.sh)

mkdir lab-1

mkdir lab-1/css lab-1/js

touch lab-1/css/styles.css

echo "Hello my little world!" > lab-1/readme.txt

touch lab-1/js/index.js

mkdir -p lab-1/doc/drafts

cp lab-1/readme.txt lab-1/doc/drafts

#chmod go-rwx lab-1/doc/drafts/readme.txt
chmod 700 lab-1/doc/drafts/readme.txt

mv lab-1/readme.txt lab-1/readme.md
mv lab-1/doc/drafts/readme.txt lab-1/doc/drafts/readme.md

echo "Nice to meet you!" > lab-1/readme.md & cat lab-1/readme.md