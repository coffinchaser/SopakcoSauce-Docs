---
icon: rectangle-history
cover: >-
  ../.gitbook/assets/19saltines_categories_book_system_organization_--ar_169_--per_58620b85-e6bf-4b87-920c-ff81c82f105a_2.png
coverY: -138
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

# Master Categories

A master category is like a label on a file folder - it tells you what's inside before you open it.

## **Basic Structure**

{% code overflow="wrap" %}
```js
[Master Category:
Cat1: detail1(desc1, desc2), detail2(desc3, desc4)
Cat2: detail3(desc5, desc6, desc7)
...]
```
{% endcode %}

{% code overflow="wrap" %}
```js
[Environmental Triggers:
Office: entering building(professional mode(straightens posture, checks schedule)), meeting room(alert state(prepares notes, observes attendees)), break room(casual mode(relaxes shoulders, engages in small talk));
Public: crowds(heightened awareness(scans exits, stays alert)), quiet spaces(relaxation(deeper breathing, thoughtful responses)), social venues(sociable mode(initiates conversations, shows interest));
Private: home office(focus mode(organizes space, minimizes distractions)), personal room(decompression(releases tension, processes day)), quiet corners(recharge mode(takes breaks, practices self-care))]
```
{% endcode %}

## **Examples**

<figure><img src="../.gitbook/assets/19saltines_man_telling_a_story_storyteller_narrator_many_empt_571f9dfe-03f6-46a1-84da-c2c800a50f0e_3.png" alt=""><figcaption></figcaption></figure>

1. Single Character:

{% code overflow="wrap" %}
```js
[Alex Reed:
Occupation: tech expert;
Personality: individualistic(unempathetic, asocial, introverted)]
```
{% endcode %}

2. Group Information:

{% code overflow="wrap" %}
```js
[Party Info:
Members: Tom, Sarah, {{user}};
Tom: fighter(sword expert);
Sarah: wizard(spell master)]
```
{% endcode %}

3. Scene Setting:

{% code overflow="wrap" %}
```js
[Crime Scene:
Location: warehouse;
Evidence: footprints, broken glass;
Present: guard, witness]
```
{% endcode %}

4. Tracking Game Status

{% code overflow="wrap" %}
```js
[Combat:
Round: 3;
Next Up: Tom, then Sarah;
Special: dark room(hard to see)]
```
{% endcode %}

5. Showing Relationships

<pre class="language-js" data-overflow="wrap"><code class="lang-js">[Team:
Leader: Alex(de facto, assumed role);
<strong>Friends: Tom and Sarah(synergetic, compensatory strengths and flaws);
</strong>Conflicts: James and Mira(difficult communication, clashing beliefs)]
</code></pre>

## **When to Use Them**

* Managing several characters
* Organizing group info
* Setting up scenes
* Showing connections

<figure><img src="../.gitbook/assets/19saltines_categories_book_system_organization_--ar_169_--per_58620b85-e6bf-4b87-920c-ff81c82f105a_2.png" alt=""><figcaption></figcaption></figure>

## Troubleshooting

| Issue            | Error                              | Correction                   | Why/Solution                                      |
| ---------------- | ---------------------------------- | ---------------------------- | ------------------------------------------------- |
| Nested confusion | `Team Alpha[`                      | `[Team: Alpha:...; Beta:...` | Add `:` between nested levels                     |
| Category bleed   | Multiple categories in one PList   | Separate PLists              | Use distinct PLists for different category groups |
| Content mixed up | Category info bleeding into others | Clear category boundaries    | Ensure each category is properly closed with `;`  |

## When to Start Fresh

* More than 3 nested levels
* Very similar categories
* Mixed information
* Unclear boundaries
