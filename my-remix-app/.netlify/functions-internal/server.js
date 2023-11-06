var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/components/NavBar.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react");
function NavBar() {
  let [isOpen, setIsOpen] = (0, import_react3.useState)(!1);
  return /* @__PURE__ */ React.createElement("header", {
    className: "sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between px-4 py-2 sm:p-0"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": "dog",
    className: "text-5xl"
  }, "\u{1F436}"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "text-primary focus:text-gray-800 hover:text-primary sm:hidden dark:text-white dark:focus:text-primary",
    onClick: (e) => {
      e.preventDefault(), setIsOpen((previous) => !previous);
    }
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "fill-current h-6 w-6",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, isOpen ? /* @__PURE__ */ React.createElement("path", {
    d: "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
  }) : /* @__PURE__ */ React.createElement("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
  }), /* @__PURE__ */ React.createElement("title", null, "Menu"))))), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 pb-2 items-center flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${isOpen ? "block" : "hidden"} sm:flex sm:justify-between sm:p-0 sm:text-lg dark:text-white`
  }, /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/about",
    className: "mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4  text-primary"
  }, "About"), /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/promise",
    className: "mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4  text-primary"
  }, "Promise"), /* @__PURE__ */ React.createElement(import_react2.NavLink, {
    to: "/becomeAsponser",
    className: "mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4  text-primary"
  }, "Become A Sponser"))));
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KFSNIW64.css";

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/root.jsx
var meta = () => ({
  charset: "utf-8",
  title: "Corgi's Playground",
  description: "Meet Corgi, the smart cuddly creature that everyone loves!",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement("main", {
    className: "container mx-auto pt-8 sm:pt-16"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)), /* @__PURE__ */ React.createElement("footer", {
    className: "fixed bottom-0 w-screen p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-gray-500 sm:text-center dark:text-gray-400"
  }, "Created with ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/",
    className: "hover:underline"
  }, "Remix"), " and ", /* @__PURE__ */ React.createElement("a", {
    href: "https://contentful.com/",
    className: "hover:underline"
  }, "Contentful")), /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.contentful.com/remix-tutorial/",
    className: "mr-4 hover:underline md:mr-6 "
  }, "Read More")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/contentful/starter-remix-portfolio",
    className: "mr-4 hover:underline md:mr-6"
  }, "GitHub")))), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
}

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/routes/becomeAsponser.jsx
var becomeAsponser_exports = {};
__export(becomeAsponser_exports, {
  default: () => becomeAsponsor,
  loader: () => loader,
  meta: () => meta2,
  richTextRenderOptions: () => richTextRenderOptions2
});
var import_node = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/components/Title.jsx
function Title({ title, emoji }) {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl leading-normal sm:text-5xl sm:leading-normal font-body dark:text-white"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "rounded border-b-4 border-primary dark:border-secondary"
  }, title), "\xA0", /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": title
  }, emoji));
}

// app/models/contentful.server.js
var import_plaiceholder = require("plaiceholder"), SPACE = process.env.CONTENTFUL_SPACE_ID, TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
async function apiCall(query, variables) {
  let fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`, options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ query, variables })
  };
  return await fetch(fetchUrl, options);
}
async function getBecomeAsponser() {
  let formattedData = await (await (await apiCall(`
    {
        becomeAsponserCollection (order:releaseDate_DESC){
            items {
                title
                desc {
                    json
                }
                releaseDate
                link
                previewImage {
                    description
                    url
                }
            }
        }
    }`)).json()).data.projectsCollection.items.map(async (project) => {
    let { title, desc, releaseDate, link: link2, previewImage } = project, { css, img } = await (0, import_plaiceholder.getPlaiceholder)(previewImage.url);
    return {
      title,
      desc,
      releaseDate,
      link: link2,
      image: img,
      imageAlt: previewImage.description,
      css
    };
  });
  return Promise.all(formattedData);
}
async function getPromise() {
  return await (await (await apiCall(`{
        promiseCollection {
            items {
                sys {
                    id
                }
                title
                description {
                    json
                }
                link
                type
                previewImage {
                    description
                    url
                }
            }
        }
    }`)).json()).data.talksCollection.items;
}
async function getPage(title) {
  return await (await (await apiCall(`
    query($title:String) {
        pageCollection(where:{title:$title}){
          items{
            title
            description{
              json
            }
            rolesCollection{
              items{
                roleTitle
              }
            }
            linksCollection{
              items {
                name
                url
              }
            }
            seoMetadata{
              title{
              
            }
          }
        }
      }
    `, {
    title
  })).json()).data.pageCollection.items[0];
}
var client = { getBecomeAsponser, getPromise, getPage };

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/routes/becomeAsponser.jsx
var import_framer_motion = require("framer-motion"), import_rich_text_react_renderer = require("@contentful/rich-text-react-renderer"), import_rich_text_types = require("@contentful/rich-text-types");
async function loader() {
  let becomeAsponsor2 = await client.getBecomeAsponsor(), page = await client.getPage("Become A Sponsor");
  return (0, import_node.json)({ becomeAsponsor: becomeAsponsor2, page });
}
var meta2 = ({ data }) => {
  let { title } = data.page.seoMetadata;
  return {
    title
  };
}, richTextRenderOptions2 = {
  renderNode: {
    [import_rich_text_types.INLINES.HYPERLINK]: (node, children) => {
      let { data } = node, { uri } = data;
      return /* @__PURE__ */ React.createElement("a", {
        className: "text-primary underline dark:text-secondary",
        target: "_blank",
        href: uri
      }, children[0]);
    },
    [import_rich_text_types.BLOCKS.PARAGRAPH]: (node, children) => /* @__PURE__ */ React.createElement("p", {
      className: "text-gray-700 text-base dark:text-gray-400"
    }, children)
  }
};
function becomeAsponsor() {
  let { becomeAsponsor: becomeAsponsor2 } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-48"
  }, /* @__PURE__ */ React.createElement(Title, {
    title: "Projects",
    emoji: "\u{1F4BB}"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-4 sm:grid-cols-3"
  }, projects.map((project) => /* @__PURE__ */ React.createElement(import_framer_motion.motion.div, {
    key: project.title,
    className: "mt-8 max-w-sm rounded overflow-hidden shadow-lg bg-white h-auto dark:bg-gray-700",
    whileHover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      position: "relative",
      display: "block",
      overflow: "hidden"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transform: "scale(1.5)",
      filter: "blur(40px)"
    }
  }), /* @__PURE__ */ React.createElement("img", __spreadValues({}, becomeAsponsor2.image))), /* @__PURE__ */ React.createElement("div", {
    className: "px-6 py-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold text-lg sm:text-xl mb-2 dark:text-secondary"
  }, project.title, " ", /* @__PURE__ */ React.createElement("a", {
    href: becomeAsponsor2.link,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("span", {
    role: "image",
    "aria-label": "internet",
    className: "cursor-pointer"
  }, "\u{1F517}"))), (0, import_rich_text_react_renderer.documentToReactComponents)(becomeAsponsor2.desc.json, richTextRenderOptions2))))));
}

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/routes/promise.jsx
var promise_exports = {};
__export(promise_exports, {
  default: () => Promise2,
  loader: () => loader2,
  meta: () => meta3
});
var import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_framer_motion2 = require("framer-motion"), import_rich_text_react_renderer2 = require("@contentful/rich-text-react-renderer");
async function loader2() {
  let talks2 = await client.getPromise(), page = await client.getPage("Promise");
  return (0, import_node2.json)({ promise, page });
}
var meta3 = ({ data }) => {
  let { title } = data.page.seoMetadata;
  return {
    title
  };
};
function Promise2() {
  let { promise: promise2 } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-48"
  }, /* @__PURE__ */ React.createElement(Title, {
    title: "Promise"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-6 sm:grid-cols-3"
  }, talks.map((item) => {
    let { sys, description, title, image, story } = item;
    return /* @__PURE__ */ React.createElement("a", {
      href: link,
      key: sys.id
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mt-4 text-lg dark:text-gray-300"
    }, (0, import_rich_text_react_renderer2.documentToReactComponents)(description.json, richTextRenderOptions)));
  })));
}

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  loader: () => loader3,
  meta: () => meta4,
  richTextRenderOptions: () => richTextRenderOptions3
});
var import_node3 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_rich_text_react_renderer3 = require("@contentful/rich-text-react-renderer"), import_rich_text_types2 = require("@contentful/rich-text-types");
async function loader3() {
  return (0, import_node3.json)(await client.getPage("About"));
}
var meta4 = ({ data }) => {
  let { seoMetadata } = data;
  return {
    title: seoMetadata.title,
    description: seoMetadata.description
  };
}, richTextRenderOptions3 = {
  renderNode: {
    [import_rich_text_types2.INLINES.HYPERLINK]: (node, children) => {
      let { data } = node, { uri } = data;
      return /* @__PURE__ */ React.createElement("a", {
        className: "text-primary underline dark:text-secondary",
        target: "_blank",
        href: uri
      }, children[0]);
    }
  }
};
function About() {
  let { description } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-8 sm:px-0 sm:max-w-2xl mx-auto"
  }, /* @__PURE__ */ React.createElement(Title, {
    title: "About"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 text-lg dark:text-gray-300"
  }, (0, import_rich_text_react_renderer3.documentToReactComponents)(description.json, richTextRenderOptions3)));
}

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader4,
  meta: () => meta5
});
var import_react_text_loop_next = require("react-text-loop-next"), import_framer_motion3 = require("framer-motion"), import_node4 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
var import_fa = require("react-icons/fa"), import_node5 = require("@remix-run/node");
async function loader4() {
  return (0, import_node4.json)(await client.getPage("Corgi"));
}
var meta5 = ({ data }) => {
  let { seoMetadata } = data;
  return {
    title: seoMetadata.title
  };
};
function Index() {
  let { title, rolesCollection, linksCollection } = (0, import_react8.useLoaderData)(), links2 = {};
  return linksCollection.items.forEach((link2) => {
    Object.assign(links2, Object.fromEntries([Object.values(link2)]));
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-center mt-24 sm:mt-24 dark:text-white"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl sm:text-6xl"
  }, "Hello", " ", /* @__PURE__ */ React.createElement(import_framer_motion3.motion.div, {
    animate: {
      rotate: [0, 5, 0, -5, 0]
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      loop: "Infinity",
      repeatDelay: 2
    },
    className: "inline-block"
  }, /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": "wave"
  }, "\u{1F44B}")), ", I'm ", /* @__PURE__ */ React.createElement("span", {
    className: "text-primary dark:text-secondary"
  }, " ", title), "!")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8"
  }, /* @__PURE__ */ React.createElement(import_react_text_loop_next.TextLoop, null, rolesCollection.items.map((role) => /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl sm:text-4xl w-48",
    key: role.roleTitle
  }, role.roleTitle)))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 sm:mt-16 flex justify-between sm:mx-64 mx-12 dark:text-secondary"
  }, /* @__PURE__ */ React.createElement("a", {
    href: links2.GitHub,
    target: "_blank",
    "aria-label": "GitHub"
  }, /* @__PURE__ */ React.createElement(import_fa.FaGithub, {
    className: "h-12 w-12 sm:h-16 sm:w-16 fill-current"
  })), /* @__PURE__ */ React.createElement("a", {
    href: links2.Twitter,
    target: "_blank",
    "aria-label": "Twitter"
  }, /* @__PURE__ */ React.createElement(import_fa.FaTwitter, {
    className: "h-12 w-12 sm:h-16 sm:w-16 fill-current"
  })), /* @__PURE__ */ React.createElement("a", {
    href: links2.LinkedIn,
    target: "_blank",
    "aria-label": "LinkedIn"
  }, /* @__PURE__ */ React.createElement(import_fa.FaLinkedin, {
    className: "h-12 w-12 sm:h-16 sm:w-16 fill-current"
  })), /* @__PURE__ */ React.createElement("a", {
    href: links2.Twitch,
    target: "_blank",
    "aria-label": "Twitch"
  }, /* @__PURE__ */ React.createElement(import_fa.FaTwitch, {
    className: "h-12 w-12 sm:h-16 sm:w-16 fill-current"
  })), /* @__PURE__ */ React.createElement("a", {
    href: links2.YouTube,
    target: "_blank",
    "aria-label": "YouTube"
  }, /* @__PURE__ */ React.createElement(import_fa.FaYoutube, {
    className: "h-12 w-12 sm:h-16 sm:w-16 fill-current"
  }))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "b42d6b2c", entry: { module: "/build/entry.client-D2EY5ZGY.js", imports: ["/build/_shared/chunk-C73NGGJE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZQXJIZ7W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-IEVRTYIS.js", imports: ["/build/_shared/chunk-4HZEYQZZ.js", "/build/_shared/chunk-C6Y3FJ3H.js", "/build/_shared/chunk-VXAIFB4H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/becomeAsponser": { id: "routes/becomeAsponser", parentId: "root", path: "becomeAsponser", index: void 0, caseSensitive: void 0, module: "/build/routes/becomeAsponser-LWNS7HPU.js", imports: ["/build/_shared/chunk-4HZEYQZZ.js", "/build/_shared/chunk-C6Y3FJ3H.js", "/build/_shared/chunk-JTYDAUSD.js", "/build/_shared/chunk-VXAIFB4H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-PVKDPJJQ.js", imports: ["/build/_shared/chunk-JTYDAUSD.js", "/build/_shared/chunk-VXAIFB4H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/promise": { id: "routes/promise", parentId: "root", path: "promise", index: void 0, caseSensitive: void 0, module: "/build/routes/promise-QN3WYRFG.js", imports: ["/build/_shared/chunk-C6Y3FJ3H.js", "/build/_shared/chunk-JTYDAUSD.js", "/build/_shared/chunk-VXAIFB4H.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-B42D6B2C.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/becomeAsponser": {
    id: "routes/becomeAsponser",
    parentId: "root",
    path: "becomeAsponser",
    index: void 0,
    caseSensitive: void 0,
    module: becomeAsponser_exports
  },
  "routes/promise": {
    id: "routes/promise",
    parentId: "root",
    path: "promise",
    index: void 0,
    caseSensitive: void 0,
    module: promise_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=server.js.map
