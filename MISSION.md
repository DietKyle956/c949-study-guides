# Mission: Big O

## Why
Pass the C949 course assessment questions on algorithm complexity. The user wants a simple, reliable procedure that turns "read this code, state its Big O" exam questions into mechanical, hard-to-get-wrong steps.

## Success looks like
- Given any common exam code snippet (loops, nested loops, halving, recursion), the user states its Big O correctly within a minute.
- The user can explain why the answer is right using the counting rules, not just guess.
- The user can state the space complexity of the same snippets.
- The user can answer every complexity-related question in the practice exam file (simplifying O(855N) and O(12N+7N+500), linear search worst case, binary search O(log N), recurrence levels for T(N) = N + T(N-8), auxiliary space O(N)) without notes.
- The user walks into the exam feeling that complexity questions are free points.

## Constraints
- Wants the simplest possible methods - no heavier math than the exam actually requires.
- Already comfortable with basic loops (O(n), O(n²)); stated gaps are logarithms, recursion, and tricky patterns.
- Learning happens in short sessions; lessons must be completable in one sitting.
- Lessons must work offline and print cleanly for revision.
- Workspace lives at ~/school/c949/study_guides and is published on GitHub Pages so it can be reviewed from anywhere.

## Out of scope (for now)
- Formal proofs with c and n₀ (the limit-style definitions of Big O).
- The Master Theorem and recurrence solving beyond pattern recognition.
- Amortized analysis, probabilistic analysis, P vs NP.
