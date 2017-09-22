
declare module "retry-promised" {

    export interface RetryOptions {
        maxAttempts?: number;
        retryTimeout?: number;
        timeoutMultiplier?: number;
        retryCheck?: boolean;
    }


    export function retry<T>(promiseFuncToRetry: () => T, retryOptions: RetryOptions): T;
}