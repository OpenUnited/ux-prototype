# ux-prototype

TL;DR: we decided to discontinue using Figma for UX/UI prototyping and specifications. We now do it in code, in this repo, using TailwindUI. Congratulations, you can now be a "UX Developer"!

## A brief explanation / why this repo exists

For OpenUnited to be successful, the actors contributing to the OpenUnited platform need to be able to generate, validate and ship new ideas and improvements to production safely, together, rapidly and with low cost/effort. We seek to minimise friction in this value chain, or in terms that would make a management consultant proud, _to minimise our value chain's coefficient of friction_. The goal of UX Developers, and this repo, is to help reduce our "value friction" and to get more useful stuff done per unit of effort/time. 

Experience tells us that in this stage of the OpenUnited platform's development, having the theoretically ideal specialisation in disciplines and tooling doesn't help us to rapidly deliver value on the whole. In our case, we saw for example: Product Manager and/or UX Designer needs detailed input from a founder, UX Designer hands over Figma designs to a Frontend Developer who needs GraphQL endpoints and is working in a separate and complex front-end tech stach and repo, GraphQL endpoints must be built by a Backend Developer who is working in a separate tech stack / separate repo, Backend Developer needs guidance on the data model changes from a founder, guidance is provided and the Backend Developer has a way forward, but the Frontend Developer is now busy elsewhere, then the frontend stack needs major updates, things are resolved, something is released but there are bugs due to the relatively high tech complexity and lack of end-to-end ownership etc.

The chain explained above was intended to empower specialists to create the best things together. In practice however we saw that it created unnecessary complexity, lost time and restricted our ability to get things done and so on. Our goal is to change this so that: user research etc. is done, target UX is prototyped and specified in this repo as code using TailwindUI by a UX Developer, a Full-stack Python/Django Developer can implement things end-to-end and even re-use assets from this repo (htmls/css/templates, data models etc). This means one Full-stack Developer can take something into production, and we explore and specify "target UX as Code". Another obvious goal that is implied is that we speak more to end customers, but that is a separate topic. The simplicity and efficiency gains of having the target UX delivered as code, a single developer working in a [single simple codebase/repo](https://github.com/OpenUnited/platform) and able to take things to production (without [this stuff](https://www.youtube.com/watch?v=Uo3cL4nrGOk)) are expected to be enormous.

It's worth stating that with OpenUnited and our product management framework, we have the goal to enable value chains of specialists to collaborate. That remains our aim, however, for the OpenUnited platform itself we think that doing the things outlined above to reduce "value friction" is smart. It's worth stating that even when value chains of hyper-specialised contributors are proven using OpenUnited and our product management framework, we intend to keep working with the model of UX Designers for our own platform.

## What we are doing

We are simplyfing things, whilst in some ways expecting more of UX/Web Designers, such that they become "UX Developers". We are changing the way we prototype and express our target UX in html/css with the help of a component library - TailwindUI. We are going to express our "target UX as Code".

We now expect that UX Developers deliver html/css in this repo, and therefore understand data in json files, a limited amount of python/flask, and git. This might be a change for some, but learning is good for you and these technologies are not very complicated.

Our objective is to streamline and simplify the value chain through which ideas flow, to become valuable to customers. Separate to this repo, we are also simplifying the tech stack - removing ReactJS and the GraphQL layer, and moving to a single stack and repo.

It is perhaps unconventional or even controversial these days to ask those responsible for UX to deliver html/css or to understand git, however that is what we are doing. Figma, pen/paper and other tools may be used upstream for thinking if necessary, but we prototype and reason about different UX/UI options in this repo and we call the related role: UX Developer.

We expect that by doing our UX/UI prototyping/specification this way, and simplifying the platform's codebase in parallel, we can ultimately take friction, complexity and dependencies out of the value chain, which will help to improve the chances of OpenUnited to deliver sufficient value to realise long-term success.

## The Goals of this repo

1) **An easy, fast and unambiguous way to explore UX flows and designs** for the OpenUnited platform. Implication: we have UX Developers that communicate UX prototyping in html/css using a component library. 

2) **Simple and precise requirements for full-stack developers, with work in this repo acting as an efficient and effective "handover"** from UX Developer to a Full-stack Developer (Django). Implications: the deliverable format for UX Developers is html/css in this repo in jinja templates, not Figma or other design files. UX Developers must therefore have a basic understanding of html, css, data in json format, flask/python, and git to deliver their work in this repo.

3) **Co-create concrete data concepts, flows and html templates as part of the UX/Web design process** with these being leveraged in the production codebase. Implication: often, the work in this repo can be enriched and tweaked to be useful in the OpenUnited platform - this helps to accelerate and avoid issues. For example, a template in jinja format in this prototyping repo may be extremely similar to the one use in production. Data models used in this repo are also likely to be extremely similar to production, and vice versa.
