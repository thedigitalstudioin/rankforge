#!/bin/bash
cd "$(dirname "$0")"
echo "Killing any existing servers..."
kill -9 $(lsof -ti :3000) 2>/dev/null
echo "Starting RankForge dev server..."
npm run dev
