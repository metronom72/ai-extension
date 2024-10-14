import { useEffect, useState } from "react";

export const usePageMetadata = () => {
  const [pageInfo, setPageInfo] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
  });

  useEffect(() => {
    function getMetaContentByName(name: string) {
      const metaTag = document.querySelector(`meta[name="${name}"]`);
      return metaTag ? metaTag.getAttribute("content") : null;
    }

    function getMetaContentByProperty(property: string) {
      const metaTag = document.querySelector(`meta[property="${property}"]`);
      return metaTag ? metaTag.getAttribute("content") : null;
    }

    function extractPageInfo() {
      const title =
        document.querySelector("title")?.innerText ||
        getMetaContentByProperty("og:title");

      const description =
        getMetaContentByName("description") ||
        getMetaContentByProperty("og:description");

      const image =
        getMetaContentByProperty("og:image") ||
        getMetaContentByName("twitter:image");

      const url =
        getMetaContentByProperty("og:url") ||
        (document.querySelector('link[rel="canonical"]') as HTMLLinkElement)
          ?.href ||
        window.location.href;

      setPageInfo({
        title: title || "No title found",
        description: description || "No description found",
        image: image || "No image found",
        url: url || "No URL found",
      });
    }

    extractPageInfo();
  }, []);

  return pageInfo;
};
