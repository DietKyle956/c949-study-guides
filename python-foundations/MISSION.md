# Mission: Python Foundations

## Why
Pass the C949 assessment questions on Python. These are the exam's Python rows: the first operation in `X / 2 + Y ** 2 == 10`, the identifier rules with their valid and invalid examples, list versus tuple, slicing bounds, `sorted()` versus `.sort()`, the sample loop's output, and overloaded methods. The user wants each exam phrase mapped to its answer so these become free points.

## Success looks like
- Given `X / 2 + Y ** 2 == 10`, the user answers `Y ** 2` immediately, and can state the tier order: `**`, then `* / // %`, then `+ -`, then comparisons.
- The user judges any name against the four identifier rules and rejects `class`, `my-variable`, and `2ndVariable`, naming the right reason each time.
- The user states the list-versus-tuple contrast in the exam's words: lists are mutable; tuples are immutable.
- The user predicts any slice's output, applying start included and end excluded.
- The user states which call returns a new sorted list (`sorted()`) and which sorts in place and returns nothing (`my_list.sort()`).
- The user traces the sample loop to exactly `Average: 5.0`, noting where the `break` fires.
- The user defines overloaded methods: same name, different parameter lists.
- Every Python question in the practice exam is answered without notes.

## Constraints
- Simplest possible methods - exam-speed recognition, no full Python course.
- Scoped to the exam's Python items only; nothing else about the language.
- Learning happens in short sessions; lessons must be completable in one sitting.
- Lessons must work offline and print cleanly for revision.
- Workspace lives at ~/school/c949/study_guides/python-foundations and is published on GitHub Pages as part of the c949-study-guides site.
- Reuses the shared stylesheet and quiz widget from the Big O workspace - same look, same interaction.

## Out of scope (for now)
- Writing Python programs; the exam asks for reading and tracing, not authoring.
- Python features the exam does not test: loops beyond the sample trace, functions, classes, exceptions, imports, and the standard library.
- Reserved-keyword memorization beyond recognizing `class` as invalid.
- Huffman coding (topic 8) and the final interleaved review (topic 9).
