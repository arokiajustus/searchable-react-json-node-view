import getActualHighlightSearch from './getActualHighlightSearch';
import getFormattedHighlightSearch from './getFormattedHighlightSearch';
export default function isSearchMatch(src, props) {
    const highlightSearch = getFormattedHighlightSearch(props.highlightSearch);
    const namespaces = props.namespace.join(".").toLowerCase();
    const actualSearch = getActualHighlightSearch(highlightSearch);
    const parentValue = highlightSearch.substring(0, highlightSearch.lastIndexOf('.'));
    return highlightSearch 
        && src.toLowerCase() === actualSearch
        && (parentValue.toLowerCase() === namespaces || highlightSearch.toLowerCase() === namespaces);
}