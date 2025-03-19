#!/bin/bash
export FRONTEND_PORT=4100
export BACKEND_PORT=4101
export POSTGRES_EXTERNAL_PORT=5434
docker-compose -f docker-compose.dev.yml up 