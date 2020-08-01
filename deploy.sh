#!/bin/bash
HOST=ftp.ghostclear.com
USER=u338616000.varunchitturi
PASSWORD=Var29Aug!

ftp -inv $HOST <<EOF
user $USER $PASSWORD
EOF
