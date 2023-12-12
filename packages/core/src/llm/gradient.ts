import { Event } from "../callbacks/CallbackManager";
import { ChatMessage, ChatResponse, LLM, LLMMetadata } from "./LLM";
import { Gradient } from "@gradientai/nodejs-sdk";

type MateuszPlsExportThis = ReturnType<Gradient["getBaseModel"]> | ReturnType<Gradient["getModelAdapter"]>
type CompletionParams = Omit<Parameters<Awaited<MateuszPlsExportThis>["complete"]>[0], "query">

export class GradientLLM implements LLM {
  public hasStreaming = false;
  private gradient!: Gradient
  private model!: MateuszPlsExportThis

  private completionParams: CompletionParams | undefined

  get metadata(): LLMMetadata {
    return {
      model: '',
      maxTokens: 0,
      temperature: 0,
      topP: 0,
      contextWindow: 4096,
      tokenizer: undefined
    }
  };

  public constructor(params: {
    accessToken?: string,
    completionParams?: CompletionParams,
    host?: string,
    workspaceId?: string
  } & ({ modelAdapterId: string } | { baseModelSlug: string })
  ) {
    const { accessToken, completionParams, host, workspaceId } = params
    this.gradient = new Gradient({
      accessToken, host, workspaceId
    })

    if ('modelAdapterId' in params) {
      this.model = this.gradient.getModelAdapter({ modelAdapterId: params.modelAdapterId })
    } else {
      this.model = this.gradient.getBaseModel({ baseModelSlug: params.baseModelSlug })
    }
    this.completionParams = completionParams

  }

  public readonly chat = <T extends boolean | undefined = undefined, R = T extends true ? AsyncGenerator<string, void, unknown> : ChatResponse>(messages: ChatMessage[], parentEvent?: Event | undefined, streaming?: T | undefined): Promise<R> => {
    throw new Error("Method not implemented.");
  }
  public readonly complete = async <T extends boolean | undefined = undefined, R = T extends true ? AsyncGenerator<string, void, unknown> : ChatResponse>(prompt: string, parentEvent?: Event | undefined, streaming?: T | undefined): Promise<R> => {
    if (streaming) {
      throw new Error("Streaming not implemented.");
    }
    const response = await (await this.model).complete({ ...this.completionParams ?? {}, query: prompt })
    return { message: response.generatedOutput } as R
  }
  public readonly tokens = (messages: ChatMessage[]): number => {
    throw new Error("Method not implemented.");
  }

}