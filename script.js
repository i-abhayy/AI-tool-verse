const tools = [
  { name: "ChatGPT", category: "Writing", icon: "💬", description: "General-purpose AI assistant for writing, brainstorming, studying, planning, and problem solving.", bestFor: "Students, creators, researchers, and professionals", howToUse: "Enter a prompt, describe your task clearly, and refine the response with follow-up prompts.", link: "https://chatgpt.com" },
  { name: "Claude", category: "Writing", icon: "🧠", description: "AI assistant for long-form writing, analysis, coding help, and document understanding.", bestFor: "Deep explanations, long documents, and structured writing", howToUse: "Paste your content or question and ask for summaries, rewrites, or analysis.", link: "https://claude.ai" },
  { name: "Gemini", category: "Research", icon: "✨", description: "Google's AI assistant for research, writing, idea generation, and multimodal tasks.", bestFor: "Research, study support, and quick idea generation", howToUse: "Open Gemini, ask a question, upload content if needed, and continue with follow-up prompts.", link: "https://gemini.google.com" },
  { name: "Perplexity", category: "Research", icon: "🔎", description: "AI answer engine that helps users search the web with concise answers and sources.", bestFor: "Fast research and fact-finding", howToUse: "Type a research question and review the answer with linked sources.", link: "https://www.perplexity.ai" },
  { name: "NotebookLM", category: "Research", icon: "📘", description: "AI notebook that helps you understand your own uploaded documents, notes, and sources.", bestFor: "Studying from PDFs, notes, and lectures", howToUse: "Upload your material, then ask questions or request summaries and study guides.", link: "https://notebooklm.google.com" },
  { name: "Consensus", category: "Research", icon: "🧪", description: "Research-focused AI search tool that helps users find answers from scientific literature.", bestFor: "Academic research and evidence-based searching", howToUse: "Search for a research question and scan study-based results.", link: "https://consensus.app" },
  { name: "Elicit", category: "Research", icon: "📄", description: "AI research assistant that helps with literature review, paper discovery, and summaries.", bestFor: "Literature reviews and academic work", howToUse: "Enter a research topic, then review papers, summaries, and extracted insights.", link: "https://elicit.com" },
  { name: "SciSpace", category: "Research", icon: "🔬", description: "AI platform for understanding research papers, simplifying jargon, and exploring references.", bestFor: "Students reading complex papers", howToUse: "Upload a paper or search one, then ask for explanations of difficult sections.", link: "https://typeset.io" },
  { name: "Semantic Scholar", category: "Research", icon: "📚", description: "Academic search engine with AI-powered paper discovery and research recommendations.", bestFor: "Finding scholarly papers and citations", howToUse: "Search by topic, author, or keyword and review relevant papers.", link: "https://www.semanticscholar.org" },
  { name: "Wolfram Alpha", category: "Research", icon: "➗", description: "Computational knowledge engine for math, data, formulas, and factual queries.", bestFor: "Math, equations, and technical knowledge", howToUse: "Type a formula, problem, or factual query to get computed results.", link: "https://www.wolframalpha.com" },
  { name: "GitHub Copilot", category: "Coding", icon: "🧑‍💻", description: "AI coding assistant that suggests code, functions, fixes, and comments inside editors.", bestFor: "Developers coding inside IDEs", howToUse: "Install the extension in your editor, then accept or refine code suggestions.", link: "https://github.com/features/copilot" },
  { name: "Cursor", category: "Coding", icon: "🖱️", description: "AI-first code editor built to help generate, edit, and understand projects quickly.", bestFor: "AI-assisted software development", howToUse: "Open your project in Cursor and use chat or agent features for coding tasks.", link: "https://cursor.com" },
  { name: "Replit", category: "Coding", icon: "🌐", description: "Browser-based coding platform with AI-assisted app building and deployment.", bestFor: "Quick prototypes and online coding", howToUse: "Create a repl, describe your app idea, and build directly in the browser.", link: "https://replit.com" },
  { name: "Bolt", category: "Coding", icon: "⚡", description: "Prompt-driven web app builder that generates full-stack app scaffolds in the browser.", bestFor: "Rapid web app prototyping", howToUse: "Describe the app you want, then edit and run it in the generated environment.", link: "https://bolt.new" },
  { name: "Lovable", category: "Coding", icon: "💗", description: "AI app builder that turns prompts into polished full-stack product prototypes.", bestFor: "Founders, students, and fast MVP creation", howToUse: "Write what you want to build and iterate through prompts and UI changes.", link: "https://lovable.dev" },
  { name: "Tabnine", category: "Coding", icon: "🧩", description: "AI coding assistant for code completion, refactoring support, and developer productivity.", bestFor: "Autocomplete and coding speed", howToUse: "Integrate it into your editor and use suggestions as you code.", link: "https://www.tabnine.com" },
  { name: "Codeium", category: "Coding", icon: "🛠️", description: "AI developer toolkit offering autocomplete, chat, and code assistance.", bestFor: "Fast code generation and editing", howToUse: "Install the extension and use chat or inline completions in your IDE.", link: "https://codeium.com" },
  { name: "Amazon Q Developer", category: "Coding", icon: "☁️", description: "AWS-focused AI assistant for coding, debugging, and cloud development workflows.", bestFor: "Cloud developers and AWS workflows", howToUse: "Use it inside supported development tools for coding and cloud guidance.", link: "https://aws.amazon.com/q/developer/" },
  { name: "Gemini Code Assist", category: "Coding", icon: "🧬", description: "Coding assistant from Google for generating, explaining, and improving code.", bestFor: "Developers who want AI coding help with Google ecosystem support", howToUse: "Use it inside supported IDEs and ask for code completion or explanation.", link: "https://codeassist.google" },
  { name: "Blackbox AI", category: "Coding", icon: "📦", description: "AI coding helper for generating code, searching snippets, and solving programming tasks.", bestFor: "Students and beginner developers", howToUse: "Type your coding problem or use the assistant inside supported tools.", link: "https://www.blackbox.ai" },
  { name: "Jasper", category: "Writing", icon: "📝", description: "AI content platform for blogs, marketing copy, product descriptions, and campaigns.", bestFor: "Marketing teams and content creators", howToUse: "Choose a content type, add context, and generate or refine the copy.", link: "https://www.jasper.ai" },
  { name: "Copy.ai", category: "Writing", icon: "📣", description: "AI writing tool for emails, ad copy, social posts, and business content.", bestFor: "Quick marketing and sales content", howToUse: "Select the workflow or prompt style and generate text for your goal.", link: "https://www.copy.ai" },
  { name: "Writesonic", category: "Writing", icon: "🚀", description: "AI content generator for articles, product copy, landing pages, and SEO writing.", bestFor: "Blogging and digital marketing", howToUse: "Enter topic details and choose the content format to generate drafts.", link: "https://writesonic.com" },
  { name: "Rytr", category: "Writing", icon: "✒️", description: "AI writer for short-form content, business copy, and quick writing support.", bestFor: "Emails, bios, and short copy", howToUse: "Select a use case, input context, and generate or tweak the output.", link: "https://rytr.me" },
  { name: "Sudowrite", category: "Writing", icon: "📖", description: "AI writing assistant built for fiction writers and creative storytelling.", bestFor: "Fiction, novels, and creative writing", howToUse: "Paste or write story content, then use prompts to expand or improve it.", link: "https://www.sudowrite.com" },
  { name: "Notion AI", category: "Productivity", icon: "🗒️", description: "AI embedded in Notion for summarizing notes, drafting content, and managing knowledge.", bestFor: "Note-takers and knowledge workers", howToUse: "Use the AI icon inside any Notion page to generate, summarize, or improve content.", link: "https://www.notion.so/product/ai" },
  { name: "Otter.ai", category: "Productivity", icon: "🦦", description: "AI meeting recorder and transcription tool for calls, lectures, and interviews.", bestFor: "Meeting notes and transcription", howToUse: "Connect to Zoom or upload audio to get instant transcriptions and summaries.", link: "https://otter.ai" },
  { name: "Fireflies.ai", category: "Productivity", icon: "🔥", description: "AI meeting note-taker that records, transcribes, and summarizes calls automatically.", bestFor: "Teams needing meeting summaries", howToUse: "Invite the bot to a meeting, then review the transcript and action items after.", link: "https://fireflies.ai" },
  { name: "Motion", category: "Productivity", icon: "📅", description: "AI scheduling assistant that builds your ideal daily schedule based on your tasks.", bestFor: "Time management and scheduling", howToUse: "Add tasks and meetings, and let Motion auto-schedule your day optimally.", link: "https://www.usemotion.com" },
  { name: "Mem.ai", category: "Productivity", icon: "🧠", description: "AI-powered note app that automatically connects and organizes your notes.", bestFor: "Personal knowledge management", howToUse: "Write notes naturally and let Mem link related ideas and surface them later.", link: "https://mem.ai" },
  { name: "Midjourney", category: "Image", icon: "🎨", description: "AI image generator known for producing photorealistic and artistic visuals from prompts.", bestFor: "Artists, designers, and creative directors", howToUse: "Use Discord or the web app, type /imagine and describe the image you want.", link: "https://www.midjourney.com" },
  { name: "DALL·E 3", category: "Image", icon: "🖼️", description: "OpenAI's image model for generating detailed, accurate visuals from text descriptions.", bestFor: "Precise image generation from text", howToUse: "Describe what you want inside ChatGPT and ask it to generate an image.", link: "https://openai.com/dall-e-3" },
  { name: "Stable Diffusion", category: "Image", icon: "🌌", description: "Open-source AI image generator for realistic, creative, and custom image synthesis.", bestFor: "Developers and advanced image creators", howToUse: "Use it locally or via platforms, then experiment with prompts and settings.", link: "https://stability.ai" },
  { name: "Adobe Firefly", category: "Image", icon: "🔥", description: "Adobe's AI image generator built into Creative Cloud for safe, commercial-use imagery.", bestFor: "Adobe users and commercial designers", howToUse: "Access through Adobe tools and generate images from text or references.", link: "https://www.adobe.com/products/firefly.html" },
  { name: "Leonardo.ai", category: "Image", icon: "🎭", description: "AI art platform for generating game assets, concept art, and visual content.", bestFor: "Game developers and concept artists", howToUse: "Choose a model, enter a prompt, and fine-tune settings for desired output.", link: "https://leonardo.ai" },
  { name: "Runway", category: "Video", icon: "🎬", description: "AI video generator for creating, editing, and transforming video content with prompts.", bestFor: "Video creators and filmmakers", howToUse: "Upload video or start from text, apply effects, and export your creation.", link: "https://runwayml.com" },
  { name: "Pika", category: "Video", icon: "🎥", description: "AI video tool for creating animated clips and short videos from text or image inputs.", bestFor: "Short video and social content creation", howToUse: "Describe the video or upload an image, choose style, and generate the clip.", link: "https://pika.art" },
  { name: "HeyGen", category: "Video", icon: "🎙️", description: "AI avatar video creator for generating spokesperson videos without a camera.", bestFor: "Product demos, training videos, and marketing", howToUse: "Choose an avatar, input a script, and generate a talking-head video.", link: "https://www.heygen.com" },
  { name: "Synthesia", category: "Video", icon: "🤖", description: "AI video platform for creating professional avatar-based training and explainer videos.", bestFor: "Corporate training and explainer videos", howToUse: "Select an AI presenter, type your script, and produce a video in minutes.", link: "https://www.synthesia.io" },
  { name: "Descript", category: "Video", icon: "✂️", description: "AI-powered video and podcast editing tool with text-based editing and voice cloning.", bestFor: "Podcast editors and video creators", howToUse: "Upload media, edit using the transcript, and export polished content.", link: "https://www.descript.com" },
  { name: "ElevenLabs", category: "Audio", icon: "🔊", description: "AI voice generation platform for creating realistic voiceovers and custom voices.", bestFor: "Narration, audiobooks, and content creators", howToUse: "Enter text, select a voice, and generate or clone a voice for your project.", link: "https://elevenlabs.io" },
  { name: "Suno", category: "Audio", icon: "🎵", description: "AI music generator that creates full songs with vocals and instruments from text prompts.", bestFor: "Music creators and content producers", howToUse: "Describe the genre and mood, and generate a full song in seconds.", link: "https://suno.ai" },
  { name: "Udio", category: "Audio", icon: "🎼", description: "AI music creation platform for generating high-quality songs and soundscapes.", bestFor: "Musicians and audio content creators", howToUse: "Enter a prompt describing mood and style, then generate and refine your track.", link: "https://www.udio.com" },
  { name: "Murf.ai", category: "Audio", icon: "🎙️", description: "AI voiceover studio with a library of human-like voices for videos and presentations.", bestFor: "Voiceovers for videos and presentations", howToUse: "Type or paste a script, select a voice, and customize the audio output.", link: "https://murf.ai" },
  { name: "Canva AI", category: "Design", icon: "🖌️", description: "AI design tools inside Canva for generating images, removing backgrounds, and creating visual content.", bestFor: "Non-designers and quick visual creation", howToUse: "Use Magic Studio inside Canva to generate images, resize, or enhance designs.", link: "https://www.canva.com/ai-image-generator/" },
  { name: "Figma AI", category: "Design", icon: "🎯", description: "AI-assisted features inside Figma for design automation, prototyping, and team workflows.", bestFor: "UI designers and product teams", howToUse: "Use AI features inside Figma to auto-layout, rename layers, or generate copy.", link: "https://www.figma.com/ai" },
  { name: "Uizard", category: "Design", icon: "📱", description: "AI tool that turns text or sketches into app and website UI mockups instantly.", bestFor: "Rapid UI prototyping and wireframing", howToUse: "Describe an app screen or upload a sketch and convert it into a clickable mockup.", link: "https://uizard.io" },
  { name: "Framer AI", category: "Design", icon: "🪄", description: "AI-assisted website builder inside Framer for fast landing pages and visual sites.", bestFor: "No-code website design", howToUse: "Start with a prompt and customize the generated website visually.", link: "https://www.framer.com/ai" },
  { name: "Gamma", category: "Presentation", icon: "📊", description: "AI tool for creating presentations, documents, and visual webpages from prompts.", bestFor: "Slides, pitch decks, and visual docs", howToUse: "Describe your topic and let Gamma generate a presentation or document.", link: "https://gamma.app" },
  { name: "Tome", category: "Presentation", icon: "📑", description: "AI storytelling and presentation platform for visual narratives and decks.", bestFor: "Story-driven decks and product presentations", howToUse: "Enter a presentation idea and build slides with AI-generated structure.", link: "https://tome.app" },
  { name: "Beautiful.ai", category: "Presentation", icon: "💼", description: "AI presentation maker that helps create polished slides quickly with smart layouts.", bestFor: "Business presentations and reports", howToUse: "Choose a deck type, edit content, and let the platform format slides automatically.", link: "https://www.beautiful.ai" },
  { name: "Canva Presentations", category: "Presentation", icon: "🖥️", description: "Presentation builder inside Canva with AI support for content and design.", bestFor: "Students, quick decks, and visual presentations", howToUse: "Choose a presentation template, generate content, and customize slides.", link: "https://www.canva.com/presentations/" },
  { name: "Decktopus", category: "Presentation", icon: "📈", description: "AI-powered presentation creator that helps generate decks with structure and design.", bestFor: "Fast presentation making", howToUse: "Enter your topic and let the tool build and style your slides.", link: "https://www.decktopus.com" },
  { name: "Durable", category: "Marketing", icon: "🏪", description: "AI website builder for small businesses with branding and marketing support.", bestFor: "Small business sites and fast launch pages", howToUse: "Describe your business and generate a website, then customize sections.", link: "https://durable.co" },
  { name: "Surfer", category: "Marketing", icon: "📡", description: "AI SEO content optimization tool for improving search-focused articles.", bestFor: "SEO writers and marketers", howToUse: "Write or paste content, then optimize it using content scoring guidance.", link: "https://surferseo.com" },
  { name: "Anyword", category: "Marketing", icon: "📢", description: "AI copywriting platform for ads, campaigns, and performance-focused content.", bestFor: "Ad copy and conversion-focused writing", howToUse: "Enter campaign details and generate variations for marketing content.", link: "https://anyword.com" },
  { name: "Ocoya", category: "Marketing", icon: "📲", description: "AI social media tool for generating content, captions, and scheduling posts.", bestFor: "Social content planning", howToUse: "Create social content, design visuals, and schedule posts from one dashboard.", link: "https://www.ocoya.com" },
  { name: "Predis.ai", category: "Marketing", icon: "📱", description: "AI tool for social media creatives, captions, and post planning.", bestFor: "Instagram and social content generation", howToUse: "Input your brand details or topic and generate ready-to-post content.", link: "https://predis.ai" }
];

