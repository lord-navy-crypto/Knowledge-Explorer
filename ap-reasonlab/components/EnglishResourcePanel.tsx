import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";

type AlsoShow = Array<
  "concept" | "topic" | "formula" | "document" | "member" | "folder" | "subject" | "questionnaire"
>;

type Props = {
  space: string;
  title: string;
  /** Page path for folder navigation (defaults from space). */
  basePath?: string;
  /** Subject name for concept / practice forms */
  defaultSubject?: string;
  alsoShow?: AlsoShow;
};

/** In-page English storage: pictures, documents, files + nested folders (+ optional theory/practice). */
export default function EnglishResourcePanel({
  space,
  title,
  basePath,
  defaultSubject,
  alsoShow = ["document", "folder"],
}: Props) {
  const base =
    basePath ??
    (space === "hub" || space === "_root" ? "/english" : `/english/${space}`);
  return (
    <UnifiedMediaFrame
      alsoShow={alsoShow}
      defaultSubject={defaultSubject}
      folderArea="english"
      spaceKey={space}
      spaceBasePath={base}
      title={title}
      collapsedByDefault={false}
    />
  );
}
