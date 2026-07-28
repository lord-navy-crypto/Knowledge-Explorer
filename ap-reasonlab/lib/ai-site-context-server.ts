import { getGithubTokenFromCookie } from "@/lib/auth";
import {
  appendAiSiteContext,
  formatAiSiteSearchContext,
  searchKnowledgeExplorerContent,
} from "@/lib/ai-site-search";
import { loadManagedContent, normalizeManagedContent, type ManagedContent } from "@/lib/managed-store";

export { appendAiSiteContext };

/** Drop base64 payloads — search only needs metadata/text. */
function slimManagedForSearch(content: ManagedContent): ManagedContent {
  return {
    ...content,
    files: (content.files || []).map((file) => {
      if (!file.dataUrl) return file;
      const { dataUrl: _omit, ...rest } = file;
      return rest;
    }),
    recycleBin: [],
  };
}

/** Server-side Knowledge Explorer search for AI prompts. No LLM API cost. */
export async function buildServerAiSiteContext(query: string, enabled = true): Promise<string> {
  if (!enabled || query.trim().length < 2) return "";
  try {
    const token = await getGithubTokenFromCookie();
    const managed = slimManagedForSearch(normalizeManagedContent(await loadManagedContent(token)));
    return formatAiSiteSearchContext(searchKnowledgeExplorerContent(query, managed, 5));
  } catch {
    return "";
  }
}
