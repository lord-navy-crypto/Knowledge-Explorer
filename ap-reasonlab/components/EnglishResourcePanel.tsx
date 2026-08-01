import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";

type Props = {
  space: string;
  title: string;
  /** Page path for folder navigation (defaults from space). */
  basePath?: string;
};

/** In-page English storage: pictures, documents, files + nested folders. */
export default function EnglishResourcePanel({ space, title, basePath }: Props) {
  const base =
    basePath ??
    (space === "hub" || space === "_root" ? "/english" : `/english/${space}`);
  return (
    <UnifiedMediaFrame
      alsoShow={["document", "folder"]}
      folderArea="english"
      spaceKey={space}
      spaceBasePath={base}
      title={title}
      collapsedByDefault={false}
    />
  );
}
