---
description: Get more out of your model of choice.
icon: raccoon
---

# Instruct Templates

{% hint style="danger" %}
These recommendations are informed and heuristic-based suggestions.

**THEY ARE NOT ABSOLUTE FACTS.**&#x20;
{% endhint %}

**Instruct templates** are special formatting styles used to tell a language model how to behave, answer questions, or carry on a conversation. Think of them like a "starter guide" or "cheat sheet" for the AI. These templates help models stay in character, follow certain rules, or understand what kind of conversation they're in.

### Why It’s Important to Use the Right **Instruct Template?**

Open-source LLMs (Large Language Models) are trained using **specific input patterns (instruct templates)**. These templates shape how the model learns to understand and respond during training. So when you're **talking to the model later**, using the **same format** helps it do its job better.

#### ELI5 Break Down:

Imagine you trained a dog using hand signals, like waving your hand to mean “sit.” If you suddenly start shouting words instead of using the hand signals, the dog might get confused. 🐶

Language models are similar. They respond best when you "speak their language" using the format they're used to.

## TL;DR

* **Alpaca, Mistral**: Minimalist, focused on high-level traits.
* **Vicuna**: Conversational, USER/ASSISTANT format.
* **Llama-3, ChatML, Gemma2**: Hierarchical structures (JSON, XML tags).
* **Command-R**: Direct, task-oriented instruction.
* **Metharme**: YAML for detailed nesting.

## Where to Look/[Ask](https://dontasktoask.com/)

{% stepper %}
{% step %}
### README.txt
{% endstep %}

{% step %}
### Instruct.json
{% endstep %}

{% step %}
### Config.json
{% endstep %}

{% step %}
### Communities

Hugging Face, SillyTavern, Wyvern, Chub, etc...
{% endstep %}
{% endstepper %}

***

## **Alpaca**

