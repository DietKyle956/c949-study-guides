# Teaching Notes

- Learning goal: pass the C949 course assessment testing Big O (stated 2026-09-25; course folder identified 2026-09-28).
- Level: comfortable with simple loops; stuck on logarithms, recursion, and tricky patterns.
- Preference: the simplest possible methods - exam-speed shortcuts over formal depth.
- Preference: lessons must work offline and print cleanly (revision for the exam).
- Communities: not yet asked whether the user wants to join one. Ask before pushing community involvement.
- Workspace location: ~/school/c949/study_guides/ (moved from ~/learning/big-o/ on 2026-09-28; also published on GitHub Pages).
- Git: repo is a public GitHub repo for Pages deployment. Lesson content is fine to publish; keep MISSION.md and NOTES.md out of nothing sensitive (nothing sensitive is in them).
- Practice exam file exists at ~/school/c949/C949_Data_Structures_and_Algorithms_1_Study_Guide.md (2026-09-28). It is the ground truth for scope.
- Recurrence relations covered in lesson 4 (2026-09-28): levels = N / k for subtract-k (exam answer N / 8 for T(N) = N + T(N - 8), ceil exact), log_b N for divide-by-b; whole-complexity follow-ups (that recurrence is O(N^2) time, O(N) stack) included. Worst-case auxiliary space (get_odd_numbers is O(N)) was covered in lesson 3 (2026-09-28).
- Remaining Big O exam gap for this workspace: lesson 5 mixed exam review (planned; index.html).
- Course plan (index.html) now matches teach-topics.md: 4 = recurrence relations, 5 = mixed exam review.
- Counting sort's O(N+K) and hash table's average O(1) belong to the sorting and hash-tables topics in ~/school/c949/teach-topics.md, not here.
- Publish flow: everything we create (lessons, reference docs, assets) is committed to main and pushed immediately so it goes live on Pages (user confirmed 2026-09-28). No co-author lines in commit messages.
- Topic menu for all of C949: ~/school/c949/teach-topics.md (kept out of this repo - it summarizes practice exam content).
