const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');
const schema = require('../schema');

/**
 * Rendering for a slate node. It doesn't consider children.
 *
 * @type {React}
 */
const NodeWrapper = createReactClass({
    propTypes: {
        node:       PropTypes.object.isRequired,
        attributes: PropTypes.object.isRequired,
        original:   PropTypes.object,
        children:   PropTypes.node
    },

    render() {
        const { node, attributes, original, children } = this.props;

        const Renderer = schema.nodes[node.type] || (
            node.kind == 'block' ? schema.defaultBlock : schema.defaultInline
        );

        return (
            <Renderer node={node} attributes={attributes} original={original}>
                {children}
            </Renderer>
        );
    }
});

module.exports = NodeWrapper;
