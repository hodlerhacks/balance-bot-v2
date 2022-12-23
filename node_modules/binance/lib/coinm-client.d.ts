import { AxiosRequestConfig } from 'axios';
import { CoinMAccountTradeParams, CoinMOpenInterest, CoinMPositionTrade, CoinMSymbolOrderBookTicker, PositionRisk, SymbolOrPair } from './types/coin';
import BaseRestClient from './util/BaseRestClient';
import { RestClientOptions } from './util/requestUtils';
export declare class CoinMClient extends BaseRestClient {
    private clientId;
    constructor(restClientOptions?: RestClientOptions, requestOptions?: AxiosRequestConfig, useTestnet?: boolean);
    /**
     * Abstraction required by each client to aid with time sync / drift handling
     */
    getServerTime(): Promise<number>;
    getFuturesUserDataListenKey(): Promise<{
        listenKey: string;
    }>;
    getSymbolOrderBookTicker(params?: SymbolOrPair): Promise<CoinMSymbolOrderBookTicker[]>;
    getOpenInterest(params: {
        symbol: string;
    }): Promise<CoinMOpenInterest>;
    getPositions(): Promise<PositionRisk[]>;
    getAccountTrades(params: CoinMAccountTradeParams): Promise<CoinMPositionTrade[]>;
}
