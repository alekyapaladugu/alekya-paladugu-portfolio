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

  static readonly JAVASCRIPT_TAG = new Tag('Javascript', 'darkblue');
  static readonly REACT_TAG = new Tag('React', 'darkblue');
  static readonly PYTHON_TAG = new Tag('Python', 'darkblue');
  static readonly SQL_TAG = new Tag('SQL Server', 'darkblue');
  static readonly SQLALCHEMY_TAG = new Tag('SQLAlchemy', 'darkblue');
  static readonly FLASK_TAG = new Tag('Flask', 'darkblue');

  static readonly SPARTACUS_TAG = new Tag('Spartacus', 'darkblue');
  static readonly ANGULAR_TAG = new Tag('Angular', 'darkblue');
  static readonly KENDOUI_TAG = new Tag('KendoUI', 'darkblue');
  static readonly SAP_TAG = new Tag('SAP Hybris,', 'darkblue');
  static readonly AJAX_TAG = new Tag('Ajax', 'darkblue');
  static readonly JQUERY_TAG = new Tag('jQuery', 'darkblue');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
