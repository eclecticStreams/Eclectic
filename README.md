
# Eclectic Streams TV Embed

This repository contains the HTML, CSS, and JavaScript files for embedding Eclectic Streams TV features (match view, momentum, tabs, etc.) into any webpage using GitHub as a CDN.

## Files
- **tvbody.html** – Base HTML structure for the TV embed.  
- **tvbody.css** – Styling for the TV embed UI (tabs, iframes, buttons, etc.).  
- **tvbody.js** – JavaScript logic for handling tab switching, dynamic loading, and iframe updates.  
- **cdn-embed.html** – A single snippet you can copy and paste into your post/page. This file links to the other three files hosted on GitHub via CDN.

## Usage
1. Go to your post/page editor.  
2. **Copy and paste the content in `cdn-embed.html`** where you want the TV embed to appear.  
3. All styling (CSS) and functionality (JS) will be automatically pulled from this repository through GitHub CDN.  

## Updating
- If you need to make changes to the UI or functionality, edit **tvbody.html**, **tvbody.css**, or **tvbody.js** directly.  
- The `cdn-embed.html` will always point to the latest version of these files, so updates will reflect automatically in your posts/pages.  

## Example
When embedded, you’ll see:  
- Match view iframe  
- Momentum iframe  
- Tab navigation (Match Info, Lineup, Events, Streams, etc.)  
- Responsive design with clean UI  

---
Maintained by Eclectic Streams


🔧 How to Use & Edit the Post Page Embed

When you copy and paste the embed code (like the one you shared) into your Blogger/WordPress post, you only need to focus on the configuration section at the top of the <head> block.

Here’s the part you’ll edit:
```
<script>
  /*<![CDATA[*/
  let TeamVS = [
    ['https://cdn.resfu.com/img_data/equipos/263.png', 'Arsenal'], // Team 1 logo + name
    ['https://cdn.resfu.com/img_data/equipos/1924.png', 'PSG']     // Team 2 logo + name
  ];

  const matchId = "1705045";       // Scorebat Match ID (controls match header & events iframe)
  const momentumId = "14025080";   // SofaScore Match ID (controls momentum graph)
  const competition = "UCL";       // Competition name (will appear in title)

  // Match title is built dynamically (example: UCL: Arsenal vs PSG)
  const matchTitle = `${competition}: ${TeamVS[0][1]} vs ${TeamVS[1][1]}`;

  // List of streams (add/remove links here as needed)
  const streams = [
    "https://www.eclecticstreams.com.ng/p/iframelink1",
    "https://www.eclecticstreams.com.ng/p/iframelink2",
    "https://www.eclecticstreams.com.ng/p/iframelink3"
  ];
  /*]]>*/
</script>
```
✏️ What You Can Edit

TeamVS → Replace the logo URLs + names with the two teams playing.

matchId → Replace with the correct Scorebat Match ID (this powers the header & events tab).

momentumId → Replace with the SofaScore Match ID (this powers the attack momentum graph).

competition → Enter your tournament/league name (e.g., EPL, UCL, La Liga).

streams → Add your iframe sources here. Each entry will generate a clickable “Str 1”, “Str 2”, etc.

✅ What You Don’t Need to Touch

You don’t need to touch the fetch(...) block at the bottom.
That code automatically loads the latest HTML, CSS, and JS (tvbody1.html, tvbody1.css, tvbody1.js) from your GitHub repo via jsDelivr CDN.

That means whenever you update the repo, all posts using this embed will update automatically.

🚀 Example

If you change this in your post page:
```
const competition = "Premier League";
let TeamVS = [
  ['https://cdn.resfu.com/img_data/equipos/209.png', 'Chelsea'],
  ['https://cdn.resfu.com/img_data/equipos/254.png', 'Liverpool']
];
```

Your embed will show:
Premier League: Chelsea vs Liverpool (with their logos + correct match/momentum).
