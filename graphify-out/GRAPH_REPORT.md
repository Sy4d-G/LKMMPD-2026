# Graph Report - lkmmpd2026  (2026-08-14)

## Corpus Check
- 36 files · ~147,432 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 476 nodes · 1005 edges · 29 communities (16 shown, 13 thin omitted)
- Extraction: 68% EXTRACTED · 32% INFERRED · 0% AMBIGUOUS · INFERRED: 321 edges (avg confidence: 0.65)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26

## God Nodes (most connected - your core abstractions)
1. `r()` - 37 edges
2. `o()` - 32 edges
3. `s()` - 32 edges
4. `a()` - 32 edges
5. `e()` - 31 edges
6. `n()` - 29 edges
7. `E()` - 28 edges
8. `i()` - 23 edges
9. `t()` - 22 edges
10. `h()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `ic()` --indirect_call--> `t()`  [INFERRED]
  assets/scripts/three.min.js → assets/scripts/lottie.min.js
- `kc()` --indirect_call--> `t()`  [INFERRED]
  assets/scripts/three.min.js → assets/scripts/lottie.min.js
- `tc()` --indirect_call--> `t()`  [INFERRED]
  assets/scripts/three.min.js → assets/scripts/lottie.min.js
- `c()` --indirect_call--> `n()`  [INFERRED]
  assets/scripts/three.min.js → assets/scripts/lottie.min.js
- `cr()` --indirect_call--> `n()`  [INFERRED]
  assets/scripts/three.min.js → assets/scripts/lottie.min.js

## Import Cycles
- None detected.

## Communities (29 total, 13 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.02
Nodes (3): at(), bi(), kn()

### Community 2 - "Community 2"
Cohesion: 0.13
Nodes (64): a(), addPropertyDecorator(), b(), bezFunction(), c(), d(), extendPrototype(), f() (+56 more)

### Community 3 - "Community 3"
Cohesion: 0.13
Nodes (25): e(), k(), n(), _typeof$5(), br(), cc(), cr(), gr() (+17 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (23): $bm_isInstanceOfArray(), $bm_neg(), div(), g(), getPerpendicularVector(), getProjectingAngle(), initialize$2(), initiateExpression() (+15 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (18): crossProduct(), floatEqual(), floatZero(), getIntersection(), joinLines(), lerp(), lerpPoint(), linearOffset() (+10 more)

### Community 6 - "Community 6"
Cohesion: 0.20
Nodes (5): animate(), buildStream(), circuitBoard, generateText(), Particle

### Community 7 - "Community 7"
Cohesion: 0.27
Nodes (13): Bo(), Do(), Fo(), Io(), jo(), ko(), No(), Oo() (+5 more)

### Community 8 - "Community 8"
Cohesion: 0.17
Nodes (12): createNS(), HShapeElement(), ShapeGroupData(), SVGDropShadowEffect(), SVGFillFilter(), SVGGaussianBlurEffect(), SVGMatte3Effect(), SVGProLevelsFilter() (+4 more)

### Community 9 - "Community 9"
Cohesion: 0.20
Nodes (10): createSizedArray(), CVCompElement(), CVMaskElement(), DashProperty(), HCompElement(), MaskElement(), ShapeCollection(), ShapePath() (+2 more)

### Community 10 - "Community 10"
Cohesion: 0.29
Nodes (7): ji(), ki(), qi(), tr(), Ui(), wi(), zi()

### Community 11 - "Community 11"
Cohesion: 0.60
Nodes (5): addBrightnessToRGB(), addHueToRGB(), addSaturationToRGB(), HSVtoRGB(), RGBtoHSV()

### Community 12 - "Community 12"
Cohesion: 0.40
Nodes (5): createQuaternion(), getValueAtCurrentTime(), interpolateValue(), quaternionToEuler(), slerp()

### Community 13 - "Community 13"
Cohesion: 0.50
Nodes (4): boxIntersect(), intersectData(), intersectsImpl(), splitData()

### Community 15 - "Community 15"
Cohesion: 0.67
Nodes (3): addDecorator(), addEffect(), initialize()

## Knowledge Gaps
- **1 isolated node(s):** `circuitBoard`
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `r()` connect `Community 2` to `Community 1`, `Community 3`, `Community 7`, `Community 15`, `Community 24`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Why does `a()` connect `Community 2` to `Community 1`, `Community 3`, `Community 7`, `Community 8`, `Community 20`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Why does `e()` connect `Community 3` to `Community 1`, `Community 2`, `Community 7`, `Community 15`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Are the 31 inferred relationships involving `r()` (e.g. with `addDecorator()` and `addPropertyDecorator()`) actually correct?**
  _`r()` has 31 INFERRED edges - model-reasoned connections that need verification._
- **Are the 24 inferred relationships involving `o()` (e.g. with `f()` and `initiateExpression()`) actually correct?**
  _`o()` has 24 INFERRED edges - model-reasoned connections that need verification._
- **Are the 26 inferred relationships involving `s()` (e.g. with `a()` and `addPropertyDecorator()`) actually correct?**
  _`s()` has 26 INFERRED edges - model-reasoned connections that need verification._
- **Are the 24 inferred relationships involving `a()` (e.g. with `e()` and `l()`) actually correct?**
  _`a()` has 24 INFERRED edges - model-reasoned connections that need verification._