export function die(message = "Fatal Error") {
    return (() => {
        const error = new Error();
        const match = error.stack?.match(/^(?!die).*@(.*:\d+:\d+)$/m);
        if (match) {
            console.error(message, "\n\nDied at:", match[1]);
        }
        else {
            console.error(message, "Died at (location unknown)");
        }
        throw error;
    })();
}