// ─── STATE ──────────────────────────────────────────
let activeCategory = "All";
let compareList = []; // max 3 tools

// ─── ELEMENTS ────────────────────────────────────────
const toolsGrid = document.getElementById("toolsGrid");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");
const activeCategoryLabel = document.getElementById("activeCategory");
const toolCountEl = document.getElementById("toolCount");
const clearSearchBtn = document.getElementById("clearSearch");
const emptyState = document.getElementById("emptyState");
const chips = document.querySelectorAll(".chip");
const categoryCards = document.querySelectorAll(".cat-card");
const comparePanel = document.getElementById("comparePanel");
const cpSlots = document.getElementById("cpSlots");
const cpCount = document.getElementById("cpCount");
const compareCountBadge = document.getElementById("compareCount");
const gridViewBtn = document.getElementById("gridView");
const listViewBtn = document.getElementById("listView");

// ─── INIT ────────────────────────────────────────────
toolCountEl.textContent = tools.length;
updateCatCounts();
renderTools(tools);
initRotatingWord();

// ─── ROTATING WORD ────────────────────────────────────
function initRotatingWord() {
  const words = ["coding", "research", "writing", "design", "videos", "anything"];
  let i = 0;
  const el = document.getElementById("rotatingWord");
  if (!el) return;
  setInterval(() => {
    i = (i + 1) % words.length;
    el.style.animation = "none";
    el.offsetHeight; // force reflow
    el.style.animation = "";
    el.textContent = words[i];
  }, 2200);
}

