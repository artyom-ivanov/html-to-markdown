import React, { useState } from "react";
import ConvertHtmlToMd from "../lib/converter";
import Header from "./Header";
import InputTextarea from "./InputTextarea";
import OutputTextarea from "./OutputTextarea";

const initialHtml = `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Software Engineer Artyom Ivanov personal website"><meta name="generator" content="Eleventy"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><title>Концерт Linda Fog в онлайне — Artyom Space Blog</title><link rel="stylesheet" href="/site.css"><script src="https://unpkg.com/feather-icons"></script></head><body class="bg-gray-100 da1rk:bg-gray-800"><main class="container mx-auto md:px-6"><div class="max-w-4xl mx-auto mt-12 px-4 md:px-0"><div class="flex md:w-full items-center justify-center md:justify-start"><a class="flex items-center md:-ml-8" href="/"><i data-feather="arrow-left" class="w-5 mr-3"></i> <img src="/swift/artyom.png" alt="Artyom Space" class="w-16 rounded-full flex-shrink-0"></a><div class="ml-4 flex flex-col"><p class="text-lg font-semibold">artyom space</p><p class="text-sm text-gray-600">айтишник что-то пописывает</p></div></div></div><article class="max-w-4xl mb-8 prose lg:prose-lg da1rk:prose-invert da1rk:bg-gray-900 bg-white p-6 md:p-8 md:pt-16 mx-auto md:rounded-xl mt-8 prose-a:text-indigo-600 prose-a:decoration-1 prose-a:underline-offset-4 prose-a:decoration-indigo-400"><h1>Концерт Linda Fog в онлайне</h1><p>Отстримил отличнейший онлайн-концерт инди-бэнда Linda Fog в их инстаграм. Получилось душевно и кайфово, но я не нажал на кнопку записи. Что-то все же осталось, спасибо зрителям.</p><iframe class="aspect-video w-full" src="https://www.youtube.com/embed/cdDE-IGXu7E?start=294" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></article><div class="max-w-4xl mx-auto mb-12 px-4 md:px-0"><a href="/#blog" class="font-semibold text-xl text-indigo-600 underline decoration-1 underline-offset-4 decoration-indigo-400">Есть и другие посты</a></div></main><div class="hidden aspect-video w-full"></div><script>feather.replace()</script><script type="text/javascript">(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
      (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t),
    a = e.getElementsByTagName(t)[0],
    k.async = 1,
    k.src = r,
    a.parentNode.insertBefore(k, a)
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  ym(75447619, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });</script><noscript><div><img src="https://mc.yandex.ru/watch/75447619" style="position:absolute; left:-9999px;" alt=""></div></noscript><script async src="https://www.googletagmanager.com/gtag/js?id=G-C4V325TWX5"></script><script>window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-C4V325TWX5');</script></body></html>`;

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
