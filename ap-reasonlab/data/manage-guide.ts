/**
 * Manage Guide — editor / admin workflow (content behind auth gate).
 */

import type { GuideLink } from "@/data/user-guide";

export type ManageGuideSection = {
  id: string;
  title: string;
  preview: string;
  body?: string;
  steps?: string[];
  links: GuideLink[];
};

export const MANAGE_GUIDE_INTRO = {
  title: "Manage Guide",
  subtitle: "For editors with the content change code",
  lead:
    "This guide is locked until you unlock at /login or the edit circle (✎). It explains how to change site content, upload files, use Manage, and publish updates — without exposing change codes on public pages.",
};

export const MANAGE_GUIDE_SECTIONS: ManageGuideSection[] = [
  {
    id: "unlock",
    title: "Unlock editing",
    preview:
      "Browsing is open to everyone. To edit, go to /login or click the edit circle on any page and enter the content change code once. Your browser keeps a secure session for about a week.",
    steps: [
      "Open /login (or ✎ bottom-right) and enter the content change code.",
      "After unlock, + buttons and the edit bar appear sitewide.",
      "Use Lock / re-login on Manage when you are done on a shared computer.",
    ],
    links: [
      { href: "/login", label: "Unlock at /login" },
      { href: "/about", label: "About — code policy (codes not published)" },
    ],
  },
  {
    id: "codes",
    title: "Change codes — content vs master",
    preview:
      "Content code unlocks editing, uploads, AI Developer, and History. Master code still works for the same edits when needed. Codes are set in deployment env vars — never paste them into AI tools or public forms.",
    body: "Publishing saves to GitHub requires GITHUB_TOKEN on the server. AI Toolbox may use CONTENT_GITHUB_TOKEN separately.",
    links: [
      { href: "/about", label: "About — env var names" },
      { href: "/guide", label: "Developer guide — deploy & tokens" },
    ],
  },
  {
    id: "inline-edit",
    title: "Inline + buttons on pages",
    preview:
      "After unlock, visit AP Concepts / Formulas / Practice or a subject folder. Each area has matching + buttons: add subject folder, topic, formula, or practice set. Fill the form and save — your session counts as authorization.",
    steps: [
      "AP Area → pick Concepts, Formulas, or Practice.",
      "Inside a subject, use + Add topic / formula / practice as appropriate.",
      "Attach images or files when the form allows; rich Markdown + LaTeX is supported.",
    ],
    links: [
      { href: "/ap", label: "AP Area" },
      { href: "/concepts", label: "Concepts root" },
      { href: "/formulas", label: "Formulas root" },
      { href: "/practice", label: "Practice root" },
      { href: "/admin", label: "Short admin summary (legacy)" },
    ],
  },
  {
    id: "manage-console",
    title: "Manage console (/manage)",
    preview:
      "The full content console: browse all managed items, add subjects/units, open the Macintosh HD file desk, trash, settings, AI Developer tab, and edit history. Requires the same unlock as inline editing.",
    steps: [
      "Content — search/filter items, open Resource Editor, save with session.",
      "Subjects / Units — create AP folders and unit structure.",
      "Files — MachineTools HD finder for bulk uploads.",
      "Trash — restore or permanently delete managed items.",
      "History — GitHub-backed undo for recent publishes.",
    ],
    links: [
      { href: "/manage", label: "Manage console" },
      { href: "/manage?tab=files", label: "Manage · Files tab" },
      { href: "/manage?tab=history", label: "Manage · History tab" },
    ],
  },
  {
    id: "ai-developer",
    title: "AI Developer",
    preview:
      "Editors-only AI for rewriting managed content, repairing LaTeX, polishing practice stems, and batch suggestions. Opens only after content-code unlock — same gate as Manage.",
    links: [
      { href: "/ai-developer", label: "AI Developer" },
      { href: "/hints", label: "AI Toolbox (student-facing)" },
    ],
  },
  {
    id: "forum-moderation",
    title: "Forum & shared materials",
    preview:
      "Anyone can post discussions and upload to Shared library without a code. Deleting others’ shared items or moderating sensitive content requires the content change code (or unlocked session). My box stays private per browser.",
    links: [
      { href: "/forum", label: "Forum" },
      { href: "/forum?tab=shared", label: "Shared library" },
    ],
  },
  {
    id: "partners",
    title: "Partners & roster",
    preview:
      "Add Knowledge Explorer members on the Partners page with display name + GitHub username. Requires content change code when not already unlocked.",
    links: [
      { href: "/partners", label: "Partners" },
      { href: "/about", label: "About — member list" },
    ],
  },
  {
    id: "publish",
    title: "Publish, feedback & troubleshooting",
    preview:
      "When Save / Publish runs, changes go to the connected GitHub repo (if GITHUB_TOKEN is configured). If save fails, check Manage status messages, token scope, and /guide deploy notes. For student-facing issues, use Forum discussions or fix content in Manage.",
    steps: [
      "Confirm unlock and fill required fields before Save.",
      "Watch for API error text in Manage — often token or path issues.",
      "Use History tab to undo a bad publish when available.",
      "Update User Guide / site copy via managed content or repo edits as your team prefers.",
    ],
    links: [
      { href: "/guide", label: "Developer / deploy guide" },
      { href: "/checklist", label: "Project checklist" },
      { href: "/user-guide", label: "Public User Guide" },
    ],
  },
];
