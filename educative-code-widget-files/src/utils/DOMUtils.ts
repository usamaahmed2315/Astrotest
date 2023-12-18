export const get = (selector: string, all: boolean = false) => all
    ? document?.querySelectorAll(selector)
    : document?.querySelector(selector);

export const on = (
    selector: string | HTMLElement,
    event: string,
    callback: any,
    all?: boolean
) => {
    if (all) {
        const elements = document.querySelectorAll(selector as string);

        elements?.forEach(element => {
            element.addEventListener(event, callback)
        });
    } else {
        if (typeof selector === 'string') {
            (get(selector) as HTMLElement)?.addEventListener(event, callback);
        } else {
            selector?.addEventListener(event, callback);
        }
    }
  }

export const toggleClass = (selector: string | HTMLElement, className: string | Array<string>, force?: boolean | undefined) => {
    const element = typeof selector === 'string' ? (get(selector) as HTMLElement) : selector;

    if (Array.isArray(className)) {
        className.forEach(cn => element?.classList.toggle(cn, force));
        return;
    }

    element?.classList.toggle(className, force);
}
