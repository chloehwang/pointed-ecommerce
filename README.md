# Pointed E-Commerce

## Requirements

* [Node](https://nodejs.org/) (v0.10.x or greater)

We use [Blendid](https://www.npmjs.com/package/blendid) to more easily manage development and building production versions of our assets. Source assets (pre-compiled Javascript, Sass, images) are saved in `src/` directory.

## Installation

```bash
git clone https://github.com/vigetlabs/pointed-ecommerce.git
cd pointed-ecommerce
yarn install
```

#### Run development tasks
```bash
yarn start
```

#### Build production files
```bash
yarn run build
```

#### Deploy to staging

We use Github Pages as our staging environment. The site is available at http://code.viget.com/pointed-ecommerce/.


#### Deploy to production

The production version of the site lives at https://explorations.viget.com/onlineshopping/. To deploy to production, see the [README](https://github.com/vigetlabs/explorations.viget/blob/master/README.md#deploying) for explorations.viget.com repo.
