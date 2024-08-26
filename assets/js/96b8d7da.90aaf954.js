"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7802],{5680:(e,n,r)=>{r.d(n,{xA:()=>g,yg:()=>y});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},g=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return r?t.createElement(y,i(i({ref:n},g),{},{components:r})):t.createElement(y,i({ref:n},g))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8639:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=r(8168),a=(r(6540),r(5680));const o={},i="Introduction",l={unversionedId:"gpt-researcher/config",id:"gpt-researcher/config",isDocsHomePage:!1,title:"Introduction",description:"The config.py enables you to customize GPT Researcher to your specific needs and preferences.",source:"@site/docs/gpt-researcher/config.md",sourceDirName:"gpt-researcher",slug:"/gpt-researcher/config",permalink:"/docs/gpt-researcher/config",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/config.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Troubleshooting",permalink:"/docs/gpt-researcher/troubleshooting"},next:{title:"Tailored Research",permalink:"/docs/gpt-researcher/tailored-research"}},s=[],p={toc:s},g="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(g,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"The config.py enables you to customize GPT Researcher to your specific needs and preferences."),(0,a.yg)("p",null,"Thanks to our amazing community and contributions, GPT Researcher supports multiple LLMs and Retrievers.\nIn addition, GPT Researcher can be tailored to various report formats (such as APA), word count, research iterations depth, etc."),(0,a.yg)("p",null,"GPT Researcher defaults to our recommended suite of integrations: ",(0,a.yg)("a",{parentName:"p",href:"https://platform.openai.com/docs/overview"},"OpenAI")," for LLM calls and ",(0,a.yg)("a",{parentName:"p",href:"https://app.tavily.com"},"Tavily API")," for retrieving realtime online information."),(0,a.yg)("p",null,"As seen below, OpenAI still stands as the superior LLM. We assume it will stay this way for some time, and that prices will only continue to decrease, while performance and speed increase over time."),(0,a.yg)("div",{style:{marginBottom:"10px"}},(0,a.yg)("img",{align:"center",height:"350",src:"/img/leaderboard.png"})),(0,a.yg)("p",null,"The default config.py file can be found in ",(0,a.yg)("inlineCode",{parentName:"p"},"/gpt_researcher/config/"),". It supports various options for customizing GPT Researcher to your needs.\nYou can also include your own external JSON file ",(0,a.yg)("inlineCode",{parentName:"p"},"config.json")," by adding the path in the ",(0,a.yg)("inlineCode",{parentName:"p"},"config_file")," param. ",(0,a.yg)("strong",{parentName:"p"},"Please follow the config.py file for additional future support"),"."),(0,a.yg)("p",null,"Below is a list of current supported options:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"RETRIEVER")),": Web search engine used for retrieving sources. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"tavily"),". Options: ",(0,a.yg)("inlineCode",{parentName:"li"},"duckduckgo"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"bing"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"google"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"serper"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"searx"),". ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/assafelovic/gpt-researcher/tree/master/gpt_researcher/retrievers"},"Check here")," for supported retrievers"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"EMBEDDING_PROVIDER")),": Provider for embedding model. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"openai"),". Options: ",(0,a.yg)("inlineCode",{parentName:"li"},"ollama"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"huggingface"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"azure_openai"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"custom"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"LLM_PROVIDER")),": LLM provider. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"openai"),". Options: ",(0,a.yg)("inlineCode",{parentName:"li"},"google"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"ollama"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"groq")," and much more!"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"FAST_LLM_MODEL")),": Model name for fast LLM operations such summaries. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"gpt-4o-mini"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"SMART_LLM_MODEL")),": Model name for smart operations like generating research reports and reasoning. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"gpt-4o"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"FAST_TOKEN_LIMIT")),": Maximum token limit for fast LLM responses. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"2000"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"SMART_TOKEN_LIMIT")),": Maximum token limit for smart LLM responses. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"4000"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"BROWSE_CHUNK_MAX_LENGTH")),": Maximum length of text chunks to browse in web sources. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"8192"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"SUMMARY_TOKEN_LIMIT")),": Maximum token limit for generating summaries. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"700"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"TEMPERATURE")),": Sampling temperature for LLM responses, typically between 0 and 1. A higher value results in more randomness and creativity, while a lower value results in more focused and deterministic responses. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"0.55"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"TOTAL_WORDS")),": Total word count limit for document generation or processing tasks. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"800"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"REPORT_FORMAT")),": Preferred format for report generation. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"APA"),". Consider formats like ",(0,a.yg)("inlineCode",{parentName:"li"},"MLA"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"CMS"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Harvard style"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"IEEE"),", etc."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"MAX_ITERATIONS")),": Maximum number of iterations for processes like query expansion or search refinement. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"3"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"AGENT_ROLE")),": Role of the agent. This might be used to customize the behavior of the agent based on its assigned roles. No default value."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"MAX_SUBTOPICS")),": Maximum number of subtopics to generate or consider. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"3"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"SCRAPER")),": Web scraper to use for gathering information. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"bs")," (BeautifulSoup). You can also use ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/codelucas/newspaper"},"newspaper"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"DOC_PATH")),": Path to read and research local documents. Defaults to an empty string indicating no path specified."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"USER_AGENT")),": Custom User-Agent string for web crawling and web requests."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"MEMORY_BACKEND")),": Backend used for memory operations, such as local storage of temporary data. Defaults to ",(0,a.yg)("inlineCode",{parentName:"li"},"local"),".")),(0,a.yg)("p",null,"To change the default configurations, you can simply add env variables to your ",(0,a.yg)("inlineCode",{parentName:"p"},".env")," file as named above or export manually in your local project directory."),(0,a.yg)("p",null,"For example, to manually change the search engine and report format:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"export RETRIEVER=bing\nexport REPORT_FORMAT=IEEE\n")),(0,a.yg)("p",null,"Please note that you might need to export additional env vars and obtain API keys for other supported search retrievers and LLM providers. Please follow your console logs for further assistance.\nTo learn more about additional LLM support you can check out the docs ",(0,a.yg)("a",{parentName:"p",href:"/docs/gpt-researcher/llms"},"here"),"."),(0,a.yg)("p",null,"You can also include your own external JSON file ",(0,a.yg)("inlineCode",{parentName:"p"},"config.json")," by adding the path in the ",(0,a.yg)("inlineCode",{parentName:"p"},"config_file")," param."))}m.isMDXComponent=!0}}]);