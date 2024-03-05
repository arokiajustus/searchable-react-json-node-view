import getActualHighlightSearch from './getActualHighlightSearch';
export default function isSearchMatch(src, props) {
    const highlightSearch = "false." + props.highlightSearch.replace(/[\[\]']+/g,'.').replace(/\.{1,}/g, '.');;
    const namespaces = props.namespace.join(".").toLowerCase();
    const actualSearch = getActualHighlightSearch(highlightSearch);
    const parentValue = highlightSearch.substring(0, highlightSearch.lastIndexOf('.'));
    return highlightSearch 
        && src.toLowerCase() === actualSearch
        && (parentValue.toLowerCase() === namespaces || highlightSearch.toLowerCase() === namespaces);
}