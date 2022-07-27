import { LitElement } from 'lit';
interface WCUI {
    version: string;
}
export declare class WCUIElement extends LitElement implements WCUI {
    version: string;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
