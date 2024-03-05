import React from 'react';
import DataTypeLabel from './DataTypeLabel';
import splitAndPushByDelimiter from './../../helpers/splitAndPushByDelimiter';

//theme
import Theme from './../../themes/getStyle';

//helpers
import getActualHighlightSearch from './../../helpers/getActualHighlightSearch';
import searchMatch from './../../helpers/searchMatch';


export default class extends React.PureComponent {

    render() {
        const type_name = 'bool';
        const {props} = this;
        const {value, theme, highlightSearch, highlightSearchColor} = props;

        return <div {...Theme(theme, 'boolean')}>
            <DataTypeLabel type_name={type_name} {...props} />
            {splitAndPushByDelimiter(String(value), getActualHighlightSearch(highlightSearch)).map((char, i) => [
                <span
                    key={i}
                    style={{backgroundColor: i%2 === 1&& searchMatch(String(value), props) ? highlightSearchColor : 'transparent'}}
                >
                    {char}
                </span>
            ])}
        </div>
    }

}
