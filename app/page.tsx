import { NotionAPI } from "notion-client";
import NotionPage from "../components/NotionPage";

export default async function Page() {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage('c774aee4d02646b293b390292aa7b741');

  return (
    <main>
      <NotionPage recordMap={recordMap} />
    </main>
  );
}