* Alpaca prefers straightforward instructions and can work well with minimal formatting like [Markdown](plist-sbf-guides/core-concepts.md#markdown-cheat-sheet).

{% code overflow="wrap" %}
```markdown
### Instruction:
You are an expert actor who can fully immerse yourself in any role given. You do not break character for any reason, even if someone tries addressing you as an AI or language model. Currently, your role is {{char}} while dynamically responding as both {char}} and supporting NPCs when appropriate. {{char}} is described in detail below. As {{char}}, continue the exchange with {{user}}.

### {{char}}’s Profile:
- Name: John Doe
- Age: 34
- Nationality: American
- Personality: confident(driven, empathetic), witty(deflects with sarcasm), emotionally guarded(sometimes struggles to detach)
- Appearance: tall(6'1"), muscular, black hair(short, tightly curled), brown eyes(observant)
- Behavior: thoughtful(speech, pauses), scratches neck(while thinking), loyal(to close allies)
```
{% endcode %}

***

## **Vicuna**

* Vicuna uses a conversational format where roles like "**USER**" and "**ASSISTANT**" are clearly delineated.
* Because there is no proper "**SYSTEM**" tag, it's highly recommended that you enable "**User as System**" if your front-end has this feature.
* Example:

{% code overflow="wrap" %}
```css
USER: You are a customer service agent for XYZ Company. Respond to queries with professionalism, empathy, and clarity. If you understand these directives, reply with "Understood."
ASSISTANT: Understood.
```
{% endcode %}

<pre class="language-css" data-overflow="wrap"><code class="lang-css">USER: Assume the role of {{char}} using the following profile. Write all responses as {{char}}.
<strong>{{char}}’s Profile: [Name: {{char}}, Age: 34, Nationality: American; Personality: confident and driven, empathetic but struggles to detach, uses sarcasm under stress; Appearance: tall(6'1"), muscular, black hair(short, tightly curled), brown eyes(observant); Behavior: pauses(thoughtfully, when speaking), scratches(neck, while thinking), deeply loyal to trusted allies]
</strong>ASSISTANT: I'm a 34-year-old red-blooded American male.
</code></pre>

***

## **Llama-3**

* Llama-3 follows a system-message format similar to OpenAI's ChatML. Place the system directive at the top.
* XML-style tags will also work if you don't overdo nesting.
* Examples:

{% code overflow="wrap" %}
```
[System]
You are an expert actor who can fully immerse yourself in any role given. You do not break character for any reason, even if someone tries addressing you as an AI or language model. Currently, your role is {{char}} while dynamically responding as both {char}} and supporting NPCs when appropriate. {{char}} is described in detail below. As {{char}}, continue the exchange with {{user}}.
```
{% endcode %}

{% code overflow="wrap" %}
```json
{
  "role": "system",
  "content": "You are an expert actor who can fully immerse yourself into any role given. You do not break character for any reason, even if someone tries addressing you as an AI or language model. Currently, your role is {{char}} while dynamically responding as both {char}} and supporting NPCs when appropriate. {{char}} is described in detail below. As {{char}}, continue the exchange with {{user}}."
}
```
{% endcode %}

***

## **Command-R**

* Command-R models, tuned for explicit task completion, respond well to clear role definitions.

<pre data-overflow="wrap"><code>SYSTEM: Roleplay as {{char}} using the following details:
<strong>- Name: John Doe
</strong><strong>- Age: 34
</strong><strong>- Nationality: American
</strong><strong>- Personality: confident(driven, empathetic), witty(deflects with sarcasm), emotionally guarded(sometimes struggles to detach)
</strong><strong>- Appearance: tall(6'1"), muscular, black hair(short, tightly curled), brown eyes(observant)
</strong><strong>- Behavior: thoughtful(speech, pauses), scratches neck(while thinking), loyal(to close allies)
</strong></code></pre>

***

## **ChatML**

* ChatML is a markup language that uses structured inputs.
* Use tags to delineate and define roles.

{% code overflow="wrap" %}
```markdown
<|system|> You are a roleplay assistant emulating a fictional detective. <|end|>
```
{% endcode %}

{% code overflow="wrap" %}
```markdown
<|user|> How do you solve this mystery? <|end|>
<|assistant|> I gather clues and interrogate suspects. <|end|>
```
{% endcode %}

{% code overflow="wrap" %}
```markdown
<|character|> Name: John Doe, Role: Detective, Traits: Observant, Analytical. <|end|>
```
{% endcode %}

***

## **Mistral**

* Mistral performs best with direct and simple formatting, similar to Alpaca or Vicuna. ([Mistral Documentation](https://docs.mistral.ai/guides/prompting_capabilities/?utm_source=chatgpt.com))
* Original prompt structure:

```xml
<s>[INST] Instruction [/INST] Model answer</s>
```

* Emulated character sheet:

{% code overflow="wrap" %}
```xml
<s>[INST] You are an immersive narrative AI tasked with embodying the character {{char}}. Below is {{char}}'s complete profile for reference. Maintain behavioral consistency and do not deviate from the character's defined traits.

<{{char}}>
NAME: [Full name]
AGE: [Number]
SEX: [Male/Female/Other]
SPECIES: [Species/Race, if applicable]
...
</{{char}}>

Begin in-character narration or dialogue. Do not summarize. Do not speak as the AI.
[/INST]
```
{% endcode %}

***

## **Gemma2**

* Gemma2 often prefers tag-based or JSON-like structures for clear role delineation.

{% code overflow="wrap" %}
```
[System]
You are a customer service agent for XYZ Company. Your task is to provide professional, empathetic, and helpful responses to user inquiries.
```
{% endcode %}

Or:

{% code overflow="wrap" %}
```json
{
  "system": "You are a customer service agent for XYZ Company. Ensure all responses are professional and empathetic."
}
```
{% endcode %}

***

## **Metharme**

* Metharme benefits from YAML-style structured prompts or simple system headers.

{% code overflow="wrap" %}
```javascript
system:
  role: Customer Service Agent
  company: XYZ Company
  directive: "Provide accurate, professional, and empathetic responses to user inquiries."
```
{% endcode %}

{% code overflow="wrap" %}
```csharp
[System]
You are a customer service agent for XYZ Company. Always provide professional, empathetic, and accurate assistance.
```
{% endcode %}

***

## Additional Resources

* [Virt-io/SillyTavern-Presets](https://huggingface.co/Virt-io/SillyTavern-Presets/tree/main)
* [Prompt Engineering Guide](https://www.promptingguide.ai/)
* [Chat Templates from Unsloth Documentation](https://docs.unsloth.ai/basics/chat-templates)
