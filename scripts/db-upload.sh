#!/bin/bash

PROJ_DIR=`pwd`

ssh ru "cd $PROJ_DIR && mkdir -p .backup"
scp .data/dump.rdb ru:$PROJ_DIR/.backup/`date --iso`.rdb
