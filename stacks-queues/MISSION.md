# Mission: Stacks, Queues, Deques, and Priority Queues

## Why
Pass the C949 assessment questions on stacks, queues, deques, and priority queues. Four of these are one-line identification questions (LIFO, FIFO, both-ends, highest-priority) and one is a tiny computation (the back of a queue). The user wants each exam phrase mapped to its answer so the whole topic becomes free points, same as the ADTs topic.

## Success looks like
- Given "last in, first out", the user answers stack, with push, pop, and top as its operations.
- Given "first in, first out", the user answers queue, with enqueue at the back and dequeue from the front.
- Given [72, 15, 2, 14] with front 72 and length 4, the user computes back = 14 without hesitation.
- Given "insert and remove at both ends", the user answers deque and names add_first, add_last, remove_first, remove_last.
- Given "remove the highest-priority item", the user answers pq.dequeue() and can state enqueue(item, priority), peek(), is_empty().
- Given "why does an unbounded stack expand dynamically", the user answers: to support continuous addition without a predefined limit.
- Every stack/queue/deque/priority-queue question in the practice exam is answered without notes.

## Constraints
- Simplest possible methods - definitions, recognition, and one tiny computation, no implementation projects.
- Learning happens in short sessions; lessons must be completable in one sitting.
- Lessons must work offline and print cleanly for revision.
- Workspace lives at ~/school/c949/study_guides/stacks-queues and is published on GitHub Pages as part of the c949-study-guides site.
- Reuses the shared stylesheet and quiz widget from the Big O workspace - same look, same interaction.

## Out of scope (for now)
- Linked lists and positional lists (topic 5) - reference-update mechanics, the four pointer updates.
- Hash tables, sorting, and Huffman coding (topics 6-8).
- Implementing stacks and queues from scratch (array-backed vs linked-backed internals beyond what the exam asks).
- Big O analysis beyond the exam's single mention of dynamic expansion.
