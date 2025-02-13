# pdf-download-test

Testing bun's `build --compile` functionality.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

To generate an executable and run:

```bash
bun build ./index.ts --compile --outfile some-executable-path
./some-executable-path --text "Text you want to display" --outfile "some-file.pdf"
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