// ─── CATEGORY COUNTS ──────────────────────────────────
function updateCatCounts() {
  const allCountEl = document.querySelector('[data-cat="All"]');
  if (allCountEl) allCountEl.textContent = tools.length;

  document.querySelectorAll('.cat-count[data-cat]').forEach(el => {
    const cat = el.dataset.cat;
    if (cat === "All") return;
    const count = tools.filter(t => t.category === cat).length;
    el.textContent = count;
  });
}

// ─── RENDER TOOLS ────────────────────────────────────
function renderTools(list) {
  toolsGrid.innerHTML = "";

  if (!list.length) {
    emptyState.classList.remove("hidden");
    resultsCount.textContent = "0 tools";
    activeCategoryLabel.textContent = activeCategory;
    return;
  }

  emptyState.classList.add("hidden");

  list.forEach((tool, idx) => {
    const card = document.createElement("article");
    card.className = "tool-card";
    card.style.animationDelay = `${Math.min(idx * 30, 300)}ms`;
    if (compareList.find(t => t.name === tool.name)) {
      card.classList.add("in-compare");
    }

    const isAdded = compareList.find(t => t.name === tool.name);

    card.innerHTML = `
      <div class="tool-head">
        <div class="tool-icon">${tool.icon}</div>
        <span class="tool-cat-badge">${tool.category}</span>
      </div>
      <div class="tool-body">
        <h3 class="tool-name">${tool.name}</h3>
        <p class="tool-desc">${tool.description}</p>
      </div>
      <div class="tool-meta">
        <div class="meta-row">
          <span class="meta-label">Best for</span>
          <span class="meta-val">${tool.bestFor}</span>
        </div>
        <div class="meta-row">
          <span class="meta-label">How to use</span>
          <span class="meta-val">${tool.howToUse}</span>
        </div>
      </div>
      <div class="tool-footer">
        <a class="visit-btn" href="${tool.link}" target="_blank" rel="noopener noreferrer">Visit →</a>
        <button class="compare-btn ${isAdded ? 'added' : ''}" data-name="${tool.name}">
          ${isAdded ? '✓ Added' : '+ Compare'}
        </button>
      </div>
    `;

    card.querySelector(".compare-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCompare(tool);
    });

    toolsGrid.appendChild(card);
  });

  resultsCount.textContent = `${list.length} tool${list.length !== 1 ? "s" : ""}`;
  activeCategoryLabel.textContent = activeCategory;
}

