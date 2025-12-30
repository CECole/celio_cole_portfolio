<h1 align="center">
    Tai Le's Portfolio
</h1>
<p align="center">
A portfolio web app shows my mini projects
</p>
View online [Link](https://tai.vnpsc.com).

![Tai Le's Portfolio](fe/public/images/gallery/project-06.png)

## Table of Contents

- [Required](#required)
- [Installation](#installation)

## Required

- Next.js v15
- Node.js v18.17+

## Installation

**1. Clone the repository**

```
git clone https://github.com/astropop/my-magic-portfolio.git
```

**2. Install dependencies**

```
npm install
```

**3. Edit config**

```
fe/src/resources/once-ui.config.js
```

**4. Edit content**

```
fe/src/resources/content.js
```

**5. Run dev server**

```
npm run dev
```

**6. Create blog posts / projects**

```
Add a new .mdx file to fe/src/app/blog/posts or fe/src/app/work/projects
```

**7. For using Github action workflow**

```
.github\workflows\deploy-docker-compose.yml
```

Update

- `secrets.ONLINE_HOST` : Your IP's server
- `secrets.ONLINE_USERNAME` : User of your server
- `secrets.ONLINE_SSH_PRIVATE_KEY` : SSH private key is created following [Github's guideline](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
- `secrets.ONLINE_PATH_PROJECT` : Folder where is stored the source code on your server.

## Special Thanks

> - Developers : Me (Tai Le)
> - Source code: [Lorant One's Magic Portfolio](https://github.com/once-ui-system/magic-portfolio)
