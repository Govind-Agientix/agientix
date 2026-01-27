import { memo } from "react";
import { Handle, Position, type NodeProps, type Node } from "@xyflow/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type NodeStatus = "idle" | "running" | "success" | "error";

export interface WorkflowNodeData extends Record<string, unknown> {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  status: NodeStatus;
}

export type WorkflowNodeType = Node<WorkflowNodeData, "workflow">;

const statusStyles: Record<NodeStatus, { dot: string; ring: string }> = {
  idle: { dot: "bg-muted-foreground", ring: "" },
  running: { dot: "bg-amber-500 animate-pulse", ring: "ring-2 ring-amber-500/30" },
  success: { dot: "bg-green-500", ring: "ring-2 ring-green-500/20" },
  error: { dot: "bg-destructive", ring: "ring-2 ring-destructive/20" },
};

const statusLabels: Record<NodeStatus, string> = {
  idle: "Idle",
  running: "Running",
  success: "Success",
  error: "Error",
};

function WorkflowNodeComponent({ data, selected }: NodeProps<WorkflowNodeType>) {
  const Icon = data.icon;
  const status = data.status || "idle";
  const styles = statusStyles[status];

  return (
    <div
      className={cn(
        "relative bg-background border border-border rounded-xl shadow-md px-4 py-3 min-w-[160px] transition-all duration-200",
        selected && "border-primary shadow-lg shadow-primary/10",
        styles.ring
      )}
    >
      {/* Target Handle (Left) */}
      <Handle
        type="target"
        position={Position.Left}
        className="!w-3 !h-3 !bg-muted-foreground !border-2 !border-background !-left-1.5"
      />

      {/* Content */}
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-foreground truncate">
            {data.title}
          </h4>
          <p className="text-xs text-muted-foreground truncate">
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="absolute -top-1 -right-1 flex items-center gap-1.5 bg-background border border-border rounded-full px-2 py-0.5 shadow-sm">
        <span className={cn("w-1.5 h-1.5 rounded-full", styles.dot)} />
        <span className="text-[10px] font-medium text-muted-foreground">
          {statusLabels[status]}
        </span>
      </div>

      {/* Source Handle (Right) */}
      <Handle
        type="source"
        position={Position.Right}
        className="!w-3 !h-3 !bg-primary !border-2 !border-background !-right-1.5"
      />
    </div>
  );
}

export const WorkflowNode = memo(WorkflowNodeComponent);
