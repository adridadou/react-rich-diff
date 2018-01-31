const createReactClass = require('create-react-class');
const schema = require('../schema');
const PropTypes = require('prop-types');

/**
 * Leaf of a document: text range
 * @type {React}
 */
const TextRange = createReactClass({
    propTypes: {
        range:      PropTypes.object.isRequired,
        attributes: PropTypes.object
    },

    getDefaultProps() {
        return {
            attributes: {}
        };
    },

    render() {
        const { range, attributes } = this.props;
        const { marks, text } = range;

        if (marks.isEmpty()) {
            return (
                <span {...attributes}>{range.text}</span>
            );
        }

        let i = 0;
        return marks
            .reduce(
                (children, mark) => {
                    i++;
                    const Wrapper = schema.marks[mark.type];

                    if (i == marks.size) {
                        return <Wrapper attributes={attributes}>{children}</Wrapper>;
                    }

                    return <Wrapper>{children}</Wrapper>;
                },
                text
            );
    }
});

module.exports = TextRange;
