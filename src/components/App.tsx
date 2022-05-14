import React, { useState } from "react";
import ConvertHtmlToMd from "../lib/converter";
import Header from "./Header";
import InputTextarea from "./InputTextarea";
import OutputTextarea from "./OutputTextarea";

const initialHtml = `
<!doctype html>
  <head><title>My page</title></head>
  <body>
    <div>
      <header>something here...</header>
    </div>
    <main>
      <h1>My page</h1>
      <p>This is my page.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <blockquote>
        <p>This is a quote.</p>
      </blockquote>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda hic quisquam optio blanditiis ipsam perspiciatis repellendus corporis! Maxime quidem commodi, laborum obcaecati sed ea blanditiis similique quasi voluptas dolore itaque.</p>
      <h3>Some heading of third level</h3>
      <p>Some text</p>
      <hr />
    </main>
  </body>
</html>
`;

function App() {
  const [html, setHTML] = useState(initialHtml);

  const markdown = ConvertHtmlToMd(html);

  return (
    <div className="container mx-auto px-6">
      <Header />
      <div className="w-full flex flex-col md:flex-row gap-6 mt-12">
        <InputTextarea value={html} onChange={setHTML} />
        <OutputTextarea value={markdown} />
      </div>
    </div>
  );
}

export default App;
