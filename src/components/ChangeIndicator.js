const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

/**
 * Render an indicator for a change (added, modified, etc) with the right class name.
 * @type {ReactClass}
 */
const ChangeIndicator = createReactClass({
    propTypes: {
        kind:     PropTypes.string.isRequired,
        type:     PropTypes.string.isRequired,
        children: PropTypes.node
    },

    render() {
        const { kind, type, children } = this.props;
        const className = `diff-${kind}-${type}`;

        if (kind == 'block') {
            return <div className={className}>{children}</div>;
        } else {
            return <span className={className}>{children}</span>;
        }
    }
});

module.exports = ChangeIndicator;
