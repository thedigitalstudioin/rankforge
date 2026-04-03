#!/bin/bash
cd "$(dirname "$0")"
echo ""
echo "🚀 Starting RankForge SEO Website..."
echo ""

# Kill any existing servers
kill -9 $(lsof -ti :3000) 2>/dev/null
kill -9 $(lsof -ti :3002) 2>/dev/null
sleep 1

# Start the server
npm run dev

# Keep terminal open
read -p "Press Enter to exit..."
