---
icon: question
cover: >-
  ../.gitbook/assets/beginner_confused_novice_scratching_head_reading_d_e5648422-cabd-41aa-b491-d803016041ce_0.png
coverY: 117
layout:
  cover:
    visible: true
    size: full
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# What's a PList/SBF

## Short Answer

It's basically a **super compact, structured way to describe a character for an AI chatbot**, like building a “character sheet” or "profile" for your character.

## Long Answer

**PList** <mark style="background-color:red;">used to</mark> stand for **Python List,** but this method of organizing information has greatly deviated and evolved past what you typically expect to see in a Python List. Let's compare and contrast.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td>mylist = ["apple", "banana", "cherry"]</td><td><a href="../.gitbook/assets/prose (2).png">prose (2).png</a></td></tr><tr><td>[Items: apples, bananas, carrots; Notes: organic preferred]</td><td><a href="../.gitbook/assets/prose (3).png">prose (3).png</a></td></tr></tbody></table>

**SBF** stands for Square Bracket Format.

So instead of writing our character "Joe Bob" in **natural language/prose** like this and using up **149 tokens**:

> Joe Bob had a face that invited trust and a smile that felt like a warm handshake. His voice was easy, casual, and always ready with a dad joke. <mark style="color:blue;">“You hear about the guy hit with a soda can? Don’t worry, it was a soft drink,”</mark> he’d quip, pausing just long enough for a groan before laughing with you, as if reminding you to lighten up.\
> \
> Always helpful without a trace of pretense, Joe Bob fixed faucets, offered rides, or left soup on a neighbor’s porch without needing thanks. <mark style="color:blue;">“Life’s tough,”</mark> he’d say with a grin, <mark style="color:blue;">“but it’s pretty funny if you look at it right.”</mark> And when he was around, it was hard not to agree.

We can reformat it to this and only use **93 tokens**:

> \[<mark style="color:orange;">Name:</mark> Joe Bob; <mark style="color:orange;">Role:</mark> community helper(jack-of-all-trades, morale booster); <mark style="color:orange;">Personality:</mark> friendly(approachable, selfless), lighthearted(jokes, optimism); <mark style="color:orange;">Speech:</mark> casual(warm, comforting), peppered with dad jokes(habit, lifts spirits); <mark style="color:orange;">Quirks:</mark> tells dad jokes(often, eases tension), fixes things for people(instinct, feels useful); <mark style="color:orange;">Psychology:</mark> warmth(expressed through humor, rooted in desire to connect)]

&#x20;It includes things like:

* The character's basic info
* Their personality traits
* How they talk and behave
* How they interact with users
* Their background story

<figure><img src="../.gitbook/assets/beginner_confused_novice_scratching_head_reading_d_e5648422-cabd-41aa-b491-d803016041ce_0.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**The goal is to help the AI stay consistent in portraying the character while using fewer tokens!**

Some creators like to use a natural, storytelling style for character descriptions instead of formats like PList/SBF or JED+. This is especially true for famous characters like Harry Potter or Satoru Gojo and common character types like tsundere or yandere.\
\
Most Large Language Models (LLMs) and Natural Language Processors (NLPs) already know these characters and types. Because of this, they can usually understand and respond to references without detailed descriptions.
{% endhint %}
