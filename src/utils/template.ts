/**
 * Replaces placeholders in the format {{key}} with values from the provided data object.
 */
export const hydrateTemplate = (html: string, data: Record<string, any>): string => {
    return html.replace(/{{(\w+)}}/g, (match, key) => {
        // Return the value if it exists, otherwise return the original tag
        return Object.prototype.hasOwnProperty.call(data, key) ? String(data[key]) : match;
    });
};
