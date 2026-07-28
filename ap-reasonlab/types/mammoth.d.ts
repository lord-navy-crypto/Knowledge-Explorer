declare module "mammoth" {
  export type MammothMessage = {
    type: string;
    message: string;
  };

  export type MammothResult = {
    value: string;
    messages: MammothMessage[];
  };

  export function convertToMarkdown(input: {
    arrayBuffer: ArrayBuffer;
  }): Promise<MammothResult>;
}
