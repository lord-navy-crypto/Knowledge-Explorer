/**
 * Soft sitewide trademark / copyright / accuracy notices.
 * Shown as a collapsible block on the home page; short line in the footer.
 */
export const trademarkDisclaimer =
  "AP®, Advanced Placement®, College Board®, and SAT® are trademarks of the College Board. TOEFL® is a trademark of ETS. Knowledge Explorer is an independent study site and is not affiliated with or endorsed by those organizations.";

export const copyrightDisclaimer =
  "AP® / College Board® trademarks and related branded materials remain the property of their respective owners. Knowledge Explorer does not claim ownership of College Board content.";

export const originalSourcesDisclaimer =
  "Study materials on this site — notes, worksheets, textbooks, images, PDFs, vocabulary lists, practice sets, and similar content — remain the property of their original authors, publishers, schools, or other rightsholders. Knowledge Explorer does not claim ownership of third-party material. If content appears here from another source, copyright stays with that source.";

export const userContentDisclaimer =
  "User uploads, forum posts, and partner contributions are the responsibility of the people who add them. Uploaders must have the right to share what they post. Knowledge Explorer may remove material that appears to infringe copyright.";

export const accuracyDisclaimer =
  "Study materials on this site — whether built-in, uploaded, AI-assisted, or contributed by users — may be incomplete, outdated, or incorrect. Please double-check with your teacher and reliable study sources. Use for learning only.";

export const siteOwnsDisclaimer =
  "Knowledge Explorer only claims ownership of its own original site UI, branding, and clearly site-created examples. Everything else belongs to its original source or trademark owner.";

export const footerDisclaimerShort =
  "AP® / College Board® trademarks belong to the College Board. Third-party study materials belong to their original sources. This site is not affiliated with or endorsed by the College Board. Content may contain errors — please verify.";

export const disclaimerSections = [
  { id: "trademarks", title: "Trademarks", body: trademarkDisclaimer },
  { id: "copyright", title: "AP / College Board copyright", body: copyrightDisclaimer },
  {
    id: "original-sources",
    title: "Original sources own the materials",
    body: originalSourcesDisclaimer,
  },
  { id: "site-owns", title: "What this site claims", body: siteOwnsDisclaimer },
  { id: "user-content", title: "Uploads & user content", body: userContentDisclaimer },
  { id: "accuracy", title: "Accuracy & sources", body: accuracyDisclaimer },
] as const;
