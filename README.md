# 🎯 Project Proposal: The Minimalist

## 🧭 Title

**The Minimalist – A Distraction-Free YouTube Experience**

---

## 🚨 Problem Statement

YouTube is one of the most powerful platforms for learning, entertainment, and creativity.  
However, its interface is cluttered with **recommended videos, ads, and notifications**, which lead to **distraction and time loss**.

Users often visit YouTube for a specific purpose — such as learning — but end up consuming unrelated content.

> **Problem:** YouTube’s design prioritizes engagement over focus, reducing user productivity.

---

## 🎯 Objective

To build a **minimalistic YouTube client interface** that enables users to **focus only on the content they intend to watch**, free from algorithmic distractions.

---

## 💡 Proposed Solution

**The Minimalist** is a frontend web app powered by the **YouTube Data API v3**, designed with a **clean and focused user interface**.

The goal is to let users:

- Watch videos without recommendations or ads
- Search channels and playlists easily
- Enjoy a lightweight, distraction-free experience

---

## ✨ Key Features

1. **Channel Overview**
   - Displays essential channel details and video lists.
2. **Video Search**
   - Search by keyword, channel, or playlist using YouTube API.
3. **Video Playback**
   - Embedded player with minimal UI and caption support.
4. **Video Details**
   - Show title, upload date, and description only.
5. **Comments Section**
   - Optional visibility toggle for better focus.
6. **Subscribed Channels**
   - Simple list without thumbnails or suggestions.
7. **Popular Videos (Optional)**
   - Toggle to show trending videos only when needed.
8. **Dark/Light Mode**
   - Black & white minimalist theme.
9. **Performance**
   - Lightweight, fast, and accessible on all devices.

---

## 🧠 Tech Stack

| Layer                  | Technology                                         |
| ---------------------- | -------------------------------------------------- |
| **Frontend Framework** | React.js (or Vanilla JS for ultra-minimal version) |
| **Styling**            | Tailwind CSS (monochrome minimalist theme)         |
| **API**                | YouTube Data API v3                                |
| **Deployment**         | Vercel / Netlify                                   |

---

## 🧩 Data Source: YouTube Data API v3

The project will utilize the following **YouTube API endpoints** for core functionality:

| Endpoint         | Purpose                                      |
| ---------------- | -------------------------------------------- |
| `/activities`    | Fetch recent activity from a channel or user |
| `/channels`      | Retrieve basic channel information           |
| `/comments`      | Load or post comments under a video          |
| `/search`        | Search for videos, playlists, or channels    |
| `/subscriptions` | Get a list of subscribed channels            |
| `/playlists`     | Access playlists and their video items       |

---

## 🧍 Target Users

- Students and professionals using YouTube for learning
- Content creators managing channels distraction-free
- Users seeking mindful, minimalist digital experiences

---

## 🚀 Expected Outcomes

- Focused and intentional video watching experience
- Cleaner interface leading to better productivity
- Reduced algorithm-driven distractions

---

## 🧩 Future Enhancements

- 📝 **Notes per Video:** Built-in note-taking for learners
- 📊 **Focus Dashboard:** Watch history + time tracking
- 🤖 **AI Summaries:** Summarize video transcripts
- 📦 **Offline Mode:** Save important videos for later

---

## 🗓️ Project Timeline

| Phase   | Task                                              | Duration |
| ------- | ------------------------------------------------- | -------- |
| Phase 1 | UI/UX Design (Wireframes + Mockups)               | 1 Week   |
| Phase 2 | Core Development (Search, Playback, Channel Info) | 2 Weeks  |
| Phase 3 | API Integration & Optimization                    | 1 Week   |
| Phase 4 | Testing & Deployment                              | 1 Week   |

---

## 💥 Expected Impact

By focusing on **purpose-driven viewing**,  
**The Minimalist** redefines how users interact with YouTube —  
turning endless scrolling into **intentional watching**.

---

> 🧘 “Simplicity is the ultimate sophistication.”  
> — Leonardo da Vinci

# Diagrams

## Planning & Architecture
<img width="4349" height="3420" alt="diagram-export-04-11-2025-10_42_21" src="https://github.com/user-attachments/assets/aebd36ae-3151-42c5-8af7-1cdce916097f" />

## useYTApiCall hook
<img width="2642" height="3134" alt="diagram-export-04-11-2025-10_41_08" src="https://github.com/user-attachments/assets/0c1c30a1-c500-4663-a459-217a80810639" />

## Research & References

- [client library](https://developers.google.com/api-client-library)
