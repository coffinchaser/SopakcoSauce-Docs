---
icon: face-frown-slight
---

# Negative Prompting

## Artistic Flaws

{% code overflow="wrap" %}
```
blurry, blur, fuzzy, pixelated, jpeg artifacts, compression artifacts, watermark, text, signature, username, poorly drawn, bad anatomy, wrong anatomy, extra limbs, deformed, disfigured, mutated, distorted, twisted, warped, low quality, worst quality, amateur, newbie, cropped, frame cut, out of frame, head cut off
```
{% endcode %}

## Composition Issues

{% code overflow="wrap" %}
```
oversaturated, oversaturated colors, undersaturated, desaturated, overexposed, blown out, too bright, underexposed, too dark, high contrast, low contrast, noisy, grain, film grain, duplicate, duplicated, multiple, asymmetric, unbalanced, ugly composition, bad composition
```
{% endcode %}

## Body/Face-Specific

{% code overflow="wrap" %}
```
cross-eyed, crossed-eyes, lazy eyes, wonky eyes, deformed iris, deformed pupils, mutated hands, bad hands, extra fingers, missing fingers, fused fingers, bad feet, extra toes, missing toes, disproportioned, out of proportion, mutation, extra limbs, malformed limbs, bad proportions, anatomical nonsense
```
{% endcode %}

## Common Unwanted Elements

* text, words, letters, numbers
* logo, watermark, signature
* frame, border, boundary
* background elements
* symbols, icons
* pattern, repeated pattern

## Style Prevention

* cartoon, anime, manga (if realistic style wanted)
* photorealistic (if artistic style wanted)
* 3d render, CGI, digital art (if traditional look wanted)
* painting, sketch, drawing (if photo look wanted)
* black and white (if color wanted)
* monochrome, grayscale
* flat colors, cell shaded

## Technical Issues

{% code overflow="wrap" %}
```
rendering errors, clipping, z-fighting, broken perspective, bad shadows, incorrect shadows, inconsistent lighting, broken anatomy, floating limbs, disconnected limbs
```
{% endcode %}

## Tips for Usage

1. Combine related terms for stronger effect
2. Order from <mark style="color:orange;">**most to least important**</mark>
3. Use commas to separate terms
4. Consider adding weights to crucial terms (e.g., "bad hands:1.5")
5. Test and adjust based on results
6. Keep context-specific unwanted elements in mind

{% hint style="warning" %}
## **REMEMBER**

Negative prompts' effectiveness can vary between AI models and implementations. Experiment to find what works best for your specific use case.
{% endhint %}
