tell application "Terminal"
	activate
	do script "cd '/Users/manavgodhani/Documents/VS Code - Claude/Programattic SEO/seo-website' && kill -9 $(lsof -ti :3000) 2>/dev/null; npm run dev"
end tell

delay 12

tell application "System Events"
	open location "http://localhost:3000/services/on-page-seo"
end tell
