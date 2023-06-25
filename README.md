# ux-prototype

TL;DR: we decided to discontinue using Figma for UX/UI prototyping and specifications. We now do it in code, in this repo, using TailwindUI.

## A brief explanation / why this repo exists

To be successful, we need actors contributing to the OpenUnited platform to be able to evolve and ship new ideas and improvements to production safely, together, rapidly and at low cost/effort. 

Experience tells us that at this stage of OpenUnited, having multiple specialised disciplines and tooling doesn't help us rapidly deliver value. In our case, expecting a UX Designer to hand over Figma designs to a Frontend Developer who needs Graphql endpoints that need to be built by a Backend Developer, who needs guidance on the data model changes etc. creates unnecessary complexity and lost time. This chain is hard enough to do in a company with full-time employees that know each other, let alone when we are building a new way to do effective asychronous product management at scale with ad-hoc contributors from around the globe, and also figuring out how to systemise that, with no outside funding.

Figma is amazing, however I (Adrian) believe that OpenUnited needs something other than Figma for UX/UI specifications. Overall (not just UX), the hand-overs across product managers/UX Designers/frontenders/backenders/founders were causing the need for too much involvement of the founders, to ship anything. At this stage, to get an initiative to really move, I personally had to make rough UX designs, and create ER Diagrams, and more. My co-founder and I then had to do all the testing, and we found bugs with responsibilities breaking across multiple layers of work and tech complexity. This is too difficult and too slow.

## What we are doing

We are therefore simplyfing things, whilst in some ways expecting more of UX/Web Designers.

We now expect that UX/Web Designers deliver html/css and understand data in json files and git. We are also moving away from a separate ReactJS app/repo towards a more classic Django SSR backend.

We are changing the way we prototype and express our target UX in html/css with the help of a component library - TailwindUI.  We are also simplifying the codebase and moving to a single repo and server-side rendered views in Django. The goal is to streamline and simplify the value chain that ideas must to through to be shipped. We are also simplifying the tech stack - removing ReactJS and the GraphQL layer, and moving to a single stack and repo.

It is perhaps unconventional or even controversial these days to ask UX/Web Designers to deliver html/css or to understand git, however that is what we are doing. Figma, pen/paper and other tools may be used upstream for thinking if necessary, but we prototype and reason about different UX/UI options in this repo.

We expect that by doing our UX/UI prototyping/specification this way, and simplifying the platform's codebase, we can ultimately take friction, complexity and dependencies out of the value chain, which will help to improve the chances of OpenUnited to deliver sufficient value to realise long-term success.

## The Goals of this repo

1) **An easy, fast and unambiguous way to explore UX flows and designs** for the OpenUnited platform. Implication: we communicate UX prototyping in html/css using a component library. 

2) **Simple and precise requirements for full-stack developers, with work in this repo acting as an efficient and effective "handover"** from a UX/Web designer to a full-stack developer. Implications: the deliverable for UX/web designers is html/css in this repo in jinja templates, not figma for other design files. UX/web designers must therefore have a basic understanding of html, css, data in json format, flask/python, and git to deliver their work in this repo.
     
3) **Co-create concrete data concepts, flows and html templates as part of the UX/Web design process** with these being leveraged in the production codebase. Implication: often, the work in this repo can be enriched and tweaked to be useful in production - this helps to accelerate and avoid issues.
