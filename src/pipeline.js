//
import React from 'react';
import ms from 'ms';
import Icon from './icon';

const nodeStrokeWidth = 3.5;
const ypStart = 55;

// Dimensions used for layout, px
export const defaultLayout = {
    nodeSpacingH: 120,
    nodeSpacingV: 70,
    nodeRadius: 12,
    terminalRadius: 7,
    curveRadius: 12,
    connectorStrokeWidth: 1.5,
    labelOffsetV: 20,
    smallLabelOffsetV: 15,
};

function connectorKey(leftNode, rightNode) {
    return 'c_' + leftNode.key + '_to_' + rightNode.key;
}

export class PipelineGraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nodeColumns: [],
            connections: [],
            bigLabels: [],
            smallLabels: [],
            measuredWidth: 0,
            measuredHeight: 0,
            layout: Object.assign({}, defaultLayout, props.layout),
            defaultSelectStage: props.defaultSelectStage || '',
            selectedStage: props.selectedStage,
        };
    }

    componentWillMount() {
        this.stagesUpdated(this.props.stages);
    }

    componentWillReceiveProps(nextProps) {
        let newState = null; // null == no new state
        let needsLayout = false;

        if (nextProps.layout != this.props.layout) {
            newState = { newState, layout: Object.assign({}, defaultLayout, this.props.layout) };
            needsLayout = true;
        }

        if (nextProps.selectedStage !== this.props.selectedStage) {
            // If we're just changing selectedStage, we don't need to re-generate the children
            newState = { newState, selectedStage: nextProps.selectedStage };
        }

        if (nextProps.stages !== this.props.stages) {
            needsLayout = true;
        }

        const doLayoutIfNeeded = () => {
            if (needsLayout) {
                this.stagesUpdated(nextProps.stages);
            }
        };

        if (newState) {
            // If we need to update the state, then we'll delay any layout changes
            this.setState(newState, doLayoutIfNeeded);
        } else {
            doLayoutIfNeeded();
        }
    }

    /**
     * Main process for laying out the graph. Calls a bunch of individual methods on self that do each task.
     */
    stagesUpdated(newStages=[]) {

        const stageNodeColumns = this.createNodeColumns(newStages);
        const { nodeSpacingH } = this.state.layout;

        const startNode = {
            x: 0,
            y: 0,
            name: 'Start',
            id: -1,
            isPlaceholder: true,
            key: 'start-node',
            type: 'start',
        };

        const endNode = {
            x: 0,
            y: 0,
            name: 'End',
            id: -2,
            isPlaceholder: true,
            key: 'end-node',
            type: 'end',
        };

        const allNodeColumns = [
            { nodes: [startNode] },
            ...stageNodeColumns,
            { nodes: [endNode] },
        ];

        this.positionNodes(allNodeColumns);

        const bigLabels = this.createBigLabels(allNodeColumns);
        const smallLabels = this.createSmallLabels(allNodeColumns);
        const connections = this.createConnections(allNodeColumns);

        // Calculate the size of the graph
        let measuredWidth = 0;
        let measuredHeight = 200;

        for (const column of allNodeColumns) {
            for (const node of column.nodes) {
                measuredWidth = Math.max(measuredWidth, node.x + nodeSpacingH / 2);
                measuredHeight = Math.max(measuredHeight, node.y + ypStart * 1.5);
            }
        }

        this.setState({
            nodeColumns: allNodeColumns,
            connections,
            bigLabels,
            smallLabels,
            measuredWidth,
            measuredHeight,
        });
    }

    /**
     * Generate an array of columns, based on the top-level stages
     */
    createNodeColumns(topLevelStages=[]) {

        const nodeColumns = [];

        for (const topStage of topLevelStages) {
            const stagesForColumn =
                topStage.children && topStage.children.length > 0 ? [topStage].concat(topStage.children) : [topStage];

            nodeColumns.push({
                topStage,
                nodes: stagesForColumn.map(nodeStage => ({
                    x: 0, // Layout is done later
                    y: 0,
                    name: nodeStage.name,
                    time: nodeStage.time,
                    id: nodeStage.id,
                    stages: nodeStage.stages,
                    stage: nodeStage,
                    parent: topStage,
                    isPlaceholder: false,
                    key: 'n_' + nodeStage.id,
                })),
            });
        }

        return nodeColumns;
    }

    /**
     * Walks the columns of nodes giving them x and y positions. Mutates the node objects in place for now.
     */
    positionNodes(nodeColumns) {

        const { nodeSpacingH, nodeSpacingV } = this.state.layout;

        let xp = nodeSpacingH / 2;
        let previousTopNode = null;

        for (const column of nodeColumns) {
            const topNode = column.nodes[0];

            let yp = ypStart; // Reset Y to top for each column

            if (previousTopNode) {
                // Advance X position
                if (previousTopNode.isPlaceholder || topNode.isPlaceholder) {
                    // Don't space placeholder nodes (start/end) as wide as normal.
                    xp += Math.floor(nodeSpacingH * 0.7);
                } else {
                    xp += nodeSpacingH;
                }
            }

            for (const node of column.nodes) {
                node.x = xp;
                node.y = yp;

                yp += nodeSpacingV;
            }

            previousTopNode = topNode;
        }
    }

    /**
     * Generate label descriptions for big labels at the top of each column
     */
    createBigLabels(columns) {

        const labels = [];

        for (const column of columns) {

            const node = column.nodes[0];
            const stage = column.topStage;
            const text = stage ? stage.name : node.name;
            const key = 'l_b_' + node.key;

            labels.push({
                x: node.x,
                y: node.y,
                node,
                stage,
                text,
                key
            });
        }

        return labels;
    }

    /**
     * Generate label descriptions for small labels under the nodes
     */
    createSmallLabels(columns) {

        const labels = [];

        for (const column of columns) {
            if (column.nodes.length === 1) {
                continue; // No small labels for single-node columns
            }
            for (const node of column.nodes) {
                const label           = {
                    x: node.x,
                    y: node.y,
                    text: node.name,
                    key: 'l_s_' + node.key,
                };

                if (node.isPlaceholder === false) {
                    label.stage = node.stage;
                }
                if(node.parent && node.parent.id !== node.stage.id) {
                  labels.push(label);
                }
            }
        }

        return labels;
    }

    /**
     * Generate connection information from column to column
     */
    createConnections(columns) {
        const connections = [];

        let sourceNodes = [];

        for (const column of columns) {
            if (sourceNodes.length) {
                connections.push({
                    sourceNodes,
                    destinationNodes: column.nodes
                });
            }

            sourceNodes = column.nodes;
        }

        return connections;
    }

    /**
     * Generate the Component for a big label
     */
    renderBigLabel(details) {
        const {
            nodeSpacingH,
            labelOffsetV,
            connectorStrokeWidth,
        } = this.state.layout;

        const labelWidth = nodeSpacingH - connectorStrokeWidth * 2;
        const labelHeight = ypStart - labelOffsetV;
        const labelOffsetH = Math.floor(labelWidth / -2);

        // These are about layout more than appearance, so they should probably remain inline
        const bigLabelStyle = {
            position: 'absolute',
            width: labelWidth,
            maxHeight: labelHeight + 'px',
            textAlign: 'center',
            marginLeft: labelOffsetH,
        };

        const x = details.x;
        const bottom = this.state.measuredHeight - details.y + labelOffsetV;

        // These are about layout more than appearance, so they're inline
        const style = Object.assign({}, bigLabelStyle, {
            bottom: bottom + 'px',
            left: x + 'px',
        });

        const classNames = ['pipeline-big-label'];
        if (this.stageIsSelected(details.stage) || this.stageChildIsSelected(details.stage)) {
            classNames.push('selected');
        }

        function getTime(stage) {
          let time = 0;

          if(stage.children) {
            stage.children.forEach((child) => {
              time += getTime(child);
            });
          }

          if(stage.stages) {
            time += stage.stages.map((s) => {
              return s.time || 0;
            }).reduce((a, b) => a + b, 0)
          }

          return time;
        }

        const time = details.stage ? getTime(details.stage) : 0

        return <div className={classNames.join(' ')} style={style} key={details.key}>
          {details.text}
          { !details.node.isPlaceholder ?
            <small style={{ display: 'block' }}>
              { ms(time) }
            </small>
          : ''}
        </div>;
    }

    /**
     * Generate the Component for a small label
     */
    renderSmallLabel(details) {
        const {
            nodeSpacingH,
            nodeSpacingV,
            curveRadius,
            connectorStrokeWidth,
            nodeRadius,
            smallLabelOffsetV,
        } = this.state.layout;

        const smallLabelWidth = Math.floor(nodeSpacingH - (2 * curveRadius) - (2 * connectorStrokeWidth)); // Fit between lines
        const smallLabelHeight = Math.floor(nodeSpacingV - smallLabelOffsetV - nodeRadius - nodeStrokeWidth);
        const smallLabelOffsetH = Math.floor(smallLabelWidth * -0.5);

        const x = details.x + smallLabelOffsetH;
        const top = details.y + smallLabelOffsetV;

        // These are about layout more than appearance, so they're inline
        const style = {
            top: top,
            left: x,
            position: 'absolute',
            width: smallLabelWidth,
            maxHeight: smallLabelHeight,
            textAlign: 'center',
        };

        const classNames = ['pipeline-small-label'];
        if (details.stage && this.stageIsSelected(details.stage)) {
            classNames.push('selected');
        }

        function getTime(stage) {
          let time = 0;

          if(stage.children) {
            stage.children.forEach((child) => {
              time += getTime(child);
            });
          }

          if(stage.stages) {
            time += stage.stages.map((s) => {
              return s.time || 0;
            }).reduce((a, b) => a + b, 0)
          }

          return time;
        }

        const time = details.stage ? getTime(details.stage) : 0

        return (
            <div className={classNames.join(' ')} style={style} key={details.key}>
                {details.text}
                <small style={{ display: 'block' }}>
                  { ms(time) }
                </small>
            </div>
        );
    }

    /**
     * Generate SVG for a composite connection, which may be to/from many nodes.
     *
     * Farms work out to other methods on self depending on the complexity of the line required. Adds all the SVG
     * components to the elements list.
     */
    renderCompositeConnection(connection, elements) {
        const {
            sourceNodes,
            destinationNodes,
        } = connection;

        this.renderBasicConnections(sourceNodes, destinationNodes, elements);
    }

    /**
     * Connections between adjacent columns without any skipping.
     *
     * Adds all the SVG components to the elements list.
     */
    renderBasicConnections(sourceNodes, destinationNodes, elements) {
        const { connectorStrokeWidth } = this.state.layout;

        // Stroke props common to straight / curved connections
        const connectorStroke = {
            className: 'pipeline-connector',
            strokeWidth: connectorStrokeWidth,
        };

        this.renderHorizontalConnection(sourceNodes[0], destinationNodes[0], connectorStroke, elements);

        // Collapse from previous node(s) to top column node
        for (const previousNode of sourceNodes.slice(1)) {
            this.renderBasicCurvedConnection(previousNode, destinationNodes[0], elements);
        }

        // Expand from top previous node to column node(s)
        for (const destNode of destinationNodes.slice(1)) {
            this.renderBasicCurvedConnection(sourceNodes[0], destNode, elements);
        }
    }

    /**
     * Simple straight connection.
     *
     * Adds all the SVG components to the elements list.
     */
    renderHorizontalConnection(leftNode, rightNode, connectorStroke, elements) {
        const { nodeRadius, terminalRadius } = this.state.layout;
        const leftNodeRadius = leftNode.isPlaceholder ? terminalRadius : nodeRadius;
        const rightNodeRadius = rightNode.isPlaceholder ? terminalRadius : nodeRadius;

        const key = connectorKey(leftNode, rightNode);

        const x1 = leftNode.x + leftNodeRadius - (nodeStrokeWidth / 2);
        const x2 = rightNode.x - rightNodeRadius + (nodeStrokeWidth / 2);
        const y = leftNode.y;

        elements.push(
            <line {...connectorStroke}
                  key={key}
                  x1={x1}
                  y1={y}
                  x2={x2}
                  y2={y}
            />
        );
    }

    /**
     * A direct curve between two nodes in adjactent columns.
     *
     * Adds all the SVG components to the elements list.
     */
    renderBasicCurvedConnection(leftNode, rightNode, elements) {
        const { nodeRadius, terminalRadius, curveRadius, connectorStrokeWidth, nodeSpacingH } = this.state.layout;
        const leftNodeRadius = leftNode.isPlaceholder ? terminalRadius : nodeRadius;
        const rightNodeRadius = rightNode.isPlaceholder ? terminalRadius : nodeRadius;
        const halfSpacingH = nodeSpacingH / 2;

        const key = connectorKey(leftNode, rightNode);

        const leftPos = {
            x: leftNode.x + leftNodeRadius - (nodeStrokeWidth / 2),
            y: leftNode.y,
        };

        const rightPos = {
            x: rightNode.x - rightNodeRadius + (nodeStrokeWidth / 2),
            y: rightNode.y,
        };

        // Stroke props common to straight / curved connections
        const connectorStroke = {
            className: 'pipeline-connector',
            strokeWidth: connectorStrokeWidth,
        };

        const midPointX = leftNode.y > rightNode.y
            ? Math.round(leftNode.x + halfSpacingH)
            : Math.round(rightNode.x - halfSpacingH);

        const pathData = `M ${leftPos.x} ${leftPos.y}` +
            this.svgCurve(leftPos.x, leftPos.y, rightPos.x, rightPos.y, midPointX, curveRadius);

        elements.push(
            <path {...connectorStroke} key={key} d={pathData} fill="none" />
        );
    }

    /**
     * Generates an SVG path string for the "verical" S curve used to connect nodes in adjacent columns.
     */
    svgCurve(x1, y1, x2, y2, midPointX, curveRadius) {
        const verticalDirection = Math.sign(y2 - y1); // 1 == curve down, -1 == curve up
        const w1 = midPointX - curveRadius - x1 + (curveRadius * verticalDirection);
        const w2 = x2 - curveRadius - midPointX - (curveRadius * verticalDirection);
        const v = y2 - y1 - (2 * curveRadius * verticalDirection); // Will be -ive if curve up
        const cv = verticalDirection * curveRadius;

        return (
            ` l ${w1} 0` // first horizontal line
            + ` c ${curveRadius} 0 ${curveRadius} ${cv} ${curveRadius} ${cv}`  // turn
            + ` l 0 ${v}` // vertical line
            + ` c 0 ${cv} ${curveRadius} ${cv} ${curveRadius} ${cv}` // turn again
            + ` l ${w2} 0` // second horizontal line
        );
    }

    /**
     * Generate the SVG elements to represent a node.
     *
     * Adds all the SVG components to the elements list.
     */
    renderNode(node, elements) {
        let nodeIsSelected = false;
        const { nodeRadius, connectorStrokeWidth, terminalRadius } = this.state.layout;
        const key = node.key;

        const groupChildren = [];

        if (node.isPlaceholder === true) {
            groupChildren.push(
                <circle r={terminalRadius} className="pipeline-node-terminal"/>
            );
        } else {
            const { name, state } = node.stage;

            groupChildren.push(
              <g className="icon"><circle cx="0" cy="0" r="12" className={ `icon-${state}` }></circle>
                <g>
                  { Icon.getStatus(state) }
                </g>
              </g>
            );

            if (name) {
                groupChildren.push(<div>{ name }</div>);
            }

            nodeIsSelected = this.stageIsSelected(node.stage);
        }

        // Set click listener and link cursor only for nodes we want to be clickable
        const clickableProps = {};

        if (node.isPlaceholder === false && node.stage.state !== 'skipped') {
            clickableProps.cursor = "pointer";
            clickableProps.onClick = () => this.nodeClicked(node);
        }

        // Add an invisible click/touch/mouseover target, coz the nodes are small and (more importantly)
        // many are hollow.
        groupChildren.push(
            <circle r={nodeRadius + (2 * connectorStrokeWidth)}
                    className="pipeline-node-hittarget"
                    fillOpacity="0"
                    stroke="none"
                    {...clickableProps} />
        );

        // Most of the nodes are in shared code, so they're rendered at 0,0. We transform with a <g> to position them
        const groupProps = {
            key,
            transform: `translate(${node.x},${node.y})`,
            className: nodeIsSelected ? 'pipeline-node-selected' : 'pipeline-node',
        };

        elements.push(React.createElement('g', groupProps, ...groupChildren));
    }

    /**
     * Is this stage currently selected?
     */
    stageIsSelected(stage) {
        const { selectedStage, defaultSelectStage } = this.state;

        return selectedStage ? selectedStage === stage : defaultSelectStage === stage;
    }

    /**
     * Is this any child of this stage currently selected?
     */
    stageChildIsSelected(stage) {
        if (stage) {
            const { children } = stage;
            const { selectedStage } = this.state;

            if (children && selectedStage) {
                for (const child of children) {
                    if (child === selectedStage) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    nodeClicked(node) {
        if (node.isPlaceholder === false && node.stage.state !== 'skipped') {
            const stage = node.stage;
            const listener = this.props.onSelect;

            if (listener) {
                listener(node, stage);
            }

            // Update selection
            this.setState({ selectedStage: stage });
        }
    }

    render() {
        const {
            nodeColumns = [],
            connections = [],
            bigLabels = [],
            smallLabels = [],
            measuredWidth,
            measuredHeight,
        } = this.state;

        // Without these we get fire, so they're hardcoded
        const outerDivStyle = {
            position: 'relative', // So we can put the labels where we need them
            overflow: 'visible', // So long labels can escape this component in layout,
            display: 'inline-block',
            width: `${measuredWidth}px`,
            height: `${measuredHeight}px`
        };

        const visualElements = []; // Buffer for children of the SVG

        connections.forEach(connection => {
            this.renderCompositeConnection(connection, visualElements);
        });

        nodeColumns.forEach(column => {
            column.nodes.forEach(node => {
                this.renderNode(node, visualElements);
            });
        });

        return (
            <div style={outerDivStyle} className="PipelineGraph">
                <svg width={measuredWidth} height={measuredHeight}>
                    {visualElements}
                </svg>
                {bigLabels.map(label => this.renderBigLabel(label))}
                {smallLabels.map(label => this.renderSmallLabel(label))}
            </div>
        );
    }
}

// PipelineGraph.propTypes = {
//     stages: PropTypes.array,
//     layout: PropTypes.object,
//     onSelect: PropTypes.func,
// };

module.exports = PipelineGraph;
