export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
  static readonly PYTHON = new Tag('Python', 'pink');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
  static readonly REACT = new Tag('React', 'blue');
  static readonly FLASK = new Tag('Flask', 'green');
  static readonly REDIS = new Tag('Redis', 'purple');
  static readonly PYTORCH = new Tag('PyTorch', 'grey');
  static readonly LLM = new Tag('LLM', 'brown');
  static readonly BERT = new Tag('BERT', 'lightblue');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