// ─── FILTER ──────────────────────────────────────────
function filterTools() {
  const q = searchInput.value.trim().toLowerCase();
  const filtered = tools.filter(t => {
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    const matchSearch = !q ||
      t.name.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.bestFor.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
  renderTools(filtered);
}

// ─── ACTIVE BUTTONS ──────────────────────────────────
function updateActiveButtons(cat) {
  chips.forEach(c => c.classList.toggle("active", c.dataset.category === cat));
  categoryCards.forEach(c => c.classList.toggle("active", c.dataset.category === cat));
}

// ─── EVENTS ──────────────────────────────────────────
chips.forEach(chip => {
  chip.addEventListener("click", () => {
    activeCategory = chip.dataset.category;
    updateActiveButtons(activeCategory);
    filterTools();
  });
});

categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    activeCategory = card.dataset.category;
    updateActiveButtons(activeCategory);
    filterTools();
    document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
  });
});

searchInput.addEventListener("input", filterTools);

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "All";
  updateActiveButtons("All");
  filterTools();
});

gridViewBtn.addEventListener("click", () => {
  toolsGrid.classList.remove("list-view");
  gridViewBtn.classList.add("active");
  listViewBtn.classList.remove("active");
});

listViewBtn.addEventListener("click", () => {
  toolsGrid.classList.add("list-view");
  listViewBtn.classList.add("active");
  gridViewBtn.classList.remove("active");
});

