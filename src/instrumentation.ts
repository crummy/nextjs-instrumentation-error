/**
 * @link https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
 */
export async function register() {
    console.log("!!!!!!REGISTER", process.env.NEXT_RUNTIME)
    const isServer = process.env.NEXT_RUNTIME === "nodejs";
    if (isServer) {
        const os = await import("os");
    }
}
