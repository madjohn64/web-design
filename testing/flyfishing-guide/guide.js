// Dynamic Fly-Fishing Guide Data
const guideSections = [
  {
    title: "Getting Started",
    content: "Fly-fishing is a method of angling that uses a light-weight lure—called an artificial fly—to catch fish. Start with a basic rod, reel, and floating line."
  },
  {
    title: "Essential Gear",
    content: "You'll need a fly rod, reel, fly line, leader, tippet, and a selection of flies. Waders and a vest are helpful for river fishing."
  },
  {
    title: "Popular Flies",
    content: "Common flies include dry flies (float on water), nymphs (sink below), and streamers (imitate baitfish). Examples: Adams, Woolly Bugger, Elk Hair Caddis."
  },
  {
    title: "Techniques",
    content: "Master the basic cast, roll cast, and mend. Presentation and timing are key. Practice makes perfect!"
  },
  {
    title: "Best Locations",
    content: "Look for rivers, streams, and lakes with trout, bass, or panfish. Local fly shops can recommend good spots."
  }
];

function renderGuide() {
  const guideDiv = document.getElementById('guide-content');
  guideDiv.innerHTML = guideSections.map(section => `
    <div class="guide-section">
      <h3>${section.title}</h3>
      <p>${section.content}</p>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderGuide);
