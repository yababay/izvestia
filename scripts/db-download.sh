#!/bin/bash

mkdir -p .backup
scp ru:`pwd`/.data/dump.rdb .backup/`date --iso`.rdb
