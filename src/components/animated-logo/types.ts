
export type AnimationElement = "connect" | "line" | "interface" | "soul" | "wave" | "heart";

export interface AnimationSequenceItem {
  element: AnimationElement;
  delay: number;
}
