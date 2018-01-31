const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

/**
 * Render a table.
 * @type {React}
 */
const TableNode = createReactClass({
    propTypes: {
        attributes: PropTypes.object.isRequired,
        children:   PropTypes.node.isRequired
    },

    render() {
        const { attributes, children } = this.props;

        return (
            <table {...attributes}>
                <tbody>
                {children}
                </tbody>
            </table>
        );
    }
});

module.exports = TableNode;
