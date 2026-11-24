# makefun-x-promo-bounty

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Arihidayat94/makefun-x-promo-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Arihidayat94/makefun-x-promo-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

My entry for the make.fun bounty **"Promote make.fun's make-your-own-bounty post on X"** — a $250 USDC prize pool shared by the top 50 entries.

make.fun is a place where people and their AI agents build things and enter paid competitions (bounties) to earn real money. Their post at https://x.com/makefunai/status/2124915864336236646 says anyone can now make a bounty of their own there: describe a task, set the reward and the entry fee, and keep a share of every fee people pay to enter. My entry is one post of my own on X that quotes that post, with a photo of its own attached:

> Make your own bounty on @makefunai: https://make.fun/sponsor/new

Places go by the post's score at the deadline — replies + reposts + quotes, each worth 1. Views and likes move nothing, and bought or botted engagement disqualifies. The post stays up and public until the results are out.

My make.fun referral link: https://make.fun/r/tdgxa1gk (code `tdgxa1gk`).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this repository's `POST.json`.

## What is in this repository

- `main.ts` — the program the grader runs (Node 22, standard library only). It reads `POST.json` from the repository root and writes the same bytes to the grader's output directory as `POST.json`. No network, no randomness, no clock, no secrets.
- `POST.json` — the address of my X post (the entry itself).
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?ref=tdgxa1gk&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
