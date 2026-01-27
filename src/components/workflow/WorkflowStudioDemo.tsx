import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
} from "@xyflow/react";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "default",
    position: { x: 50, y: 100 },
    data: { label: "Input" },
  },
  {
    id: "2",
    type: "default",
    position: { x: 250, y: 100 },
    data: { label: "AI Agent" },
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },
];

export function WorkflowStudioDemo() {
  return (
    <div className="h-[520px] w-full rounded-lg overflow-hidden">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
