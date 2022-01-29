"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terminateWs = void 0;
function terminateWs(ws) {
    // #168: ws.terminate() undefined in browsers
    if (typeof (ws === null || ws === void 0 ? void 0 : ws.terminate) === 'function') {
        ws.terminate();
    }
}
exports.terminateWs = terminateWs;
//# sourceMappingURL=ws-utils.js.map