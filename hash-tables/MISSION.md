# Mission: Hash Tables

## Why
Pass the C949 assessment questions on hash tables. These are the exam's key-value rows: what a hash table maps, the line that stores a value, and why insertion is O(1) on average but can degrade. The user wants each exam phrase mapped to its answer so these become free points.

## Success looks like
- Given "a hash table maps ...", the user answers keys to values immediately.
- The user explains the store and retrieve lines: hash_table["apple"] = 5 stores 5 under the key "apple", and hash_table["apple"] retrieves it.
- The user states average-case insertion is O(1), naming both assumptions: an effective hash function and a reasonably controlled load factor.
- The user states what can cause slower worst-case behavior: collisions.
- Every hash-table question in the practice exam is answered without notes.

## Constraints
- Simplest possible methods - exam-speed recognition, no implementation projects.
- Learning happens in short sessions; lessons must be completable in one sitting.
- Lessons must work offline and print cleanly for revision.
- Workspace lives at ~/school/c949/study_guides/hash-tables and is published on GitHub Pages as part of the c949-study-guides site.
- Reuses the shared stylesheet and quiz widget from the Big O workspace - same look, same interaction.

## Out of scope (for now)
- Implementing a hash table in Python from scratch.
- Collision resolution mechanics beyond the one-line recognition (chaining vs open addressing).
- Sorting and selection (topic 7), Huffman coding (topic 8), and the final interleaved review (topic 9).
