---
title: Old Portfolio Website
date: 2020-01-19
description: A study in basic HTML and CSS.
pageKey: project
liveUrl: https://nguyenmichael.dev/old-portfolio
repoUrl: https://github.com/nguyen-michael/old-portfolio
ogImage: "./og-image.png"
tags: ["portfolio", "html", "css", "basics"]
---

## Motivation

I built this late 2019-early 2020 as a way to really reacquaint myself with HTML and CSS and dig deep into the fundamentals. I believe that fundamentals are always worth revisiting to reinforce knowledge and solidify understanding.

It was an adventure and I learned a good amount of HTML5 and CSS3 tricks and features along the way.

### Favorites

Features and tricks I found handy include:

* Semantic Elements
  * HTML elements with names such as Article, Nav, Section and Footer really help with the readability of the markup.
  ```html
  <section id="main">
    <h1>Hi! I'm <span>Michael Nguyen</span>.</h1>
    <p>Full-stack web developer.</p>
    <div>
        <a href="#about"><button>↓</button></a>
    </div>
  </section>
  <nav id="nav">
        <ul>
          <li><a href="#about">About</a></li>
          ...
        </ul>
  </nav>
  ```
* CSS Variables
  * Setting some basic theme colors then invoking them in the styling allows easy swap of theme and colors!
  ```css
  :root {
    --main-text-color: #545849;
    --darker-text-color: #2c2b1c;
    --lighter-color: #fcfeed;
    --lighter-color-rgba: rgba(252, 254, 237, 0.97);
    --xlight-color: #fefbf1;
    --red-accent-color: #6a4d47;
    --body-font: "Amiko", sans-serif;
    --heading-font: "Belgrano", serif;
  }
  body, html {
    background-color: var(--lighter-color);
    ...
  ```
* Styling the scrollbar
  * I didn't even consider the possibility until I saw a different looking scroll bar on another website. A quick search shows the possibility on W3C Schools

  ```css
  ...
  ::-webkit-scrollbar-track {
  background: var(--lighter-color);
  }

  ::-webkit-scrollbar-thumb {
  background: var(--main-text-color);
  border-radius: 1px;
  }
  ...
  ```


