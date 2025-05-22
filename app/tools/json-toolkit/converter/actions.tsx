import { useState } from "react";
import xmljs from "xml-js";
import jsyaml from "js-yaml";

const jsonToKeyValuePairs = (json: string) => {
  try {
    const parsedData = JSON.parse(json);
    let result: string;

    if (typeof parsedData === "object" && parsedData !== null) {
      if (Array.isArray(parsedData)) {
        result = parsedData
          .map((item, idx) => {
            if (typeof item === "object" && item !== null) {
              return Object.entries(item)
                .map(([key, value]) => {
                  const formattedValue =
                    typeof value === "object"
                      ? JSON.stringify(value).replace(/"/g, '\\"')
                      : String(value).replace(/"/g, '\\"');
                  return `${key.toUpperCase()}_${idx}="${formattedValue}"`;
                })
                .join("\n");
            } else {
              return `VALUE_${idx}=${item}`;
            }
          })
          .join("\n");
      } else {
        result = Object.entries(parsedData)
          .map(([key, value]) => {
            const formattedValue =
              typeof value === "object"
                ? JSON.stringify(value).replace(/"/g, '\\"')
                : String(value).replace(/"/g, '\\"');
            return `${key.toUpperCase()}="${formattedValue}"`;
          })
          .join("\n");
      }
    } else {
      result = json;
    }

    return result;
  } catch (err) {
    console.error("Error parsing JSON:", err);
    return "Invalid JSON";
  }
};

const jsonToYAML = (json: string) => {
  try {
    const obj = JSON.parse(json);

    return jsyaml.dump(obj, {
      skipInvalid: true,
      noCompatMode: true,
    });
  } catch {
    return "Invalid JSON";
  }
};

const jsonToXML = (json: string) => {
  try {
    const obj = JSON.parse(json);

    return xmljs.json2xml(obj, {
      compact: true,
      ignoreComment: true,
      spaces: 4,
    });
  } catch {
    return "Invalid JSON";
  }
};

const useJSONConverter = () => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Converts JSON string to a specific format.
   * @param json - The JSON string to convert.
   * @param format - Format type: 1 for key-value pairs, otherwise pretty JSON.
   */
  const convertFromJSON = (json: string, format: number) => {
    // Clear previous error
    setError(null);

    // Handle empty input
    if (!json) {
      setData(null);
      return;
    }

    try {
      const parsedData = JSON.parse(json);

      // Ensure the parsed data is an object
      if (typeof parsedData !== "object" || parsedData === null) {
        setError("Invalid JSON");
        return;
      }

      // Choose output format
      let result: string;
      switch (format) {
        case 1:
          result = jsonToKeyValuePairs(json); // Convert to key-value pairs
          break;
        case 2:
          result = jsonToYAML(json);
          break;
        case 3:
          result = jsonToXML(json);
          break;
        default:
          result = JSON.stringify(parsedData, null, 2); // Pretty-print JSON
      }

      setData(result);
    } catch {
      setError("Failed to parse JSON");
    }
  };

  return { data, error, convertFromJSON };
};

export default useJSONConverter;
