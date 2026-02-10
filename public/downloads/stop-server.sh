#!/bin/bash
# Stop SOUL Student App Server

CONTAINER=$(docker ps -q --filter name=soul-student-app 2>/dev/null)

if [ -n "$CONTAINER" ]; then
    echo "Stopping SOUL server..."
    docker stop soul-student-app >/dev/null
    echo "Server stopped."
else
    echo "SOUL server is not running."
fi
