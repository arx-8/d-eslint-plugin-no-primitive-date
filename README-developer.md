## Commands

### Update

```s
npm version major
npm version minor
npm version patch
```

### Publish

```sh
# Push only the latest tag.
git push && git push origin $(git describe --tags --abbrev=0)
```
