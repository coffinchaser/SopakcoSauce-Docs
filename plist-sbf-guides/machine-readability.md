---
icon: microchip-ai
cover: >-
  ../.gitbook/assets/robots_gears_artificial_intelligence_processors_pa_ac7ea7bc-601b-42a3-899b-497b16010227_0.png
coverY: -191
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

# Machine Readability

## Parser-Friendly Guidelines

1. Limit to 2-3 descriptors per trait
2. Keep descriptions concise
3. Use logical grouping
4. Maintain consistent structure

## How Many Descriptors Are Too Many?

Depends on which LLM you're using, but we'll stick to the general principle of "shorter is better." These thresholds should be taken as general guidelines rather than strict rules.

* **5+ words**: Reduces parsing efficiency
* **7+ words**: Impairs scanning ability
* **10+ words**: Disrupts logical flow

## Format Examples

### **Structure Comparison**

| ❌ **Wrong**         | ✅ **Right**         |
| ------------------- | ------------------- |
| \* name: John Smith | - Name: John Smith; |
| - age:25            | - Age: 25;          |

### **Descriptor Length Comparison**

| ❌ **Wrong**                                                                        | ✅ **Right**                                             |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Personality: kind(always helps others no matter what and goes out of their way...) | Personality: kind(puts others first, self-sacrificing); |

<figure><img src="../.gitbook/assets/robots_gears_artificial_intelligence_processors_pa_ac7ea7bc-601b-42a3-899b-497b16010227_0.png" alt=""><figcaption></figcaption></figure>

### TL;DR

Long descriptors risk being ignored. LLMs filter out complex or excessive information as processing noise.

***

![](../.gitbook/assets/by-nc-sa.svg)\
<sub>© 2024 by SopakcoSauce. Except as otherwise noted, the content of this page is licensed under</sub> [<sub>CC BY-NC-SA 4.0</sub>](https://creativecommons.org/licenses/by-nc-sa/4.0/)&#x20;
