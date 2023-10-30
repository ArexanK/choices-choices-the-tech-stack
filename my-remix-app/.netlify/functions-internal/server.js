var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
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
  links: () => links
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
    "aria-label": "logo",
    className: "text-5xl"
  }, "INK"))), /* @__PURE__ */ React.createElement("div", {
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
  }, "Become a Sponser"))));
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-4XYNMIBR.css";

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/root.jsx
var links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(NavBar, null), /* @__PURE__ */ React.createElement("main", {
    className: "container mx-auto pt-8 sm:pt-16"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)), /* @__PURE__ */ React.createElement("footer", {
    className: "fixed bottom-0 w-screen p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-gray-500 sm:text-center dark:text-gray-400"
  }, "Home"), /* @__PURE__ */ React.createElement("ul", {
    className: "flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.contentful.com/remix-tutorial/",
    className: "mr-4 hover:underline md:mr-6 "
  }, "About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/contentful/starter-remix-portfolio",
    className: "mr-4 hover:underline md:mr-6"
  }, "Promise")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/contentful/starter-remix-portfolio",
    className: "mr-4 hover:underline md:mr-6"
  }, "Become a Sponser")))), /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
}

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/routes/becomeAsponser.jsx
var becomeAsponser_exports = {};
__export(becomeAsponser_exports, {
  default: () => becomeAsponser,
  loader: () => loader,
  richTextRenderOptions: () => richTextRenderOptions
});
var import_node = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/components/Title.jsx
function Title({ title }) {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl leading-normal sm:text-5xl sm:leading-normal font-body dark:text-white"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "rounded border-b-4 border-primary dark:border-secondary"
  }, title), "\xA0", /* @__PURE__ */ React.createElement("span", {
    role: "img",
    "aria-label": title
  }));
}

// app/models/contentful.server.js
var SPACE = process.env.CONTENTFUL_SPACE_ID, TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
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
async function getBecomeAsponser2() {
  let formattedData = await (await (await apiCall(`
    {
      becomeAsponserCollection {
        items {
          title
          desc {
            json
          }
          link{
            url
          }
        }
      }
    }`)).json()).data.becomeAsponserCollection.items.map(async (BecomeAsponser) => {
    let { title, desc, link } = BecomeAsponser;
    return {
      title,
      desc,
      link
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
    }`)).json()).data.promiseCollection.items;
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
            paragraphsCollection{
              items {
                name
                story
              }
            }
           
          }
        }
      }
    `, {
    title
  })).json()).data.pageCollection.items[0];
}
var client = {
  getBecomeAsponser: getBecomeAsponser2,
  getPromise,
  getPage
};

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/routes/becomeAsponser.jsx
var import_framer_motion = require("framer-motion"), import_rich_text_react_renderer = require("@contentful/rich-text-react-renderer"), import_rich_text_types = require("@contentful/rich-text-types");
async function loader() {
  let becomeAsponser2 = await client.getBecomeAsponser(), page = await client.getPage("becomeAsponser");
  return (0, import_node.json)({ getBecomeAsponser, page });
}
var richTextRenderOptions = {
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
function becomeAsponser() {
  let { becomeAsponser: becomeAsponser2 } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-48"
  }, /* @__PURE__ */ React.createElement(Title, {
    title: "Become a Sponser"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-4 sm:grid-cols-3"
  }, becomeAsponser2.map((project) => /* @__PURE__ */ React.createElement(import_framer_motion.motion.div, {
    key: becomeAsponser2.title,
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
  })), /* @__PURE__ */ React.createElement("div", {
    className: "px-6 py-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold text-lg sm:text-xl mb-2 dark:text-secondary"
  }, project.title, " ", /* @__PURE__ */ React.createElement("a", {
    href: project.link,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("span", {
    role: "image",
    "aria-label": "internet",
    className: "cursor-pointer"
  }))), (0, import_rich_text_react_renderer.documentToReactComponents)(project.desc.json, richTextRenderOptions))))));
}

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/routes/promise.jsx
var promise_exports = {};
__export(promise_exports, {
  default: () => Promise2,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_framer_motion2 = require("framer-motion"), import_rich_text_react_renderer2 = require("@contentful/rich-text-react-renderer");
async function loader2() {
  let promise = await client.getPromise(), page = await client.getPage("Promise");
  return (0, import_node2.json)({ promise, page });
}
function Promise2() {
  let { promise } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-4 sm:px-48"
  }, /* @__PURE__ */ React.createElement(Title, {
    title: "Promise"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-6 sm:grid-cols-3"
  }, promise.map((item) => {
    let { link, sys, description, title, type, previewImage } = item;
    return /* @__PURE__ */ React.createElement("a", {
      href: link,
      key: sys.id
    }, /* @__PURE__ */ React.createElement(import_framer_motion2.motion.div, {
      className: "mt-8 max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer dark:bg-gray-700",
      whileHover: {
        scale: 1.05,
        transition: {
          duration: 0.4,
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
    }), /* @__PURE__ */ React.createElement("img", {
      src: previewImage.url,
      alt: previewImage.description
    })), /* @__PURE__ */ React.createElement("div", {
      className: "px-6 py-4"
    }, /* @__PURE__ */ React.createElement("h2", {
      className: "font-semibold text-lg mb-2 dark:text-secondary"
    }, title), /* @__PURE__ */ React.createElement("p", null, (0, import_rich_text_react_renderer2.documentToReactComponents)(description.json)))));
  })));
}

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  loader: () => loader3,
  richTextRenderOptions: () => richTextRenderOptions2
});
var import_node3 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_rich_text_react_renderer3 = require("@contentful/rich-text-react-renderer"), import_rich_text_types2 = require("@contentful/rich-text-types");
async function loader3() {
  return (0, import_node3.json)(await client.getPage("About"));
}
var richTextRenderOptions2 = {
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
    title: "About us"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 text-lg dark:text-gray-300"
  }, (0, import_rich_text_react_renderer3.documentToReactComponents)(description.json, richTextRenderOptions2)));
}

