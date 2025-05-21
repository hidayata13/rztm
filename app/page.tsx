import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

import logo from "@/components/images/logo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 gap-8">
      <div className="max-w-2xl w-full text-center">
        <Image
          src={logo}
          alt="rizentium logo"
          width={80}
          height={80}
          className="mx-auto mb-6"
          priority
        />
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
          rizentium
        </h1>
        <p className="text-md sm:text-lg text-gray-700 mb-8 leading-relaxed">
          Unlock your full potential with our toolbox—crafted to boost your productivity and make your development workflow smoother than ever.
        </p>
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Example tool item */}
        <Card className="shadow-none hover:shadow hover:cursor-pointer transition-all duration-300 hover:bg-gray-50">
          <CardHeader>
            <CardTitle>Barcode Generator</CardTitle>
            <CardDescription>
              Generate barcodes instantly with support for multiple barcode formats and easy export options.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="shadow-none hover:shadow hover:cursor-pointer transition-all duration-300 hover:bg-gray-50">
          <CardHeader>
            <CardTitle>JSON Toolkit</CardTitle>
            <CardDescription>
              A powerful suite of tools for manipulating and validating JSON data.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="shadow-none hover:shadow hover:cursor-pointer transition-all duration-300 hover:bg-gray-50">
          <CardHeader>
            <CardTitle>Coming soon</CardTitle>
            <CardDescription>
              Stay tuned for more exciting tools and features that will enhance your productivity and streamline your workflow.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
