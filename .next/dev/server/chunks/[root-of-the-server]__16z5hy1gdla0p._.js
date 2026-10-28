module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/api/download/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$download$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/download.ts [app-route] (ecmascript)");
;
const imageHost = "https://cdimage.debian.org";
function getDirectory({ branch, architecture, media }) {
    if (media === "netinst") {
        return branch === "stable" ? `${imageHost}/debian-cd/current/${architecture}/iso-cd` : `${imageHost}/cdimage/weekly-builds/${architecture}/iso-cd`;
    }
    return branch === "stable" ? `${imageHost}/cdimage/release/current-live/amd64/iso-hybrid` : `${imageHost}/cdimage/weekly-live-builds/amd64/iso-hybrid`;
}
function getTestingFilename({ architecture, media }) {
    return media === "netinst" ? `debian-testing-${architecture}-netinst.iso` : `debian-live-testing-amd64-${media}.iso`;
}
function getStableFilenamePattern(architecture, media) {
    return media === "netinst" ? new RegExp(`^debian-\\d+\\.\\d+\\.\\d+-${architecture}-netinst\\.iso$`) : new RegExp(`^debian-live-\\d+\\.\\d+\\.\\d+-amd64-${media}\\.iso$`);
}
function findFilename(manifest, pattern) {
    for (const line of manifest.split(/\r?\n/)){
        const filename = line.match(/^[a-f\d]{128}\s+\*?(.+)$/i)?.[1];
        if (filename && pattern.test(filename)) return filename;
    }
}
async function GET(request) {
    const params = new URL(request.url).searchParams;
    const branch = params.get("branch");
    const architecture = params.get("architecture");
    const media = params.get("media");
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$download$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isReleaseBranch"])(branch) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$download$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isArchitecture"])(architecture) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$download$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isMedia"])(media)) {
        return Response.json({
            error: "Invalid Debian image selection."
        }, {
            status: 400
        });
    }
    if (media !== "netinst" && architecture !== "amd64") {
        return Response.json({
            error: "Live images are available for amd64 only."
        }, {
            status: 400
        });
    }
    const config = {
        branch,
        architecture,
        media
    };
    const directory = getDirectory(config);
    if (branch === "testing") {
        const filename = getTestingFilename(config);
        return Response.json({
            filename,
            url: `${directory}/${filename}`
        }, {
            headers: {
                "Cache-Control": "no-store"
            }
        });
    }
    try {
        const response = await fetch(`${directory}/SHA512SUMS`, {
            cache: "no-store",
            signal: AbortSignal.timeout(10_000)
        });
        if (!response.ok) {
            console.error(`Debian checksum manifest request failed: ${response.status}`);
            return Response.json({
                error: "Unable to retrieve the latest Debian image."
            }, {
                status: 502
            });
        }
        const manifest = await response.text();
        const filename = findFilename(manifest, getStableFilenamePattern(architecture, media));
        if (!filename) {
            console.error(`No current stable image found for ${architecture}/${media}.`);
            return Response.json({
                error: "No current Debian image was found for this selection."
            }, {
                status: 502
            });
        }
        return Response.json({
            filename,
            url: `${directory}/${filename}`
        }, {
            headers: {
                "Cache-Control": "no-store"
            }
        });
    } catch (error) {
        console.error("Unable to resolve the current Debian image.", error);
        return Response.json({
            error: "Unable to retrieve the latest Debian image."
        }, {
            status: 502
        });
    }
}
}),
"[project]/lib/download.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDownloadResolutionUrl",
    ()=>getDownloadResolutionUrl,
    "isArchitecture",
    ()=>isArchitecture,
    "isMedia",
    ()=>isMedia,
    "isReleaseBranch",
    ()=>isReleaseBranch
]);
const architectures = [
    "amd64",
    "arm64",
    "armhf",
    "ppc64el",
    "riscv64",
    "s390x"
];
const mediaTypes = [
    "netinst",
    "gnome",
    "kde",
    "xfce",
    "lxde",
    "lxqt",
    "mate",
    "cinnamon"
];
function isReleaseBranch(value) {
    return value === "stable" || value === "testing";
}
function isArchitecture(value) {
    return architectures.some((architecture)=>architecture === value);
}
function isMedia(value) {
    return mediaTypes.some((media)=>media === value);
}
function getDownloadResolutionUrl({ branch, architecture, media }) {
    const params = new URLSearchParams({
        branch,
        architecture,
        media
    });
    return `/api/download?${params}`;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16z5hy1gdla0p._.js.map