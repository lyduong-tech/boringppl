import { NotionAPI } from "notion-client";
import NotionPage from "@/components/NotionPage";
import { rootDomain, rootNotionPageId } from "@/lib/config";

export default async function Page({
  params,
}: {
  params: {
    pageId: string;
  };
}) {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(params.pageId as string);

  return (
    <main>
      <NotionPage
        recordMap={recordMap}
        rootDomain={rootDomain}
        rootPageId={rootNotionPageId}
      />
    </main>
  );
}
