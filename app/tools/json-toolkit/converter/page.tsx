"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useJSONConverter from "./actions";
import { ClipboardPasteIcon, CopyIcon } from "lucide-react";

export default function JSONConverterPage() {
  const [selectedFormat, setSelectedFormat] = useState({
    id: 1,
    name: "Key-Value Pairs",
    description: "Convert JSON to key-value pairs.",
    format: "key-value",
  });

  const formats = [
    {
      id: 1,
      name: "Key-Value Pairs",
      description: "Convert JSON to key-value pairs.",
      format: "key-value",
    },
    {
      id: 2,
      name: "YAML",
      description: "Convert JSON to YAML format.",
      format: "yaml",
    },
    {
      id: 3,
      name: "XML",
      description: "Convert JSON to XML format.",
      format: "xml",
    },
  ];

  const [input, setInput] = useState("");
  const { data, error, convertFromJSON } = useJSONConverter();

  // Call convertFromJSON whenever input or selectedFormat changes
  useEffect(() => {
    convertFromJSON(input, selectedFormat.id);
  }, [convertFromJSON, input, selectedFormat]);

  function _onPasteButtonPressed(
    event: React.MouseEvent<HTMLButtonElement>,
  ): void {
    event.preventDefault();
    navigator.clipboard
      .readText()
      .then((text) => {
        setInput(text);
      })
      .catch((err) => {
        alert(`Failed to read clipboard contents: ${err}`);
      });
  }

  function _onCopyButtonPressed(
    event: React.MouseEvent<HTMLButtonElement>,
  ): void {
    event.preventDefault();
    if (data) {
      navigator.clipboard
        .writeText(data)
        .then(() => {
          alert("Copied to clipboard");
        })
        .catch((err) => {
          alert(`Failed to copy: ${err}`);
        });
    } else {
      alert("No data to copy");
    }
  }

  return (
    <main className="w-full container">
      <section className="flex flex-col items-center gap-4 p-4 md:gap-6 md:p-6">
        <span className="font-medium">Output Format:</span>
        <div className="flex flex-wrap justify-center gap-4">
          {formats.map((format) => (
            <Button
              key={format.name}
              variant={selectedFormat.id === format.id ? "default" : "outline"}
              onClick={() => setSelectedFormat(format)}
            >
              {format.name}
            </Button>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:gap-6 md:p-6">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="input" className="mb-2 font-medium">
              Input JSON
            </label>
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={_onPasteButtonPressed}
            >
              <ClipboardPasteIcon />
            </Button>
          </div>
          <Textarea
            id="input"
            className="flex-1 min-h-[200px] md:min-h-[300px] rounded-md p-4 font-mono text-base resize-none"
            placeholder="Paste your JSON here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label htmlFor="output" className="mb-2 font-medium">
              Output
            </label>
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={_onCopyButtonPressed}
            >
              <CopyIcon />
            </Button>
          </div>
          <div
            className="flex-1 min-h-[200px] md:min-h-[300px] rounded-md p-4 font-mono text-base border overflow-auto"
            style={{ overflowX: "auto" }}
          >
            {error ? (
              <span className="text-destructive">{error}</span>
            ) : data ? (
              <SyntaxHighlighter
                language={selectedFormat.format}
                style={lightfair}
              >
                {data}
              </SyntaxHighlighter>
            ) : (
              <div className="text-sm text-gray-500">
                Converted output will appear here...
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
