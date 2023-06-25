# ux-prototype

TL;DR: we decided to discontinue using Figma for UX/UI prototyping and specifications. We now do it in code, in this repo, using TailwindUI. Congratulations, you can now be a "UX Developer"!

## A brief explanation / why this repo exists

To be successful, the actors contributing to the OpenUnited platform need to be able to generate, validate and ship new ideas and improvements to production safely, together, rapidly and at low cost/effort. 

Experience tells us that at this stage of OpenUnited, having fine-grained specialisation in disciplines and tooling doesn't help us rapidly deliver value - for us, it generates complexity and friction. In our case, we saw for example: UX Designer needs detailed input from a founder, hands over Figma designs to a Frontend Developer who needs GraphQL endpoints, GraphQL endpoints must be built by a Backend Developer, Backend Developer needs guidance on the data model changes from a founder. This chain created unnecessary complexity, lost time and restricted our ability to get things done and scale.

We have the goal to enable value chains of specialists through OpenUnited and our product management framework over time, however we realised that fine-grained responsibilities are too ambitious and complex for our own situation for now, especially as we are discovering how to do effective asychronous product management at scale with ad-hoc contributors from around the globe, and also figuring out how to systemise that, with no outside funding and limited time. Even when value chains of hyper specialised contributors are proven using OpenUnited and our product management framework, we intend to keep working with the model of UX Designers for our own product.

## What we are doing

We are simplyfing things, whilst in some ways expecting more of UX/Web Designers, such that they become UX Developers. We are changing the way we prototype and express our target UX in html/css with the help of a component library - TailwindUI. 

We now expect that UX Developers deliver html/css in this repo, and therefore understand data in json files, a limited amount of python/flask, and git.

The goal is to streamline and simplify the value chain through which ideas flow, to become valuable to customers. Separate to this repo, we are also simplifying the tech stack - removing ReactJS and the GraphQL layer, and moving to a single stack and repo.

It is perhaps unconventional or even controversial these days to ask those responsible for UX to deliver html/css or to understand git, however that is what we are doing. Figma, pen/paper and other tools may be used upstream for thinking if necessary, but we prototype and reason about different UX/UI options in this repo and we call the related role: UX Developer.

We expect that by doing our UX/UI prototyping/specification this way, and simplifying the platform's codebase in parallel, we can ultimately take friction, complexity and dependencies out of the value chain, which will help to improve the chances of OpenUnited to deliver sufficient value to realise long-term success.

## The Goals of this repo

1) **An easy, fast and unambiguous way to explore UX flows and designs** for the OpenUnited platform. Implication: we have UX Developers that communicate UX prototyping in html/css using a component library. 

2) **Simple and precise requirements for full-stack developers, with work in this repo acting as an efficient and effective "handover"** from UX Developer to a Full-stack Developer (Django). Implications: the deliverable format for UX Developers is html/css in this repo in jinja templates, not Figma or other design files. UX Developers must therefore have a basic understanding of html, css, data in json format, flask/python, and git to deliver their work in this repo.

3) **Co-create concrete data concepts, flows and html templates as part of the UX/Web design process** with these being leveraged in the production codebase. Implication: often, the work in this repo can be enriched and tweaked to be useful in production - this helps to accelerate and avoid issues. For example, a template in jinja format in this prototyping repo may be extremely similar to the one use in production. Data models used in this repo are also likely to be extremely similar to production, and vice versa.
