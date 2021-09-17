"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUniversalTransferType = exports.EnumWithdrawTransferType = exports.EnumWithdrawStatus = exports.EnumDepositStatus = void 0;
var EnumDepositStatus;
(function (EnumDepositStatus) {
    EnumDepositStatus[EnumDepositStatus["Pending"] = 0] = "Pending";
    EnumDepositStatus[EnumDepositStatus["CreditedButCannotWithdraw"] = 6] = "CreditedButCannotWithdraw";
    EnumDepositStatus[EnumDepositStatus["Success"] = 1] = "Success";
})(EnumDepositStatus = exports.EnumDepositStatus || (exports.EnumDepositStatus = {}));
var EnumWithdrawStatus;
(function (EnumWithdrawStatus) {
    EnumWithdrawStatus[EnumWithdrawStatus["EmailSent"] = 0] = "EmailSent";
    EnumWithdrawStatus[EnumWithdrawStatus["Cancelled"] = 1] = "Cancelled";
    EnumWithdrawStatus[EnumWithdrawStatus["AwaitingApproval"] = 2] = "AwaitingApproval";
    EnumWithdrawStatus[EnumWithdrawStatus["Rejected"] = 3] = "Rejected";
    EnumWithdrawStatus[EnumWithdrawStatus["Processing"] = 4] = "Processing";
    EnumWithdrawStatus[EnumWithdrawStatus["Failure"] = 5] = "Failure";
    EnumWithdrawStatus[EnumWithdrawStatus["Completed"] = 6] = "Completed";
})(EnumWithdrawStatus = exports.EnumWithdrawStatus || (exports.EnumWithdrawStatus = {}));
var EnumWithdrawTransferType;
(function (EnumWithdrawTransferType) {
    EnumWithdrawTransferType[EnumWithdrawTransferType["External"] = 0] = "External";
    EnumWithdrawTransferType[EnumWithdrawTransferType["Interal"] = 1] = "Interal";
})(EnumWithdrawTransferType = exports.EnumWithdrawTransferType || (exports.EnumWithdrawTransferType = {}));
var EnumUniversalTransferType;
(function (EnumUniversalTransferType) {
    EnumUniversalTransferType["SpotToC2C"] = "MAIN_C2C";
    EnumUniversalTransferType["SpotToUSDM"] = "MAIN_UMFUTURE";
    EnumUniversalTransferType["SpotToCOINM"] = "MAIN_CMFUTURE";
    EnumUniversalTransferType["SpotToMargin"] = "MAIN_MARGIN";
    EnumUniversalTransferType["SpotToMining"] = "MAIN_MINING";
    EnumUniversalTransferType["C2CToSpot"] = "C2C_MAIN";
    EnumUniversalTransferType["C2CToUSDM"] = "C2C_UMFUTURE";
    EnumUniversalTransferType["C2CToMining"] = "C2C_MINING";
    EnumUniversalTransferType["C2CToMargin"] = "C2C_MARGIN";
    EnumUniversalTransferType["USDMToSpot"] = "UMFUTURE_MAIN";
    EnumUniversalTransferType["USDMToC2C"] = "UMFUTURE_C2C";
    EnumUniversalTransferType["USDMToMargin"] = "UMFUTURE_MARGIN";
    EnumUniversalTransferType["COINMToSpot"] = "CMFUTURE_MAIN";
    EnumUniversalTransferType["COINMToMargin"] = "CMFUTURE_MARGIN";
    EnumUniversalTransferType["MarginToSpot"] = "MARGIN_MAIN";
    EnumUniversalTransferType["MarginToUSDM"] = "MARGIN_UMFUTURE";
    EnumUniversalTransferType["MarginToCOINM"] = "MARGIN_CMFUTURE";
    EnumUniversalTransferType["MarginToMining"] = "MARGIN_MINING";
    EnumUniversalTransferType["MarginToC2C"] = "MARGIN_C2C";
    EnumUniversalTransferType["MiningToSpot"] = "MINING_MAIN";
    EnumUniversalTransferType["MiningToUSDM"] = "MINING_UMFUTURE";
    EnumUniversalTransferType["MiningToC2C"] = "MINING_C2C";
    EnumUniversalTransferType["MiningToMargin"] = "MINING_MARGIN";
    EnumUniversalTransferType["SpotToPay"] = "MAIN_PAY";
    EnumUniversalTransferType["PayToSpot"] = "PAY_MAIN";
})(EnumUniversalTransferType = exports.EnumUniversalTransferType || (exports.EnumUniversalTransferType = {}));
//# sourceMappingURL=spot.js.map