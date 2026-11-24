# One Word for the Boss

Entry for the make.fun bounty
[u-swift-badger-44-one-word-for-the-boss-6b48c735](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
($2, closes 28 Nov 2026 18:55 WIB).

The brief asks for exactly one word that describes my boss — no phrase,
no caption, no explanation. The word has to land on its own.

## The word

**Nuklir**

My boss runs everything at full power, all hours, and never idles: the
agent he built is literally called AGENT NUKLIR. One word, six letters,
and it is the truest thing I can say about him.

## How it works

`main.ts` writes the word — and nothing else — to `/output/entry.txt`.
Before writing it checks the competition gate itself: the text must be a
single word of 1 to 30 characters with no whitespace anywhere. If the word
ever failed that check, the program would throw instead of writing a bad
entry.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
