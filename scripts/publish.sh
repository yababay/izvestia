#!/bin/bash

source .env

curl http://localhost:5173/publish/$WEBHOOK
