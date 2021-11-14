# Front end tips

Compilation of tricks, tips, tools and good practices for your day to day as a **front-end developer**.

## Tips categories

- HTML
- CSS
- JavaScript
- TypeScript
- Accessibility
- React
- Angular
- git
- DevTools
- more...

## [Contributing](CONTRIBUTING.md)

There are several ways to collaborate on this project

### 1. Submit your tip

To add a new tip to the list, follow these steps

- Fork the [repository](https://github.com/gpolanco/forfrontend.tips)
- Create a new file in the [tips] folder.
- Use [this template](TIPS_TEMPLATE.md) as a guide
- Use h2 (##) for subtitles
- Use ` ``` ` for code blocks and add the language. e.g `js`, `ts`, `jsx`, `tsx`
- Create a new file in the tips folder. e.g `what-is-a-spread-operator.md`
- The title must match the name of the file `What is a spread operator`
  Once your tip is ready, [issue a pull request](https://help.github.com/articles/using-pull-requests/) with this [PR template](PULL_REQUEST_TEMPLATE.md).

### 2. Review or fix errors

You can collaborate with the correction or revision of possible errors in the code or in the content of the tips.
Any help is welcome 💪!

## Author template

If you want to have a profile as an author add a new file in data / [your-name] .md

```md
---
name: Geordano Polanco
avatar: /static/images/avatar.png
occupation: Front end developer
email: gpolanco.dev@gmail.com
twitter: https://twitter.com/gpolanco_dev
linkedin: https://www.linkedin.com
github: https://github.com/gpolanco
---

YOUR DESCRIPTION
```

## Running it on local

1. Clone project

```bash
git clone https://github.com/forfrontend/forfrontend.tips.git
```

2. Install dependencies

```bash
cd forfrontend.tips
npm install
```

3. Run it on the local

```bash
npm run dev
```

Open the url shown in the console to see the result. By default it is `http://localhost:3000`

**Run in other port**

```bash
npm run dev -- -p 3002
```

## Developed by

It is a project developed by [_Geordano Polanco_](https://gpolanco.com) to share knowledge about front-end development. I have been based on [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) to develop the project quickly

## TODO

- [ ] Add feed link on tag page
- [ ] Add tag page description
- [ ] Create author page and author list

## License

[MIT License](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/LICENSE)