// ─── COMPARE LOGIC ───────────────────────────────────
function toggleCompare(tool) {
  const idx = compareList.findIndex(t => t.name === tool.name);
  if (idx !== -1) {
    compareList.splice(idx, 1);
  } else {
    if (compareList.length >= 3) {
      shakePanel();
      return;
    }
    compareList.push(tool);
  }
  updateCompareUI();
  filterTools(); // re-render cards to update button states
}

function updateCompareUI() {
  const count = compareList.length;
  compareCountBadge.textContent = count;
  cpCount.textContent = count;

  // Update floating panel
  if (count > 0) {
    comparePanel.classList.remove("hidden");
    renderCpSlots();
  } else {
    comparePanel.classList.add("hidden");
  }

  // Update compare section
  renderCompareTable();
}

function renderCpSlots() {
  cpSlots.innerHTML = "";
  compareList.forEach(tool => {
    const slot = document.createElement("div");
    slot.className = "cp-slot";
    slot.innerHTML = `
      <span>${tool.icon}</span>
      <span class="cp-slot-name">${tool.name}</span>
      <button class="cp-remove" data-name="${tool.name}" title="Remove">✕</button>
    `;
    slot.querySelector(".cp-remove").addEventListener("click", () => {
      toggleCompare(tool);
    });
    cpSlots.appendChild(slot);
  });
}

