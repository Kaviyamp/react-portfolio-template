import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import { useTheme } from "next-themes";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!data.showResume) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${data.showCursor && "cursor-none"}`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <Header isBlog />

        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            {/* Download Button */}
            <div className="w-full max-w-4xl flex justify-between items-center mb-4 px-2">
              <h1 className="text-xl font-semibold opacity-70">Resume</h1>
              <a
                href="/Kaviya.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "#6366f1",
                  color: "white",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  padding: "0.6rem 1.25rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                ⬇ Download PDF
              </a>
            </div>

            {/* PDF Viewer */}
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg" style={{ height: "90vh" }}>
              <iframe
                src="/Kaviya.pdf"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="Kaviya Resume"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
