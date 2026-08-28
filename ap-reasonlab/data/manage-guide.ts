/**
 * Manage Guide — editor / admin workflow (content behind auth gate).
 */

import type { GuideLink } from "@/data/user-guide";

export type ManageGuideSection = {
  id: string;
  title: string;
  preview: string;
  conversation?: Array<{ speaker: "you" | "guide"; text: string }>;
  body?: string;
  steps?: string[];
  links: GuideLink[];
};

export const MANAGE_GUIDE_INTRO = {
  title: "Manage Guide",
  subtitle: "For editors with the content change code",
  lead:
    "Locked until you unlock at /login or the edit circle (✎). This walkthrough covers every way to change Knowledge Explorer — inline + buttons, Manage console tabs, uploads, AI Developer, forum moderation, partners, publishing, and fixing student-facing issues.",
};

export const MANAGE_GUIDE_SECTIONS: ManageGuideSection[] = [
  {
    id: "unlock",
    title: "Unlock editing",
    preview:
      "Browsing is public. Editing requires the content change code once per browser session (~1 week). Master code grants the same edit powers plus partner/member changes when configured.",
    conversation: [
      { speaker: "you", text: "Students see the edit circle — can they change the site?" },
      {
        speaker: "guide",
        text: "No. The circle opens /login. Without the content code, + buttons and Manage stay locked. After unlock, your session is stored securely in this browser only.",
      },
    ],
    steps: [
      "Go to /login (or click ✎) → enter content change code.",
      "Confirm the green editor banner on Manage or any + button appearing.",
      "On shared computers: Manage → Lock / re-login when finished.",
      "Never paste change codes into AI Toolbox, GitHub token fields, or Forum posts.",
    ],
    links: [
      { href: "/login", label: "Unlock at /login" },
      { href: "/login?next=/manage-guide", label: "Unlock then return here" },
      { href: "/about", label: "About — code policy" },
    ],
  },
  {
    id: "codes",
    title: "Change codes & server tokens",
    preview:
      "CONTENT_CHANGE_CODE unlocks content edits, uploads, AI Developer, and History. MASTER_CHANGE_CODE adds partner roster edits. Publishing uses GITHUB_TOKEN on Vercel; AI may use CONTENT_GITHUB_TOKEN separately.",
    conversation: [
      { speaker: "you", text: "Save failed — token or code?" },
      {
        speaker: "guide",
        text: "Unlock errors mean session expired — re-login. Publish errors usually mean GITHUB_TOKEN missing, wrong repo scope, or path conflict. Manage shows the API message; check /guide deploy section.",
      },
    ],
    body:
      "Env vars (set in Vercel, never in public pages): CONTENT_CHANGE_CODE, MASTER_CHANGE_CODE, GITHUB_TOKEN (repo write for publishes), optional CONTENT_GITHUB_TOKEN for cloud AI. Editors can leave the optional GitHub PAT field empty on Manage — server token is preferred.",
    steps: [
      "Content code → edit AP/English/managed items, files, AI Developer.",
      "Master code → same plus Partners member add/remove.",
      "GITHUB_TOKEN → required for Save/Publish to GitHub from production.",
      "Do not confuse GITHUB_TOKEN with student API keys in Toolbox settings.",
    ],
    links: [
      { href: "/about", label: "About — env var names" },
      { href: "/guide", label: "Developer guide — deploy & tokens" },
      { href: "/manage", label: "Manage — token field help text" },
    ],
  },
  {
    id: "inline-edit",
    title: "Inline + buttons on live pages",
    preview:
      "Fastest path for one topic or formula: unlock, open the subject or root (Concepts/Formulas/Practice), click the matching + button, fill Resource Editor fields, Save.",
    conversation: [
      { speaker: "you", text: "Where is + Add topic?" },
      {
        speaker: "guide",
        text: "On a Concepts subject folder — not on the global /concepts root. Same pattern: + Add formula inside a Formulas subject, + Add generated practice inside a Practice subject. Roots have + Add subject folder instead.",
      },
    ],
    steps: [
      "AP Area (/ap) → open subject → Concepts / Formulas / Practice sub-nav.",
      "+ Add subject folder — on Concepts, Formulas, or Practice roots.",
      "+ Add topic — inside a Concepts subject (Markdown + LaTeX body).",
      "+ Add formula — inside a Formulas subject.",
      "+ Add generated practice set — inside Practice (e.g. Statistics).",
      "Attach images/files in forms; preview renders math via KaTeX.",
      "Save uses your unlocked session — no re-pasting code each time.",
    ],
    links: [
      { href: "/ap", label: "AP Area" },
      { href: "/concepts", label: "Concepts root" },
      { href: "/formulas", label: "Formulas root" },
      { href: "/practice", label: "Practice root" },
      { href: "/admin", label: "Short admin summary" },
    ],
  },
  {
    id: "manage-content",
    title: "Manage · Content tab",
    preview:
      "Search and filter all managed items (concepts, formulas, practice, documents). Open any row in Resource Editor — same fields as inline forms, with status filters and bulk visibility.",
    conversation: [
      { speaker: "you", text: "When use Manage vs inline +?" },
      {
        speaker: "guide",
        text: "Inline + when you are already on the right subject. Manage Content when you need search, edit something without navigating folders, or fix a typo across types.",
      },
    ],
    steps: [
      "Open /manage → Content tab (default).",
      "Filter by subject, status (draft/published), or search title.",
      "Click an item → Resource Editor panel → edit Markdown, metadata, attachments.",
      "Save — watch status message bar for GitHub publish result.",
    ],
    links: [
      { href: "/manage", label: "Manage console" },
      { href: "/manage?tab=content", label: "Content tab" },
    ],
  },
  {
    id: "manage-subjects-units",
    title: "Manage · Subjects & Units",
    preview:
      "Create new AP-style subject folders or unit structure before adding topics. Subjects merge with built-in AP catalog on the site; duplicates match by slug.",
    steps: [
      "Subjects tab — add name, description, icon; slug auto-derives.",
      "Units tab — pick subject, add unit title/description for folder hierarchy.",
      "Return to Content or inline + to populate units with concepts.",
    ],
    links: [
      { href: "/manage?tab=subjects", label: "Subjects tab" },
      { href: "/manage?tab=units", label: "Units tab" },
    ],
  },
  {
    id: "manage-files",
    title: "Manage · Files (Macintosh HD)",
    preview:
      "Bulk upload PDFs, images, and documents into subject/folder spaces. The MachineTools HD finder mirrors desktop folders — drag-drop or pick files, assign subject path, upload. Files appear in subject media finders and search.",
    conversation: [
      { speaker: "you", text: "Upload went to wrong folder?" },
      {
        speaker: "guide",
        text: "Check subject + folder path in the finder before upload. Use Trash tab to remove bad items; re-upload to correct path. Tombstoned deletes stay hidden until restored or purged.",
      },
    ],
    steps: [
      "Manage → Files tab (or header button Add content · Macintosh HD).",
      "Pick subject and folder space in the finder sidebar.",
      "Upload — wait for success toast; verify on subject page media panel.",
      "Large files: watch for 413 errors — compress PDFs or split if needed.",
    ],
    links: [
      { href: "/manage?tab=files", label: "Files tab" },
      { href: "/manage", label: "Manage — Macintosh HD shortcut" },
    ],
  },
  {
    id: "manage-trash-history",
    title: "Manage · Trash, Settings, History",
    preview:
      "Trash holds soft-deleted managed items — restore or delete permanently. Settings tab covers site-level managed options. History shows recent GitHub publishes with undo when available.",
    steps: [
      "Trash — review deleted concepts/formulas/files; Restore or Purge.",
      "Settings — managed site settings (requires unlock).",
      "History — pick a publish, Undo if the API supports rollback.",
      "If undo missing, fix forward in Resource Editor and Save again.",
    ],
    links: [
      { href: "/manage?tab=trash", label: "Trash tab" },
      { href: "/manage?tab=settings", label: "Settings tab" },
      { href: "/manage?tab=history", label: "History & Undo tab" },
    ],
  },
  {
    id: "ai-developer",
    title: "AI Developer (editors only)",
    preview:
      "Separate from student AI Toolbox. Batch-rewrite managed Markdown, repair LaTeX, polish practice stems, suggest unit outlines. Gate: same content-code session as Manage — /ai-developer redirects to login if locked.",
    conversation: [
      { speaker: "you", text: "Can AI Developer change production alone?" },
      {
        speaker: "guide",
        text: "It proposes edits — you still review and Save through Manage or inline forms. Treat output as draft; verify math and citations before publish.",
      },
    ],
    steps: [
      "Unlock → open /ai-developer or Manage → AI Developer tab.",
      "Paste managed content or select task blocks.",
      "Apply suggestions into Resource Editor, then Save to publish.",
    ],
    links: [
      { href: "/ai-developer", label: "AI Developer page" },
      { href: "/manage?tab=ai", label: "Manage · AI Developer tab" },
      { href: "/hints", label: "AI Toolbox (students)" },
    ],
  },
  {
    id: "forum-moderation",
    title: "Forum, feedback & shared library",
    preview:
      "Anyone can post Discussions and upload to Shared library without a code. Editors with unlock can delete inappropriate shared files or threads when moderation is needed. My box is never server-side — you cannot moderate private boxes.",
    conversation: [
      { speaker: "you", text: "How should students report content issues?" },
      {
        speaker: "guide",
        text: "Forum Discussions for questions and site feedback. For wrong AP content, fix in Manage and reply in thread. For copyright on shared uploads, delete from Shared library when unlocked.",
      },
    ],
    steps: [
      "Monitor /forum and /forum?tab=shared for policy issues.",
      "Unlock → use delete controls on shared items (session auth).",
      "Direct students to User Guide for how-to questions.",
      "Structural feature requests → GitHub issues or team channel, not Forum alone.",
    ],
    links: [
      { href: "/forum", label: "Forum" },
      { href: "/forum?tab=shared", label: "Shared library" },
      { href: "/user-guide", label: "Public User Guide" },
    ],
  },
  {
    id: "partners",
    title: "Partners & roster",
    preview:
      "Add or remove Knowledge Explorer members (display name + GitHub username) on /partners. Requires master-level unlock or content code per current site policy — see About page.",
    steps: [
      "Open /partners while unlocked.",
      "Add member — name + GitHub handle; appears on About roster.",
      "Remove outdated entries when people leave the team.",
    ],
    links: [
      { href: "/partners", label: "Partners" },
      { href: "/about", label: "About — member list" },
    ],
  },
  {
    id: "publish",
    title: "Publish, site copy & changing features",
    preview:
      "Content edits publish to the connected GitHub repo when GITHUB_TOKEN is set. Updating User Guide sections, nav labels, or new tools requires repo edits (or your team’s deploy flow) — Manage covers managed content, not all React components.",
    conversation: [
      { speaker: "you", text: "How do I change what the User Guide says?" },
      {
        speaker: "guide",
        text: "User Guide copy lives in data/user-guide.ts in the repo. Editors update via pull request or agent deploy. Manage is for AP concepts, files, and managed JSON — not every static page string.",
      },
    ],
    steps: [
      "Managed content: Save in Resource Editor → GitHub publish via API.",
      "Verify on live site after deploy (Vercel rebuild).",
      "Use History undo for bad publishes when available.",
      "Static UI/features: edit repo, run checklist, open PR — see /guide.",
      "Keep Manage Guide and User Guide in sync when adding major features.",
    ],
    links: [
      { href: "/guide", label: "Developer / deploy guide" },
      { href: "/checklist", label: "Project checklist" },
      { href: "/user-guide", label: "Public User Guide" },
      { href: "/manage-guide", label: "This Manage Guide" },
    ],
  },
];
