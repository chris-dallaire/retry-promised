
declare module "retry-promised" {

    export interface RetryOptions {
        maxAttempts?: number;
        retryTimeout?: number;
        timeoutMultiplier?: number;
        retryCheck?: boolean;
    }


    export function retry(promiseFuncToRetry: () => Promise<T>, retryOptions: RetryOptions): Promise<T>;
}