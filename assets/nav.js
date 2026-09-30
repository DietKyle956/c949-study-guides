/* ==========================================================================
   Site navigation - shared by every page.
   Injects the top-left menu button, the sidebar (Lessons, Cheat Sheet,
   Practice Tests, Resources), and the previous/next buttons on lessons.

   Each page loads this file with a path that encodes how deep the page
   sits below the site root, and this script reads its own src to work it
   out, so no per-page configuration is needed:
     <script src="assets/nav.js"></script>          site root
     <script src="../assets/nav.js"></script>       course homes
     <script src="../../assets/nav.js"></script>    lessons and reference cards
   Because everything resolves relative to the page, the same build works
   on the GitHub Pages subpath and from a local folder, fully offline.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Site data ---------- */

  var COURSE_HOMES = {
    "Big O for exams": "big-o/index.html",
    "Python foundations": "python-foundations/index.html",
    "ADTs and linear structures": "adts/index.html",
    "Stacks, queues, deques, and priority queues": "stacks-queues/index.html",
    "Linked lists": "linked-lists/index.html",
    "Hash tables": "hash-tables/index.html",
    "Sorting and selection": "sorting/index.html",
    "Huffman coding": "huffman/index.html",
    "Final review": "final-review/index.html"
  };

  // Every lesson and practice test, in study order. hrefs are site-root
  // relative. This one list drives the sidebar, the previous/next buttons,
  // and the "start at lesson 1" flow on the home page.
  var SEQUENCE = [
    { course: "Big O for exams", num: 1, title: "The Loop Rules", href: "big-o/lessons/0001-loop-rules.html", kind: "lesson" },
    { course: "Big O for exams", num: 2, title: "Recursion: count the levels", href: "big-o/lessons/0002-recursion.html", kind: "lesson" },
    { course: "Big O for exams", num: 3, title: "Space: count the extra memory", href: "big-o/lessons/0003-space-complexity.html", kind: "lesson" },
    { course: "Big O for exams", num: 4, title: "Recurrence relations: levels for any shrink", href: "big-o/lessons/0004-recurrence-relations.html", kind: "lesson" },
    { course: "Big O for exams", num: 5, title: "Mixed exam review", href: "big-o/lessons/0005-mixed-exam-review.html", kind: "lesson" },
    { course: "Python foundations", num: 1, title: "Precedence and identifiers", href: "python-foundations/lessons/0001-precedence-identifiers.html", kind: "lesson" },
    { course: "Python foundations", num: 2, title: "Lists, tuples, and slicing", href: "python-foundations/lessons/0002-lists-tuples-slicing.html", kind: "lesson" },
    { course: "Python foundations", num: 3, title: "sorted vs sort, loop tracing, overloaded methods", href: "python-foundations/lessons/0003-sorted-sort-tracing.html", kind: "lesson" },
    { course: "ADTs and linear structures", num: 1, title: "The ADT idea: what, not how", href: "adts/lessons/0001-adts-and-records.html", kind: "lesson" },
    { course: "ADTs and linear structures", num: 2, title: "Arrays vs linked structures: index or reference", href: "adts/lessons/0002-arrays-vs-linked.html", kind: "lesson" },
    { course: "Stacks, queues, deques, and priority queues", num: 1, title: "Stacks and queues: LIFO vs FIFO", href: "stacks-queues/lessons/0001-stack-and-queue.html", kind: "lesson" },
    { course: "Stacks, queues, deques, and priority queues", num: 2, title: "Deques, priority queues, and dynamic expansion", href: "stacks-queues/lessons/0002-deques-priority-queues.html", kind: "lesson" },
    { course: "Linked lists", num: 1, title: "Singly and circular lists: the reference update", href: "linked-lists/lessons/0001-singly-and-circular.html", kind: "lesson" },
    { course: "Linked lists", num: 2, title: "Doubly linked lists: positional insertion", href: "linked-lists/lessons/0002-doubly-positional.html", kind: "lesson" },
    { course: "Hash tables", num: 1, title: "The key-value idea: maps and operations", href: "hash-tables/lessons/0001-key-value-idea.html", kind: "lesson" },
    { course: "Hash tables", num: 2, title: "Hashing, collisions, and the average O(1)", href: "hash-tables/lessons/0002-hashing-collisions.html", kind: "lesson" },
    { course: "Sorting and selection", num: 1, title: "Counting sort: the value-range sort", href: "sorting/lessons/0001-counting-sort.html", kind: "lesson" },
    { course: "Sorting and selection", num: 2, title: "The partition idea: quicksort and quickselect", href: "sorting/lessons/0002-partition-idea.html", kind: "lesson" },
    { course: "Huffman coding", num: 1, title: "Huffman coding: shorter codes for frequent characters", href: "huffman/lessons/0001-huffman-codes.html", kind: "lesson" },
    { course: "Final review", num: 1, title: "Practice test 1", href: "final-review/lessons/0001-practice-test-1.html", kind: "test" },
    { course: "Final review", num: 2, title: "Practice test 2", href: "final-review/lessons/0002-practice-test-2.html", kind: "test" }
  ];

  /* ---------- Where are we? ---------- */

  // The number of "../" segments in our own src equals the page's depth
  // below the site root. Every link is then built from that prefix.
  var depth = document.currentScript.getAttribute("src").split("/")
    .filter(function (seg) { return seg === ".."; }).length;
  var PREFIX = new Array(depth + 1).join("../"); // "" at depth 0

  var here = location.href.replace(/[?#].*$/, "");
  var current = -1;

  SEQUENCE.forEach(function (item, i) {
    var abs = new URL(PREFIX + item.href, location.href).href.replace(/[?#].*$/, "");
    if (abs === here) current = i;
  });

  /* ---------- Small DOM helpers ---------- */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function link(href, className, text) {
    var a = el("a", className || null, text);
    a.href = PREFIX + href;
    return a;
  }

  function isHere(href) {
    return new URL(PREFIX + href, location.href).href.replace(/[?#].*$/, "") === here;
  }

  function markCurrent(a, href) {
    if (isHere(href)) {
      a.className = (a.className ? a.className + " " : "") + "current";
      a.setAttribute("aria-current", "page");
    }
  }

  /* ---------- Sidebar ---------- */

  function buildSidebar() {
    var toggle = el("button", "nav-toggle");
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Open menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span></span><span></span><span></span>";

    var backdrop = el("div", "nav-backdrop");

    var sidebar = el("aside", "sidebar");
    sidebar.setAttribute("aria-label", "Site menu");

    var head = el("div", "sidebar-head");
    head.appendChild(link("index.html", "sidebar-title", "C949 Study Guides"));
    var close = el("button", "sidebar-close");
    close.type = "button";
    close.setAttribute("aria-label", "Close menu");
    close.textContent = "×";
    head.appendChild(close);

    var nav = el("nav", "sidebar-nav");

    // Lessons: every course, its lessons listed underneath.
    var lessons = el("details", "sidebar-group");
    lessons.appendChild(el("summary", null, "Lessons"));
    var lessonsList = el("ul", "sidebar-items");

    Object.keys(COURSE_HOMES).forEach(function (course) {
      var items = SEQUENCE.filter(function (item) {
        return item.course === course && item.kind === "lesson";
      });
      if (!items.length) return;
      var courseRow = el("li", "sidebar-course");
      courseRow.appendChild(link(COURSE_HOMES[course], null, course));
      lessonsList.appendChild(courseRow);
      items.forEach(function (item) {
        var row = el("li", null);
        var a = link(item.href, null, item.num + " - " + item.title);
        markCurrent(a, item.href);
        row.appendChild(a);
        lessonsList.appendChild(row);
      });
    });

    lessons.appendChild(lessonsList);
    nav.appendChild(lessons);

    // Cheat sheet: a direct link.
    var cheat = link("big-o/reference/big-o-cheat-card.html", "sidebar-link", "Cheat Sheet");
    markCurrent(cheat, "big-o/reference/big-o-cheat-card.html");
    nav.appendChild(cheat);

    // Practice tests.
    var tests = el("details", "sidebar-group");
    tests.appendChild(el("summary", null, "Practice Tests"));
    var testsList = el("ul", "sidebar-items");
    SEQUENCE.forEach(function (item) {
      if (item.kind !== "test") return;
      var row = el("li", null);
      var a = link(item.href, null, item.title);
      markCurrent(a, item.href);
      row.appendChild(a);
      testsList.appendChild(row);
    });
    tests.appendChild(testsList);
    nav.appendChild(tests);

    // Resources: a direct link.
    var resources = link("resources.html", "sidebar-link", "Resources");
    markCurrent(resources, "resources.html");
    nav.appendChild(resources);

    sidebar.appendChild(head);
    sidebar.appendChild(nav);

    // Open the group that holds the current page.
    if (current !== -1 && SEQUENCE[current].kind === "test") tests.open = true;
    else if (current !== -1) lessons.open = true;

    function setOpen(open) {
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) close.focus();
      else toggle.focus();
    }

    toggle.addEventListener("click", function () { setOpen(true); });
    close.addEventListener("click", function () { setOpen(false); });
    backdrop.addEventListener("click", function () { setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    document.body.appendChild(toggle);
    document.body.appendChild(backdrop);
    document.body.appendChild(sidebar);
  }

  /* ---------- Previous / next ---------- */

  function makeNavButton(item, label, side) {
    var a = link(item.href, "lesson-nav-btn " + side);
    var text = el("span", "lesson-nav-text");
    text.appendChild(el("span", "lesson-nav-label", label));
    text.appendChild(el("span", "lesson-nav-title", item.title));
    var arrow = el("span", "lesson-nav-arrow", side === "prev" ? "←" : "→");
    if (side === "prev") { a.appendChild(arrow); a.appendChild(text); }
    else { a.appendChild(text); a.appendChild(arrow); }
    return a;
  }

  function buildLessonNav() {
    if (current === -1) return;
    var article = document.querySelector("article.lesson");
    if (!article) return;

    var nav = el("nav", "lesson-nav");
    nav.setAttribute("aria-label", "Lesson navigation");
    var item = SEQUENCE[current];

    if (current > 0) {
      var prev = SEQUENCE[current - 1];
      var prevLabel = prev.kind === "test" ? "Previous practice test" : "Previous lesson";
      if (prev.course !== item.course) prevLabel += " - " + prev.course;
      nav.appendChild(makeNavButton(prev, prevLabel, "prev"));
    }
    if (current < SEQUENCE.length - 1) {
      var next = SEQUENCE[current + 1];
      var nextLabel = next.kind === "test" ? "Next practice test" : "Next lesson";
      if (next.course !== item.course) nextLabel += " - " + next.course;
      nav.appendChild(makeNavButton(next, nextLabel, "next"));
    }

    article.appendChild(nav);
  }

  /* ---------- Go ---------- */

  if (document.body) {
    buildSidebar();
    buildLessonNav();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      buildSidebar();
      buildLessonNav();
    });
  }
})();
