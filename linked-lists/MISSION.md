# Mission: Linked Lists

## Why
Pass the C949 assessment questions on linked lists. These are the exam's reference-update questions - what update removes the first node, which links change when inserting into a positional list, what a circular list is for. The user wants each update mapped to its answer so these become free points.

## Success looks like
- Given "remove the first node of a singly linked list", the user answers `head = head.next` immediately.
- The user states what `head = head.next` does in the exam's words: it updates the reference to point to the next node in sequence.
- The user states why no shifting happens: linked-list nodes are connected by references.
- Given "insert between A and B in a positional list", the user writes the four links: `A.next -> new`, `new.prev -> A`, `new.next -> B`, `B.prev -> new`.
- Given "positional list", the user answers "commonly implemented as a doubly linked list" and "needs only pointer updates".
- Given "circular linked list", the user states the final node points back to the first and names its use: continuously cycling through nodes without reaching an end (round-robin scheduling).
- Every linked-list question in the practice exam is answered without notes.

## Constraints
- Simplest possible methods - reference-update recognition, no implementation projects.
- Learning happens in short sessions; lessons must be completable in one sitting.
- Lessons must work offline and print cleanly for revision.
- Workspace lives at ~/school/c949/study_guides/linked-lists and is published on GitHub Pages as part of the c949-study-guides site.
- Reuses the shared stylesheet and quiz widget from the Big O workspace - same look, same interaction.

## Out of scope (for now)
- Implementing linked lists in Python from scratch.
- Complexity analysis of linked-list operations beyond the exam rows (the Big O course covered the rules).
- Hash tables, sorting, and Huffman coding (topics 6-8).
- The final interleaved review (topic 9), which will mix this topic in later.