function renderCompareTable() {
  const area = document.getElementById("compareArea");

  if (compareList.length === 0) {
    area.innerHTML = `
      <div class="compare-hint-icon">⚖️</div>
      <p>Add tools to compare using the <strong>+ Compare</strong> button on tool cards above.</p>
    `;
    area.className = "compare-empty-hint";
    return;
  }

  area.className = "";

  const rows = [
    { key: "category", label: "Category" },
    { key: "description", label: "Description" },
    { key: "bestFor", label: "Best For" },
    { key: "howToUse", label: "How to Use" },
    { key: "link", label: "Official Link" },
  ];

  let html = `<div class="compare-table-wrap"><table class="compare-table">
    <thead><tr>
      <th style="width:130px">Feature</th>
      ${compareList.map(t => `
        <th class="tool-col">
          <button class="remove-col-btn" data-name="${t.name}" title="Remove ${t.name}">✕</button>
          <span class="th-icon">${t.icon}</span>
          <div class="th-name">${t.name}</div>
          <div class="th-cat">${t.category}</div>
        </th>
      `).join('')}
    </tr></thead>
    <tbody>
      ${rows.map(row => `
        <tr>
          <td class="row-label">${row.label}</td>
          ${compareList.map(t => {
            if (row.key === "link") {
              return `<td><a class="compare-link" href="${t.link}" target="_blank" rel="noopener">Visit ${t.name} →</a></td>`;
            }
            return `<td>${t[row.key]}</td>`;
          }).join('')}
        </tr>
      `).join('')}
    </tbody>
  </table></div>
  <button class="clear-compare-btn" onclick="clearCompare()">✕ Clear comparison</button>`;

  area.innerHTML = html;

  // Attach remove column buttons
  area.querySelectorAll(".remove-col-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tool = compareList.find(t => t.name === btn.dataset.name);
      if (tool) toggleCompare(tool);
    });
  });
}

