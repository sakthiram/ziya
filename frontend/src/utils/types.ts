export interface Folders {
  [key: string]: {
    token_count: number;
    children?: Folders;
  };
}

export interface CheckboxTreeNodes {
  label: string;
  value: string;
  children?: CheckboxTreeNodes[];
}