export default function getFormattedHighlightSearch(currentHighlightSearch) {
    return "false." + currentHighlightSearch.replace(/[\[\]']+/g,'.').replace(/\.{1,}/g, '.').trim().toLowerCase();
}