function clearCompare() {
  compareList = [];
  updateCompareUI();
  filterTools();
}

window.clearCompare = clearCompare;

function shakePanel() {
  comparePanel.style.animation = "none";
  comparePanel.offsetHeight;
  comparePanel.style.animation = "shake .4s ease";
}

// Add shake keyframes dynamically
const style = document.createElement("style");
style.textContent = `
@keyframes shake {
  0%,100%{transform:translateX(-50%)}
  20%{transform:translateX(calc(-50% - 8px))}
  40%{transform:translateX(calc(-50% + 8px))}
  60%{transform:translateX(calc(-50% - 6px))}
  80%{transform:translateX(calc(-50% + 6px))}
}`;
document.head.appendChild(style);

// ─── TOGGLE PANEL ─────────────────────────────────────
function toggleComparePanel() {
  if (compareList.length === 0) {
    document.getElementById("tools").scrollIntoView({ behavior: "smooth" });
    return;
  }
  comparePanel.classList.toggle("hidden");
}
window.toggleComparePanel = toggleComparePanel;

function scrollToCompare() {
  document.getElementById("compare-section").scrollIntoView({ behavior: "smooth" });
  comparePanel.classList.add("hidden");
}
window.scrollToCompare = scrollToCompare;

// ─── INITIAL STATE ────────────────────────────────────
updateActiveButtons("All");