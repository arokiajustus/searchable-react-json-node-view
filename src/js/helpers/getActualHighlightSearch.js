export default function getHighlightSearch(currentHighlightSearch) {
    const actualHighlightSearch = currentHighlightSearch.substring(currentHighlightSearch.lastIndexOf('.') + 1);
    return actualHighlightSearch.toLowerCase();
}