import { NotionAPI } from "notion-client";
import NotionPage from "@/components/NotionPage";
import { rootDomain, rootNotionPageId } from "@/app/python/config";

export default async function Page() {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(rootNotionPageId);

  return (
    <main>
      <NotionPage
        recordMap={recordMap}
        rootDomain={rootDomain}
        rootPageId={rootNotionPageId}
        pagePrefix={'/python'}
      />
    </main>
  );
}
