import { useEffect, useRef } from "react";

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: (dom?: HTMLElement) => void;
      };
    };
  }
}

type FacebookPageEmbedProps = {
  pageUrl: string;
  title: string;
  width?: number;
  height?: number;
};

export function FacebookPageEmbed({
  pageUrl,
  title,
  width = 360,
  height = 480,
}: FacebookPageEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const scriptId = "facebook-jssdk";

    const ensureParse = () => {
      if (window.FB?.XFBML) {
        window.FB.XFBML.parse(containerRef.current ?? undefined);
      }
    };

    if (document.getElementById(scriptId)) {
      ensureParse();
      return;
    }

    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.prepend(fbRoot);
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.onload = ensureParse;

    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  return (
    <div className="footer-facebook" ref={containerRef} aria-label={title}>
      <div
        className="fb-page"
        data-href={pageUrl}
        data-tabs="timeline"
        data-width={width}
        data-height={height}
        data-hide-cover="false"
        data-show-facepile="false"
        data-adapt-container-width="true"
      >
        <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
          <a href={pageUrl}>{title}</a>
        </blockquote>
      </div>
    </div>
  );
}
