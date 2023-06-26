# ux-prototype

Congratulations, you can now be a "UX Developer"!

TL;DR: we decided to discontinue using Figma for UX/UI prototyping and specifications. We now do UX/UI prototyping and specifications as code, in this repo, using TailwindCSS and [TailwindUI](https://tailwindui.com/). 

For OpenUnited to be successful, contributors to the OpenUnited platform need to be able to generate, validate and ship new ideas and improvements to production safely, rapidly and with low cost/effort, together in a value chain. We seek to minimise friction in this total value chain of contributors.

## Getting started / how to run this app

Depending on your local environment, something like the following:

```
git clone git@github.com:OpenUnited/ux-prototype.git
cd ux-prototype
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
flask run -p 4001 --debug
```

Then navigate to: [http://localhost:4001/screen-list](http://localhost:4001/screen-list) in your browser.


Not working? Please check this [Digital Ocean Guide](https://www.digitalocean.com/community/tutorials/how-to-make-a-web-application-using-flask-in-python-3) or the [official Flask documentation](https://flask.palletsprojects.com/en/2.3.x/)


## The Goals of this repo

1) **An easy, fast and unambiguous way to explore UX flows and designs** for the OpenUnited platform. Implication: we have UX Developers that communicate UX prototyping in html/css using a component library. 

2) **Simple and precise requirements for full-stack developers, with work in this repo acting as an efficient and effective "handover"** from UX Developer to a Full-stack Developer (Django). Implications: the deliverable format for UX Developers is html/css in this repo in jinja templates, not Figma or other design files. UX Developers must therefore have a basic understanding of html, css, data in json format, flask/python, and git to deliver their work in this repo.

3) **Co-create concrete data concepts, flows and html templates as part of the UX/Web design process** with these being leveraged in the production codebase. Implication: often, the work in this repo can be enriched and tweaked to be useful in the OpenUnited platform - this helps to accelerate and avoid issues. For example, a template in jinja format in this prototyping repo may be extremely similar to the one use in production. Data models used in this repo are also likely to be extremely similar to production, and vice versa.

## UX Developer?

We are simplyfing things, whilst in some ways expecting more of UX/Web Designers, such that they become "UX Developers". We are changing the way we prototype and express our target UX. The target UX is now expressed as code, in html/css with the help of a component library - TailwindUI. In other words, from now on we have "target UX as Code".

We expect that UX Developers deliver html/css in this repo, and therefore understand data in json files, a limited amount of python/flask (jinja templates, how to parse a json file, how to run the app), and git. This might be a change for some, but learning is good for you and these technologies are not very complicated.

It is perhaps unconventional or even controversial these days to ask those responsible for UX to deliver html/css or to understand git, however that is what we are doing. Figma, pen/paper and other tools may be used upstream for thinking if necessary, but we prototype and reason about different UX/UI options in this repo and we call the related role: UX Developer.

By doing our UX/UI prototyping/specification this way, and simplifying the platform's codebase in parallel so that it becomes a single repo with a well-designed Python/Django application, we expect that we can ultimately take friction, complexity and dependencies out of the value chain, which will help to improve the chances of OpenUnited to deliver sufficient value to realise long-term success.

## Some additional explanation

Experience tells us that in this stage of the OpenUnited platform's development, having the _theoretically ideal_ specialisation in disciplines and the related specialised technology/tooling/deliverables that we originally sought, doesn't help us to rapidly deliver value across the whole chain.

In our case, we saw for example: Product Manager and/or UX Designer needs detailed input from a founder, UX Designer hands over Figma designs to a Frontend Developer who needs GraphQL endpoints and is working in a separate and complex front-end tech stack and repo, GraphQL endpoints must be built by a Backend Developer who is working in a separate tech stack / separate repo, Backend Developer needs guidance on the data model changes from a founder, guidance is provided and the Backend Developer has a way forward, but the Frontend Developer is now busy elsewhere, then the complex (overly complicated?) frontend stack needs major updates ([relevant satire](https://www.youtube.com/watch?v=Uo3cL4nrGOk)), things are eventually resolved after a lot of blocking etc, something is released but there are bugs due to lot of moving parts, and lack of end-to-end ownership etc. There are obviously multiple ways to solve this, but reducing the total complexity is our selected strategy.

Our prior model was intended to empower specialists to create the best things together. In practice however we saw that this set of "optimal in isolation" things created unnecessary complexity, lost time, and restricted our ability to get things done in the context of the total chain. Our goal is to simplify, so that we optimise the value chain, not each part in isolation.

The new flow is that  user research is done, **target UX is prototyped and specified in this repo as code** using TailwindCSS / TailwindUI by a UX Developer, a Full-stack Python/Django Developer can implement things end-to-end and even re-use assets from this repo (htmls/css/templates, data models etc). This means that once the target UX is clear, a single Full-stack Developer can take something into production and re-use work done in the UX phase.

It's worth stating that with OpenUnited and our product management framework, we still have the goal to enable value chains of specialists that collaborate on products and challenges. All things considered however, we think that reducing "value friction" in the OpenUnited platform iteself, is prudent. Even when value chains of hyper-specialised contributors are proven using OpenUnited and our product management framework, we intend to keep working with the model of UX Developers for the OpenUnited platform.