// route:/Users/arexkheyrdoon/Documents/GitHub/choices-choices-the-tech-stack/my-remix-app/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader4
});
var import_react_text_loop_next = require("react-text-loop-next"), import_framer_motion3 = require("framer-motion"), import_node4 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
var import_node5 = require("@remix-run/node");
async function loader4() {
  return (0, import_node4.json)(await client.getPage("Where The Legends Begin."));
}
function Index() {
  let { title, rolesCollection, paragraphsCollection } = (0, import_react8.useLoaderData)(), roles = {};
  rolesCollection.items.forEach((role) => {
    Object.assign(roles, Object.fromEntries([Object.values(role)]));
  });
  let paragraphs = {};
  return paragraphsCollection.items.forEach((paragraph) => {
    Object.assign(paragraphs, Object.fromEntries([Object.values(paragraph)]));
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-center mt-24 sm:mt-24 dark:text-white"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl sm:text-6xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-primary dark:text-secondary"
  }, " ", title))), /* @__PURE__ */ React.createElement("div", null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "f5b1367b", entry: { module: "/build/entry.client-WPTLBUS3.js", imports: ["/build/_shared/chunk-CYSTUDXI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GDZHROEG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-JDFSN5AC.js", imports: ["/build/_shared/chunk-AU2LR63Y.js", "/build/_shared/chunk-OTWT6UXP.js", "/build/_shared/chunk-OJUC4AHW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/becomeAsponser": { id: "routes/becomeAsponser", parentId: "root", path: "becomeAsponser", index: void 0, caseSensitive: void 0, module: "/build/routes/becomeAsponser-6GRSUFJD.js", imports: ["/build/_shared/chunk-AU2LR63Y.js", "/build/_shared/chunk-OTWT6UXP.js", "/build/_shared/chunk-VWYS4WKE.js", "/build/_shared/chunk-OJUC4AHW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-56ROB5W2.js", imports: ["/build/_shared/chunk-VWYS4WKE.js", "/build/_shared/chunk-OJUC4AHW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/promise": { id: "routes/promise", parentId: "root", path: "promise", index: void 0, caseSensitive: void 0, module: "/build/routes/promise-7332JAF7.js", imports: ["/build/_shared/chunk-OTWT6UXP.js", "/build/_shared/chunk-VWYS4WKE.js", "/build/_shared/chunk-OJUC4AHW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F5B1367B.js" };

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
