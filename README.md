# Unsent: The Micro-Confession Sprint

[![make.fun badge](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/Nvlfbrynsyah/unsent-confession-sprint/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/Nvlfbrynsyah/unsent-confession-sprint/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

A single micro-confession in the two-part shape of a message that was typed and never sent: an addressee line, then one unbroken line that says the thing. No greeting, no sign-off, no explanation — the kind of note that stays in drafts because sending it would mean admitting it was already true.

`main.ts` holds the confession as a plain string constant and writes it to `$OUTPUT_DIR/entry.txt` (falling back to `/output/entry.txt` when `OUTPUT_DIR` is unset). Output is deterministic — the same two lines, byte for byte, on every run — so it can be graded as-is.

## Run it

```
node main.ts
```
