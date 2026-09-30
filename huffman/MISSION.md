# Mission: Huffman Coding

## Why
Pass the C949 assessment questions on Huffman coding. This is the exam's last content topic and it is one idea: lossless compression with variable-length binary codes, where shorter codes go to the more frequent characters. The user wants that exam phrase mapped to its answer so it becomes a free point.

## Success looks like
- Given "lossless compression technique using variable-length binary codes", the user names Huffman coding immediately.
- The user states the exam's explanation in its own words: Huffman coding assigns shorter codes to more frequent characters to reduce file size.
- The user says which characters get the shorter codes: the more frequent ones.
- The user reads the exam's example pair correctly: the frequent character is 0, the rare character is 11101.
- The user explains why the file shrinks: shorter codes for frequent characters lower the average number of bits per character.
- Every Huffman question in the practice exam is answered without notes.

## Constraints
- Simplest possible methods - exam-speed recognition, no tree-building or implementation projects.
- Learning happens in short sessions; the lesson must be completable in one sitting.
- Lessons must work offline and print cleanly for revision.
- Workspace lives at ~/school/c949/study_guides/huffman and is published on GitHub Pages as part of the c949-study-guides site.
- Reuses the shared stylesheet and quiz widget from the Big O workspace - same look, same interaction.

## Out of scope (for now)
- Building a Huffman tree, computing prefix-free code tables, or implementing compression in Python.
- The final interleaved review (topic 9), which mixes every earlier topic.
- Proofs of optimality beyond the one-sentence greedy intuition (CLRS 16.3 territory, not exam territory).
