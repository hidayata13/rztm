import NotReadyDialog from "@/components/not-ready-dialog";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function JSONToolKitPage() {
  return (
    <main>
      <section className="container flex flex-col md:flex-row items-start justify-between gap-10 px-4 py-12">
        <div className="flex-1 text-center md:text-left">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 text-gray-900 tracking-tight">
              JSON Toolkit
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Effortlessly manipulate, validate, and format your JSON data with
              our intuitive toolkit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <Link href={"/tools/json-toolkit/converter"}>
              <Card
                className={`flex flex-col shadow-none hover:shadow hover:cursor-pointer transition-all duration-300 hover:bg-gray-50 h-full`}
              >
                <CardHeader>
                  <CardTitle>JSON Converter</CardTitle>
                  <CardDescription>
                    Convert JSON to other formats and vice versa.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <NotReadyDialog>
              <Card
                className={`flex flex-col shadow-none hover:shadow hover:cursor-pointer transition-all duration-300 hover:bg-gray-50 h-full`}
              >
                <CardHeader>
                  <CardTitle>JSON Prettier</CardTitle>
                  <CardDescription>
                    Format and beautify your JSON for better readability.
                  </CardDescription>
                </CardHeader>
              </Card>
            </NotReadyDialog>
            <NotReadyDialog>
              <Card
                className={`flex flex-col shadow-none hover:shadow hover:cursor-pointer transition-all duration-300 hover:bg-gray-50 h-full`}
              >
                <CardHeader>
                  <CardTitle>JSON Stringify</CardTitle>
                  <CardDescription>
                    Quickly stringify your JSON objects for use in code.
                  </CardDescription>
                </CardHeader>
              </Card>
            </NotReadyDialog>
          </div>
        </div>
      </section>
    </main>
  );
}
