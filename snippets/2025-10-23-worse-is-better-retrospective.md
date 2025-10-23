---
slug: worse-is-better-retrospective
title: Worse Is Better Retrospective
authors: [josh]
tags: [programming]
---

I have just finished reading "the abridged trilogy" of worse is better, a fascinating series of essays about software.

The Rise of Worse is Better[^rise], written by Richard P. Gabriel, is comparing a "worse" (essentially fast) and "good" approach, as it applies to software, through the lens of C + Unix and Lisp. Worse is described as "simplicity first" and good is essentially "correctness over simplicity."

<!-- truncate -->

Worse is Worse[^worse] is a rebuttal to Worse is Better from the Richard Gabriel going by a pseudonym. He states that the premise of worse is better is flawed. He explains how Unix really isn't bad, and that "aiming" for worse is better is dumb. You wouldn't aim for worse, you aim for good and make compromises. Worse is better teaches the wrong lesson."

Worse is better[^retrospective] is the retrospective by the author, Richard P. Gabriel, about the whole worse is better debate. It provides a good overview/history breakdown. Richard Gabriel ends saying that he still can't really decide, but ends on the point: **"The classic essay on "worse is better" is either misunderstood or wrong."**

The original worse is better excerpt is a good read and brings up valid points. Is it better to ship something, or ship something good? Of course, these are the extremes, but I think talking in these extremes is better than diving into the gray area (the harder, "better" approach (worse is better)).

So when is worse better? 

As someone who has worked on but not shipped a much software, I have to admit worse is better for some cases. A half finished project is worse than a half-baked one. So if you only the time (or knowledge/skills) for worse, worse is better.

Economically, worse is well represented by the modern VC "blitzscaling" and "move fast and break things" approaches. It's better to spread the "virus" now and patch things up later. There's still room for the "good" approach, but for app startups the conclusion seems to be that worse is better.

The modern best modern comparison for worse-is-better is TypeScript and Rust. JavaScript was rushed out, but has spread like a virus and received extremely wide adoption. [Bun](https://github.com/oven-sh/bun) and The [TypeScript compiler Go rewrite](https://github.com/microsoft/typescript-go) are both examples of patching "flaws" in attempt to make it "good" (faster).

Rust is different. The Rust language is quite committed to backwards compatibility and it seems unlikely significant changes will be made to the language. it's a hard language to write, but it is extremely performant and code written in Rust is made to last. Choosing Rust for a project will mean a longer development timeline, but better performance.

I personally use VSCode. I am aware of Zed and could switch over, but I really don't think I will. Why? Because It's been out, I got used to it, and now most of the programming community has centralized around it. There are many extensions for it and now multiple forks of VSCodium. Is Zed better? I can't say for sure but it's more likely I stick with VSCode or end up using a "patched" version of it like Cursor.

So in conclusion, **worse is better**.

[^rise]: [The Rise of Worse Is Better](https://www.dreamsongs.com/RiseOfWorseIsBetter.html)
[^worse]: [Worse Is Worse](https://www.dreamsongs.com/Files/worse-is-worse.pdf)
[^retrospective]: [Worse Is Better](https://www.dreamsongs.com/WorseIsBetter.html)