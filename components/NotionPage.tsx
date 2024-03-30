"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

export default function NotionPage({
  recordMap,
  rootPageId,
  rootDomain,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
  rootDomain?: string;
}) {
  const Code = dynamic(() =>
    import("react-notion-x/build/third-party/code").then((m) => m.Code)
  );
  const Collection = dynamic(() =>
    import("react-notion-x/build/third-party/collection").then(
      (m) => m.Collection
    ),
  );
  const Equation = dynamic(() =>
    import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
  );

  const Modal = dynamic(
    () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
    {
      ssr: false,
    }
  );

  return (
    <NotionRenderer
      recordMap={recordMap}
      darkMode={false}
      fullPage={true}
      rootDomain={rootDomain}
      rootPageId={rootPageId}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
      }}
    />
  );
}
