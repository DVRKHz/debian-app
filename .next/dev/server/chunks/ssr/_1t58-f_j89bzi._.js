(()=>{"use strict";module.exports = [
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$community$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/community.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$download$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/download-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$download$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/download-selector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$news$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/news.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$releases$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/releases.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$download$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/download.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const initialConfig = {
    branch: "stable",
    architecture: "amd64",
    media: "netinst"
};
function HomePage() {
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialConfig);
    const [downloadOpen, setDownloadOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const closeDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setDownloadOpen(false), []);
    function selectRelease(branch) {
        setConfig((current)=>({
                ...current,
                branch
            }));
        setDownloadOpen(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocaleProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-grow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Hero"], {
                            onOpenDownload: ()=>setDownloadOpen(true)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 41,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$download$2d$selector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DownloadSelector"], {
                            config: config,
                            onConfigChange: setConfig,
                            onOpenDownload: ()=>setDownloadOpen(true)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 42,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Features"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 47,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$releases$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Releases"], {
                            config: config,
                            onSelectBranch: selectRelease
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 48,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$news$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["News"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 49,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$community$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Community"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 50,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 40,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 52,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$download$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DownloadModal"], {
                    isOpen: downloadOpen,
                    isoName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$download$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIsoFilename"])(config),
                    onClose: closeDownload
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 53,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 38,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/community.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Community",
    ()=>Community
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-ssr] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$messages$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessagesSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/messages-square.js [app-ssr] (ecmascript) <export default as MessagesSquare>");
;
;
const resources = [
    {
        href: "https://wiki.debian.org",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        title: "Debian Wiki",
        description: "Official guides, configuration manuals, and troubleshooting documentation."
    },
    {
        href: "https://forums.debian.net",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$messages$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessagesSquare$3e$__["MessagesSquare"],
        title: "User Forums",
        description: "Ask questions, share advice, and connect with global Debian users."
    },
    {
        href: "https://bugs.debian.org",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
        title: "Bug Tracking",
        description: "Report issues, track bug fixes, and help improve package quality."
    },
    {
        href: "https://www.debian.org/devel/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        title: "Developer Corner",
        description: "Learn how to maintain packages, contribute code, and sponsor infrastructure."
    }
];
function Community() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "community",
        className: "border-t border-slate-800 bg-slate-900/40 py-20 dark:border-slate-800 dark:bg-slate-900/40 light:border-slate-200 light:bg-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-14 max-w-2xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900",
                            children: "Community & Ecosystem"
                        }, void 0, false, {
                            fileName: "[project]/components/community.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-slate-400 dark:text-slate-400 light:text-slate-600",
                            children: "Join thousands of volunteers, developers, and users powering the Debian project."
                        }, void 0, false, {
                            fileName: "[project]/components/community.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/community.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
                    children: resources.map(({ href, icon: Icon, title, description })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: href,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-debian dark:border-slate-800 dark:bg-slate-900/50 light:border-slate-200 light:bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "mb-4 h-8 w-8 text-debian transition-transform group-hover:scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/components/community.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/community.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/components/community.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, title, true, {
                            fileName: "[project]/components/community.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/community.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/community.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/community.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/debian-mark.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DebianMark",
    ()=>DebianMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function DebianMark({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        className: `fill-current ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13.88 12.685c-.4 0 .08.2.601.28.14-.1.27-.22.39-.33a3.001 3.001 0 01-.99.05m2.14-.53c.23-.33.4-.69.47-1.06-.06.27-.2.5-.33.73-.75.47-.07-.27 0-.56-.8 1.01-.11.6-.14.89m.781-2.05c.05-.721-.14-.501-.2-.221.07.04.13.5.2.22M12.38.31c.2.04.45.07.42.12.23-.05.28-.1-.43-.12m.43.12l-.15.03.14-.01V.43m6.633 9.944c.02.64-.2.95-.38 1.5l-.35.181c-.28.54.03.35-.17.78-.44.39-1.34 1.22-1.62 1.301-.201 0 .14-.25.19-.34-.591.4-.481.6-1.371.85l-.03-.06c-2.221 1.04-5.303-1.02-5.253-3.842-.03.17-.07.13-.12.2a3.551 3.552 0 012.001-3.501 3.361 3.362 0 013.732.48 3.341 3.342 0 00-2.721-1.3c-1.18.01-2.281.76-2.651 1.57-.6.38-.67 1.47-.93 1.661-.361 2.601.66 3.722 2.38 5.042.27.19.08.21.12.35a4.702 4.702 0 01-1.53-1.16c.23.33.47.66.8.91-.55-.18-1.27-1.3-1.48-1.35.93 1.66 3.78 2.921 5.261 2.3a6.203 6.203 0 01-2.33-.28c-.33-.16-.77-.51-.7-.57a5.802 5.803 0 005.902-.84c.44-.35.93-.94 1.07-.95-.2.32.04.16-.12.44.44-.72-.2-.3.46-1.24l.24.33c-.09-.6.74-1.321.66-2.262.19-.3.2.3 0 .97.29-.74.08-.85.15-1.46.08.2.18.42.23.63-.18-.7.2-1.2.28-1.6-.09-.05-.28.3-.32-.53 0-.37.1-.2.14-.28-.08-.05-.26-.32-.38-.861.08-.13.22.33.34.34-.08-.42-.2-.75-.2-1.08-.34-.68-.12.1-.4-.3-.34-1.091.3-.25.34-.74.54.77.84 1.96.981 2.46-.1-.6-.28-1.2-.49-1.76.16.07-.26-1.241.21-.37A7.823 7.824 0 0017.702 1.6c.18.17.42.39.33.42-.75-.45-.62-.48-.73-.67-.61-.25-.65.02-1.06 0C15.082.73 14.862.8 13.8.4l.05.23c-.77-.25-.9.1-1.73 0-.05-.04.27-.14.53-.18-.741.1-.701-.14-1.431.03.17-.13.36-.21.55-.32-.6.04-1.44.35-1.18.07C9.6.68 7.847 1.3 6.867 2.22L6.838 2c-.45.54-1.96 1.611-2.08 2.311l-.131.03c-.23.4-.38.85-.57 1.261-.3.52-.45.2-.4.28-.6 1.22-.9 2.251-1.16 3.102.18.27 0 1.65.07 2.76-.3 5.463 3.84 10.776 8.363 12.006.67.23 1.65.23 2.49.25-.99-.28-1.12-.15-2.08-.49-.7-.32-.85-.7-1.34-1.13l.2.35c-.971-.34-.57-.42-1.361-.67l.21-.27c-.31-.03-.83-.53-.97-.81l-.34.01c-.41-.501-.63-.871-.61-1.161l-.111.2c-.13-.21-1.52-1.901-.8-1.511-.13-.12-.31-.2-.5-.55l.14-.17c-.35-.44-.64-1.02-.62-1.2.2.24.32.3.45.33-.88-2.172-.93-.12-1.601-2.202l.15-.02c-.1-.16-.18-.34-.26-.51l.06-.6c-.63-.74-.18-3.102-.09-4.402.07-.54.53-1.1.88-1.981l-.21-.04c.4-.71 2.341-2.872 3.241-2.761.43-.55-.09 0-.18-.14.96-.991 1.26-.7 1.901-.88.7-.401-.6.16-.27-.151 1.2-.3.85-.7 2.421-.85.16.1-.39.14-.52.26 1-.49 3.151-.37 4.562.27 1.63.77 3.461 3.011 3.531 5.132l.08.02c-.04.85.13 1.821-.17 2.711l.2-.42M9.54 13.236l-.05.28c.26.35.47.73.8 1.01-.24-.47-.42-.66-.75-1.3m.62-.02c-.14-.15-.22-.34-.31-.52.08.32.26.6.43.88l-.12-.36m10.945-2.382l-.07.15c-.1.76-.34 1.511-.69 2.212.4-.73.65-1.541.75-2.362M12.45.12c.27-.1.66-.05.95-.12-.37.03-.74.05-1.1.1l.15.02M3.006 5.142c.07.57-.43.8.11.42.3-.66-.11-.18-.1-.42m-.64 2.661c.12-.39.15-.62.2-.84-.35.44-.17.53-.2.83"
        }, void 0, false, {
            fileName: "[project]/components/debian-mark.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/debian-mark.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/download-modal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadModal",
    ()=>DownloadModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
function DownloadModal({ isOpen, isoName, onClose }) {
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        function handleKeyDown(event) {
            if (event.key === "Escape") onClose();
        }
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        isOpen,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen || !isDownloading) return;
        const interval = window.setInterval(()=>{
            setProgress((current)=>{
                return Math.min(current + Math.floor(Math.random() * 15) + 5, 100);
            });
        }, 250);
        return ()=>window.clearInterval(interval);
    }, [
        isDownloading,
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (progress === 100) setIsDownloading(false);
    }, [
        progress
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen || progress < 100) return;
        const timeout = window.setTimeout(onClose, 2000);
        return ()=>window.clearTimeout(timeout);
    }, [
        isOpen,
        onClose,
        progress
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setProgress(0);
            setIsDownloading(false);
        }
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    function closeModal() {
        setIsDownloading(false);
        setProgress(0);
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md",
        onMouseDown: (event)=>{
            if (event.target === event.currentTarget) closeModal();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "download-dialog-title",
            className: "relative w-full max-w-lg animate-fade-in rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 light:border-slate-200 light:bg-white sm:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: closeModal,
                    "aria-label": "Close download dialog",
                    className: "absolute right-5 top-5 p-2 text-slate-400 hover:text-white light:text-slate-500 light:hover:text-slate-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/components/download-modal.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/download-modal.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl bg-debian/10 p-3 text-debian",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/components/download-modal.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/download-modal.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    id: "download-dialog-title",
                                    className: "text-xl font-bold text-white light:text-slate-900",
                                    children: "Download Debian ISO"
                                }, void 0, false, {
                                    fileName: "[project]/components/download-modal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400 light:text-slate-600",
                                    children: "Direct download mirror simulator"
                                }, void 0, false, {
                                    fileName: "[project]/components/download-modal.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/download-modal.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/download-modal.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 rounded-xl border border-slate-800 bg-slate-950 p-4 dark:border-slate-800 dark:bg-slate-950 light:border-slate-200 light:bg-slate-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between gap-4 text-xs text-slate-400 light:text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Selected Target:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/download-modal.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "break-all text-right font-mono font-semibold text-debian",
                                            children: isoName
                                        }, void 0, false, {
                                            fileName: "[project]/components/download-modal.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/download-modal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between gap-4 text-xs text-slate-400 light:text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Mirror Location:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/download-modal.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-right text-slate-200 light:text-slate-800",
                                            children: "Global Fast CDN (Auto-detected)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/download-modal.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/download-modal.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/download-modal.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        (isDownloading || progress > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            "aria-live": "polite",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between font-mono text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: progress === 100 ? "text-green-400" : "text-slate-300 light:text-slate-700",
                                            children: progress === 100 ? "Download Complete! Check Downloads folder." : "Downloading ISO..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/download-modal.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-debian",
                                            children: [
                                                progress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/download-modal.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/download-modal.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    role: "progressbar",
                                    "aria-label": "Download progress",
                                    "aria-valuemin": 0,
                                    "aria-valuemax": 100,
                                    "aria-valuenow": progress,
                                    className: "h-2.5 w-full overflow-hidden rounded-full border border-slate-800 bg-slate-950 light:border-slate-300 light:bg-slate-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-debian transition-all duration-300",
                                        style: {
                                            width: `${progress}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/download-modal.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/download-modal.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/download-modal.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/download-modal.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                setProgress(0);
                                setIsDownloading(true);
                            },
                            disabled: isDownloading || progress === 100,
                            className: "flex flex-1 items-center justify-center gap-2 rounded-xl bg-debian py-3 font-bold text-white transition-all hover:bg-debian-hover disabled:cursor-not-allowed disabled:opacity-60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/download-modal.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: progress === 100 ? "Download Complete" : "Start Download"
                                }, void 0, false, {
                                    fileName: "[project]/components/download-modal.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/download-modal.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: closeModal,
                            className: "rounded-xl border border-slate-800 px-5 text-sm font-semibold text-slate-300 hover:text-white light:border-slate-300 light:text-slate-700 light:hover:text-slate-900",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/download-modal.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/download-modal.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/download-modal.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/download-modal.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/download-selector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadSelector",
    ()=>DownloadSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$disc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Disc$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/disc.js [app-ssr] (ecmascript) <export default as Disc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DownloadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-download.js [app-ssr] (ecmascript) <export default as DownloadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$download$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/download.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-ssr] (ecmascript)");
;
;
;
;
const selectClass = "w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200 focus:border-debian focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 light:border-slate-300 light:bg-slate-50 light:text-slate-800";
function DownloadSelector({ config, onConfigChange, onOpenDownload }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const mediaDescription = config.media === "netinst" ? `~628 MB • ${t("netinst")}` : `~3.4 GB • ${t(config.media)}`;
    function update(key, value) {
        onConfigChange({
            ...config,
            [key]: value
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "download",
        className: "border-y border-slate-800/50 bg-slate-900/40 py-16 dark:border-slate-800/50 dark:bg-slate-900/40 light:border-slate-200 light:bg-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900",
                            children: t("selectorTitle")
                        }, void 0, false, {
                            fileName: "[project]/components/download-selector.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-slate-400 dark:text-slate-400 light:text-slate-600",
                            children: t("selectorDescription")
                        }, void 0, false, {
                            fileName: "[project]/components/download-selector.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/download-selector.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 light:border-slate-200 light:bg-white sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 grid grid-cols-1 gap-6 md:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mb-2 block",
                                            children: t("releaseField")
                                        }, void 0, false, {
                                            fileName: "[project]/components/download-selector.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: config.branch,
                                            onChange: (event)=>update("branch", event.target.value),
                                            className: selectClass,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "stable",
                                                    children: t("stableOption")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "testing",
                                                    children: t("testingOption")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "unstable",
                                                    children: t("unstableOption")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/download-selector.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/download-selector.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mb-2 block",
                                            children: t("architectureField")
                                        }, void 0, false, {
                                            fileName: "[project]/components/download-selector.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: config.architecture,
                                            onChange: (event)=>update("architecture", event.target.value),
                                            className: selectClass,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "amd64",
                                                    children: t("pc64")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "arm64",
                                                    children: t("arm64")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "i386",
                                                    children: t("pc32")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ppc64el",
                                                    children: t("power")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "riscv64",
                                                    children: t("riscV")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/download-selector.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/download-selector.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mb-2 block",
                                            children: t("installerField")
                                        }, void 0, false, {
                                            fileName: "[project]/components/download-selector.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: config.media,
                                            onChange: (event)=>update("media", event.target.value),
                                            className: selectClass,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "netinst",
                                                    children: t("netinst")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "gnome",
                                                    children: t("gnome")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "kde",
                                                    children: t("kde")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "xfce",
                                                    children: t("xfce")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/download-selector.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/download-selector.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/download-selector.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-800/80 bg-slate-950/70 p-5 dark:border-slate-800/80 dark:bg-slate-950/70 light:border-slate-200 light:bg-slate-50 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl bg-debian/10 p-3 text-debian",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$disc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Disc$3e$__["Disc"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/download-selector.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/download-selector.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-base font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$download$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIsoFilename"])(config)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-400 dark:text-slate-400 light:text-slate-600",
                                                    children: [
                                                        t("size"),
                                                        " ",
                                                        mediaDescription
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/download-selector.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/download-selector.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/download-selector.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onOpenDownload,
                                    className: "flex w-full items-center justify-center gap-2 rounded-xl bg-debian px-6 py-3 text-sm font-bold text-white transition-all hover:bg-debian-hover sm:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DownloadCloud$3e$__["DownloadCloud"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/download-selector.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t("downloadISO")
                                        }, void 0, false, {
                                            fileName: "[project]/components/download-selector.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/download-selector.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/download-selector.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/download-selector.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/download-selector.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/download-selector.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/features.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Features",
    ()=>Features
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-keyhole.js [app-ssr] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-ssr] (ecmascript)");
;
;
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: "featureStableTitle",
        description: "featureStableDescription"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"],
        title: "featureFreeTitle",
        description: "featureFreeDescription"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        title: "featureHardwareTitle",
        description: "featureHardwareDescription"
    }
];
function Features() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        className: "py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-16 max-w-3xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-2 text-xs font-bold uppercase tracking-widest text-debian",
                            children: t("featureEyebrow")
                        }, void 0, false, {
                            fileName: "[project]/components/features.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl font-extrabold text-slate-100 sm:text-4xl dark:text-slate-100 light:text-slate-900",
                            children: t("featureTitle")
                        }, void 0, false, {
                            fileName: "[project]/components/features.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/features.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-8 md:grid-cols-3",
                    children: features.map(({ icon: Icon, title, description })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:border-debian/50 dark:border-slate-800 dark:bg-slate-900/60 light:border-slate-200 light:bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-debian/10 text-debian transition-transform group-hover:scale-110",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/features.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/features.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-3 text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900",
                                    children: t(title)
                                }, void 0, false, {
                                    fileName: "[project]/components/features.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600",
                                    children: t(description)
                                }, void 0, false, {
                                    fileName: "[project]/components/features.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, title, true, {
                            fileName: "[project]/components/features.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/features.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/features.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/features.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$debian$2d$mark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/debian-mark.tsx [app-ssr] (ecmascript)");
;
;
const legalLinks = [
    [
        "https://www.debian.org/legal/privacy",
        "Privacy Policy"
    ],
    [
        "https://www.debian.org/social_contract",
        "Social Contract"
    ],
    [
        "https://www.debian.org/donations",
        "Donate"
    ]
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-slate-800/80 bg-slate-950 py-12 text-sm text-slate-400 dark:border-slate-800/80 dark:bg-slate-950 dark:text-slate-400 light:border-slate-200 light:bg-white light:text-slate-600",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$debian$2d$mark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DebianMark"], {
                            className: "h-6 w-6 text-debian"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700",
                            children: "Debian Project"
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs text-slate-500 dark:text-slate-500 md:text-left light:text-slate-600",
                    children: "Debian is a registered trademark owned by Software in the Public Interest, Inc."
                }, void 0, false, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex gap-6 text-xs",
                    "aria-label": "Legal links",
                    children: legalLinks.map(([href, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: href,
                            className: "hover:text-debian",
                            children: label
                        }, label, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/footer.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$debian$2d$mark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/debian-mark.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const links = [
    {
        href: "#download",
        key: "navDownload"
    },
    {
        href: "#features",
        key: "navWhy"
    },
    {
        href: "#releases",
        key: "navReleases"
    },
    {
        href: "#news",
        key: "navNews"
    },
    {
        href: "#community",
        key: "navCommunity"
    }
];
function Header() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchMessage, setSearchMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedTheme = window.localStorage.getItem("theme");
        const dark = savedTheme !== "light";
        document.documentElement.classList.toggle("dark", dark);
        document.documentElement.classList.toggle("light", !dark);
        setIsDark(dark);
    }, []);
    function toggleTheme() {
        const nextIsDark = !isDark;
        document.documentElement.classList.toggle("dark", nextIsDark);
        document.documentElement.classList.toggle("light", !nextIsDark);
        window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
        setIsDark(nextIsDark);
    }
    function searchPage(event) {
        event.preventDefault();
        const query = searchQuery.trim().toLocaleLowerCase();
        if (!query) {
            setSearchMessage(t("enterSearch"));
            return;
        }
        const matchingSection = Array.from(document.querySelectorAll("main section")).find((section)=>section.innerText.toLocaleLowerCase().includes(query));
        if (!matchingSection) {
            setSearchMessage(t("noSections", {
                query: searchQuery.trim()
            }));
            return;
        }
        const heading = matchingSection.querySelector("h1, h2, h3")?.textContent?.trim() ?? t("search");
        matchingSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        setSearchMessage(t("showing", {
            heading
        }));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80 light:border-slate-200 light:bg-white/80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-20 w-full items-center justify-between gap-3 px-3 sm:gap-5 sm:px-5 lg:gap-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "group flex shrink-0 items-center gap-3",
                        "aria-label": t("home"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$debian$2d$mark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DebianMark"], {
                                className: "h-10 w-10 text-debian transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-bold leading-none tracking-tight text-white dark:text-white light:text-slate-900",
                                        children: "debian"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-debian",
                                        children: t("universalOS")
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-4 text-sm font-medium lg:flex xl:gap-8",
                        "aria-label": t("navCommunity"),
                        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "text-slate-300 transition-colors hover:text-debian dark:text-slate-300 light:text-slate-600",
                                children: t(link.key)
                            }, link.href, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex min-w-0 items-center gap-2 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                role: "search",
                                onSubmit: searchPage,
                                className: "flex min-w-0 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "site-search",
                                        className: "sr-only",
                                        children: t("searchPage")
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-10 w-24 items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-3 text-slate-400 transition-colors focus-within:border-debian sm:w-48 lg:w-56 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 light:border-slate-200 light:bg-slate-100 light:text-slate-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-4 w-4 shrink-0",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "site-search",
                                                type: "search",
                                                value: searchQuery,
                                                onChange: (event)=>{
                                                    setSearchQuery(event.target.value);
                                                    setSearchMessage("");
                                                },
                                                placeholder: t("search"),
                                                className: "min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500 dark:text-slate-100 light:text-slate-800 light:placeholder:text-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "sr-only",
                                        children: t("search")
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        role: "status",
                                        "aria-live": "polite",
                                        children: searchMessage
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: toggleTheme,
                                "aria-label": t(isDark ? "lightTheme" : "darkTheme"),
                                className: "rounded-xl border border-slate-800 bg-slate-900/50 p-2 text-slate-400 transition-all hover:text-white dark:border-slate-800 dark:bg-slate-900/50 dark:hover:text-white light:border-slate-200 light:bg-slate-100 light:hover:text-slate-900",
                                children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 129,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 129,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setMenuOpen((open)=>!open),
                                "aria-label": t(menuOpen ? "closeMenu" : "openMenu"),
                                "aria-expanded": menuOpen,
                                className: "rounded-xl p-2 text-slate-600 hover:text-slate-900 focus:outline-none md:hidden dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900",
                                children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 138,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 138,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "space-y-3 border-b border-slate-800 bg-slate-950/95 px-4 pb-6 pt-2 dark:bg-slate-950/95 light:border-slate-200 light:bg-white md:hidden",
                "aria-label": t("navCommunity"),
                children: [
                    links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            onClick: ()=>setMenuOpen(false),
                            className: "block py-2 text-base font-medium text-slate-300 hover:text-debian light:text-slate-700",
                            children: t(link.key)
                        }, link.href, false, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        role: "search",
                        onSubmit: (event)=>{
                            searchPage(event);
                            setMenuOpen(false);
                        },
                        className: "flex items-center gap-2 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "mobile-site-search",
                                className: "sr-only",
                                children: t("searchPage")
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-11 min-w-0 flex-1 items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-3 text-slate-400 dark:border-slate-800 dark:bg-slate-900/50 light:border-slate-200 light:bg-slate-100 light:text-slate-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "h-4 w-4 shrink-0",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "mobile-site-search",
                                        type: "search",
                                        value: searchQuery,
                                        onChange: (event)=>{
                                            setSearchQuery(event.target.value);
                                            setSearchMessage("");
                                        },
                                        placeholder: t("searchPage"),
                                        className: "min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500 dark:text-slate-100 light:text-slate-800 light:placeholder:text-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                "aria-label": t("searchPage"),
                                className: "rounded-xl bg-debian p-3 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "h-4 w-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#download",
                        onClick: ()=>setMenuOpen(false),
                        className: "flex w-full items-center justify-center gap-2 rounded-xl bg-debian py-3 font-semibold text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("getDebian")
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/header.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-ssr] (ecmascript)");
;
;
;
const stats = [
    [
        "59,000+",
        "statPackages"
    ],
    [
        "10+",
        "statArchitectures"
    ],
    [
        "100%",
        "statFree"
    ],
    [
        "30+ Years",
        "statStability"
    ]
];
function Hero({ onOpenDownload }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden pb-20 pt-12 md:pb-32 md:pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-debian/10 blur-[120px]"
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute right-10 top-1/3 h-72 w-72 rounded-full bg-debian/5 blur-[90px]"
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-3xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 inline-flex items-center gap-2 rounded-full border border-debian/30 bg-debian/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-debian light:text-debian-dark",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 animate-pulse rounded-full bg-debian"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                t("heroBadge")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-100 sm:text-6xl dark:text-slate-100 light:text-slate-900",
                            children: [
                                t("heroStart"),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: t("heroEnd")
                                }, void 0, false, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-10 text-lg font-normal leading-relaxed text-slate-400 sm:text-xl dark:text-slate-400 light:text-slate-600",
                            children: t("heroDescription")
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center gap-4 sm:flex-row",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onOpenDownload,
                                className: "glow-effect inline-flex w-full transform items-center justify-center gap-3 rounded-2xl bg-debian px-8 py-4 text-base font-bold text-white transition-all hover:bg-debian-hover active:scale-95 sm:w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t("heroDownload")
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 grid grid-cols-2 gap-6 border-t border-slate-800/60 pt-10 dark:border-slate-800/60 light:border-slate-200 md:grid-cols-4",
                            children: stats.map(([value, labelKey])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-extrabold text-slate-100 sm:text-3xl dark:text-white light:text-slate-900",
                                            children: value
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-xs text-slate-400 dark:text-slate-400 sm:text-sm light:text-slate-600",
                                            children: t(labelKey)
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, labelKey, true, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/news.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "News",
    ()=>News
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-ssr] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-ssr] (ecmascript)");
;
;
;
const newsItems = [
    {
        date: "2026-09-12",
        title: "news1Title",
        description: "news1Description",
        href: "https://www.debian.org/News/2026/20260912"
    },
    {
        date: "2026-08-31",
        title: "news2Title",
        description: "news2Description",
        href: "https://www.debian.org/News/2026/20260831"
    },
    {
        date: "2026-08-07",
        title: "news3Title",
        description: "news3Description",
        href: "https://www.debian.org/News/2026/20260807"
    }
];
function News() {
    const { locale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "news",
        className: "border-t border-slate-800/80 bg-slate-900/30 py-20 dark:border-slate-800/80 dark:bg-slate-900/30 light:border-slate-200 light:bg-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 inline-flex items-center gap-2 text-sm font-semibold text-debian",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"], {
                                            className: "h-4 w-4",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/news.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t("newsFrom")
                                        }, void 0, false, {
                                            fileName: "[project]/components/news.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/news.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900",
                                    children: t("newsTitle")
                                }, void 0, false, {
                                    fileName: "[project]/components/news.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/news.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.debian.org/News/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "inline-flex items-center gap-1 text-sm font-semibold text-debian hover:text-debian-hover",
                            children: [
                                t("allNews"),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-4 w-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/news.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/news.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/news.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-6 md:grid-cols-3",
                    children: newsItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 dark:border-slate-800 dark:bg-slate-900/60 light:border-slate-200 light:bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                    dateTime: item.date,
                                    className: "mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-400 light:text-slate-600",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localizedNewsDates"][locale][index]
                                }, void 0, false, {
                                    fileName: "[project]/components/news.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-3 text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900",
                                    children: t(item.title)
                                }, void 0, false, {
                                    fileName: "[project]/components/news.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-6 flex-1 text-sm leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600",
                                    children: t(item.description)
                                }, void 0, false, {
                                    fileName: "[project]/components/news.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "inline-flex items-center gap-1 self-start text-sm font-semibold text-debian hover:text-debian-hover",
                                    children: [
                                        t("readAnnouncement"),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            className: "h-4 w-4",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/news.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/news.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/components/news.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/news.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/news.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/news.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/releases.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Releases",
    ()=>Releases
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.tsx [app-ssr] (ecmascript)");
;
;
const releases = [
    {
        branch: "stable",
        title: "stableTitle",
        version: "stableVersion",
        description: "stableDescription",
        action: "stableAction"
    },
    {
        branch: "testing",
        title: "testingTitle",
        version: "testingVersion",
        description: "testingDescription",
        action: "testingAction"
    },
    {
        branch: "unstable",
        title: "unstableTitle",
        version: "unstableVersion",
        description: "unstableDescription",
        action: "unstableAction"
    }
];
function Releases({ config, onSelectBranch }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "releases",
        className: "py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-16 max-w-3xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mb-2 text-xs font-bold uppercase tracking-widest text-debian",
                            children: t("releaseEyebrow")
                        }, void 0, false, {
                            fileName: "[project]/components/releases.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900",
                            children: t("releaseTitle")
                        }, void 0, false, {
                            fileName: "[project]/components/releases.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/releases.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-8 md:grid-cols-3",
                    children: releases.map((release)=>{
                        const isStable = release.branch === "stable";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `relative flex flex-col justify-between rounded-2xl p-6 ${isStable ? "border-2 border-debian bg-slate-900/80 shadow-lg dark:bg-slate-900/80 light:bg-white" : "border border-slate-800 bg-slate-900/60 dark:border-slate-800 dark:bg-slate-900/60 light:border-slate-200 light:bg-white"}`,
                            children: [
                                isStable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-3 right-6 rounded-full bg-debian px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white",
                                    children: t("recommended")
                                }, void 0, false, {
                                    fileName: "[project]/components/releases.tsx",
                                    lineNumber: 65,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: `mb-1 text-2xl font-extrabold ${isStable ? "text-debian" : "text-slate-100 dark:text-slate-100 light:text-slate-900"}`,
                                            children: t(release.title)
                                        }, void 0, false, {
                                            fileName: "[project]/components/releases.tsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-4 text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600",
                                            children: t(release.version)
                                        }, void 0, false, {
                                            fileName: "[project]/components/releases.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-6 text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600",
                                            children: t(release.description)
                                        }, void 0, false, {
                                            fileName: "[project]/components/releases.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/releases.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onSelectBranch(release.branch),
                                    className: `w-full rounded-xl py-2.5 text-center text-sm font-bold transition-all ${isStable ? "bg-debian text-white hover:bg-debian-hover" : "border border-slate-700 text-slate-200 hover:border-debian dark:text-slate-200 light:text-slate-800"}`,
                                    children: t(release.action)
                                }, void 0, false, {
                                    fileName: "[project]/components/releases.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, release.branch, true, {
                            fileName: "[project]/components/releases.tsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/releases.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/releases.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/releases.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/download.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIsoFilename",
    ()=>getIsoFilename,
    "getMediaDescription",
    ()=>getMediaDescription
]);
const releaseVersions = {
    stable: "13.0.0",
    testing: "forky-DI-alpha",
    unstable: "sid-daily"
};
function getIsoFilename({ branch, architecture, media }) {
    return `debian-${releaseVersions[branch]}-${architecture}-${media}.iso`;
}
function getMediaDescription(media) {
    return media === "netinst" ? "~628 MB • Minimal Netinstall ISO" : "~3.4 GB • Live ISO with GUI Desktop";
}
}),
"[project]/lib/i18n.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocaleProvider",
    ()=>LocaleProvider,
    "locales",
    ()=>locales,
    "localizedNewsDates",
    ()=>localizedNewsDates,
    "useLocale",
    ()=>useLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const locales = [
    "ar",
    "bg",
    "ca",
    "zh-CN",
    "zh-TW",
    "hr",
    "cs",
    "da",
    "nl",
    "en",
    "fi",
    "fr",
    "gl",
    "de",
    "el",
    "hu",
    "id",
    "it",
    "ja",
    "ko",
    "nb",
    "fa",
    "pl",
    "pt",
    "ro",
    "ru",
    "sk",
    "es",
    "sv",
    "tr",
    "uk",
    "vi"
];
const english = {
    navDownload: "Download",
    navWhy: "Why Debian",
    navReleases: "Releases",
    navNews: "News",
    navCommunity: "Community & Docs",
    universalOS: "Universal OS",
    home: "Debian home",
    searchPage: "Search this page",
    search: "Search",
    enterSearch: "Enter a search term.",
    noSections: "No sections found for “{query}”.",
    showing: "Showing {heading}.",
    lightTheme: "Switch to light theme",
    darkTheme: "Switch to dark theme",
    openMenu: "Open mobile menu",
    closeMenu: "Close mobile menu",
    getDebian: "Get Debian 13",
    heroBadge: 'Debian 13 "Trixie" is the Current Stable Release',
    heroStart: "The Rock-Solid Foundation for",
    heroEnd: "Your Digital Freedom",
    heroDescription: "Empowering servers, desktops, cloud infrastructure, and embedded devices worldwide. Free, open, and community-driven since 1993.",
    heroDownload: "Download Debian 13",
    statPackages: "Software Packages",
    statArchitectures: "Architectures Supported",
    statFree: "Free & Open Source",
    statStability: "Proven Stability",
    selectorTitle: "Quick Download Selector",
    selectorDescription: "Find the exact Debian image tailored for your hardware and use case.",
    releaseField: "1. Release Branch",
    architectureField: "2. Architecture",
    installerField: "3. Installer / Desktop",
    stableOption: "Stable 13 (Trixie) - Recommended",
    testingOption: "Testing (Forky) - Next Gen",
    unstableOption: "Unstable (Sid) - Rolling",
    pc64: "64-bit PC (amd64 / x86_64)",
    arm64: "ARM64 / AArch64 (Raspberry Pi, Apple M-series VM)",
    pc32: "32-bit PC (i386)",
    power: "POWER Processors (ppc64el)",
    riscV: "RISC-V 64-bit (riscv64)",
    netinst: "Standard Netinst (Minimal ISO)",
    gnome: "Live ISO with GNOME Desktop",
    kde: "Live ISO with KDE Plasma",
    xfce: "Live ISO with XFCE Light",
    size: "Size:",
    downloadISO: "Download ISO",
    featureEyebrow: "Built for Performance & Freedom",
    featureTitle: "Why Millions Choose Debian",
    featureStableTitle: "Unmatched Stability",
    featureStableDescription: "Debian undergoes rigorous testing before any release. Choose Debian for critical infrastructure where uptime and reliability are non-negotiable.",
    featureFreeTitle: "100% Free Software",
    featureFreeDescription: "Guided by the Debian Free Software Guidelines (DFSG), Debian guarantees true software independence, user privacy, and open collaboration.",
    featureHardwareTitle: "Universal Hardware",
    featureHardwareDescription: "Run Debian on almost anything—from modern 64-bit servers and ARM microcontrollers to legacy 32-bit platforms and cloud VMs.",
    releaseEyebrow: "Flexible Release Model",
    releaseTitle: "Choose Your Distribution Flavor",
    recommended: "Recommended",
    stableTitle: "Debian Stable",
    stableVersion: 'Version 13 "Trixie" (Current Stable)',
    stableDescription: "Thoroughly tested, rock-solid security updates. Ideal for production environments, web servers, and enterprise workstations.",
    stableAction: "Get Stable 13",
    testingTitle: "Debian Testing",
    testingVersion: 'Codename "Forky"',
    testingDescription: "Features newer software packages while preparing for the next stable release. Great for modern desktop enthusiasts.",
    testingAction: "Explore Testing",
    unstableTitle: "Debian Unstable",
    unstableVersion: 'Codename "Sid"',
    unstableDescription: "Rolling release development branch with cutting-edge packages. Designed for developers and Linux contributors.",
    unstableAction: "Explore Sid",
    newsFrom: "From the Debian Project",
    newsTitle: "Project News",
    allNews: "All Debian news",
    news1Title: "Debian 13.7 released",
    news1Description: "The latest point release for Debian 13 includes security fixes and corrections for important issues.",
    news2Title: "Debian 11 support reaches end of life",
    news2Description: "The Bullseye Long Term Support period has ended. Debian 11 users should plan an upgrade.",
    news3Title: "DebConf26 closes; DebConf27 announced",
    news3Description: "The annual Debian contributors conference wrapped up, with the next edition announced.",
    readAnnouncement: "Read announcement",
    communityTitle: "Community & Ecosystem",
    communityDescription: "Join thousands of volunteers, developers, and users powering the Debian project.",
    wikiTitle: "Debian Wiki",
    wikiDescription: "Official guides, configuration manuals, and troubleshooting documentation.",
    forumsTitle: "User Forums",
    forumsDescription: "Ask questions, share advice, and connect with global Debian users.",
    bugsTitle: "Bug Tracking",
    bugsDescription: "Report issues, track bug fixes, and help improve package quality.",
    developerTitle: "Developer Corner",
    developerDescription: "Learn how to maintain packages, contribute code, and sponsor infrastructure.",
    footerProject: "Debian Project",
    trademark: "Debian is a registered trademark owned by Software in the Public Interest, Inc.",
    legalLinks: "Legal links",
    privacy: "Privacy Policy",
    socialContract: "Social Contract",
    donate: "Donate",
    closeDialog: "Close download dialog",
    modalTitle: "Download Debian ISO",
    modalSubtitle: "Direct download mirror simulator",
    selectedTarget: "Selected Target:",
    mirrorLocation: "Mirror Location:",
    autoMirror: "Global Fast CDN (Auto-detected)",
    downloadCompleteFolder: "Download Complete! Check Downloads folder.",
    downloading: "Downloading ISO...",
    downloadProgress: "Download progress",
    downloadComplete: "Download Complete",
    startDownload: "Start Download",
    cancel: "Cancel"
};
const coreKeys = [
    "navDownload",
    "navWhy",
    "navReleases",
    "navNews",
    "navCommunity",
    "universalOS",
    "searchPage",
    "search",
    "enterSearch",
    "lightTheme",
    "darkTheme",
    "openMenu",
    "closeMenu",
    "getDebian",
    "heroDownload",
    "selectorTitle",
    "releaseField",
    "architectureField",
    "installerField",
    "downloadISO",
    "featureTitle",
    "releaseTitle",
    "recommended",
    "newsTitle",
    "allNews",
    "readAnnouncement",
    "communityTitle",
    "wikiTitle",
    "forumsTitle",
    "bugsTitle",
    "developerTitle",
    "footerProject",
    "privacy",
    "socialContract",
    "donate",
    "closeDialog",
    "modalTitle",
    "modalSubtitle",
    "selectedTarget",
    "mirrorLocation",
    "downloadCompleteFolder",
    "downloading",
    "downloadProgress",
    "downloadComplete",
    "startDownload",
    "cancel"
];
const coreTranslations = {
    ar: [
        "تنزيل",
        "لماذا ديبيان",
        "الإصدارات",
        "الأخبار",
        "المجتمع والوثائق",
        "نظام التشغيل الشامل",
        "ابحث في هذه الصفحة",
        "بحث",
        "أدخل عبارة للبحث.",
        "التبديل إلى المظهر الفاتح",
        "التبديل إلى المظهر الداكن",
        "فتح قائمة الهاتف",
        "إغلاق قائمة الهاتف",
        "احصل على ديبيان 13",
        "تنزيل ديبيان 13",
        "اختيار التنزيل السريع",
        "فرع الإصدار",
        "المعمارية",
        "المثبت / سطح المكتب",
        "تنزيل ISO",
        "لماذا يختار الملايين ديبيان",
        "اختر إصدار التوزيعة",
        "موصى به",
        "أخبار المشروع",
        "كل أخبار ديبيان",
        "اقرأ الإعلان",
        "المجتمع والنظام البيئي",
        "ويكي ديبيان",
        "منتديات المستخدمين",
        "تتبع الأخطاء",
        "ركن المطورين",
        "مشروع ديبيان",
        "سياسة الخصوصية",
        "العقد الاجتماعي",
        "تبرع",
        "إغلاق حوار التنزيل",
        "تنزيل Debian ISO",
        "محاكاة مرآة التنزيل المباشر",
        "الهدف المحدد:",
        "موقع المرآة:",
        "اكتمل التنزيل! تحقق من مجلد التنزيلات.",
        "جارٍ تنزيل ISO...",
        "تقدم التنزيل",
        "اكتمل التنزيل",
        "بدء التنزيل",
        "إلغاء"
    ],
    bg: [
        "Изтегляне",
        "Защо Debian",
        "Издания",
        "Новини",
        "Общност и документация",
        "Универсална операционна система",
        "Търсене в страницата",
        "Търсене",
        "Въведете дума за търсене.",
        "Светла тема",
        "Тъмна тема",
        "Отвори мобилното меню",
        "Затвори мобилното меню",
        "Вземете Debian 13",
        "Изтеглете Debian 13",
        "Бърз избор за изтегляне",
        "Клон на изданието",
        "Архитектура",
        "Инсталатор / работен плот",
        "Изтегли ISO",
        "Защо милиони избират Debian",
        "Изберете вариант на дистрибуцията",
        "Препоръчително",
        "Новини по проекта",
        "Всички новини за Debian",
        "Прочетете съобщението",
        "Общност и екосистема",
        "Уики на Debian",
        "Потребителски форуми",
        "Проследяване на грешки",
        "Кът за разработчици",
        "Проектът Debian",
        "Политика за поверителност",
        "Социален договор",
        "Дарете",
        "Затваряне на прозореца за изтегляне",
        "Изтегляне на Debian ISO",
        "Симулатор на директно огледало за изтегляне",
        "Избрана цел:",
        "Местоположение на огледалото:",
        "Изтеглянето завърши! Проверете папката за изтегляния.",
        "Изтегляне на ISO...",
        "Напредък на изтеглянето",
        "Изтеглянето завърши",
        "Започни изтегляне",
        "Отказ"
    ],
    ca: [
        "Baixa",
        "Per què Debian",
        "Versions",
        "Notícies",
        "Comunitat i documentació",
        "Sistema operatiu universal",
        "Cerca en aquesta pàgina",
        "Cerca",
        "Introdueix un terme de cerca.",
        "Canvia al tema clar",
        "Canvia al tema fosc",
        "Obre el menú mòbil",
        "Tanca el menú mòbil",
        "Obtén Debian 13",
        "Baixa Debian 13",
        "Selector de baixada ràpida",
        "Branca de la versió",
        "Arquitectura",
        "Instal·lador / escriptori",
        "Baixa ISO",
        "Per què milions trien Debian",
        "Tria una variant de distribució",
        "Recomanat",
        "Notícies del projecte",
        "Totes les notícies de Debian",
        "Llegeix l'anunci",
        "Comunitat i ecosistema",
        "Viqui de Debian",
        "Fòrums d'usuaris",
        "Seguiment d'errors",
        "Espai de desenvolupadors",
        "Projecte Debian",
        "Política de privadesa",
        "Contracte social",
        "Dona",
        "Tanca el diàleg de baixada",
        "Baixa la ISO de Debian",
        "Simulador de rèplica de baixada directa",
        "Objectiu seleccionat:",
        "Ubicació de la rèplica:",
        "Baixada completada! Consulta la carpeta Baixades.",
        "Baixant la ISO...",
        "Progrés de la baixada",
        "Baixada completada",
        "Inicia la baixada",
        "Cancel·la"
    ],
    "zh-CN": [
        "下载",
        "为什么选择 Debian",
        "发行版",
        "新闻",
        "社区与文档",
        "通用操作系统",
        "搜索此页面",
        "搜索",
        "请输入搜索词。",
        "切换到浅色主题",
        "切换到深色主题",
        "打开移动菜单",
        "关闭移动菜单",
        "获取 Debian 13",
        "下载 Debian 13",
        "快速下载选择器",
        "发行分支",
        "体系结构",
        "安装程序 / 桌面",
        "下载 ISO",
        "数百万用户选择 Debian 的原因",
        "选择发行版类型",
        "推荐",
        "项目新闻",
        "全部 Debian 新闻",
        "阅读公告",
        "社区与生态系统",
        "Debian 维基",
        "用户论坛",
        "错误跟踪",
        "开发者专区",
        "Debian 项目",
        "隐私政策",
        "社会契约",
        "捐赠",
        "关闭下载对话框",
        "下载 Debian ISO",
        "直接下载镜像模拟器",
        "所选目标：",
        "镜像位置：",
        "下载完成！请查看下载文件夹。",
        "正在下载 ISO...",
        "下载进度",
        "下载完成",
        "开始下载",
        "取消"
    ],
    "zh-TW": [
        "下載",
        "為什麼選擇 Debian",
        "版本",
        "新聞",
        "社群與文件",
        "通用作業系統",
        "搜尋此頁面",
        "搜尋",
        "請輸入搜尋詞。",
        "切換至淺色主題",
        "切換至深色主題",
        "開啟行動版選單",
        "關閉行動版選單",
        "取得 Debian 13",
        "下載 Debian 13",
        "快速下載選擇器",
        "發行分支",
        "架構",
        "安裝程式 / 桌面",
        "下載 ISO",
        "數百萬人選擇 Debian 的原因",
        "選擇發行版類型",
        "推薦",
        "專案新聞",
        "所有 Debian 新聞",
        "閱讀公告",
        "社群與生態系統",
        "Debian 維基",
        "使用者論壇",
        "錯誤追蹤",
        "開發者專區",
        "Debian 專案",
        "隱私權政策",
        "社會契約",
        "捐款",
        "關閉下載對話框",
        "下載 Debian ISO",
        "直接下載鏡像模擬器",
        "選取目標：",
        "鏡像位置：",
        "下載完成！請查看下載資料夾。",
        "正在下載 ISO...",
        "下載進度",
        "下載完成",
        "開始下載",
        "取消"
    ],
    hr: [
        "Preuzmi",
        "Zašto Debian",
        "Izdanja",
        "Vijesti",
        "Zajednica i dokumentacija",
        "Univerzalni operacijski sustav",
        "Pretraži ovu stranicu",
        "Pretraži",
        "Unesite pojam za pretraživanje.",
        "Svijetla tema",
        "Tamna tema",
        "Otvori mobilni izbornik",
        "Zatvori mobilni izbornik",
        "Preuzmi Debian 13",
        "Preuzmi Debian 13",
        "Brzi odabir preuzimanja",
        "Grana izdanja",
        "Arhitektura",
        "Instalacijski program / radna površina",
        "Preuzmi ISO",
        "Zašto milijuni biraju Debian",
        "Odaberite varijantu distribucije",
        "Preporučeno",
        "Vijesti projekta",
        "Sve Debianove vijesti",
        "Pročitaj objavu",
        "Zajednica i ekosustav",
        "Debian Wiki",
        "Korisnički forumi",
        "Praćenje grešaka",
        "Kutak za razvojne programere",
        "Projekt Debian",
        "Pravila privatnosti",
        "Društveni ugovor",
        "Doniraj",
        "Zatvori dijalog preuzimanja",
        "Preuzmi Debian ISO",
        "Simulator izravnog zrcalnog poslužitelja",
        "Odabrani cilj:",
        "Lokacija zrcalnog poslužitelja:",
        "Preuzimanje je dovršeno! Provjerite mapu Preuzimanja.",
        "Preuzimanje ISO-a...",
        "Napredak preuzimanja",
        "Preuzimanje dovršeno",
        "Pokreni preuzimanje",
        "Odustani"
    ],
    cs: [
        "Stáhnout",
        "Proč Debian",
        "Vydání",
        "Novinky",
        "Komunita a dokumentace",
        "Univerzální operační systém",
        "Hledat na této stránce",
        "Hledat",
        "Zadejte hledaný výraz.",
        "Přepnout na světlý motiv",
        "Přepnout na tmavý motiv",
        "Otevřít mobilní nabídku",
        "Zavřít mobilní nabídku",
        "Získat Debian 13",
        "Stáhnout Debian 13",
        "Rychlý výběr ke stažení",
        "Větev vydání",
        "Architektura",
        "Instalátor / pracovní plocha",
        "Stáhnout ISO",
        "Proč si miliony lidí volí Debian",
        "Vyberte variantu distribuce",
        "Doporučeno",
        "Novinky projektu",
        "Všechny novinky Debianu",
        "Přečíst oznámení",
        "Komunita a ekosystém",
        "Debian Wiki",
        "Uživatelská fóra",
        "Sledování chyb",
        "Koutek vývojářů",
        "Projekt Debian",
        "Zásady ochrany soukromí",
        "Společenská smlouva",
        "Přispět",
        "Zavřít dialog stahování",
        "Stáhnout Debian ISO",
        "Simulátor přímého zrcadla stahování",
        "Vybraný cíl:",
        "Umístění zrcadla:",
        "Stahování dokončeno! Zkontrolujte složku Stažené.",
        "Stahování ISO...",
        "Průběh stahování",
        "Stahování dokončeno",
        "Zahájit stahování",
        "Zrušit"
    ],
    da: [
        "Download",
        "Hvorfor Debian",
        "Udgivelser",
        "Nyheder",
        "Fællesskab og dokumentation",
        "Universelt operativsystem",
        "Søg på denne side",
        "Søg",
        "Indtast et søgeord.",
        "Skift til lyst tema",
        "Skift til mørkt tema",
        "Åbn mobilmenu",
        "Luk mobilmenu",
        "Hent Debian 13",
        "Hent Debian 13",
        "Hurtigt downloadvalg",
        "Udgivelsesgren",
        "Arkitektur",
        "Installationsprogram / skrivebord",
        "Hent ISO",
        "Derfor vælger millioner Debian",
        "Vælg distributionsvariant",
        "Anbefalet",
        "Projektnyt",
        "Alle Debian-nyheder",
        "Læs meddelelsen",
        "Fællesskab og økosystem",
        "Debian-wiki",
        "Brugerfora",
        "Fejlsporing",
        "Udviklerhjørnet",
        "Debian-projektet",
        "Privatlivspolitik",
        "Social kontrakt",
        "Donér",
        "Luk downloaddialog",
        "Hent Debian ISO",
        "Simulator til direkte downloadspejl",
        "Valgt mål:",
        "Spejlplacering:",
        "Download fuldført! Se mappen Overførsler.",
        "Downloader ISO...",
        "Downloadforløb",
        "Download fuldført",
        "Start download",
        "Annuller"
    ],
    nl: [
        "Downloaden",
        "Waarom Debian",
        "Uitgaven",
        "Nieuws",
        "Community en documentatie",
        "Universeel besturingssysteem",
        "Zoek op deze pagina",
        "Zoeken",
        "Voer een zoekterm in.",
        "Licht thema inschakelen",
        "Donker thema inschakelen",
        "Mobiel menu openen",
        "Mobiel menu sluiten",
        "Debian 13 ophalen",
        "Debian 13 downloaden",
        "Snelle downloadkiezer",
        "Uitgavevertakking",
        "Architectuur",
        "Installatieprogramma / bureaublad",
        "ISO downloaden",
        "Waarom miljoenen Debian kiezen",
        "Kies een distributievariant",
        "Aanbevolen",
        "Projectnieuws",
        "Al het Debian-nieuws",
        "Aankondiging lezen",
        "Community en ecosysteem",
        "Debian-wiki",
        "Gebruikersforums",
        "Bugtracker",
        "Ontwikkelaarshoek",
        "Debian-project",
        "Privacybeleid",
        "Sociaal contract",
        "Doneren",
        "Downloadvenster sluiten",
        "Debian ISO downloaden",
        "Simulator voor directe downloadspiegel",
        "Geselecteerd doel:",
        "Spiegellocatie:",
        "Download voltooid! Controleer de map Downloads.",
        "ISO downloaden...",
        "Downloadvoortgang",
        "Download voltooid",
        "Download starten",
        "Annuleren"
    ],
    fi: [
        "Lataa",
        "Miksi Debian",
        "Julkaisut",
        "Uutiset",
        "Yhteisö ja ohjeet",
        "Yleiskäyttöinen käyttöjärjestelmä",
        "Hae tältä sivulta",
        "Hae",
        "Kirjoita hakusana.",
        "Vaihda vaaleaan teemaan",
        "Vaihda tummaan teemaan",
        "Avaa mobiilivalikko",
        "Sulje mobiilivalikko",
        "Hanki Debian 13",
        "Lataa Debian 13",
        "Pikavalinta lataukseen",
        "Julkais haara",
        "Arkkitehtuuri",
        "Asennusohjelma / työpöytä",
        "Lataa ISO",
        "Miksi miljoonat valitsevat Debianin",
        "Valitse jakelun versio",
        "Suositeltu",
        "Projektin uutiset",
        "Kaikki Debian-uutiset",
        "Lue ilmoitus",
        "Yhteisö ja ekosysteemi",
        "Debian-wiki",
        "Käyttäjäfoorumit",
        "Vikaseuranta",
        "Kehittäjänurkkaus",
        "Debian-projekti",
        "Tietosuojakäytäntö",
        "Sosiaalinen sopimus",
        "Lahjoita",
        "Sulje latausikkuna",
        "Lataa Debian ISO",
        "Suoran latauspeilin simulaattori",
        "Valittu kohde:",
        "Peilin sijainti:",
        "Lataus valmis! Tarkista Lataukset-kansio.",
        "Ladataan ISOa...",
        "Latauksen edistyminen",
        "Lataus valmis",
        "Aloita lataus",
        "Peruuta"
    ],
    fr: [
        "Télécharger",
        "Pourquoi Debian",
        "Versions",
        "Actualités",
        "Communauté et documentation",
        "Système d’exploitation universel",
        "Rechercher dans cette page",
        "Rechercher",
        "Saisissez un terme de recherche.",
        "Passer au thème clair",
        "Passer au thème sombre",
        "Ouvrir le menu mobile",
        "Fermer le menu mobile",
        "Obtenir Debian 13",
        "Télécharger Debian 13",
        "Sélecteur de téléchargement rapide",
        "Branche de version",
        "Architecture",
        "Installateur / bureau",
        "Télécharger l’ISO",
        "Pourquoi des millions de personnes choisissent Debian",
        "Choisissez votre variante",
        "Recommandé",
        "Actualités du projet",
        "Toutes les actualités Debian",
        "Lire l’annonce",
        "Communauté et écosystème",
        "Wiki Debian",
        "Forums utilisateurs",
        "Suivi des bogues",
        "Espace développeurs",
        "Projet Debian",
        "Politique de confidentialité",
        "Contrat social",
        "Faire un don",
        "Fermer la fenêtre de téléchargement",
        "Télécharger l’ISO Debian",
        "Simulateur de miroir de téléchargement direct",
        "Cible sélectionnée :",
        "Emplacement du miroir :",
        "Téléchargement terminé ! Consultez le dossier Téléchargements.",
        "Téléchargement de l’ISO…",
        "Progression du téléchargement",
        "Téléchargement terminé",
        "Démarrer le téléchargement",
        "Annuler"
    ],
    gl: [
        "Descargar",
        "Por que Debian",
        "Versións",
        "Novas",
        "Comunidade e documentación",
        "Sistema operativo universal",
        "Buscar nesta páxina",
        "Buscar",
        "Introduce un termo de busca.",
        "Cambiar ao tema claro",
        "Cambiar ao tema escuro",
        "Abrir o menú móbil",
        "Pechar o menú móbil",
        "Obter Debian 13",
        "Descargar Debian 13",
        "Selector de descarga rápida",
        "Rama da versión",
        "Arquitectura",
        "Instalador / escritorio",
        "Descargar ISO",
        "Por que millóns de persoas escollen Debian",
        "Escolle unha variante",
        "Recomendado",
        "Novas do proxecto",
        "Todas as novas de Debian",
        "Ler o anuncio",
        "Comunidade e ecosistema",
        "Wiki de Debian",
        "Foros de usuarios",
        "Seguimento de erros",
        "Espazo de desenvolvemento",
        "Proxecto Debian",
        "Política de privacidade",
        "Contrato social",
        "Doar",
        "Pechar o diálogo de descarga",
        "Descargar ISO de Debian",
        "Simulador de espello de descarga directa",
        "Destino seleccionado:",
        "Localización do espello:",
        "Descarga completada! Consulta o cartafol Descargas.",
        "Descargando ISO...",
        "Progreso da descarga",
        "Descarga completada",
        "Iniciar descarga",
        "Cancelar"
    ],
    de: [
        "Herunterladen",
        "Warum Debian",
        "Versionen",
        "Neuigkeiten",
        "Community & Dokumentation",
        "Universelles Betriebssystem",
        "Diese Seite durchsuchen",
        "Suchen",
        "Suchbegriff eingeben.",
        "Zum hellen Design wechseln",
        "Zum dunklen Design wechseln",
        "Mobiles Menü öffnen",
        "Mobiles Menü schließen",
        "Debian 13 holen",
        "Debian 13 herunterladen",
        "Schnellauswahl für Downloads",
        "Veröffentlichungszweig",
        "Architektur",
        "Installationsprogramm / Desktop",
        "ISO herunterladen",
        "Warum sich Millionen für Debian entscheiden",
        "Distributionsvariante wählen",
        "Empfohlen",
        "Projektneuigkeiten",
        "Alle Debian-Nachrichten",
        "Ankündigung lesen",
        "Community & Ökosystem",
        "Debian-Wiki",
        "Benutzerforen",
        "Fehlerverfolgung",
        "Entwicklerecke",
        "Debian-Projekt",
        "Datenschutz",
        "Gesellschaftsvertrag",
        "Spenden",
        "Downloaddialog schließen",
        "Debian-ISO herunterladen",
        "Simulator für direkten Downloadspiegel",
        "Ausgewähltes Ziel:",
        "Spiegelserver-Standort:",
        "Download abgeschlossen! Prüfen Sie den Downloads-Ordner.",
        "ISO wird heruntergeladen...",
        "Downloadfortschritt",
        "Download abgeschlossen",
        "Download starten",
        "Abbrechen"
    ],
    el: [
        "Λήψη",
        "Γιατί Debian",
        "Εκδόσεις",
        "Νέα",
        "Κοινότητα και τεκμηρίωση",
        "Καθολικό λειτουργικό σύστημα",
        "Αναζήτηση σε αυτή τη σελίδα",
        "Αναζήτηση",
        "Εισαγάγετε έναν όρο αναζήτησης.",
        "Εναλλαγή σε φωτεινό θέμα",
        "Εναλλαγή σε σκοτεινό θέμα",
        "Άνοιγμα μενού κινητού",
        "Κλείσιμο μενού κινητού",
        "Λήψη Debian 13",
        "Λήψη Debian 13",
        "Γρήγορη επιλογή λήψης",
        "Κλάδος έκδοσης",
        "Αρχιτεκτονική",
        "Πρόγραμμα εγκατάστασης / επιφάνεια εργασίας",
        "Λήψη ISO",
        "Γιατί εκατομμύρια επιλέγουν το Debian",
        "Επιλέξτε παραλλαγή διανομής",
        "Προτείνεται",
        "Νέα έργου",
        "Όλα τα νέα του Debian",
        "Διαβάστε την ανακοίνωση",
        "Κοινότητα και οικοσύστημα",
        "Wiki Debian",
        "Φόρουμ χρηστών",
        "Παρακολούθηση σφαλμάτων",
        "Γωνιά προγραμματιστών",
        "Έργο Debian",
        "Πολιτική απορρήτου",
        "Κοινωνικό συμβόλαιο",
        "Δωρεά",
        "Κλείσιμο διαλόγου λήψης",
        "Λήψη Debian ISO",
        "Προσομοιωτής άμεσου καθρέφτη λήψης",
        "Επιλεγμένος στόχος:",
        "Τοποθεσία καθρέφτη:",
        "Η λήψη ολοκληρώθηκε! Ελέγξτε τον φάκελο Λήψεις.",
        "Λήψη ISO...",
        "Πρόοδος λήψης",
        "Η λήψη ολοκληρώθηκε",
        "Έναρξη λήψης",
        "Ακύρωση"
    ],
    hu: [
        "Letöltés",
        "Miért a Debian",
        "Kiadások",
        "Hírek",
        "Közösség és dokumentáció",
        "Univerzális operációs rendszer",
        "Keresés ezen az oldalon",
        "Keresés",
        "Adjon meg egy keresőkifejezést.",
        "Váltás világos témára",
        "Váltás sötét témára",
        "Mobilmenü megnyitása",
        "Mobilmenü bezárása",
        "Debian 13 beszerzése",
        "Debian 13 letöltése",
        "Gyors letöltésválasztó",
        "Kiadási ág",
        "Architektúra",
        "Telepítő / asztali környezet",
        "ISO letöltése",
        "Miért választják milliók a Debiant",
        "Válasszon disztribúcióváltozatot",
        "Ajánlott",
        "Projekt hírei",
        "Minden Debian-hír",
        "Közlemény olvasása",
        "Közösség és ökoszisztéma",
        "Debian Wiki",
        "Felhasználói fórumok",
        "Hibakövetés",
        "Fejlesztői sarok",
        "Debian projekt",
        "Adatvédelmi szabályzat",
        "Társadalmi szerződés",
        "Adományozás",
        "Letöltési párbeszédablak bezárása",
        "Debian ISO letöltése",
        "Közvetlen letöltési tükör szimulátora",
        "Kiválasztott cél:",
        "Tükör helye:",
        "A letöltés kész! Ellenőrizze a Letöltések mappát.",
        "ISO letöltése...",
        "Letöltés állapota",
        "Letöltés kész",
        "Letöltés indítása",
        "Mégse"
    ],
    id: [
        "Unduh",
        "Mengapa Debian",
        "Rilis",
        "Berita",
        "Komunitas & Dokumentasi",
        "Sistem Operasi Universal",
        "Cari halaman ini",
        "Cari",
        "Masukkan kata pencarian.",
        "Beralih ke tema terang",
        "Beralih ke tema gelap",
        "Buka menu seluler",
        "Tutup menu seluler",
        "Dapatkan Debian 13",
        "Unduh Debian 13",
        "Pemilih Unduhan Cepat",
        "Cabang Rilis",
        "Arsitektur",
        "Pemasang / Desktop",
        "Unduh ISO",
        "Mengapa Jutaan Orang Memilih Debian",
        "Pilih varian distribusi",
        "Disarankan",
        "Berita Proyek",
        "Semua berita Debian",
        "Baca pengumuman",
        "Komunitas & Ekosistem",
        "Wiki Debian",
        "Forum Pengguna",
        "Pelacakan Bug",
        "Ruang Pengembang",
        "Proyek Debian",
        "Kebijakan Privasi",
        "Kontrak Sosial",
        "Donasi",
        "Tutup dialog unduhan",
        "Unduh ISO Debian",
        "Simulator cermin unduhan langsung",
        "Target yang dipilih:",
        "Lokasi cermin:",
        "Unduhan selesai! Periksa folder Unduhan.",
        "Mengunduh ISO...",
        "Progres unduhan",
        "Unduhan Selesai",
        "Mulai Unduh",
        "Batal"
    ],
    it: [
        "Scarica",
        "Perché Debian",
        "Rilasci",
        "Notizie",
        "Comunità e documentazione",
        "Sistema operativo universale",
        "Cerca in questa pagina",
        "Cerca",
        "Inserisci un termine di ricerca.",
        "Passa al tema chiaro",
        "Passa al tema scuro",
        "Apri il menu mobile",
        "Chiudi il menu mobile",
        "Ottieni Debian 13",
        "Scarica Debian 13",
        "Selettore rapido di download",
        "Ramo di rilascio",
        "Architettura",
        "Programma d'installazione / desktop",
        "Scarica ISO",
        "Perché milioni di persone scelgono Debian",
        "Scegli una variante",
        "Consigliato",
        "Notizie del progetto",
        "Tutte le notizie Debian",
        "Leggi l'annuncio",
        "Comunità ed ecosistema",
        "Wiki Debian",
        "Forum utenti",
        "Monitoraggio bug",
        "Angolo sviluppatori",
        "Progetto Debian",
        "Informativa sulla privacy",
        "Contratto sociale",
        "Dona",
        "Chiudi la finestra di download",
        "Scarica ISO Debian",
        "Simulatore di mirror per il download diretto",
        "Destinazione selezionata:",
        "Posizione del mirror:",
        "Download completato! Controlla la cartella Download.",
        "Download ISO in corso...",
        "Avanzamento del download",
        "Download completato",
        "Avvia il download",
        "Annulla"
    ],
    ja: [
        "ダウンロード",
        "Debianを選ぶ理由",
        "リリース",
        "ニュース",
        "コミュニティとドキュメント",
        "ユニバーサルOS",
        "このページを検索",
        "検索",
        "検索語を入力してください。",
        "ライトテーマに切り替え",
        "ダークテーマに切り替え",
        "モバイルメニューを開く",
        "モバイルメニューを閉じる",
        "Debian 13を入手",
        "Debian 13をダウンロード",
        "クイックダウンロード選択",
        "リリースブランチ",
        "アーキテクチャ",
        "インストーラー / デスクトップ",
        "ISOをダウンロード",
        "多くの人がDebianを選ぶ理由",
        "ディストリビューションの種類を選択",
        "おすすめ",
        "プロジェクトニュース",
        "Debianのすべてのニュース",
        "告知を読む",
        "コミュニティとエコシステム",
        "Debian Wiki",
        "ユーザーフォーラム",
        "バグ追跡",
        "開発者コーナー",
        "Debianプロジェクト",
        "プライバシーポリシー",
        "社会契約",
        "寄付",
        "ダウンロードダイアログを閉じる",
        "Debian ISOをダウンロード",
        "直接ダウンロードミラーのシミュレーター",
        "選択した対象:",
        "ミラーの場所:",
        "ダウンロード完了！ダウンロードフォルダーを確認してください。",
        "ISOをダウンロード中...",
        "ダウンロードの進行状況",
        "ダウンロード完了",
        "ダウンロード開始",
        "キャンセル"
    ],
    ko: [
        "다운로드",
        "Debian을 선택하는 이유",
        "릴리스",
        "뉴스",
        "커뮤니티 및 문서",
        "범용 운영 체제",
        "이 페이지 검색",
        "검색",
        "검색어를 입력하세요.",
        "밝은 테마로 전환",
        "어두운 테마로 전환",
        "모바일 메뉴 열기",
        "모바일 메뉴 닫기",
        "Debian 13 받기",
        "Debian 13 다운로드",
        "빠른 다운로드 선택기",
        "릴리스 브랜치",
        "아키텍처",
        "설치 프로그램 / 데스크톱",
        "ISO 다운로드",
        "수백만 명이 Debian을 선택하는 이유",
        "배포판 종류 선택",
        "권장",
        "프로젝트 뉴스",
        "모든 Debian 뉴스",
        "공지 읽기",
        "커뮤니티 및 생태계",
        "Debian 위키",
        "사용자 포럼",
        "버그 추적",
        "개발자 공간",
        "Debian 프로젝트",
        "개인정보 보호정책",
        "사회 계약",
        "기부",
        "다운로드 대화 상자 닫기",
        "Debian ISO 다운로드",
        "직접 다운로드 미러 시뮬레이터",
        "선택한 대상:",
        "미러 위치:",
        "다운로드 완료! 다운로드 폴더를 확인하세요.",
        "ISO 다운로드 중...",
        "다운로드 진행률",
        "다운로드 완료",
        "다운로드 시작",
        "취소"
    ],
    nb: [
        "Last ned",
        "Hvorfor Debian",
        "Utgivelser",
        "Nyheter",
        "Fellesskap og dokumentasjon",
        "Universelt operativsystem",
        "Søk på denne siden",
        "Søk",
        "Skriv inn et søkeord.",
        "Bytt til lyst tema",
        "Bytt til mørkt tema",
        "Åpne mobilmeny",
        "Lukk mobilmeny",
        "Hent Debian 13",
        "Last ned Debian 13",
        "Hurtigvalg for nedlasting",
        "Utgivelsesgren",
        "Arkitektur",
        "Installerer / skrivebord",
        "Last ned ISO",
        "Hvorfor millioner velger Debian",
        "Velg distribusjonsvariant",
        "Anbefalt",
        "Prosjektnytt",
        "Alle Debian-nyheter",
        "Les kunngjøringen",
        "Fellesskap og økosystem",
        "Debian-wiki",
        "Brukerfora",
        "Feilsporing",
        "Utviklerhjørnet",
        "Debian-prosjektet",
        "Personvernerklæring",
        "Sosial kontrakt",
        "Doner",
        "Lukk nedlastingsdialogen",
        "Last ned Debian ISO",
        "Simulator for direkte nedlastingsspeil",
        "Valgt mål:",
        "Speilplassering:",
        "Nedlasting fullført! Se i Nedlastinger-mappen.",
        "Laster ned ISO...",
        "Nedlastingsfremdrift",
        "Nedlasting fullført",
        "Start nedlasting",
        "Avbryt"
    ],
    fa: [
        "دریافت",
        "چرا دبیان",
        "انتشارها",
        "اخبار",
        "انجمن و مستندات",
        "سیستم‌عامل همگانی",
        "جستجو در این صفحه",
        "جستجو",
        "یک عبارت برای جستجو وارد کنید.",
        "تغییر به پوسته روشن",
        "تغییر به پوسته تیره",
        "باز کردن منوی موبایل",
        "بستن منوی موبایل",
        "دریافت دبیان ۱۳",
        "بارگیری دبیان ۱۳",
        "گزینش‌گر سریع بارگیری",
        "شاخه انتشار",
        "معماری",
        "نصب‌کننده / میزکار",
        "بارگیری ISO",
        "چرا میلیون‌ها نفر دبیان را انتخاب می‌کنند",
        "گونه توزیع را انتخاب کنید",
        "پیشنهادی",
        "اخبار پروژه",
        "همه اخبار دبیان",
        "خواندن اطلاعیه",
        "انجمن و زیست‌بوم",
        "ویکی دبیان",
        "تالارهای کاربران",
        "پیگیری اشکال",
        "گوشه توسعه‌دهندگان",
        "پروژه دبیان",
        "سیاست حریم خصوصی",
        "پیمان اجتماعی",
        "کمک مالی",
        "بستن پنجره بارگیری",
        "بارگیری ISO دبیان",
        "شبیه‌ساز آینه بارگیری مستقیم",
        "هدف انتخاب‌شده:",
        "مکان آینه:",
        "بارگیری کامل شد! پوشه بارگیری‌ها را بررسی کنید.",
        "در حال بارگیری ISO...",
        "پیشرفت بارگیری",
        "بارگیری کامل شد",
        "شروع بارگیری",
        "لغو"
    ],
    pl: [
        "Pobierz",
        "Dlaczego Debian",
        "Wydania",
        "Aktualności",
        "Społeczność i dokumentacja",
        "Uniwersalny system operacyjny",
        "Szukaj na tej stronie",
        "Szukaj",
        "Wpisz wyszukiwane hasło.",
        "Przełącz na jasny motyw",
        "Przełącz na ciemny motyw",
        "Otwórz menu mobilne",
        "Zamknij menu mobilne",
        "Pobierz Debiana 13",
        "Pobierz Debiana 13",
        "Szybki wybór pobierania",
        "Gałąź wydania",
        "Architektura",
        "Instalator / pulpit",
        "Pobierz ISO",
        "Dlaczego miliony wybierają Debiana",
        "Wybierz wariant dystrybucji",
        "Zalecane",
        "Wiadomości projektu",
        "Wszystkie wiadomości Debiana",
        "Przeczytaj ogłoszenie",
        "Społeczność i ekosystem",
        "Wiki Debiana",
        "Forum użytkowników",
        "Śledzenie błędów",
        "Kącik programistów",
        "Projekt Debian",
        "Polityka prywatności",
        "Umowa społeczna",
        "Przekaż darowiznę",
        "Zamknij okno pobierania",
        "Pobierz ISO Debiana",
        "Symulator bezpośredniego serwera lustrzanego",
        "Wybrany cel:",
        "Lokalizacja serwera:",
        "Pobieranie zakończone! Sprawdź folder Pobrane.",
        "Pobieranie ISO...",
        "Postęp pobierania",
        "Pobieranie zakończone",
        "Rozpocznij pobieranie",
        "Anuluj"
    ],
    pt: [
        "Transferir",
        "Por que Debian",
        "Lançamentos",
        "Notícias",
        "Comunidade e documentação",
        "Sistema operativo universal",
        "Pesquisar nesta página",
        "Pesquisar",
        "Introduza um termo de pesquisa.",
        "Mudar para tema claro",
        "Mudar para tema escuro",
        "Abrir menu móvel",
        "Fechar menu móvel",
        "Obter Debian 13",
        "Transferir Debian 13",
        "Seletor rápido de transferência",
        "Ramo de lançamento",
        "Arquitetura",
        "Instalador / ambiente de trabalho",
        "Transferir ISO",
        "Por que milhões escolhem Debian",
        "Escolha uma variante",
        "Recomendado",
        "Notícias do projeto",
        "Todas as notícias Debian",
        "Ler anúncio",
        "Comunidade e ecossistema",
        "Wiki Debian",
        "Fóruns de utilizadores",
        "Rastreamento de erros",
        "Espaço do programador",
        "Projeto Debian",
        "Política de privacidade",
        "Contrato social",
        "Doar",
        "Fechar diálogo de transferência",
        "Transferir ISO Debian",
        "Simulador de espelho de transferência direta",
        "Destino selecionado:",
        "Localização do espelho:",
        "Transferência concluída! Consulte a pasta Transferências.",
        "A transferir ISO...",
        "Progresso da transferência",
        "Transferência concluída",
        "Iniciar transferência",
        "Cancelar"
    ],
    ro: [
        "Descarcă",
        "De ce Debian",
        "Lansări",
        "Știri",
        "Comunitate și documentație",
        "Sistem de operare universal",
        "Caută în această pagină",
        "Caută",
        "Introdu un termen de căutare.",
        "Comută la tema luminoasă",
        "Comută la tema întunecată",
        "Deschide meniul mobil",
        "Închide meniul mobil",
        "Obține Debian 13",
        "Descarcă Debian 13",
        "Selector rapid de descărcare",
        "Ramura lansării",
        "Arhitectură",
        "Program de instalare / desktop",
        "Descarcă ISO",
        "De ce milioane de oameni aleg Debian",
        "Alege o variantă de distribuție",
        "Recomandat",
        "Noutăți despre proiect",
        "Toate știrile Debian",
        "Citește anunțul",
        "Comunitate și ecosistem",
        "Wiki Debian",
        "Forumuri pentru utilizatori",
        "Urmărirea erorilor",
        "Colțul dezvoltatorilor",
        "Proiectul Debian",
        "Politica de confidențialitate",
        "Contract social",
        "Donează",
        "Închide dialogul de descărcare",
        "Descarcă ISO Debian",
        "Simulator de oglindă pentru descărcare directă",
        "Țintă selectată:",
        "Locația oglinzii:",
        "Descărcare completă! Verifică dosarul Descărcări.",
        "Se descarcă ISO...",
        "Progresul descărcării",
        "Descărcare completă",
        "Începe descărcarea",
        "Anulează"
    ],
    ru: [
        "Скачать",
        "Почему Debian",
        "Выпуски",
        "Новости",
        "Сообщество и документация",
        "Универсальная операционная система",
        "Поиск на этой странице",
        "Поиск",
        "Введите поисковый запрос.",
        "Переключить на светлую тему",
        "Переключить на тёмную тему",
        "Открыть мобильное меню",
        "Закрыть мобильное меню",
        "Получить Debian 13",
        "Скачать Debian 13",
        "Быстрый выбор загрузки",
        "Ветка выпуска",
        "Архитектура",
        "Установщик / рабочий стол",
        "Скачать ISO",
        "Почему миллионы выбирают Debian",
        "Выберите вариант дистрибутива",
        "Рекомендуется",
        "Новости проекта",
        "Все новости Debian",
        "Читать объявление",
        "Сообщество и экосистема",
        "Вики Debian",
        "Форумы пользователей",
        "Отслеживание ошибок",
        "Уголок разработчика",
        "Проект Debian",
        "Политика конфиденциальности",
        "Общественный договор",
        "Пожертвовать",
        "Закрыть окно загрузки",
        "Скачать Debian ISO",
        "Симулятор прямого зеркала загрузки",
        "Выбранная цель:",
        "Расположение зеркала:",
        "Загрузка завершена! Проверьте папку «Загрузки».",
        "Загрузка ISO...",
        "Ход загрузки",
        "Загрузка завершена",
        "Начать загрузку",
        "Отмена"
    ],
    sk: [
        "Stiahnuť",
        "Prečo Debian",
        "Vydania",
        "Novinky",
        "Komunita a dokumentácia",
        "Univerzálny operačný systém",
        "Hľadať na tejto stránke",
        "Hľadať",
        "Zadajte hľadaný výraz.",
        "Prepnúť na svetlý motív",
        "Prepnúť na tmavý motív",
        "Otvoriť mobilnú ponuku",
        "Zavrieť mobilnú ponuku",
        "Získať Debian 13",
        "Stiahnuť Debian 13",
        "Rýchly výber sťahovania",
        "Vetva vydania",
        "Architektúra",
        "Inštalátor / pracovná plocha",
        "Stiahnuť ISO",
        "Prečo si milióny vyberajú Debian",
        "Vyberte variant distribúcie",
        "Odporúčané",
        "Novinky projektu",
        "Všetky novinky Debianu",
        "Prečítať oznámenie",
        "Komunita a ekosystém",
        "Debian Wiki",
        "Používateľské fóra",
        "Sledovanie chýb",
        "Kútik vývojárov",
        "Projekt Debian",
        "Zásady ochrany súkromia",
        "Spoločenská zmluva",
        "Prispieť",
        "Zavrieť dialóg sťahovania",
        "Stiahnuť Debian ISO",
        "Simulátor priameho zrkadla sťahovania",
        "Vybraný cieľ:",
        "Umiestnenie zrkadla:",
        "Sťahovanie dokončené! Skontrolujte priečinok Stiahnuté.",
        "Sťahuje sa ISO...",
        "Priebeh sťahovania",
        "Sťahovanie dokončené",
        "Spustiť sťahovanie",
        "Zrušiť"
    ],
    es: [
        "Descargar",
        "Por qué Debian",
        "Versiones",
        "Noticias",
        "Comunidad y documentación",
        "Sistema operativo universal",
        "Buscar en esta página",
        "Buscar",
        "Introduce un término de búsqueda.",
        "Cambiar al tema claro",
        "Cambiar al tema oscuro",
        "Abrir menú móvil",
        "Cerrar menú móvil",
        "Obtener Debian 13",
        "Descargar Debian 13",
        "Selector rápido de descarga",
        "Rama de la versión",
        "Arquitectura",
        "Instalador / escritorio",
        "Descargar ISO",
        "Por qué millones eligen Debian",
        "Elige una variante",
        "Recomendado",
        "Noticias del proyecto",
        "Todas las noticias de Debian",
        "Leer anuncio",
        "Comunidad y ecosistema",
        "Wiki de Debian",
        "Foros de usuarios",
        "Seguimiento de errores",
        "Espacio para desarrolladores",
        "Proyecto Debian",
        "Política de privacidad",
        "Contrato social",
        "Donar",
        "Cerrar diálogo de descarga",
        "Descargar ISO de Debian",
        "Simulador de espejo de descarga directa",
        "Destino seleccionado:",
        "Ubicación del espejo:",
        "¡Descarga completada! Consulta la carpeta Descargas.",
        "Descargando ISO...",
        "Progreso de la descarga",
        "Descarga completada",
        "Iniciar descarga",
        "Cancelar"
    ],
    sv: [
        "Ladda ner",
        "Varför Debian",
        "Utgåvor",
        "Nyheter",
        "Gemenskap och dokumentation",
        "Universellt operativsystem",
        "Sök på den här sidan",
        "Sök",
        "Ange en sökterm.",
        "Byt till ljust tema",
        "Byt till mörkt tema",
        "Öppna mobilmenyn",
        "Stäng mobilmenyn",
        "Hämta Debian 13",
        "Ladda ner Debian 13",
        "Snabbväljare för nedladdning",
        "Utgåvegren",
        "Arkitektur",
        "Installationsprogram / skrivbord",
        "Ladda ner ISO",
        "Varför miljontals människor väljer Debian",
        "Välj distributionsvariant",
        "Rekommenderas",
        "Projektets nyheter",
        "Alla Debian-nyheter",
        "Läs tillkännagivandet",
        "Gemenskap och ekosystem",
        "Debian-wiki",
        "Användarforum",
        "Felspårning",
        "Utvecklarhörnan",
        "Debian-projektet",
        "Integritetspolicy",
        "Socialt kontrakt",
        "Donera",
        "Stäng nedladdningsdialogen",
        "Ladda ner Debian ISO",
        "Simulator för direkt nedladdningsspegel",
        "Valt mål:",
        "Spegelplats:",
        "Nedladdningen är klar! Kontrollera mappen Hämtade filer.",
        "Laddar ner ISO...",
        "Nedladdningsförlopp",
        "Nedladdningen är klar",
        "Starta nedladdning",
        "Avbryt"
    ],
    tr: [
        "İndir",
        "Neden Debian",
        "Sürümler",
        "Haberler",
        "Topluluk ve Belgeler",
        "Evrensel İşletim Sistemi",
        "Bu sayfada ara",
        "Ara",
        "Bir arama terimi girin.",
        "Açık temaya geç",
        "Koyu temaya geç",
        "Mobil menüyü aç",
        "Mobil menüyü kapat",
        "Debian 13'ü edin",
        "Debian 13'ü indir",
        "Hızlı İndirme Seçici",
        "Sürüm dalı",
        "Mimari",
        "Kurulum aracı / Masaüstü",
        "ISO indir",
        "Milyonlarca kişi neden Debian'ı seçiyor",
        "Dağıtım çeşidini seçin",
        "Önerilen",
        "Proje Haberleri",
        "Tüm Debian haberleri",
        "Duyuruyu oku",
        "Topluluk ve Ekosistem",
        "Debian Viki",
        "Kullanıcı Forumları",
        "Hata Takibi",
        "Geliştirici Köşesi",
        "Debian Projesi",
        "Gizlilik Politikası",
        "Toplumsal Sözleşme",
        "Bağış yap",
        "İndirme iletişim kutusunu kapat",
        "Debian ISO'sunu indir",
        "Doğrudan indirme yansısı simülatörü",
        "Seçilen hedef:",
        "Yansı konumu:",
        "İndirme tamamlandı! İndirilenler klasörünü kontrol edin.",
        "ISO indiriliyor...",
        "İndirme ilerlemesi",
        "İndirme tamamlandı",
        "İndirmeyi başlat",
        "İptal"
    ],
    uk: [
        "Завантажити",
        "Чому Debian",
        "Випуски",
        "Новини",
        "Спільнота й документація",
        "Універсальна операційна система",
        "Пошук на цій сторінці",
        "Пошук",
        "Введіть пошуковий запит.",
        "Перемкнути на світлу тему",
        "Перемкнути на темну тему",
        "Відкрити мобільне меню",
        "Закрити мобільне меню",
        "Отримати Debian 13",
        "Завантажити Debian 13",
        "Швидкий вибір завантаження",
        "Гілка випуску",
        "Архітектура",
        "Інсталятор / стільниця",
        "Завантажити ISO",
        "Чому мільйони обирають Debian",
        "Оберіть варіант дистрибутива",
        "Рекомендовано",
        "Новини проєкту",
        "Усі новини Debian",
        "Читати оголошення",
        "Спільнота й екосистема",
        "Вікі Debian",
        "Форуми користувачів",
        "Відстеження помилок",
        "Куточок розробника",
        "Проєкт Debian",
        "Політика конфіденційності",
        "Суспільний договір",
        "Підтримати",
        "Закрити діалог завантаження",
        "Завантажити ISO Debian",
        "Симулятор прямого дзеркала завантаження",
        "Вибрана ціль:",
        "Розташування дзеркала:",
        "Завантаження завершено! Перевірте теку Завантаження.",
        "Завантаження ISO...",
        "Перебіг завантаження",
        "Завантаження завершено",
        "Почати завантаження",
        "Скасувати"
    ],
    vi: [
        "Tải xuống",
        "Tại sao chọn Debian",
        "Các bản phát hành",
        "Tin tức",
        "Cộng đồng & Tài liệu",
        "Hệ điều hành phổ dụng",
        "Tìm kiếm trang này",
        "Tìm kiếm",
        "Nhập từ khóa tìm kiếm.",
        "Chuyển sang giao diện sáng",
        "Chuyển sang giao diện tối",
        "Mở menu di động",
        "Đóng menu di động",
        "Tải Debian 13",
        "Tải Debian 13",
        "Bộ chọn tải xuống nhanh",
        "Nhánh phát hành",
        "Kiến trúc",
        "Trình cài đặt / Máy tính",
        "Tải ISO",
        "Vì sao hàng triệu người chọn Debian",
        "Chọn phiên bản phân phối",
        "Được đề xuất",
        "Tin tức dự án",
        "Tất cả tin Debian",
        "Đọc thông báo",
        "Cộng đồng & Hệ sinh thái",
        "Wiki Debian",
        "Diễn đàn người dùng",
        "Theo dõi lỗi",
        "Góc nhà phát triển",
        "Dự án Debian",
        "Chính sách quyền riêng tư",
        "Khế ước xã hội",
        "Quyên góp",
        "Đóng hộp thoại tải xuống",
        "Tải ISO Debian",
        "Trình mô phỏng máy nhân bản tải trực tiếp",
        "Mục tiêu đã chọn:",
        "Vị trí máy nhân bản:",
        "Đã tải xong! Kiểm tra thư mục Tải xuống.",
        "Đang tải ISO...",
        "Tiến trình tải xuống",
        "Tải xuống hoàn tất",
        "Bắt đầu tải xuống",
        "Hủy"
    ]
};
const directionLocales = new Set([
    "ar",
    "fa"
]);
function detectLocale() {
    const candidates = [
        ...navigator.languages ?? [],
        navigator.language
    ];
    for (const candidate of candidates){
        const normalized = candidate.toLowerCase();
        if (normalized.startsWith("zh-hant") || normalized.startsWith("zh-tw")) {
            return "zh-TW";
        }
        if (normalized.startsWith("zh")) return "zh-CN";
        const match = locales.find((locale)=>locale !== "zh-CN" && locale !== "zh-TW" && normalized.split("-")[0] === locale.toLowerCase());
        if (match) return match;
    }
    return "en";
}
const LocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])("en");
function LocaleProvider({ children }) {
    const [locale, setLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setLocale(detectLocale()), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.lang = locale;
        document.documentElement.dir = directionLocales.has(locale) ? "rtl" : "ltr";
    }, [
        locale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocaleContext.Provider, {
        value: locale,
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/i18n.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
function useLocale() {
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LocaleContext);
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const localized = coreTranslations[locale];
        const result = {
            ...english
        };
        if (localized) {
            coreKeys.forEach((key, index)=>{
                if (localized[index]) result[key] = localized[index];
            });
        }
        return {
            locale,
            t: (key, values)=>{
                let value = result[key];
                Object.entries(values ?? {}).forEach(([name, replacement])=>{
                    value = value.replaceAll(`{${name}}`, replacement);
                });
                return value;
            }
        };
    }, [
        locale
    ]);
    return messages;
}
const localizedNewsDates = Object.fromEntries(locales.map((locale)=>[
        locale,
        [
            "2026-09-12",
            "2026-08-31",
            "2026-08-07"
        ].map((date)=>new Intl.DateTimeFormat(locale, {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC"
            }).format(new Date(`${date}T12:00:00Z`)))
    ]));
}),
];})()

//# sourceMappingURL=_1t58-f_j89bzi._.js.map