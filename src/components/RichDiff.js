const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');
const Changes = require('./Changes');

/**
 * Render an entire diff from a state.
 * @type {React}
 */
const RichDiff = createReactClass({
    propTypes: {
        className: PropTypes.string,
        state:     PropTypes.object.isRequired,
        minToWrap: PropTypes.number
    },

    getDefaultProps() {
        return {
            className: '',
            minToWrap: 3
        };
    },

    render() {
        const { state, className, minToWrap } = this.props;

        return (
            <Changes
                Wrapper={props => <div className={'RichDiff ' + className}>{props.children}</div>}
                changes={state.changes}
                minToWrap={minToWrap}
            />
        );
    }
});

module.exports = RichDiff;
