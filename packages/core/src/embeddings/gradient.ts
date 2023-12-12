import { Gradient } from '@gradientai/nodejs-sdk'
import { BaseEmbedding } from './types'

type MateuszPlsExportThis = ReturnType<Gradient["getEmbeddingsModel"]>
type MateuszPlzExportTheEnum = Parameters<Gradient["getEmbeddingsModel"]>[0]["slug"]

// For bge models that Gradient AI provides, it is suggested to add the instruction for retrieval.
// Reference: https://huggingface.co/BAAI/bge-large-en-v1.5#model-list
const QUERY_INSTRUCTION_FOR_RETRIEVAL = "Represent this sentence for searching relevant passages:"

export class GradientEmbedding extends BaseEmbedding {
  private gradient!: Gradient
  private model!: MateuszPlsExportThis

  public constructor({ accessToken, host, modelSlug = "bge-large", workspaceId }: {
    modelSlug?: MateuszPlzExportTheEnum,
    accessToken?: string,
    host?: string,
    workspaceId?: string,
  }) {
    super()
    this.gradient = new Gradient({ accessToken, host, workspaceId })
    this.model = this.gradient.getEmbeddingsModel({slug: modelSlug})
  }

  private readonly getEmbedding = async (text: string): Promise<number[]> => {
    const result = await (await this.model).generateEmbeddings({inputs: [{input: text}]})
    return result.embeddings[0].embedding
  }

  public readonly getTextEmbedding = (text: string): Promise<number[]> => {
    return this.getEmbedding(text)
  }
  public readonly getQueryEmbedding = (query: string): Promise<number[]> => {
    return this.getEmbedding(`${QUERY_INSTRUCTION_FOR_RETRIEVAL} ${query}`)
  }
}