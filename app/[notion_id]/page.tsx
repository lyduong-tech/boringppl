import { NotionAPI } from "notion-client";
import NotionPage from "../../components/NotionPage";

export default async function Page({
  params,
}: {
  params: { notion_id: string }
}) {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(params.notion_id as string);

  return (
    <main>
      <NotionPage recordMap={recordMap} />
    </main>
  );
}