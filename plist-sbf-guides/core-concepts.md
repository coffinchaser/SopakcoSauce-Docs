---
icon: star
cover: >-
  ../.gitbook/assets/templates_clipboard_papers_copy_paste_writing_--ar_42e3094e-839d-4c07-8c76-d703e5d4d7aa_0.png
coverY: 0
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

# Core Concepts

## Basic Rules

1. Put a space after colons
2. Don't put a space before semicolons
3. Put [descriptors](core-concepts.md#descriptors) in parentheses
4. Use commas between items in a list

## Delimiter Guide

<mark style="color:orange;">Orange text = optional fields.</mark>

<table data-full-width="false"><thead><tr><th width="154">Delimiter</th><th width="216">Format Rule</th><th>Purpose</th><th>Example</th></tr></thead><tbody><tr><td><code>[</code> and <code>]</code></td><td>Wrap entire PList; no line breaks between brackets and content</td><td>Contains all character information</td><td><code>[Name: John ... ]</code></td></tr><tr><td><code>:</code></td><td>Follow <a href="category-system.md">category name</a>, space after</td><td>Separates <a href="category-system.md">category name </a>from content</td><td><code>Name: John</code></td></tr><tr><td><code>;</code></td><td>End each category, no space before</td><td>Marks category end</td><td><code>Hobby: painting;</code></td></tr><tr><td><code>(</code> and <code>)</code></td><td>No spaces after opening or before closing, can nest</td><td>Adds/Reinforce contextual and descriptive details</td><td><code>tall(6'2")</code>, <code>nervous(childhood trauma(bullying))</code></td></tr><tr><td><code>,</code></td><td>Space after; between items</td><td>Separates list items or traits</td><td><code>Hobbies: reading, writing, art;</code></td></tr><tr><td><mark style="color:orange;">Capitalization</mark></td><td><mark style="color:orange;">Optional for categories, just keep it consistent</mark></td><td><mark style="color:orange;">Aids identification</mark></td><td><mark style="color:orange;"><code>Name:</code>, <code>Age:</code>, <code>Personality:</code></mark></td></tr></tbody></table>

<figure><img src="../.gitbook/assets/dramatic_expressions_over_dramatic_psychotic_evil__18fb0761-99e7-474c-8ea5-077812784367_1.png" alt=""><figcaption></figcaption></figure>

## Descriptors

Descriptors in PLists are **short, functional details** that clarify traits, actions, or beliefs. They're written in **parentheses** right after the main term, adding precision and **not prose**.

### **How to Write Descriptors**

#### **Basic Rules**

1. **Use parentheses `( )`** after each trait or action.
   * `voice(low)` → “voice” is the trait, “low” is the descriptor.
2. **Keep them literal and short.**
   * ✅ `smile(flat, slow)`
   * ❌ `mouth(tight like a locked vault)`
3. **Separate multiple descriptors with commas.**
   * `stance(relaxed, open, ready)`
4. **Avoid repeating the trait in the descriptor.**
   * ❌ `obsessive(obsessive, very obsessed)`
   * ✅ `aggressive(blunt, forceful)`
5. **Make descriptors useful, not decorative.**
   * **😐** `build(beefy, muscular, strong)`
   * ✅ `build(burly, dense muscle, broad shoulders)`

<figure><img src="../.gitbook/assets/coffin_chaser_stereotypical_meathead_flexing_muscles_in_a_mir_ede0a794-e5ec-42f7-b893-b9f6eeaf2fed_0.png" alt=""><figcaption></figcaption></figure>

### **Formats**

| Format                             | Example                                               |
| ---------------------------------- | ----------------------------------------------------- |
| **Trait + One Descriptor**         | `hair(wavy)`                                          |
| **Trait + Multiple Descriptors**   | `eyes(green, wide, glassy)`                           |
| **Action + Object + Descriptors**  | `studies(others, quiet, calculating, long pauses)`    |
| **Abstract Concept + Descriptors** | `belief(love is dangerous, attachment weakens focus)` |

### **Types & Examples**

| Type           | Example Descriptors                            |
| -------------- | ---------------------------------------------- |
| **Appearance** | sharp, elegant, crooked, scarred, angular      |
| **Behavior**   | evasive, obsessive, measured, restrained       |
| **Emotion**    | burning, buried, flickering, numb              |
| **Scent**      | smoke, jasmine, wet stone, rust                |
| **Speech**     | clipped, melodic, abrupt, monotonous           |
| **Sexual**     | dominant, withholding, curious, possessive     |
| **Relational** | distant, overprotective, testing, manipulative |

### Breaking Down Complex Ideas

Think of it like summarizing the purpose or effect of a detail and not the full story.

Use this approach:

1. Distill the core idea
2. Cut unnecessary backstory
   1. _Write a note to yourself to supplement any necessary details later during the writing of Example Dialogs._
3. Label the emotion or belief clearly
4. Split details across multiple fields if needed

<figure><img src="../.gitbook/assets/coffin_chaser_small_kid_holding_a_giant_hammer_--ar_11940_--r_6f94d956-006f-46ea-86c1-ba6f6f0e40df_1.png" alt=""><figcaption></figcaption></figure>

#### 1. Distill the Core Idea

Take long descriptions and turn them into **compressed, behavior-based notes**.

{% tabs %}
{% tab title="Prose" %}
> “Taylor always acted friendly in public, but privately avoided real connection. She kept people close only when it benefited her.”
{% endtab %}

{% tab title="PList" %}
```txt
relationships(surface-level, self-serving, emotionally distant)
```


{% endtab %}
{% endtabs %}

#### 2. Summarize Time Without Writing a Timeline

Don’t explain what happened year by year. Just name the **cause and effect**.

{% tabs %}
{% tab title="Prose" %}
> “He started volunteering to make up for how aimless he felt after college.”


{% endtab %}

{% tab title="PList" %}
```txt
volunteering(purpose-seeking, post-grad uncertainty)
```

Or:

```txt
motivation(avoidance of aimlessness, desire for direction)
```
{% endtab %}
{% endtabs %}

#### 3. Name the Emotion or Theme

If the idea is about beliefs or inner logic, give it a clear conceptual label.

{% tabs %}
{% tab title="Prose" %}
> “She believes success is only real if others recognize it. Without praise, she feels like a failure.”
{% endtab %}

{% tab title="PList" %}
```txt
validation(external only, tied to achievement)
```

Or:

```txt
success(dependent on praise, internally hollow)
```
{% endtab %}
{% endtabs %}

#### 4. **Split Big Ideas into Multiple Fields**

If one line starts doing too much, divide it into **backstory**, **philosophy**, and **psychology**.

**Example:**

{% tabs %}
{% tab title="Prose" %}
> Jordan was homeschooled in a rigid, perfectionist household. In college, they finally felt free but struggled to balance structure and independence. They now over-plan everything and feel guilty when they rest.
{% endtab %}

{% tab title="PList" %}
```txt
BACKSTORY: homeschooled(strict routine, high parental standards), college(first taste of freedom, overwhelmed by choice);
PHILOSOPHY: freedom requires discipline, rest must be earned;
PSYCHOLOGY: guilt tied to rest, comfort in control, avoids unstructured time;
```
{% endtab %}
{% endtabs %}

<figure><img src="../.gitbook/assets/coffin_chaser_art_student_painting_a_model_1_model_in_the_thi_6ea25841-00fb-4bfd-9cca-f6ac3a56d294_1.png" alt=""><figcaption></figcaption></figure>

**Category Prompt Table**

Use these for inspiration or just to get your brain juice flowing.

| Category       | Use Words Like…                          |
| -------------- | ---------------------------------------- |
| **Appearance** | tall, hunched, scarred, clean, worn      |
| **Behavior**   | secretive, abrupt, consistent, obsessive |
| **Emotion**    | anxious, numb, boiling, fleeting         |
| **Sensory**    | leather, sweat, dust, bleach             |
| **Speech**     | slow, cheerful, blunt, monotone          |
| **Sexual**     | repressed, confident, attentive, intense |
| **Relational** | testing, needy, isolating, guarded       |

## Markdown & AliChat

Upon testing with various 7B Q6 locally hosted models, I've found a combination of Markdown & AliChat is a safe and comparable alternative to PList.&#x20;

**Markdown**

* Easy updates
* Logical grouping
* Clear relationship mapping

**AliChat**

* Clear, structured details
* Consistent formatting
* Token efficiency

### Markdown Basic Rules

* End each category with a line break (`\n`) instead of a semicolon (`;`)
* Use `#` headings to organize sections. They’re clearer and less likely to cause errors than square brackets (`[]`)

### [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

<figure><img src="../.gitbook/assets/Markdown_Cheat_Sheet_9657d9746f.avif" alt=""><figcaption><p>Source: <a href="https://www.datacamp.com/cheat-sheet/markdown-cheat-sheet-23">https://www.datacamp.com/cheat-sheet/markdown-cheat-sheet-23</a></p></figcaption></figure>

### Markdown Templates

{% tabs %}
{% tab title="Character  Definition" %}
{% code overflow="wrap" %}
```markdown
- Name: 
- Aliases: 
- Sex: 
- Gender: 
- Age: 
- Nationality: 
- Ethnicity: 
- Species: 
- Appearance: 
- Hair: 
- Eyes: 
- Facial Features: 
- Clothes: 
- Accent: 
- Speech: 
- Personality: 
- Dynamic With {{user}}: 
- Quirks/Habits: 
- Mannerisms: 
- Occupation: 
- Relationships: 
- Backstory: 
- Likes: 
- Dislikes:
- Hobbies: 
- Kinks: 
- Behavior During Sex: 
- Penis Description: 
- Balls Description: 
- Nipples Description: 
- Breasts Description: 
- Vagina Description: 
- Anus Description: 
- Other: 
```
{% endcode %}
{% endtab %}

{% tab title="Scenario" %}
{% code overflow="wrap" %}
```markdown
# World Info
- Era: time period(specific year/era, cultural context)
- Location: place name(region, country, specific details)
- Setting: genre(subgenre, tone), world type(hidden/open supernatural, technology level)
- Factions: group1(details), group2(details), group3(details)
- Conflicts: primary conflict(details), secondary conflicts(causes, effects)
- Society: structure(hierarchy, classes), customs(traditions, taboos)
# Lore
- Species: Supernatural/space aliens/incomprehensible horror/etc
- Abilities: primary powers(limitations, requirements), secondary abilities(specifics)
- Physiology: physical traits(details), biological needs(requirements)
- Weaknesses: fatal(specific conditions), non-fatal(limitations)
- Culture: traditions(practices), social structure(hierarchies)
- Rules: restrictions(consequences), requirements(enforcement)
- Stigma: social status(prejudices, limitations)
# Context
- History: key events(timeline, impact)
- Secrets: hidden elements(implications, who knows)
```
{% endcode %}
{% endtab %}
{% endtabs %}
