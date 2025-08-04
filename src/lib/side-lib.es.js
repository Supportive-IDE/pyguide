var Ec = Object.defineProperty;
var Uc = Object.getPrototypeOf;
var Gc = Reflect.get;
var Do = (g) => {
  throw TypeError(g);
};
var Jc = (g, i, e) => i in g ? Ec(g, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : g[i] = e;
var l = (g, i, e) => Jc(g, typeof i != "symbol" ? i + "" : i, e), bi = (g, i, e) => i.has(g) || Do("Cannot " + e);
var u = (g, i, e) => (bi(g, i, "read from private field"), e ? e.call(g) : i.get(g)), b = (g, i, e) => i.has(g) ? Do("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(g) : i.set(g, e), y = (g, i, e, n) => (bi(g, i, "write to private field"), n ? n.call(g, e) : i.set(g, e), e), m = (g, i, e) => (bi(g, i, "access private method"), e);
var Gs = (g, i, e, n) => ({
  set _(s) {
    y(g, i, s, e);
  },
  get _() {
    return u(g, i, n);
  }
}), Ii = (g, i, e) => Gc(Uc(g), e, i);
class xt {
  constructor(i) {
    this.name = i;
  }
}
const T = class T extends xt {
  /**
   * Returns the Character representation of an ascii code.
   * @param {Number} code The ascii code of a character
   * @returns {Character} The instance of Character that represents the ascii code.
   */
  static getCategory(i) {
    return i >= 65 && i <= 90 || i >= 97 && i <= 122 ? T.Letter : i >= 48 && i <= 57 ? T.Digit : i === 46 ? T.Decimal : i === 95 ? T.Underscore : i === 32 ? T.Space : i === 9 ? T.Tab : i === 10 || i === 13 ? T.NewLine : i === 40 ? T.OpenParentheses : i === 41 ? T.CloseParentheses : i === 123 ? T.OpenCurlyBrace : i === 125 ? T.CloseCurlyBrace : i === 91 ? T.OpenSquareBracket : i === 93 ? T.CloseSquareBracket : i === 44 ? T.Comma : i === 58 ? T.Colon : i === 59 ? T.Semicolon : i === 43 ? T.Plus : i === 45 ? T.Minus : i === 42 ? T.Asterisk : i === 37 ? T.Modulo : i === 61 ? T.Equals : i === 60 ? T.LessThan : i === 62 ? T.GreaterThan : i === 33 ? T.Exclamation : i === 47 ? T.ForwardSlash : i === 92 ? T.BackSlash : i === 35 ? T.Hash : i === 39 ? T.SingleQuote : i === 34 ? T.DoubleQuote : i === 64 ? T.At : T.Unknown;
  }
  /**
   * Checks if this is a single or double quote.
   * @returns {Boolean} True if this Character is a quote, false otherwise.
   */
  isQuote() {
    return this === T.SingleQuote || this === T.DoubleQuote;
  }
};
/**
 * (Static) An uppercase or lowercase letter.
 */
l(T, "Letter", new T("letter")), /**
 * (Static) A single digit, 0-9
 */
l(T, "Digit", new T("digit")), /**
 * (Static) A decimal point (or period / fullstop / dot)
 */
l(T, "Decimal", new T("decimal")), /**
 * (Static) An underscore, _
 */
l(T, "Underscore", new T("underscore")), /**
 * (Static) A space
 */
l(T, "Space", new T("space")), /**
 * (Static) A tab character, \t
 */
l(T, "Tab", new T("tab")), /**
 * (Static) A newline character, \n or \r
 */
l(T, "NewLine", new T("newline")), /**
 * (Static) An opening parenthesis, (
 */
l(T, "OpenParentheses", new T("openParentheses")), /**
 * (Static) A closing parenthesis, )
 */
l(T, "CloseParentheses", new T("closeParentheses")), /**
 * (Static) An openint curly brace, {
 */
l(T, "OpenCurlyBrace", new T("openCurlyBrace")), /**
 * (Static) A closing curly brace, }
 */
l(T, "CloseCurlyBrace", new T("closeCurlyBrace")), /**
 * (Static) An opening square bracket, [
 */
l(T, "OpenSquareBracket", new T("openSquareBracket")), /**
 * (Static) A closing square bracket, ]
 */
l(T, "CloseSquareBracket", new T("closeSquareBracket")), /** (Static) A comma. */
l(T, "Comma", new T("comma")), /** (Static) A colon, : */
l(T, "Colon", new T("colon")), /** (Static) A semicolon, ; */
l(T, "Semicolon", new T("semicolon")), /** (Static) A plus sign, + */
l(T, "Plus", new T("plus")), /** (Static) A minus sign, - */
l(T, "Minus", new T("minus")), /** (Static) An asterisk, * */
l(T, "Asterisk", new T("asterisk")), /** (Static) The modulo operator, % */
l(T, "Modulo", new T("modulo")), /** (Static) An equals sign, = */
l(T, "Equals", new T("equals")), /** (Static) The less than symbol, < */
l(T, "LessThan", new T("lessThan")), /** (Static) The greater than symbol, > */
l(T, "GreaterThan", new T("greaterThan")), /** (Static) An exclamation mark, ! */
l(T, "Exclamation", new T("exclamation")), /** (Static) A forward slash, / */
l(T, "ForwardSlash", new T("forwardSlash")), /** (Static) A back slash, \ */
l(T, "BackSlash", new T("backSlash")), /** (Static) The hash symbol, # */
l(T, "Hash", new T("hash")), /** (Static) A single quote mark, ' */
l(T, "SingleQuote", new T("singleQuote")), /** (Static) A double quote mark, " */
l(T, "DoubleQuote", new T("doubleQuote")), /** (Static) The @ symbol */
l(T, "At", new T("at")), /** (Static) Any other character not described. */
l(T, "Unknown", new T("unknown"));
let G = T;
const A = class A extends xt {
};
l(A, "BlockDefinitions", new A("BlockDefinitions")), l(A, "LogicalOperators", new A("LogicalOperators")), l(A, "Types", new A("Types")), l(A, "MathsOperators", new A("MathsOperators")), l(A, "ComparisonOperators", new A("ComparisonOperators")), l(A, "OtherKeywords", new A("OtherKeywords")), l(A, "BuiltInFunctions", new A("BuiltInFunctions")), l(A, "BuiltInMethods", new A("BuiltInMethods")), l(A, "OtherMethods", new A("OtherMethods")), l(A, "Identifiers", new A("Identifiers")), l(A, "MagicMethods", new A("MagicMethods")), l(A, "SpecialVariables", new A("SpecialVariables")), l(A, "Properties", new A("Properties")), l(A, "BuiltInExceptions", new A("BuiltInExceptions")), l(A, "Literals", new A("Literals")), l(A, "CompoundTypes", new A("CompoundTypes")), l(A, "Other", new A("Other")), l(A, "Comment", new A("Comment")), l(A, "Unknown", new A("Unknown")), l(A, "BuiltInModules", new A("BuiltInModules")), l(A, "ModuleFunctions", new A("ModuleFunctions")), l(A, "ModuleProperties", new A("ModuleProperties")), l(A, "ClassAttributes", new A("ClassAttributes")), l(A, "ImportedEntities", new A("ImportedEntities")), l(A, "TypeHint", new A("TypeHint")), l(A, "SyntacticSugar", new A("SyntacticSugar")), // Refactor: multipart expressions
l(A, "FunctionCall", new A("FunctionCall")), l(A, "MethodCall", new A("MethodCall")), l(A, "ExceptionCall", new A("ExceptionCall")), l(A, "BlockDefinitionStatement", new A("BlockDefinitionStatement")), l(A, "Group", new A("Group")), l(A, "MultipartValue", new A("MultipartValue")), l(A, "Assignment", new A("Assigment")), l(A, "KeywordStatement", new A("KeywordStatement"));
let c = A;
const r = class r extends xt {
};
// Block definitions - all in lookup
l(r, "ClassDefinition", new r("class")), l(r, "FunctionDefinition", new r("def")), l(r, "ElifDefinition", new r("elif")), l(r, "ElseDefinition", new r("else")), l(r, "ExceptDefinition", new r("except")), l(r, "FinallyDefinition", new r("finally")), l(r, "ForDefinition", new r("for")), l(r, "IfDefinition", new r("if")), l(r, "LambdaDefinition", new r("lambda")), l(r, "TryDefinition", new r("try")), l(r, "WhileDefinition", new r("while")), l(r, "DocumentDefinition", new r("document")), // for identifying document level scope
l(r, "ListComprehension", new r("listComprehension")), // for identifying list comp scope (loop variables)
// Logical operators - all in lookup
l(r, "AndOperator", new r("and")), l(r, "NotOperator", new r("not")), l(r, "OrOperator", new r("or")), // Types - all in lookup
l(r, "FalseType", new r("False")), l(r, "NoneType", new r("None")), l(r, "TrueType", new r("True")), // Other keywords - all in lookup
l(r, "AsKeyword", new r("AsKeyword")), l(r, "AssertKeyword", new r("AssertKeyword")), l(r, "BreakKeyword", new r("BreakKeyword")), l(r, "ContinueKeyword", new r("continue")), l(r, "DelKeyword", new r("del")), l(r, "FromKeyword", new r("from")), l(r, "ImportKeyword", new r("import")), l(r, "InKeyword", new r("in")), l(r, "IsKeyword", new r("is")), l(r, "NotInKeyword", new r("not in")), l(r, "IsNotKeyword", new r("is not")), l(r, "PassKeyword", new r("pass")), l(r, "RaiseKeyword", new r("raise")), l(r, "ReturnKeyword", new r("return")), l(r, "WithKeyword", new r("with")), l(r, "YieldKeyword", new r("yield")), l(r, "GlobalKeyword", new r("global")), // Operators - all in lookup
l(r, "AddOperator", new r("+")), l(r, "SubtractOperator", new r("-")), l(r, "MultiplyOperator", new r("*")), l(r, "DivideOperator", new r("/")), l(r, "ModulusOperator", new r("%")), l(r, "ExponentOperator", new r("**")), l(r, "IntDivideOperator", new r("//")), l(r, "AssignmentOperator", new r("=")), l(r, "IncrementOperator", new r("+=")), l(r, "DecrementOperator", new r("-=")), l(r, "MultiplyAssignOperator", new r("*=")), l(r, "DivideAssignOperator", new r("/=")), l(r, "RemainderAssignOperator", new r("%=")), l(r, "IntDivideAssignOperator", new r("//=")), l(r, "ExponentAssignOperator", new r("**=")), l(r, "WalrusOperator", new r(":=")), l(r, "EqualOperator", new r("==")), l(r, "NotEqualOperator", new r("!=")), l(r, "GreaterThanOperator", new r(">")), l(r, "LessThanOperator", new r("<")), l(r, "GreaterThanOrEqualOperator", new r(">=")), l(r, "LessThanOrEqualOperator", new r("<=")), l(r, "TypeHintReturn", new r("->")), l(r, "Decorator", new r("decorator")), // Built-in functions (selected) - all in lookup
l(r, "AbsFunction", new r("abs")), l(r, "AllFunction", new r("all")), l(r, "AnyFunction", new r("any")), l(r, "AsciiFunction", new r("ascii")), l(r, "AssertFunction", new r("assert")), l(r, "BinFunction", new r("bin")), l(r, "BoolFunction", new r("bool")), l(r, "CallableFunction", new r("callable")), l(r, "ChrFunction", new r("chr")), l(r, "DictFunction", new r("dict")), l(r, "DivModFunction", new r("divmod")), l(r, "EnumerateFunction", new r("enumerate")), l(r, "EvalFunction", new r("eval")), l(r, "ExecFunction", new r("exec")), l(r, "ExitFunction", new r("exit")), l(r, "FilterFunction", new r("filter")), l(r, "FloatFunction", new r("float")), l(r, "FormatFunction", new r("format")), l(r, "GetAttrFunction", new r("getattr")), l(r, "GlobalsFunction", new r("globals")), l(r, "HasAttrFunction", new r("hasattr")), l(r, "InputFunction", new r("input")), l(r, "IntFunction", new r("int")), l(r, "IsInstanceFunction", new r("isinstance")), l(r, "LenFunction", new r("len")), l(r, "ListFunction", new r("list")), l(r, "MapFunction", new r("map")), l(r, "MaxFunction", new r("max")), l(r, "MinFunction", new r("min")), l(r, "OpenFunction", new r("open")), l(r, "OrdFunction", new r("ord")), l(r, "PowFunction", new r("pow")), l(r, "PrintFunction", new r("print")), l(r, "QuitFunction", new r("quit")), l(r, "RangeFunction", new r("range")), l(r, "ReversedFunction", new r("reversed")), l(r, "RoundFunction", new r("round")), l(r, "SetFunction", new r("set")), l(r, "SortedFunction", new r("sorted")), l(r, "StrFunction", new r("str")), l(r, "SumFunction", new r("sum")), l(r, "TupleFunction", new r("tuple")), l(r, "TypeFunction", new r("type")), l(r, "ZipFunction", new r("zip")), // Built-in String methods - all in lookup
l(r, "Capitalize", new r("capitalize")), l(r, "Casefold", new r("casefold")), l(r, "Center", new r("center")), l(r, "Count", new r("count")), l(r, "Encode", new r("encode")), l(r, "EndsWith", new r("endswith")), l(r, "ExpandTabs", new r("expandtabs")), l(r, "Find", new r("find")), l(r, "Format", new r("format")), l(r, "FormatMap", new r("format_map")), l(r, "Index", new r("index")), l(r, "IsAlnum", new r("isalnum")), l(r, "IsAlpha", new r("isalpha")), l(r, "IsAscii", new r("isascii")), l(r, "IsDecimal", new r("isdecimal")), l(r, "IsDigit", new r("isdigit")), l(r, "IsIdentifier", new r("isidentifier")), l(r, "IsLower", new r("islower")), l(r, "IsNumeric", new r("isnumeric")), l(r, "IsPrintable", new r("isprintable")), l(r, "IsSpace", new r("isspace")), l(r, "IsTitle", new r("istitle")), l(r, "IsUpper", new r("isupper")), l(r, "Join", new r("join")), l(r, "LJust", new r("ljust")), l(r, "Lower", new r("lower")), l(r, "LStrip", new r("lstrip")), l(r, "MakeTrans", new r("maketrans")), l(r, "Partition", new r("partition")), l(r, "Replace", new r("replace")), l(r, "RFind", new r("rfind")), l(r, "RIndex", new r("rindex")), l(r, "RJust", new r("rjust")), l(r, "RPartition", new r("rpartition")), l(r, "RSplit", new r("rsplit")), l(r, "RStrip", new r("rstrip")), l(r, "Split", new r("split")), l(r, "SplitLines", new r("splitlines")), l(r, "StartsWith", new r("startswith")), l(r, "Strip", new r("strip")), l(r, "SwapCase", new r("swapcase")), l(r, "Title", new r("title")), l(r, "Translate", new r("translate")), l(r, "Upper", new r("upper")), l(r, "ZFill", new r("zfill")), // Built-in list methods - all in lookup 
l(r, "Append", new r("append")), l(r, "Clear", new r("clear")), l(r, "Copy", new r("copy")), l(r, "Extend", new r("extend")), l(r, "Insert", new r("insert")), l(r, "Pop", new r("pop")), l(r, "Remove", new r("remove")), l(r, "Reverse", new r("reverse")), l(r, "Sort", new r("sort")), // Built-in dictionary methods - all in lookup
l(r, "FromKeys", new r("fromkeys")), l(r, "Get", new r("get")), l(r, "Items", new r("items")), l(r, "Keys", new r("keys")), l(r, "PopItem", new r("popitem")), l(r, "SetDefault", new r("setdefault")), l(r, "Update", new r("update")), l(r, "Values", new r("values")), // Built-in set methods - all in lookup
l(r, "Add", new r("add")), l(r, "Difference", new r("difference")), l(r, "DifferenceUpdate", new r("difference_update")), l(r, "Discard", new r("discard")), l(r, "Intersection", new r("intersection")), l(r, "IntersectionUpdate", new r("intersection_update")), l(r, "IsDisjoint", new r("isdisjoint")), l(r, "IsSubset", new r("issubset")), l(r, "IsSuperset", new r("issuperset")), l(r, "SymmetricDifference", new r("symmetric_difference")), l(r, "SymmetricDifferenceUpdate", new r("symmetric_difference_update")), l(r, "Union", new r("union")), // Built-in file methods - all in lookup
l(r, "Close", new r("close")), l(r, "Detach", new r("detach")), l(r, "FileNo", new r("fileno")), l(r, "Flush", new r("flush")), l(r, "IsAtty", new r("isatty")), l(r, "Read", new r("read")), l(r, "Readable", new r("readable")), l(r, "ReadLine", new r("readline")), l(r, "ReadLines", new r("readlines")), l(r, "Seek", new r("seek")), l(r, "Seekable", new r("seekable")), l(r, "Tell", new r("tell")), l(r, "Truncate", new r("truncate")), l(r, "Writable", new r("writable")), l(r, "Write", new r("write")), l(r, "WriteLines", new r("writelines")), // Magic methods - all in lookup
l(r, "Main", new r("__main__")), l(r, "Cmp", new r("__cmp__")), l(r, "Eq", new r("__eq__")), l(r, "Ne", new r("__ne__")), l(r, "Lt", new r("__lt__")), l(r, "Gt", new r("__gt__")), l(r, "Le", new r("__le__")), l(r, "Ge", new r("__ge__")), l(r, "Str", new r("__str__")), l(r, "SpecialContains", new r("__contains__")), l(r, "SpecialLen", new r("__len__")), // Special variables - all in lookup
l(r, "Name", new r("__name__")), l(r, "Self", new r("__self__")), l(r, "Doc", new r("__doc__")), l(r, "GetAttrVariable", new r("__getattr__")), l(r, "SetAttrVariable", new r("__setattr__")), l(r, "ClassVariable", new r("__class__")), l(r, "R", new r("r")), l(r, "F", new r("f")), l(r, "Sep", new r("sep")), // optional param in print
l(r, "End", new r("end")), // optional param in print
// Punctuation - all in lookup
l(r, "Dot", new r(".")), l(r, "OpenParenthesis", new r("(")), l(r, "CloseParenthesis", new r(")")), l(r, "OpenSquareBracket", new r("[")), l(r, "CloseSquareBracket", new r("]")), l(r, "OpenBrace", new r("{")), l(r, "CloseBrace", new r("}")), l(r, "Comma", new r(",")), l(r, "Colon", new r(":")), l(r, "SingleQuote", new r("'")), l(r, "DoubleQuote", new r('"')), l(r, "MultiLineCommentDelimiter", new r("'''")), // Rest - not in lookup
l(r, "ImportAll", new r("import all (*)")), l(r, "NamedImport", new r("named import")), // Built-in exceptions - one category to cover all
l(r, "ExceptionName", new r("exceptionName")), // Identifiers, literals, and comments - not in lookup
l(r, "VariableName", new r("variableName")), l(r, "FunctionName", new r("functionName")), l(r, "MethodName", new r("methodName")), l(r, "ClassName", new r("className")), l(r, "PropertyName", new r("propertyName")), l(r, "ModuleName", new r("moduleName")), l(r, "IntLiteral", new r("intLiteral")), l(r, "StringLiteral", new r("stringLiteral")), l(r, "ContinuationLine", new r("continuationLine")), l(r, "Separator", new r("separator")), l(r, "FloatLiteral", new r("floatLiteral")), l(r, "SingleLineComment", new r("singleLineComment")), l(r, "MultiLineComment", new r("multilineComment")), l(r, "TypeHint", new r("typeHint")), l(r, "StrType", new r("strType")), l(r, "IntType", new r("intType")), l(r, "FloatType", new r("floatType")), l(r, "BoolType", new r("boolType")), l(r, "ListType", new r("listType")), l(r, "SetType", new r("setType")), l(r, "DictType", new r("dictType")), l(r, "TupleType", new r("tupleType")), // Values of complex data types and related - not in lookup
l(r, "ListDefinition", new r("listDefinition")), l(r, "TupleDefinition", new r("tupleDefinition")), l(r, "SetDefinition", new r("setDefinition")), l(r, "DictDefinition", new r("dictDefinition")), l(r, "IndexKey", new r("indexKey")), // i.e. index or key access of list / tuple / dict
l(r, "Slice", new r("slice")), l(r, "Unknown", new r("unknown")), // Modules
l(r, "RandomModule", new r("randomModule")), l(r, "MathModule", new r("mathModule")), l(r, "StringModule", new r("stringModule")), l(r, "ReModule", new r("reModule")), l(r, "Pattern", new r("Pattern")), l(r, "Match", new r("Match")), l(r, "Sys", new r("sys")), // Random module methods
l(r, "Seed", new r("seed")), l(r, "GetState", new r("getstate")), l(r, "SetState", new r("setstate")), l(r, "GetRandBits", new r("getrandbits")), l(r, "RandRange", new r("randrange")), l(r, "RandInt", new r("randint")), l(r, "Choice", new r("choice")), l(r, "Choices", new r("choices")), l(r, "Shuffle", new r("shuffle")), l(r, "Sample", new r("sample")), l(r, "RandomMethod", new r("random")), l(r, "Uniform", new r("uniform")), l(r, "Triangular", new r("triangular")), l(r, "BetaVariate", new r("betavariate")), l(r, "ExpoVariate", new r("expovariate")), l(r, "GammaVariate", new r("gammavariate")), l(r, "Gauss", new r("gauss")), l(r, "LogNormVariate", new r("lognormvariate")), l(r, "NormalVariate", new r("normalvariate")), l(r, "VonMisesVariate", new r("vonmisesvariate")), l(r, "ParetoVariate", new r("paretovariate")), l(r, "WeibullVariate", new r("weibullvariate")), // math module methods - compound expression value node
l(r, "Acos", new r("acos")), // float
l(r, "Acosh", new r("acosh")), // float
l(r, "Asin", new r("asin")), // float
l(r, "Asinh", new r("asinh")), // float
l(r, "Atan", new r("atan")), // float
l(r, "Atan2", new r("atan2")), // float
l(r, "Atanh", new r("atanh")), // float
l(r, "Ceil", new r("ceil")), // int
l(r, "Comb", new r("comb")), // int
l(r, "CopySign", new r("copysign")), // float
l(r, "Cos", new r("cos")), // float
l(r, "Cosh", new r("cosh")), // float
l(r, "Degrees", new r("degrees")), // float
l(r, "Dist", new r("dist")), // float
l(r, "Erf", new r("erf")), // float
l(r, "Erfc", new r("erfc")), // float
l(r, "Exp", new r("exp")), // float
l(r, "Expm1", new r("expm1")), // float
l(r, "Fabs", new r("fabs")), // float
l(r, "Factorial", new r("factorial")), // int
l(r, "Floor", new r("floor")), // int
l(r, "Fmod", new r("fmod")), // float
l(r, "Frexp", new r("frexp")), // tuple
l(r, "Fsum", new r("fsum")), // float
l(r, "Gamma", new r("gamma")), // float
l(r, "Gcd", new r("gcd")), // int
l(r, "Hypot", new r("hypot")), // float
l(r, "IsClose", new r("isclose")), // bool
l(r, "IsFinite", new r("isfinite")), // bool
l(r, "IsInf", new r("isinf")), // bool
l(r, "IsNaN", new r("isnan")), // bool
l(r, "ISqrt", new r("isqrt")), // int
l(r, "Ldexp", new r("ldexp")), // float
l(r, "LGamma", new r("lgamma")), // float
l(r, "Log", new r("log")), // float
l(r, "Log10", new r("log10")), // float
l(r, "Log1P", new r("log1p")), // float
l(r, "Log2", new r("log2")), // float
l(r, "Perm", new r("perm")), // int
l(r, "Pow", new r("pow")), // float
l(r, "Prod", new r("prod")), // number
l(r, "Radians", new r("radians")), // float
l(r, "Remainder", new r("remainder")), // remainder
l(r, "Sin", new r("sin")), // float
l(r, "Sinh", new r("sinh")), // float
l(r, "Sqrt", new r("sqrt")), // float
l(r, "Tan", new r("tan")), // float
l(r, "Tanh", new r("tanh")), // float
l(r, "Trunc", new r("trunc")), // int
l(r, "E", new r("e")), // float
l(r, "Inf", new r("inf")), // float
l(r, "Nan", new r("nan")), // float
l(r, "Pi", new r("pi")), // float
l(r, "Tau", new r("tau")), // float
// String module entities
l(r, "AsciiLetters", new r("ascii_letters")), // string prop
l(r, "AsciiLowercase", new r("ascii_lowercase")), // string prop
l(r, "AsciiUppercase", new r("ascii_uppercase")), // string prop
l(r, "Digits", new r("digits")), // string prop
l(r, "Hexdigits", new r("hexdigits")), // string prop
l(r, "Octdigits", new r("octdigits")), // string prop
l(r, "Punctuation", new r("punctuation")), // string prop
l(r, "Printable", new r("printable")), // string prop
l(r, "Whitespace", new r("whitespace")), // string prop
l(r, "Formatter", new r("Formatter")), // Unknown (Formatter object), function
l(r, "Template", new r("Template")), // Unknown (Template object)
l(r, "Capwords", new r("capwords")), // string functions
// Re module entities
l(r, "ReA", new r("A")), // unknown (RegexFlag)
l(r, "ReASCII", new r("ASCII")), // unknown
l(r, "ReDebug", new r("DEBUG")), // unknown
l(r, "ReI", new r("I")), // unknown
l(r, "ReIGNORECASE", new r("IGNORECASE")), // unknown
l(r, "ReL", new r("L")), // unknown
l(r, "ReLOCALE", new r("LOCALE")), // unknown
l(r, "ReM", new r("M")), // unknown
l(r, "ReMULTILINE", new r("MULTILINE")), // unknown
l(r, "ReS", new r("S")), // unknown
l(r, "ReDOTALL", new r("DOTALL")), // unknown
l(r, "ReX", new r("X")), // unknown
l(r, "ReVERBOSE", new r("VERBOSE")), // unknown
l(r, "Compile", new r("compile")), // re.Pattern
l(r, "Search", new r("search")), // unknown (Match or None)
l(r, "Match", new r("match")), // unknown (Match or None)
l(r, "FullMatch", new r("fullmatch")), // unknown
// Include existing Split as valid method
l(r, "FindAll", new r("findall")), // list
l(r, "FindIter", new r("finditer")), // unknown
l(r, "Sub", new r("sub")), // string
l(r, "SubN", new r("subn")), // tuple
l(r, "Escape", new r("escape")), // string
l(r, "Purge", new r("purge")), // None
// Sys module entities
l(r, "AddAuditHook", new r("addaudithook")), // none, function
l(r, "Audit", new r("audit")), // none, function
l(r, "CallTracing", new r("call_tracing")), // unknown function
l(r, "ClearTypeCache", new r("_clear_type_cache")), // none function
l(r, "CurrentFrames", new r("_current_frames")), // dict function
l(r, "CurrentExceptions", new r("_current_exceptions")), // dict function
l(r, "BreakpointHook", new r("breakpointhook")), // none function
l(r, "DebugMallocStats", new r("_debugmallocstats")), // none function
l(r, "DisplayHook", new r("displayhook")), // non function
l(r, "ExceptHook", new r("excepthook")), // none function
l(r, "ExcInfo", new r("exc_info")), // tuple function
l(r, "SysExit", new r("exit")), // none, function
l(r, "GetAllocatedBlocks", new r("getallocatedblocks")), // int function
l(r, "GetAndroidApiLevel", new r("getandroidapilevel")), // int function
l(r, "GetDefaultEncoding", new r("getdefaultencoding")), // string function
l(r, "GetDLOpenFlags", new r("getdlopenflags")), // int function
l(r, "GetFileSystemEncoding", new r("getfilesystemencoding")), // string function
l(r, "GetFileSystemEncodeErrors", new r("getfilesystemencodeerrors")), // string function
l(r, "GetRefCount", new r("getrefcount")), // int function
l(r, "GetRecursionLimit", new r("getrecursionlimit")), // int function
l(r, "GetSizeOf", new r("getsizeof")), // int function
l(r, "GetSwitchInterval", new r("getswitchinterval")), // float function
l(r, "GetFrame", new r("_getframe")), // unknown function
l(r, "GetProfile", new r("getprofile")), // none function
l(r, "GetTrace", new r("gettrace")), // none function
l(r, "GetWindowsVersion", new r("getwindowsversion")), // tuple function
l(r, "GetAsyncGenHooks", new r("get_asyncgen_hooks")), // unknown function
l(r, "GetCoroutineOriginTrackingDepth", new r("get_coroutine_origin_tracking_depth")), // int function
l(r, "Intern", new r("intern")), // unknown function
l(r, "IsFinalizing", new r("is_finalizing")), // bool function
l(r, "SetDLOpenFlags", new r("setdlopenflags")), // none function
l(r, "SetProfile", new r("setprofile")), // unknown function
l(r, "SetRecursionLimit", new r("setrecursionlimit")), // none function
l(r, "SetSwitchInterval", new r("setswitchinterval")), // none function
l(r, "SetTrace", new r("settrace")), // none function
l(r, "SetAsyncgenHooks", new r("set_asyncgen_hooks")), // none function
l(r, "EnableLegacyWindowsFSEncoding", new r("_enablelegacywindowsfsencoding")), // none function
l(r, "ABIFlags", new r("abiflags")), // string, prop
l(r, "Argv", new r("argv")), // list, prop
l(r, "BaseExecPrefix", new r("base_exec_prefix")), // string, prop
l(r, "BasePrefix", new r("base_prefix")), // string prop
l(r, "ByteOrder", new r("byte_order")), // string prop
l(r, "BuiltInModuleNames", new r("built_in_module_names")), // tuple prop
l(r, "Copyright", new r("copyright")), // string prop
l(r, "DllHandle", new r("dllhandle")), // int prop
l(r, "DontWriteBytecode", new r("dont_write_bytecode")), // bool prop
l(r, "PycachePrefix", new r("pycache_prefix")), // unknown prop
l(r, "ExecPrefix", new r("exec_prefix")), // string prop
l(r, "Executable", new r("executable")), // string prop
l(r, "Flags", new r("flags")), // unknown prop
l(r, "FloatInfo", new r("float_info")), // unknown prop
l(r, "FloatReprStyle", new r("float_repr_style")), // string prop
l(r, "HashInfo", new r("hash_info")), // unknown prop
l(r, "HexVersion", new r("hexversion")), // int prop
l(r, "Implementation", new r("implementation")), // unknown prop
l(r, "IntInfo", new r("int_info")), // unknown prop
l(r, "LastType", new r("last_type")), // unknown prop
l(r, "LastValue", new r("last_value")), // unknown prop
l(r, "LastTraceback", new r("last_traceback")), // unknown prop
l(r, "MaxSize", new r("maxsize")), // int prop
l(r, "MaxUnicode", new r("maxunicode")), // int prop
l(r, "MetaPath", new r("meta_path")), // list prop
l(r, "Modules", new r("modules")), // dict prop
l(r, "OrigArgv", new r("orig_argv")), // list prop
l(r, "Path", new r("path")), // list prop
l(r, "PathHooks", new r("path_hooks")), // list prop
l(r, "PathImporterCache", new r("path_importer_cache")), // dict prop
l(r, "Platform", new r("platform")), // string prop
l(r, "Prefix", new r("prefix")), // string prop
l(r, "PS1", new r("ps1")), // string prop
l(r, "PS2", new r("ps2")), // string prop
l(r, "StdIn", new r("stdin")), // unknown prop
l(r, "StdOut", new r("stdout")), // unknown prop
l(r, "StdErr", new r("stderr")), // unknown prop
l(r, "StdLibModuleNames", new r("stdlib_module_names")), // unknown prop
l(r, "ThreadInfo", new r("thread_info")), // unknown prop
l(r, "TracebackLimit", new r("tracebacklimit")), // int prop
l(r, "Version", new r("version")), // string prop
l(r, "ApiVersion", new r("api_version")), // int prop
l(r, "VersionInfo", new r("version_info")), // tuple prop
l(r, "WarnOptions", new r("warnoptions")), // list prop
l(r, "WinVer", new r("winver")), // int prop
l(r, "XOptions", new r("_xoptions")), // dict prop
// Refactor: Multipart expressions
// Calls
l(r, "UserDefinedFunctionCall", new r("UserDefinedFunctionCall")), l(r, "BuiltInFunctionCall", new r("BuiltInFunctionCall")), l(r, "UserDefinedMethodCall", new r("UserDefinedMethodCall")), l(r, "BuiltInMethodCall", new r("BuiltInMethodCall")), l(r, "ExceptionCall", new r("ExceptionCall")), // Block definitions
l(r, "FunctionDefinitionStatement", new r("FunctionDefinitionStatement")), l(r, "MethodDefinitionStatement", new r("MethodDefinitionStatement")), l(r, "ForDefinitionStatement", new r("ForDefinitionStatement")), l(r, "ExceptDefinitionStatement", new r("ExceptDefinitionStatement")), l(r, "ClassDefinitionStatement", new r("ClassDefinitionStatement")), l(r, "LambdaDefinitionStatement", new r("LambdaDefinitionStatement")), l(r, "IfDefinitionStatement", new r("IfDefinitionStatement")), l(r, "ElifDefinitionStatement", new r("ElifDefinitionStatement")), l(r, "ElseDefinitionStatement", new r("ElseDefinitionStatement")), l(r, "WhileDefinitionStatement", new r("WhileDefinitionStatement")), l(r, "TryDefinitionStatement", new r("TryDefinitionStatement")), l(r, "FinallyDefinitionStatement", new r("FinallyDefinitionStatement")), l(r, "TernaryStatement", new r("TernaryStatement")), l(r, "WithDefinitionStatement", new r("WithStatment")), // Group
l(r, "GroupStatement", new r("GroupStatement")), // Other multipart 
l(r, "FString", new r("FString")), // Multipart values
l(r, "SubscriptedExpression", new r("SubscriptedExpression")), l(r, "CalculatedExpression", new r("CalculatedExpression")), l(r, "ComparisonExpression", new r("ComparisonExpression")), l(r, "BooleanExpression", new r("BooleanExpression")), l(r, "IteratorExpression", new r("IteratorExpression")), l(r, "CombinedStringLiteral", new r("CombinedStringLiteral")), l(r, "ReturnStatement", new r("ReturnStatement")), l(r, "PropertyCallExpression", new r("PropertyCallExpression")), // Assignments
l(r, "AssignmentStatement", new r("AssignmentStatement")), l(r, "ChangeStatement", new r("ChangeStatement")), // Statements beginning with keyword
l(r, "ImportStatement", new r("ImportStatement")), l(r, "AssertStatement", new r("AssertStatement")), l(r, "GlobalStatement", new r("GlobalStatement")), l(r, "ThrowStatement", new r("ThrowStatement"));
let t = r;
const P = class P extends xt {
  constructor(i, e = !1, n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map()) {
    super(i), this.isCustom = e, this.attributes = n, this.methods = s;
  }
  static createCustomType(i) {
    return P[i] = new P(i, !0), P[i];
  }
  toJSON() {
    return {
      name: this.name,
      attributes: Array.from(this.attributes.values()).map((i) => i.toJSON()),
      methods: Array.from(this.methods.values()).map((i) => i.toJSON())
    };
  }
};
l(P, "Int", new P("int")), l(P, "Float", new P("float")), l(P, "Number", new P("number (int or float)")), l(P, "String", new P("string")), l(P, "Bool", new P("bool")), l(P, "List", new P("list")), l(P, "Set", new P("set")), l(P, "Tuple", new P("tuple")), l(P, "Dict", new P("dictionary")), l(P, "File", new P("file")), l(P, "Function", new P("function")), l(P, "Class", new P("class")), // Reserved for unknown classes
l(P, "None", new P("none")), l(P, "Exception", new P("exception")), l(P, "Unknown", new P("unknown data type")), l(P, "NA", new P("N/A")), // For entities that don't have a type e.g. maths operators
l(P, "NotParsed", new P("not parsed")), // Default starting type
l(P, "Invalid", new P("invalid")), // Reserved for cases where an operation would result in a TypeError e.g. string / int
l(P, "Undefined", new P("undefined")), // Reserved for cases where a variable is used before it is declared
// Built in modules
l(P, "Random", new P("random")), l(P, "Math", new P("math")), l(P, "StringModule", new P("string module")), l(P, "Re", new P("re")), l(P, "Pattern", new P("Pattern")), l(P, "Match", new P("Match")), l(P, "Sys", new P("sys"));
let d = P;
const v = class v extends xt {
  /**
   * Creates a new MisconceptionInfo
   * @param {String} name The unique name of the misconception
   * @param {String} desc The description of the misconception
   */
  constructor(e, n) {
    super(e);
    // Not implemented
    /*static FunctionCallMustBeAssigned = new MisconceptionType("FunctionMustBeAssigned", 
                                                              "Calls to functions that do not return are assigned to variables. There may be a misunderstanding of the syntax of calling functions or a belief that all functions return something.");
    static VariablesNeedParentheses = new MisconceptionType("VariablesNeedParentheses", 
                                                            "An unknown function is called that has a name matching a known variable. There may be a misunderstanding of the syntax of using variables.");
    TODO:
    static NumericInputAssignedNumericType = new MisconceptionType("NumericInputAssignedNumericType", 
                                                                   "A TypeError occurs when a mathematical operation is performed on a String returned by input(). There may be an assumption that input strings containing only numbers are automatically converted to numeric types.");
    static ResultOfAllExpressionsIsSaved = new MisconceptionType("ResultOfAllExpressionsIsSaved", 
                                                                 "A statement (excluding single function / method calls) returns a value but it is not saved or passed. There may be an assumption that the program will remember all calculated values.");
    static CalculationModifiesVariables = new MisconceptionType("CalculationModifiesVariables", 
                                                                "A calculation is performed but the result is not saved or passed. There may be an assumption that performing a calculation modifies the variable or values involved. E.g. x + 1 updates the value of x."); 
    static FunctionCallSavesReturnValue = new MisconceptionType("FunctionCallSavesReturnValue", 
                                                                "A function that returns a value is called but the returned value is not saved or passed. There may be an assumption that that the program automatically remembers the results of a function call, or that the function modifies any arguments that are passed to it.");
    static CaughtExceptionMustBeRaised = new MisconceptionType("CaughtExceptionMustBeRaised", 
                                                               "A named exception is caught then immediately raised in the except block of a try-except. The programmer may be unsure of the purpose of catching an exception or strategies for handling anticipated exceptions from a design point of view.");
    static VariableMustHavePlaceholderValue = new MisconceptionType("VariableMustHavePlaceholderValue", 
                                                                    "A variable is assigned with a literal value then immediately overwritten with the result of calculation or another operation. This may be a simple oversight or a possible misunderstanding of the process and syntax of creating a variable.");
    TODO: 
    static DoubleEqualsAssigns = new MisconceptionType("DoubleEqualsAssigns", 
                                                       "The double equals operator is used in a standalone statement i.e. outside of a conditional, not saved to a variable. This could be a simple typo but it may also indicate confusion between double and single equals operators.");
    */
    /**
     * @type {String}
     */
    l(this, "description");
    this.description = n;
  }
};
// Progmiscon
l(v, "AssignCompares", new v(
  "AssignCompares",
  "A single equals is used where a boolean expression is expected, e.g. in a conditional statement. This may be a typo or confusion between single and double equals operators."
)), // progmiscon
l(v, "ColonAssigns", new v(
  "ColonAssigns",
  "A colon is used between a variable name and a value. This may be a typo."
)), l(v, "CompareMultipleValuesWithOr", new v(
  "CompareMultipleValuesWithOr",
  "A boolean expression has the form a == some_value or other_value, where other_value is non-boolean. There is likely a misunderstanding of the syntax of comparing multiple values."
)), // Done
// Progmiscon
l(v, "ComparisonWithBoolLiteral", new v(
  "ComparisonWithBoolLiteral",
  'A boolean expression contains "== True" or "== False". The programmer may believe that explicitly checking equality is always necessary in a boolean expression.'
)), // Done
// Progmiscon
l(v, "DeferredReturn", new v(
  "DeferredReturn",
  "Code follows a return statement in a function. The programmer may not realise that a return statement causes the function to exit immediately."
)), // Done
// Gama PB.5
l(v, "ForLoopVarIsLocal", new v(
  "ForLoopVarIsLocal",
  "An iterating variable in a for loop overwrites a variable declared before the loop and the value is different from the overwritten value, or the values cannot be determined. This potential misconception is similar to IteratorInitialisedOutsideLoop."
)), l(v, "FunctionCallsNoParentheses", new v(
  "FunctionCallsNoParentheses",
  "An undefined variable has the same name as a function. There may be a misunderstanding about how to call a function. Caution: functions in Python are first class objects, so it is possible that use of the function name without parentheses is intended and there is no misconception."
)), l(v, "FunctionCallsUseSquareBrackets", new v(
  "FunctionCallsUseSquareBrackets",
  "The name of a function is called followed by square brackets rather than parentheses. The programmer may not be aware of when to use which type of bracket."
)), // Done - only in one file
l(v, "IterationRequiresTwoLoops", new v(
  "IterationRequiresTwoLoops",
  "A while loop with an integer loop variable contains a nested for loop. The while loop variable is only modified in the nested for loop and is used to count items in the variable iterated in the for loop. The two nested loops could be replaced with a single for loop using enumerate() or range()."
)), l(v, "IteratorInitialisedOutsideLoop", new v(
  "TargetInitialisedOutsideLoop",
  "The target variable in a for loop is initialised before the loop with the same value. The programmer may not know that the iterating variable is initialised in the for loop definition."
)), // Gama et al PA.3, PB.1, PB.3
l(v, "LocalVariablesAreGlobal", new v(
  "LocalVariablesAreGlobal",
  "An undefined variable in document scope has the same name as a variable with function scope. This may indicate a misunderstanding of variable scope."
)), // Gama et al PD.1
l(v, "LoopCounter", new v(
  "LoopCounter",
  "A for loop target variable is modified in the loop and the modified variable is not used. This may indicate confusion over how loops use loop variables."
)), // Progmiscon
l(v, "MapToBooleanWithIf", new v(
  "MapToBooleanWithIf",
  "A conditional statement checks a boolean expression only to return or assign a value that matches the value of the boolean expression. The programmer may not realise that a boolean expression can be assigned or returned directly."
)), // Done
// Progmiscon
l(v, "MapToBooleanWithTernaryOperator", new v(
  "MapToBooleanWithTernaryOperator",
  "A ternary checks a boolean expression only to return or assign a value that matches the value of the boolean expression. The programmer may not realise that a boolean expression can be assigned or returned directly."
)), // Done
l(v, "NoKeyword", new v(
  "NoKeyword",
  "A block definition keyword (e.g. def, if, while) is missing where one is expected. The programmer may not realise that the keyword is required."
)), // Progmiscon
l(v, "NoReservedWords", new v(
  "NoReservedWords",
  "Any string that meets naming character constraints can be used as an identifier (name of a variable, function, method, or class)."
)), //Gama et al PA.1 - Paramater value set by external source
l(v, "ParameterMustBeAssignedInFunction", new v(
  "ParameterMustBeAssignedInFunction",
  "A user defined function has named parameter but the parameter value is overwritten in the function before it is used e.g. by prompting for command line input. This indicates potential misconceptions about the purpose or use of function parameters."
)), // Progmiscon
l(v, "ParenthesesOnlyIfArgument", new v(
  "ParenthesesOnlyIfArgument",
  "An undefined variable has the same name as a user-defined function with no arguments. There may be a misunderstanding of the syntax of function calls."
)), // Needs testing (no occurrences in dataset)
l(v, "PrintSameAsReturn", new v(
  "PrintSameAsReturn",
  "A call to a function that prints but does not return (including the print() function) is assigned or passed, or a call to a function that prints before returning a value is not assigned or passed. There may be confusion about printing a value versus returning a value."
)), // Done
// Progmiscon 
l(v, "ReturnCall", new v(
  "ReturnCall",
  "Function return values are surrounded by parentheses. There may be a belief that return needs to be called like a function."
)), // TODO
l(v, "ReturnWaitsForLoop", new v(
  "ReturnWaitsForLoop",
  "A return statement in a loop causes the loop to consistently exit on the first iteration. Typically due to a missing if statement, there may be an expectation that the loop implicitly knows when to return and when to continue."
)), // Progmiscon
l(v, "SequentialIfsAreExclusive", new v(
  "ConditionalIsSequence",
  "If statements with very similar conditional statements appear in a sequence. There may be a belief that subsequent if statements will only execute if the previous condition does not. The programmer may not be aware of the efficiency drawbacks of using sequential if statements where a multiway conditional would be more appropriate."
)), l(v, "StringMethodsModifyTheString", new v(
  "StringMethodsModifyTheString",
  "A string method is called but the result is not saved or passed. There may be an assumption that string methods mutate the string."
)), l(v, "TypeConversionModifiesArgument", new v(
  "TypeConversionModifiesArgument",
  "A type conversion function (e.g. int(), float()) is called but the return value is not saved or used."
)), l(v, "TypeMustBeSpecified", new v(
  "TypeMustBeSpecified",
  "A value that is guaranteed to have a particular data type is passed to a type conversion function that returns the same data type. In the case of literals, there may be a belief that type must be specified as in strongly typed languages. In other cases, there may be a misunderstanding or lack of confidence in how Python dynamically determines type."
)), // Done
l(v, "UnusedReturn", new v("UnusedReturn", "The result of a call to a function / method that returns a value is not used in some way.")), // Gama et al PG.4
l(v, "WhileSameAsIf", new v(
  "WhileSameAsIf",
  "A while loop does not modify any of its loop variables and may also always exit during the first iteration. Where this behaviour is intentional, the while definition would be better replaced with an if statement. Where the loop does not exit, there is a risk of an infinite loop."
));
let R = v;
const W = class W extends xt {
  constructor(e, n) {
    super(e);
    l(this, "description");
    this.description = n;
  }
};
l(W, "Equality", new W("Equality", "A correctly formed equality check, e.g. x == y, where a Boolean expression is expected, such as an if statement or a while loop definition.")), l(W, "Assignment", new W("Assignment", "A correctly formed assigment statement.")), l(W, "MultipleEquality", new W("MultipleEquality", "A boolean expression comprised of multiple correctly formed equality checks.")), l(W, "BooleanVariableCondition", new W("BooleanVariableCondition", "A single Boolean variable is used as a condition statement instead of explicitly comparing the variable to True or False.")), l(W, "ReturnLast", new W("ReturnLast", "A function contains at least one return statement and all returns are the last statement in their branch.")), l(W, "NewForLoopVar", new W("NewForLoopVar", "A new variable is created in a for loop definition.")), l(W, "FunctionCall", new W("FunctionCall", "A correctly formed function call.")), l(W, "SingleCounterLoop", new W("SingleCounterLoop", "A counter loop that is not nested in while loop.")), l(W, "VariablesInMultipleScopes", new W("VariablesInMultipleScopes", "The document has defined variables in function and document scope. If there are variables in document scope that have the same name as valid function scope variables, the document scope variables are not undefined.")), l(W, "ForLoopTargetNotModified", new W("ForLoopTargetNotModified", "A for loop target variable is used in the loop without modification.")), l(W, "BooleanExpressionUsedAsValue", new W("BooleanExpressionUsedAsValue", "A non-literal Boolean expression is assigned or returned directly.")), l(W, "UsedReturn", new W("UsedReturn", "The value returned by a function is used or stored.")), l(W, "ReturnNoParentheses", new W("ReturnNoParentheses", "A return value is not in parentheses.")), l(W, "MultiBranchConditional", new W("MultiBranchConditional", "A conditional made up of multiple branches.")), l(W, "ParameterCalled", new W("ParameterCalled", "An function parameter is called in the function before or without modification.")), l(W, "StringMethodAssigned", new W("StringMethodAssigned", "The result of a string method call is assigned or passed.")), l(W, "ConversionAssigned", new W("ConversionAssigned", "The result of a type conversion function call is assigned or passed.")), l(W, "WhileLoopProgresses", new W("WhileLoopProgresses", "The loop variable(s) of a while loop is modified and the loop does not have an early exit.")), l(W, "LoopExitsSometimes", new W("LoopExitsSometimes", "A loop contains a return that is conditional."));
let oe = W;
const D = class D extends xt {
  constructor(e, n) {
    super(e);
    l(this, "description");
    this.description = n;
  }
};
// Error
l(D, "AssignmentInBoolean", new D("AssignmentInBoolean", "An assignment operator is used in a Boolean expression. This could be a typo or an indication of confusion about = and ==.")), // Error
l(D, "AssignmentInReturn", new D("AssignmentInReturn", "A variable is assigned in a return statement.")), // ???
l(D, "AssignedNone", new D("AssignedNoReturn", "A function or method that does not return a value is assigned to a variable, passed as an argument, or used in some way. Commonly seen with the print() function.")), // RiskFactor
l(D, "CompareBoolLiteral", new D("CompareBoolLiteral", "A Boolean expression is compared to a Boolean literal. Although this is not an error, it may indicate a misconception about Boolean values.")), // Error
l(D, "DefinitionFollowedByReservedWord", new D("DefinitionFollowedByReservedWord", "A definition keyword (def or class) is followed by a reserved word, suggesting the intention to define a function or class with the same name as a reserved word.")), // Error
l(D, "DoubleComparisonOperators", new D("DoubleComparisonOperators", "Two comparison operators are used side by side. This may be due to an extra space e.g. <= is written as < =.")), // RiskFactor
l(D, "ForLoopIteratorModified", new D("ForLoopTargetModified", "A for loop target variable is modified in the loop and the modified value is not used.")), // RiskFactor
l(D, "FunctionPrints", new D("FunctionPrints", "A user-defined function contains print statements. This is not an issue unless AssignedNoReturn is also present and print is used in place of return statements.")), // ???
l(D, "InfiniteLoop", new D("InfiniteLoop", "A while loop does not exit.")), // ???
l(D, "LoopReturn", new D("LoopEarlyExit", "A return or break statement causes a loop to always exit on the first iteration.")), // RiskFactor
l(D, "LoopVarModifiedInChildLoop", new D("WhileLoopVarModifiedInChildLoop", "A while loop variable is modified in a nested for or while loop.")), // ???
l(D, "LoopVarNotModified", new D("WhileLoopVarNotModified", "None of the variables used in a while loop definition are modified in the body of the while loop. If the while loop contains a nested loop, only usages of the variable in the outer loop are checked.")), // RiskFactor TO IMPLEMENT
//static MixesSpacesAndTabs = new SymptomType("MixesSpacesAndTabs", "Indentation is created using a mix of tabs and spaces.");
// ???
l(D, "NaturalLanguageBoolean", new D("NaturalLanguageBoolean", `A Boolean expression uses syntax that makes sense in spoken English but may produce unexpected results or even and error in Python. The most common form is checking if a particular expression is equal to one of a range of values using "or <non_boolean>" e.g., "day == 'sat' or 'sun'".`)), // RiskFactor
l(D, "OneLineConditional", new D("OneLineConditional", "A conditional that could be re-written as one line. Although this is not an error, it may indicate a misconception about Boolean values.")), // Error
l(D, "OutOfPlaceBooleanOperator", new D("OutOfPlaceOperatorsInBoolean", "A comparison or logical operator is used in an unexpected place in a conditional expression.")), // RiskFactor
l(D, "OverwrittenVariable", new D("VariableOverwrite", "A variable's value is initialised or changed then overwritten without being used.")), // ???
l(D, "RedundantException", new D("RedundantException", "A specific exception is caught then immediately raised. Suggests confusion about how to work with exceptions.")), // Error
l(D, "ReservedWordAssigned", new D("ReservedWordAssigned", "A reserved word is followed by the assignment operator, suggesting an intention to create a variable with the same name as a reserved word.")), // RiskFactor
l(D, "ReturnInParentheses", new D("ReturnInParentheses", "The return keyword is followed by a value or compound expression in parentheses. May suggest a belief that returned values must be encapsulated in parentheses.")), // RiskFactor
l(D, "SequentialIfs", new D("SequentialIfs", "Multiple if statements appear in sequence with no other code between the if blocks. If statements that contain a return or break at the top level are not included. Depending on the contents of the boolean expressions and each block, it may indicate a misconception about how conditionals are evaluated.")), // Error
l(D, "SubscriptedNonSubscriptable", new D("SubscriptedNonSubscriptable", "Square brackets follow a variable name that does not have a subscriptable type (i.e. is not a string, list, tuple, or dictionary)")), // ???
l(D, "TernaryReturnsBool", new D("TernaryReturnsBool", "A ternary returns a boolean. Although this is not an error, it may indicate a misconception about Boolean values.")), // Error
l(D, "TypeErrorInvalid", new D("InvalidCalculation", "A calculation that produces a TypeError e.g. string + int.")), // RiskFactor
l(D, "TypeUnnecessary", new D("UnnecessaryTypeConversion", "A value that has a guaranteed data type is passed to a type conversion function that produces the same data type. Also captures strings converted to lists.")), // Error
l(D, "UndefinedVariable", new D("UndefinedVariable", "A variable that was not declared is called. Depending on context, may be due to sloppiness (e.g. a typo) or may suggest misconception about variable scope, function parameters, or how to call functions.")), // Error
l(D, "UnexpectedColon", new D("UnexpectedColon", "A colon is found where it is not expected, indicating either a typo or a misunderstanding of syntax.")), // Error
l(D, "UnknownFunction", new D("UnknownFunction", "A function that is not defined in the file or built in to Python is called. Could be a typo or a misunderstanding about variables.")), // Error
l(D, "UnknownMethod", new D("UnknownMethod", "An unknown method, or a method that is not valid is called on a value with known data type.")), // ???
l(D, "UnreachableExhaustiveConditional", new D("UnreachableCode.exhaustiveConditional", "Code that is unreachable because it follows a conditional with an else branch in which all branches return.")), // ???
l(D, "UnreachableExit", new D("UnreachableCode.exitKeyword", "Code that is unreachable because it follows a <code>return</code> or <code>break</code> statement. This might indicate a misconception about how those keywords affect the flow of control.")), // ???
l(D, "UnreachableInfiniteLoop", new D("UnreachableCode.infiniteLoop", 'Code that is unreachable because it follows a loop created using "while True" that never exits.')), // ??? Gama et al PA.5 - Function return value not handled by caller function
l(D, "UnusedReturn", new D("UnusedReturn", "The result of a call to a function / method that returns a value is not used in some way.")), // RiskFactor
l(D, "UnusedValue", new D("UnusedValue", "A value (either a single variable or a compound expression) is created but not assigned to a variable, passed as a function argument, or used in some other way.")), // RiskFactor
l(D, "UnusedVariable", new D("UnusedVariable", "A variable is not used after initialisation. May be an oversight but could potentially indicate misconceptions about variables.")), // RiskFactor
l(D, "VariableWithSameNameAsFunction", new D("VariableWithSameNameAsFunction", "A variable has the same name as a function.")), // RiskFactor
l(D, "WhileLoopVarAssignedIntLiteral", new D(
  "WhileLoopVarAssignedIntLiteral",
  "A while loop counter variable is assigned an int value rather than incremented or decremented. The variable is not modified elsewhere in the loop."
)), // Error
l(D, "WrongArgNumber", new D("WrongArgNumber", "A user-defined function is called with the wrong number of arguments.")), // RiskFactor
l(D, "WhileTrue", new D("WhileTrue", "A while loop is defined to iterate forever. This is a valid approach but may be a contributor to misconceptions when combined with other symptoms."));
let I = D;
const q = class q extends xt {
  constructor(e, n) {
    super(e);
    l(this, "description");
    this.description = n;
  }
};
l(q, "EqualityExpression", new q("EqualityExpression", "An equality operator is used in a Boolean expression.")), l(q, "ValidAssignment", new q("ValidAssignment", "A variable is assigned correctly")), l(q, "StandaloneBooleanVariable", new q("StandaloneBooleanVariable", "A boolean variable is used as a complete term in a condition.")), l(q, "ReturnLast", new q("ReturnLast", "A return statement is the last statement in its branch.")), l(q, "NewForLoopVar", new q("NewForLoopVar", "A new variable is created in a for loop definition.")), l(q, "ValidFunctionCall", new q("ValidFunctionCall", "A function is called with parentheses.")), l(q, "CounterLoop", new q("CounterLoop", "A for loop that counts (uses range() or enumerate()).")), l(q, "ValidGlobalVariable", new q("ValidGlobalVariable", "A variable in document scope is properly assigned")), l(q, "FunctionScopeVariable", new q("FunctionScopeVariable", "A variable is defined in function scope")), l(q, "ForLoopTargetNotModified", new q("ForLoopTargetNotModified", "A for loop target variable is called and not modified in the loop.")), l(q, "NonLiteralBooleanAssigned", new q("NonLiteralBooleanAssigned", "A non-literal Boolean expression is assigned to a variable without a conditional.")), l(q, "NonLiteralBooleanReturned", new q("NonLiteralBooleanReturned", "A non-literal Boolean expression is returned without a conditional.")), l(q, "UsedReturn", new q("UsedReturn", "The value returned by a function call is used or assigned.")), l(q, "NoReturnStandaloneCall", new q("NoReturnStandaloneCall", "A function that does not return is called as a standalone statement.")), l(q, "ReturnNoParentheses", new q("ReturnNoParentheses", "A return value is not in parentheses.")), l(q, "IfElif", new q("IfElif", "An if statement is followed by an elif or an else.")), l(q, "ParameterCalled", new q("ParameterCalled", "An function parameter is called in the function before or without modification.")), l(q, "LoopExitsSometimes", new q("LoopExitsSometimes", "A loop contains a return that is conditional.")), l(q, "WhileLoopVarModified", new q("WhileLoopVarModified", "A while loop's loop variable is modified in the loop, allowing it to progress."));
let B = q;
const $n = "userDefinedFunction", $c = "userDefinedVariable", Kn = "builtInFunction", Ni = "valueReturned", Ci = "valueAssigned", Kc = "True", So = "return", Wc = "string", qc = "list", jc = "literal", Ro = "functionCall", Hc = "variable", Eo = "compoundTypeDefinition", Uo = "compoundExpression", Ao = "booleanExpression", bo = "forLoopVariable", zc = "forLoopTargetReplacesIterable", Io = "assignment", yo = "same", Go = "different", Js = "unknown", we = "empty", Qc = "orNonBoolean", Xc = "andOr", Zc = "topLevel", Yc = "allBranchesOfExhaustiveConditional", Jo = "functionArgument", _c = "calculation", eu = "comparison";
function Q(g, i) {
  this.entity = g, this.category = i;
}
function fi(g) {
  switch (g) {
    case t.TrueType:
    case t.FalseType:
      return d.Bool;
    case t.NoneType:
      return d.None;
    case t.StrType:
    case t.IntType:
    case t.FloatType:
    case t.BoolType:
    case t.ListType:
    case t.SetType:
    case t.DictType:
    case t.TupleType:
      return d.Class;
    case t.Name:
    case t.Doc:
    case t.Sep:
    case t.End:
      return d.String;
    case t.IntLiteral:
      return d.Int;
    case t.FloatLiteral:
      return d.Float;
    case t.StringLiteral:
      return d.String;
    case t.ListDefinition:
      return d.List;
    case t.TupleDefinition:
      return d.Tuple;
    case t.SetDefinition:
      return d.Set;
    case t.DictDefinition:
      return d.Dict;
    case t.RandomModule:
      return d.Random;
    case t.MathModule:
      return d.Math;
    case t.StringModule:
      return d.StringModule;
    case t.ReModule:
      return d.Re;
    case t.Pattern:
      return d.Pattern;
    case t.Match:
      return d.Match;
    case t.Sys:
      return d.Sys;
    default:
      return d.Unknown;
  }
}
function _t(g) {
  if (g.length === 0)
    return d.Undefined;
  if (g.length === 1)
    return g[0];
  {
    const i = new Set(g);
    if (i.size === 1)
      return g[0];
    for (let e of i)
      if (e !== d.Int && e !== d.Float && e !== d.Number)
        return d.Unknown;
    return d.Number;
  }
}
function gi(g) {
  return (/* @__PURE__ */ new Set([d.String, d.List, d.Dict, d.Tuple, d.Unknown, d.NotParsed])).has(g);
}
function ge(g, i = !1) {
  if (g.length === 0)
    return "";
  let e = g[0].getTextValue();
  const n = i ? g[0].getIndexOnLine() : 0;
  for (let s = 0; s < n; s++)
    e = " " + e;
  for (let s = 1; s < g.length; s++) {
    let o = g[s].getDocumentStartIndex() - g[s - 1].getDocumentEndIndex() - 1;
    for (let a = g[s - 1].getEndLineNumber(); a < g[s].getStartLineNumber(); a++)
      e += `
`, o--;
    for (let a = 0; a < o; a++)
      e += " ";
    e += g[s].getTextValue();
  }
  return e;
}
function Wn(g) {
  const i = [];
  for (const e of g) {
    const n = e.getExpressions();
    i.push(...n);
  }
  return i;
}
function ts(g, i) {
  for (let e of g)
    if (e.is(i))
      return !0;
  return !1;
}
function Pt(g) {
  return g.getExpressionsOfKind(t.ReturnKeyword).length > 0 || g.getExpressionsOfKind(t.BreakKeyword).length > 0 || g.getExpressionsOfKind(t.ExitFunction).length > 0 || g.getExpressionsOfKind(t.SysExit).length > 0 || g.getExpressionsOfKind(t.QuitFunction).length > 0;
}
function Zt(g, i) {
  for (let e = 0; e < g.length; e++)
    if (g[e].is(i))
      return e;
  return -1;
}
function tu(g) {
  return (/* @__PURE__ */ new Set(["str", "int", "float", "bool", "str", "list", "set", "dict"])).has(g);
}
function tn(g) {
  return g.isOneOf([t.UserDefinedFunctionCall, t.BuiltInFunctionCall, t.UserDefinedMethodCall, t.BuiltInMethodCall]) && g.getDataType() === d.None;
}
function Fo(g, i, e) {
  if (!nu(i, e))
    return !1;
  let n = 0, s = 0;
  for (let o of g)
    o.is(i) ? n++ : o.is(e) && s++;
  return n > 0 && n === s;
}
function nu(g, i) {
  return g === t.OpenParenthesis ? i === t.CloseParenthesis : g === t.OpenBrace ? i === t.CloseBrace : g === t.OpenSquareBracket ? i === t.CloseSquareBracket : !1;
}
function $o(g) {
  return g === t.OpenBrace || g === t.OpenParenthesis || g === t.OpenSquareBracket;
}
function su(g) {
  return g === t.CloseBrace || g === t.CloseParenthesis || g === t.CloseSquareBracket;
}
function iu(g) {
  if (!$o(g))
    throw new Error(`${g} is not a valid open bracket.`);
  return g === t.OpenBrace ? t.CloseBrace : g === t.OpenParenthesis ? t.CloseParenthesis : t.CloseSquareBracket;
}
const f = (g, i) => ({ entity: g, category: i }), Ze = (g) => {
  switch (g) {
    // RESERVED
    case "class":
      return f(t.ClassDefinition, c.BlockDefinitions);
    // RESERVED
    case "def":
      return f(t.FunctionDefinition, c.BlockDefinitions);
    // RESERVED
    case "elif":
      return f(t.ElifDefinition, c.BlockDefinitions);
    // RESERVED
    case "else":
      return f(t.ElseDefinition, c.BlockDefinitions);
    // RESERVED
    case "except":
      return f(t.ExceptDefinition, c.BlockDefinitions);
    // RESERVED
    case "finally":
      return f(t.FinallyDefinition, c.BlockDefinitions);
    // RESERVED
    case "for":
      return f(t.ForDefinition, c.BlockDefinitions);
    // RESERVED
    case "if":
      return f(t.IfDefinition, c.BlockDefinitions);
    // RESERVED
    case "lambda":
      return f(t.LambdaDefinition, c.BlockDefinitions);
    // RESERVED
    case "try":
      return f(t.TryDefinition, c.BlockDefinitions);
    // RESERVED
    case "while":
      return f(t.WhileDefinition, c.BlockDefinitions);
    // RESERVED
    case "with":
      return f(t.WithKeyword, c.BlockDefinitions);
    // RESERVED
    case "and":
      return f(t.AndOperator, c.LogicalOperators);
    // RESERVED
    case "not":
      return f(t.NotOperator, c.LogicalOperators);
    // RESERVED
    case "or":
      return f(t.OrOperator, c.LogicalOperators);
    // RESERVED
    case "False":
      return f(t.FalseType, c.Types);
    // RESERVED
    case "None":
      return f(t.NoneType, c.Types);
    // RESERVED
    case "True":
      return f(t.TrueType, c.Types);
    // RESERVED
    case "as":
      return f(t.AsKeyword, c.OtherKeywords);
    // RESERVED
    case "global":
      return f(t.GlobalKeyword, c.OtherKeywords);
    // RESERVED
    case "assert":
      return f(t.AssertKeyword, c.OtherKeywords);
    // RESERVED
    case "break":
      return f(t.BreakKeyword, c.OtherKeywords);
    // RESERVED
    case "continue":
      return f(t.ContinueKeyword, c.OtherKeywords);
    // RESERVED
    case "del":
      return f(t.DelKeyword, c.OtherKeywords);
    // RESERVED
    case "from":
      return f(t.FromKeyword, c.OtherKeywords);
    // RESERVED
    case "import":
      return f(t.ImportKeyword, c.OtherKeywords);
    // RESERVED
    case "in":
      return f(t.InKeyword, c.ComparisonOperators);
    //ExpressionCategory.OtherKeywords);
    // RESERVED
    case "is":
      return f(t.IsKeyword, c.ComparisonOperators);
    //ExpressionCategory.OtherKeywords);
    // RESERVED
    case "pass":
      return f(t.PassKeyword, c.OtherKeywords);
    // RESERVED
    case "raise":
      return f(t.RaiseKeyword, c.OtherKeywords);
    // RESERVED
    case "return":
      return f(t.ReturnKeyword, c.OtherKeywords);
    // RESERVED
    case "yield":
      return f(t.YieldKeyword, c.OtherKeywords);
    case "r":
      return f(t.R, c.OtherKeywords);
    case "f":
      return f(t.F, c.OtherKeywords);
    case "+":
      return f(t.AddOperator, c.MathsOperators);
    case "-":
      return f(t.SubtractOperator, c.MathsOperators);
    case "*":
      return f(t.MultiplyOperator, c.MathsOperators);
    case "/":
      return f(t.DivideOperator, c.MathsOperators);
    case "%":
      return f(t.ModulusOperator, c.MathsOperators);
    case "**":
      return f(t.ExponentOperator, c.MathsOperators);
    case "//":
      return f(t.IntDivideOperator, c.MathsOperators);
    case "=":
      return f(t.AssignmentOperator, c.MathsOperators);
    case "+=":
      return f(t.IncrementOperator, c.MathsOperators);
    case "-=":
      return f(t.DecrementOperator, c.MathsOperators);
    case "*=":
      return f(t.MultiplyAssignOperator, c.MathsOperators);
    case "/=":
      return f(t.DivideAssignOperator, c.MathsOperators);
    case "%=":
      return f(t.RemainderAssignOperator, c.MathsOperators);
    case "//=":
      return f(t.IntDivideAssignOperator, c.MathsOperators);
    case "**=":
      return f(t.ExponentAssignOperator, c.MathsOperators);
    case ":=":
      return f(t.WalrusOperator, c.MathsOperators);
    case "==":
      return f(t.EqualOperator, c.ComparisonOperators);
    case "!=":
      return f(t.NotEqualOperator, c.ComparisonOperators);
    case ">":
      return f(t.GreaterThanOperator, c.ComparisonOperators);
    case "<":
      return f(t.LessThanOperator, c.ComparisonOperators);
    case ">=":
      return f(t.GreaterThanOrEqualOperator, c.ComparisonOperators);
    case "<=":
      return f(t.LessThanOrEqualOperator, c.ComparisonOperators);
    case "->":
      return f(t.TypeHintReturn, c.TypeHint);
    case "@":
      return f(t.Decorator, c.SyntacticSugar);
    case "abs":
      return f(t.AbsFunction, c.BuiltInFunctions);
    case "all":
      return f(t.AllFunction, c.BuiltInFunctions);
    case "any":
      return f(t.AnyFunction, c.BuiltInFunctions);
    case "ascii":
      return f(t.AsciiFunction, c.BuiltInFunctions);
    case "bin":
      return f(t.BinFunction, c.BuiltInFunctions);
    case "bool":
      return f(t.BoolFunction, c.BuiltInFunctions);
    case "callable":
      return f(t.CallableFunction, c.BuiltInFunctions);
    case "chr":
      return f(t.ChrFunction, c.BuiltInFunctions);
    case "dict":
      return f(t.DictDefinition, c.BuiltInFunctions);
    case "divmod":
      return f(t.DivModFunction, c.BuiltInFunctions);
    case "enumerate":
      return f(t.EnumerateFunction, c.BuiltInFunctions);
    case "eval":
      return f(t.EvalFunction, c.BuiltInFunctions);
    case "exec":
      return f(t.ExecFunction, c.BuiltInFunctions);
    case "exit":
      return f(t.ExitFunction, c.BuiltInFunctions);
    case "filter":
      return f(t.FilterFunction, c.BuiltInFunctions);
    case "float":
      return f(t.FloatFunction, c.BuiltInFunctions);
    case "getattr":
      return f(t.GetAttrFunction, c.BuiltInFunctions);
    case "globals":
      return f(t.GlobalsFunction, c.BuiltInFunctions);
    case "hasattr":
      return f(t.HasAttrFunction, c.BuiltInFunctions);
    case "input":
      return f(t.InputFunction, c.BuiltInFunctions);
    case "int":
      return f(t.IntFunction, c.BuiltInFunctions);
    case "isinstance":
      return f(t.IsInstanceFunction, c.BuiltInFunctions);
    case "len":
      return f(t.LenFunction, c.BuiltInFunctions);
    case "list":
      return f(t.ListFunction, c.BuiltInFunctions);
    case "map":
      return f(t.MapFunction, c.BuiltInFunctions);
    case "max":
      return f(t.MaxFunction, c.BuiltInFunctions);
    case "min":
      return f(t.MinFunction, c.BuiltInFunctions);
    case "open":
      return f(t.OpenFunction, c.BuiltInFunctions);
    case "ord":
      return f(t.OrdFunction, c.BuiltInFunctions);
    case "pow":
      return f(t.PowFunction, c.BuiltInFunctions);
    case "print":
      return f(t.PrintFunction, c.BuiltInFunctions);
    case "quit":
      return f(t.QuitFunction, c.BuiltInFunctions);
    case "range":
      return f(t.RangeFunction, c.BuiltInFunctions);
    case "reversed":
      return f(t.ReversedFunction, c.BuiltInFunctions);
    case "round":
      return f(t.RoundFunction, c.BuiltInFunctions);
    case "set":
      return f(t.SetFunction, c.BuiltInFunctions);
    case "sorted":
      return f(t.SortedFunction, c.BuiltInFunctions);
    case "str":
      return f(t.StrFunction, c.BuiltInFunctions);
    case "sum":
      return f(t.SumFunction, c.BuiltInFunctions);
    case "tuple":
      return f(t.TupleFunction, c.BuiltInFunctions);
    case "type":
      return f(t.TypeFunction, c.BuiltInFunctions);
    case "zip":
      return f(t.ZipFunction, c.BuiltInFunctions);
    case "__main__":
      return f(t.Main, c.MagicMethods);
    case "__cmp__":
      return f(t.Cmp, c.MagicMethods);
    case "__eq__":
      return f(t.Eq, c.MagicMethods);
    case "__ne__":
      return f(t.Ne, c.MagicMethods);
    case "__lt__":
      return f(t.Lt, c.MagicMethods);
    case "__gt__":
      return f(t.Gt, c.MagicMethods);
    case "__le__":
      return f(t.Le, c.MagicMethods);
    case "__ge__":
      return f(t.Ge, c.MagicMethods);
    case "__str__":
      return f(t.Str, c.MagicMethods);
    case "__getattr__":
      return f(t.GetAttrVariable, c.MagicMethods);
    case "__setattr__":
      return f(t.SetAttrVariable, c.MagicMethods);
    case "__contains__":
      return f(t.SpecialContains, c.MagicMethods);
    case "__len__":
      return f(t.SpecialLen, c.MagicMethods);
    case "__name__":
      return f(t.Name, c.SpecialVariables);
    case "__self__":
      return f(t.Self, c.SpecialVariables);
    case "__doc__":
      return f(t.Doc, c.SpecialVariables);
    case "__class__":
      return f(t.ClassVariable, c.SpecialVariables);
    case "sep":
      return f(t.Sep, c.SpecialVariables);
    case "end":
      return f(t.End, c.SpecialVariables);
    case "ArtithmeticError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "AssertionError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "AttributeError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "BlockingIOError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "BrokenPipeError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "BufferError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "ChildProcessError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "ConnectionAbortedError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "ConnectionError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "ConnectionRefusedError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "ConnectionResetError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "Exception":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "EOFError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "EnvironmentError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "FileExistsError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "FileNotFoundError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "FloatingPointError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "GeneratorExit":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "ImportError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "IndentationError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "IndexError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "InterruptedError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "IOError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "IsADirectoryError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "KeyError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "KeyboardInterrupt":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "LookupError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "MemoryError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "ModuleNotFoundError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "NameError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "NotADirectoryError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "NotImplementedError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "OSError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "OverflowError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "PermissionError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "ProcessLookupError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "RecursionError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "ReferenceError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "RuntimeError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "StopIteration":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "SyntaxError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "TabError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "TimeoutError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "SystemError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "SystemExit":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "TypeError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "UnboundLocalError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "UnicodeError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "UnicodeEncodeError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "UnicodeDecodeError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "UnicodeTranslateError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "ValueError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "Warning":
      return f(t.ExceptionName, c.BuiltInExceptions);
    case "ZeroDivisionError":
      return f(t.ExceptionName, c.BuiltInExceptions);
    // String methods
    case "capitalize":
      return f(t.Capitalize, c.BuiltInMethods);
    case "casefold":
      return f(t.Casefold, c.BuiltInMethods);
    case "center":
      return f(t.Center, c.BuiltInMethods);
    case "count":
      return f(t.Count, c.BuiltInMethods);
    // also a list, tuple method
    case "encode":
      return f(t.Encode, c.BuiltInMethods);
    case "endswith":
      return f(t.EndsWith, c.BuiltInMethods);
    case "expandtabs":
      return f(t.ExpandTabs, c.BuiltInMethods);
    case "find":
      return f(t.Find, c.BuiltInMethods);
    case "format":
      return f(t.Format, c.BuiltInMethods);
    case "format_map":
      return f(t.FormatMap, c.BuiltInMethods);
    case "index":
      return f(t.Index, c.BuiltInMethods);
    // also a list, tuple method
    case "isalnum":
      return f(t.IsAlnum, c.BuiltInMethods);
    case "isalpha":
      return f(t.IsAlpha, c.BuiltInMethods);
    case "isascii":
      return f(t.IsAscii, c.BuiltInMethods);
    case "isdecimal":
      return f(t.IsDecimal, c.BuiltInMethods);
    case "isdigit":
      return f(t.IsDigit, c.BuiltInMethods);
    case "isidentifier":
      return f(t.IsIdentifier, c.BuiltInMethods);
    case "islower":
      return f(t.IsLower, c.BuiltInMethods);
    case "isnumeric":
      return f(t.IsNumeric, c.BuiltInMethods);
    case "isprintable":
      return f(t.IsPrintable, c.BuiltInMethods);
    case "isspace":
      return f(t.IsSpace, c.BuiltInMethods);
    case "istitle":
      return f(t.IsTitle, c.BuiltInMethods);
    case "isupper":
      return f(t.IsUpper, c.BuiltInMethods);
    case "join":
      return f(t.Join, c.BuiltInMethods);
    case "ljust":
      return f(t.LJust, c.BuiltInMethods);
    case "lower":
      return f(t.Lower, c.BuiltInMethods);
    case "lstrip":
      return f(t.LStrip, c.BuiltInMethods);
    case "maketrans":
      return f(t.MakeTrans, c.BuiltInMethods);
    case "partition":
      return f(t.Partition, c.BuiltInMethods);
    case "replace":
      return f(t.Replace, c.BuiltInMethods);
    case "rfind":
      return f(t.RFind, c.BuiltInMethods);
    case "rindex":
      return f(t.RIndex, c.BuiltInMethods);
    case "rjust":
      return f(t.RJust, c.BuiltInMethods);
    case "rpartition":
      return f(t.RPartition, c.BuiltInMethods);
    case "rsplit":
      return f(t.RSplit, c.BuiltInMethods);
    case "rstrip":
      return f(t.RStrip, c.BuiltInMethods);
    case "split":
      return f(t.Split, c.BuiltInMethods);
    case "splitlines":
      return f(t.SplitLines, c.BuiltInMethods);
    case "startswith":
      return f(t.StartsWith, c.BuiltInMethods);
    case "strip":
      return f(t.Strip, c.BuiltInMethods);
    case "swapcase":
      return f(t.SwapCase, c.BuiltInMethods);
    case "title":
      return f(t.Title, c.BuiltInMethods);
    case "translate":
      return f(t.Translate, c.BuiltInMethods);
    case "upper":
      return f(t.Upper, c.BuiltInMethods);
    case "zfill":
      return f(t.ZFill, c.BuiltInMethods);
    // Built-in list methods
    case "append":
      return f(t.Append, c.BuiltInMethods);
    case "clear":
      return f(t.Clear, c.BuiltInMethods);
    // also dictionary, set
    case "copy":
      return f(t.Copy, c.BuiltInMethods);
    // also dictionary, set
    case "extend":
      return f(t.Extend, c.BuiltInMethods);
    case "insert":
      return f(t.Insert, c.BuiltInMethods);
    case "pop":
      return f(t.Pop, c.BuiltInMethods);
    // also dictionary, set
    case "remove":
      return f(t.Remove, c.BuiltInMethods);
    // also set
    case "reverse":
      return f(t.Reverse, c.BuiltInMethods);
    case "sort":
      return f(t.Sort, c.BuiltInMethods);
    // Built-in dictionary methods
    case "fromkeys":
      return f(t.FromKeys, c.BuiltInMethods);
    case "get":
      return f(t.Get, c.BuiltInMethods);
    case "items":
      return f(t.Items, c.BuiltInMethods);
    case "keys":
      return f(t.Keys, c.BuiltInMethods);
    case "popitem":
      return f(t.PopItem, c.BuiltInMethods);
    case "setdefault":
      return f(t.SetDefault, c.BuiltInMethods);
    case "update":
      return f(t.Update, c.BuiltInMethods);
    // also set
    case "values":
      return f(t.Values, c.BuiltInMethods);
    // Built-in set methods
    case "add":
      return f(t.Add, c.BuiltInMethods);
    case "difference":
      return f(t.Difference, c.BuiltInMethods);
    case "difference_update":
      return f(t.DifferenceUpdate, c.BuiltInMethods);
    case "discard":
      return f(t.Discard, c.BuiltInMethods);
    case "intersection":
      return f(t.Intersection, c.BuiltInMethods);
    case "intersection_update":
      return f(t.IntersectionUpdate, c.BuiltInMethods);
    case "isdisjoint":
      return f(t.IsDisjoint, c.BuiltInMethods);
    case "issubset":
      return f(t.IsSubset, c.BuiltInMethods);
    case "issuperset":
      return f(t.IsSuperset, c.BuiltInMethods);
    case "symmetric_difference":
      return f(t.SymmetricDifference, c.BuiltInMethods);
    case "symmetric_difference_update":
      return f(t.SymmetricDifferenceUpdate, c.BuiltInMethods);
    case "union":
      return f(t.Union, c.BuiltInMethods);
    // Built-in file methods
    case "close":
      return f(t.Close, c.BuiltInMethods);
    case "detach":
      return f(t.Detach, c.BuiltInMethods);
    case "fileno":
      return f(t.FileNo, c.BuiltInMethods);
    case "flush":
      return f(t.Flush, c.BuiltInMethods);
    case "isatty":
      return f(t.IsAtty, c.BuiltInMethods);
    case "read":
      return f(t.Read, c.BuiltInMethods);
    case "readable":
      return f(t.Readable, c.BuiltInMethods);
    case "readline":
      return f(t.ReadLine, c.BuiltInMethods);
    case "readlines":
      return f(t.ReadLines, c.BuiltInMethods);
    case "seek":
      return f(t.Seek, c.BuiltInMethods);
    case "seekable":
      return f(t.Seekable, c.BuiltInMethods);
    case "tell":
      return f(t.Tell, c.BuiltInMethods);
    case "truncate":
      return f(t.Truncate, c.BuiltInMethods);
    case "writable":
      return f(t.Writable, c.BuiltInMethods);
    case "write":
      return f(t.Write, c.BuiltInMethods);
    case "writelines":
      return f(t.WriteLines, c.BuiltInMethods);
    case "(":
      return f(t.OpenParenthesis, c.Other);
    case ")":
      return f(t.CloseParenthesis, c.Other);
    case "[":
      return f(t.OpenSquareBracket, c.Other);
    case "]":
      return f(t.CloseSquareBracket, c.Other);
    case "{":
      return f(t.OpenBrace, c.Other);
    case "}":
      return f(t.CloseBrace, c.Other);
    case ",":
      return f(t.Comma, c.Other);
    case ":":
      return f(t.Colon, c.Other);
    case ".":
      return f(t.Dot, c.Other);
    case "\\":
      return f(t.ContinuationLine, c.Other);
    case ";":
      return f(t.Separator, c.Other);
    case "'":
      return f(t.SingleQuote, c.Other);
    case '"':
      return f(t.DoubleQuote, c.Other);
    // Built in modules
    case "random":
      return f(t.RandomModule, c.BuiltInModules);
    case "math":
      return f(t.MathModule, c.BuiltInModules);
    case "string":
      return f(t.StringModule, c.BuiltInModules);
    case "re":
      return f(t.ReModule, c.BuiltInModules);
    case "sys":
      return f(t.Sys, c.BuiltInModules);
    // random module methods
    case "seed":
      return f(t.Seed, c.ModuleFunctions);
    case "getstate":
      return f(t.GetState, c.ModuleFunctions);
    case "setstate":
      return f(t.SetState, c.ModuleFunctions);
    case "getrandbits":
      return f(t.GetRandBits, c.ModuleFunctions);
    case "randrange":
      return f(t.RandRange, c.ModuleFunctions);
    case "randint":
      return f(t.RandInt, c.ModuleFunctions);
    case "choice":
      return f(t.Choice, c.ModuleFunctions);
    case "choices":
      return f(t.Choices, c.ModuleFunctions);
    case "shuffle":
      return f(t.Shuffle, c.ModuleFunctions);
    case "sample":
      return f(t.Sample, c.ModuleFunctions);
    case "uniform":
      return f(t.Uniform, c.ModuleFunctions);
    case "triangular":
      return f(t.Triangular, c.ModuleFunctions);
    case "betavariate":
      return f(t.BetaVariate, c.ModuleFunctions);
    case "expovariate":
      return f(t.ExpoVariate, c.ModuleFunctions);
    case "gammavariate":
      return f(t.GammaVariate, c.ModuleFunctions);
    case "gauss":
      return f(t.Gauss, c.ModuleFunctions);
    case "lognormvariate":
      return f(t.LogNormVariate, c.ModuleFunctions);
    case "normalvariate":
      return f(t.NormalVariate, c.ModuleFunctions);
    case "vonmisesvariate":
      return f(t.VonMisesVariate, c.ModuleFunctions);
    case "paretovariate":
      return f(t.ParetoVariate, c.ModuleFunctions);
    case "weibullvariate":
      return f(t.WeibullVariate, c.ModuleFunctions);
    // maths module methods
    case "acos":
      return f(t.Acos, c.ModuleFunctions);
    case "acosh":
      return f(t.Acosh, c.ModuleFunctions);
    case "asin":
      return f(t.Asin, c.ModuleFunctions);
    case "asinh":
      return f(t.Asinh, c.ModuleFunctions);
    case "atan":
      return f(t.Atan, c.ModuleFunctions);
    case "atan2":
      return f(t.Atan2, c.ModuleFunctions);
    case "atanh":
      return f(t.Atanh, c.ModuleFunctions);
    case "ceil":
      return f(t.Ceil, c.ModuleFunctions);
    case "comb":
      return f(t.Comb, c.ModuleFunctions);
    case "copysign":
      return f(t.Copysign, c.ModuleFunctions);
    case "cos":
      return f(t.Cos, c.ModuleFunctions);
    case "cosh":
      return f(t.Cosh, c.ModuleFunctions);
    case "degrees":
      return f(t.Degrees, c.ModuleFunctions);
    case "dist":
      return f(t.Dist, c.ModuleFunctions);
    case "erf":
      return f(t.Erf, c.ModuleFunctions);
    case "erfc":
      return f(t.Erfc, c.ModuleFunctions);
    case "exp":
      return f(t.Exp, c.ModuleFunctions);
    case "expm1":
      return f(t.Expm1, c.ModuleFunctions);
    case "fabs":
      return f(t.Fabs, c.ModuleFunctions);
    case "factorial":
      return f(t.Factorial, c.ModuleFunctions);
    case "floor":
      return f(t.Floor, c.ModuleFunctions);
    case "fmod":
      return f(t.Fmod, c.ModuleFunctions);
    case "frexp":
      return f(t.Frexp, c.ModuleFunctions);
    case "fsum":
      return f(t.Fsum, c.ModuleFunctions);
    case "gamma":
      return f(t.Gamma, c.ModuleFunctions);
    case "gcd":
      return f(t.Gcd, c.ModuleFunctions);
    case "hypot":
      return f(t.Hypot, c.ModuleFunctions);
    case "isclose":
      return f(t.IsClose, c.ModuleFunctions);
    case "isfinite":
      return f(t.IsFinite, c.ModuleFunctions);
    case "isinf":
      return f(t.IsInf, c.ModuleFunctions);
    case "isnan":
      return f(t.IsNaN, c.ModuleFunctions);
    case "isqrt":
      return f(t.ISqrt, c.ModuleFunctions);
    case "ldexp":
      return f(t.Ldexp, c.ModuleFunctions);
    case "lgamma":
      return f(t.LGamma, c.ModuleFunctions);
    case "log":
      return f(t.Log, c.ModuleFunctions);
    case "log10":
      return f(t.Log10, c.ModuleFunctions);
    case "log1p":
      return f(t.Log1P, c.ModuleFunctions);
    case "log2":
      return f(t.Log2, c.ModuleFunctions);
    case "perm":
      return f(t.Perm, c.ModuleFunctions);
    case "pow":
      return f(t.Pow, c.ModuleFunctions);
    case "prod":
      return f(t.Prod, c.ModuleFunctions);
    case "radians":
      return f(t.Radians, c.ModuleFunctions);
    case "remainder":
      return f(t.Remainder, c.ModuleFunctions);
    case "sin":
      return f(t.Sin, c.ModuleFunctions);
    case "sinh":
      return f(t.Sinh, c.ModuleFunctions);
    case "sqrt":
      return f(t.Sqrt, c.ModuleFunctions);
    case "tan":
      return f(t.Tan, c.ModuleFunctions);
    case "tanh":
      return f(t.Tanh, c.ModuleFunctions);
    case "trun":
      return f(t.Trunc, c.ModuleFunctions);
    case "e":
      return f(t.E, c.ModuleProperties);
    case "inf":
      return f(t.Inf, c.ModuleProperties);
    case "nan":
      return f(t.Nan, c.ModuleProperties);
    case "pi":
      return f(t.Pi, c.ModuleProperties);
    case "tau":
      return f(t.Tau, c.ModuleProperties);
    // String module entities
    case "ascii_letters":
      return f(t.AsciiLetters, c.ModuleProperties);
    case "ascii_lowercase":
      return f(t.AsciiLowercase, c.ModuleProperties);
    case "ascii_uppercase":
      return f(t.AsciiUppercase, c.ModuleProperties);
    case "digits":
      return f(t.Digits, c.ModuleProperties);
    case "hexdigits":
      return f(t.Hexdigits, c.ModuleProperties);
    case "octdigits":
      return f(t.Octdigits, c.ModuleProperties);
    case "punctuation":
      return f(t.Punctuation, c.ModuleProperties);
    case "printable":
      return f(t.Printable, c.ModuleProperties);
    case "whitespace":
      return f(t.Whitespace, c.ModuleProperties);
    case "Formatter":
      return f(t.Formatter, c.ModuleFunctions);
    case "Template":
      return f(t.Template, c.ModuleFunctions);
    case "capwords":
      return f(t.Capwords, c.ModuleFunctions);
    // Regular expression
    case "Pattern":
      return f(t.Pattern, c.Types);
    case "Match":
      return f(t.Match, c.Types);
    case "A":
      return f(t.ReA, c.ModuleProperties);
    case "ASCII":
      return f(t.ReASCII, c.ModuleProperties);
    case "DEBUG":
      return f(t.ReDebug, c.ModuleProperties);
    case "I":
      return f(t.ReI, c.ModuleProperties);
    case "IGNORECASE":
      return f(t.ReIGNORECASE, c.ModuleProperties);
    case "L":
      return f(t.ReL, c.ModuleProperties);
    case "LOCALE":
      return f(t.ReLOCALE, c.ModuleProperties);
    case "M":
      return f(t.ReM, c.ModuleProperties);
    case "MULTILINE":
      return f(t.ReMULTILINE, c.ModuleProperties);
    case "S":
      return f(t.ReS, c.ModuleProperties);
    case "DOTALL":
      return f(t.ReDOTALL, c.ModuleProperties);
    case "X":
      return f(t.ReX, c.ModuleProperties);
    case "VERBOSE":
      return f(t.ReVERBOSE, c.ModuleProperties);
    case "compile":
      return f(t.Compile, c.ModuleFunctions);
    case "search":
      return f(t.Search, c.ModuleFunctions);
    case "match":
      return f(t.Match, c.ModuleFunctions);
    case "fullmatch":
      return f(t.FullMatch, c.ModuleFunctions);
    case "findall":
      return f(t.FindAll, c.ModuleFunctions);
    case "finditer":
      return f(t.FindIter, c.ModuleFunctions);
    case "sub":
      return f(t.Sub, c.ModuleFunctions);
    case "subn":
      return f(t.SubN, c.ModuleFunctions);
    case "escape":
      return f(t.Escape, c.ModuleFunctions);
    case "purge":
      return f(t.Purge, c.ModuleFunctions);
    // Sys module entities
    case "addaudithook":
      return f(t.AddAuditHook, c.ModuleFunctions);
    // none, function
    case "audit":
      return f(t.Audit, c.ModuleFunctions);
    // none, function
    case "call_tracing":
      return f(t.CallTracing, c.ModuleFunctions);
    // unknown function
    case "_clear_type_cache":
      return f(t.ClearTypeCache, c.ModuleFunctions);
    // none function
    case "_current_frames":
      return f(t.CurrentFrames, c.ModuleFunctions);
    // dict function
    case "_current_exceptions":
      return f(t.CurrentExceptions, c.ModuleFunctions);
    // dict function
    case "breakpointhook":
      return f(t.BreakpointHook, c.ModuleFunctions);
    // none function
    case "_debugmallocstats":
      return f(t.DebugMallocStats, c.ModuleFunctions);
    // none function
    case "displayhook":
      return f(t.DisplayHook, c.ModuleFunctions);
    // non function
    case "excepthook":
      return f(t.ExceptHook, c.ModuleFunctions);
    // none function
    case "exc_info":
      return f(t.ExcInfo, c.ModuleFunctions);
    // tuple function
    // duplicates built in function of same name
    //case "exit": return keywordMap(ExpressionEntity.Exit, ExpressionEntity.ModuleFunctions); // none, function
    case "getallocatedblocks":
      return f(t.GetAllocatedBlocks, c.ModuleFunctions);
    // int function
    case "getandroidapilevel":
      return f(t.GetAndroidApiLevel, c.ModuleFunctions);
    // int function
    case "getdefaultencoding":
      return f(t.GetDefaultEncoding, c.ModuleFunctions);
    // string function
    case "getdlopenflags":
      return f(t.GetDLOpenFlags, c.ModuleFunctions);
    // int function
    case "getfilesystemencoding":
      return f(t.GetFileSystemEncoding, c.ModuleFunctions);
    // string function
    case "getfilesystemencodeerrors":
      return f(t.GetFileSystemEncodeErrors, c.ModuleFunctions);
    // string function
    case "getrefcount":
      return f(t.GetRefCount, c.ModuleFunctions);
    // int function
    case "getrecursionlimit":
      return f(t.GetRecursionLimit, c.ModuleFunctions);
    // int function
    case "getsizeof":
      return f(t.GetSizeOf, c.ModuleFunctions);
    // int function
    case "getswitchinterval":
      return f(t.GetSwitchInterval, c.ModuleFunctions);
    // float function
    case "_getframe":
      return f(t.GetFrame, c.ModuleFunctions);
    // unknown function
    case "getprofile":
      return f(t.GetProfile, c.ModuleFunctions);
    // none function
    case "gettrace":
      return f(t.GetTrace, c.ModuleFunctions);
    // none function
    case "getwindowsversion":
      return f(t.GetWindowsVersion, c.ModuleFunctions);
    // tuple function
    case "get_asyncgen_hooks":
      return f(t.GetAsyncGenHooks, c.ModuleFunctions);
    // unknown function
    case "get_coroutine_origin_tracking_depth":
      return f(t.GetCoroutineOriginTrackingDepth, c.ModuleFunctions);
    // int function
    case "intern":
      return f(t.Intern, c.ModuleFunctions);
    // unknown function
    case "is_finalizing":
      return f(t.IsFinalizing, c.ModuleFunctions);
    // bool function
    case "setdlopenflags":
      return f(t.SetDLOpenFlags, c.ModuleFunctions);
    // none function
    case "setprofile":
      return f(t.SetProfile, c.ModuleFunctions);
    // unknown function
    case "setrecursionlimit":
      return f(t.SetRecursionLimit, c.ModuleFunctions);
    // none function
    case "setswitchinterval":
      return f(t.SetSwitchInterval, c.ModuleFunctions);
    // none function
    case "settrace":
      return f(t.SetTrace, c.ModuleFunctions);
    // none function
    case "set_asyncgen_hooks":
      return f(t.SetAsyncgenHooks, c.ModuleFunctions);
    // none function
    case "_enablelegacywindowsfsencoding":
      return f(t.EnableLegacyWindowsFSEncoding, c.ModuleFunctions);
    // none function
    case "abiflags":
      return f(t.ABIFlags, c.ModuleProperties);
    // string, prop
    case "argv":
      return f(t.Argv, c.ModuleProperties);
    // list, prop
    case "base_exec_prefix":
      return f(t.BaseExecPrefix, c.ModuleProperties);
    // string, prop
    case "base_prefix":
      return f(t.BasePrefix, c.ModuleProperties);
    // string prop
    case "byte_order":
      return f(t.ByteOrder, c.ModuleProperties);
    // string prop
    case "built_in_module_names":
      return f(t.BuiltInModuleNames, c.ModuleProperties);
    // tuple prop
    case "copyright":
      return f(t.Copyright, c.ModuleProperties);
    // string prop
    case "dllhandle":
      return f(t.DllHandle, c.ModuleProperties);
    // int prop
    case "dont_write_bytecode":
      return f(t.DontWriteBytecode, c.ModuleProperties);
    // bool prop
    case "pycache_prefix":
      return f(t.PycachePrefix, c.ModuleProperties);
    // unknown prop
    case "exec_prefix":
      return f(t.ExecPrefix, c.ModuleProperties);
    // string prop
    case "executable":
      return f(t.Executable, c.ModuleProperties);
    // string prop
    case "flags":
      return f(t.Flags, c.ModuleProperties);
    // unknown prop
    case "float_info":
      return f(t.FloatInfo, c.ModuleProperties);
    // unknown prop
    case "float_repr_style":
      return f(t.FloatReprStyle, c.ModuleProperties);
    // string prop
    case "hash_info":
      return f(t.HashInfo, c.ModuleProperties);
    // unknown prop
    case "hexversion":
      return f(t.HexVersion, c.ModuleProperties);
    // int prop
    case "implementation":
      return f(t.Implementation, c.ModuleProperties);
    // unknown prop
    case "int_info":
      return f(t.IntInfo, c.ModuleProperties);
    // unknown prop
    case "last_type":
      return f(t.LastType, c.ModuleProperties);
    // unknown prop
    case "last_value":
      return f(t.LastValue, c.ModuleProperties);
    // unknown prop
    case "last_traceback":
      return f(t.LastTraceback, c.ModuleProperties);
    // unknown prop
    case "maxsize":
      return f(t.MaxSize, c.ModuleProperties);
    // int prop
    case "maxunicode":
      return f(t.MaxUnicode, c.ModuleProperties);
    // int prop
    case "meta_path":
      return f(t.MetaPath, c.ModuleProperties);
    // list prop
    case "modules":
      return f(t.Modules, c.ModuleProperties);
    // dict prop
    case "orig_argv":
      return f(t.OrigArgv, c.ModuleProperties);
    // list prop
    case "path":
      return f(t.Path, c.ModuleProperties);
    // list prop
    case "path_hooks":
      return f(t.PathHooks, c.ModuleProperties);
    // list prop
    case "path_importer_cache":
      return f(t.PathImporterCache, c.ModuleProperties);
    // dict prop
    case "platform":
      return f(t.Platform, c.ModuleProperties);
    // string prop
    case "prefix":
      return f(t.Prefix, c.ModuleProperties);
    // string prop
    case "ps1":
      return f(t.PS1, c.ModuleProperties);
    // string prop
    case "ps2":
      return f(t.PS2, c.ModuleProperties);
    // string prop
    case "stdin":
      return f(t.StdIn, c.ModuleProperties);
    // unknown prop
    case "stdout":
      return f(t.StdOut, c.ModuleProperties);
    // unknown prop
    case "stderr":
      return f(t.StdErr, c.ModuleProperties);
    // unknown prop
    case "stdlib_module_names":
      return f(t.StdLibModuleNames, c.ModuleProperties);
    // unknown prop
    case "thread_info":
      return f(t.ThreadInfo, c.ModuleProperties);
    // unknown prop
    case "tracebacklimit":
      return f(t.TracebackLimit, c.ModuleProperties);
    // int prop
    case "version":
      return f(t.Version, c.ModuleProperties);
    // string prop
    case "api_version":
      return f(t.ApiVersion, c.ModuleProperties);
    // int prop
    case "version_info":
      return f(t.VersionInfo, c.ModuleProperties);
    // tuple prop
    case "warnoptions":
      return f(t.WarnOptions, c.ModuleProperties);
    // list prop
    case "winver":
      return f(t.WinVer, c.ModuleProperties);
    // int prop
    case "_xoptions":
      return f(t.XOptions, c.ModuleProperties);
    // dict prop
    default:
      return f(t.Unknown, c.Unknown);
  }
}, Bo = (g) => {
  switch (g) {
    case "str":
      return f(t.StrType, c.Types);
    case "int":
      return f(t.IntType, c.Types);
    case "float":
      return f(t.FloatType, c.Types);
    case "bool":
      return f(t.BoolType, c.Types);
    case "list":
      return f(t.ListType, c.Types);
    case "set":
      return f(t.SetType, c.Types);
    case "dict":
      return f(t.DictType, c.Types);
    case "tuple":
      return f(t.TupleType, c.Types);
    default:
      return f(t.Unknown, c.Unknown);
  }
}, en = /* @__PURE__ */ new Map([
  [t.AbsFunction, d.Number],
  // float, int
  [t.AllFunction, d.Bool],
  // boolean
  [t.AnyFunction, d.Bool],
  // boolean
  [t.AsciiFunction, d.String],
  // string
  [t.AssertFunction, d.None],
  [t.BinFunction, d.String],
  // string
  [t.BoolFunction, d.Bool],
  // boolean
  [t.CallableFunction, d.Bool],
  // boolean
  [t.ChrFunction, d.String],
  // string
  [t.DictFunction, d.Dict],
  // dictionary
  [t.DivModFunction, d.Tuple],
  // is a tuple but don't know if assigned as is or broken down
  [t.EnumerateFunction, d.Tuple],
  // unknown
  [t.EvalFunction, d.Unknown],
  [t.ExecFunction, d.None],
  [t.ExitFunction, d.None],
  [t.FilterFunction, d.Unknown],
  // unknown
  [t.FloatFunction, d.Float],
  // float
  [t.GetAttrFunction, d.Unknown],
  // unknown
  [t.GlobalsFunction, d.Dict],
  // dictionary
  [t.HasAttrFunction, d.Bool],
  // boolean
  [t.InputFunction, d.String],
  // string
  [t.IntFunction, d.Int],
  // int
  [t.IsInstanceFunction, d.Bool],
  // boolean
  [t.LenFunction, d.Int],
  // int
  [t.ListFunction, d.List],
  // list
  [t.MapFunction, d.Unknown],
  // unknown
  [t.MaxFunction, d.Number],
  // float, int
  [t.MinFunction, d.Number],
  // float, int
  [t.OpenFunction, d.File],
  // file
  [t.OrdFunction, d.Int],
  // int
  [t.PowFunction, d.Number],
  // float, int
  [t.PrintFunction, d.None],
  [t.QuitFunction, d.None],
  [t.RangeFunction, d.Unknown],
  // int (usually)
  [t.ReversedFunction, d.Unknown],
  // an iterable
  [t.RoundFunction, d.Float],
  // float
  [t.SetFunction, d.Set],
  // set
  [t.SortedFunction, d.List],
  [t.StrFunction, d.String],
  // string
  [t.SumFunction, d.Number],
  // float, int
  [t.TupleFunction, d.Tuple],
  // tuple
  [t.TypeFunction, d.Class],
  // class
  [t.Capitalize, d.String],
  // string
  [t.Casefold, d.String],
  // string
  [t.Center, d.String],
  // string
  [t.Count, d.Int],
  // int
  [t.Encode, d.String],
  // string
  [t.EndsWith, d.Bool],
  // boolean
  [t.ExpandTabs, d.String],
  // string
  [t.Find, d.Int],
  // int
  [t.Format, d.String],
  // string
  [t.FormatFunction, d.String],
  // string
  [t.Index, d.Int],
  // int
  [t.IsAlnum, d.Bool],
  // boolean
  [t.IsAlpha, d.Bool],
  // boolean
  [t.IsAscii, d.Bool],
  // boolean
  [t.IsDecimal, d.Bool],
  // boolean
  [t.IsDigit, d.Bool],
  // boolean
  [t.IsIdentifier, d.Bool],
  // boolean
  [t.IsLower, d.Bool],
  // boolean
  [t.IsNumeric, d.Bool],
  // boolean
  [t.IsPrintable, d.Bool],
  // boolean
  [t.IsSpace, d.Bool],
  // boolean
  [t.IsTitle, d.Bool],
  // boolean
  [t.IsUpper, d.Bool],
  // boolean
  [t.Join, d.String],
  // string
  [t.LJust, d.String],
  // string
  [t.Lower, d.String],
  // string
  [t.LStrip, d.String],
  // string
  [t.MakeTrans, d.Dict],
  // dictionary
  [t.Partition, d.Tuple],
  // tuple
  [t.Replace, d.String],
  // string
  [t.RFind, d.Int],
  // int
  [t.RIndex, d.Int],
  // int
  [t.RJust, d.String],
  // string
  [t.RPartition, d.Tuple],
  // tuple
  [t.RSplit, d.List],
  // list
  [t.RStrip, d.String],
  // string
  [t.Split, d.List],
  // list
  [t.SplitLines, d.List],
  // list
  [t.StartsWith, d.Bool],
  // boolean
  [t.Strip, d.String],
  // string
  [t.SwapCase, d.String],
  // string
  [t.Title, d.String],
  // string
  [t.Translate, d.String],
  [t.Upper, d.String],
  // string
  [t.ZFill, d.String],
  // string
  [t.Append, d.None],
  // none
  [t.Clear, d.None],
  [t.Copy, d.Unknown],
  // list, dictionary, set
  [t.Extend, d.None],
  [t.Insert, d.None],
  [t.Pop, d.Unknown],
  // list, dictionary, set
  [t.Remove, d.None],
  [t.Reverse, d.None],
  [t.Sort, d.None],
  [t.FromKeys, d.Dict],
  // dictionary
  [t.Get, d.Unknown],
  // unknown
  [t.Items, d.List],
  // list
  [t.Keys, d.Unknown],
  // unknown
  [t.PopItem, d.None],
  [t.SetDefault, d.Unknown],
  // unknown
  [t.Update, d.None],
  [t.Values, d.Unknown],
  // unknown
  [t.Add, d.None],
  [t.Difference, d.Set],
  // set
  [t.DifferenceUpdate, d.None],
  [t.Discard, d.None],
  [t.Intersection, d.Set],
  // set
  [t.IntersectionUpdate, d.None],
  [t.IsDisjoint, d.Bool],
  // boolean
  [t.IsSubset, d.Bool],
  // boolean
  [t.IsSuperset, d.Bool],
  // boolean
  [t.SymmetricDifference, d.Set],
  // set
  [t.SymmetricDifferenceUpdate, d.None],
  [t.Union, d.Set],
  // set
  [t.Close, d.None],
  [t.FileNo, d.Int],
  // int
  [t.Flush, d.None],
  [t.IsAtty, d.Bool],
  // boolean
  [t.Read, d.String],
  // unknown
  [t.Readable, d.Bool],
  // boolean
  [t.ReadLine, d.String],
  // string
  [t.ReadLines, d.List],
  // list
  [t.Seek, d.None],
  [t.Seekable, d.Bool],
  // boolean
  [t.Tell, d.Unknown],
  // unknown
  [t.Truncate, d.None],
  [t.Writable, d.Bool],
  // boolean
  [t.Write, d.None],
  [t.WriteLines, d.None],
  [t.Main, d.None],
  [t.Cmp, d.Int],
  [t.Eq, d.Bool],
  [t.Ne, d.Bool],
  [t.Lt, d.Bool],
  [t.Gt, d.Bool],
  [t.Le, d.Bool],
  [t.Ge, d.Bool],
  [t.Str, d.String],
  [t.SpecialContains, d.Bool],
  [t.SpecialLen, d.Int],
  [t.ZipFunction, d.Unknown],
  [t.Seed, d.None],
  // no return
  [t.GetState, d.Unknown],
  // unknown
  [t.SetState, d.None],
  // none
  [t.GetRandBits, d.Int],
  // int
  [t.RandRange, d.Int],
  // int
  [t.RandInt, d.Int],
  // int
  [t.Choice, d.Unknown],
  // unknown
  [t.Choices, d.List],
  // list
  [t.Shuffle, d.Shuffle],
  // none
  [t.Sample, d.List],
  // list
  [t.RandomMethod, d.Float],
  // float
  [t.Uniform, d.Float],
  // float
  [t.Triangular, d.Float],
  // float
  [t.BetaVariate, d.Float],
  // float
  [t.ExpoVariate, d.Float],
  // float
  [t.GammaVariate, d.Float],
  // float
  [t.Gauss, d.Float],
  // float
  [t.LogNormVariate, d.Float],
  // float
  [t.NormalVariate, d.Float],
  // float
  [t.VonMisesVariate, d.Float],
  // float
  [t.ParetoVariate, d.Float],
  // float
  [t.WeibullVariate, d.Float],
  // float
  [t.Acos, d.Float],
  // float
  [t.Acosh, d.Float],
  // float
  [t.Asin, d.Float],
  // float
  [t.Asinh, d.Float],
  // float
  [t.Atan, d.Float],
  // float
  [t.Atan2, d.Float],
  // float
  [t.Atanh, d.Float],
  // float
  [t.Ceil, d.Int],
  // int
  [t.Comb, d.Int],
  // int
  [t.CopySign, d.Float],
  // float
  [t.Cos, d.Float],
  // float
  [t.Cosh, d.Float],
  // float
  [t.Degrees, d.Float],
  // float
  [t.Dist, d.Float],
  // float
  [t.Erf, d.Float],
  // float
  [t.Erfc, d.Float],
  // float
  [t.Exp, d.Float],
  // float
  [t.Expm1, d.Float],
  // float
  [t.Fabs, d.Float],
  // float
  [t.Factorial, d.Int],
  // float
  [t.Floor, d.Int],
  // int
  [t.Fmod, d.Float],
  // float
  [t.Frexp, d.Tuple],
  // float
  [t.Fsum, d.Float],
  // float
  [t.Gamma, d.Float],
  // float
  [t.Gcd, d.Int],
  // float
  [t.Hypot, d.Float],
  // float
  [t.IsClose, d.Bool],
  // bool
  [t.IsFinite, d.Bool],
  // bool
  [t.IsInf, d.Bool],
  // bool
  [t.IsNaN, d.Bool],
  // bool
  [t.ISqrt, d.Int],
  // float
  [t.Ldexp, d.Float],
  // float
  [t.LGamma, d.Float],
  // float
  [t.Log, d.Float],
  // float
  [t.Log10, d.Float],
  // float
  [t.Log1P, d.Float],
  // float
  [t.Log2, d.Float],
  // float
  [t.Perm, d.Int],
  // int
  [t.Pow, d.Float],
  // float
  [t.Prod, d.Float],
  // float
  [t.Radians, d.Float],
  // float
  [t.Remainder, d.Float],
  // float
  [t.Sin, d.Float],
  // float
  [t.Sinh, d.Float],
  // float
  [t.Sqrt, d.Float],
  // float
  [t.Tan, d.Float],
  // float
  [t.Tanh, d.Float],
  // float
  [t.Trunc, d.Int],
  // int
  [t.E, d.Float],
  [t.Inf, d.Float],
  [t.Nan, d.Float],
  [t.Pi, d.Float],
  [t.Tau, d.Float],
  // String entities
  [t.AsciiLetters, d.String],
  [t.AsciiLowercase, d.String],
  [t.AsciiUppercase, d.String],
  [t.Digits, d.String],
  [t.Hexdigits, d.String],
  [t.Octdigits, d.String],
  [t.Punctuation, d.String],
  [t.Printable, d.String],
  [t.Whitespace, d.String],
  [t.Formatter, d.String],
  [t.Template, d.String],
  [t.Capwords, d.String],
  // Re module entities
  [t.ReA, d.Unknown],
  [t.ReASCII, d.Unknown],
  [t.ReDebug, d.Unknown],
  [t.ReI, d.Unknown],
  [t.ReIGNORECASE, d.Unknown],
  [t.ReL, d.Unknown],
  [t.ReLOCALE, d.Unknown],
  [t.ReM, d.Unknown],
  [t.ReMULTILINE, d.Unknown],
  [t.ReS, d.Unknown],
  [t.ReDOTALL, d.Unknown],
  [t.ReX, d.Unknown],
  [t.ReVERBOSE, d.Unknown],
  [t.Compile, d.Pattern],
  [t.Search, d.Unknown],
  [t.Match, d.Unknown],
  [t.FullMatch, d.Unknown],
  [t.FindAll, d.List],
  [t.FindIter, d.Unknown],
  [t.Sub, d.String],
  [t.SubN, d.Tuple],
  [t.Escape, d.String],
  [t.Purge, d.None],
  // Sys module entities
  [t.AddAuditHook, d.None],
  // none, function
  [t.Audit, d.None],
  // none, function
  [t.CallTracing, d.Unknown],
  // unknown function
  [t.ClearTypeCache, d.None],
  // none function
  [t.CurrentFrames, d.Dict],
  // dict function
  [t.CurrentExceptions, d.Dict],
  // dict function
  [t.BreakpointHook, d.None],
  // none function
  [t.DebugMallocStats, d.None],
  // none function
  [t.DisplayHook, d.None],
  // non function
  [t.ExceptHook, d.None],
  // none function
  [t.ExcInfo, d.Tuple],
  // tuple function
  [t.SysExit, d.None],
  // none, function
  [t.GetAllocatedBlocks, d.Int],
  // int function
  [t.GetAndroidApiLevel, d.Int],
  // int function
  [t.GetDefaultEncoding, d.String],
  // string function
  [t.GetDLOpenFlags, d.Int],
  // int function
  [t.GetFileSystemEncoding, d.String],
  // string function
  [t.GetFileSystemEncodeErrors, d.String],
  // string function
  [t.GetRefCount, d.Int],
  // int function
  [t.GetRecursionLimit, d.Int],
  // int function
  [t.GetSizeOf, d.Int],
  // int function
  [t.GetSwitchInterval, d.Float],
  // float function
  [t.GetFrame, d.Unknown],
  // unknown function
  [t.GetProfile, d.None],
  // none function
  [t.GetTrace, d.None],
  // none function
  [t.GetWindowsVersion, d.Tuple],
  // tuple function
  [t.GetAsyncGenHooks, d.Unknown],
  // unknown function
  [t.GetCoroutineOriginTrackingDepth, d.Int],
  // int function
  [t.Intern, d.Unknown],
  // unknown function
  [t.IsFinalizing, d.Bool],
  // bool function
  [t.SetDLOpenFlags, d.None],
  // none function
  [t.SetProfile, d.Unknown],
  // unknown function
  [t.SetRecursionLimit, d.None],
  // none function
  [t.SetSwitchInterval, d.None],
  // none function
  [t.SetTrace, d.None],
  // none function
  [t.SetAsyncgenHooks, d.None],
  // none function
  [t.EnableLegacyWindowsFSEncoding, d.None],
  // none function
  [t.ABIFlags, d.String],
  // string, prop
  [t.Argv, d.List],
  // list, prop
  [t.BaseExecPrefix, d.String],
  // string, prop
  [t.BasePrefix, d.String],
  // string prop
  [t.ByteOrder, d.String],
  // string prop
  [t.BuiltInModuleNames, d.Tuple],
  // tuple prop
  [t.Copyright, d.String],
  // string prop
  [t.DllHandle, d.Int],
  // int prop
  [t.DontWriteBytecode, d.Bool],
  // bool prop
  [t.PycachePrefix, d.Unknown],
  // unknown prop
  [t.ExecPrefix, d.String],
  // string prop
  [t.Executable, d.String],
  // string prop
  [t.Flags, d.Unknown],
  // unknown prop
  [t.FloatInfo, d.Unknown],
  // unknown prop
  [t.FloatReprStyle, d.String],
  // string prop
  [t.HashInfo, d.Unknown],
  // unknown prop
  [t.HexVersion, d.Int],
  // int prop
  [t.Implementation, d.Unknown],
  // unknown prop
  [t.IntInfo, d.Unknown],
  // unknown prop
  [t.LastType, d.Unknown],
  // unknown prop
  [t.LastValue, d.Unknown],
  // unknown prop
  [t.LastTraceback, d.Unknown],
  // unknown prop
  [t.MaxSize, d.Int],
  // int prop
  [t.MaxUnicode, d.Int],
  // int prop
  [t.MetaPath, d.List],
  // list prop
  [t.Modules, d.Dict],
  // dict prop
  [t.OrigArgv, d.List],
  // list prop
  [t.Path, d.List],
  // list prop
  [t.PathHooks, d.List],
  // list prop
  [t.PathImporterCache, d.Dict],
  // dict prop
  [t.Platform, d.String],
  // string prop
  [t.Prefix, d.String],
  // string prop
  [t.PS1, d.String],
  // string prop
  [t.PS2, d.String],
  // string prop
  [t.StdIn, d.Unknown],
  // unknown prop
  [t.StdOut, d.Unknown],
  // unknown prop
  [t.StdErr, d.Unknown],
  // unknown prop
  [t.StdLibModuleNames, d.Unknown],
  // unknown prop
  [t.ThreadInfo, d.Unknown],
  // unknown prop
  [t.TracebackLimit, d.Unknown],
  // int prop
  [t.Version, d.String],
  // string prop
  [t.ApiVersion, d.Int],
  // int prop
  [t.VersionInfo, d.Tuple],
  // tuple prop
  [t.WarnOptions, d.List],
  // list prop
  [t.WinVer, d.Int],
  // int prop
  [t.XOptions, d.Dict]
  // dict prop
]), ou = /* @__PURE__ */ new Set([
  t.Add,
  t.Append,
  t.Clear,
  t.DifferenceUpdate,
  t.Discard,
  t.Extend,
  t.Insert,
  t.IntersectionUpdate,
  t.Pop,
  t.PopItem,
  t.Remove,
  t.Reverse,
  t.SetDefault,
  t.Sort,
  t.SymmetricDifferenceUpdate,
  t.Update
]), No = /* @__PURE__ */ new Set([
  t.Capitalize,
  t.Casefold,
  t.Center,
  t.Encode,
  t.ExpandTabs,
  t.Format,
  t.FormatMap,
  t.LJust,
  t.Lower,
  t.LStrip,
  t.Replace,
  t.RJust,
  t.RStrip,
  t.Strip,
  t.SwapCase,
  t.Title,
  t.Translate,
  t.Upper,
  t.ZFill
]), ko = /* @__PURE__ */ new Map([
  // random module
  [t.Seed, t.RandomModule],
  [t.GetState, t.RandomModule],
  [t.SetState, t.RandomModule],
  [t.GetRandBits, t.RandomModule],
  [t.RandRange, t.RandomModule],
  [t.RandInt, t.RandomModule],
  [t.Choice, t.RandomModule],
  [t.Choices, t.RandomModule],
  [t.Shuffle, t.RandomModule],
  [t.Sample, t.RandomModule],
  [t.RandomMethod, t.RandomModule],
  [t.Uniform, t.RandomModule],
  [t.Triangular, t.RandomModule],
  [t.BetaVariate, t.RandomModule],
  [t.ExpoVariate, t.RandomModule],
  [t.GammaVariate, t.RandomModule],
  [t.Gauss, t.RandomModule],
  [t.LogNormVariate, t.RandomModule],
  [t.NormalVariate, t.RandomModule],
  [t.VonMisesVariate, t.RandomModule],
  [t.ParetoVariate, t.RandomModule],
  [t.WeibullVariate, t.RandomModule],
  // Math module
  [t.Acos, t.MathModule],
  [t.Acosh, t.MathModule],
  [t.Asin, t.MathModule],
  [t.Asinh, t.MathModule],
  [t.Atan, t.MathModule],
  [t.Atan2, t.MathModule],
  [t.Atanh, t.MathModule],
  [t.Ceil, t.MathModule],
  [t.Comb, t.MathModule],
  [t.CopySign, t.MathModule],
  [t.Cos, t.MathModule],
  [t.Cosh, t.MathModule],
  [t.Degrees, t.MathModule],
  [t.Dist, t.MathModule],
  [t.Erf, t.MathModule],
  [t.Erfc, t.MathModule],
  [t.Exp, t.MathModule],
  [t.Expm1, t.MathModule],
  [t.Fabs, t.MathModule],
  [t.Factorial, t.MathModule],
  [t.Floor, t.MathModule],
  [t.Fmod, t.MathModule],
  [t.Frexp, t.MathModule],
  [t.Fsum, t.MathModule],
  [t.Gamma, t.MathModule],
  [t.Gcd, t.MathModule],
  [t.Hypot, t.MathModule],
  [t.IsClose, t.MathModule],
  [t.IsFinite, t.MathModule],
  [t.IsInf, t.MathModule],
  [t.IsNaN, t.MathModule],
  [t.ISqrt, t.MathModule],
  [t.Ldexp, t.MathModule],
  [t.LGamma, t.MathModule],
  [t.Log, t.MathModule],
  [t.Log10, t.MathModule],
  [t.Log1P, t.MathModule],
  [t.Log2, t.MathModule],
  [t.Perm, t.MathModule],
  [t.Pow, t.MathModule],
  [t.Prod, t.MathModule],
  [t.Radians, t.MathModule],
  [t.Remainder, t.MathModule],
  [t.Sin, t.MathModule],
  [t.Sinh, t.MathModule],
  [t.Sqrt, t.MathModule],
  [t.Tan, t.MathModule],
  [t.Tanh, t.MathModule],
  [t.Trunc, t.MathModule],
  [t.E, t.MathModule],
  [t.Inf, t.MathModule],
  [t.Nan, t.MathModule],
  [t.Pi, t.MathModule],
  [t.Tau, t.MathModule],
  // String module entities
  [t.AsciiLetters, t.StringModule],
  [t.AsciiLowercase, t.StringModule],
  [t.AsciiUppercase, t.StringModule],
  [t.Digits, t.StringModule],
  [t.Hexdigits, t.StringModule],
  [t.Octdigits, t.StringModule],
  [t.Punctuation, t.StringModule],
  [t.Printable, t.StringModule],
  [t.Whitespace, t.StringModule],
  [t.Formatter, t.StringModule],
  [t.Template, t.StringModule],
  [t.Capwords, t.StringModule],
  // Re module entities
  [t.Pattern, t.ReModule],
  [t.Match, t.ReModule],
  [t.ReA, t.ReModule],
  [t.ReASCII, t.ReModule],
  [t.ReDebug, t.ReModule],
  [t.ReI, t.ReModule],
  [t.ReIGNORECASE, t.ReModule],
  [t.ReL, t.ReModule],
  [t.ReLOCALE, t.ReModule],
  [t.ReM, t.ReModule],
  [t.ReMULTILINE, t.ReModule],
  [t.ReS, t.ReModule],
  [t.ReDOTALL, t.ReModule],
  [t.ReX, t.ReModule],
  [t.ReVERBOSE, t.ReModule],
  [t.Compile, t.ReModule],
  [t.Search, t.ReModule],
  [t.Match, t.ReModule],
  [t.FullMatch, t.ReModule],
  [t.FindAll, t.ReModule],
  [t.FindIter, t.ReModule],
  [t.Sub, t.ReModule],
  [t.SubN, t.ReModule],
  [t.Escape, t.ReModule],
  [t.Purge, t.ReModule],
  [t.Split, t.ReModule],
  // Sys module
  [t.AddAuditHook, t.Sys],
  // none, function
  [t.Audit, t.Sys],
  // none, function
  [t.CallTracing, t.Sys],
  // unknown function
  [t.ClearTypeCache, t.Sys],
  // none function
  [t.CurrentFrames, t.Sys],
  // dict function
  [t.CurrentExceptions, t.Sys],
  // dict function
  [t.BreakpointHook, t.Sys],
  // none function
  [t.DebugMallocStats, t.Sys],
  // none function
  [t.DisplayHook, t.Sys],
  // non function
  [t.ExceptHook, t.Sys],
  // none function
  [t.ExcInfo, t.Sys],
  // tuple function
  [t.SysExit, t.Sys],
  // none, function
  [t.GetAllocatedBlocks, t.Sys],
  // int function
  [t.GetAndroidApiLevel, t.Sys],
  // int function
  [t.GetDefaultEncoding, t.Sys],
  // string function
  [t.GetDLOpenFlags, t.Sys],
  // int function
  [t.GetFileSystemEncoding, t.Sys],
  // string function
  [t.GetFileSystemEncodeErrors, t.Sys],
  // string function
  [t.GetRefCount, t.Sys],
  // int function
  [t.GetRecursionLimit, t.Sys],
  // int function
  [t.GetSizeOf, t.Sys],
  // int function
  [t.GetSwitchInterval, t.Sys],
  // float function
  [t.GetFrame, t.Sys],
  // unknown function
  [t.GetProfile, t.Sys],
  // none function
  [t.GetTrace, t.Sys],
  // none function
  [t.GetWindowsVersion, t.Sys],
  // tuple function
  [t.GetAsyncGenHooks, t.Sys],
  // unknown function
  [t.GetCoroutineOriginTrackingDepth, t.Sys],
  // int function
  [t.Intern, t.Sys],
  // unknown function
  [t.IsFinalizing, t.Sys],
  // bool function
  [t.SetDLOpenFlags, t.Sys],
  // none function
  [t.SetProfile, t.Sys],
  // unknown function
  [t.SetRecursionLimit, t.Sys],
  // none function
  [t.SetSwitchInterval, t.Sys],
  // none function
  [t.SetTrace, t.Sys],
  // none function
  [t.SetAsyncgenHooks, t.Sys],
  // none function
  [t.EnableLegacyWindowsFSEncoding, t.Sys],
  // none function
  [t.ABIFlags, t.Sys],
  // string, prop
  [t.Argv, t.Sys],
  // list, prop
  [t.BaseExecPrefix, t.Sys],
  // string, prop
  [t.BasePrefix, t.Sys],
  // string prop
  [t.ByteOrder, t.Sys],
  // string prop
  [t.BuiltInModuleNames, t.Sys],
  // tuple prop
  [t.Copyright, t.Sys],
  // string prop
  [t.DllHandle, t.Sys],
  // int prop
  [t.DontWriteBytecode, t.Sys],
  // bool prop
  [t.PycachePrefix, t.Sys],
  // unknown prop
  [t.ExecPrefix, t.Sys],
  // string prop
  [t.Executable, t.Sys],
  // string prop
  [t.Flags, t.Sys],
  // unknown prop
  [t.FloatInfo, t.Sys],
  // unknown prop
  [t.FloatReprStyle, t.Sys],
  // string prop
  [t.HashInfo, t.Sys],
  // unknown prop
  [t.HexVersion, t.Sys],
  // int prop
  [t.Implementation, t.Sys],
  // unknown prop
  [t.IntInfo, t.Sys],
  // unknown prop
  [t.LastType, t.Sys],
  // unknown prop
  [t.LastValue, t.Sys],
  // unknown prop
  [t.LastTraceback, t.Sys],
  // unknown prop
  [t.MaxSize, t.Sys],
  // int prop
  [t.MaxUnicode, t.Sys],
  // int prop
  [t.MetaPath, t.Sys],
  // list prop
  [t.Modules, t.Sys],
  // dict prop
  [t.OrigArgv, t.Sys],
  // list prop
  [t.Path, t.Sys],
  // list prop
  [t.PathHooks, t.Sys],
  // list prop
  [t.PathImporterCache, t.Sys],
  // dict prop
  [t.Platform, t.Sys],
  // string prop
  [t.Prefix, t.Sys],
  // string prop
  [t.PS1, t.Sys],
  // string prop
  [t.PS2, t.Sys],
  // string prop
  [t.StdIn, t.Sys],
  // unknown prop
  [t.StdOut, t.Sys],
  // unknown prop
  [t.StdErr, t.Sys],
  // unknown prop
  [t.StdLibModuleNames, t.Sys],
  // unknown prop
  [t.ThreadInfo, t.Sys],
  // unknown prop
  [t.TracebackLimit, t.Sys],
  // int prop
  [t.Version, t.Sys],
  // string prop
  [t.ApiVersion, t.Sys],
  // int prop
  [t.VersionInfo, t.Sys],
  // tuple prop
  [t.WarnOptions, t.Sys],
  // list prop
  [t.WinVer, t.Sys],
  // int prop
  [t.XOptions, t.Sys]
  // dict prop
]), yi = {
  assert: { entity: t.AssertFunction, category: c.BuiltInFunctions },
  random: { entity: t.RandomMethod, category: c.BuiltInMethods },
  exit: { entity: t.SysExit, category: c.ModuleFunctions }
}, ns = /* @__PURE__ */ new Map([
  [d.String, /* @__PURE__ */ new Set([
    t.Capitalize,
    t.Casefold,
    t.Center,
    t.Count,
    t.Encode,
    t.ExpandTabs,
    t.Find,
    t.Format,
    t.Index,
    t.IsAlnum,
    t.IsAlpha,
    t.IsAscii,
    t.IsDecimal,
    t.IsDigit,
    t.IsIdentifier,
    t.IsLower,
    t.IsNumeric,
    t.IsPrintable,
    t.IsSpace,
    t.IsTitle,
    t.IsUpper,
    t.Join,
    t.LJust,
    t.Lower,
    t.LStrip,
    t.MakeTrans,
    t.Partition,
    t.Replace,
    t.RFind,
    t.RIndex,
    t.RJust,
    t.RPartition,
    t.RSplit,
    t.RStrip,
    t.Split,
    t.SplitLines,
    t.StartsWith,
    t.Strip,
    t.SwapCase,
    t.Title,
    t.Translate,
    t.Upper,
    t.ZFill
  ])],
  [d.List, /* @__PURE__ */ new Set([
    t.Append,
    t.Clear,
    t.Copy,
    t.Count,
    t.Extend,
    t.Index,
    t.Insert,
    t.Pop,
    t.Remove,
    t.Reverse,
    t.Sort,
    c.MagicMethods
  ])],
  [d.Tuple, /* @__PURE__ */ new Set([t.Count, t.Index])],
  [d.Set, /* @__PURE__ */ new Set([
    t.Add,
    t.Clear,
    t.Copy,
    t.Difference,
    t.DifferenceUpdate,
    t.Discard,
    t.Intersection,
    t.IntersectionUpdate,
    t.IsDisjoint,
    t.IsSubset,
    t.IsSuperset,
    t.Pop,
    t.Remove,
    t.SymmetricDifference,
    t.SymmetricDifferenceUpdate,
    t.Union,
    t.Update
  ])],
  [d.Dict, /* @__PURE__ */ new Set([
    t.Clear,
    t.Copy,
    t.FromKeys,
    t.Get,
    t.Items,
    t.Keys,
    t.Pop,
    t.PopItem,
    t.SetDefault,
    t.Update,
    t.Values
  ])],
  [d.File, /* @__PURE__ */ new Set([
    t.Close,
    t.FileNo,
    t.Flush,
    t.IsAtty,
    t.Read,
    t.Readable,
    t.ReadLine,
    t.ReadLines,
    t.Seek,
    t.Seekable,
    t.Tell,
    t.Truncate,
    t.Writable,
    t.Write,
    t.WriteLines
  ])],
  [d.Random, /* @__PURE__ */ new Set([
    t.Seed,
    t.GetState,
    t.SetState,
    t.GetRandBits,
    t.RandRange,
    t.RandInt,
    t.Choice,
    t.Choices,
    t.Shuffle,
    t.Sample,
    t.RandomMethod,
    t.Uniform,
    t.Triangular,
    t.BetaVariate,
    t.ExpoVariate,
    t.GammaVariate,
    t.Gauss,
    t.LogNormVariate,
    t.NormalVariate,
    t.VonMisesVariate,
    t.ParetoVariate,
    t.WeibullVariate,
    c.MagicMethods
  ])],
  [d.Math, /* @__PURE__ */ new Set([
    t.Acos,
    t.Acosh,
    t.Asin,
    t.Asinh,
    t.Atan,
    t.Atan2,
    t.Atanh,
    t.Ceil,
    t.Comb,
    t.CopySign,
    t.Cos,
    t.Cosh,
    t.Degrees,
    t.Dist,
    t.Erf,
    t.Erfc,
    t.Exp,
    t.Expm1,
    t.Fabs,
    t.Factorial,
    t.Floor,
    t.Fmod,
    t.Frexp,
    t.Fsum,
    t.Gamma,
    t.Gcd,
    t.Hypot,
    t.IsClose,
    t.IsFinite,
    t.IsInf,
    t.IsNaN,
    t.ISqrt,
    t.Ldexp,
    t.LGamma,
    t.Log,
    t.Log10,
    t.Log1P,
    t.Log2,
    t.Perm,
    t.Pow,
    t.Prod,
    t.Radians,
    t.Remainder,
    t.Sin,
    t.Sinh,
    t.Sqrt,
    t.Tan,
    t.Tanh,
    t.Trunc
  ])],
  [d.StringModule, /* @__PURE__ */ new Set([
    t.Formatter,
    t.Template,
    t.Capwords
  ])],
  [d.Re, /* @__PURE__ */ new Set([
    t.Compile,
    t.Search,
    t.Match,
    t.FullMatch,
    t.FindAll,
    t.FindIter,
    t.Sub,
    t.SubN,
    t.Escape,
    t.Purge,
    t.Split
  ])],
  [d.Sys, /* @__PURE__ */ new Set([
    t.AddAuditHook,
    t.Audit,
    t.CallTracing,
    t.ClearTypeCache,
    t.CurrentFrames,
    t.CurrentExceptions,
    t.BreakpointHook,
    t.DebugMallocStats,
    t.DisplayHook,
    t.ExceptHook,
    t.ExcInfo,
    t.SysExit,
    t.GetAllocatedBlocks,
    t.GetAndroidApiLevel,
    t.GetDefaultEncoding,
    t.GetDLOpenFlags,
    t.GetFileSystemEncoding,
    t.GetFileSystemEncodeErrors,
    t.GetRefCount,
    t.GetRecursionLimit,
    t.GetSizeOf,
    t.GetSwitchInterval,
    t.GetFrame,
    t.GetProfile,
    t.GetTrace,
    t.GetWindowsVersion,
    t.GetAsyncGenHooks,
    t.GetCoroutineOriginTrackingDepth,
    t.Intern,
    t.IsFinalizing,
    t.SetDLOpenFlags,
    t.SetProfile,
    t.SetRecursionLimit,
    t.SetSwitchInterval,
    t.SetTrace,
    t.SetAsyncgenHooks,
    t.EnableLegacyWindowsFSEncoding
  ])]
]);
var Vt, Lt, vt, Rt, Et, rn, an;
class J {
  /**
   * Creates a new Symptom
   * @param {String} id The string id for the symptom
   * @param {Number} lineNum The document line number
   * @param {String} blockId The id of the block containing the symptom
   * @param {Number} docIndex The index in the raw text of the document
   * @param {Number} lineIndex The index in the raw text of the line
   * @param {String} affectedText The text affected by the symptom
   * @param {Object} additionalInfo An optional object containing more information about the symptom
   */
  constructor(i, e, n, s, o, a = "", h = {}) {
    /** @type {String} */
    b(this, Vt);
    // The logging ID of the symptom
    /** @type {Number} */
    b(this, Lt);
    // The document line number
    /** @type {Number} */
    b(this, vt);
    // index in full document raw text
    /** @type {Number} */
    b(this, Rt);
    // index in the raw text of the given line
    /** @type {String} */
    b(this, Et);
    // The text to highlight
    /** @type {Object} */
    b(this, rn);
    // Properties vary by symptom
    /** @type {String} */
    b(this, an);
    y(this, Vt, i), y(this, Lt, e), y(this, an, n), y(this, vt, s), y(this, Rt, o), y(this, Et, a), y(this, rn, h);
  }
  /**
   * Gets the ID of the symptom
   * @returns {String} The symptom ID
   */
  getID() {
    return u(this, Vt);
  }
  /**
   * Gets the document line number
   * @returns {Number} The document line number
   */
  getLineNumber() {
    return u(this, Lt);
  }
  getBlock() {
    return u(this, an);
  }
  /**
   * Gets the index of the symptom in the document's raw text
   * @returns {Number} The document index of the problem
   */
  getDocIndex() {
    return u(this, vt);
  }
  /**
   * Gets the index of the symptom in the line's raw text
   * @returns {Number} The line index of the problem
   */
  getLineIndex() {
    return u(this, Rt);
  }
  /**
   * Gets the affected text
   * @returns {String} The affected text
   */
  getAffectedText() {
    return u(this, Et);
  }
  /**
   * Gets the additional information for this symptom
   * @returns {Object} An object containing more information about this symptom
   */
  getAdditionalInfo() {
    return u(this, rn);
  }
  /**
   * Creates a String representation of the symptom
   * @returns {String} A String representation of the symptom
   */
  toString() {
    return `{line: ${u(this, Lt)}, type: ${u(this, Vt)}, text: ${u(this, Et)}, docIndex: ${u(this, vt)}, lineIndex: ${u(this, Rt)}, additionalInfo: ${u(this, rn)}`;
  }
  /**
   * Creates a JSON-friendly representation of the symptom
   * @returns {Object} A JSON-friendly representation of the symptom
   */
  toJSON() {
    return {
      line: u(this, Lt),
      type: u(this, Vt),
      text: u(this, Et),
      block: u(this, an),
      docIndex: u(this, vt),
      lineIndex: u(this, Rt)
    };
  }
}
Vt = new WeakMap(), Lt = new WeakMap(), vt = new WeakMap(), Rt = new WeakMap(), Et = new WeakMap(), rn = new WeakMap(), an = new WeakMap();
class ru extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("parentText") && (i.parentText = e.parentText), i;
  }
}
class au extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    if (e.hasOwnProperty("expression")) {
      let n = e.expression.getCategory().name;
      e.expression.getEntity() === t.VariableName ? n = $c : e.expression.is(t.UserDefinedFunctionCall) ? n = $n : e.expression.is(t.BuiltInFunctionCall) && (n = Kn), i.expressionNoValue = {
        type: n,
        value: e.expression.getTextValue()
      };
    }
    return e.hasOwnProperty("usage") && (i.usage = e.usage), e.hasOwnProperty("target") && (i.target = e.target), i;
  }
}
class lu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("assignedVariables") && (i.assignedVariables = e.assignedVariables), i;
  }
}
class cu extends J {
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("boolValue") && (i.boolValue = e.boolValue), e.hasOwnProperty("operator") && (i.operator = e.operator), e.hasOwnProperty("boolLiteral") && (i.boolLiteral = e.boolLiteral), e.hasOwnProperty("usedIn") && (i.usedIn = e.usedIn), i;
  }
}
class uu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("definitionType") && (i.boolValue = e.definitionType), e.hasOwnProperty("reservedWord") && (i.reservedWord = e.reservedWord), i;
  }
}
class du extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("definitionText") && (i.definitionText = e.definitionText), e.hasOwnProperty("loopVarTypeAtDefinition") && (i.loopVarTypeAtDefinition = e.loopVarTypeAtDefinition), e.hasOwnProperty("modificationText") && (i.modificationText = e.modificationText), i;
  }
}
class hu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("printLines") && (i.printLines = e.printLines), e.hasOwnProperty("functionReturns") && (i.functionReturns = e.functionReturns), i;
  }
}
class fu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("loopType") && (i.loopType = e.loopType), e.hasOwnProperty("exitLevel") && (i.exitLevel = e.exitLevel), e.hasOwnProperty("exitTypes") && (i.exitTypes = e.exitTypes), i;
  }
}
class gu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("modifiedIn") && (i.modifiedIn = e.modifiedIn), i;
  }
}
class pu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("unmodifiedVars") && (i.unmodifiedVars = e.unmodifiedVars), e.hasOwnProperty("loopText") && (i.loopText = e.loopText), i;
  }
}
class mu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("form") && (i.form = e.form), e.hasOwnProperty("leftSideType") && (i.leftSideType = e.leftSideType.name), e.hasOwnProperty("leftSideText") && (i.leftSideText = e.leftSideText), e.hasOwnProperty("leftSideEntity") && (i.leftSideEntity = e.leftSideEntity.name), e.hasOwnProperty("operator") && (i.operator = e.operator), e.hasOwnProperty("rightSideType") && (i.rightSideType = e.rightSideType.name), e.hasOwnProperty("rightSideText") && (i.rightSideText = e.rightSideText), e.hasOwnProperty("rightSideEntity") && (i.rightSideEntity = e.rightSideEntity.name), e.hasOwnProperty("parentText") && (i.parentText = e.parentText), e.hasOwnProperty("parentEntity") && (i.parentEntity = e.parentEntity.name), e.hasOwnProperty("completeBooleanExpression") && (i.completeBooleanExpression = e.completeBooleanExpression), i;
  }
}
class wu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("form") && (i.form = e.form), e.hasOwnProperty("variableAssigned") && (i.variableAssigned = e.variableAssigned), e.hasOwnProperty("condition") && (i.condition = e.condition), i;
  }
}
class Su extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("isParameter") && (i.isParameter = e.isParameter), e.hasOwnProperty("prevUsageIsDefinition") && (i.prevUsageIsDefinition = e.prevUsageIsDefinition), e.hasOwnProperty("overwriteType") && (i.overwriteType = e.overwriteType), e.hasOwnProperty("overwriteValue") && (i.overwriteValue = e.overwriteValue), e.hasOwnProperty("overwrittenVar") && (i.overwrittenVar = e.overwrittenVar), e.hasOwnProperty("functionBlock") && (i.functionBlock = e.functionBlock), e.hasOwnProperty("usageText") && (i.usageText = e.usageText), i;
  }
}
class bu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("contents") && (i.contents = e.contents), e.hasOwnProperty("textInParentheses") && (i.textInParentheses = e.textInParentheses), i;
  }
}
class Iu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("branchMatches") && (i.branchMatches = e.branchMatches), i;
  }
}
class yu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("isUndefined") && (i.isUndefined = e.isUndefined), e.hasOwnProperty("subscriptedType") && (i.subscriptedType = e.subscriptedType.name), e.hasOwnProperty("varName") && (i.varName = e.varName), i;
  }
}
class Fu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("boolValue") && (i.boolValue = e.boolValue), e.hasOwnProperty("boolLiteralIfTrue") && (i.boolLiteralIfTrue = e.boolLiteralIfTrue), e.hasOwnProperty("boolLiteralIfFalse") && (i.boolLiteralIfFalse = e.boolLiteralIfFalse), e.hasOwnProperty("parentText") && (i.parentText = e.parentText), e.hasOwnProperty("parentEntity") && (i.parentEntity = e.parentEntity), i;
  }
}
class Nu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("parts") && (i.parts = e.parts), i;
  }
}
class Cu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("convertedValue") && (i.convertedValue = e.convertedValue), e.hasOwnProperty("argType") && (i.argType = e.argType), e.hasOwnProperty("convertedType") && (i.convertedType = e.convertedType), i;
  }
}
class Ou extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("variable") && (i.variable = e.variable.toJSON()), e.hasOwnProperty("localVariables") && (i.localVariables = e.localVariables), i;
  }
}
class Tu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("before") && (i.before = e.before), e.hasOwnProperty("after") && (i.after = e.after), i;
  }
}
class xu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("objectType") && (i.objectType = e.objectType), i;
  }
}
class Mu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("exitKeyword") && (i.exitKeyword = e.exitKeyword), e.hasOwnProperty("functionBlock") && (i.functionBlock = e.functionBlock), i;
  }
}
class Du extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("infiniteLoopLine") && (i.infiniteLoopLine = e.infiniteLoopLine), i;
  }
}
class Au extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    if (e.hasOwnProperty("expression")) {
      let n = e.expression.getCategory().name;
      e.expression.getEntity() === t.FunctionName ? n = $n : e.expression.getCategory() === c.BuiltInFunctions && (n = Kn), i.unusedFunc = {
        type: n,
        value: e.expression.getTextValue(),
        returnType: e.expression.getDataType().name.replace(" (int or float)", "")
      };
    }
    return i;
  }
}
class Bu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("funcType") && (i.funcType = e.funcType), e.hasOwnProperty("numArgsExpected") && (i.numArgsExpected = e.numArgsExpected), e.hasOwnProperty("varIsParameter") && (i.varIsParameter = e.varIsParameter), i;
  }
}
class ku extends J {
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("expectedMinArgs") && (i.expectedMinArgs = e.expectedMinArgs), e.hasOwnProperty("expectedMaxArgs") && (i.expectedMinArgs = e.expectedMaxArgs), e.hasOwnProperty("receivedArgs") && (i.receivedArgs = e.receivedArgs), i;
  }
}
class Pu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("parentText") && (i.parentText = e.parentText), e.hasOwnProperty("completeBooleanExpression") && (i.completeBooleanExpression = e.completeBooleanExpression), i;
  }
}
class Vu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("before") && (i.before = e.before), e.hasOwnProperty("after") && (i.after = e.after), i;
  }
}
class Lu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("boolValue") && (i.boolValue = e.boolValue), e.hasOwnProperty("usedIn") && (i.usedIn = e.usedIn), i;
  }
}
class vu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("functionBlock") && (i.functionBlock = e.functionBlock), i;
  }
}
class Ru extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("usageText") && (i.usageText = e.usageText), i;
  }
}
class Eu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("numArgs") && (i.numArgs = e.numArgs), i;
  }
}
class Uu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("isNestedInWhile") && (i.isNestedInWhile = e.isNestedInWhile), e.hasOwnProperty("counterType") && (i.counterType = e.counterType), i;
  }
}
class Gu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("isParameter") && (i.isParameter = e.isParameter), e.hasOwnProperty("definedInScope") && (i.definedInScope = e.definedInScope), i;
  }
}
class Ju extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("loopVars") && (i.loopVars = e.loopVars), i;
  }
}
class $u extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("assignedToVariable") && (i.assignedToVariable = e.assignedToVariable), e.hasOwnProperty("expression") && (i.expression = e.expression), i;
  }
}
class Ku extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("expression") && (i.expression = e.expression), i;
  }
}
class Wu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("expression") && (i.expression = e.expression.toJSON()), e.hasOwnProperty("usage") && (i.usage = e.usage), e.hasOwnProperty("usageType") && (i.usageType = e.usageType), i;
  }
}
class qu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("expression") && (i.expression = e.expression.toJSON()), i;
  }
}
class ju extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("returnValue") && (i.returnValue = e.returnValue), i;
  }
}
class Hu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("branches") && (i.branches = e.branches), i;
  }
}
class zu extends J {
  /**
   * @inheritdoc
   */
  toJSON() {
    let i = super.toJSON();
    const e = this.getAdditionalInfo();
    return e.hasOwnProperty("loopType") && (i.loopType = e.loopType), e.hasOwnProperty("loopBlock") && (i.loopBlock = e.loopBlock), i;
  }
}
var _s, Ko;
const At = class At {
  /**
   * Factory method to create a new Symptom object that occurs in a single statement
   * @param {SymptomType | CounterSymptomType} type The type of symptom
   * @param {ExpressionNode[]} expressions The expressions in the statement
   * @param {Number} startIndex The index of the expression that the Symptom starts with
   * @param {Number} endIndex The index of the expression that the Symptom ends with (inclusive)
   * @param {Object} additionalInfo An Object literal containing any additional information about the Symptom
   * @param {String} block Optional. The block id.
   * @param {boolean} includeIndents Optional. Whether or not to include the first expression indent in the affected text. Default = false
   * @returns {Symptom}
   */
  static createStatementSymptom(i, e, n, s, o = {}, a = "", h = !1) {
    var L;
    const p = e[n].getStartLineNumber(), w = a === "" ? e[n].getBlockId() : a, S = e[n].getDocumentStartIndex(), F = e[n].getIndexOnLine(), N = ge(e.slice(n, s + 1), h);
    if (i instanceof B)
      return m(L = At, _s, Ko).call(L, i, p, w, S, F, N, o);
    switch (i) {
      case I.AssignmentInBoolean:
        return new ru(i.name, p, w, S, F, N, o);
      case I.AssignedNone:
        return new au(i.name, p, w, S, F, N, o);
      case I.AssignmentInReturn:
        return new lu(i.name, p, w, S, F, N, o);
      case I.CompareBoolLiteral:
        return new cu(i.name, p, w, S, F, N, o);
      case I.DefinitionFollowedByReservedWord:
        return new uu(i.name, p, w, S, F, N, o);
      case I.FunctionPrints:
        return new hu(i.name, p, w, S, F, N, o);
      case I.ForLoopIteratorModified:
        return new du(i.name, p, w, S, F, N, o);
      case I.LoopReturn:
        return new fu(i.name, p, w, S, F, N, o);
      case I.LoopVarModifiedInChildLoop:
        return new gu(i.name, p, w, S, F, N, o);
      case I.LoopVarNotModified:
        return new pu(i.name, p, w, S, F, N, o);
      case I.NaturalLanguageBoolean:
        return new mu(i.name, p, w, S, F, N, o);
      case I.OneLineConditional:
        return new wu(i.name, p, w, S, F, N, o);
      case I.OverwrittenVariable:
        return new Su(i.name, p, w, S, F, N, o);
      case I.ReturnInParentheses:
        return new bu(i.name, p, w, S, F, N, o);
      case I.SequentialIfs:
        return new Iu(i.name, p, w, S, F, N, o);
      case I.SubscriptedNonSubscriptable:
        return new yu(i.name, p, w, S, F, N, o);
      case I.TernaryReturnsBool:
        return new Fu(i.name, p, w, S, F, N, o);
      case I.TypeErrorInvalid:
        return new Nu(i.name, p, w, S, F, N, o);
      case I.TypeUnnecessary:
        return new Cu(i.name, p, w, S, F, N, o);
      case I.UndefinedVariable:
        return new Ou(i.name, p, w, S, F, N, o);
      case I.UnexpectedColon:
        return new Tu(i.name, p, w, S, F, N, o);
      case I.UnknownMethod:
        return new xu(i.name, p, w, S, F, N, o);
      case I.UnreachableExit:
        return new Mu(i.name, p, w, S, F, N, o);
      case I.UnreachableInfiniteLoop:
        return new Du(i.name, p, w, S, F, N, o);
      case I.UnusedReturn:
        return new Au(i.name, p, w, S, F, N, o);
      case I.VariableWithSameNameAsFunction:
        return new Bu(i.name, p, w, S, F, N, o);
      case I.WrongArgNumber:
        return new ku(i.name, p, w, S, F, N, o);
      default:
        return new J(i.name, p, w, S, F, N, o);
    }
  }
};
_s = new WeakSet(), Ko = function(i, e, n, s, o, a, h) {
  switch (i) {
    // Where possible, the additional info of counter symptoms should mirror the related symptoms so we can track fixes
    // NEXT: add the rule in the ast
    case B.EqualityExpression:
      return new Pu(i.name, e, n, s, o, a, h);
    case B.ValidAssignment:
      return new Vu(i.name, e, n, s, o, a, h);
    case B.StandaloneBooleanVariable:
      return new Lu(i.name, e, n, s, o, a, h);
    case B.ReturnLast:
      return new vu(i.name, e, n, s, o, a, h);
    case B.NewForLoopVar:
      return new Ru(i.name, e, n, s, o, a, h);
    case B.ValidFunctionCall:
      return new Eu(i.name, e, n, s, o, a, h);
    case B.CounterLoop:
      return new Uu(i.name, e, n, s, o, a, h);
    case B.FunctionScopeVariable:
      return new Gu(i.name, e, n, s, o, a, h);
    case B.ForLoopTargetNotModified:
      return new Ju(i.name, e, n, s, o, a, h);
    case B.NonLiteralBooleanAssigned:
      return new $u(i.name, e, n, s, o, a, h);
    case B.NonLiteralBooleanReturned:
      return new Ku(i.name, e, n, s, o, a, h);
    case B.UsedReturn:
      return new Wu(i.name, e, n, s, o, a, h);
    case B.NoReturnStandaloneCall:
      return new qu(i.name, e, n, s, o, a, h);
    case B.ReturnNoParentheses:
      return new ju(i.name, e, n, s, o, a, h);
    case B.IfElif:
      return new Hu(i.name, e, n, s, o, a, h);
    case B.LoopExitsSometimes:
      return new zu(i.name, e, n, s, o, a, h);
    default:
      return new J(i.name, e, n, s, o, a, h);
  }
}, b(At, _s), l(At, "symptoms", []), l(At, "counterSymptoms", []), l(At, "text", "");
let O = At;
var Ut, Gt, ss, is;
class pi {
  constructor() {
    /** @type {Array<Function: Symptom[]>} */
    b(this, Ut, []);
    /** @type {Array<Function: Symptom[]>} */
    b(this, Gt, []);
    // Store symptoms that indicate there might NOT be a misconception
    b(this, ss, !1);
    b(this, is, !1);
  }
  getRules() {
    return u(this, Ut);
  }
  getCounterRules() {
    return u(this, Gt);
  }
  /**
   * Runs each symptom rule function, if applicable. Any symptoms found should be added to the SymptomFinder
   */
  checkRules(i) {
    if (!u(this, ss)) {
      for (const e of u(this, Ut))
        O.symptoms.push(...e(i));
      y(this, ss, !0);
    }
  }
  /**
   * Runs each counter rule function. Any counter symtpoms found are added to the SymptomFinder
   * @param {SymptomMonitor} obj 
   */
  checkForCounterRules(i) {
    if (!u(this, is)) {
      for (const e of u(this, Gt))
        O.counterSymptoms.push(...e(i));
      y(this, is, !0);
    }
  }
  /**
   * Adds a rule function to the this object.
   * @param {Function: Symptom[]} ruleFunc A function that returns an array of Symptom objects
   */
  addRule(i) {
    u(this, Ut).push(i);
  }
  /**
   * Adds a counter rule function to this object.
   * @param {Function: Symptom[]} ruleFunc A function that returns an array of Symptom objects
   */
  addCounterRule(i) {
    u(this, Gt).push(i);
  }
  /**
   * Adds multiple rule functions to this object.
   * @param {Array<Function: Symptom[]>} rules An array of functions, each of which returns an array of Symptom objects
   */
  addRules(i) {
    u(this, Ut).push(...i);
  }
  /**
   * Adds multiple counter rule functions to this object.
   * @param {Array<Function: Symptom[]>} rules An array of functions, each of which returns an array of Symptom objects
   */
  addCounterRules(i) {
    u(this, Gt).push(...i);
  }
}
Ut = new WeakMap(), Gt = new WeakMap(), ss = new WeakMap(), is = new WeakMap();
class Hs extends pi {
  constructor() {
    super();
    // WEIRD ERROR: This variable was originally private, but the debugger seems to crash if there is a private attribute with type Set() or Map()
    l(this, "observers");
    this.observers = /* @__PURE__ */ new Set();
  }
  /**
   * Adds an observer to this object's list of observers.
   * @param {TypeChangeObserverNotifier} observer An observer of this object
   * @param {DataType} dataType The DataType of the observer
   */
  addObserver(e, n = void 0) {
    this.observers.add(e), e instanceof Hs && n !== void 0 && e.typeUpdateReceived(n);
  }
  getObservers() {
    return this.observers;
  }
  /**
   * Removes the observer if found.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
   * @param {TypeChangeObserverNotifier} observer 
   */
  removeObserver(e) {
    this.observers.delete(e);
  }
  /**
   * Notify all observers of this object's DataType
   * @param {DataType} dataType The new DataType of this object
   */
  sendUpdate(e) {
    for (let n of this.observers)
      n instanceof Hs && n.typeUpdateReceived(e);
  }
  /**
   * Handles a DataType update notification from an object this object is observing.
   * @param {DataType} dataType The new DataType of the object sending the update.
   * @abstract
   */
  typeUpdateReceived(e) {
  }
}
var Jt, Je, ht, at, ln, os, rs, Ne, Wo, Oi, qo, jo, Ho, zo, Qo;
class Po extends pi {
  /**
   * Creates a new VariableInfo object
   * @param {UsageInfo} firstUsage The first time the new variable or attribute is encountered
   * @param {Statement} containingStatement The statment that contains firstExpression
   * @param {StatementBlock} definedInBlock The Block that the containingStatement belongs to
   */
  constructor(e, n, s) {
    super();
    b(this, Ne);
    /** @type {String} */
    b(this, Jt);
    // The variable name
    /** @type {UsageInfo[]} */
    b(this, Je, []);
    /** @type {StatementBlock} */
    b(this, ht);
    /** @type {ScopeBlock} */
    b(this, at);
    /** @type {Boolean} */
    b(this, ln, !1);
    /** @type {ScopeBlock[]} */
    b(this, os, []);
    /** @type {VariableInfo[]} */
    b(this, rs, []);
    if (!e.getVariable().isOneOf([t.VariableName, t.PropertyName]))
      throw new Error("First expression of variable is not a variable.");
    y(this, Jt, e.getVariable().getTextValue()), u(this, Je).push(e);
    const o = n.getExpressions();
    o.length > 0 && o[0].is(t.FunctionDefinitionStatement) && y(this, ln, !0), y(this, ht, s), y(this, at, s.getScope()), this.addRules([m(this, Ne, Ho), m(this, Ne, qo)]), this.addCounterRules([m(this, Ne, zo), m(this, Ne, Qo)]);
  }
  /**
   * Gets the name of the variable
   * @returns {String}
   */
  getName() {
    return u(this, Jt);
  }
  /**
   * Gets the usages of the variable.
   * @returns {UsageInfo[]}
   */
  getUsages() {
    return u(this, Je);
  }
  /**
   * Adds multiple usages to the usages array
   * @param {UsageInfo[]} usages 
   */
  addUsages(e) {
    for (let n of e)
      this.addUsage(n);
  }
  insertUsages(e) {
    const n = [...u(this, Je)];
    y(this, Je, e), this.addUsages(n);
  }
  /**
   * Adds a single usage to the usages array
   * @param {UsageInfo} usage 
   */
  addUsage(e) {
    const n = e.getVariable();
    if (u(this, Je).length > 0) {
      let s = u(this, Je).length - 1, o = !1;
      const a = /* @__PURE__ */ new Set(), h = [];
      for (; s >= 0 && !o; ) {
        const p = u(this, Je)[s], w = p.getVariable();
        if (p.isInConditionalDefinition()) {
          const S = p.getBodyOfConditional();
          if (a.has(S)) {
            s--;
            continue;
          }
        }
        if (e.isInSameBlock(p) || p.isInParentBlock(e) || m(this, Ne, Wo).call(this, w, n))
          n.addLastUsage(w), o = !0;
        else if (!e.isInAlternateBranch(p) && !a.has(p.getBlock())) {
          n.addLastUsage(w);
          const S = p.getBlock();
          a.add(S), S.isBranchBlock() && S.isBranchOfConditional() && (S.getBlockEntity() === t.ElseDefinition || S.getBlockEntity() === t.ExceptDefinition ? h.push(/* @__PURE__ */ new Set([...S.getSiblingConditionalBranches()])) : S.isBranchOfExhaustiveConditional() && (o = m(this, Ne, Oi).call(this, S, e.getBlock(), h, a)));
        }
        s--;
      }
      if (!o && !n.isAssignedOrChanged()) {
        const p = new Bn("Undefined Variable", t.VariableName, c.Identifiers, -1, -1, -1);
        p.setDataType(d.Undefined), n.addLastUsage(p);
      }
    }
    n.isProxy() || u(this, Je).push(e);
  }
  checkAndAdjustUndefined() {
    const e = this.getUsages();
    e[0].getVariable().isProxy() && (e[0].getVariable().setDataType(d.Undefined), e.shift());
  }
  /**
   * Gets the statement block this variable was defined in
   * @returns {StatementBlock}
   */
  getDefinedInBlock() {
    return u(this, ht);
  }
  /**
   * Sets the block this variable was defined in
   * @param {StatementBlock} block 
   */
  setDefinedInBlock(e) {
    y(this, ht, e), e.isScopeBlock() || y(this, at, e.getScope());
  }
  /**
   * Checks if this is the same variable as the provided variable info
   * @param {VariableInfo} vInfo 
   * @returns {Boolean}
   */
  isSameVariable(e) {
    return u(this, Jt) === e.getName() && u(this, ht).getId() === e.getDefinedInBlock().getId() && u(this, at).hasChild(e.getScope() || e.getScope().hasChild(u(this, at)));
  }
  /**
   * Gets the scope of the variable
   * @returns {ScopeBlock}
   */
  getScope() {
    return u(this, at);
  }
  /**
   * Checks if the variable is a parameter
   * @returns {Boolean}
   */
  isParameter() {
    return u(this, ln);
  }
  /**
   * Gets child scope blocks that contain usages of this variable
   * @returns {ScopeBlock[]}
   */
  getChildScopesWithUsages() {
    return u(this, os);
  }
  /**
   * DROP Adds a ScopeBlock that is a child of the current scope that also uses the variable.
   * @param {ScopeBlock} scope 
   */
  addChildScopeWithUsages(e) {
    u(this, os).push(e);
  }
  /**
   * Adds a variable from a nested scope e.g. a function
   * @param {VariableInfo} vInfo 
   */
  addChildScopeVariable(e) {
    u(this, rs).push(e);
  }
  /**
   * Gets information about usages of the variable in nested scopes
   * @returns {VariableInfo[]}
   */
  getChildScopeVariables() {
    return u(this, rs);
  }
  /**
   * Creates a JSON representation of the variable.
   * @returns {Object} A JSON (or JSON-friendly) representation of the Variable.
   */
  toJSON() {
    return {
      name: u(this, Jt),
      definitionBlock: u(this, ht).getId(),
      scopeBlock: u(this, at).getId(),
      isParameter: u(this, ln),
      usages: u(this, Je).map((e) => e.toJSON())
      //.concat(childScopeUsages)
    };
  }
}
Jt = new WeakMap(), Je = new WeakMap(), ht = new WeakMap(), at = new WeakMap(), ln = new WeakMap(), os = new WeakMap(), rs = new WeakMap(), Ne = new WeakSet(), /**
 * Checks of the usages are the same attribute in the same class
 * @param {VariableExpression | PropertyExpression} usageVar1 
 * @param {VariableExpression | PropertyExpression} usageVar2 
 * @returns {boolean}
 */
Wo = function(e, n) {
  return e.is(t.VariableName) || n.is(t.VariableName) ? !1 : e.getOwnerType().name === n.getOwnerType().name;
}, /**
 * 
 * @param {BranchBlock} lastUsageBlock 
 * @param {StatementBlock} targetBlock
 * @param {Set<BranchBlock>[]} openExhaustiveConditionals 
 * @param {Set<StatementBlock} usageBlocksAdded
 * @returns {Boolean} True if
 */
Oi = function(e, n, s, o) {
  for (const a of s)
    if (a.has(e) && (a.delete(e), a.size === 0)) {
      if (e.getParentBlock().hasChild(n))
        return !0;
      o.add(e.getParentBlock());
      const h = e.getParentBlock();
      if (h.isBranchBlock()) {
        if (h.getBlockEntity() === t.ElseDefinition || h.getBlockEntity() === t.ExceptDefinition)
          s.push(/* @__PURE__ */ new Set([...h.getSiblingConditionalBranches()]));
        else if (h.isBranchOfExhaustiveConditional())
          return m(this, Ne, Oi).call(this, h, n, s, o);
      }
    }
  return !1;
}, /**
 * 
 * @param {VariableInfo} varInfo 
 * @returns {Symptom[]}
 */
qo = function(e) {
  var o;
  const n = [], s = e.getUsages();
  if (s.length === 1) {
    const h = s[0].getVariable(), p = h.getParent() && h.getParent().is(t.MethodDefinitionStatement) && h.getParent().getClassVar().getTextValue() === h.getTextValue();
    s.length === 1 && h.isAssignedOrChanged() && !p && !m(o = e, Ne, jo).call(o, h) && h.getDataType() !== d.Undefined && n.push(O.createStatementSymptom(I.UnusedVariable, [s[0].getVariable()], 0, 0));
  }
  return n;
}, /**
 * Helper method. Checks if this variable is a named argument in a function / method call.
 * @param {VariableExpression} usageVar 
 * @returns {Boolean}
 */
jo = function(e) {
  if (e.getParent() === void 0)
    return !1;
  if (e.getParent().is(t.AssignmentStatement)) {
    const n = e.getParent().getParent();
    return n === void 0 ? !1 : n.isOneOf([c.FunctionCall, c.MethodCall]);
  }
  return !1;
}, /**
 * 
 * @param {VariableInfo} varInfo 
 * @returns {Symptom[]}
 */
Ho = function(e) {
  const n = [], s = e.getUsages();
  let o;
  for (const a of s)
    if (!a.isPrecededByGlobal()) {
      o = a;
      break;
    }
  return o !== void 0 && s.length > 0 && o.getVariable().getDataType() === d.Undefined && (n.push(O.createStatementSymptom(I.UndefinedVariable, [o.getVariable()], 0, 0, {
    variable: e
  })), Ze(o.getVariable().getTextValue()).category === c.BuiltInFunctions && n.push(O.createStatementSymptom(
    I.VariableWithSameNameAsFunction,
    [o.getVariable()],
    0,
    0,
    {
      funcType: Kn,
      varIsParameter: o.getVariable().isParameter()
    }
  ))), n;
}, /**
 * 
 * @param {VariableInfo} varInfo 
 * @returns {Symptom[]}
 */
zo = function(e) {
  const n = [], s = e.getUsages();
  let o;
  for (const a of s)
    if (!a.isPrecededByGlobal()) {
      o = a;
      break;
    }
  return o !== void 0 && s.length > 0 && (e.getScope().getBlockEntity() === t.FunctionDefinition ? n.push(O.createStatementSymptom(B.FunctionScopeVariable, [o.getVariable()], 0, 0, {
    isParameter: e.isParameter(),
    definedInScope: e.getScope().getId()
  })) : e.getScope().getBlockEntity() === t.DocumentDefinition && o.getVariable().getDataType() !== d.Undefined && n.push(O.createStatementSymptom(B.ValidGlobalVariable, [o.getVariable()], 0, 0))), n;
}, /**
 * 
 * @param {VariableInfo} varInfo 
 * @returns {Symptom[]}
 */
Qo = function(e) {
  const n = [], s = e.getUsages();
  return e.isParameter() && s.length > 1 && !s[1].getVariable().isAssignedOrChanged() && n.push(O.createStatementSymptom(B.ParameterCalled, [s[1].getVariable()], 0, 0)), n;
};
var ft, Be, cn, as, Ot, Xo, $s;
class Vo {
  /**
   * 
   * @param {VariableExpression} varExpression 
   * @param {StatementBlock} block 
   */
  constructor(i, e, n = !1) {
    b(this, Ot);
    /** @type {VariableExpression} */
    b(this, ft);
    /** @type {StatementBlock} */
    b(this, Be);
    /** @type {Boolean} */
    b(this, cn, !1);
    /** @type {Boolean} */
    b(this, as);
    y(this, ft, i), y(this, as, n);
    const s = e.getStatements();
    e.isBranchBlock() && e.getBlockEntity() !== t.ForDefinition && e.getBlockEntity() !== t.WhileDefinition && s.length > 0 ? s[0].getDefinitionStatement().containsExpression(i) ? (y(this, Be, e.getParentBlock()), y(this, cn, !0)) : y(this, Be, e) : (y(this, Be, e), s.length > 0 && s[s.length - 1].isBlockStatement() && s[s.length - 1].containsExpression(i) && y(this, cn, !0));
  }
  getVariable() {
    return u(this, ft);
  }
  getBlock() {
    return u(this, Be);
  }
  isInConditionalDefinition() {
    return u(this, cn);
  }
  getBodyOfConditional() {
    const i = u(this, Be).getChildBlocks(), e = this.getVariable().getStartLineNumber();
    for (const n of i)
      if (n.isBranchBlock() && n.isBranchOfConditional() && n.getStatements()[0].getLineNumbers().has(e))
        return n;
    return u(this, Be);
  }
  /**
   * Checks if this usage is in the same block as another usage.
   * @param {UsageInfo} otherUsageInfo 
   * @returns {Boolean}
   */
  isInSameBlock(i) {
    return u(this, Be) === i.getBlock();
  }
  /**
   * Checks if this usage is in a block that is a parent of the block containing
   * other usage. If the usages are in the same block, this method will return false.
   * @param {UsageInfo} otherUsageInfo 
   * @returns {Boolean} 
   */
  isInParentBlock(i) {
    return !this.isInSameBlock(i) && u(this, Be).hasChild(i.getBlock());
  }
  /**
   * Checks if this usage is in an alternate branch to the other usage i.e. only one
   * of the two usages can execute.
   * @param {UsageInfo} otherUsageInfo 
   * @returns 
   */
  isInAlternateBranch(i) {
    if (u(this, Be).getBlockEntity() === t.ExceptDefinition && i.getBlock().getBlockEntity() === t.TryDefinition && u(this, Be).getParentBlock() === i.getBlock().getParentBlock())
      return !1;
    const e = this.isInConditionalDefinition(), n = i.isInConditionalDefinition();
    let s = u(this, Be);
    e && !n && (s = this.getBodyOfConditional());
    let o = m(this, Ot, $s).call(this, s);
    const a = m(this, Ot, $s).call(this, i.getBlock());
    return o !== void 0 && a !== void 0 ? m(this, Ot, Xo).call(this, o, a, i.getBlock()) : o !== void 0 && a === void 0 || o === void 0 && a !== void 0 ? !1 : !s.hasChild(i.getBlock()) && !i.getBlock().hasChild(s);
  }
  isPrecededByGlobal() {
    return u(this, as);
  }
  /**
   * Gets a JSON representation of this UsageInfo.
   * @returns {Object} Returns a JSON (or JSON-friendly) object that represents this VariableUsage.
   */
  toJSON() {
    return {
      line: u(this, ft).getStartLineNumber(),
      docIndex: u(this, ft).getDocumentStartIndex(),
      type: u(this, ft).getDataType().name
    };
  }
}
ft = new WeakMap(), Be = new WeakMap(), cn = new WeakMap(), as = new WeakMap(), Ot = new WeakSet(), Xo = function(i, e, n) {
  for (; i !== void 0 && e !== void 0 && i !== e; ) {
    const s = i.getSiblingConditionalBranches();
    for (let o of s)
      if (o.hasChild(n))
        return !0;
    i = m(this, Ot, $s).call(this, i.getParentBlock());
  }
  return !1;
}, /**
 * 
 * @param {StatementBlock | undefined} block 
 * @returns {BranchBlock | undefined}
 */
$s = function(i) {
  return i !== void 0 && i.isBranchBlock() && i.isBranchOfConditional() ? i : i.getNearestParentOfAny([t.IfDefinition, t.ElifDefinition, t.ElseDefinition]);
};
var ls, cs, un, lt, $t;
class Qu {
  // Flag that indicates if all module identifiers were directly imported using *
  /**
   * Creates a new Module
   * @param {String} name The original name of the module.
   * @param {ExpressionEntity} entity The ExpressionEntity that describes the module
   * @param {String} alias The alias given to the module at import, if applicable.
   */
  constructor(i, e, n = i) {
    /** @type {String} */
    b(this, ls);
    // The original module name e.g. math
    /** @type {ExpressionEntity} */
    b(this, cs);
    // The expression entity of the module e.g. if it is a known module, it will be ExpressionEntity.MathModule
    /** @type {String} */
    b(this, un);
    // The local name given to the module e.g. import math as m > alias = m
    /** @type {Map<String, Object>}*/
    b(this, lt);
    // An map of objects returned by the directImport function. The key is the identifier
    /** @type {boolean} */
    b(this, $t);
    y(this, ls, i), y(this, cs, e), y(this, un, n), y(this, lt, /* @__PURE__ */ new Map()), y(this, $t, !1);
  }
  /**
   * Gets the module's original name.
   * @returns {String} The module name.
   */
  getName() {
    return u(this, ls);
  }
  /**
   * Gets the module's ExpressionEntity.
   * @returns {ExpressionEntity} The ExpressionEntity that describes the module.
   */
  getEntity() {
    return u(this, cs);
  }
  /**
   * Gets the module alias.
   * @returns {String} Gets the module alias, which may be the same as the name.
   */
  getAlias() {
    return u(this, un);
  }
  /**
   * Sets the module alias.
   * @param {String} alias The new alias of the module.
   */
  setAlias(i) {
    y(this, un, i);
  }
  /**
   * Adds a direct import.
   * @param {String} name The name of the direct import
   * @param {Object} directImport An object representing the import.
   */
  addDirectImport(i, e) {
    u(this, lt).set(i, e);
  }
  /**
   * Checks if the module has a direct import by the given name.
   * @param {String} name The name to look for
   * @returns {Boolean} True if the module has a matching direct import, false others.
   */
  hasDirectImport(i) {
    return u(this, lt).has(i);
  }
  /**
   * Gets the direct import with the given name
   * @param {String} name The name of the import.
   * @returns {Object | undefined} The object associated with the name, or undefined if the name does not exist.
   */
  getDirectImport(i) {
    return u(this, lt).get(i);
  }
  /**
   * Gets the direct imports for this module
   * @returns {Map<String, Object>}
   */
  getDirectImports() {
    return u(this, lt);
  }
  /**
   * Sets the importAll flag.
   */
  setImportAll() {
    y(this, $t, !0);
  }
  /**
   * Checks if all identifiers of the module were imported.
   * @returns {Boolean} True if the import all asterisk was used, false otherwise.
   */
  didImportAll() {
    return u(this, $t);
  }
  /**
   * Checks if the module has at least one direct import.
   * @returns {Boolean} True if the module has direct imports, false otherwise.
   */
  hasDirectImports() {
    return u(this, $t) || u(this, lt).size > 0;
  }
}
ls = new WeakMap(), cs = new WeakMap(), un = new WeakMap(), lt = new WeakMap(), $t = new WeakMap();
const Xu = (g, i) => ({
  entity: g,
  category: i
});
var dn, gt, pt;
class Zo {
  constructor(i) {
    /** @type {String} */
    b(this, dn);
    /** @type {Number} */
    b(this, gt, 0);
    /** @type {Number} */
    b(this, pt, 0);
    y(this, dn, i);
    for (let e = 0; e < i.length; e++)
      i.charAt(e) === "	" ? Gs(this, pt)._++ : Gs(this, gt)._++;
  }
  /**
   * Gets the raw text of the indentation
   * @returns {String}
   */
  getText() {
    return u(this, dn);
  }
  /**
   * Gets the number of spaces in the indentation
   * @returns {Number}
   */
  getSpaceCount() {
    return u(this, gt);
  }
  /**
   * Gets the number of tabs in the indentation
   * @returns {Number}
   */
  getTabCount() {
    return u(this, pt);
  }
  /**
   * Checks whether this indentation is empty (length of 0)
   * @returns {Boolean}
   */
  noIndentation() {
    return u(this, dn).length === 0;
  }
  /**
   * Checks whether this indentation is made up of only spaces.
   * @returns {Boolean}
   */
  isAllSpaces() {
    return u(this, gt) > 0 && u(this, pt) === 0;
  }
  /**
   * Checks whether this indentation is made up of only tabs.
   * @returns {Boolean}
   */
  isAllTabs() {
    return u(this, pt) > 0 && u(this, gt) === 0;
  }
  /**
   * Checks whether this indentation mixes tabs and spaces
   * @returns {Boolean}
   */
  isMixed() {
    return u(this, pt) > 0 && u(this, gt) > 0;
  }
}
dn = new WeakMap(), gt = new WeakMap(), pt = new WeakMap();
var $e, mt, de, us, Y, $, _o, er, tr, nr, sr, ir, Ti, xi, Mi, Di, or, Ai, Bi, ki, qn;
class Yo extends pi {
  /**
   * Creates a new StatementBlock representing a block of Python code
   * @param {ExpressionEntity} blockEntity The entity that defines this block e.g. document, if, for
   * @param {Block} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Number} indentation The size of the indentation of the definition line, in spaces
   */
  constructor(e = t.DocumentDefinition, n = void 0, s = 0) {
    super();
    b(this, $);
    /** @type {ExpressionEntity} */
    b(this, $e);
    // The ExpressionEntity that represents the type of Block e.g. a function defintion
    /** @type {StatementBlock | undefined} */
    b(this, mt);
    // The parent of the current Block. This will either be another Block or undefined if this is the document root.
    /** @type {StatementBlock[]} */
    b(this, de);
    // A list of child blocks. This list only includes immediate children. Nested children will be stored as the children of the relevant child node.
    /** @type {Number}  */
    b(this, us);
    // The number of spaces of indentation of the first line in the Block (the definition line in most cases).
    /** @type {Statement[]} */
    b(this, Y);
    y(this, $e, e), y(this, mt, n), y(this, de, []), y(this, us, s), y(this, Y, []), this.addRules([
      m(this, $, or),
      m(this, $, sr),
      m(this, $, nr),
      m(this, $, _o)
    ]), this.addCounterRules([m(this, $, er), m(this, $, ir)]);
  }
  /**
   * Get the entity of this block.
   * @returns {ExpressionEntity} The ExpressionEntity that describes the type of this Block.
   */
  getBlockEntity() {
    return u(this, $e);
  }
  /**
   * Gets the ID of the Block, a unique String made up of the document starting line of the block and
   * the expression entity
   * @returns {String} A unique String identifier for this Block.
   */
  getId() {
    return `${u(this, $e) === t.DocumentDefinition ? 0 : u(this, Y).length > 0 ? u(this, Y)[0].getFirstLineNumber() : -1}-${u(this, $e).name}`;
  }
  /**
   * Gets the parent block of this Block.
   * @returns {StatementBlock | undefined} Either the Block that is the parent node of this one or undefined if this is the root Block representing the whole document.
   */
  getParentBlock() {
    return u(this, mt);
  }
  /**
   * Sets the parent block of the current block. Should only be used internally by the addChildBlock method.
   * @param {StatementBlock | undefined} block The new parent Block of this Block, or undefined if it is the root Block.
   */
  setParentBlock(e) {
    y(this, mt, e);
  }
  getRootBlock() {
    return u(this, mt) === void 0 ? this : u(this, mt).getRootBlock();
  }
  /**
   * Gets this Block's children.
   * @returns {StatementBlock[]} An array of containing all immediate children of this Block
   */
  getChildBlocks() {
    return u(this, de);
  }
  /**
   * Gets all child blocks (including this block) that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {StatementBlock[]}
   */
  getChildBlocksOfKind(e) {
    let n = [];
    for (const s of u(this, de))
      n = n.concat(s.getChildBlocksOfKind(e));
    return u(this, $e) === e && n.push(this), n;
  }
  /**
   * Adds a Block to this Block's children.
   * @param {StatementBlock} block The Block to add.
   */
  addChildBlock(e) {
    u(this, de).push(e), e.setParentBlock(this);
  }
  /**
   * Checks if this block is the child of a particular type of parent block
   * @param {ExpressionEntity} entity 
   * @returns {Boolean} True if any parent block is the given entity
   */
  hasParentOfEntity(e) {
    return this.stepsToParentBlockOfEntity(e) >= 0;
  }
  /**
   * Gets the number of steps from this Block to the nearest parent with the given entity. If this block
   * has the given entity, the number of steps is 0. The immediate parent is 1 step. If no method has the
   * given entity, this method returns -1.
   * @param {ExpressionEntity} entity 
   * @returns {Number} The number of steps from this Block to the nearest parent with the given entity.
   */
  stepsToParentBlockOfEntity(e) {
    if (u(this, $e) === e) return 0;
    let n = this.getParentBlock(), s = 1;
    for (; n !== void 0; ) {
      if (n.getBlockEntity() === e) return s;
      n = n.getParentBlock(), s++;
    }
    return -1;
  }
  /**
   * Gets the nearest parent Block that has any of the given ExpressionEntities. This Block will be 
   * returned if it matches any of the entities. If no matching parent is found, the return is
   * undefined.
   * @param {ExpressionEntity[]} entities 
   * @returns {StatementBlock | undefined} The nearest matching parent Block or undefined if no match is found.
   */
  getNearestParentOfAny(e) {
    if (e.includes(u(this, $e))) return this;
    let n = this.getParentBlock();
    for (; n !== void 0; ) {
      if (e.includes(n.getBlockEntity())) return n;
      n = n.getParentBlock();
    }
  }
  /**
   * Finds the parent of this block that is an immediate child of parent block i.e. 
   * parent block and the returned block have the same parent
   * @param {StatementBlock | undefined} parentBlock 
   * @returns {StatementBlock | undefined}
   */
  getNearestParentChildOf(e) {
    if (this === e || !e.hasChild(this))
      return;
    let n = this.getParentBlock();
    for (; n !== void 0 && n.getParentBlock() !== e; )
      n = n.getParentBlock();
    return n;
  }
  /**
   * Gets the indentation of this block, determined by the definition line.
   * @returns {Number} The indentation of the block definition line (number of spaces)
   */
  getIndentation() {
    return u(this, us);
  }
  /**
   * Gets the start line number of the block.
   * @returns {Number} The zero-based document line number of the Block definition.
   */
  getStartLine() {
    return u(this, $e) === t.DocumentDefinition ? 0 : u(this, Y).length > 0 ? u(this, Y)[0].getFirstLineNumber() : -1;
  }
  /**
   * Checks whether this is a scope block
   * @returns {Boolean}
   */
  isScopeBlock() {
    return !1;
  }
  /**
   * Checks whether this is a branch block
   * @returns {Boolean}
   */
  isBranchBlock() {
    return !1;
  }
  /**
   * Gets the scope of this block of code. NOTE: Classes are not currently supported.
   * @returns {ScopeBlock} If this block is a document or function defintion, return this 
   * block. Otherwise, search the parent block to find the nearest parent function or document. 
   * @throws Throws an error if no scope is found
   */
  getScope() {
    if (this.isScopeBlock())
      return this;
    let e = this.getParentBlock();
    for (; e !== void 0 && !e.isScopeBlock(); )
      e = e.getParentBlock();
    if (e !== void 0) return e;
    throw new Error("Could not find a scope block...block structure must be incorrect");
  }
  /**
   * Adds a statement to the block
   * @param {Statement} statement 
   */
  addStatement(e) {
    u(this, Y).push(e);
    for (const n of e.getExpressions())
      n.setBlockId(this.getId()), n.setScopeId(this.getScope().getId());
    H.makeGraphConnections(u(this, Y));
  }
  /**
   * Gets the last statement in the block
   * @returns {Statement}
   * @throws Throws an error if the block has no statements.
   */
  getLastStatement() {
    if (u(this, Y).length === 0)
      throw new Error("No statements in the block. Could not get the last statement.");
    return u(this, Y)[u(this, Y).length - 1];
  }
  /**
   * Replaces the last statement in the block with the new statement
   * @param {Statement} statement 
   * @throws Throws an error if there are no statements in the block.
   */
  replaceLastStatement(e) {
    if (u(this, Y).length === 0)
      throw new Error("No statements in block. Cannot replace last statement.");
    u(this, Y)[u(this, Y).length - 1] = e;
  }
  /**
   * When the last statement is a BlockStatement, adds the statement to the BlockStatement
   * @param {Statement} statement 
   * @throws Throws an error if the last statement is not a BlockStatement
   */
  updateLastStatement(e) {
    const n = this.getLastStatement();
    if (!n.isBlockStatement())
      throw new Error("The last statement is not a block statement.");
    for (const s of e.getExpressions())
      s.setBlockId(this.getId()), s.setScopeId(this.getScope().getId());
    n.addStatement(e);
  }
  /**
   * Gets the Statements in this block. Will not include statements in scoped children but will
   * include statements in child branches.
   * @returns {Statement[]}
   */
  getStatements() {
    return u(this, Y);
  }
  /**
   * Tests if this block is the same as or a parent of childBlock.
   * @param {StatementBlock} childBlock A Block to check
   * @returns {Boolean} Returns true if this Block is the same as or a parent of childBlock
   */
  hasChild(e) {
    if (this === e) return !0;
    {
      let n = e.getParentBlock();
      for (; n !== void 0; ) {
        if (n === this)
          return !0;
        n = n.getParentBlock();
      }
      return !1;
    }
  }
  /**
   * Searches this block and its children for the given line number. If the line number is
   * in the block, the most specific block is returned. If the line number is not in the
   * block, return undefined.
   * @param {Number} lineNum The document line number to search for
   * @returns {StatementBlock | undefined}
   */
  getBlockContainingLineNumber(e) {
    if (u(this, Y).length === 0 && console.log("stop"), !(u(this, Y)[0].getFirstLineNumber() > e || this.getLastStatement().getLastLineNumber() < e)) {
      for (let n of u(this, de))
        if (n.getBlockContainingLineNumber() !== void 0)
          return n;
      return this;
    }
  }
  /**
   * Gets the last statement to be executed in a block. This will either be a return,
   * a break, or the last statement if the block has no exit. Blocks with multiple 
   * branches will have multiple last statements, hence the return type of array.
   * @returns {Statement[]}
   */
  getLastExecutedStatements() {
    let e = [];
    for (let n of u(this, de))
      n.isScopeBlock() || (e = e.concat(n.getLastExecutedStatements()));
    for (let n = 0; n < u(this, Y).length; n++)
      if (!u(this, Y)[n].isBlockStatement()) {
        if (n === u(this, Y).length - 1)
          e.push(u(this, Y)[n]);
        else if (!u(this, Y)[n].isBlank() && u(this, Y)[n].getFirstExpression().isOneOf([t.ReturnStatement, t.BreakKeyword])) {
          e.push(u(this, Y)[n]);
          break;
        }
      }
    return e;
  }
  /**
   * Checks whether this block always returns a value.
   * @returns {Boolean} True if there is a return statement in every possible branch, false otherwise
   */
  alwaysReturnsAValue() {
    if (u(this, $e) === t.DocumentDefinition)
      return !1;
    if (u(this, de).length === 0) {
      const e = this.getLastExecutedStatements();
      return e.length === 1 && !e[0].isBlank() && e[0].getFirstExpression().is(t.ReturnStatement);
    } else {
      if (this.hasTopLevelReturn())
        return !0;
      let e = !1, n = u(this, de).length - 1;
      for (; n >= 0; ) {
        if (u(this, de)[n].getBlockEntity() === t.ElseDefinition && u(this, de)[n].alwaysReturnsAValue())
          e = !0;
        else if (e && u(this, de)[n].getBlockEntity() === t.ElifDefinition && u(this, de)[n].alwaysReturnsAValue())
          e = !0;
        else {
          if (e && u(this, de)[n].getBlockEntity() === t.IfDefinition && u(this, de)[n].alwaysReturnsAValue())
            return !0;
          e = !1;
        }
        n--;
      }
      return !1;
    }
  }
  /**
   * Checks if this block has a top level (not in a child block) return statement
   * @returns {Boolean}
   */
  hasTopLevelReturn() {
    for (let e of u(this, Y))
      if (!e.isBlockStatement() && !e.isBlank() && e.getFirstExpression().is(t.ReturnStatement))
        return !0;
    return !1;
  }
  /**
   * 
   * @param {StatementBlock} block 
   */
  checkRules(e) {
    super.checkRules(e);
    for (const n of e.getChildBlocks())
      n.checkRules(n);
  }
  checkForCounterRules(e) {
    super.checkForCounterRules(e);
    for (const n of e.getChildBlocks())
      n.checkForCounterRules(n);
  }
  /**
   * Creates a JSON representation of this Block.
   * @returns {Object} A JSON representation of this Block, including the unique block ID, the start line and the array of child blocks.
   */
  toJSON() {
    return {
      id: this.getId(),
      startLine: this.getStartLine(),
      children: u(this, de).map((e) => e.toJSON())
    };
  }
  /**
   * Creates an AST representation of this Block.
   * @returns {Object} A JSON representation of this Block's AST.
   */
  toTree() {
    return {
      id: this.getId(),
      statements: u(this, Y).map((e) => e.toJSON()),
      children: u(this, de).map((e) => e.toTree())
    };
  }
  /**
   * Factory method to create an appropriate block type based on the entity.
   * @param {ExpressionEntity} blockEntity Optional. DocumentDefinition by default.
   * @param {StatementBlock | undefined} parentBlock Optional. undefined by default.
   * @param {Number} indentation Optional. 0 by default.
   * @returns {StatementBlock} A new block
   * @throws Throws an error if an appropriate block type could not be found.
   */
  static blockFactory(e = t.DocumentDefinition, n = void 0, s = 0) {
    switch (e) {
      case t.DocumentDefinition:
      case t.FunctionDefinition:
      case t.ClassDefinition:
      case t.ListComprehension:
        return new Es(e, n, s);
      default:
        return new ar(e, n, s);
    }
  }
}
$e = new WeakMap(), mt = new WeakMap(), de = new WeakMap(), us = new WeakMap(), Y = new WeakMap(), $ = new WeakSet(), /**
 * Rule finder.
 * @param {StatementBlock} block 
 * @returns {Symptom[]}
 */
_o = function(e) {
  var o;
  const n = [];
  let s = e.getStatements();
  s.length === 1 && s[0].isBlockStatement() && (s = s[0].getStatements().slice(1));
  for (let a = 0; a < s.length; a++) {
    const h = s[a].getFirstExpression();
    if (h.is(t.WhileDefinitionStatement) && m(o = e, $, tr).call(o, s[a])) {
      const p = s[a].getDefinitionStatement().getFirstExpression();
      if (n.push(O.createStatementSymptom(I.InfiniteLoop, [p], 0, 0)), a < s.length - 1) {
        const w = Wn(s.slice(a + 1));
        n.push(O.createStatementSymptom(I.UnreachableInfiniteLoop, w, 0, w.length - 1, {
          infiniteLoopLine: h.getStartLineNumber()
        }));
      }
    }
    if (Pt(h) && a < s.length - 1) {
      const p = s.slice(a + 1), w = Wn(p), S = h.getFirstExpressionOf([t.ReturnKeyword, t.BreakKeyword, t.ExitFunction, t.SysExit, t.QuitFunction]), F = e.getScope();
      n.push(O.createStatementSymptom(I.UnreachableExit, w, 0, w.length - 1, {
        exitKeyword: S !== void 0 ? S.getTextValue() : "undefined",
        functionBlock: F !== void 0 ? F.getId() : "undefined"
      }));
    }
  }
  return n;
}, er = function(e) {
  const n = [];
  let s = e.getStatements();
  s.length === 1 && s[0].isBlockStatement() && (s = s[0].getStatements().slice(1));
  for (let o = 0; o < s.length; o++) {
    const a = s[o].getFirstExpression(), h = s[o].getExpressions();
    if (Pt(a) && o === s.length - 1) {
      const p = a.getFirstExpressionOf([t.ReturnKeyword, t.BreakKeyword, t.ExitFunction, t.SysExit, t.QuitFunction]), w = e.getScope();
      p.getTextValue() === "return" && n.push(O.createStatementSymptom(B.ReturnLast, h, 0, h.length - 1, {
        functionBlock: w !== void 0 ? w.getId() : "undefined"
      }));
    }
  }
  return n;
}, /**
 * Rule function helper. If the block is a while loop, checks if it is infinite
 * @param {BlockStatement} statement 
 * @returns {Boolean}
 */
tr = function(e) {
  const o = e.getDefinitionStatement().getFirstExpression().getVariableExpressions();
  for (const a of e.getStatements()) {
    const h = a.getExpressions();
    for (const p of h) {
      if (Pt(p))
        return !1;
      const w = p.getVariableExpressions().filter((F) => F.isAssignedOrChanged()), S = new Set(w.map((F) => F.getTextValue()));
      for (const F of o)
        if (S.has(F.getTextValue()))
          return !1;
    }
  }
  return !0;
}, /**
 * Rule finder.
 * @param {StatementBlock} block 
 * @returns {Symptom[]}
 */
nr = function(e) {
  const n = [];
  for (const s of e.getChildBlocks())
    if (s.getBlockEntity() === t.IfDefinition && s.isBranchOfExhaustiveConditional() && s.hasTopLevelExit()) {
      const o = s.getSiblingConditionalBranches();
      let a = !0, h = -1;
      for (const p of o) {
        if (!p.hasTopLevelExit()) {
          a = !1;
          break;
        }
        p.getBlockEntity() === t.ElseDefinition && (h = p.getStartLine());
      }
      if (a && h > 0) {
        const p = e.getStatements().filter((w) => w.getFirstLineNumber() > h);
        if (p.length > 0) {
          const w = Wn(p);
          n.push(O.createStatementSymptom(I.UnreachableExhaustiveConditional, w, 0, w.length - 1));
        }
      }
    }
  return n;
}, /**
 * Rule finder.
 * @param {StatementBlock} block 
 * @returns {Symptom[]}
 */
sr = function(e) {
  var a, h, p, w;
  const n = [];
  let s = e.getStatements();
  s.length === 1 && s[0].isBlockStatement() && (s = s[0].getStatements().slice(1));
  let o = [];
  for (let S = 0; S < s.length - 1; S++) {
    const F = s[S].getFirstExpression(), N = s[S + 1].getFirstExpression();
    if (F.is(t.IfDefinitionStatement) && N.is(t.IfDefinitionStatement) && !m(a = e, $, xi).call(a, s[S]) && !m(h = e, $, xi).call(h, s[S + 1]))
      o.length === 0 && o.push(s[S]), o.push(s[S + 1]);
    else if (o.length > 0) {
      const L = m(p = e, $, Mi).call(p, o);
      L !== void 0 && n.push(L), o = [];
    }
  }
  if (o.length > 0) {
    const S = m(w = e, $, Mi).call(w, o);
    S !== void 0 && n.push(S);
  }
  return n;
}, /**
 * Counter rule finder.
 * @param {StatementBlock} block 
 * @returns {Symptom[]}
 */
ir = function(e) {
  var a, h;
  const n = [];
  let s = e.getStatements();
  s.length === 1 && s[0].isBlockStatement() && (s = s[0].getStatements().slice(1));
  let o = [];
  for (let p = 0; p < s.length - 1; p++) {
    const w = s[p].getFirstExpression(), S = s[p + 1].getFirstExpression();
    if (w.isOneOf([t.IfDefinitionStatement, t.ElifDefinitionStatement]) && S.isOneOf([t.ElifDefinitionStatement, t.ElseDefinitionStatement]))
      o.length === 0 && o.push(s[p]), o.push(s[p + 1]);
    else if (o.length > 0) {
      const F = m(a = e, $, Ti).call(a, o);
      F !== void 0 && n.push(F), o = [];
    }
  }
  if (o.length > 0) {
    const p = m(h = e, $, Ti).call(h, o);
    p !== void 0 && n.push(p);
  }
  return n;
}, /**
 * 
 * @param {Statement[]} sequence 
 * @returns {Symptom | undefined}
 */
Ti = function(e) {
  if (e.length === 0) return;
  const n = Wn(e);
  return O.createStatementSymptom(B.IfElif, n, 0, n.length - 1, {
    //branchMatches
    branches: e.map((s) => ({
      lineNumber: s.getFirstExpression().getStartLineNumber(),
      docIndex: s.getFirstExpression().getDocumentStartIndex(),
      text: s.getFirstExpression().getTextValue()
    }))
  });
}, /**
 * Helper method. Checks if the statement contains a top level exit statement
 * @param {BlockStatement} statement 
 * @returns {Boolean}
 */
xi = function(e) {
  const n = e.getStatements().slice(1);
  for (const s of n)
    if (!s.isBlockStatement() && Pt(s.getFirstExpression()))
      return !0;
  return !1;
}, /**
 * 
 * @param {Statement[]} sequence 
 * @returns {Symptom | undefined}
 */
Mi = function(e) {
  if (e.length === 0) return;
  const n = [];
  let s = [];
  for (let a = 0; a < e.length - 1; a++) {
    let h = e[a].getFirstExpression().getCondition();
    h = h.length === 1 && h[0].is(t.GroupStatement) ? h[0].getContents() : h;
    let p = e[a + 1].getFirstExpression().getCondition();
    p = p.length === 1 && p[0].is(t.GroupStatement) ? p[0].getContents() : p, m(this, $, Di).call(this, h, p) && m(this, $, Di).call(this, p, h) ? ((s.length === 0 || s[s.length - 1].docIndex !== e[a].getFirstExpression().getDocumentStartIndex()) && s.push({
      lineNum: e[a].getFirstExpression().getStartLineNumber(),
      docIndex: e[a].getFirstExpression().getDocumentStartIndex()
    }), s.push({
      lineNum: e[a + 1].getFirstExpression().getStartLineNumber(),
      docIndex: e[a + 1].getFirstExpression().getDocumentStartIndex()
    })) : s.length > 0 && (n.push(s), s = []);
  }
  s.length > 0 && (n.push(s), s = []);
  const o = Wn(e);
  return O.createStatementSymptom(I.SequentialIfs, o, 0, o.length - 1, {
    branchMatches: n
  });
}, /**
 * Helper method. Compares the conditions of two if statements to check if they "match".
 * @param {ExpressionNode[]} condition1 
 * @param {ExpressionNode[]} condition2
 * @returns {Boolean} 
 */
Di = function(e, n) {
  if (e.length !== n.length)
    return !1;
  for (const s of e) {
    let o = !1;
    for (const a of n)
      if (s.matchesPattern(a)) {
        o = !0;
        break;
      }
    if (!o)
      return !1;
  }
  return !0;
}, /**
 * Rule finder.
 * @param {StatementBlock} block 
 * @returns {Symptom[]}
 */
or = function(e) {
  var a, h, p, w;
  const n = (S) => {
    try {
      const N = S.getFirstExpression().getCondition();
      if (N.length > 0)
        return N.map((L) => L.getTextValue()).join(" ");
    } catch {
      return "";
    }
  }, s = [];
  let o = e.getStatements();
  o.length === 1 && o[0].isBlockStatement() && o[0].getFirstExpression().getBlockId() === e.getId() && (o = o[0].getStatements().slice(1));
  for (let S = 0; S < o.length - 1; S++) {
    let F = {};
    const N = o[S].getFirstExpression(), L = o[S + 1].getFirstExpression();
    if (N.is(t.IfDefinitionStatement)) {
      const U = o[S].getStatements();
      if (L.is(t.ElseDefinitionStatement)) {
        const x = o[S + 1].getStatements();
        if (U.length === 2 && x.length === 2 && m(a = e, $, Bi).call(a, U[1], x[1])) {
          const ot = n(U[0]);
          F = {
            form: Ni,
            condition: ot
          };
        } else if (U.length === 2 && x.length === 2 && m(h = e, $, Ai).call(h, U[1], x[1])) {
          const ot = n(U[0]);
          F = {
            form: Ci,
            variableAssigned: U[1].getFirstExpression().getTargetVariables()[0].getTextValue(),
            condition: ot
          };
        }
      } else if (U.length === 2 && m(p = e, $, Bi).call(p, U[1], o[S + 1])) {
        const x = n(U[0]);
        F = {
          form: Ni,
          condition: x
        };
      } else if (U.length === 2 && m(w = e, $, Ai).call(w, U[1], o[S + 1])) {
        const x = n(U[0]);
        F = {
          form: Ci,
          variableAssigned: U[1].getFirstExpression().getTargetVariables()[0].getTextValue(),
          condition: x
        };
      }
      if (F.hasOwnProperty("form")) {
        const x = [...o[S].getExpressions(), ...o[S + 1].getExpressions()];
        s.push(O.createStatementSymptom(I.OneLineConditional, x, 0, x.length - 1, F));
      }
    }
  }
  return s;
}, /**
 * Helper method. Compares two statements to see if they have the form var = True and var = False
 * @param {Statement} firstEnd 
 * @param {Statement} secondEnd 
 * @returns {Boolean}
 */
Ai = function(e, n) {
  const s = e.getFirstExpression(), o = n.getFirstExpression();
  if (s.getDataType() === d.Bool && o.getDataType() === d.Bool && s.is(t.AssignmentStatement) && o.is(t.AssignmentStatement)) {
    const a = m(this, $, qn).call(this, s.getAssignedValues()), h = m(this, $, qn).call(this, o.getAssignedValues()), p = s.getTargetVariables(), w = o.getTargetVariables();
    return a.length !== 1 || h.length !== 1 || p.length !== 1 || w.length !== 1 ? !1 : p[0].getTextValue() === w[0].getTextValue() && m(this, $, ki).call(this, a[0], h[0]);
  }
  return !1;
}, /**
 * Helper method. Compares two statements to see if they have the form return True and return False
 * @param {Statement} firstEnd 
 * @param {Statement} secondEnd 
 * @returns {Boolean}
 */
Bi = function(e, n) {
  const s = e.getFirstExpression(), o = n.getFirstExpression();
  if (s.getDataType() === d.Bool && o.getDataType() === d.Bool && s.is(t.ReturnStatement) && o.is(t.ReturnStatement)) {
    const a = m(this, $, qn).call(this, s.getReturnedValue()), h = m(this, $, qn).call(this, o.getReturnedValue());
    return a.length !== 1 || h.length !== 1 ? !1 : m(this, $, ki).call(this, a[0], h[0]);
  }
  return !1;
}, /**
 * 
 * @param {ExpressionNode} firstValue 
 * @param {ExpressionNode} secondValue 
 * @returns {Boolean}
 */
ki = function(e, n) {
  return e.is(t.TrueType) && n.is(t.FalseType) || e.is(t.FalseType) && n.is(t.TrueType);
}, /**
 * 
 * @param {ExpressionNode[]} expressions 
 * @returns {ExpressionNode[]}
 */
qn = function(e) {
  return e.length !== 1 ? e : e[0].is(t.GroupStatement) ? e[0].getContents() : e;
};
var go, po;
class Es extends Yo {
  // The number of the indentCharacter that make up one level of indentation
  /**
   * Creates a new StatementBlock representing a block of Python code
   * @param {ExpressionEntity} blockEntity The entity that defines this block e.g. document, if, for
   * @param {Block} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Number} indentation The size of the indentation of the definition line, in spaces
   */
  constructor(e = t.DocumentDefinition, n = void 0, s = 0) {
    if (e !== t.DocumentDefinition && e !== t.FunctionDefinition && e !== t.ClassDefinition && e !== t.ListComprehension)
      throw new Error(`${e.name} is not a scope block`);
    super(e, n, s);
    /** @type {Map<String, VariableInfo>} */
    l(this, "variableMap", /* @__PURE__ */ new Map());
    /** @type {Set<String>} */
    l(this, "globalVars", /* @__PURE__ */ new Set());
    /** @type {Map<String, ModuleInfo>} */
    l(this, "moduleMap", /* @__PURE__ */ new Map());
    /** @type {Map<String, UserDefinedFunctionExpression>} */
    l(this, "userDefinedFunctionMap", /* @__PURE__ */ new Map());
    /** @type {Map<String, UserDefinedFunctionCall[]>} */
    l(this, "unconnectedFunctionCalls", /* @__PURE__ */ new Map());
    /** @type {Map<String, DataType} */
    l(this, "userDefinedClassMap", /* @__PURE__ */ new Map());
    /** @type {Map<String, UserDefinedMethodCall[]} */
    l(this, "unconnectedMethodCalls", /* @__PURE__ */ new Map());
    /** @type {String} */
    b(this, go);
    /** @type {Number} */
    b(this, po);
  }
  //#region - overrides
  /**
   * @override
   */
  isScopeBlock() {
    return !0;
  }
  /**
   * @override
   */
  getScope() {
    return this;
  }
  /**
   * @override
   * @inheritdoc 
   */
  addStatement(e) {
    super.addStatement(e), H.connectVariableUsages(e, this);
    const n = this.getParentBlock() !== void 0 && this.getBlockEntity() !== t.ListComprehension ? this.getParentBlock().getScope() : this;
    H.connectUserDefinedFunctions(e, n !== void 0 ? n : this), H.connectUserDefinedMethods(e, n !== void 0 ? n : this);
  }
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets the map of variables found in this block (just this block, not nested blocks)
   * @returns {Map<String, VariableInfo>}
   */
  getVariableMap() {
    return this.variableMap;
  }
  /**
   * Gets the map of modules found in this block
   * @returns {Map<String, ModuleInfo>}
   */
  getModuleMap() {
    return this.moduleMap;
  }
  /**
   * Gets the BlockStatement that should be updated with a new statement or undefined
   * @param {Number} newStatementIndent The indentation of the new statement
   * @param {Number} newStatementStartLine
   * @returns {BlockStatement | undefined}
   */
  getStatementToUpdate(e, n) {
    if (this.getStatements().length > 0 && this.getLastStatement().isBlockStatement())
      return this.getLastStatement().getLastLineNumber() !== n ? this.getLastStatement().getBlockStatementForIndent(e) : this.getLastStatement().getLastBlockStatement();
  }
  /**
   * Adds a user defined function to the tracking
   * @param {UserDefinedFunctionExpression} functionExp 
   */
  addUserDefinedFunction(e) {
    if (e !== void 0) {
      const n = e.getTextValue();
      if (this.userDefinedFunctionMap.set(n, e), this.unconnectedFunctionCalls.has(n)) {
        for (let s of this.unconnectedFunctionCalls.get(n))
          e.addObserver(s);
        this.unconnectedFunctionCalls.delete(n);
      }
    }
  }
  /**
   * Adds a user defined class to the tracking
   * @param {DataType} classType 
   */
  addUserDefinedClass(e) {
    this.userDefinedClassMap.set(e.name, e);
  }
  /**
   * Gets the user defined functions defined in this block
   * @returns {Map<String, UserDefinedFunctionExpression>}
   */
  getUserDefinedFunctions() {
    return this.userDefinedFunctionMap;
  }
  /**
   * Gets the user defined classes defined in this block
   * @returns {Map<String, UserDefinedClassExpression}
   */
  getUserDefinedClasses() {
    return this.userDefinedClassMap;
  }
  /**
   * Get unconnected function calls
   * @returns {Map<String, UserDefinedFunctionCall[]>}
   */
  getUnconnectedFunctionCalls() {
    return this.unconnectedFunctionCalls;
  }
  /**
   * Get unconnected method calls
   * @returns {Map<String, UserDefinedMethodCall[]}
   */
  getUnconnectedMethodCalls() {
    return this.unconnectedMethodCalls;
  }
  /**
   * Adds a call of a function that is not yet tracked to the unconnected function map
   * @param {UserDefinedFunctionCall} functionCallExp 
   */
  addUnconnectedFunctionCall(e) {
    const n = e.getFunctionName();
    this.unconnectedFunctionCalls.has(n) || this.unconnectedFunctionCalls.set(n, []), this.unconnectedFunctionCalls.get(n).push(e);
  }
  /**
   * Adds a call of a method that is not yet tracked to the unconnected method map
   * @param {UserDefinedMethodCall} methodCallExp 
   */
  addUnconnectedMethodCall(e) {
    const n = e.getMethodName();
    this.unconnectedMethodCalls.has(n) || this.unconnectedMethodCalls.set(n, []), this.unconnectedMethodCalls.get(n).push(e);
  }
  /**
   * Adds tracking for a variable marked with the global keyword
   * @param {String} name 
   */
  addGlobalVar(e) {
    this.globalVars.add(e);
  }
  /**
   * Gets the names of any global variables
   * @returns {Set<String>}
   */
  getGlobalVars() {
    return this.globalVars;
  }
  /**
   * Find all function definitions in this scope block or a parent scope.
   * @returns {Map<String, UserDefinedFunctionExpression>}
   */
  findAllFunctions() {
    const e = new Map(this.getUserDefinedFunctions());
    let n = this.getParentBlock();
    for (; n !== void 0 && n.getScope() !== void 0; ) {
      n = n.getScope();
      const s = n.getUserDefinedFunctions();
      for (const [o, a] of s)
        e.set(o, a);
      n = n.getParentBlock();
    }
    return e;
  }
  /**
   * Find all imported modules in this scope block or a parent scope.
   * @returns {Map<String, ModuleInfo>}
   */
  findAllModules() {
    const e = new Map(this.getModuleMap());
    let n = this.getParentBlock();
    for (; n !== void 0 && n.getScope() !== void 0; ) {
      n = n.getScope();
      const s = n.getModuleMap();
      for (const [o, a] of s)
        e.set(o, a);
      n = n.getParentBlock();
    }
    return e;
  }
  //#endregion
}
go = new WeakMap(), po = new WeakMap();
var hn;
class Zu extends Es {
  /**
   * Creates a new ClassBlock
   * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Statement} definitionStatement The definition line
   */
  constructor(e, n) {
    super(t.ClassDefinition, e, n.getIndentation());
    /** @type {DataType} */
    b(this, hn);
    y(this, hn, n.getFirstExpression().getDataType()), e.getScope().addUserDefinedClass(u(this, hn)), this.addStatement(n);
  }
  //#region - overrides
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets the data type of the class
   * @returns {DataType}
   */
  getClassType() {
    return u(this, hn);
  }
  toTree() {
    const e = this.getStatements();
    return {
      id: this.getId(),
      definition: e.length > 0 ? e[0].toJSON() : {},
      statements: e.slice(1).map((n) => n.toJSON())
    };
  }
  //#endregion - extensions
}
hn = new WeakMap();
var mo, ds, ei, rr, hs, Vi;
const ti = class ti extends Es {
  /**
   * Creates a new FunctionBlock
   * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {Statement} definitionStatement The definition line
   */
  constructor(e, n) {
    super(t.FunctionDefinition, e, n.getIndentation());
    b(this, ei);
    /** @type {ReturnStatement | undefined} */
    b(this, mo);
    // Top level return 
    /** @type {String} */
    b(this, ds);
    const s = n.getFirstExpression(), o = s.getEntity() === t.FunctionDefinitionStatement ? s.getFunctionNameExpression() : s.getMethodNameExpression();
    if (y(this, ds, o !== void 0 ? o.getTextValue() : "not parsed"), e.getScope().addUserDefinedFunction(o), s.is(t.MethodDefinitionStatement) && s.getClassVar() && e.getBlockEntity() === t.ClassDefinition) {
      const h = e.getStatements()[0].getFirstExpression().getDataType();
      s.getClassVar().setDataType(h);
    }
    this.addStatement(n), this.addRules([m(this, ei, rr)]);
  }
  //#region - overrides
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets the aggregated return type of the function
   * @returns {DataType}
   */
  getReturnType() {
    const n = this.getLastExecutedStatements().filter((s) => !s.isBlank() && s.getFirstExpression().is(t.ReturnStatement)).map((s) => s.getFirstExpression().getDataType());
    return this.alwaysReturnsAValue() || n.push(d.None), _t(n);
  }
  /**
   * Gets the name of the function
   * @returns {String}
   */
  getFunctionName() {
    return u(this, ds);
  }
  /**
   * Gets the UserDefinedFunctionExpression that contains information about returns
   * @returns {UserDefinedFunctionExpression | undefined}
   */
  getFunctionExpression() {
    const e = this.getStatements();
    if (e.length > 0 && e[0].getFirstExpression().is(t.FunctionDefinitionStatement))
      return e[0].getFirstExpression().getFunctionNameExpression();
  }
  toTree() {
    const e = this.getStatements();
    return {
      id: this.getId(),
      definition: e.length > 0 ? e[0].toJSON() : {},
      statements: e.slice(1).map((n) => n.toJSON())
    };
  }
  //#endregion - symptoms
};
mo = new WeakMap(), ds = new WeakMap(), ei = new WeakSet(), //#endregion - extensions
//#region - symptoms
/**
 * Rule finder. Checks a function scope block for print statements.
 * @param {FunctionBlock} block 
 * @returns {Symptom[]}
 */
rr = function(e) {
  var o;
  const n = [], s = e.getFunctionExpression();
  if (s !== void 0) {
    const a = e.getStatements(), h = m(o = ti, hs, Vi).call(o, a);
    h.length > 0 && n.push(O.createStatementSymptom(I.FunctionPrints, [s], 0, 0, {
      printLines: h,
      functionReturns: s.getReturnType() !== d.None
    }));
  }
  return n;
}, hs = new WeakSet(), Vi = function(e) {
  let n = [];
  for (let s = 0; s < e.length; s++)
    if (e[s].isBlockStatement())
      n = n.concat(m(this, hs, Vi).call(this, e[s].getStatements()));
    else {
      const o = e[s].getFirstExpression();
      o.is(t.BuiltInFunctionCall) && o.getFunctionEntity() === t.PrintFunction ? n.push({
        lineNumber: o.getStartLineNumber(),
        followsReturn: s > 0 && e[s].getFirstExpression().is(t.ReturnStatement),
        precedesReturn: s < e.length - 1 && e[s + 1].getFirstExpression().is(t.ReturnStatement),
        isReturned: !1,
        isEndOfExitBranch: s === e.length - 1,
        blockId: o.getBlockId()
      }) : o.is(t.ReturnStatement) && o.getExpressionsOfKind(t.PrintFunction).length > 0 && n.push({
        lineNumber: o.getStartLineNumber(),
        followsReturn: !1,
        precedesReturn: !1,
        isReturned: !0,
        isEndOfExitBranch: s === e.length - 1,
        blockId: o.getBlockId()
      });
    }
  return n;
}, b(ti, hs);
let Pi = ti;
class Yu extends Es {
  /**
   * Creates a new ListComprehensionBlock
   * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
   * @param {ListComprehensionExpression} listComprehensionExpression The definition line
   */
  constructor(i, e) {
    super(t.ListComprehension, i);
    const n = new Yt(e.getTextValue(), e.getStartLineNumber(), new Zo(""), [e]);
    this.addStatement(n);
  }
  /**
   * @override
   */
  getId() {
    const i = this.getStatements();
    return `${super.getId()}-${i.length > 0 && !i[0].isBlank() ? i[0].getFirstExpression().getDocumentStartIndex() : "-1"}`;
  }
}
var j, Ge, jn, lr, cr, ur, dr, hr, fr, gr, Ks, pr;
class ar extends Yo {
  // Stores the ids of conditional branch siblings if this is a conditional branch
  /**
  * Creates a new BranchBlock representing a block of Python code
  * @param {StatementBlock} parentBlock This block's parent, which will be undefined if this is the document root
  * @param {Statement} definitionStatement The definition line
  */
  constructor(e, n) {
    const s = n.getFirstExpression().getBlockEntity();
    if (s === t.DocumentDefinition || s === t.FunctionDefinition || s === t.ClassDefinition || s === t.ListComprehension)
      throw new Error(`${s.name} is a scope block`);
    super(s, e, n.getIndentation());
    b(this, j);
    /** @type {Set<BranchBlock>} */
    l(this, "conditionalSiblings", /* @__PURE__ */ new Set());
    this.addStatement(n), this.addRules([m(this, j, ur), m(this, j, fr), m(this, j, cr), m(this, j, hr)]), this.addCounterRules([m(this, j, pr), m(this, j, dr), m(this, j, gr)]);
  }
  //#region - overrides
  /**
   * @override
   */
  isScopeBlock() {
    return !1;
  }
  /**
   * Checks whether this is a branch block
   * @returns {Boolean}
   */
  isBranchBlock() {
    return !0;
  }
  /**
   * Gets the last statement to be executed in a block. This will either be a return,
   * a break, or the last statement if the block has no exit. Blocks with multiple 
   * branches will have multiple last statements, hence the return type of array.
   * @returns {Statement[]}
   */
  getLastExecutedStatements() {
    let e = [];
    for (let s of this.getChildBlocks())
      e = e.concat(s.getLastExecutedStatements());
    const n = m(this, j, Ge).call(this);
    for (let s = 0; s < n.length; s++)
      if (!n[s].isBlockStatement()) {
        if (s === n.length - 1 && this.isBranchOfExhaustiveConditional())
          e.push(n[s]);
        else if (!n[s].isBlank() && n[s].getFirstExpression().isOneOf([t.ReturnStatement, t.BreakKeyword])) {
          e.push(n[s]);
          break;
        }
      }
    return e;
  }
  /**
   * Checks if this block has a top level (not in a child block) return statement
   * @returns {Boolean}
   */
  hasTopLevelReturn() {
    const e = m(this, j, Ge).call(this);
    for (let n of e)
      if (!n.isBlockStatement() && !n.isBlank() && n.getFirstExpression().is(t.ReturnStatement))
        return !0;
    return !1;
  }
  /**
   * Checks if this block has a top level (not in a child block) exit statement
   * @returns {Boolean}
   */
  hasTopLevelExit() {
    const e = m(this, j, Ge).call(this);
    for (let n of e)
      if (!n.isBlockStatement() && !n.isBlank() && n.getExpressions().filter((s) => Pt(s)).length > 0)
        return !0;
    return !1;
  }
  //#endregion - overrides
  //#region - custom
  /**
   * Checks if this block is a branch of a conditional statment.
   * @returns {Boolean}
   */
  isBranchOfConditional() {
    return this.getBlockEntity() === t.IfDefinition || this.getBlockEntity() === t.ElifDefinition || this.getBlockEntity() === t.ElseDefinition || this.getBlockEntity() === t.TryDefinition || this.getBlockEntity() === t.ExceptDefinition || this.getBlockEntity() === t.FinallyDefinition;
  }
  /**
   * Checks if this block is a branch of an exhaustive conditional--it includes an else branch
   * @returns {Boolean}
   */
  isBranchOfExhaustiveConditional() {
    if (this.getBlockEntity() === t.ElseDefinition)
      return m(this, j, jn).call(this, t.IfDefinition);
    if (this.getBlockEntity() === t.ElifDefinition) {
      let e = !1, n = !1;
      for (const s of this.conditionalSiblings)
        if (s.getBlockEntity() === t.IfDefinition ? e = !0 : s.getBlockEntity() === t.ElseDefinition && (n = !0), e && n)
          return !0;
    } else {
      if (this.getBlockEntity() === t.IfDefinition)
        return m(this, j, jn).call(this, t.ElseDefinition);
      if (this.getBlockEntity() === t.TryDefinition)
        return m(this, j, jn).call(this, t.ExceptDefinition);
      if (this.getBlockEntity() === t.ExceptDefinition)
        return m(this, j, jn).call(this, t.TryDefinition);
    }
    return !1;
  }
  /**
   * Gets a set containing this branch's siblings in a conditional. If it is not a conditional
   * branch, the set will be empty.
   * @returns {Set<BranchBlock>}
   */
  getSiblingConditionalBranches() {
    return this.conditionalSiblings;
  }
  /**
   * Connects a sibling conditional branch.
   * @param {BranchBlock} branch 
   * @throws Throws an error if either branch is not a conditional branch.
   */
  addSibling(e) {
    if (!this.isBranchOfConditional())
      throw new Error("Cannot add a sibling to a branch that is not a conditional");
    if (!e.isBranchOfConditional())
      throw new Error("Trying to add a non-conditional branch as a sibling.");
    this.conditionalSiblings.add(e);
  }
  //#endregion - symptoms
}
j = new WeakSet(), /**
 * Gets the statements inside the block statement
 * @returns {Statement[]}
 */
Ge = function() {
  const e = this.getStatements();
  return e.length, e[0].getStatements();
}, jn = function(e) {
  for (const n of this.conditionalSiblings)
    if (n.getBlockEntity() === e)
      return !0;
  return !1;
}, //#endregion - custom
//#region - symptoms
/**
 * Helper method to get the full text of the branch
 * @returns {string} The full text of the branch, with first line white space
 */
lr = function() {
  const e = m(this, j, Ge).call(this).flatMap((s) => s.getExpressions());
  return ge(e, !0);
}, /**
 * Rule finder.
 * @param {BranchBlock} branch 
 * @returns {Symptom[]}
 */
cr = function(e) {
  return [];
}, /**
 * Rule finder.
 * @param {BranchBlock} branch 
 * @returns {Symptom[]}
 */
ur = function(e) {
  var s;
  const n = [];
  if (e.getBlockEntity() === t.ForDefinition || e.getBlockEntity() === t.WhileDefinition && e.hasTopLevelExit())
    for (const o of m(s = e, j, Ge).call(s))
      !o.isBlockStatement() && !o.isBlank() && Pt(o.getFirstExpression()) && n.push(O.createStatementSymptom(I.LoopReturn, [o.getFirstExpression()], 0, 0, {
        loopType: e.getBlockEntity().name,
        exitLevel: Zc,
        exitTypes: [o.getFirstExpression().isOneOf([t.ReturnKeyword, t.ReturnStatement]) ? "return" : o.getFirstExpression().getTextValue()]
      }, e.getId()));
  else if (e.isBranchOfExhaustiveConditional() && e.getBlockEntity() === t.IfDefinition && e.hasTopLevelExit() && (e.getParentBlock() !== void 0 && e.getParentBlock().getBlockEntity() === t.ForDefinition || e.getParentBlock().getBlockEntity() === t.WhileDefinition)) {
    for (const p of e.getSiblingConditionalBranches())
      if (!p.hasTopLevelExit())
        return n;
    const a = e.getParentBlock().getStatements()[0].getExpressions(), h = a.flatMap((p) => p.getExpressionsOfKind(t.ReturnKeyword).concat(p.getExpressionsOfKind(t.BreakKeyword), p.getExpressionsOfKind(t.ExitFunction), p.getExpressionsOfKind(t.SysExit), p.getExpressionsOfKind(t.QuitFunction))).map((p) => p.getTextValue());
    n.push(O.createStatementSymptom(I.LoopReturn, [a[0]], 0, 0, {
      loopType: e.getParentBlock().getBlockEntity().name,
      exitLevel: Yc,
      exitTypes: h
    }, e.getParentBlock().getId()));
  }
  return n;
}, /**
 * Rule finder.
 * @param {BranchBlock} branch 
 * @returns {Symptom[]}
 */
dr = function(e) {
  const n = [], s = e.getParentBlock() !== void 0 && e.getParentBlock().getBlockEntity() === t.ForDefinition || e.getParentBlock().getBlockEntity() === t.WhileDefinition;
  if (e.hasTopLevelReturn() && e.isBranchOfConditional() && s) {
    if (e.isBranchOfExhaustiveConditional()) {
      let a = !0;
      for (const h of e.getSiblingConditionalBranches())
        if (!h.hasTopLevelReturn()) {
          a = !1;
          break;
        }
      if (a) return n;
    }
    const o = e.getParentBlock().getStatements()[0].getExpressions();
    n.push(O.createStatementSymptom(B.LoopExitsSometimes, o, 0, o.length - 1, {
      loopType: e.getParentBlock().getBlockEntity().name,
      loopBlock: e.getParentBlock().getId()
    }));
  }
  return n;
}, /**
 * Rule finder.
 * @param {BranchBlock} branch 
 * @returns {Symptom[]}
 */
hr = function(e) {
  var s, o;
  const n = [];
  if (e.getBlockEntity() === t.WhileDefinition) {
    const a = m(s = e, j, Ge).call(s)[0].getFirstExpression(), h = new Set(a.getVariableExpressions().map((F) => F.getTextValue())), p = m(o = e, j, Ge).call(o).slice(1), w = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
    for (const F of h)
      w.set(F, !1), S.set(F, []);
    for (const F of p)
      for (const N of F.getExpressions()) {
        const L = N.getExpressionsOfKind(t.ChangeStatement).flatMap((x) => x.getTargetVariables()).filter((x) => h.has(x.getTextValue())), U = N.getExpressionsOfKind(t.AssignmentStatement).flatMap((x) => x.getTargetVariables()).filter((x) => h.has(x.getTextValue()));
        for (const x of L)
          w.has(x.getTextValue()) && w.set(x.getTextValue(), !0);
        for (const x of U)
          S.has(x.getTextValue()) && S.get(x.getTextValue()).push(x);
      }
    for (const F of h)
      if (!w.get(F) && S.get(F).length > 0) {
        let N = [], L = !1;
        for (const U of S.get(F)) {
          const x = U.getParent().getAssignedValues();
          if (x.length === 1 && x[0].is(t.IntLiteral))
            N.push(U);
          else {
            L = !0;
            break;
          }
        }
        if (!L)
          for (const U of N)
            n.push(O.createStatementSymptom(I.WhileLoopVarAssignedIntLiteral, [U], 0, 0));
      }
  }
  return n;
}, /**
 * Rule finder.
 * @param {BranchBlock} branch 
 * @returns {Symptom[]}
 */
fr = function(e) {
  var s, o, a;
  const n = [];
  if (e.getBlockEntity() === t.WhileDefinition) {
    const h = m(s = e, j, Ge).call(s)[0].getFirstExpression(), p = new Set(h.getVariableExpressions());
    if (p.size > 0) {
      const w = m(o = e, j, Ks).call(o, p), S = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map();
      for (const N of p) {
        const L = w.get(N);
        for (const U of L) {
          U === e && S.add(N);
          const x = U.getNearestParentOfAny([t.WhileDefinition, t.ForDefinition]);
          x !== void 0 && x !== e && e.hasChild(x) ? (F.has(N) || F.set(N, /* @__PURE__ */ new Set()), F.get(N).add(x)) : x !== void 0 && x === e && S.add(N);
        }
      }
      S.size === 0 && n.push(O.createStatementSymptom(
        I.LoopVarNotModified,
        [h],
        0,
        0,
        {
          unmodifiedVars: Array.from(p).map((N) => N.getTextValue()),
          loopText: m(a = e, j, lr).call(a)
        },
        e.getId()
      ));
      for (const [N, L] of F) {
        const U = O.createStatementSymptom(I.LoopVarModifiedInChildLoop, [N], 0, 0, {
          modifiedIn: [],
          varDataType: []
        }, e.getId());
        for (const x of L)
          U.getAdditionalInfo().modifiedIn.push({
            loopType: x.getBlockEntity().name,
            startLine: x.getStatements()[0].getFirstLineNumber(),
            varDataType: N.getDataType().name
          });
        n.push(U);
      }
    }
  }
  return n;
}, /**
 * Counter rule finder.
 * @param {BranchBlock} branch 
 * @returns {Symptom[]}
 */
gr = function(e) {
  var s, o;
  const n = [];
  if (e.getBlockEntity() === t.WhileDefinition) {
    const a = m(s = e, j, Ge).call(s)[0].getFirstExpression(), h = new Set(a.getVariableExpressions());
    if (h.size > 0) {
      const p = m(o = e, j, Ks).call(o, h), w = /* @__PURE__ */ new Set();
      for (const S of h) {
        const F = p.get(S);
        for (const N of F)
          N === e && w.add(S);
      }
      w.size > 0 && n.push(O.createStatementSymptom(
        B.WhileLoopVarModified,
        [a],
        0,
        0,
        {},
        e.getId()
      ));
    }
  }
  return n;
}, Ks = function(e) {
  var o;
  const n = m(this, j, Ge).call(this).filter((a) => !a.isBlockStatement()), s = /* @__PURE__ */ new Map();
  for (const a of e)
    s.set(a, /* @__PURE__ */ new Set());
  for (const a of n) {
    const h = a.getExpressions();
    for (const p of h) {
      const w = p.getVariableExpressions().filter((F) => F.isAssignedOrChanged()), S = new Set(w.map((F) => F.getTextValue()));
      for (const F of e)
        S.has(F.getTextValue()) && s.get(F).add(this);
    }
  }
  for (const a of this.getChildBlocks().filter((h) => h.isBranchBlock())) {
    const h = m(o = a, j, Ks).call(o, e);
    for (const p of e)
      h.get(p).size > 0 && s.get(p).add(...h.get(p));
  }
  return s;
}, /**
 * Counter rule finder.
 * @param {BranchBlock} branch 
 * @returns {Symptom[]}
 */
pr = function(e) {
  var s;
  const n = [];
  if (e.getBlockEntity() === t.ForDefinition) {
    const o = m(s = e, j, Ge).call(s)[0].getFirstExpression();
    if (o.hasChildExpressions()) {
      const a = o.getExpressionsOfKind(t.RangeFunction).length > 0, h = o.getExpressionsOfKind(t.EnumerateFunction).length > 0;
      (a || h) && n.push(O.createStatementSymptom(B.CounterLoop, [o], 0, 0, {
        isNestedInWhile: e.hasParentOfEntity(t.WhileDefinition),
        counterType: a ? t.RangeFunction.name : t.EnumerateFunction.name
      }));
    }
  }
  return n;
};
var te, Kt, fs, fn, Qe, ke, K, Wt, gs, Pe, ve, Se, wt, wo, C, mr, wr, Li, Sr, Mt, ze, Ae, br, Ir, vi, Ri, yr, Ei, Fr, Nr, Cr, Or, Tr, xr, Mr, Dr, Ar, Br, kr, nn, Pr, _u, Vr, Lr, vr, Rr, Er, Ur, Gr, Jr, $r, Kr;
class Hn {
  // Stores symptoms that can be detected while line processing is in progress
  constructor(i, e, n, {
    multilineCommentDelimiter: s = void 0,
    stringLiteralDelimiter: o = void 0,
    groupCharCounts: a = { "(": 0, "[": 0, "{": 0 },
    lastLineExpressions: h = [],
    startFrom: p = 0,
    moduleNames: w = [],
    varsWithTypeNames: S = [],
    // Used to disambiguate variables with the same name as a type expression e.g. list or str
    classDefinitionInProgress: F = !1
  } = {}) {
    b(this, C);
    /** @type {ExpressionNode[]} */
    b(this, te, []);
    /** @type {ExpressionNode[]} */
    b(this, Kt, []);
    /** @type {Boolean} */
    b(this, fs, !1);
    /** @type {Boolean} */
    b(this, fn, !1);
    // Indicates if there are non-space characters after a line separate (: or ;)
    /** @type {String} */
    b(this, Qe);
    /** @type {String} */
    b(this, ke);
    /** @type {String} */
    b(this, K);
    /** @type {Number} */
    b(this, Wt);
    /** @type {Indent} */
    b(this, gs);
    /** @type {Number} */
    b(this, Pe);
    /** @type {Number} */
    b(this, ve);
    /** @type {Object} */
    b(this, Se);
    // Keeps track of open brackets
    /** @type {Number} */
    b(this, wt);
    // The index of the last character in this statement. Will generally be the end of the text but may be earlier if the line contains a line separator such as : or ;
    /** @type {Symptom[]} */
    b(this, wo, []);
    y(this, K, i), y(this, wt, u(this, K).length - 1), y(this, Pe, e), y(this, ve, n), y(this, Qe, s), y(this, ke, o), y(this, Se, a), y(this, Wt, m(this, C, wr).call(this, i)), y(this, gs, new Zo(i.substring(0, u(this, Wt)))), y(this, Kt, h), u(this, K).length > 0 ? m(this, C, mr).call(this, p > 0 ? p : u(this, Wt), S, w, F) : m(this, C, Li).call(this);
  }
  //#endregion - parsing operators
  //#endregion - parsing helper methods
  //#endregion - raw text parsing
  //#region - getters
  /**
   * Gets the raw text of the source code line
   * @returns {String} The raw text of the source line
   */
  getText() {
    return u(this, K);
  }
  /**
   * Gets the document line number of the source code
   * @returns {Number} The line number
   */
  getLineNumber() {
    return u(this, Pe);
  }
  /**
   * Gets the expressions on the parsed line
   * @returns {ExpressionNode[]} The expressions array
   */
  getExpressions() {
    return u(this, te);
  }
  /**
   * Gets the document start index of the line
   * @returns {Number} The index of the first character in the line in the document source text
   */
  getDocumentStartIndex() {
    return u(this, ve);
  }
  /**
   * Gets the index of the last character processed in this line of source code. The index is
   * local to the line of text, not the document.
   * @returns {Number} The index of the last character processed in this line of source code
   */
  getLineEndIndex() {
    return u(this, wt);
  }
  /**
   * Returns the number of spaces at the start of the line.
   * @returns {Number}
   */
  getIndentation() {
    return u(this, Wt);
  }
  /**
   * Gets the indent object that describes the indentation
   * @returns {Indent}
   */
  getIndent() {
    return u(this, gs);
  }
  /**
   * Whether or not the statement continues on the next line of source code.
   * @returns {Boolean} True if the statement continues, false otherwise.
   */
  continuesOnNextLine() {
    return u(this, fs);
  }
  /**
   * Whether or not this statement is followed by a separate statement on the same
   * line of source code e.g. code after a : or ;
   * @returns {Boolean} True if the statement is followed by a separate statement, false otherwise
   */
  followedBySeparateStatement() {
    return u(this, fn);
  }
  /**
   * Checks if there is an open multiline comment on this line.
   * @returns {Boolean} True if there is an unclosed multiline comment on this line
   */
  hasOpenComment() {
    return u(this, Qe) !== void 0;
  }
  /**
   * Gets the text value of the open multiline comment delimiter.
   * @returns {String} The multiline comment delimiter left open on this line. 
   * @throws Throws an error if there is no open multiline comment delimiter
   */
  getCommentDelimiter() {
    if (!this.hasOpenComment())
      throw new Error("This line of source code does not have an open multiline comment delimiter. Line", u(this, Pe));
    return u(this, Qe);
  }
  /**
   * Checks if there is an open string literal on this line.
   * @returns {Boolean} True if there is an open string literal, false otherwise.
   */
  hasOpenString() {
    return u(this, ke) !== void 0;
  }
  /**
   * Gets the text value of the open string literal delimiter.
   * @returns {String} The text value of the open string literal delimiter
   * @throws Throws an error if there is no open string literal delimiter on this line.
   */
  getStringLiteralDelimiter() {
    if (!this.hasOpenString())
      throw new Error("This line of source code does not have an open string literal delimiter. Line", u(this, Pe));
    return u(this, ke);
  }
  /**
   * Checks if there any unclosed brackets on the line
   * @returns {Boolean} True if there are any unclosed brackets, false otherwise.
   */
  hasOpenGroupChars() {
    return Object.entries(u(this, Se)).filter(([i, e]) => e > 0).length > 0;
  }
  /**
   * Gets the open group information
   * @returns {Map<String, Number>} Each key is an open group character, (, [, or {. Each value is the number of unclosed open brackets.
   */
  getOpenGroupChars() {
    return u(this, Se);
  }
  //#endregion - getters
}
te = new WeakMap(), Kt = new WeakMap(), fs = new WeakMap(), fn = new WeakMap(), Qe = new WeakMap(), ke = new WeakMap(), K = new WeakMap(), Wt = new WeakMap(), gs = new WeakMap(), Pe = new WeakMap(), ve = new WeakMap(), Se = new WeakMap(), wt = new WeakMap(), wo = new WeakMap(), C = new WeakSet(), //#region - raw text parsing
mr = function(i, e, n, s) {
  u(this, Qe) !== void 0 ? i = m(this, C, vi).call(this, u(this, Qe), 0) + 1 : u(this, ke) !== void 0 && (i = m(this, C, Ri).call(this, G.getCategory(u(this, ke).charCodeAt(0)), 0) + 1);
  for (let o = i; o < u(this, K).length; o++) {
    const a = G.getCategory(u(this, K).charCodeAt(o));
    if (a === G.Hash)
      o = u(this, K).length - 1;
    else if (a.isQuote())
      o = m(this, C, br).call(this, a, o);
    else if (m(this, C, Tr).call(this, a))
      o = m(this, C, xr).call(this, o, e, n, s);
    else if (m(this, C, Lr).call(this, a, o, o === 0 || G.getCategory(u(this, K).charCodeAt(o - 1)) === G.Space))
      o = m(this, C, Rr).call(this, o);
    else if (m(this, C, Er).call(this, a))
      o = m(this, C, Ur).call(this, o);
    else if (m(this, C, Nr).call(this, a))
      o = m(this, C, Or).call(this, o);
    else if (m(this, C, Gr).call(this, a) && (m(this, C, Jr).call(this, o), o < u(this, wt) && m(this, C, $r).call(this, a))) {
      y(this, wt, o), m(this, C, Sr).call(this);
      break;
    }
  }
  m(this, C, Li).call(this);
}, //#region - parsing helper methods
/**
 * Counts the number of spaces at the start of the line.
 * @param {String} rawContent The raw text of the line
 * @returns {Number} The number of spaces at the start of the line.
 */
wr = function(i) {
  return Math.max(i.search(/\S/), 0);
}, /**
 * Helper method to determine if the line continues onto the next line. Called at end of parseLine()
 * and updates #continuesOnNextLine if necessary.
 */
Li = function() {
  (u(this, Qe) !== void 0 || u(this, ke) !== void 0 || this.hasOpenGroupChars() || m(this, C, ze).call(this) && m(this, C, Ae).call(this).isOneOf([t.ContinuationLine, t.AddOperator, t.Comma])) && y(this, fs, !0);
}, Sr = function() {
  const i = u(this, K).substring(u(this, wt) + 1).trim();
  i.length === 0 || G.getCategory(i.charCodeAt(0)) === G.Hash ? y(this, fn, !1) : y(this, fn, !0);
}, /**
 * Searches the expressions for the given entitiy.
 * @param {ExpressionEntity} entity 
 * @returns {Boolean} True if the expression is found, false otherwise
 */
Mt = function(i) {
  for (let e of u(this, te))
    if (e.is(i))
      return !0;
  return !1;
}, /**
 * Convenience method to check that there are expressions in the expressions array.
 * @returns {Boolean} True if there is at least one expression in the expressions array, false otherwise.
 */
ze = function() {
  return u(this, te).length > 0;
}, /**
 * Gets the last expression in the expressions array (the last expression parsed)
 * @returns {ExpressionNode} The last expression parsed
 * @throws Throws an error if the last expression is requested before any expressions have been parsed.
 */
Ae = function() {
  if (u(this, te).length === 0)
    throw new Error("Attempted to get last expression when there are no expressions.");
  return u(this, te)[u(this, te).length - 1];
}, //#region - parsing block comments and string literals
/**
 * Creates expressions representing either a multiline comment or a string literal (including delimiters)
 * and returns the local index of the last character processed.
 * @param {Character} currentCharCategory The current Character
 * @param {Number} localIndex The index in the raw text of the current character.
 * @returns {Number} The index of the last character processed - either the end of the line or the closing quote
 */
br = function(i, e) {
  return m(this, C, Fr).call(this, i, e) ? m(this, C, Ir).call(this, e) : m(this, C, Ri).call(this, i, e);
}, /**
 * Processes a block comment that starts on the line by searching for the end of the comment.
 * If the end is found on this line, returns the index of the last character in the closing
 * comment delimiter. If the end is not found, sets #multilineCommentDelimiter and returns the
 * index of the last character on the line.
 * @param {Number} localIndex The index in the raw text of the first quote symbol
 * @returns {Number} The index of the last character processed
 */
Ir = function(i) {
  const e = u(this, K).substring(i, i + 3);
  let n = i + 3;
  return m(this, C, vi).call(this, e, n);
}, /**
 * Searches for the end of a block comment. Clears the delimiter if found
 * @param {String} delimiter The comment delimiter
 * @param {Number} contentStart The index to start searching from 
 * @returns {Number} The index of the last quote in the delimiter, if found, or the last character on the line.
 */
vi = function(i, e) {
  if (e < u(this, K).length) {
    const s = m(this, C, Ei).call(this, u(this, K)).substring(e).indexOf(i);
    if (s > -1)
      return y(this, Qe, void 0), e + s + 2;
  }
  return y(this, Qe, i), u(this, K).length - 1;
}, /**
 * Processes a string literal that starts on this line. Continuations are handled separately.
 * @param {Character} quoteChar The quote Character
 * @param {Number} localIndex The index of the first quote in the raw text
 * @returns {Number} The index of the last character processed in the line text
 */
Ri = function(i, e) {
  const n = m(this, C, Ei).call(this, u(this, K)), s = u(this, ke) === void 0 ? m(this, C, yr).call(this, i, e, n) : u(this, ke);
  let o = u(this, ke) === void 0 ? e + s.length : e, a = o + n.substring(o).indexOf(s);
  a === -1 || a < o ? (y(this, ke, s), a = u(this, K).length) : y(this, ke, void 0);
  const h = Math.min(u(this, K).length - 1, a + s.length - 1), p = u(this, K).substring(e, h + 1), w = new va(
    p,
    u(this, Pe),
    u(this, ve) + e,
    e,
    u(this, ve) + h
  );
  if (m(this, C, ze).call(this) && m(this, C, Ae).call(this).is(t.F)) {
    const S = [m(this, C, Ae).call(this), w], F = new cd(ge(S), S);
    u(this, te)[u(this, te).length - 1] = F;
  } else u(this, te).push(w);
  return h;
}, /**
 * Gets the string value of the string delimiter
 * @param {Character} quoteChar The quote Character
 * @param {Number} localIndex The index of the first quote in the raw text
 * @param {String} cleanText 
 * @returns {String} The string delimiter (e.g. "\"" or "'''")
 */
yr = function(i, e, n) {
  const s = i === G.SingleQuote ? "'" : '"';
  return e < n.length - 2 && G.getCategory(n.charCodeAt(e)) === i && G.getCategory(n.charCodeAt(e + 1)) === i && G.getCategory(n.charCodeAt(e + 2)) === i ? s + s + s : s;
}, /**
 * Removes escaped characters from a string. The escaping backslash and the character that follows
 * are replaced with spaces.
 * @param {String} text The original text
 * @returns {String} A copy of the string with escaped characters replaced with spaces.
 */
Ei = function(i) {
  return i.replace(/\\.{1}/g, "  ");
}, /**
 * Checks if a character at localIndex is the start of a block
 * @param {Character} quoteChar The Character of the first quote in a potential multiline quote delimeter
 * @param {Number} localIndex The index of the first quote in the raw text
 * @returns {Boolean} True if the quote is the start of a multiline comment, false otherwise.
 */
Fr = function(i, e) {
  return m(this, C, ze).call(this) && m(this, C, Ae).call(this).is(t.AssignmentOperator) || u(this, Se)["("] > 0 || u(this, Se)["["] > 0 || u(this, Se)["{"] > 0 ? !1 : i.isQuote() && u(this, K).length > e + 2 && G.getCategory(u(this, K).charCodeAt(e)) === i && G.getCategory(u(this, K).charCodeAt(e + 1)) === i && G.getCategory(u(this, K).charCodeAt(e + 2)) === i;
}, //#endregion - parsing block comments and string literals
//#region - parsing decorators
/**
 * Checks if an individual character is the start of a decorator - all such entities can only
 * start with an @
 * @param {Character} characterCategory The Character to check
 * @returns {Boolean} True if the character is the start of decorator
 */
Nr = function(i) {
  return i === G.At;
}, /**
 * Gets the full text of a decorator beginning with the @ and including any .
 * @param {number} startIndex 
 * @returns {string} The decorator
 */
Cr = function(i) {
  let e = i;
  for (let n = i + 1; n < u(this, K).length; n++) {
    const s = G.getCategory(u(this, K).charCodeAt(n));
    if (s !== G.Space && s !== G.NewLine)
      e = n;
    else
      break;
  }
  return u(this, K).substring(i, e + 1);
}, /**
 * Creates and tracks the decorator expression.
 * @param {number} startIndex The index of the @ 
 * @returns {number} The index of the next character to process
 */
Or = function(i) {
  const e = m(this, C, Cr).call(this, i), n = new Q(t.Decorator, c.SyntacticSugar), s = sn(e, n, u(this, Pe), u(this, ve) + i, i);
  return u(this, te).push(s), i + e.length - 1;
}, //#endregion - parsing decorators
//#region - parsing keywords and identifiers
/**
 * Checks if an individual character is the start of an identifier or keyword - all such entities can only
 * start with an underscore or letter
 * @param {Character} characterCategory The Character to check
 * @returns {Boolean} True if the character is the start of an identifier or keyword
 */
Tr = function(i) {
  return i === G.Underscore || i === G.Letter;
}, /**
 * Creates an expression representing the identifier and adds it to the expressions array. 
 * Variables, function calls, and other identifiers are tracked.
 * @param {Number} localIndex The identifier's index in the raw line text
 * @param {String[]} varsWithTypeNames An array containing existing variables with the same name as a type funct
 * @param {String[]} moduleNames An array containing the names of modules imported in the current scope
 * @param {boolean} classDefinitionInProgress Indicates if a class definition is in progress to enable method definitions to be distinguished from function definitions
 * @returns {Number} The local index of the last character processed
 */
xr = function(i, e, n, s) {
  let o = m(this, C, Mr).call(this, i), a = m(this, C, Dr).call(this, o, m(this, C, Vr).call(this, i + o.length), e, n, s);
  const h = sn(o, a, u(this, Pe), u(this, ve) + i, i);
  return m(this, C, ze).call(this) && (a.entity === t.InKeyword && m(this, C, Ae).call(this).is(t.NotOperator) || a.entity === t.NotOperator && m(this, C, Ae).call(this).is(t.IsKeyword)) ? (o = ge([m(this, C, Ae).call(this), h]), a = new Q(a.entity === t.InKeyword ? t.NotInKeyword : t.IsNotKeyword, c.ComparisonOperators), i = m(this, C, Ae).call(this).getDocumentStartIndex() - u(this, ve), u(this, te)[u(this, te).length - 1] = sn(o, a, u(this, Pe), m(this, C, Ae).call(this).getDocumentStartIndex())) : u(this, te).push(h), i + o.length - 1;
}, /**
 * Gets the string text of a possibile identifier or keyword. E.g., if the entity is a 
 * variable, this returns the variable name.
 * @param {Number} startIndex The local index in the raw content of the first character
 * @returns {String} The identifier name or keyword
 */
Mr = function(i) {
  let e = i;
  for (let n = i + 1; n < u(this, K).length; n++) {
    const s = G.getCategory(u(this, K).charCodeAt(n));
    if (s === G.Underscore || s === G.Letter || s === G.Digit)
      e = n;
    else
      break;
  }
  return u(this, K).substring(i, e + 1);
}, /**
 * Gets the ExpressionEntity and ExpressionCategory of the given identifier.
 * @param {String} identifier The text of the identifier e.g. def or a variable name
 * @param {String} nextCharacter The text of the next non-space character
 * @param {String[]} varsWithTypeNames
 * @param {String[]} moduleNames An array containing the names of modules imported in the current scope
 * @param {boolean} classDefinitionInProgress Indicates if a class definition is in progress to enable method definitions to be distinguished from function definitions
 * @returns {ExpressionInfo} An object containing the ExpressionEntity and ExpressionCategory of the given identifier.
 */
Dr = function(i, e, n, s, o) {
  const a = Ze(i);
  if (m(this, C, ze).call(this)) {
    const h = m(this, C, Ae).call(this);
    if (h.is(t.FunctionDefinition))
      return o ? new Q(t.MethodName, c.Identifiers) : new Q(t.FunctionName, c.Identifiers);
    if (h.is(t.ClassDefinition))
      return new Q(t.ClassName, c.Identifiers);
    if (h.is(t.FromKeyword) || m(this, C, Mt).call(this, t.ImportKeyword) && !m(this, C, Mt).call(this, t.FromKeyword))
      if (h.is(t.AsKeyword) && u(this, te).length > 1) {
        const p = u(this, te)[u(this, te).length - 2];
        return new Q(p.getEntity(), p.getCategory());
      } else
        return a.entity === t.Unknown ? new Q(t.ModuleName, c.Identifiers) : a;
    else if (m(this, C, nn).call(this)) {
      if (e !== "(")
        return a.category === c.Unknown ? new Q(t.PropertyName, c.ModuleProperties) : a;
      {
        const p = this.getExpressions();
        if (p.length >= 2) {
          const w = p[p.length - 2];
          return w.is(c.BuiltInModules) && a.category === c.ModuleFunctions || a.category === c.BuiltInMethods ? a : w.is(t.ModuleName) ? new Q(t.MethodName, c.ModuleFunctions) : new Q(t.MethodName, c.OtherMethods);
        }
      }
    } else {
      if (m(this, C, Mt).call(this, t.FromKeyword) && m(this, C, Mt).call(this, t.ImportKeyword))
        return m(this, C, Pr).call(this, i);
      if ((i === "sep" || i === "end") && !(h.is(t.Comma) && e === "="))
        return new Q(t.VariableName, c.Identifiers);
      if (a.entity !== t.VariableName && tu(i) && m(this, C, Mt).call(this, t.FunctionDefinition) && h.isOneOf([t.OpenParenthesis, t.Comma]))
        return new Q(t.VariableName, c.Identifiers);
    }
  } else if (i === "sep" || i === "end")
    return new Q(t.VariableName, c.Identifiers);
  return e === t.OpenParenthesis.name ? m(this, C, Ar).call(this, a, i) : (a.entity === t.R || a.entity === t.F) && e !== "'" && e !== '"' ? new Q(t.VariableName, c.Identifiers) : a.category === c.Types && n.includes(i) ? new Q(t.VariableName, c.Identifiers) : a.category === c.BuiltInModules && !s.includes(i) ? new Q(t.VariableName, c.Identifiers) : a.category === c.BuiltInFunctions && Bo(i).entity !== t.Unknown && e !== "=" ? n.includes(i) ? new Q(t.VariableName, c.Identifiers) : Bo(i) : a.category === c.OtherKeywords || a.category === c.BlockDefinitions || a.category === c.LogicalOperators || a.category === c.BuiltInExceptions || a.category === c.BuiltInModules || a.category === c.Types || a.category === c.SpecialVariables || a.category === c.ComparisonOperators ? a : a.category === c.Unknown && s.includes(i) ? new Q(t.ModuleName, c.Identifiers) : new Q(t.VariableName, c.Identifiers);
}, /**
 * Finds the appropriate function or method information for the given identifier
 * @param {Object} knownEntity An object with entity and category values. Returned by the lookup for the given identifier.
 * @param {String} identifier The identifier name.
 * @returns {Object} An object with entity and category values that best represent the identifier
 */
Ar = function(i, e) {
  return m(this, C, Br).call(this, i) || m(this, C, kr).call(this, i) ? i : i.entity === t.Format ? m(this, C, nn).call(this) ? new Q(t.Format, c.BuiltInMethods) : new Q(t.FormatFunction, c.BuiltInFunctions) : m(this, C, nn).call(this) ? e === "exit" ? yi[e] : new Q(t.MethodName, c.OtherMethods) : yi.hasOwnProperty(e) ? yi[e] : i.category !== c.BuiltInFunctions && i.category !== c.BuiltInMethods && i.category !== c.Unknown && i.category !== c.ModuleFunctions ? i : new Q(t.FunctionName, c.Identifiers);
}, Br = function(i) {
  return i.category === c.BuiltInFunctions && !m(this, C, nn).call(this);
}, kr = function(i) {
  return (i.category === c.BuiltInMethods || i.category === c.MagicMethods || i.category === c.ModuleFunctions) && m(this, C, nn).call(this);
}, /**
 * Helper method to find out if the current entity being processed is preceded by a dot, and therefore
 * might be method or property.
 * @returns {Boolean} True if the previous expression was a dot, false if there are no previous expressions or the last expression was not a dot.
 */
nn = function() {
  return m(this, C, ze).call(this) && m(this, C, Ae).call(this).is(t.Dot) || !m(this, C, ze).call(this) && u(this, Kt).length > 0 && u(this, Kt)[u(this, Kt).length - 1].is(t.Dot);
}, /**
 * Finds the appropriate ExpressionEntity for a named import - a function or variable directly imported
 * from a module.
 * @param {String} identifier The name of the named import
 * @returns {Object} An object containing the ExpressionEntity and ExpressionCategory that best describes the identifier
 */
Pr = function(i) {
  if (u(this, te).length >= 2 && u(this, te)[1].is(c.BuiltInModules)) {
    let e = Ze(i);
    if (e.category === c.ModuleFunctions || e.category === c.ModuleProperties) {
      const n = ko.has(e.entity) ? ko.get(e.entity) : void 0;
      return n && m(this, C, Mt).call(this, n) ? e : new Q(t.NamedImport, c.Identifiers);
    }
    return e.entity === t.Unknown ? new Q(t.NamedImport, c.Identifiers) : e;
  }
  return new Q(t.NamedImport, c.Identifiers);
}, /**
 * DON'T NEED NOT FULLY IMPLEMENTED YET: DEPENDENT ON MODULE TRACKING
 * @param {String} aliasName The alias name
 * @param {ExpressionEntity} moduleEntity original entity of the imported module
 * @returns {Object} An object containing the ExpressionEntity and ExpressionCategory of the given identifier. Either a known module entity or the generic module entity.
 */
_u = function(i, e) {
  return new Q(t.ModuleName, c.Identifiers);
}, /**
 * Helper method to find the next character that is not a space
 * @param {Number} startIndex The local index to start searching from
 * @returns {String} The next non-space character (string, not index).
 */
Vr = function(i) {
  for (; G.getCategory(u(this, K).charCodeAt(i)) === G.Space; )
    i++;
  return u(this, K).charAt(i);
}, //#endregion - parsing keywords and identifiers
//#region - parsing numbers
/**
 * Checks if a particular character is part of a number literal (at least one digit, up to one - and up to one .)
 * @param {Character} characterCategory The Character at the local index
 * @param {Number} index The index in the line text of the first character
 * @param {Boolean} lastCharIsSpace True if the previous raw character was a space (or start of line)
 * @returns {Boolean} True if the character at localIndex is the start of a number
 */
Lr = function(i, e, n) {
  if (i === G.Minus && m(this, C, ze).call(this) && !n && m(this, C, Ae).call(this).isOneOf([c.Identifiers, t.CloseBrace, t.CloseParenthesis, t.CloseSquareBracket, c.Properties, c.ModuleProperties]))
    return !1;
  let s = 0, o = 0, a = 0, h = e;
  for (; h < u(this, K).length && (i === G.Digit || i === G.Decimal || i === G.Minus && h === e); )
    i === G.Digit ? s++ : i === G.Decimal ? o++ : a++, h++, i = G.getCategory(u(this, K).charCodeAt(h));
  return s >= 1 && o <= 1 && a <= 1;
}, /**
 * Gets a complete number literal including a leading - and any decimal places
 * @param {Number} localIndex The index of the first character in the number.
 * @returns {String} The number literal (a string).
 */
vr = function(i) {
  let e = i;
  for (let n = i + 1; n < u(this, K).length; n++) {
    const s = G.getCategory(u(this, K).charCodeAt(n));
    if (s === G.Digit || s === G.Decimal)
      e = n;
    else break;
  }
  return u(this, K).substring(i, e + 1);
}, /**
 * Creates an expression representing the number and adds it to the expressions array.
 * @param {Number} localIndex The line index of the number literal.
 * @returns {Number} The index of the last character processed.
 */
Rr = function(i) {
  const e = m(this, C, vr).call(this, i);
  return u(this, te).push(new qi(e, u(this, Pe), u(this, ve) + i, i)), i + e.length - 1;
}, //#endregion - parsing numbers
//#region - parsing operators
/**
 * Checks if a single character could be part of a multi character operator e.g. +=
 * @param {Character} category The Character to check
 * @returns {Boolean} True if the character *could* be the start of a multi character operator
 */
Er = function(i) {
  return i === G.Equals || i === G.Exclamation || i === G.Minus || i === G.Plus || i === G.Asterisk || i === G.ForwardSlash || i === G.Modulo || i === G.GreaterThan || i === G.LessThan || i === G.Colon;
}, /**
 * Identifies and adds an operator that might be multiple characters long e.g. + or ==
 * @param {Number} localIndex The local index of the first character in the operator
 * @returns {Number} The local index of the last character processed.
 */
Ur = function(i) {
  let e = u(this, K).charAt(i), n = e, s = i;
  for (; (n === "!" || Ze(n).entity !== t.Unknown) && s < u(this, K).length; )
    e = n, s++, n += u(this, K).charAt(s);
  let o = Ze(e);
  return e === "*" && m(this, C, ze).call(this) && m(this, C, Ae).call(this).is(t.ImportKeyword) && (o = new Q(t.ImportAll, c.OtherKeywords)), u(this, te).push(sn(e, o, u(this, Pe), u(this, ve) + i, i)), i + e.length - 1;
}, /**
 * Checks if the current
 * @param {Character} currentCharCategory 
 * @returns {Boolean} True if the current character is not a space or tab, false otherwise.
 */
Gr = function(i) {
  return i !== G.Space && i !== G.Tab;
}, /**
 * Creates and adds an expression for a single character
 * @param {Number} localIndex The local index of the character
 */
Jr = function(i) {
  let e = u(this, K).charAt(i);
  m(this, C, Kr).call(this, e);
  const n = Ze(e);
  u(this, te).push(sn(e, n, u(this, Pe), u(this, ve) + i, i));
}, /**
 * Checks if the given character is a line separator in Python, either ; or : outside of a group
 * @param {Character} currentCharCategory The character to check
 * @returns {Boolean} True if the character is a Python line separator, false otherwise.
 */
$r = function(i) {
  return i === G.Semicolon ? !0 : !!(i === G.Colon && m(this, C, ze).call(this) && u(this, te)[0].isOneOf([t.IfDefinition, t.ElifDefinition, t.ElseDefinition, t.FunctionDefinition, t.ClassDefinition, t.ForDefinition, t.WhileDefinition, t.TryDefinition, t.ExceptDefinition]) && u(this, Se)["{"] <= 0 && u(this, Se)["("] <= 0 && u(this, Se)["["] <= 0);
}, /**
 * Updates the counts of open group characters (open parentheses) depending on the provided 
 * text
 * @param {String} text The text to use for the update.
 */
Kr = function(i) {
  u(this, Se).hasOwnProperty(i) ? u(this, Se)[i]++ : i === ")" ? u(this, Se)["("]-- : i === "]" ? u(this, Se)["["]-- : i === "}" && u(this, Se)["{"]--;
};
var M, Ui, Wr, qr, jr, Hr, zr, Qr, Xr, Zr, Gi, Yr, _r, ea, ta, pe, na, sa, ia, Ji, oa, $i, ra, Ki, aa, la, ca, ua, Wi, da;
const Qn = class Qn {
  /**
   * Takes an expressions array and combines individual expressions into multipart expressions
   * where appropriate.
   * @param {ExpressionNode[]} expressions An array of expression nodes
   * @returns {ExpressionNode[]} The converted expressions
   */
  static createTree(i) {
    let e = i.filter((n) => !n.is(t.ContinuationLine));
    return m(this, M, Hr).call(this, i) ? [m(this, M, Qr).call(this, i)] : (e.length > 1 && (e = m(this, M, ia).call(this, e), e = m(this, M, sa).call(this, e), e = m(this, M, Zr).call(this, e), e = m(this, M, na).call(this, e), e = m(this, M, oa).call(this, e), e = m(this, M, ra).call(this, e), e = m(this, M, aa).call(this, e), e = m(this, M, la).call(this, e), e = m(this, M, ca).call(this, e), e = m(this, M, da).call(this, e)), e);
  }
  /**
   * Splits an array into separate arrays of expressions using the split entity. A split
   * will only be made if the split entity is not in brackets
   * @param {ExpressionNode[]} expressions 
   * @param {ExpressionEntity} splitEntity 
   * @returns {ExpressionNode[]}
   */
  static split(i, e) {
    return this.splitMultiple(i, [e]);
  }
  /**
   * Splits an array into separate arrays of expressions using the split entity. A split
   * will only be made if the split entity is not in brackets
   * @param {ExpressionNode[]} expressions 
   * @param {ExpressionEntity[]} splitEntities 
   * @returns {ExpressionNode[]}
   */
  static splitMultiple(i, e) {
    const n = [];
    let s = 0, o = 0, a = 0, h = 0;
    for (let p = 0; p < i.length; p++)
      if (p === h && i[p].isOneOf(e))
        h++;
      else if (i[p].isOneOf(e) && p > h || p === i.length - 1) {
        if (s === 0 && o === 0 && a === 0 || p === i.length - 1 && (s === 1 && i[p].is(t.CloseParenthesis) || a === 1 && i[p].is(t.CloseSquareBracket) || o === 1 && i[p].is(t.CloseBrace))) {
          const w = i.slice(h, i[p].isOneOf(e) ? p : p + 1);
          n.push(w), h = p + 1;
        }
      } else i[p].is(t.OpenParenthesis) ? s++ : i[p].is(t.CloseParenthesis) ? s-- : i[p].is(t.OpenBrace) ? o++ : i[p].is(t.CloseBrace) ? o-- : i[p].is(t.OpenSquareBracket) ? a++ : i[p].is(t.CloseSquareBracket) && a--;
    return n;
  }
  /**
   * Connects variables in a new statement to variables created in the block so far
   * @param {Statement} statement The statement being processed
   * @param {StatementBlock} block The block containing the statement
   */
  static connectVariableUsages(i, e) {
    var w, S;
    const n = e.getScope();
    !i.isBlank() && i.getFirstExpression().is(t.ImportStatement) && m(w = Qn, M, jr).call(w, i, n), i.isBlockStatement() && !i.isBlank() && i.getFirstExpression().is(t.ForDefinitionStatement) && (e = m(S = Qn, M, qr).call(S, e));
    const s = i.getVariableUsages(), o = n.getVariableMap(), a = n.findAllModules(), h = new Map(Array.from(a.values()).flatMap((F) => Array.from(F.getDirectImports()))), p = !i.isBlank() && i.getFirstExpression().is(t.GlobalStatement);
    for (let [F, N] of s) {
      if (e.getBlockEntity() === t.ClassDefinition && N.length > 0 && (N[0].getParent() === void 0 || N[0].getParent().is(t.AssignmentStatement) && N[0].getParent().getTargetVariables().includes(N[0]))) {
        m(this, M, Ui).call(this, N[0], e.getClassType(), i, e, n);
        continue;
      }
      let L = N.map((U) => new Vo(U, e, p));
      if (p && n.addGlobalVar(F), o.has(F)) {
        o.get(F).addUsages(L);
        for (const U of L) {
          const x = U.getVariable().getParent();
          if (x && x.is(t.PropertyCallExpression) && x.getObject().getDataType().isCustom) {
            const ot = x.getObject().getDataType();
            m(this, M, Ui).call(this, x.getProperty(), ot, i, e, n);
          }
        }
      } else {
        if (a.has(F))
          L[0].getVariable().setDataType(fi(a.get(F).getEntity()));
        else if (h.has(F)) {
          const x = en.has(h.get(F).entity) ? en.get(h.get(F).entity) : d.Unknown;
          L[0].getVariable().setDataType(x);
        }
        const U = new Po(L[0], i, e);
        if (L.length > 1 && U.addUsages(L.slice(1)), m(this, M, Wr).call(this, e, F, U.getUsages()[0].getVariable()) && this.checkIfVariableExistsInParent(U, e))
          continue;
        o.set(F, U);
      }
    }
  }
  /**
   * Connects statements for graph generation
   * @param {Statement[]} statements 
   */
  static makeGraphConnections(i) {
    const e = i.filter((s) => !s.isBlank());
    if (e.length <= 1)
      return;
    const n = e[e.length - 1];
    if (!n.isBlank()) {
      let s = e[e.length - 2], o;
      if (s.isBlockStatement()) {
        o = s.getDefinitionStatement().getExpressions();
        let a = s.getFirstExpression(), h = n.getFirstExpression();
        if (!(a.isOneOf([t.IfDefinitionStatement, t.ElifDefinitionStatement]) && h.isOneOf([t.ElseDefinitionStatement, t.ElifDefinitionStatement]))) {
          const p = s.getExpressions();
          p[p.length - 1].addConnection(n.getFirstExpression());
          const w = s.getStatements();
          w.length > 1 && w[w.length - 1].isBlockStatement() && w[w.length - 1].getDefinitionStatement().getFirstExpression().addConnection(n.getFirstExpression());
        }
        if (!h.isOneOf([t.ElifDefinitionStatement, t.ElseDefinitionStatement, t.ReturnStatement]) && a.isOneOf([t.IfDefinitionStatement, t.ElifDefinitionStatement, t.ElseDefinitionStatement])) {
          const p = [];
          for (let w = e.length - 2; w >= 0; w--) {
            const S = e[w].getFirstExpression();
            if (S.isOneOf([t.IfDefinitionStatement, t.ElifDefinitionStatement, t.ElseDefinitionStatement]) && (p.push(e[w]), S.is(t.IfDefinitionStatement)))
              break;
          }
          for (const w of p)
            try {
              const S = w.getStatements();
              S[S.length - 1].getFirstExpression().addConnection(n.getFirstExpression());
            } catch (S) {
              console.log(S), console.log(w);
            }
        }
      } else
        o = s.getExpressions();
      o[0].addConnection(n.getFirstExpression());
    }
  }
  /**
   * Connects calls to user defined functions to the function expression that stores
   * return type information
   * @param {Statement} statement
   * @param {ScopeBlock} scopeBlock
   */
  static connectUserDefinedFunctions(i, e) {
    const n = e.findAllFunctions(), s = e.getRootBlock().getUserDefinedClasses(), o = i.getExpressions();
    for (let a of o) {
      const h = a.getExpressionsOfKind(t.UserDefinedFunctionCall);
      for (let p of h) {
        const w = p.getFunctionName();
        if (n.has(w)) {
          const S = n.get(w);
          p.setDataType(S.getDataType()), S.addObserver(p);
        } else if (s.has(w)) {
          const S = s.get(w);
          p.setDataType(S);
        } else
          e.addUnconnectedFunctionCall(p);
      }
    }
  }
  /**
   * Connects calls to user defined methods to the method expression that stores
   * return type information
   * @param {Statement} statement
   * @param {ScopeBlock} scopeBlock
   */
  static connectUserDefinedMethods(i, e) {
    const n = e.findAllFunctions();
    for (const [o, a] of n.entries())
      a.is(t.MethodName) || n.delete(o);
    const s = i.getExpressions();
    for (let o of s) {
      const a = o.getExpressionsOfKind(t.UserDefinedMethodCall);
      for (let h of a) {
        const p = h.getMethodName();
        if (n.has(p)) {
          const w = n.get(p);
          h.setDataType(w.getDataType()), w.addObserver(h);
        } else
          e.addUnconnectedMethodCall(h);
      }
    }
  }
  /**
   * Checks if the variable already exists in a higher scope and if so, adds usages to higher scope
   * @param {VariableInfo} vInfo 
   * @param {StatementBlock}
   * @returns {Boolean} True if the variable does exit in a parent, false otherwise
   */
  static checkIfVariableExistsInParent(i, e) {
    let n = e.getScope().getParentBlock();
    const s = i.getUsages()[0].getVariable();
    if (!i.isParameter() && (e.getScope().getGlobalVars().has(i.getName()) || !s.isAssignedOrChanged() || s.isObjectOfMethodCall() || s.isSubscripted()))
      for (; n !== void 0 && n.getScope() !== void 0; ) {
        const o = n.getScope().getVariableMap();
        if (o.has(i.getName())) {
          const a = o.get(i.getName());
          i.setDefinedInBlock(a.getDefinedInBlock());
          const h = a.getUsages();
          return i.insertUsages(h), !0;
        }
        n = n.getScope().getParentBlock();
      }
    return !1;
  }
  /**
   * 
   * @param {ExpressionNode[]} expressions 
   * @returns {ExpressionNode[][]}
   */
  static checkForListComp(i) {
    const e = this.split(i, t.Comma);
    let n = [];
    for (let s = 0; s < e.length; s++)
      s < e.length - 1 && ts(e[s], t.ForDefinition) && ts(e[s + 1], t.InKeyword) ? (n.push(e[s].concat(i[n.length + e[s].length], e[s + 1])), s++) : n.push(e[s]);
    return n;
  }
  //#endregion
};
M = new WeakSet(), Ui = function(i, e, n, s, o) {
  const a = i.getTextValue(), h = new Vo(i, s);
  if (e.attributes.has(a))
    e.attributes.get(a).addUsage(h);
  else {
    const p = o.getNearestParentOfAny([t.ClassDefinition]), w = new Po(h, n, s);
    p && p.getClassType().name === e.name ? e.attributes.set(a, w) : console.log("add to unconnected attribute tracking");
  }
}, Wr = function(i, e, n) {
  let s = i.getScope();
  for (; s !== void 0; ) {
    if (s.getVariableMap().has(e)) {
      if (!n.isAssignedOrChanged() || n.isObjectOfMethodCall() || n.isSubscripted())
        return !0;
    } else if (s.getGlobalVars().has(e))
      return !0;
    s = s.getParentBlock(), s !== void 0 && (s = s.getScope());
  }
  return !1;
}, qr = function(i) {
  const e = i.getChildBlocks();
  return e.length > 0 && e[e.length - 1].getBlockEntity() === t.ForDefinition && (i = e[e.length - 1]), i;
}, jr = function(i, e) {
  const n = i.getRawExpressions(), s = e.getModuleMap(), o = [];
  let a = !1;
  for (const h of n)
    if (h.isOneOf([t.ModuleName, c.BuiltInModules]))
      if (a)
        for (const p of o)
          p.getEntity() === h.getEntity() && p.setAlias(h.getTextValue());
      else {
        const p = new Qu(h.getTextValue(), h.getEntity());
        o.push(p);
      }
    else if (h.is(t.AsKeyword))
      a = h;
    else if (h.isOneOf([c.ModuleProperties, t.NamedImport]))
      for (const p of o)
        p.addDirectImport(h.getTextValue(), Xu(h.getEntity(), h.getCategory()));
    else if (h.is(t.ImportAll))
      for (const p of o)
        p.setImportAll();
  for (const h of o)
    s.set(h.getAlias(), h);
}, Hr = function(i) {
  return i.length > 0 && i[0].is(c.BlockDefinitions) && !m(this, M, zr).call(this, i);
}, zr = function(i) {
  if (i.length === 1) return !1;
  const e = Zt(i, t.AssignmentOperator);
  return e === -1 ? !1 : e === 1 ? !0 : !!(i[1].is(t.Comma) && e % 2 === 1);
}, Qr = function(i) {
  const e = ge(i);
  switch (i[0].getEntity()) {
    case t.FunctionDefinition:
      return m(this, M, Xr).call(this, e, i);
    case t.IfDefinition:
      return new rt(e, i, t.IfDefinitionStatement);
    case t.ElifDefinition:
      return new rt(e, i, t.ElifDefinitionStatement);
    case t.WhileDefinition:
      return new rt(e, i, t.WhileDefinitionStatement);
    case t.ForDefinition:
      return new rt(e, i, t.ForDefinitionStatement);
    case t.ExceptDefinition:
      return new rt(e, i, t.ExceptDefinitionStatement);
    case t.ElseDefinition:
      return new rt(e, i, t.ElseDefinitionStatement);
    case t.TryDefinition:
      return new rt(e, i, t.TryDefinitionStatement);
    case t.FinallyDefinition:
      return new rt(e, i, t.FinallyDefinitionStatement);
    case t.ClassDefinition:
      return new nd(e, i);
    case t.LambdaDefinition:
      return new Id(e, i);
    case t.WithKeyword:
      return new rt(e, i, t.WithDefinitionStatement);
    default:
      return i;
  }
}, Xr = function(i, e) {
  return e.length < 2 || e[1].is(t.FunctionName) ? new ed(i, e) : new td(i, e);
}, Zr = function(i) {
  let e = m(this, M, Gi).call(this, i);
  if (e.sort((o, a) => o[0] - a[0]), e.length === 0)
    return i;
  let n = i, s;
  for (; e.length > 0 && (s === void 0 || e.length !== s.length); ) {
    const o = n[e[0][0]];
    o.is(t.OpenParenthesis) ? n = m(this, M, Yr).call(this, e[0], n) : o.is(t.OpenSquareBracket) ? n = m(this, M, _r).call(this, e[0], n) : n = m(this, M, ta).call(this, e[0], n), s = e, e = m(this, M, Gi).call(this, n), e.sort((a, h) => a[0] - h[0]);
  }
  return n;
}, Gi = function(i) {
  let e = [], n = [];
  for (let s = 0; s < i.length; s++)
    if ($o(i[s].getEntity()))
      n.push({
        openEntity: i[s].getEntity(),
        closeEntity: iu(i[s].getEntity()),
        openIndex: s,
        closeIndex: -1
      });
    else if (su(i[s].getEntity())) {
      let o = n.length - 1;
      for (; o >= 0; ) {
        if (n[o].closeEntity === i[s].getEntity()) {
          n[o].closeIndex = s, e.push([n[o].openIndex, n[o].closeIndex]), n.splice(o, 1);
          break;
        }
        o--;
      }
    }
  return e;
}, Yr = function(i, e) {
  const n = i[0], s = i[1];
  if (n > 0 && e[n - 1].isOneOf([c.BuiltInFunctions, t.FunctionName])) {
    const a = e[n - 1].is(c.BuiltInFunctions) ? t.BuiltInFunctionCall : t.UserDefinedFunctionCall, h = m(this, M, pe).call(this, e.slice(n - 1, s + 1), a);
    return e.slice(0, n - 1).concat([h], e.slice(s + 1));
  } else if (n > 2 && e[n - 1].isOneOf([c.BuiltInMethods, t.MethodName, c.MagicMethods, c.ModuleFunctions]) && e[n - 2].is(t.Dot)) {
    const a = e[n - 1].is(t.MethodName) && !e[n - 1].is(c.ModuleFunctions) ? t.UserDefinedMethodCall : t.BuiltInMethodCall, h = m(this, M, pe).call(this, e.slice(n - 3, s + 1), a);
    return e.slice(0, n - 3).concat([h], e.slice(s + 1));
  } else if (n > 0 && e[n - 1].is(t.ExceptionName)) {
    const a = m(this, M, pe).call(this, e.slice(n - 1, s + 1), t.ExceptionCall);
    return e.slice(0, n - 1).concat([a], e.slice(s + 1));
  } else if (s > n + 1) {
    const a = e.slice(n + 1, s), h = this.split(a, t.Comma);
    if (h.length > 1) {
      const p = m(this, M, pe).call(this, e.slice(n, s + 1), t.TupleDefinition, h);
      return e.slice(0, n).concat([p], e.slice(s + 1));
    }
  }
  const o = m(this, M, pe).call(this, e.slice(n, s + 1), t.GroupStatement);
  return e.slice(0, n).concat([o], e.slice(s + 1));
}, _r = function(i, e) {
  const n = i[0], s = i[1];
  let o = [], a = [];
  if (s > n + 1 && (a = e.slice(n + 1, s), o = this.checkForListComp(a)), n === 0 || o.length === 0 || e[n - 1].isOneOf([
    c.ComparisonOperators,
    c.LogicalOperators,
    c.MathsOperators,
    t.OpenParenthesis,
    t.OpenSquareBracket,
    t.OpenBrace,
    t.Comma,
    t.Colon,
    t.Separator,
    c.OtherKeywords,
    t.ContinuationLine
  ])) {
    const h = m(this, M, pe).call(this, e.slice(n, s + 1), t.ListDefinition, o);
    return e.slice(0, n).concat([h], e.slice(s + 1));
  } else {
    let h = this.split(a, t.Colon);
    const p = m(this, M, ea).call(this, h, e, n, s) ? m(this, M, pe).call(this, e.slice(n, s + 1), t.Slice, h) : m(this, M, pe).call(this, e.slice(n, s + 1), t.IndexKey);
    let w = n - 1;
    for (; w >= 0 && !e[w].isOneOf([
      c.Identifiers,
      c.BuiltInFunctions,
      c.CompoundTypes,
      t.BuiltInFunctionCall,
      t.BuiltInMethodCall,
      t.UserDefinedFunctionCall,
      t.UserDefinedMethodCall,
      t.SubscriptedExpression,
      t.PropertyCallExpression
    ]); )
      w--;
    w = Math.max(w, 0);
    const S = m(this, M, pe).call(this, [...e.slice(w, n), p], t.SubscriptedExpression);
    return e.slice(0, w).concat([S], e.slice(s + 1));
  }
}, ea = function(i, e, n, s) {
  return i.length > 1 || e[n + 1].is(t.Colon) || e[s - 1].is(t.Colon);
}, ta = function(i, e) {
  const n = i[0], s = i[1];
  let o;
  if (s === n + 1)
    o = m(this, M, pe).call(this, e.slice(n, s + 1), t.DictDefinition);
  else {
    const a = e.slice(n + 1, s), h = this.split(a, t.Comma), p = [];
    for (let w of h) {
      const S = this.split(w, t.Colon);
      S.length === 2 && p.push(S);
    }
    p.length === h.length ? o = m(this, M, pe).call(this, e.slice(n, s + 1), t.DictDefinition, p) : o = m(this, M, pe).call(this, e.slice(n, s + 1), t.SetDefinition, h);
  }
  return e.slice(0, n).concat([o], e.slice(s + 1));
}, pe = function(i, e, n = []) {
  const s = ge(i);
  switch (e) {
    case t.BuiltInFunctionCall:
      return new sd(s, i);
    case t.UserDefinedFunctionCall:
      return new id(s, i);
    case t.BuiltInMethodCall:
      return new rd(s, i);
    case t.UserDefinedMethodCall:
      return new ad(s, i);
    case t.ExceptionCall:
      return new od(s, i);
    case t.TupleDefinition:
    case t.ListDefinition:
    case t.SetDefinition:
    case t.DictDefinition:
      return new mi(s, i, e, n);
    case t.GroupStatement:
      return new Sd(s, i);
    case t.Slice:
      return new bl(s, i, n);
    case t.IndexKey:
      return new Il(s, i);
    case t.SubscriptedExpression:
      return new Xs(s, i);
    case t.CalculatedExpression:
      return new Zs(s, i);
    case t.ComparisonExpression:
      return new _i(s, i);
    case t.IteratorExpression:
      return new Oo(s, i);
    case t.BooleanExpression:
      return new to(s, i);
    default:
      throw new Error("Unknown multipart expression type");
  }
}, na = function(i) {
  let e = m(this, M, Ji).call(this, i);
  for (; e > -1; ) {
    const n = e > 0 && !i[e - 1].isOneOf([c.MathsOperators, c.LogicalOperators, c.ComparisonOperators, c.OtherKeywords]) ? e - 1 : e, s = m(this, M, pe).call(this, i.slice(n, e + 2), t.CalculatedExpression);
    i = i.slice(0, n).concat([s], i.slice(e + 2)), e = m(this, M, Ji).call(this, i);
  }
  return i;
}, sa = function(i) {
  if (i.length < 3) return i;
  let e = 1;
  for (; e < i.length - 1; )
    if (i[e].is(t.Dot) && i[e + 1].isOneOf([t.PropertyName, c.ModuleProperties])) {
      const n = ge([i[e - 1], i[e], i[e + 1]]), s = new Lo(
        n,
        [i[e - 1], i[e], i[e + 1]],
        t.PropertyCallExpression,
        c.MultipartValue
      );
      i = i.slice(0, e - 1).concat([s], i.slice(e + 2)), e--;
    } else if (i[e].is(t.Dot) && !i[e + 1].isOneOf([t.PropertyName, c.ModuleProperties]) && (e + 2 >= i.length || !i[e + 2].isOneOf([t.OpenParenthesis]))) {
      const n = ge([i[e - 1], i[e], i[e + 1]]), s = new Lo(
        n,
        [i[e - 1], i[e], i[e + 1]],
        t.PropertyCallExpression,
        c.MultipartValue
      );
      i = i.slice(0, e - 1).concat([s], i.slice(e + 2)), e--;
    } else
      e++;
  return i;
}, ia = function(i) {
  if (i.length < 2) return i;
  let e = 0;
  for (; e < i.length - 1; )
    if (i[e].isStringLiteral() && i[e + 1].isStringLiteral()) {
      const n = ge([i[e], i[e + 1]]), s = new ud(n, [i[e], i[e + 1]]);
      i = i.slice(0, e).concat([s], i.slice(e + 2));
    } else
      e++;
  return i;
}, Ji = function(i) {
  const e = [], n = [];
  for (let s = 0; s < i.length; s++) {
    if (i[s].is(t.ExponentOperator))
      return s;
    i[s].isOneOf([t.MultiplyOperator, t.DivideOperator, t.IntDivideOperator, t.ModulusOperator]) ? e.push(s) : i[s].isOneOf([t.AddOperator, t.SubtractOperator]) && n.push(s);
  }
  return e.length > 0 ? e[0] : n.length > 0 ? n[0] : -1;
}, oa = function(i) {
  let e = m(this, M, $i).call(this, i);
  for (; e > 0; ) {
    let n = e - 1, s;
    i[e].is(t.InKeyword) && n > 1 && i[n - 1].is(t.Comma) ? (n = n - 2, s = m(this, M, pe).call(this, i.slice(n, e + 2), t.IteratorExpression)) : i[e].is(t.InKeyword) && e === 1 && e + 1 < i.length && i[e + 1].is(t.BuiltInFunctionCall) && i[e + 1].getFunctionExpression().isOneOf([t.EnumerateFunction]) ? (n = 0, s = m(this, M, pe).call(this, i.slice(n, e + 2), t.IteratorExpression)) : s = m(this, M, pe).call(this, i.slice(n, e + 2), t.ComparisonExpression), i = i.slice(0, n).concat([s], i.slice(e + 2)), e = m(this, M, $i).call(this, i);
  }
  return i;
}, $i = function(i) {
  for (let e = 0; e < i.length; e++)
    if (i[e].is(c.ComparisonOperators))
      return e;
  return -1;
}, ra = function(i) {
  let e = m(this, M, Ki).call(this, i);
  for (; e > -1; ) {
    const s = (i[e].is(t.NotOperator) ? 2 : 3) === 2 ? e : e - 1, o = s >= 0 ? i.slice(s, e + 2) : i.slice(e, e + 2), a = m(this, M, pe).call(this, o, t.BooleanExpression);
    i = s >= 0 ? i.slice(0, s).concat([a], i.slice(e + 2)) : i.slice(0, e).concat([a], i.slice(e + 2)), e = m(this, M, Ki).call(this, i);
  }
  return i;
}, Ki = function(i) {
  let e = [], n = [];
  for (let s = 0; s < i.length; s++) {
    if (i[s].is(t.NotOperator))
      return s;
    i[s].is(t.AndOperator) ? e.push(s) : i[s].is(t.OrOperator) && n.push(s);
  }
  return e.length > 0 ? e[0] : n.length > 0 ? n[0] : -1;
}, aa = function(i) {
  let e = Zt(i, t.IfDefinition);
  for (; e > -1 && i.length >= e + 3 && i[e + 2].is(t.ElseDefinition); ) {
    const s = i.slice(e - 1, e + 4), o = ge(s), a = new io(o, s);
    i = i.slice(0, e - 1).concat([a], i.slice(e + 4)), e = Zt(i, t.IfDefinition);
  }
  return i;
}, la = function(i) {
  for (; i.length >= 3 && i[1].is(t.ForDefinition); ) {
    const e = i.length >= 5 && i[3].is(t.IfDefinition), n = i.slice(0, e ? 5 : 3), s = ge(n);
    n[2].is(t.ComparisonExpression) && (n[2] = i[2].convertToIterator()), i = [new ro(s, n)].concat(i.slice(e ? 5 : 3));
  }
  return i;
}, ca = function(i) {
  let e = m(this, M, Wi).call(this, i);
  for (; e > -1; ) {
    const n = m(this, M, ua).call(this, i, e - 1), s = i.slice(n), o = ge(s), a = i[e].isOneOf([t.AssignmentOperator, t.WalrusOperator]) ? new tl(o, s) : new wd(o, s);
    i = i.slice(0, n).concat([a]), e = m(this, M, Wi).call(this, i);
  }
  return i;
}, ua = function(i, e) {
  let n = -1;
  for (let s = e; s >= 0 && !(i[s].isChangeOperator() || i[s].isOneOf([c.OtherKeywords, c.BlockDefinitions])); s--)
    n = s;
  return Math.max(n, 0);
}, Wi = function(i) {
  for (let e = i.length - 1; e > 0; e--)
    if (i[e].isChangeOperator())
      return e;
  return -1;
}, da = function(i) {
  return i.length > 0 && (i[0].is(t.ReturnKeyword) ? i = [new yd(ge(i), i)] : i[0].isOneOf([t.ImportKeyword, t.FromKeyword]) ? i = [new Fd(ge(i), i)] : i[0].isOneOf([t.GlobalKeyword, t.AssertKeyword, t.RaiseKeyword]) && (i = [new Nd(ge(i), i)])), i;
}, b(Qn, M);
let H = Qn;
function sn(g, i, e, n, s, o = n + g.length, a = e) {
  switch (i.entity) {
    case t.ExceptionName:
      return new pd(g, i.entity, i.category, e, n, s);
    case t.VariableName:
      return new Bn(g, i.entity, i.category, e, n, s);
    case t.FunctionName:
      return new Xa(g, i.entity, i.category, e, n, s);
    case t.MethodName:
      return new dd(g, i.entity, i.category, e, n, s);
    case t.ClassName:
      return new md(g, i.entity, i.category, e, n, s);
    case t.PropertyName:
      return new Fi(g, i.entity, i.category, e, n, s);
    case t.ModuleName:
      return new vo(g, i.entity, i.category, e, n, s);
    case t.StringLiteral:
      return new va(g, e, n, s, o, a);
    case t.TrueType:
    case t.FalseType:
    case t.NoneType:
      return new fd(g, i.entity, i.category, e, n, s);
    case t.ListDefinition:
    case t.TupleDefinition:
    case t.SetDefinition:
    case t.DictDefinition:
      return new mi(g, [], i.entity, []);
    case t.IndexKey:
      return new Il(g, []);
    case t.Slice:
      return new bl(g, [], []);
    case t.NamedImport:
      return new Fi(g, i.entity, i.category, e, n, s);
  }
  switch (i.category) {
    case c.BuiltInFunctions:
    case c.BuiltInMethods:
    case c.ModuleFunctions:
    case c.MagicMethods:
      return new hd(g, i.entity, i.category, e, n, s);
    case c.BuiltInModules:
      return new vo(g, i.entity, i.category, e, n, s);
    case c.Types:
      return new gd(g, i.entity, i.category, e, n, s);
    case c.SpecialVariables:
      return new Bn(g, i.entity, i.category, e, n, s);
    case c.ModuleProperties:
      return new Fi(g, i.entity, i.category, e, n, s);
    case c.LogicalOperators:
    case c.MathsOperators:
    case c.ComparisonOperators:
    case c.OtherKeywords:
    case c.BlockDefinitions:
    case c.Other:
    case c.TypeHint:
      return new $a(g, i.entity, i.category, e, n, s);
    default:
      return new it(g, i.entity, i.category, e, n, s, d.Unknown);
  }
}
var St, bt, It, ct, gn, pn, mn, ps, wn, Te, qt, Sn, ms;
class it extends Hs {
  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine The index of the first character of the expression in the raw text of the line (based on line breaks)
   * @param {DataType} dataType Optional. The data type of the individual expression. NotParsed by default.
   * @param {Number} documentEndIndex Optional. The index of the last characters of the expression in the raw text of the document
   * @param {Number} endLineNumber Optional. The zero-indexed document line number that the expression ends on. Same as start line by default.
   */
  constructor(e, n, s, o, a, h, p = d.NotParsed, w = a + e.length - 1, S = o) {
    super();
    /** @type {String} */
    b(this, St);
    // The raw text of the node
    /** @type {ExpressionEntity} */
    b(this, bt);
    /** @type {ExpressionCategory} */
    b(this, It);
    /** @type {ExpressionNode} */
    b(this, ct);
    /** @type {Number} */
    b(this, gn);
    // The zero-indexed document line number that the expression starts on
    /** @type {Number} */
    b(this, pn);
    // The zero-indexed document line number that the expression ends on
    /** @type {Number} */
    b(this, mn);
    // The index of the first character in #textValue in the raw document string
    /** @type {Number} */
    b(this, ps);
    /** @type {Number} */
    b(this, wn);
    // The index of the last character (inclusive) in #textValue in the raw document string
    /** @type {DataType} */
    b(this, Te);
    // The DataType of this individual expression
    /** @type {String} */
    b(this, qt, "unknown");
    /** @type {String} */
    b(this, Sn, "unknown");
    /** @type {ExpressionNode[]} */
    b(this, ms, []);
    if (w < a)
      throw new Error("Could not create expression: end index cannot be less than start index");
    y(this, St, e), y(this, bt, n), y(this, It, s), y(this, gn, o), y(this, mn, a), y(this, ps, h), y(this, wn, w), y(this, pn, S), y(this, Te, p);
  }
  /**
   * Gets the text value of the expression.
   * @returns {String} The text value of the expression.
   */
  getTextValue() {
    return u(this, St);
  }
  /**
   * Sets the text value of the expression.
   * @param {String} value The new text value of the expression.
   */
  setTextValue(e) {
    y(this, St, e);
  }
  /**
   * Gets the expression entity
   * @returns {ExpressionEntity}
   */
  getEntity() {
    return u(this, bt);
  }
  setEntity(e) {
    y(this, bt, e);
  }
  /**
   * Gets the expression category
   * @returns {ExpressionCategory}
   */
  getCategory() {
    return u(this, It);
  }
  setCategory(e) {
    y(this, It, e);
  }
  /**
   * Gets the zero-indexed line number that the expression starts
   * on.
   * @returns {Number} The starting document line number.
   */
  getStartLineNumber() {
    return u(this, gn);
  }
  /**
   * Gets the zero-indexed line number that the expression ends on
   * @returns {Number} The ending line number
   */
  getEndLineNumber() {
    return u(this, pn);
  }
  /**
   * Sets the document end line number
   * @param {Number} num The new line number
   */
  setEndLineNumber(e) {
    y(this, pn, e);
  }
  /**
   * Gets the index of the first character of the expression in the
   * raw text of the document.
   * @returns {Number} The index of the first character of the expression
   */
  getDocumentStartIndex() {
    return u(this, mn);
  }
  getIndexOnLine() {
    return u(this, ps);
  }
  /**
   * Gets the index of the last character of the expression in the
   * raw text of the document.
   * @returns {Number} The index of the last character of the expression
   */
  getDocumentEndIndex() {
    return u(this, wn);
  }
  /**
   * Sets the document end index
   * @param {Number} index The new index of the expression's end in the raw text of the document
   */
  setDocumentEndIndex(e) {
    y(this, wn, e);
  }
  /**
   * Gets the data type of the expression.
   * @returns {DataType} The data type of the expression.
   */
  getDataType() {
    return u(this, Te);
  }
  /**
   * Updates the data type of the expression. Triggers an
   * update to any observers.
   * @param {DataType} dataType The new data type.
   */
  setDataType(e) {
    e !== u(this, Te) && (y(this, Te, e), super.sendUpdate(e));
  }
  setBlockId(e) {
    u(this, qt) !== e && y(this, qt, e);
  }
  getBlockId() {
    return u(this, qt) === "unknown" && u(this, ct) !== void 0 ? u(this, ct).getBlockId() : u(this, qt);
  }
  setScopeId(e) {
    u(this, Sn) === "unknown" && y(this, Sn, e);
  }
  getScopeId() {
    return u(this, Sn);
  }
  /**
   * @override
   * @param {DataType} dataType 
   */
  typeUpdateReceived(e) {
    this.setDataType(e);
  }
  /**
   * The expression node that contains this node, if applicable.
   * @returns {ExpressionNode | undefined}
   */
  getParent() {
    return u(this, ct);
  }
  /**
   * Sets the parent of this node
   * @param {ExpressionNode} node 
   */
  setParent(e) {
    y(this, ct, e);
  }
  /**
   * Checks if this expression is part of an expression or statement of the given entity or category
   * @param {ExpressionEntity | ExpressionCategory} kind 
   */
  hasParentOfKind(e) {
    let n = this.getParent();
    for (; n !== void 0; )
      if (n.is(e))
        return !0;
    return !1;
  }
  /**
   * Checks if this expression has a parent of the given entity or category
   * @param {ExpressionEntity | ExpressionCategory} kind 
   * @return {ExpressionNode | undefined}
   */
  getParentOfKind(e) {
    let n = this.getParent();
    for (; n !== void 0; )
      if (n.is(e))
        return n;
  }
  /**
   * Gets the context of use... the parent expression
   * @returns {string}
   */
  getContextOfUse() {
    return u(this, ct) === void 0 ? "none" : u(this, ct).getEntity().name;
  }
  /**
   * Checks if this expression is or contains the given expression
   * @param {ExpressionNode} expression 
   */
  contains(e) {
    return this === e;
  }
  /**
   * Checks if this node matches the given characteristic. This should be 
   * implemented by each ExpressionNode child class.
   * @param {ExpressionEntity | ExpressionCategory | String} characteristic 
   * @returns {Boolean} True if this expression node is a match, false otherwise.
   */
  is(e) {
    return u(this, bt) === e || u(this, It) === e || u(this, St) === e;
  }
  /**
   * Checks if this node matches any of the given characteristics. This should be 
   * implemented by each ExpressionNode child class.
   * @param {Array<ExpressionEntity | ExpressionCategory | String>} characteristics 
   * @returns {Boolean} True if this expression node is a match, false otherwise.
   */
  isOneOf(e) {
    try {
      for (let n of e)
        if (this.is(n))
          return !0;
    } catch {
      try {
        return this.is(e);
      } catch {
        return !1;
      }
    }
    return !1;
  }
  /**
   * Checks if this expression can be subscripted (followed by an index, key, or slice).
   * @returns {Boolean} True if this type of expression can be subscripted, false otherwise
   */
  isSubscriptable() {
    return !1;
  }
  /**
   * Checks if this expression can be treated as a number (int, float, number, or bool)
   * @returns {Boolean}
   */
  isNumeric() {
    return u(this, Te) === d.Int || u(this, Te) === d.Float || u(this, Te) === d.Number || u(this, Te) === d.Bool;
  }
  /**
   * Checks if this expression can be treated as an int (int or bool)
   * @returns {Boolean}
   */
  isIntLike() {
    return u(this, Te) === d.Int || u(this, Te) === d.Bool;
  }
  /**
   * Checks if this expression is a non-float numeric - int, bool, number
   * @returns {Boolean}
   */
  isNonFloatNumeric() {
    return this.isIntLike() || u(this, Te) === d.Number;
  }
  /**
   * Checks if this expression is an assignment or value change operator.
   * @returns {Boolean}
   */
  isChangeOperator() {
    return this.isOneOf([t.AssignmentOperator, t.IncrementOperator, t.DecrementOperator, t.MultiplyAssignOperator, t.DivideAssignOperator, t.ExponentAssignOperator, t.IntDivideAssignOperator, t.RemainderAssignOperator, t.WalrusOperator]);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   */
  matchesPattern(e) {
    return this.getTextValue() === e.getTextValue() && this.getEntity() === e.getEntity();
  }
  /**
   * Checks whether this is a string literal for combination purposes.
   * @returns {Boolean}
   */
  isStringLiteral() {
    return !1;
  }
  /**
   * Whether or not this expression has child expressions. Should be overridden in multipart
   * expressions
   * @returns {Boolean} True if there are children, false if not
   */
  hasChildExpressions() {
    return !1;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity | ExpressionCategory | String} entity 
   * @returns {ExpressionNode[]}
   */
  getExpressionsOfKind(e) {
    const n = [];
    return this.is(e) && n.push(this), n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    if (this.isOneOf(e))
      return this;
  }
  /**
   * Gets all VariableExpressions that occur in the line.
   * @returns {VariableExpression[]}
   */
  getVariableExpressions() {
    return [];
  }
  /**
   * Gets all ExpressionNodes nested within this node, including this node.
   * @returns {ExpressionNode[]}
   */
  getAllNestedExpressions() {
    return [this];
  }
  /**
   * Checks any associated symptom rules and updates the symptom tracker
   */
  checkForSymptoms() {
    this.checkRules(this);
  }
  /**
   * Gets all nodes this node is connected to
   * @returns {ExpressionNode[]}
   */
  getConnectedTo() {
    return u(this, ms);
  }
  /**
   * Adds a new ExpressionNode to this node. Connections are directed so this node points 
   * to the new node but not the other way around
   * @param {ExpressionNode} node 
   */
  addConnection(e) {
    u(this, ms).push(e);
  }
  toJSON() {
    return {
      entity: u(this, bt).name,
      category: u(this, It).name,
      textValue: u(this, St),
      dataType: u(this, Te).name,
      lineNumber: u(this, gn),
      docIndex: u(this, mn)
    };
  }
}
St = new WeakMap(), bt = new WeakMap(), It = new WeakMap(), ct = new WeakMap(), gn = new WeakMap(), pn = new WeakMap(), mn = new WeakMap(), ps = new WeakMap(), wn = new WeakMap(), Te = new WeakMap(), qt = new WeakMap(), Sn = new WeakMap(), ms = new WeakMap();
var Re, ni, ha;
class ee extends it {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity The entity that describes the MultiPartExpression
   * @param {ExpressionCategory} category The category that describes the MultiPartExpression
   * @param {DataType} dataType Optional. The datatype of the multipart expression. NotParsed by default.
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s, o, a = d.NotParsed) {
    super(
      e,
      s,
      o,
      n.length > 0 ? n[0].getStartLineNumber() : -1,
      n.length > 0 ? n[0].getDocumentStartIndex() : -1,
      n.length > 0 ? n[0].getIndexOnLine() : -1,
      a,
      n.length > 0 ? n[n.length - 1].getDocumentEndIndex() : -1,
      n.length > 0 ? n[n.length - 1].getEndLineNumber() : -1
    );
    b(this, ni);
    /** @type {ExpressionNode[]} */
    b(this, Re);
    y(this, Re, n), m(this, ni, ha).call(this, u(this, Re));
  }
  //#region - overrides
  /**
   * @inheritdoc
   * @override
   */
  isSubscriptable() {
    return gi(this.getDataType());
  }
  /**
   * @inheritdoc
   */
  hasChildExpressions() {
    return u(this, Re).length > 0;
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of u(this, Re))
      n.getTextValue() !== "Placeholder" && (e = e.concat(n.getVariableExpressions()));
    return e;
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity();
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of u(this, Re))
      s.is(e) ? n.push(s) : n = n.concat(s.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of u(this, Re)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  contains(e) {
    if (super.contains(e))
      return !0;
    for (let n of u(this, Re))
      if (n.contains(e))
        return !0;
    return !1;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of this.getChildren())
      e.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForCounterRules(e) {
    super.checkForCounterRules(e);
    for (const n of this.getChildren())
      n.checkForCounterRules(n);
  }
  /**
   * @override
   */
  setBlockId(e) {
    super.setBlockId(e);
    for (const n of this.getChildren())
      n.setBlockId(e);
  }
  /**
   * @override
   */
  setScopeId(e) {
    super.setScopeId(e);
    for (const n of this.getChildren())
      n.setScopeId(e);
  }
  //#endregion - overrides
  //#region - extension methods
  /**
   * Gets the child expressions
   * @returns {ExpressionNode[]} The child expressions
   */
  getChildren() {
    return u(this, Re);
  }
  /**
   * Overwrites the current children with the provided children.
   * @param {ExpressionNode[]} children An array of ExpressionNodes representing the child nodes
   */
  setChildren(e) {
    y(this, Re, e);
  }
  /**
   * Adds a child node to the list of children.
   * @param {ExpressionNode} child The child expression.
   */
  addChild(e) {
    u(this, Re).push(e);
  }
  /**
   * Checks if the expression is "complete" e.g. if an opening ( is closed. Should
   * be extended in child classes
   * @returns {Boolean} True if the expression represents a finished expression of its kind, false otherwise.
   */
  isComplete() {
    return this.hasChildExpressions();
  }
  //#endregion - extension methods
}
Re = new WeakMap(), ni = new WeakSet(), ha = function(e) {
  for (const n of e)
    n.setParent(this);
};
var me, ws, kn, fa, Pn, ga, pa, ma;
const Xn = class Xn extends ee {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity The entity that describes the MultiPartExpression
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s) {
    var p;
    const o = m(p = Xn, Pn, pa).call(p, n);
    super(e, o, s, c.BlockDefinitionStatement, d.NA);
    b(this, kn);
    /** @type {ExpressionNode[][]} */
    b(this, me);
    /** @type {Number} */
    b(this, ws, 0);
    const a = 3, h = o.length - 3;
    if (h < a)
      y(this, me, []);
    else {
      const w = o.slice(a, h + 1);
      y(this, me, H.split(w, t.Comma)), m(this, kn, ma).call(this);
    }
    this.addRule(m(this, kn, fa));
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 5 && e[0].is(t.FunctionDefinition) && e[1].isOneOf([t.FunctionName, t.MethodName]) && e[2].is(t.OpenParenthesis) && e[e.length - 2].is(t.CloseParenthesis) && e[e.length - 1].is(t.Colon) && Fo(e, t.OpenParenthesis, t.CloseParenthesis);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of u(this, me))
      for (let s of n)
        s.is(t.VariableName) ? e.push(s) : e = e.concat(s.getVariableExpressions());
    return e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of u(this, me))
      for (const o of s)
        o.is(e) ? n.push(o) : n = n.concat(o.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of u(this, me)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of u(this, me))
      for (const n of e)
        n.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForCounterRules(e) {
    super.checkForCounterRules(e);
    for (const n of u(this, me))
      for (const s of n)
        s.checkForCounterRules(s);
  }
  // setBlockId(id) {
  //     super.setBlockId(id); // CallableDefinitionStatement
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#parameters) {
  //         for (const p of item)
  //             p.setBlockId(id);
  //     }*/
  // }
  //#endregion - overrides
  /**
   * Gets the parameters
   * @returns {ExpressionNode[][]}
   */
  getParameters() {
    return u(this, me);
  }
  getOptionalParameterCount() {
    return u(this, ws);
  }
};
me = new WeakMap(), ws = new WeakMap(), kn = new WeakSet(), /**
 * Helper method. Checks if the name of this callable is a reserved word.
 * @param {CallableDefinitionStatement} callable 
 * @returns {Symptom[]}
 */
fa = function(e) {
  const n = [], s = e.getChildren();
  if (s.length > 1) {
    const o = Ze(s[1].getTextValue()).category;
    (o === c.BlockDefinitions || o === c.LogicalOperators || o === c.Types || o === c.OtherKeywords) && n.push(O.createStatementSymptom(
      I.DefinitionFollowedByReservedWord,
      s,
      0,
      1,
      {
        definitionType: s[0].getTextValue(),
        reservedWord: s[1].getTextValue()
      }
    ));
  }
  return n;
}, Pn = new WeakSet(), ga = function(e) {
  let n = -1, s = -1, o = 0;
  for (let a = 0; a < e.length; a++)
    if (e[a].is(t.OpenParenthesis))
      o++, n === -1 && (n = a);
    else if (e[a].is(t.CloseParenthesis) && (o--, o === 0)) {
      s = a;
      break;
    }
  return [n, s];
}, pa = function(e) {
  var a;
  let s = m(a = Xn, Pn, ga).call(a, e)[1] + 1, o = -1;
  for (; s < e.length; ) {
    if (e[s].is(t.Colon)) {
      o >= 0 && e.splice(o, s - o);
      break;
    } else e[s].is(t.TypeHintReturn) && (o = s);
    s++;
  }
  return e;
}, /**
 * Helper method that sets the data type of all parameters
 */
ma = function() {
  for (let e = 0; e < u(this, me).length; e++) {
    if (u(this, me)[e] = H.createTree(u(this, me)[e]), u(this, me)[e].length > 1) {
      const n = H.split(u(this, me)[e], t.Colon);
      u(this, me)[e] = n[0];
    }
    for (let n of u(this, me)[e])
      if (n.is(t.VariableName))
        n.setDataType(d.Unknown), n.setAssignedOrChanged(), n.setIsParameter();
      else if (n.is(t.AssignmentStatement)) {
        const s = n.getVariableExpressions();
        Gs(this, ws)._++;
        for (let o of s)
          o.setDataType(d.Unknown), o.setAssignedOrChanged(), o.setIsParameter();
      }
  }
}, b(Xn, Pn);
let zs = Xn;
class ed extends zs {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(i, e) {
    if (super(i, e, t.FunctionDefinitionStatement, c.BlockDefinitionStatement, d.NA), this.addConnection(this.getFunctionNameExpression()), this.getFunctionNameExpression() !== void 0) {
      this.getFunctionNameExpression().addConnection(this);
      for (const n of this.getParameters())
        for (const s of n)
          this.getFunctionNameExpression().addConnection(s);
    }
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[1].is(t.FunctionName);
  }
  //#endregion - overrides
  //#region - extension
  /**
   * Gets the expression that contains the function name
   * @returns {FunctionNode}
   */
  getFunctionNameExpression() {
    return this.getChildren()[1];
  }
  /**
   * Gets all nodes this node is connected to
   * @returns {ExpressionNode[]}
   * @override
   */
  getConnectedTo() {
    return this.getFunctionNameExpression().getConnectedTo();
  }
  /**
   * Adds a new ExpressionNode to this node. Connections are directed so this node points 
   * to the new node but not the other way around
   * @param {ExpressionNode} node 
   * @override
   */
  addConnection(i) {
    this.getFunctionNameExpression() !== void 0 && this.getFunctionNameExpression().addConnection(i);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    try {
      return [...super.getAllNestedExpressions(), ...this.getFunctionNameExpression().getAllNestedExpressions(), ...this.getParameters().flatMap((e) => e.flatMap((n) => n.getAllNestedExpressions()))];
    } catch {
      return [];
    }
  }
  toJSON() {
    const i = super.toJSON();
    return i.functionName = this.getFunctionNameExpression().getTextValue(), i.parameters = this.getParameters().map((e) => e.map((n) => n.toJSON())), i;
  }
  //#endregion - extension
}
var Ss;
class td extends zs {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.MethodDefinitionStatement, c.BlockDefinitionStatement, d.NA);
    /** @type {VariableExpression | undefined} */
    b(this, Ss);
    const s = super.getParameters();
    s.length > 0 && y(this, Ss, s[0][0]), this.addConnection(this.getMethodNameExpression()), this.getMethodNameExpression().addConnection(this);
    for (const o of this.getParameters())
      for (const a of o)
        this.getMethodNameExpression().addConnection(a);
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[1].is(t.MethodName);
  }
  //#endregion - overrides
  //#region - extension
  /**
   * Gets the expression that contains the method name
   * @returns {UserDefinedMethodExpression}
   */
  getMethodNameExpression() {
    return this.getChildren()[1];
  }
  getParameters() {
    return super.getParameters().slice(1);
  }
  /**
   * Gets the class variable (i.e. self) defined in the method definition
   * @returns { VariableExpression | undefined}
   */
  getClassVar() {
    return u(this, Ss);
  }
  /**
   * Gets all nodes this node is connected to
   * @returns {ExpressionNode[]}
   * @override
   */
  getConnectedTo() {
    return this.getMethodNameExpression().getConnectedTo();
  }
  /**
   * Adds a new ExpressionNode to this node. Connections are directed so this node points 
   * to the new node but not the other way around
   * @param {ExpressionNode} node 
   * @override
   */
  addConnection(e) {
    this.getMethodNameExpression().addConnection(e);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getMethodNameExpression().getAllNestedExpressions(), ...this.getParameters().flatMap((n) => n.flatMap((s) => s.getAllNestedExpressions()))];
  }
  toJSON() {
    const e = super.toJSON();
    return e.methodName = this.getMethodNameExpression().getTextValue(), e.parameters = this.getParameters().map((n) => n.map((s) => s.toJSON())), e;
  }
  //#endregion - extension
}
Ss = new WeakMap();
class nd extends ee {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(i, e) {
    super(
      i,
      e,
      t.ClassDefinitionStatement,
      c.BlockDefinitionStatement,
      e.length >= 2 && e[1].is(t.ClassName) ? d.createCustomType(e[1].getTextValue()) : d.Class
    );
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[1].is(t.ClassName);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return super.getAllNestedExpressions() + [this.getChildren()[1]];
  }
  //#endregion - overrides
  //#region - extension
  /**
   * Gets the expression that contains the class name
   * @returns {ClassNode}
   */
  getClassNameExpression() {
    return this.getChildren()[1];
  }
  toJSON() {
    const i = super.toJSON();
    return i.className = this.getClassNameExpression().getTextValue(), i;
  }
  //#endregion - extension
}
var he, ue, wa, Sa, Ws, ba, Ia, ya, Fa, Na;
const si = class si extends ee {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity AUTO FILL The entity that describes the MultiPartExpression
   * @param {ExpressionCategory} category AUTOFILL The category that describes the MultiPartExpression
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s, o) {
    super(e, n, s, o);
    b(this, ue);
    b(this, he);
    if (m(this, ue, Ws).call(this), this.isComplete()) {
      const h = n.length - 2;
      if (h < 2)
        y(this, he, []);
      else {
        const p = n.slice(2, h + 1);
        y(this, he, H.checkForListComp(p));
        for (let w = 0; w < u(this, he).length; w++)
          u(this, he)[w].length > 1 && (u(this, he)[w] = H.createTree(u(this, he)[w]));
      }
    } else y(this, he, []);
    m(this, ue, Sa).call(this), this.addRules([m(this, ue, Fa), m(this, ue, ba)]), this.addCounterRules([m(this, ue, Na), m(this, ue, Ia), m(this, ue, ya)]), m(this, ue, wa).call(this);
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 3 && e[0].isOneOf([c.BuiltInFunctions, t.FunctionName]) && e[1].is(t.OpenParenthesis) && e[e.length - 1].is(t.CloseParenthesis) && Fo(e, t.OpenParenthesis, t.CloseParenthesis);
  }
  /**
   * @override
   */
  addChild(e) {
    super.addChild(e), m(this, ue, Ws).call(this);
  }
  /**
   * @override
   */
  setChildren(e) {
    super.setChildren(e), m(this, ue, Ws).call(this);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of u(this, he))
      for (let s of n)
        s.is(t.VariableName) ? e.push(s) : e = e.concat(s.getVariableExpressions());
    return e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    if (this.getChildren()[0].is(e))
      return [this.getChildren()[0]];
    for (let s of u(this, he))
      for (let o of s)
        o.is(e) ? n.push(o) : n = n.concat(o.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (this.getChildren()[0].isOneOf(e))
      return this.getChildren()[0];
    if (n === void 0)
      for (const s of u(this, he)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of u(this, he))
      for (const n of e)
        n.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForCounterRules(e) {
    super.checkForCounterRules(e);
    for (const n of u(this, he))
      for (const s of n)
        s.checkForCounterRules(s);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return super.matchesPattern(e) && this.getFunctionName() === e.getFunctionName() && this.getTextValue() === e.getTextValue();
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#arguments) {
  //         for (const a of item) {
  //             a.setBlockId(id);
  //         }
  //     }*/
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getFunctionExpression().getAllNestedExpressions(), ...u(this, he).flatMap((n) => n.flatMap((s) => s.getAllNestedExpressions()))];
  }
  toJSON() {
    const e = super.toJSON();
    return e.functionName = this.getFunctionName(), e.arguments = this.getArguments().map((n) => n.map((s) => s.toJSON())), e;
  }
  //#endregion - overrides
  //#region - custom
  /**
   * Gets the ExpressionEntity of the function that was called
   * @returns {ExpressionEntity}
   */
  getFunctionEntity() {
    const e = this.getChildren();
    if (e.length < 1)
      throw new Error("No function expression available");
    return e[0].getEntity();
  }
  /**
   * Gets the name of the function that was called
   * @returns {String}
   */
  getFunctionName() {
    const e = this.getChildren();
    if (e.length < 1)
      throw new Error("No function expression available");
    return e[0].getTextValue();
  }
  getFunctionExpression() {
    const e = this.getChildren();
    if (e.length < 1)
      throw new Error("No function expression available");
    return e[0];
  }
  /**
   * 
   * @returns {ExpressionNode[][]}
   */
  getArguments() {
    return u(this, he);
  }
  //#endregion - custom
};
he = new WeakMap(), ue = new WeakSet(), wa = function() {
  for (const e of u(this, he))
    for (const n of e)
      n.addConnection(this);
  this.addConnection(this.getFunctionExpression());
}, /**
 * Helper method that sets this as the parent of all arguments in a function call.
 */
Sa = function() {
  for (const e of u(this, he))
    for (const n of e)
      n.setParent(this);
}, /**
 * Helper method that sets the data type based on the function called if the call is complete.
 */
Ws = function() {
  this.getChildren()[0].addObserver(this), this.isComplete() ? Ii(si.prototype, this, "setDataType").call(this, this.getChildren()[0].getDataType()) : Ii(si.prototype, this, "setDataType").call(this, d.NotParsed);
}, /** 
 * Rule function. Checks if the function returns something that is not used.
 * @param {FunctionCallNode} exp
 * @returns {Symptom[]}
 */
ba = function(e) {
  const n = [];
  return e.getDataType() !== d.None && e.getDataType() !== d.Undefined && e.getDataType() !== d.Invalid && e.getDataType() !== d.NA && e.getDataType() !== d.NotParsed && (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && (e.is(t.BuiltInFunctionCall) || e.getFunctionExpression().getReturnStatements().length > 0) && n.push(O.createStatementSymptom(I.UnusedReturn, [e], 0, 0, {
    expression: e.getFunctionExpression()
  })), n;
}, /** 
 * Counter rule function. Checks if the function returns something that is used.
 * @param {FunctionCallNode} exp
 * @returns {Symptom[]}
 */
Ia = function(e) {
  const n = [];
  if (e.getDataType() !== d.None && e.getParent() !== void 0 && (!e.getParent().is(t.GroupStatement) || e.getParent().getParent() !== void 0) && (e.is(t.BuiltInFunctionCall) || e.getFunctionExpression().getReturnStatements().length > 0)) {
    let s = e.getParent();
    s.is(t.GroupStatement) && (s = s.getParent()), n.push(O.createStatementSymptom(B.UsedReturn, [e], 0, 0, {
      expression: e.getFunctionExpression(),
      usage: s.getTextValue(),
      usageType: s.getEntity().name
    }));
  }
  return n;
}, /** 
 * Counter rule function. Checks if the function has no return and is a standalone call.
 * @param {FunctionCallNode} exp
 * @returns {Symptom[]}
 */
ya = function(e) {
  const n = [];
  return e.getDataType() === d.None && e.getParent() === void 0 && n.push(O.createStatementSymptom(B.NoReturnStandaloneCall, [e], 0, 0, {
    expression: e.getFunctionExpression()
  })), n;
}, /** 
 * Rule function. Checks if the function call is passed something with no value and if so,
 * adds a new Symptom object.
 * @param {FunctionCallNode} exp
 * @returns {Symptom[]}
 */
Fa = function(e) {
  const n = [], s = e.getArguments();
  for (const o of s) {
    const h = o.flatMap((p) => p.is(t.GroupStatement) ? p.getContents() : p).filter((p) => tn(p) || p.getDataType() === d.None && !p.isOneOf([t.NoneType, t.VariableName]));
    h.length > 0 && n.push(...h.map((p) => O.createStatementSymptom(
      I.AssignedNone,
      [p],
      0,
      0,
      {
        expression: p,
        usage: e.getFunctionEntity() === t.PrintFunction ? "print" : Jo
      }
    )));
  }
  return n;
}, /**
 * Counter rule function
 * @param {FunctionCallNode} exp 
 * @returns {Symptom[]}
 */
Na = function(e) {
  const n = [];
  return e.isComplete() && n.push(O.createStatementSymptom(B.ValidFunctionCall, [e], 0, 0, {
    numArgs: e.getArguments().length
  })), n;
};
let Qs = si;
var ii, Ca;
class sd extends Qs {
  /**
   * Creates a new BuiltInFunctionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.BuiltInFunctionCall, c.FunctionCall);
    b(this, ii);
    n.length > 0 && n[0].isOneOf([t.StrFunction, t.IntFunction, t.FloatFunction, t.BoolFunction, t.ListFunction, t.TupleFunction, t.SetFunction, t.DictFunction]) && this.addRule(m(this, ii, Ca));
  }
  //#region - overrides    
  /**
   * @override
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[0].is(c.BuiltInFunctions);
  }
  //#endregion - overrides
  /**
   * Converts this to a user defined function expression
   * @param {UserDefinedFunctionExpression} userDefinedFunction 
   */
  convertToUserDefinedFunction(e) {
    this.setEntity(t.UserDefinedFunctionCall);
    const n = this.getChildren()[0];
    n.setEntity(t.FunctionName), n.setCategory(c.Identifiers), n.setDataType(e.getReturnType()), n.addReturns = (s, o = !1) => e.addReturns(s, o), n.getReturnType = () => e.getReturnType(), n.getReturnStatements = () => e.getReturnStatements();
  }
}
ii = new WeakSet(), /**
 * Rule function. Checks if the call is an unnecessary use of a type conversion function.
 * @param {BuiltInFunctionCall} call 
 * @returns {Symptom[]}
 */
Ca = function(e) {
  const n = [], s = e.getDataType(), o = e.getArguments(), a = e.getChildren();
  return o.length === 1 && o[0].length === 1 && (o[0][0].getDataType() === s || s === d.List && o[0][0].getDataType() === d.String) && n.push(O.createStatementSymptom(
    I.TypeUnnecessary,
    a,
    0,
    a.length - 1,
    {
      convertedValue: o[0][0].getTextValue(),
      argType: o[0][0].getDataType().name,
      convertedType: s.name
    }
  )), n;
};
class id extends Qs {
  /**
   * Creates a new UserDefinedFunctionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(i, e) {
    super(i, e, t.UserDefinedFunctionCall, c.FunctionCall);
    const n = this.getFunctionExpression(), s = this.getArguments();
    if (s.length > 0 && n.getParent().is(c.FunctionCall) && s.length <= n.getParent().getArguments().length) {
      const o = n.getParent().getArguments();
      for (let a = 0; a < s.length; a++)
        s[a][0].addConnection(o[a][0]);
    }
  }
  //#region - overrides    
  /**
   * @override
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[0].is(t.FunctionName);
  }
  //#endregion - overrides
  /**
   * Converts this to a built in function expression 
   */
  convertToImportedFunction() {
    this.setEntity(t.BuiltInFunctionCall);
    const i = this.getChildren()[0];
    i.setEntity(t.Unknown), i.setCategory(c.ModuleFunctions), i.setDataType(d.Unknown);
  }
}
class od extends ee {
  /**
   * Creates a new ExceptionCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(i, e) {
    super(i, e, t.ExceptionCall, c.ExceptionCall, d.Exception);
  }
  //#region - overrides    
  /**
   * @override
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[0].is(c.BuiltInExceptions);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return this.getChildren()[0].getAllNestedExpressions();
  }
  //#endregion - overrides
}
var fe, Fe, Ta, xa, zn, Ma, Da, Aa;
class Oa extends ee {
  /**
   * Creates a new MethodCallNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity AUTO FILL The entity that describes the MultiPartExpression
   * @param {ExpressionCategory} category AUTOFILL The category that describes the MultiPartExpression
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s, o) {
    super(e, n, s, o);
    b(this, Fe);
    b(this, fe);
    if (m(this, Fe, zn).call(this), this.isComplete()) {
      const h = n.length - 2;
      if (h < 4)
        y(this, fe, []);
      else {
        let p = n.slice(4, h + 1);
        y(this, fe, H.checkForListComp(p));
        for (let w = 0; w < u(this, fe).length; w++)
          u(this, fe)[w].length > 1 && (u(this, fe)[w] = H.createTree(u(this, fe)[w]));
      }
    } else y(this, fe, []);
    m(this, Fe, xa).call(this), m(this, Fe, Ta).call(this), this.addRules([m(this, Fe, Aa), m(this, Fe, Ma)]), this.addCounterRules([m(this, Fe, Da)]);
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 5 && e[1].is(t.Dot) && e[3].is(t.OpenParenthesis) && e[e.length - 1].is(t.CloseParenthesis) && Fo(e, t.OpenParenthesis, t.CloseParenthesis);
  }
  /**
   * @override
   */
  addChild(e) {
    super.addChild(e), m(this, Fe, zn).call(this);
  }
  /**
   * @override
   */
  setChildren(e) {
    super.setChildren(e), m(this, Fe, zn).call(this);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of this.getChildren()) {
      if (n.is(t.Dot))
        break;
      n.is(t.VariableName) ? e.push(n) : e = e.concat(n.getVariableExpressions());
    }
    for (let n of u(this, fe))
      for (let s of n)
        s.is(t.VariableName) ? e.push(s) : e = e.concat(s.getVariableExpressions());
    return e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of u(this, fe))
      for (let o of s)
        o.is(e) ? n.push(o) : n = n.concat(o.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of u(this, fe)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this), this.isComplete() && this.getChildren()[0].checkForSymptoms();
    for (const e of u(this, fe))
      for (const n of e)
        n.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForCounterRules(e) {
    super.checkForCounterRules(e), this.isComplete() && this.getChildren()[0].checkForCounterRules(this.getChildren()[0]);
    for (const n of u(this, fe))
      for (const s of n)
        s.checkForCounterRules(s);
  }
  /**
   * @override
   */
  typeUpdateReceived(e) {
    m(this, Fe, zn).call(this);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return super.matchesPattern(e) && this.getMethodName() === e.getMethodName();
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), this.getMethodExpression(), ...u(this, fe).flatMap((n) => n.flatMap((s) => s.getAllNestedExpressions()))];
  }
  toJSON() {
    const e = super.toJSON();
    return e.methodName = this.getMethodName(), e.arguments = this.getArguments().map((n) => n.map((s) => s.toJSON())), e.object = this.getObject().toJSON(), e;
  }
  //#endregion - overrides
  //#region - custom
  /**
   * Gets the ExpressionEntity of the method that was called
   * @returns {ExpressionEntity}
   */
  getMethodEntity() {
    const e = this.getChildren();
    if (e.length < 3)
      throw new Error("No method expression available");
    return e[2].getEntity();
  }
  getMethodExpression() {
    const e = this.getChildren();
    if (e.length < 3)
      throw new Error("No method expression available");
    return e[2];
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#arguments) {
  //         for (const a of item) {
  //             a.setBlockId(id);
  //         }
  //     }*/
  // }
  /**
   * Gets the name of the method that was called
   * @returns {String}
   */
  getMethodName() {
    const e = this.getChildren();
    if (e.length < 3)
      throw new Error("No method expression available");
    return e[2].getTextValue();
  }
  getMethod() {
    const e = this.getChildren();
    if (e.length < 3)
      throw new Error("No method expression available");
    return e[2];
  }
  /**
   * Gets the expression that the method was called on
   * @returns {ExpressionNode}
   */
  getObject() {
    const e = this.getChildren();
    if (e.length === 0)
      throw new Error("No children");
    return e[0];
  }
  /**
   * 
   * @returns {ExpressionNode[][]}
   */
  getArguments() {
    return u(this, fe);
  }
  //#endregion - custom
}
fe = new WeakMap(), Fe = new WeakSet(), Ta = function() {
  for (const e of u(this, fe))
    for (const n of e)
      n.addConnection(this);
  this.addConnection(this.getMethodExpression());
}, /**
 * Helper method that sets this as the parent of all arguments in a function call.
 */
xa = function() {
  for (const e of u(this, fe))
    for (const n of e)
      n.setParent(this);
}, /**
 * Helper method that sets the data type based on the function called if the call is complete.
 */
zn = function() {
  if (this.isComplete()) {
    const e = this.getObject(), n = this.getMethod();
    ns.has(e.getDataType()) && ns.get(e.getDataType()).has(n.getEntity()) ? this.setDataType(n.getDataType()) : n.is(c.BuiltInMethods) && e.getDataType() === d.NotParsed ? e.addObserver(this) : this.setDataType(d.Unknown);
  } else
    this.setDataType(d.NotParsed);
}, /** 
 * Rule function. Checks if the function returns something that is not used.
 * @param {MethodCallNode} exp
 * @returns {Symptom[]}
 */
Ma = function(e) {
  const n = [], s = e.getMethod();
  return s.getDataType() !== d.None && s.getDataType() !== d.NotParsed && s.getDataType() !== d.Unknown && e.getDataType() !== d.Unknown && e.getDataType() !== d.None && e.getDataType() !== d.NotParsed && (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(
    I.UnusedReturn,
    [e],
    0,
    0,
    {
      expression: e.getMethodExpression()
    }
  )), n;
}, /** 
 * Counter rule function. Checks if the function returns something that is used.
 * @param {MethodCallNode} exp
 * @returns {Symptom[]}
 */
Da = function(e) {
  const n = [], s = e.getMethod();
  if (s.getDataType() !== d.None && s.getDataType() !== d.NotParsed && e.getParent() !== void 0 && (!e.getParent().is(t.GroupStatement) || e.getParent().getParent() !== void 0)) {
    let o = e.getParent();
    o.is(t.GroupStatement) && (o = o.getParent()), n.push(O.createStatementSymptom(B.UsedReturn, [e], 0, 0, {
      expression: s,
      usage: o.getTextValue(),
      usageType: o.getEntity().name
    }));
  }
  return n;
}, /** 
 * Rule function. Checks if the function call is passed something with no value and if so,
 * adds a new Symptom object.
 * @param {MethodCallNode} exp
 * @returns {Symptom[]}
 */
Aa = function(e) {
  const n = [], s = e.getArguments();
  for (const o of s) {
    const h = o.flatMap((p) => p.is(t.GroupStatement) ? p.getContents() : p).filter((p) => tn(p) || p.getDataType() === d.None && !p.isOneOf([t.NoneType, t.VariableName]));
    h.length > 0 && n.push(...h.map((p) => O.createStatementSymptom(
      I.AssignedNone,
      [p],
      0,
      0,
      {
        expression: p,
        usage: Jo
      }
    )));
  }
  return n;
};
var Vn, Ba, ka;
class rd extends Oa {
  /**
   * Creates a new BuiltInMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.BuiltInMethodCall, c.MethodCall);
    b(this, Vn);
    m(this, Vn, Ba).call(this), this.addRule(m(this, Vn, ka));
  }
  //#region - overrides    
  /**
   * @override
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[2].isOneOf([c.BuiltInMethods, c.MagicMethods, c.ModuleFunctions]);
  }
  /**
   * @override
   */
  isStringLiteral() {
    return this.getMethodEntity() === t.Format;
  }
}
Vn = new WeakSet(), // If the method called is a known modifier e.g. list remove, mark the variable it was called on as modified
Ba = function() {
  if (ou.has(this.getMethodEntity())) {
    const e = this.getObject();
    e.is(t.VariableName) ? e.setAssignedOrChanged() : e.is(t.SubscriptedExpression) && e.getChildren()[0].is(t.VariableName) && e.getChildren()[0].setAssignedOrChanged();
  }
}, //#endregion - overrides
/**
 * Rule function. Checks if the method called is valid for the object it was called on
 * @param {MethodCallNode} methodCall 
 * @returns {Symptom[]}
 */
ka = function(e) {
  const n = [], o = e.getObject().getDataType(), a = e.getMethod();
  let h = !0;
  switch (o) {
    case d.Number:
    case d.Int:
    case d.Float:
    case d.Bool:
    case d.None:
      h = !1;
  }
  if (h && ns.has(o) && (h = ns.get(o).has(a.getEntity()) || a.is(c.MagicMethods)), !h) {
    const p = e.getChildren();
    n.push(O.createStatementSymptom(
      I.UnknownMethod,
      p,
      0,
      p.length - 1,
      {
        objectType: o.name
      }
    ));
  }
  return n;
};
var oi, Pa;
class ad extends Oa {
  /**
   * Creates a new UserDefinedMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.UserDefinedMethodCall, c.MethodCall);
    b(this, oi);
    this.addRule(m(this, oi, Pa));
  }
  //#region - overrides    
  /**
   * @override
   */
  isComplete() {
    return super.isComplete() && this.getChildren()[2].is(t.MethodName);
  }
}
oi = new WeakSet(), //#endregion - overrides
/**
 * Checks if the method called is valid for the object it was called on
 * @param {MethodCallNode} methodCall 
 * @returns {Symptom[]}
 */
Pa = function(e) {
  const n = [], o = e.getObject().getDataType();
  if (ns.has(o)) {
    const a = e.getChildren();
    n.push(O.createStatementSymptom(
      I.UnknownMethod,
      a,
      0,
      a.length - 1,
      {
        objectType: o.name
      }
    ));
  }
  return n;
};
var et, Ve, Ln, Va, La;
class Lo extends ee {
  /**
   * Creates a new PropertyCallNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s, o) {
    super(e, n, s, o);
    b(this, Ln);
    /** @type {ExpressionNode} */
    b(this, et);
    /** @type {ExpressionNode} */
    b(this, Ve);
    this.isComplete() && (y(this, et, n[0]), y(this, Ve, n[2])), m(this, Ln, La).call(this), this.addRule(m(this, Ln, Va));
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length == 3 && e[1].is(t.Dot);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    return u(this, et).is(t.VariableName) ? e.push(u(this, et)) : e = e.concat(u(this, et).getVariableExpressions()), e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of this.getChildren())
      s.is(e) ? n.push(s) : n = n.concat(s.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of this.getChildren()) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return super.matchesPattern(e) && this.getTextValue() === e.getTextValue();
  }
  setDataType(e) {
    if ((e !== this.getDataType() || e !== u(this, Ve).getDataType()) && (super.setDataType(e), !u(this, Ve).is(c.ModuleProperties)))
      try {
        u(this, Ve).setDataType(e);
      } catch {
      }
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...u(this, et).getAllNestedExpressions(), ...u(this, Ve).getAllNestedExpressions()];
  }
  toJSON() {
    const e = super.toJSON();
    return e.object = u(this, et).toJSON(), e.propertyName = u(this, Ve).getTextValue(), e;
  }
  //#endregion - overrides
  //#region - custom
  /**
   * Gets the object of the property call (the variable before the .)
   * @returns {VariableExpression}
   */
  getObject() {
    return u(this, et);
  }
  /**
   * Gets the property node
   * @returns {ExpressionNode}
   */
  getProperty() {
    return u(this, Ve);
  }
  //#endregion - custom
}
et = new WeakMap(), Ve = new WeakMap(), Ln = new WeakSet(), /**
 * Rule function. Checks if the property is unused
 * @param {PropertyCallNode} exp 
 * @returns {Symptom[]}
 */
Va = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
}, /**
 * Helper method that sets the data type based on the function called if the call is complete.
 */
La = function() {
  if (this.isComplete())
    if (u(this, Ve).getCategory() === c.ModuleProperties) {
      const e = en.get(u(this, Ve).getEntity());
      this.setDataType(e || u(this, Ve).getDataType());
    } else
      this.setDataType(d.Unknown);
  else
    this.setDataType(d.NotParsed);
  u(this, Ve).addObserver(this);
};
class ld extends it {
  /**
   * @inheritdoc
   */
  isSubscriptable() {
    return !0;
  }
}
var ri, Ra;
class va extends ld {
  /**
   * 
   * @param {String} textValue 
   * @param {Number} startLineNumber 
   * @param {Number} documentStartIndex 
   * @param {Number} indexOnLine
   * @param {Number} documentEndIndex 
   * @param {Number} endLineNumber 
   */
  constructor(e, n, s, o, a = s + e.length, h = n) {
    super(e, t.StringLiteral, c.Literals, n, s, o, d.String, a, h);
    b(this, ri);
    this.addRule(m(this, ri, Ra));
  }
  /**
   * @override
   */
  isStringLiteral() {
    return !0;
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return e.getEntity() === t.StringLiteral || e.getEntity() === t.CombinedStringLiteral || e.getEntity() === t.FString;
  }
  /**
   * Inherited method. Overridden to do nothing. DataType of a literal should not be changed.
   * @override
   * @param {DataType} dataType 
   * @throws Throws an error if a calling function tries to change the data type
   */
  setDataType(e) {
    throw new Error(`Cannot change the data type of a String literal. Attempted to change the type to: ${e.name}.`);
  }
  /**
   * Updates the expression contents when additional content is added.
   * @param {Number} documentEndLine The ending line number of the expression
   * @param {Number} documentEndIndex The index of the end of the expression text in the document text
   * @param {String} textValueToAdd The string text to add to the existing text.
   */
  update(e, n, s) {
    this.setEndLineNumber(e), this.documentEndIndex(n), this.setTextValue(this.getTextValue + s);
  }
}
ri = new WeakSet(), /**
 * Rule function. Checks if the property is unused
 * @param {StringLiteralExpression} exp 
 * @returns {Symptom[]}
 */
Ra = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
};
var ai, Ea;
class qi extends it {
  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(e, n, s, o) {
    const a = e.indexOf(".") >= 0 ? t.FloatLiteral : t.IntLiteral;
    super(e, a, c.Literals, n, s, o, a === t.FloatLiteral ? d.Float : d.Int);
    b(this, ai);
    this.addRule(m(this, ai, Ea));
  }
  /**
   * Inherited method. Overridden to do nothing. DataType of a literal should not be changed.
   * @override
   * @param {DataType} dataType 
   * @throws Throws an error if a calling function tries to change the data type
   */
  setDataType(e) {
    throw new Error(`Cannot change the data type of a bumber literal. Attempted to change the type to: ${e.name}.`);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return e.getEntity() === t.FloatLiteral || e.getEntity() === t.IntLiteral;
  }
}
ai = new WeakSet(), /**
 * Rule function. Checks if the property is unused
 * @param {NumberLiteral} exp 
 * @returns {Symptom[]}
 */
Ea = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
};
var Xe, vn, Ua, Ga;
class cd extends ee {
  // The values used to create the string e.g. variables
  /**
   * Creates a new UserDefinedMethodCall
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.FString, c.Literals, d.String);
    b(this, vn);
    /** @type {ExpressionNode[][]} */
    b(this, Xe);
    y(this, Xe, m(this, vn, Ua).call(this));
    for (const s of u(this, Xe))
      for (const o of s)
        o.setParent(this), this.addConnection(o);
    this.addRule(m(this, vn, Ga));
  }
  //#region - overrides
  /**
   * @override
   */
  isStringLiteral() {
    return !0;
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return e.getEntity() === t.StringLiteral || e.getEntity() === t.CombinedStringLiteral || e.getEntity() === t.FString;
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of u(this, Xe))
      for (let s of n)
        s.is(t.VariableName) ? e.push(s) : e = e.concat(s.getVariableExpressions());
    return e;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of u(this, Xe))
      for (const n of e)
        n.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForCounterRules(e) {
    super.checkForCounterRules(e);
    for (const n of u(this, Xe))
      for (const s of n)
        s.checkForCounterRules(s);
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#values) {
  //         for (const v of item)
  //             v.setBlockId(id);
  //     }*/
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...u(this, Xe).flatMap((e) => e.flatMap((n) => n.getAllNestedExpressions()))];
  }
  toJSON() {
    const e = super.toJSON();
    return e.values = u(this, Xe).map((n) => n.map((s) => s.toJSON())), e;
  }
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets the values used to populate the string
   * @returns {ExpressionNode[][]}
   */
  getValues() {
    return u(this, Xe);
  }
  //#endregion - extensions
}
Xe = new WeakMap(), vn = new WeakSet(), /**
 * Parses the string literal to find the values in {} and returns a 2D
 * ExpressionNode array.
 * @returns {ExpressionNode[][]}
 */
Ua = function() {
  const e = [];
  if (this.isComplete()) {
    const n = this.getChildren()[1], s = n.getTextValue();
    let o = 0, a = 0, h = -1, p = -1;
    for (let w = 0; w < s.length; w++)
      if (s.charAt(w) === "{")
        o === 0 && (h = w + 1), o++;
      else if (o > 0)
        if (s.charAt(w) === "}") {
          if (o--, o === 0) {
            const S = p === -1 ? s.substring(h, w) : s.substring(h, p), F = new Hn(S, n.getStartLineNumber(), n.getDocumentStartIndex());
            e.push(H.createTree(F.getExpressions()));
          }
        } else s.charAt(w) === "[" ? a++ : s.charAt(w) === "]" ? a-- : a === 0 && s.charAt(w) === ":" && (p = w);
  }
  return e;
}, /**
 * Rule function. Checks if the property is unused
 * @param {FStringExpression} exp 
 * @returns {Symptom[]}
 */
Ga = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
};
var li, Ja;
class ud extends ee {
  /**
   * Creates a new CombinedStringLiteral
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.CombinedStringLiteral, c.Literals, d.String);
    b(this, li);
    this.addRule(m(this, li, Ja));
  }
  //#region - overrides
  isStringLiteral() {
    return !0;
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return e.getEntity() === t.StringLiteral || e.getEntity() === t.CombinedStringLiteral || e.getEntity() === t.FString;
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of this.getChildren())
      e = e.concat(n.getVariableExpressions());
    return e;
  }
}
li = new WeakSet(), //#endregion - overrides
/**
 * Rule function. Checks if the property is unused
 * @param {CombinedStringLiteral} exp 
 * @returns {Symptom[]}
 */
Ja = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
};
class $a extends it {
  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(i, e, n, s, o, a) {
    super(i, e, n, s, o, a, d.NA);
  }
  /**
   * Inherited method. Overridden to do nothing and throw an error. DataType of a literal should not be changed.
   * @override
   * @param {DataType} dataType 
   * @throws Throws an error because the data type of a keyword or operator should not change.
   */
  setDataType(i) {
    throw new Error(`Cannot change the data type of a keyword or operator. Attempted to change the type to: ${i.name}.`);
  }
  /**
   * Inherited method. Overriden to do nothing and throw an error.
   * @override
   * @param {String} value 
   * @throws Throws an error because the text value of a keyword or operator should not change.
   */
  setTextValue(i) {
    throw new Error(`Cannot change the value of a keyword or operator. Attempted to change the value to ${i}.`);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(i) {
    return this.getEntity() === i.getEntity() ? !0 : this.isOneOf([c.ComparisonOperators, c.LogicalOperators, c.MathsOperators]) ? i.getCategory() : !1;
  }
}
var yt;
class vo extends it {
  /**
   * Creates an ExpressionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(e, n, s, o, a, h) {
    super(e, n, s, o, a, h, fi(n));
    /** @type {String} */
    b(this, yt);
    y(this, yt, e);
  }
  /**
   * Checks whether this module has been given an alias
   * @returns {Boolean} True if the module has an alias that is different from its original name, false otherwise.
   */
  hasAlias() {
    return u(this, yt) !== this.getTextValue();
  }
  /**
   * Gets the module alias
   * @returns {String} The module alias
   */
  getModuleName() {
    return u(this, yt);
  }
  /**
   * Sets the module name for the module - will happen if the text value is an alias
   * @param {String} name 
   */
  setModuleName(e) {
    y(this, yt, e);
  }
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @param {DataType} dataType 
   * @throws Throws an error because the data type of a module cannot be changes
   */
  setDataType(e) {
    throw new Error(`The data type of a module cannot be changed. Attempted to change the data type to ${e}.`);
  }
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @param {String} value 
   * @throws Throws an error because the text value should not be changed.
   */
  setTextValue(e) {
    throw new Error(`The text value of a module cannot be changed. Attempted to change the value to ${e}.`);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity() === this.getTextValue() && e.getTextValue();
  }
  toJSON() {
    const e = super.toJSON();
    return e.moduleAlias = u(this, yt), e;
  }
}
yt = new WeakMap();
var Ft, bs, Is, ys, ae, qs, Ka, Wa, qa, ja, Ha, za, ji;
class Bn extends it {
  /**
   * Creates a VariableExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   * @param {Boolean} proxy Optional. Used to indicate that is a "proxy" variable used to support an operation rather than a "real" instance of a variable in the source code
   */
  constructor(e, n, s, o, a, h, p = !1) {
    var i = (...df) => (super(...df), b(this, ae), /**
     * @type {VariableExpression[]}
     */
    b(this, Ft, []), /**
     * @type {Boolean}
     */
    b(this, bs, !1), /**
     * @type {Boolean}
     */
    b(this, Is), /**
     * @type {Boolean}
     */
    b(this, ys, !1), this);
    if (s === c.Identifiers)
      i(e, n, s, o, a, h);
    else if (s === c.SpecialVariables)
      i(e, n, s, o, a, h, fi(n));
    else if (s === c.ModuleProperties)
      i(e, n, s, o, a, h, en.has(n) ? en.get(n) : d.Unknown);
    else
      throw new Error(`No constructor for VariableExpression with ${n.name}`);
    y(this, Is, p), this.addRules([m(this, ae, qa), m(this, ae, Wa)]), this.addCounterRules([m(this, ae, Ka)]);
  }
  //#region - overrides
  /**
   * @override
   * @param {String} value 
   * @throws Throws an error if calling code tries to change the variable's text value.
   */
  setTextValue(e) {
    throw new Error(`Cannot change the text value of a variable (its name). Attempted to change the value to ${e}.`);
  }
  setIsParameter() {
    y(this, ys, !0);
  }
  isParameter() {
    return u(this, ys);
  }
  /**
   * @inheritdoc
   * @override
   */
  isSubscriptable() {
    return gi(this.getDataType());
  }
  /**
   * @override
   */
  getVariableExpressions() {
    return this.is(t.VariableName) ? [this] : [];
  }
  setDataType(e) {
    (!this.isAssignedOrChanged() || this.isObjectOfMethodCall() || this.isSubscripted()) && u(this, Ft).length > 0 && (e = m(this, ae, qs).call(this)), super.setDataType(e), e.isCustom && this.getParent() && this.getParent().is(t.PropertyCallExpression) && (this.getParent().getProperty().setCategory(c.ClassAttributes), this.getParent().getProperty().setOwnerType(e));
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    let n = e;
    return n.is(t.BooleanExpression) && e.getChildren().length === 2 && e.getChildren()[0].is(t.NotOperator) && e.getChildren()[1].is(t.VariableName) && (n = e.getChildren()[1]), this.getEntity() === n.getEntity() && this.getTextValue() === n.getTextValue();
  }
  //#endregion - overrides
  //#region - extension methods
  /**
   * Gets the last usages of this variable.
   * @returns {VariableExpression[]}
   */
  getLastUsages() {
    return u(this, Ft);
  }
  /**
   * Adds a VariableExpression to the last usages array. Should only be used when the 
   * variable has not been assigned or changed.
   * @param {VariableExpression} varExpression 
   */
  addLastUsage(e) {
    u(this, Ft).push(e), e.addConnection(this), (!this.isAssignedOrChanged() || this.isObjectOfMethodCall() || this.isSubscripted()) && (this.setDataType(m(this, ae, qs).call(this)), e.addObserver(this));
  }
  isSubscripted() {
    const e = this.getParent();
    return e === void 0 ? !1 : e.is(t.SubscriptedExpression);
  }
  isObjectOfMethodCall() {
    const e = this.getParent();
    return e === void 0 ? !1 : e.is(t.BuiltInMethodCall) && e.getChildren()[0].getTextValue() === this.getTextValue();
  }
  /**
   * Overwrites the lastUsages array with the provided usages.
   * @param {VariableExpression[]} usages 
   */
  setLastUsages(e) {
    y(this, Ft, e), this.setDataType(m(this, ae, qs).call(this));
    for (let n of e)
      n.addObserver(this), n.addConnection(this);
  }
  /**
   * Whether or not this variable's value is set
   * @returns {Boolean}
   */
  isAssignedOrChanged() {
    return u(this, bs);
  }
  /**
   * Marks this variable as assigned or changed
   */
  setAssignedOrChanged() {
    y(this, bs, !0);
  }
  /**
   * Whether or not this variable expression is a proxy, rather than a real instance that
   * appears in the source code
   * @returns {Boolean}
   */
  isProxy() {
    return u(this, Is);
  }
  /**
   * Helper method to compare the value assigned to this variable with the value assigned in previous
   * usages. Only checks if current is part of an assignment and all last usages are part of an assignment,
   * otherwise returns UNKNOWN.
   * Only checks if current is assigned a literal value, otherwise returns UNKNONW
   * @param {VariableExpression} current 
   * @param {VariableExpression[]} lastUsages 
   * @returns {SAME_VALUE | DIFFERENT_VALUE | UNKNOWN}
   */
  compareValues(e, n) {
    const s = e.getParent();
    if (s === void 0) return Js;
    const o = s.is(t.AssignmentStatement) ? m(this, ae, ji).call(this, e) : s.is(t.IteratorExpression) ? m(this, ae, za).call(this, e) : void 0, a = m(this, ae, Ha).call(this, o, n);
    return a.size === 1 ? Array.from(a)[0] : Js;
  }
  //#endregion - extension methods
}
Ft = new WeakMap(), bs = new WeakMap(), Is = new WeakMap(), ys = new WeakMap(), ae = new WeakSet(), qs = function() {
  return _t(u(this, Ft).map((e) => e.getDataType()));
}, /**
 * Construct function. Checks if the variable is a BooleanCompares 
 * - a variable with Bool data type that is used as a standalone Boolean expression or part of a check for equality e.g. if var:, if var == True:
 * @param {VariableExpression} exp 
 * @returns {Symptom[]}
 */
// #checkBooleanCompares(exp) {
//     const constructs = [];
//     if (exp.getDataType() === DataType.Bool) {
//         SymptomFinder.checkBooleanCompare(exp);
//     }
//     return constructs;
// }
/**
 * Check if the variable is a new forLoopVariable
 * @param {VariableExpression} exp
 * @returns {Symptom[]} 
 */
Ka = function(e) {
  const n = [], s = e.getParent();
  if (e.isAssignedOrChanged() && e.getLastUsages().length === 0 && s && s.is(t.IteratorExpression)) {
    const o = s.getParent().getTextValue();
    n.push(O.createStatementSymptom(B.NewForLoopVar, [e], 0, 0, {
      usageText: o
    }));
  }
  return n;
}, /**
 * Rule function. Checks if the property is unused
 * @param {VariableExpression} exp 
 * @returns {Symptom[]}
 */
Wa = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
}, /**
 * 
 * @param {VariableExpression} varExp 
 * @returns {Boolean}
 */
qa = function(e) {
  var a;
  const n = [], s = e.getLastUsages(), o = e.getParent();
  if (!e.getScopeId().includes("listComprehension") && !e.isProxy() && e.isAssignedOrChanged() && s.length > 0 && o !== void 0 && o.isOneOf([t.AssignmentStatement, t.IteratorExpression])) {
    if (o.is(t.AssignmentStatement) && m(a = e, ae, ja).call(a, e.getTextValue(), o))
      return n;
    let h = !0;
    const p = e.getBlockId().split("-")[1];
    for (const w of s)
      if (w.getScopeId() === e.getScopeId() && (!w.isAssignedOrChanged() || p !== "for" && w.getBlockId() !== e.getBlockId())) {
        h = !1;
        break;
      }
    if (h) {
      const w = s.length === 1 && s[0].isParameter(), S = o.is(t.IteratorExpression) ? o.getParent().getTextValue() : o.getTextValue();
      n.push(O.createStatementSymptom(I.OverwrittenVariable, [e], 0, 0, {
        isParameter: w,
        functionBlock: w ? s[0].getBlockId() : "",
        prevUsageIsDefinition: s.length === 1 && s[0].getLastUsages().length === 0,
        overwriteType: o.is(t.AssignmentStatement) ? Io : bo,
        overwriteValue: e.compareValues(e, s),
        usageText: S,
        overwrittenVar: s.map((F) => ({
          lineNum: F.getStartLineNumber(),
          block: F.getBlockId(),
          docIndex: F.getDocumentStartIndex(),
          forLoopDefinition: F.getParent().is(t.IteratorExpression) && F.getParent().getLoopVariables().filter((N) => N.getTextValue() === F.getTextValue()).length > 0
        }))
      }));
    }
  }
  return n;
}, /**
 * 
 * @param {String} varName 
 * @param {AssignmentExpression} assignmentExp 
 * @returns {Boolean}
 */
ja = function(e, n) {
  const s = n.getAssignedValues();
  for (const o of s)
    if (o.getExpressionsOfKind(e).length > 0)
      return !0;
  return !1;
}, /**
 * Helper method for rule finder.
 * @param {ExpressionNode | undefined} assignedValue 
 * @param {VariableExpression[]} lastUsages 
 * @returns {Set<String>}
 */
Ha = function(e, n) {
  const s = /* @__PURE__ */ new Set();
  if (e !== void 0 && e.isOneOf([c.Literals, c.Types]))
    for (const o of n)
      if (o.getParent() !== void 0 && o.getParent().is(t.AssignmentStatement)) {
        const a = m(this, ae, ji).call(this, o);
        a !== void 0 && a.isOneOf([c.Literals, c.Types]) ? s.add(
          e.getTextValue() === a.getTextValue() ? yo : Go
        ) : s.add(Js);
      } else
        s.add(Js);
  return s;
}, /**
 * Helper method for rule finder. Gets the value assigned to the variable in an assignment
 * @param {VariableExpression} variable 
 * @returns {ExpressionNode | undefined}
 */
za = function(e) {
  const n = e.getParent(), s = n.getIterable();
  if (s.is(t.BuiltInFunctionCall)) {
    const o = s.getFunctionExpression();
    if (o.is(t.RangeFunction)) {
      const a = s.getArguments();
      if (a.length === 1)
        return new qi("0", -1, -1, -1);
      if (a.length > 1)
        return a[0][0];
    } else if (o.is(t.EnumerateFunction)) {
      const a = n.getLoopVariables();
      if (a.length === 2 && a[0].getTextValue() === e.getTextValue())
        return new qi("0", -1, -1, -1);
    }
  }
}, /**
 * Helper method for rule finder. Gets the value assigned to the variable in an assignment
 * @param {VariableExpression} variable 
 * @returns {ExpressionNode | undefined}
 */
ji = function(e) {
  const n = e.getParent();
  if (n === void 0) return;
  const s = n.getTargetVariables(), o = n.getAssignedValues();
  let a = -1;
  for (let h = 0; h < s.length; h++)
    if (s[h].getTextValue() === e.getTextValue()) {
      a = h;
      break;
    }
  if (a > -1 && a < o.length)
    return o[a];
};
var Fs;
class Fi extends Bn {
  /**
   * Creates a ModulePropertyExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(e, n, s, o, a, h) {
    super(e, n, s, o, a, h);
    /** @type {DataType} */
    b(this, Fs);
  }
  //#region - overrides
  /**
   * @override
   * @throws Throws an error if calling code is attempting to change the data type of an attribute of a built-in module
   */
  setDataType(e) {
    if (this.is(t.PropertyName))
      super.setDataType(e);
    else
      throw new Error(`Cannot change the data type of an attribute of a built-in module. Attempted to change the data type to ${e.name}.`);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    return [];
  }
  //#endregion - overrides
  //#region - extension methods
  /**
   * Gets the data type that owns this property (e.g. the math module, a custom class).
   * @returns {DataType}
   */
  getOwnerType() {
    return u(this, Fs);
  }
  /**
   * Sets the owner of this property
   * @param {DataType} ownerType 
   */
  setOwnerType(e) {
    y(this, Fs, e);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity() && this.getTextValue() === e.getTextValue();
  }
  //#endregion - extension methods
}
Fs = new WeakMap();
class Qa extends it {
  /**
   * Creates a FunctionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   * @param {DataType} dataType Optional. The data type of the individual expression. NotParsed by default.
   */
  constructor(i, e, n, s, o, a, h = d.NotParsed) {
    super(i, e, n, s, o, a, h);
  }
  //#region - overrides
  /**
   * @override
   * @throws Throws an error because the text value of a function node should not change.
   */
  setTextValue(i) {
    throw new Error(`Cannot change the name of a function node. Attempted to change the name to ${i}.`);
  }
  /**
   * @inheritdoc
   * @override
   */
  isSubscriptable() {
    return gi(this.getDataType());
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(i) {
    return this.getEntity() === i.getEntity() && this.getTextValue() === i.getTextValue();
  }
  //#endregion - overrides
}
var tt, Ns, Hi;
class Xa extends Qa {
  // Store the return statement expressions that determine the data type of the call
  /**
   * Creates a UserDefinedFunctionExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(e, n, s, o, a, h) {
    super(e, n, s, o, a, h, d.NotParsed);
    b(this, Ns);
    /** @type {ExpressionNode[]} */
    b(this, tt, []);
  }
  /**
   * @override
   */
  setDataType(e) {
    const n = u(this, tt).map((s) => s.getDataType());
    super.setDataType(_t(n));
  }
  // NEED TO ADD RETURN - CALL CONNECTIONS AT END - toGraph?
  toJSON() {
    const e = this.getReturnStatements(), n = this.getParent(), s = n !== void 0 && n.isOneOf([t.FunctionDefinitionStatement, t.MethodDefinitionStatement]) ? n.getParameters().length : -1, o = n !== void 0 && n.isOneOf([t.FunctionDefinitionStatement, t.MethodDefinitionStatement]) ? n.getOptionalParameterCount() : -1;
    return {
      name: this.getTextValue(),
      block: this.getBlockId(),
      callLineNumbers: Array.from(this.getObservers()).filter((a) => a.is(t.UserDefinedFunctionCall)).map((a) => a.getStartLineNumber()),
      hasReturn: e.length > 0,
      hasBranchWithoutReturn: u(this, tt).length > e.length,
      numOptionalParameters: o,
      parameters: s > -1 ? n.getParameters().flatMap((a) => a).map((a) => a.getTextValue()) : [],
      returnDetail: e.map((a) => ({ line: a.getStartLineNumber(), dataType: a.getDataType().name })),
      returnTypes: e.length > 0 ? Array.from(new Set(e.map((a) => a.getDataType().name))) : ["none"]
    };
  }
  //#region - extensions
  /**
   * Extract the return expression from an array of statements
   * @param {Statement[]} statements 
   * @param {Boolean} addProxy Optional. Whether or not a blank return is needed
   */
  addReturns(e, n = !1) {
    for (const s of e)
      if (s.getFirstExpression().is(t.ReturnStatement)) {
        const o = s.getFirstExpression();
        u(this, tt).push(o);
        for (const a of this.getObservers())
          a.is(t.UserDefinedFunctionCall) && (u(a.getFunctionExpression(), tt).push(o), o.addConnection(a));
        o.addObserver(this);
      } else
        m(this, Ns, Hi).call(this);
    n && m(this, Ns, Hi).call(this), this.setDataType();
  }
  getReturnType() {
    const e = u(this, tt).map((n) => n.getDataType());
    return _t(e);
  }
  getReturnStatements() {
    return u(this, tt).filter((e) => e.is(t.ReturnStatement));
  }
  //#endregion - extensions
}
tt = new WeakMap(), Ns = new WeakSet(), Hi = function() {
  const e = new Bn("proxy", t.VariableName, c.Identifiers, -1, -1, -1, !0);
  e.setDataType(d.None), u(this, tt).push(e);
};
var bn;
class dd extends Xa {
  constructor() {
    super(...arguments);
    /** @type {DataType} */
    b(this, bn, d.Class);
  }
  /**
   * Returns the data type that represents the containing class
   * @returns {DataType}
   */
  getContainingClass() {
    return u(this, bn);
  }
  /**
   * Sets the containing class of this method
   * @param {DataType} owner 
   */
  setContainingClass(e) {
    y(this, bn, e);
  }
  toJSON() {
    const e = super.toJSON();
    return e.containingClass = u(this, bn).name, this.getTextValue() === "__init__" && (e.hasReturn = !0, e.hasBranchWithoutReturn = !1, e.returnTypes = [e.containingClass]), e;
  }
}
bn = new WeakMap();
class hd extends Qa {
  /**
   * Creates a FunctionNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(i, e, n, s, o, a) {
    super(i, e, n, s, o, a, en.get(e));
  }
  //#region - overrides
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the data type should not be changed.
   */
  setDataType(i) {
    if (this.getEntity() !== t.FunctionName)
      throw new Error(`Cannot set the data type of a built-in function. Attempted to set the data type to ${i}`);
    super.setDataType(i);
  }
  //#endregion - overrides
}
var ci, Za;
class fd extends it {
  /**
   * Creates a TypeValueNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(e, n, s, o, a, h) {
    var i = (...hf) => (super(...hf), b(this, ci), this);
    if (n === t.TrueType || n === t.FalseType)
      i(e, n, s, o, a, h, d.Bool);
    else if (n === t.NoneType)
      i(e, n, s, o, a, h, d.None);
    else
      throw new Error(`Not a valid type value: ${n.name}`);
    this.addRule(m(this, ci, Za));
  }
  //#region - overrides
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the text value should not be changed.
   */
  setTextValue(e) {
    throw new Error(`The text value of a built-in function cannot be changed. Attempted to change the value to ${e}.`);
  }
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the data type should not be changed.
   */
  setDataType(e) {
    throw new Error(`Cannot set the data type of a built-in function. Attempted to set the data type to ${e}`);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return e.getEntity() === t.TrueType || e.getEntity() === t.FalseType || e.getEntity() === t.NoneType;
  }
}
ci = new WeakSet(), //#endregion - overrides
/**
 * Rule function. Checks if the property is unused
 * @param {TypeValueExpression} exp 
 * @returns {Symptom[]}
 */
Za = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
};
class Co extends it {
  /**
   * Creates a TypeNode
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   * @param {DataType} dataType 
   */
  constructor(i, e, n, s, o, a, h) {
    super(i, e, n, s, o, a, h);
  }
  //#region - overrides
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the text value should not be changed.
   */
  setTextValue(i) {
    throw new Error(`The text value of a class or type cannot be changed. Attempted to change the value to ${i}.`);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(i) {
    return this.getEntity() === i.getEntity() && this.getTextValue() === i.getTextValue();
  }
  //#endregion - overrides
}
class gd extends Co {
  /**
   * Creates a BuiltInTypeExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(i, e, n, s, o, a) {
    super(
      i,
      e,
      n,
      s,
      o,
      a,
      d.Unknown
      /*typeLookup(textValue)*/
    );
  }
  //#region - overrides
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the data type should not be changed.
   */
  setDataType(i) {
    throw new Error(`Cannot change the data type of a built-in type. Attempted to set the data type to ${i}.`);
  }
  //#endregion - overrides
}
class pd extends Co {
  /**
   * Creates an ExceptionExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(i, e, n, s, o, a) {
    super(i, e, n, s, o, a, d.Exception);
  }
  //#region - overrides
  /**
   * Inherited method. Overridden to do nothing and throw an error.
   * @override
   * @throws Throws an error because the data type should not be changed.
   */
  setDataType(i) {
    throw new Error(`Cannot change the data type of a built-in type. Attempted to set the data type to ${i}.`);
  }
  //#endregion - overrides
}
class md extends Co {
  /**
   * Creates a BuiltInTypeExpression
   * @param {String} textValue The text value of the node
   * @param {ExpressionEntity} entity
   * @param {ExpressionCategory} category
   * @param {Number} startLineNumber The zero-indexed document line number that the expression occurs on
   * @param {Number} documentStartIndex The index of the first character of the expression in the raw text of the document
   * @param {Number} indexOnLine
   */
  constructor(i, e, n, s, o, a) {
    super(i, e, n, s, o, a, d.Class);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(i) {
    return this.getEntity() === i.getEntity() && this.getTextValue() === i.getTextValue();
  }
}
var ne, ui, Ya;
class mi extends ee {
  // The elements in the compound type
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity The entity that describes the MultiPartExpression
   * @param {ExpressionEntity[][]} elements The elements in the compound type
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s, o) {
    const a = fi(s);
    super(e, n, s, c.CompoundTypes, a);
    b(this, ui);
    /** @type {ExpressionNode[][]} */
    b(this, ne);
    y(this, ne, o);
    for (let h = 0; h < u(this, ne).length; h++)
      if (s !== t.DictDefinition) {
        u(this, ne)[h].length > 1 && (u(this, ne)[h] = H.createTree(u(this, ne)[h]));
        for (const p of u(this, ne)[h])
          p.setParent(this), this.addConnection(p);
      } else
        for (let p = 0; p < u(this, ne)[h].length; p++) {
          u(this, ne)[h][p].length > 1 && (u(this, ne)[h][p] = H.createTree(u(this, ne)[h][p]));
          for (const w of u(this, ne)[h][p])
            w.setParent(this), this.addConnection(w);
        }
    this.addRule(m(this, ui, Ya));
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    this.getChildren().length > 1;
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of u(this, ne))
      for (let s of n)
        if (this.getEntity() !== t.DictDefinition)
          s.is(t.VariableName) ? e.push(s) : e = e.concat(s.getVariableExpressions());
        else
          for (let o of s)
            o.is(t.VariableName) ? e.push(o) : e = e.concat(o.getVariableExpressions());
    return e;
  }
  /**
   * @override
   */
  contains(e) {
    if (super.contains(e))
      return !0;
    for (let n of u(this, ne))
      for (let s of n)
        if (this.getEntity() !== t.DictDefinition) {
          if (s.contains(e))
            return !0;
        } else
          for (let o of s)
            if (o.contains(e))
              return !0;
    return !1;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of u(this, ne))
      for (let o of s)
        if (this.getEntity() !== t.DictDefinition)
          o.is(e) ? n.push(o) : n = n.concat(o.getExpressionsOfKind(e));
        else
          for (let a of o)
            a.is(e) ? n.push(a) : n = n.concat(a.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of u(this, ne))
        for (const o of s)
          if (this.getEntity() !== t.DictDefinition) {
            if (o.isOneOf(e)) return o;
            if (n = o.getFirstExpressionOf(e), n !== void 0) return n;
          } else
            for (const a of o) {
              if (a.isOneOf(e)) return a;
              if (n = a.getFirstExpressionOf(e), n !== void 0) return n;
            }
    return n;
  }
  /**
   * @inheritdoc
   * @override 
   */
  setDataType(e) {
    throw new Error("Can't update the type of a compound expression");
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of u(this, ne))
      for (const n of e)
        if (this.getEntity() !== t.DictDefinition)
          n.checkForSymptoms();
        else
          for (const s of n)
            s.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForCounterRules(e) {
    super.checkForCounterRules(e);
    for (const n of u(this, ne))
      for (const s of n)
        if (this.getEntity() !== t.DictDefinition)
          s.checkForCounterRules(s);
        else
          for (const o of s)
            o.checkForCounterRules(o);
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#elements) {
  //         for (const e of item) {
  //             if (this.getEntity() !== ExpressionEntity.DictDefinition) {
  //                 e.setBlockId(id);
  //             } else {
  //                 for (const keyValue of e) {
  //                     keyValue.setBlockId();
  //                 }
  //             }
  //         }
  //     }*/
  // }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity();
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return this.getEntity() !== t.DictDefinition ? [...super.getAllNestedExpressions(), ...u(this, ne).flatMap((e) => e.flatMap((n) => n.getAllNestedExpressions()))] : [...super.getAllNestedExpressions(), ...u(this, ne).flatMap((e) => e.flatMap((n) => n.flatMap((s) => s.getAllNestedExpressions())))];
  }
  toJSON() {
    const e = super.toJSON();
    try {
      e.elements = u(this, ne).map((n) => n.map((s) => s.toJSON()));
    } catch {
      e.elements = u(this, ne).map((s) => s.map((o) => o.map((a) => a.toJSON())));
    }
    return e;
  }
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets the elements in the compound expression
   * @returns {ExpressionNode[][]}
   */
  getElements() {
    return u(this, ne);
  }
  //#endregion - extensions
}
ne = new WeakMap(), ui = new WeakSet(), /**
 * Rule function. Checks if the property is unused
 * @param {CompoundTypeExpression} exp 
 * @returns {Symptom[]}
 */
Ya = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
};
var le, Rn, _a, el;
class rt extends ee {
  /**
   * Creates a new BlockDefinitionStatement
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionEntity} entity
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s) {
    super(e, n, s, c.BlockDefinitionStatement, d.NA);
    b(this, Rn);
    /** @type {ExpressionNode[]} */
    b(this, le, []);
    if (n.length > 1) {
      const o = m(this, Rn, _a).call(this);
      let a = H.createTree(n.slice(1, o));
      if (s === t.ForDefinitionStatement && a.length > 0)
        if (a[0].is(t.IteratorExpression))
          y(this, le, a);
        else if (a[0].is(t.ComparisonExpression)) {
          a[0] = a[0].convertToIterator(), y(this, le, [a[0]]);
          const h = a.slice(1).filter((p) => !p.is(t.Colon));
          h.length > 0 && y(this, le, u(this, le).concat(h));
        } else
          a = [new Oo(e, a)], y(this, le, a);
      else s === t.WithDefinitionStatement || s === t.ExceptDefinitionStatement ? a.length === 3 && a[1].is(t.AsKeyword) && a[2].is(t.VariableName) && y(this, le, [new tl(e, a)]) : y(this, le, a);
      for (const h of a)
        h.setParent(this), this.addConnection(h);
    }
    s === t.WhileDefinitionStatement && this.addRule(m(this, Rn, el));
  }
  //#region - overrides
  /**
   * @override
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 2 ? e[0].is(c.BlockDefinitions) && e[e.length - 1].is(t.Colon) : !1;
  }
  /**
   * @override
   * @inheritdoc 
   */
  setDataType(e) {
    throw new Error("Can't update the type of a block definition");
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of u(this, le))
      n.is(t.VariableName) ? e.push(n) : e = e.concat(n.getVariableExpressions());
    return e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of u(this, le))
      s.is(e) ? n.push(s) : n = n.concat(s.getExpressionsOfKind(e));
    return n;
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const c of this.#condition) {
  //         c.setBlockId(id);
  //     }*/
  // }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of u(this, le)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of u(this, le))
      e.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForCounterRules(e) {
    super.checkForCounterRules(e);
    for (const n of u(this, le))
      n.checkForCounterRules(n);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...u(this, le).flatMap((n) => n.getAllNestedExpressions())];
  }
  getCondition() {
    return u(this, le);
  }
  toJSON() {
    const e = super.toJSON();
    return e.keyword = this.getChildren()[0].getTextValue(), e.condition = u(this, le).map((n) => n.toJSON()), e;
  }
  //#endregion - overrides
  getCondition() {
    return u(this, le);
  }
  /** Gets the entity of the defining keyword */
  getBlockEntity() {
    return this.getChildren()[0].getEntity();
  }
}
le = new WeakMap(), Rn = new WeakSet(), _a = function() {
  const e = this.getChildren();
  for (let n = e.length - 1; n >= 0; n--)
    if (e[n].is(t.Colon))
      return n;
  return e.length;
}, /**
 * Rule function. Checks if this is a while True
 * @param {BlockDefinitionStatement} blockDef 
 * @returns {Symptom[]}
 */
el = function(e) {
  const n = [], s = e.getChildren();
  if (e.is(t.WhileDefinitionStatement)) {
    const o = u(e, le);
    ge(s, !0), o.length === 1 && (o[0].is(t.TrueType) || o[0].is(t.GroupStatement) && o[0].getContents().length === 1 && o[0].getContents()[0].is(t.TrueType)) && n.push(O.createStatementSymptom(I.WhileTrue, s, 0, s.length - 1));
  }
  return n;
};
var X, be, z, nl, sl, il, ol, js, rl, zi, Qi, al, ll, cl, ul, dl;
class tl extends ee {
  /**
   * Creates a new AssignmentExpression
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.AssignmentStatement, c.Assignment, d.NotParsed);
    b(this, z);
    /** @type {ExpressionNode[]} */
    b(this, X, []);
    /** @type {ExpressionNode[]} */
    b(this, be, []);
    m(this, z, nl).call(this), this.addRules([m(this, z, dl), m(this, z, al), m(this, z, ll)]), this.addCounterRules([m(this, z, cl), m(this, z, ul)]);
  }
  //#region - overrides
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of u(this, be))
      e = e.concat(n.getVariableExpressions());
    for (let n of u(this, X))
      e = e.concat(n.getVariableExpressions());
    return e;
  }
  setDataType(e) {
    e = _t(u(this, X).map((n) => n.getDataType())), super.setDataType(e);
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const v of this.#values) {
  //         v.setBlockId(id);
  //     }*/
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...u(this, X).flatMap((n) => n.getAllNestedExpressions()), ...u(this, be).flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.targets = u(this, X).map((n) => n.toJSON()), e.values = u(this, be).map((n) => n.toJSON()), e;
  }
  //#endregion - overrides
  //#region - extension
  /**
   * The variables on the left side of the assignment.
   * @returns {ExpressionNode[]}
   */
  getTargetVariables() {
    return u(this, X);
  }
  /**
   * The values on the right side of the assignment.
   * @returns {ExpressionNode[]}
   */
  getAssignedValues() {
    return u(this, be);
  }
  //#endregion - extension
}
X = new WeakMap(), be = new WeakMap(), z = new WeakSet(), /**
 * Helper method. Populates the #variables and #values arrays, sets the data types of
 * each variable and adds the variables as observers on the values as appropriate
 */
nl = function() {
  const e = this.getChildren();
  Zt(e, t.AssignmentOperator) > 0 ? m(this, z, ol).call(this, e) : Zt(e, t.AsKeyword) > 0 ? m(this, z, sl).call(this, e) : Zt(e, t.WalrusOperator) > 0 && m(this, z, il).call(this, e);
}, sl = function(e) {
  const n = H.split(e, t.AsKeyword), s = [];
  for (let o = 0; o < n.length; o++)
    s.push(H.split(n[o], t.Comma));
  if (n.length === 2 && s.length === 2) {
    for (let o of s[1])
      o[0].is(t.VariableName) ? o[0].setAssignedOrChanged() : o[0].is(t.PropertyCallExpression) && o[0].getProperty().is(t.PropertyName) && o[0].getProperty().setAssignedOrChanged(), u(this, X).push(o[0]);
    for (let o of s[0])
      u(this, be).push(o[0]);
  }
  u(this, X).length === u(this, be).length ? m(this, z, js).call(this) : u(this, X).length > u(this, be).length ? m(this, z, zi).call(this) : m(this, z, Qi).call(this);
}, il = function(e) {
  const n = H.split(e, t.WalrusOperator);
  if (n.length === 2) {
    const s = n[0], o = n[1];
    s[0].is(t.VariableName) ? s[0].setAssignedOrChanged() : s[0].is(t.SubscriptedExpression) && s[0].getChildren()[0].is(t.VariableName) ? s[0].getChildren()[0].setAssignedOrChanged() : s[0].is(t.PropertyCallExpression) && s[0].getProperty().is(t.PropertyName) && s[0].getProperty().setAssignedOrChanged(), u(this, X).push(s[0]), u(this, be).push(o[0]), m(this, z, js).call(this);
    for (const a of u(this, X))
      a.addObserver(this), this.addConnection(a);
    this.setDataType(o[0].getDataType());
  } else
    this.setDataType(d.Invalid);
}, ol = function(e) {
  const n = H.split(e, t.AssignmentOperator), s = [];
  for (let o = 0; o < n.length; o++) {
    const a = H.split(n[o], t.Comma);
    s.push(a);
  }
  if (n.length === 2 && s.length === 2) {
    for (let o of s[0])
      o[0].is(t.VariableName) ? o[0].setAssignedOrChanged() : o[0].is(t.SubscriptedExpression) && o[0].getChildren()[0].is(t.VariableName) ? o[0].getChildren()[0].setAssignedOrChanged() : o[0].is(t.PropertyCallExpression) && o[0].getProperty().is(t.PropertyName) && o[0].getProperty().setAssignedOrChanged(), u(this, X).push(o[0]);
    for (let o of s[1])
      u(this, be).push(o[0]);
  }
  u(this, X).length === u(this, be).length ? m(this, z, js).call(this) : u(this, X).length > u(this, be).length ? m(this, z, zi).call(this) : m(this, z, Qi).call(this);
  for (const o of u(this, X))
    o.addObserver(this), this.addConnection(o);
  this.setDataType(_t(u(this, X).map((o) => o.getDataType())));
}, js = function() {
  for (let e = 0; e < u(this, X).length; e++)
    u(this, X)[e].isOneOf([t.VariableName, t.SubscriptedExpression, t.PropertyCallExpression]) ? (u(this, X)[e].setDataType(u(this, be)[e].getDataType()), u(this, be)[e].addObserver(u(this, X)[e]), u(this, be)[e].addConnection(u(this, X)[e])) : u(this, X)[e].is(t.TupleDefinition) ? m(this, z, rl).call(this, u(this, X)[e]) : u(this, X)[e].is(c.SpecialVariables) || this.setDataType(d.Invalid);
}, /**
 * When the variable assigned is actually a tuple of variables, assign each variable unknown
 * @param {CompoundTypeExpression} tuple 
 */
rl = function(e) {
  for (let n of e.getElements())
    n[0].isOneOf([t.VariableName, t.SubscriptedExpression]) && n[0].setDataType(d.Unknown);
}, /**
 * If there are more assigned variables than values, assume the value is a tuple and set each variable to 
 * Unknown. No need to add as observers.
 */
zi = function() {
  for (let e of u(this, X))
    e.isOneOf([t.VariableName, t.SubscriptedExpression]) ? e.setDataType(d.Unknown) : console.log("stop");
}, /**
 * If there are more values than variables, assign the value of tuple. No need to set observers.
 */
Qi = function() {
  for (let e of u(this, X))
    e.isOneOf([t.VariableName, t.SubscriptedExpression]) ? e.setDataType(d.Tuple) : console.log("stop");
}, /** 
 * Rule function. Checks if the expression calculates with something with no value and if so,
 * adds a new Symptom object.
 * @param {AssignmentExpression} exp
 * @returns {Symptom[]}
 */
al = function(e) {
  const n = [];
  for (const s of e.getTargetVariables()) {
    const o = Ze(s.getTextValue()).category;
    s.is(t.VariableName) && s.getLastUsages().length === 0 && o === c.BuiltInFunctions ? n.push(O.createStatementSymptom(
      I.VariableWithSameNameAsFunction,
      [s],
      0,
      0,
      {
        funcType: Kn,
        varIsParameter: s.isParameter()
      }
    )) : (o === c.BlockDefinitions || o === c.LogicalOperators || o === c.Types || o === c.OtherKeywords) && s.getTextValue() !== "f" && s.getTextValue() !== "r" && n.push(O.createStatementSymptom(I.ReservedWordAssigned, [s], 0, 0));
  }
  return n;
}, /**
 * 
 * @param {AssignmentExpression} exp 
 * @returns {Symptom[]}
 */
ll = function(e) {
  const n = [], s = e.getAssignedValues();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(O.createStatementSymptom(I.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : we,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : we
    }));
  return n;
}, /**
 * 
 * @param {AssignmentExpression} exp 
 * @returns 
 */
cl = function(e) {
  const n = [], s = e.getTargetVariables(), o = e.getAssignedValues();
  return s.length > 0 && o.length > 0 && e.getExpressionsOfKind(t.WalrusOperator).length === 0 && n.push(O.createStatementSymptom(B.ValidAssignment, e.getChildren(), 0, e.getChildren().length - 1, {
    before: s[s.length - 1].getTextValue(),
    after: o[0].getTextValue()
  })), n;
}, ul = function(e) {
  const n = [], s = e.getTargetVariables(), o = e.getAssignedValues();
  return s.length === 1 && o.length === 1 && o[0].getDataType() === d.Bool && !o[0].isOneOf([t.TrueType, t.FalseType]) && n.push(O.createStatementSymptom(B.NonLiteralBooleanAssigned, e.getChildren(), 0, e.getChildren().length - 1, {
    assignedToVariable: s[0].getTextValue(),
    expression: o[0].getTextValue()
  })), n;
}, /** 
 * Rule function. Checks if the expression calculates with something with no value and if so,
 * adds a new Symptom object.
 * @param {AssignmentExpression} exp
 * @returns {Symptom[]}
 */
dl = function(e) {
  const n = [], a = e.getAssignedValues().flatMap((h) => h.is(t.GroupStatement) ? h.getContents() : h).filter((h) => tn(h) || h.getDataType() === d.None && !h.isOneOf([t.NoneType, t.VariableName]));
  return a.length > 0 && n.push(...a.map((h) => O.createStatementSymptom(
    I.AssignedNone,
    [h],
    0,
    0,
    {
      expression: h,
      usage: Io,
      target: u(e, X)[0].getTextValue()
    }
  ))), n;
};
var Ke, Ee, In, ut, qe, hl, fl, gl, pl, ml;
class wd extends ee {
  // Should store the plain value, not the placeholder calculation
  /**
   * Creates a new ChangeExpression
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.ChangeStatement, c.Assignment, d.NA);
    b(this, qe);
    /** @type {ExpressionNode[]} */
    b(this, Ke, []);
    // should only contain one if valid
    /** @type {Number} */
    b(this, Ee, -1);
    /** @type {ExpressionNode[]} */
    b(this, In, []);
    // Should store calculations rather than plain value
    /** @type {ExpressionNode} */
    b(this, ut);
    m(this, qe, hl).call(this), this.addRule(m(this, qe, ml));
  }
  //#region - overrides
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of u(this, In))
      e = e.concat(n.getVariableExpressions());
    for (let n of u(this, Ke))
      e = e.concat(n.getVariableExpressions());
    return e;
  }
  /**
   * Gets the value assigned. May be undefined if the expression is incomplete
   * @returns {ExpressionNode | undefined}
   */
  getAssignedValue() {
    return u(this, ut);
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     //this.#assignedValue.setBlockId(id);
  // }
  //#endregion - overrides
  /**
   * The variables on the left side of the assignment.
   * @returns {ExpressionNode[]}
   */
  getTargetVariables() {
    return u(this, Ke);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...u(this, Ke).flatMap((n) => n.getAllNestedExpressions()), ...u(this, ut).getAllNestedExpressions()];
  }
  toJSON() {
    const e = super.toJSON();
    return e.target = u(this, Ke)[0].toJSON(), e.operator = this.getChildren()[u(this, Ee)].toJSON(), e.changeValue = u(this, ut).toJSON(), e;
  }
}
Ke = new WeakMap(), Ee = new WeakMap(), In = new WeakMap(), ut = new WeakMap(), qe = new WeakSet(), hl = function() {
  m(this, qe, pl).call(this);
  const e = this.getChildren();
  if (u(this, Ee) === 1 && e.length === 3)
    e[0].is(t.VariableName) ? e[0].setAssignedOrChanged() : e[0].is(t.SubscriptedExpression) && e[0].getChildren()[0].is(t.VariableName) ? e[0].getChildren()[0].setAssignedOrChanged() : e[0].is(t.PropertyCallExpression) && e[0].getProperty().is(t.PropertyName) && e[0].getProperty().setAssignedOrChanged(), u(this, Ke).push(e[0]), y(this, ut, e[2]), this.addConnection(e[0]), e[2].addConnection(e[0]), e[0].isOneOf([t.VariableName, t.SubscriptedExpression]) ? m(this, qe, fl).call(this) : this.setDataType(d.Invalid);
  else if (u(this, Ee) === 1 && e.length > 3 && ts(e, t.Comma)) {
    this.setDataType(d.Tuple);
    const n = e.slice(2), s = H.split(n, t.Comma), o = new mi(ge(n), n, t.TupleDefinition, s);
    for (o.setParent(this); e.length > 2; )
      e.pop();
    e.push(o), u(this, Ke).push(e[0]), y(this, ut, e[2]);
  } else
    this.setDataType(d.Invalid), y(this, ut, e[u(this, Ee) - 1]), y(this, Ke, u(this, Ee) > -1 ? e.slice(0, u(this, Ee)) : []), y(this, In, u(this, Ee) > -1 ? e.slice(u(this, Ee) + 1) : []);
}, fl = function() {
  const e = m(this, qe, gl).call(this), n = u(this, Ke)[0], s = [
    new $a(e.entity.name, e.entity, e.category, -1, -1),
    this.getChildren()[2]
  ];
  if (n.is(t.VariableName)) {
    const a = new Bn(n.getTextValue(), n.getEntity(), n.getCategory(), -1, -1, -1, !0);
    s.unshift(a);
  } else {
    const a = n.getChildren(), h = new Xs("Placeholder", [a[0], a[1]]);
    s.unshift(h);
  }
  const o = new Zs("Placeholder", s);
  u(this, In).push(o), n.setDataType(o.getDataType()), o.addObserver(n);
}, /**
 * Helper method. Finds the ExpressionEntity and ExpressionCategory of the operator without the =
 * @returns {Object}
 */
gl = function() {
  const n = this.getChildren()[u(this, Ee)].getTextValue().replace("=", "");
  return Ze(n);
}, /**
 * Finds the index of the change operator in the children and sets the #operatorIndex
 */
pl = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    if (e[n].isChangeOperator()) {
      y(this, Ee, n);
      break;
    }
}, /** 
 * Rule function. Checks if the expression calculates with something with no value and if so,
 * adds a new Symptom object.
 * @param {ChangeExpression} exp
 * @returns {Symptom[]}
 */
ml = function(e) {
  const n = [], s = e.getAssignedValue();
  return (s.getDataType() === d.None && !s.isOneOf([t.NoneType, t.VariableName]) || tn(s)) && n.push(O.createStatementSymptom(
    I.AssignedNone,
    [s],
    0,
    0,
    {
      expression: s,
      usage: Io,
      target: u(e, Ke)[0].getTextValue()
    }
  )), n;
};
var se, En, wl, Sl;
class Sd extends ee {
  // The contents of the group (everything between the parentheses)
  /**
   * Creates a new GroupElement
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.GroupStatement, c.Group, d.NotParsed);
    b(this, En);
    /** @type {ExpressionNode[]} */
    b(this, se);
    if (n.length > 2) {
      const s = n.slice(1, n.length - 1);
      s.length > 1 ? y(this, se, H.createTree(n.slice(1, n.length - 1))) : y(this, se, [s[0]]);
    } else
      y(this, se, []);
    m(this, En, wl).call(this), this.setDataType(u(this, se).length === 1 ? u(this, se)[0].getDataType() : d.Unknown), u(this, se).length === 1 ? u(this, se)[0].addObserver(this) : this.setDataType(d.Invalid), this.addRule(m(this, En, Sl));
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const c of this.#contents) {
  //         c.setBlockId(id);
  //     }*/
  // }
  //#region - extension
  /**
   * Gets the contents of the group.
   * @returns {ExpressionNode[]}
   */
  getContents() {
    return u(this, se);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of u(this, se))
      e = e.concat(n.getVariableExpressions());
    return e;
  }
  /**
   * Gets all expressions that match the given entity
   * @param {ExpressionEntity} entity 
   * @returns {ExpressionNode[]}
   * @override
   */
  getExpressionsOfKind(e) {
    let n = super.getExpressionsOfKind(e);
    for (let s of u(this, se))
      s.is(e) ? n.push(s) : n = n.concat(s.getExpressionsOfKind(e));
    return n;
  }
  /**
   * Gets the first expressions that matches any of the search info.
   * @param {ExpressionEntity | ExpressionCategory | String[]} entities 
   * @returns {ExpressionNode | undefined}
   */
  getFirstExpressionOf(e) {
    let n = super.getFirstExpressionOf(e);
    if (n === void 0)
      for (const s of u(this, se)) {
        if (s.isOneOf(e))
          return s;
        if (n = s.getFirstExpressionOf(e), n !== void 0) return n;
      }
    return n;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of u(this, se))
      e.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForCounterRules(e) {
    super.checkForCounterRules(e);
    for (const n of u(this, se))
      n.checkForCounterRules(n);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    const n = this.getContents();
    for (const s of n)
      if (!s.matchesPattern(e)) return !1;
    return !0;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...u(this, se).flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.contents = u(this, se).map((n) => n.toJSON()), e;
  }
}
se = new WeakMap(), En = new WeakSet(), wl = function() {
  for (let e = 0; e < u(this, se).length; e++)
    e < u(this, se).length - 1 && u(this, se)[e].addConnection(u(this, se)[e + 1]), u(this, se)[e].setParent(this), this.addConnection(u(this, se)[e]);
}, //#endregion - extension
/**
 * 
 * @param {GroupElement} exp 
 * @returns {Symptom[]}
 */
Sl = function(e) {
  const n = [], s = e.getContents();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(O.createStatementSymptom(I.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : we,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : we
    }));
  return n;
};
var xe;
class bl extends ee {
  // An array storing each part of the slice i.e. the expressions between :
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @param {ExpressionNode[][]} indices Optional. The individual indices in the slice.
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n, s = []) {
    super(e, n, t.Slice, c.Other, d.NA);
    /** @type {ExpressionNode[][]} */
    b(this, xe);
    y(this, xe, s);
    for (let o = 0; o < u(this, xe).length; o++) {
      u(this, xe)[o].length > 1 && (u(this, xe)[o] = H.createTree(u(this, xe)[o]));
      for (const a of u(this, xe)[o])
        a.setParent(this), this.addConnection(a);
    }
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 4 && e[0].is(t.OpenSquareBracket) && e[e.length - 1].is(t.CloseSquareBracket) && ts(e, t.Colon);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of u(this, xe))
      for (let s of n)
        e = e.concat(s.getVariableExpressions());
    return e;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of u(this, xe))
      for (const n of e)
        n.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForCounterRules(e) {
    super.checkForCounterRules(e);
    for (const n of u(this, xe))
      for (const s of n)
        s.checkForCounterRules(s);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity();
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const item of this.#indices) {
  //         for (const i of item) {
  //             i.setBlockId(id);
  //         }
  //     }*/
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...u(this, xe).flatMap((n) => n.flatMap((s) => s.getAllNestedExpressions()))];
  }
  toJSON() {
    const e = super.toJSON();
    return e.indices = u(this, xe).map((n) => n.map((s) => s.toJSON())), e;
  }
  //#endregion - overrides
  //#region - extension
  /**
   * Gets the indices that make up the slice.
   * @returns {ExpressionNode[][]}
   */
  getIndices() {
    return u(this, xe);
  }
  //#endregion - extension
}
xe = new WeakMap();
var nt;
class Il extends ee {
  /**
   * Creates a new MultiPartExpressionNode
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children is empty
   */
  constructor(e, n) {
    super(e, n, t.IndexKey, c.Other, d.NA);
    /** @type {ExpressionNode[]} */
    b(this, nt, []);
    n.length > 2 && y(this, nt, H.createTree(n.slice(1, n.length - 1)));
    for (const s of u(this, nt))
      s.setParent(this), this.addConnection(s);
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length >= 3 && e[0].is(t.OpenSquareBracket) && e[e.length - 1].is(t.CloseSquareBracket);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of u(this, nt))
      e = e.concat(n.getVariableExpressions());
    return e;
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this);
    for (const e of u(this, nt))
      e.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForCounterRules(e) {
    super.checkForCounterRules(e);
    for (const n of u(this, nt))
      n.checkForCounterRules(n);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    return this.getEntity() === e.getEntity();
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     /*for (const i of this.#contents) {
  //         i.setBlockId(id)
  //     }*/
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...u(this, nt).flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.index = u(this, nt).map((n) => n.toJSON()), e;
  }
  //#endregion - overrides
}
nt = new WeakMap();
var Un, yl, Fl, Cs, Xi;
const Zn = class Zn extends ee {
  /**
   * Creates a new SubscriptedElement - an expression followed by an index, key, or slice
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain two nodex
   */
  constructor(e, n) {
    var o;
    let s = m(o = Zn, Cs, Xi).call(o, n);
    super(e, n, t.SubscriptedExpression, c.MultipartValue, s);
    b(this, Un);
    n[0].addObserver(this);
    for (const a of n)
      this.addConnection(a);
    this.addRules([m(this, Un, Fl), m(this, Un, yl)]);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    if (this.getEntity() !== e.getEntity())
      return !1;
    const n = this.getChildren(), s = e.getChildren();
    return n.length > 0 && s.length > 0 && n[0].matchesPattern(s[0]);
  }
  //#region - overrides
  /**
   * @inheritdoc
   */
  isComplete() {
    const e = this.getChildren();
    return e.length === 2 && e[1].isOneOf(t.IndexKey, t.Slice);
  }
  /**
   * @override
   */
  setDataType(e) {
    var s;
    const n = m(s = Zn, Cs, Xi).call(s, this.getChildren());
    super.setDataType(n);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
  //#endregion - extensions
};
Un = new WeakSet(), /**
 * Rule function. Checks if the property is unused
 * @param {SubscriptedElement} exp 
 * @returns {Symptom[]}
 */
yl = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
}, /** 
 * Rule function. Checks if the subscripted element is not subscriptable and if so,
 * adds a new Symptom object.
 * @param {SubscriptedElement} exp
 * @returns {Symptom[]}
 */
Fl = function(e) {
  const n = [], s = e.getChildren();
  return s.length > 0 && !gi(s[0].getDataType()) && n.push(O.createStatementSymptom(
    I.SubscriptedNonSubscriptable,
    s,
    0,
    s.length - 1,
    {
      isUndefined: s[0].getDataType() === d.Undefined,
      subscriptedType: s[0].getDataType(),
      varName: s[0].getTextValue()
    }
  )), n;
}, Cs = new WeakSet(), Xi = function(e) {
  if (e.length !== 2)
    return d.Unknown;
  if (e[0].getDataType() === d.String)
    return d.String;
  if (e[1].is(t.Slice)) {
    const n = e[0].getDataType();
    return n === d.NotParsed || n === d.Unknown || n === d.List || n === d.Tuple || n === d.String ? n : d.Invalid;
  }
  return d.Unknown;
}, b(Zn, Cs);
let Xs = Zn;
var je, Nl, st, Zi, Yi, Cl, Ol, Tl, xl, Ml;
const Bt = class Bt extends ee {
  /**
   * Creates a new CalculatedExpression
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain exactly three elements
   */
  constructor(e, n) {
    var o, a;
    let s = n.length === 3 ? m(o = Bt, st, Zi).call(o, ...n) : n.length === 2 ? m(a = Bt, st, Yi).call(a, n[1]) : d.Unknown;
    super(e, n, t.CalculatedExpression, c.MultipartValue, s);
    b(this, je);
    n.length === 3 ? (n[0] !== void 0 && n[0].addObserver(this), n[2] !== void 0 && n[2].addObserver(this)) : n.length > 0 && n[1] !== void 0 && n[1].addObserver(this), m(this, je, Nl).call(this), this.addRules([m(this, je, Ml), m(this, je, xl), m(this, je, Tl), m(this, je, Ol)]);
  }
  //#region - overrides
  /**
   * @override
   */
  setDataType(e) {
    var s, o;
    const n = this.getChildren();
    e = n.length === 3 ? m(s = Bt, st, Zi).call(s, ...n) : m(o = Bt, st, Yi).call(o, n[1]), super.setDataType(e);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    if (this.getEntity() !== e.getEntity()) return !1;
    const n = this.getChildren(), s = e.getChildren();
    if (n.length !== s.length) return !1;
    const o = /* @__PURE__ */ new Map();
    for (const a of n) {
      let h = !1;
      for (const p of s)
        if (a.matchesPattern(p)) {
          h = !0;
          break;
        }
      if (!h && !a.is(t.VariableName))
        return !1;
      a.is(t.VariableName) && o.set(a.getTextValue(), h);
    }
    return o.size === 0 ? !0 : Array.from(o.values()).filter((a) => a === !0).length > 0;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
  //#endregion - extensions
};
je = new WeakSet(), Nl = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    this.addConnection(e[n]), n < e.length - 1 && e[n].addConnection(e[n + 1]);
}, st = new WeakSet(), Zi = function(e, n, s) {
  const o = e.getDataType(), a = s.getDataType();
  return e.is(t.StringLiteral) && n.is(t.ModulusOperator) ? d.String : o === d.NotParsed || a === d.NotParsed ? d.NotParsed : o === d.Undefined && e.is(t.VariableName) && e.isProxy() || a === d.Undefined && s.is(t.VariableName) && s.isProxy() ? d.Undefined : o === d.Unknown || a === d.Unknown ? d.Unknown : o === d.Invalid || a === d.Invalid || o === d.NA || a === d.NA ? d.Invalid : e.isNumeric() && s.isNumeric() ? m(this, st, Cl).call(this, e, n, s) : n.isOneOf([t.ExponentOperator, t.DivideOperator, t.IntDivideOperator]) ? d.Invalid : n.is(t.MultiplyOperator) ? e.isNonFloatNumeric() && (a === d.String || a === d.List || a === d.Tuple) ? a : s.isNonFloatNumeric() && (o === d.String || o === d.List || o === d.Tuple) ? o : d.Invalid : n.is(t.ModulusOperator) ? o === d.String ? d.String : d.Invalid : n.is(t.AddOperator) ? o === a && (o === d.String || o === d.List || o === d.Tuple) || o === d.List && (a === d.String || a === d.Dict || a === d.Set || a === d.Tuple) ? o : d.Invalid : n.is(t.SubtractOperator) && o === d.Set && o === a ? o : d.Invalid;
}, Yi = function(e) {
  const n = e.getDataType();
  return n === d.Float || n === d.Int || n === d.Number || n === d.NotParsed || n === d.Unknown ? n : n === d.Bool ? d.Int : d.Invalid;
}, Cl = function(e, n, s) {
  return n.is(t.DivideOperator) ? d.Float : e.getDataType() === s.getDataType() && e.getDataType() !== d.Bool ? e.getDataType() : e.isIntLike() && s.isIntLike() ? d.Int : e.getDataType() === d.Float || s.getDataType() === d.Float ? d.Float : d.Number;
}, /**
 * Rule function. Checks if the property is unused
 * @param {CalculatedExpression} exp 
 * @returns {Symptom[]}
 */
Ol = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
}, /**
 * 
 * @param {CalculatedExpression} exp 
 * @returns {Symptom[]}
 */
Tl = function(e) {
  const n = [], s = e.getChildren();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(O.createStatementSymptom(I.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : we,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : we
    }));
  return n;
}, /** 
 * Rule function. Checks if the expression is an invalid calculation and if so,
 * adds a new Symptom object.
 * @param {CalculatedExpression} calc
 * @returns {Symptom[]}
 */
xl = function(e) {
  const n = [], s = e.getChildren();
  return e.getDataType() === d.Invalid && s.filter((o) => o.getDataType() === d.Undefined || o.getDataType() === d.Invalid).length === 0 && n.push(O.createStatementSymptom(I.TypeErrorInvalid, s, 0, s.length - 1, {
    parts: s.map((o) => o.getDataType() === d.NA ? o.getTextValue() : o.getDataType().name)
  })), n;
}, /** 
 * Rule function. Checks if the expression calculates with something with no value and if so,
 * adds a new Symptom object.
 * @param {CalculatedExpression} exp
 * @returns {Symptom[]}
 */
Ml = function(e) {
  const n = [], a = e.getChildren().flatMap((h) => h.is(t.GroupStatement) ? h.getContents() : h).filter((h) => tn(h) || h.getDataType() === d.None && !h.isOneOf([t.NoneType, t.VariableName]));
  return a.length > 0 && n.push(...a.map((h) => O.createStatementSymptom(
    I.AssignedNone,
    [h],
    0,
    0,
    {
      expression: h,
      usage: _c
    }
  ))), n;
}, b(Bt, st);
let Zs = Bt;
var He, Dl, Os, eo, Al, Bl, kl, Pl;
const Yn = class Yn extends ee {
  /**
   * Creates a new ComparisonExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain exactly three elements
   */
  constructor(e, n) {
    var o;
    let s = n.length === 3 ? m(o = Yn, Os, eo).call(o, ...n) : d.Unknown;
    super(e, n, t.ComparisonExpression, c.MultipartValue, s);
    b(this, He);
    n.length === 3 && (n[0].addObserver(this), n[2].addObserver(this)), m(this, He, Dl).call(this), this.addRules([m(this, He, Pl), m(this, He, kl), m(this, He, Bl), m(this, He, Al)]);
  }
  //#region - overrides
  /**
   * @override 
   */
  setDataType(e) {
    var s;
    const n = m(s = Yn, Os, eo).call(s, ...this.getChildren());
    n !== this.getDataType() && super.setDataType(n);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    if (this.getEntity() !== e.getEntity()) return !1;
    const n = this.getChildren(), s = e.getChildren();
    if (n.length !== s.length) return !1;
    const o = /* @__PURE__ */ new Map();
    for (let a = 0; a < n.length; a++) {
      if (n[a].isOneOf([t.InKeyword, t.NotInKeyword])) {
        const p = n[a].is(t.InKeyword) ? t.NotInKeyword : t.InKeyword;
        for (let w = 0; w < s.length; w++)
          if (s[w].is(p))
            return a > 0 && a < n.length - 1 && w > 0 && w < s.length - 1 ? n[a - 1].matchesPattern(s[w - 1]) && n[a + 1].matchesPattern(s[w + 1]) : !1;
        return !1;
      }
      let h = !1;
      for (const p of s)
        if (n[a].matchesPattern(p)) {
          h = !0;
          break;
        }
      if (!h && !n[a].isOneOf([t.VariableName, t.BuiltInFunctionCall, t.UserDefinedFunctionCall, t.SubscriptedExpression]))
        return !1;
      n[a].isOneOf([t.VariableName, t.BuiltInFunctionCall, t.UserDefinedFunctionCall, t.SubscriptedExpression, t.CalculatedExpression]) && o.set(n[a].getTextValue(), h);
    }
    return o.size === 0 ? !1 : Array.from(o.values()).filter((a) => a === !0).length > 0;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
  //#endregion - overrides
  //#region - extensions
  convertToIterator() {
    const e = this.getChildren();
    return e.length === 3 && (e[0].removeObserver(this), e[2].removeObserver(this)), new Oo(this.getTextValue(), e);
  }
  //#endregion - extensions
};
He = new WeakSet(), Dl = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    this.addConnection(e[n]), n < e.length - 1 && e[n].addConnection(e[n + 1]);
}, Os = new WeakSet(), eo = function(e, n, s) {
  const o = e.getDataType(), a = s.getDataType();
  return n.isOneOf([t.EqualOperator, t.NotEqualOperator, t.IsKeyword, t.IsNotKeyword]) ? d.Bool : n.isOneOf([t.InKeyword, t.NotInKeyword]) ? a === d.String && (o === d.String || o === d.Unknown || o === d.NotParsed) || a === d.List || a === d.Tuple || a === d.Set || a === d.Dict || a === d.Unknown ? d.Bool : a === d.NotParsed ? d.NotParsed : d.Invalid : o === d.NotParsed || a === d.NotParsed ? d.NotParsed : o === d.None || a === d.None ? d.Invalid : o === d.Unknown || a === d.Unknown || e.isNumeric() && s.isNumeric() || o === a ? d.Bool : d.Invalid;
}, /**
 * Rule function. Checks if the property is unused
 * @param {ComparisonExpression} exp 
 * @returns {Symptom[]}
 */
Al = function(e) {
  const n = [], s = e.getChildren();
  return !(s[0] !== void 0 && s[0].is(t.BuiltInFunctionCall) && s[0].getFunctionExpression().is(t.AssertFunction)) && (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
}, /**
 * 
 * @param {ComparisonExpression} exp 
 * @returns {Symptom[]}
 */
Bl = function(e) {
  const n = [], s = e.getChildren();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(O.createStatementSymptom(I.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : we,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : we
    }));
  return n;
}, /**
 * Helper method. Checks if the expression at index i indicates the CompareBoolLiteral symptom.
 * @param {ComparisonExpression} comparison 
 * @returns {Symptom[]}
 */
kl = function(e) {
  const n = [], s = e.getChildren();
  return s.length === 3 && s[0].getDataType() === d.Bool && s[1].isOneOf([t.EqualOperator, t.IsKeyword]) && s[2].isOneOf([t.TrueType, t.FalseType]) && n.push(O.createStatementSymptom(
    I.CompareBoolLiteral,
    s,
    0,
    s.length - 1,
    {
      boolValue: s[0].getTextValue(),
      operator: s[1].getTextValue(),
      boolLiteral: s[2].getTextValue(),
      usedIn: e.getContextOfUse()
    }
  )), n;
}, /** 
 * Rule function. Checks if the expression compares something with no value and if so,
 * adds a new Symptom object.
 * @param {ComparisonExpression} exp
 * @returns {Symptom[]}
 */
Pl = function(e) {
  const n = [], a = e.getChildren().flatMap((h) => h.is(t.GroupStatement) ? h.getContents() : h).filter((h) => !(h.is(t.BuiltInFunctionCall) && h.getFunctionExpression().is(t.AssertFunction)) && (tn(h) || h.getDataType() === d.None && !h.isOneOf([t.NoneType, t.VariableName])));
  return a.length > 0 && n.push(...a.map((h) => O.createStatementSymptom(
    I.AssignedNone,
    [h],
    0,
    0,
    {
      expression: h,
      usage: eu
    }
  ))), n;
}, b(Yn, Os);
let _i = Yn;
var Ye, Vl, Ts, no, Ll, vl, bd, Rl;
const _n = class _n extends ee {
  /**
   * Creates a new BooleanExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    var o;
    const s = m(o = _n, Ts, no).call(o, n);
    super(e, n, t.BooleanExpression, c.MultipartValue, s);
    b(this, Ye);
    n.length === 3 && n[1].is(c.LogicalOperators) && (n[0].addObserver(this), n[2].addObserver(this)), m(this, Ye, Vl).call(this), this.addRules([m(this, Ye, Rl), m(this, Ye, vl), m(this, Ye, Ll)]);
  }
  //#region - overrides
  setDataType(e) {
    var s;
    const n = m(s = _n, Ts, no).call(s, this.getChildren());
    n !== this.getDataType() && super.setDataType(n);
  }
  /**
   * Checks if this node contains the same pattern of elements as the passed in node. Depending on 
   * the type of node, this will need to be an exact match (by text value and entity) or a
   * category match.
   * @param {ExpressionNode} node 
   * @returns {Boolean}
   * @override
   */
  matchesPattern(e) {
    const n = this.getChildren();
    if (this.getEntity() !== e.getEntity())
      return e.is(t.VariableName) && n.length === 2 && n[0].is(t.NotOperator) && n[1].is(t.VariableName) ? n[1].matchesPattern(e) : !1;
    const s = e.getChildren(), o = /* @__PURE__ */ new Map();
    for (const a of n) {
      if (a.is(t.NotOperator))
        continue;
      let h = !1;
      for (const p of s)
        if (!p.is(t.NotOperator) && a.matchesPattern(p)) {
          h = !0;
          break;
        }
      if (!h && !a.is(t.VariableName))
        return !1;
      a.is(t.VariableName) && o.set(a.getTextValue(), h);
    }
    return o.size === 0 ? !0 : Array.from(o.values()).filter((a) => a === !0).length > 0;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
  //#endregion - extensions
};
Ye = new WeakSet(), Vl = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    this.addConnection(e[n]), n < e.length - 1 && e[n].addConnection(e[n + 1]);
}, Ts = new WeakSet(), no = function(e) {
  if (e.length === 2 && e[0].is(t.NotOperator))
    return d.Bool;
  if (e.length === 3 && e[1].is(c.LogicalOperators)) {
    const n = e[0].getDataType(), s = e[2].getDataType();
    return n === s ? n : n === d.NotParsed || s === d.NotParsed ? d.NotParsed : d.Unknown;
  } else
    return d.Invalid;
}, /**
 * Rule function. Checks if the property is unused
 * @param {BooleanExpression} exp 
 * @returns {Symptom[]}
 */
Ll = function(e) {
  const n = [];
  return (e.getParent() === void 0 || e.getParent().is(t.GroupStatement) && e.getParent().getParent() === void 0) && n.push(O.createStatementSymptom(I.UnusedValue, [e], 0, 0)), n;
}, /**
 * 
 * @param {ComparisonExpression} exp 
 * @returns {Symptom[]}
 */
vl = function(e) {
  const n = [], s = e.getChildren();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(O.createStatementSymptom(I.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : we,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : we
    }));
  return n;
}, /**
 * Helper function for #checkNaturalLanguage
 * @param {ExpressionNode} a The expression on the left of the logical operator
 * @param {ExpressionNode} b The expression on the right of the logical operator
 * @returns {boolean} True if either a or b is truthy rather than boolean
 */
bd = function(e, n) {
  const s = e.getDataType(), o = n.getDataType();
  return s !== d.Bool && s !== d.Unknown || o !== d.Bool && o !== d.Unknown;
}, /** 
 * Rule function. Checks if the expression compares something with no value and if so,
 * adds a new Symptom object.
 * @param {BooleanExpression} exp
 * @returns {Symptom[]}
 */
Rl = function(e) {
  const n = [], s = e.getChildren();
  if (s.length === 3) {
    const o = s[0].getDataType(), a = s[2].getDataType();
    (o !== d.Bool && o !== d.Unknown || a !== d.Bool && a !== d.Unknown) && n.push(O.createStatementSymptom(
      I.NaturalLanguageBoolean,
      s,
      0,
      2,
      {
        form: Qc,
        leftSideType: s[0].getDataType(),
        leftSideText: s[0].getTextValue(),
        leftSideEntity: s[0].getEntity(),
        operator: s[1].getTextValue(),
        rightSideType: s[2].getDataType(),
        rightSideText: s[2].getTextValue(),
        rightSideEntity: s[2].getEntity(),
        tempExpression: e
      }
    ));
  }
  return n;
}, b(_n, Ts);
let to = _n;
var yn, ce, ie, Me, El, Ul, Gl, so, Jl, $l;
class Oo extends ee {
  /**
   * Creates a new IteratorExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    super(e, n, t.IteratorExpression, c.MultipartValue, d.NA);
    b(this, Me);
    /** @type {Number} */
    b(this, yn);
    /** @type {ExpressionNode} */
    b(this, ce);
    /** @type {ExpressionNode[]} */
    b(this, ie, []);
    m(this, Me, Ul).call(this), m(this, Me, El).call(this), this.addRules([m(this, Me, $l), m(this, Me, Jl)]);
  }
  /**
   * @override
   */
  checkForSymptoms() {
    this.checkRules(this), u(this, ce).checkForSymptoms();
    for (const e of u(this, ie))
      e.checkForSymptoms();
  }
  /**
   * @override
   */
  checkForCounterRules(e) {
    super.checkForCounterRules(e), u(this, ce).checkForCounterRules(u(this, ce));
    for (const n of u(this, ie))
      n.checkForCounterRules(n);
  }
  //#region - overrides
  /**
   * @override
   */
  getVariableExpressions() {
    let e = u(this, ce).getVariableExpressions();
    for (let n of u(this, ie))
      e = e.concat(n.getVariableExpressions());
    return e;
  }
  /** @override */
  setDataType(e) {
    m(this, Me, so).call(this);
  }
  /**
   * @override
   */
  // setBlockId(id) {
  //     super.setBlockId(id); // NEED TO OVERRIDE BY TYPE...
  //     /*for (const exp of this.getChildren()) {
  //         exp.setBlockId(id);
  //     }*/
  //     //this.#iterable.setBlockId(id);
  // }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...u(this, ie).flatMap((n) => n.getAllNestedExpressions()), ...u(this, ce).getAllNestedExpressions()];
  }
  toJSON() {
    const e = super.toJSON();
    return e.loopVariables = u(this, ie).map((n) => n.toJSON()), e.iterable = u(this, ce).toJSON(), e;
  }
  getLoopVariables() {
    return u(this, ie);
  }
  getIterable() {
    return u(this, ce);
  }
  //#endregion - extensions
}
yn = new WeakMap(), ce = new WeakMap(), ie = new WeakMap(), Me = new WeakSet(), El = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    this.addConnection(e[n]), n < e.length - 1 && e[n].addConnection(e[n + 1]);
}, //#endregion - overrides
//#region - extensions
Ul = function() {
  const e = this.getChildren();
  y(this, yn, Zt(e, t.InKeyword)), y(this, ce, e[e.length - 1]), y(this, ie, u(this, yn) === 1 && e[0].is(t.TupleDefinition) ? e[0].getElements().filter((n) => n[0].is(t.VariableName)).map((n) => n[0]) : e.slice(0, u(this, yn)).filter((n) => n.is(t.VariableName)));
  for (let n of u(this, ie))
    n.setAssignedOrChanged();
  m(this, Me, Gl).call(this);
}, Gl = function() {
  if (u(this, ce).isOneOf([t.BuiltInFunctionCall, t.BuiltInMethodCall])) {
    const e = u(this, ce).is(t.BuiltInMethodCall) ? u(this, ce).getMethodEntity() : u(this, ce).getFunctionEntity();
    if (e === t.EnumerateFunction)
      if (u(this, ie).length === 1)
        u(this, ie)[0].setDataType(d.Tuple);
      else if (u(this, ie).length === 2) {
        u(this, ie)[0].setDataType(d.Int);
        const n = u(this, ce).getArguments(), s = n.length === 1 && n[0].length === 1 && n[0][0].getDataType() === d.String ? d.String : d.Unknown;
        u(this, ie)[1].setDataType(s);
      } else
        for (const n of u(this, ie))
          n.setDataType(d.Unknown);
    else if (e === t.RangeFunction && u(this, ie).length === 1)
      u(this, ie)[0].setDataType(d.Int);
    else if (en.get(e) === d.String && u(this, ie).length === 1)
      u(this, ie)[0].setDataType(d.String);
    else
      for (const n of u(this, ie))
        n.setDataType(d.Unknown);
  } else
    u(this, ce).addObserver(this), m(this, Me, so).call(this);
}, so = function() {
  const e = u(this, ce).getDataType() === d.String || u(this, ce).getDataType() === d.File ? d.String : d.Unknown;
  for (let n of u(this, ie))
    n.setDataType(e);
}, /**
 * Rule finder. Looks for cases of the target variable overwriting a variable used in the iterable
 * @param {IteratorExpression} exp 
 * @returns {Symptom[]}
 */
Jl = function(e) {
  const n = [], s = u(e, ce).getVariableExpressions();
  for (const o of u(e, ie))
    for (const a of s)
      if (o.getTextValue() === a.getTextValue()) {
        const h = o.getLastUsages(), p = a.getLastUsages().length > 0 && a.getLastUsages()[0].isParameter();
        n.push(O.createStatementSymptom(I.OverwrittenVariable, [o], 0, 0, {
          isParameter: p,
          functionBlock: p ? h[0].getBlockId() : "",
          prevUsageIsDefinition: !1,
          overwriteType: zc,
          overwriteValue: o.compareValues(o, [h[h.length - 1]]),
          usageText: e.getParent().getTextValue(),
          overwrittenVar: [{
            lineNumber: h[h.length - 1].getStartLineNumber(),
            blockId: h[h.length - 1].getBlockId(),
            docIndex: h[h.length - 1].getDocumentStartIndex(),
            forLoopDefinition: h[h.length - 1].getParent().is(t.IteratorExpression) && h[h.length - 1].getParent().getLoopVariables().filter((w) => w.getTextValue() === h[h.length - 1].getTextValue()).length > 0
          }]
        }));
      }
  return n;
}, /**
 * 
 * @param {IteratorExpression} exp 
 * @returns {Symptom[]}
 */
$l = function(e) {
  const n = [], s = e.getChildren();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(O.createStatementSymptom(I.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : we,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : we
    }));
  return n;
};
var xs, Ms;
class Id extends ee {
  /**
   * Creates a new BooleanExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    if (n.length < 4)
      throw new Error("A lambda expression must have a minimum of 4 children");
    const s = H.split(n.slice(1), t.Colon);
    if (s.length !== 2)
      throw new Error("Lambda expects at least one argument and a return value");
    const o = H.split(s[0], t.Comma);
    for (const h of o)
      for (const p of h)
        p.is(t.VariableName) && (p.setAssignedOrChanged(), p.setDataType(d.Unknown));
    const a = H.createTree(s[1]);
    if (a.length !== 1)
      throw new Error("Lambda can only have one return value");
    super(e, n, t.LambdaDefinitionStatement, c.BlockDefinitions, a[0].getDataType());
    /** @type {ExpressionNode[][]} */
    b(this, xs);
    /** @type {ExpressionNode} */
    b(this, Ms);
    y(this, xs, o), y(this, Ms, a[0]), a[0].addObserver(this);
  }
  /**
   * @override
   */
  getVariableExpressions() {
    let e = [];
    for (let n of this.getChildren())
      n.is(t.VariableName) ? e.push(n) : e = e.concat(n.getVariableExpressions());
    return e;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.arguments = u(this, xs).map((n) => n.map((s) => s.toJSON())), e.return = u(this, Ms).toJSON(), e;
  }
}
xs = new WeakMap(), Ms = new WeakMap();
var Ds, oo, Gn, Kl, Wl;
const es = class es extends ee {
  /**
   * Creates a new TernaryExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    var o;
    if (n.length !== 5)
      throw new Error("Ternary should contain 5 children");
    let s = m(o = es, Ds, oo).call(o, n);
    super(e, n, t.TernaryStatement, c.BlockDefinitionStatement, s);
    b(this, Gn);
    n[0].addObserver(this), n[4].addObserver(this), this.addRule(m(this, Gn, Kl)), this.addCounterRule(m(this, Gn, Wl));
  }
  /**
   * @override 
   */
  setDataType(e) {
    var s;
    const n = m(s = es, Ds, oo).call(s, this.getChildren());
    n !== this.getDataType() && super.setDataType(n);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
};
Ds = new WeakSet(), oo = function(e) {
  return e.length === 5 ? _t([e[0].getDataType(), e[4].getDataType()]) : d.Unknown;
}, Gn = new WeakSet(), /**
 * Rule function. Checks if the ternary returns bool literals
 * @param {TernaryExpression} ternary 
 * @returns {Symptom[]}
 */
Kl = function(e) {
  const n = [];
  if (e.getDataType() === d.Bool) {
    const s = e.getChildren();
    if (s[0].is(t.TrueType) && s[4].is(t.FalseType)) {
      let o = e.getParent();
      for (; o.is(t.GroupStatement); )
        o = o.getParent();
      const a = (h) => {
        switch (h) {
          case t.ReturnStatement.name:
            return "return";
          case t.AssignmentStatement.name:
            return "assignment";
          default:
            return "unknown";
        }
      };
      n.push(O.createStatementSymptom(
        I.TernaryReturnsBool,
        s,
        0,
        s.length - 1,
        {
          boolValue: s[2].getTextValue(),
          boolLiteralIfTrue: s[0].getTextValue(),
          boolLiteralIfFalse: s[4].getTextValue(),
          parentText: o ? o.getTextValue() : "",
          parentEntity: o ? a(o.getEntity().name) : ""
        }
      ));
    }
  }
  return n;
}, /**
 * Counter rule function. Checks if the ternary contains a valid equality expression
 * @param {TernaryExpression} ternary 
 * @returns 
 */
Wl = function(e) {
  const n = [], s = e.getExpressionsOfKind(t.ComparisonExpression);
  for (const o of s)
    o.getExpressionsOfKind(t.EqualOperator).length > 0 && n.push(O.createStatementSymptom(B.EqualityExpression, [o], 0, 0, {
      parentText: e.getTextValue(),
      tempExpression: o
    }));
  return n;
}, b(es, Ds);
let io = es;
var Jn, ql, jl;
const To = class To extends ee {
  /**
   * Creates a new ListComprehensionExpression 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    if (n.length < 3 || n.length > 5)
      throw new Error("List comprehension should contain 3-5 children");
    super(e, n, t.ListComprehension, c.BlockDefinitionStatement, d.List);
    b(this, Jn);
    const s = `${n[0].getStartLineNumber()}-listComprehension-${n[0].getDocumentStartIndex()}`;
    this.setBlockId(s), this.setScopeId(s), m(this, Jn, jl).call(this);
  }
  /**
   * @override
   * @inheritdoc
   */
  getVariableExpressions() {
    let e = [];
    const n = this.getChildren(), s = m(this, Jn, ql).call(this);
    if (s > -1) {
      e = e.concat(n[s].getVariableExpressions());
      for (let o = 0; o < n.length; o++)
        o !== s && (e = e.concat(n[o].getVariableExpressions()));
    }
    return e;
  }
  /**
   * Used for variable / block processing. Returns a copy of this expression and empties the
   * current values.
   * @returns {ListComprehensionExpression}
   */
  copyAndConvertToPlaceholder() {
    const e = new To(this.getTextValue(), this.getChildren());
    return this.setTextValue(""), this.setChildren([]), e;
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.nodes = this.getChildren().map((n) => n.toJSON()), e;
  }
};
Jn = new WeakSet(), ql = function() {
  const e = this.getChildren();
  for (let n = 0; n < e.length; n++)
    if (e[n].is(t.IteratorExpression))
      return n;
  return -1;
}, jl = function() {
  const e = this.getChildren();
  if (e.length > 0 && e[0].is(t.ListComprehension) && e[2].is(t.IteratorExpression)) {
    const n = e[0].getChildren();
    if (n.length >= 3 && n[2].is(t.IteratorExpression)) {
      const s = e[2].getIterable(), o = n[2].getLoopVariables();
      for (const a of o)
        a.getTextValue() === s.getTextValue() && (a.addObserver(s), s.setDataType(a.getDataType()), s.setAssignedOrChanged());
    }
  }
};
let ro = To;
var Oe, Hl, zl, Ql, Xl, Zl, Yl, _l;
class yd extends ee {
  /**
   * Creates a new ReturnStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   * @throws Throws an error if the list of children does not contain multiple elements
   */
  constructor(e, n) {
    if (n.length === 0 || !n[0].is(t.ReturnKeyword))
      throw new Error("Not a valid return statement");
    let s = d.None;
    if (n.length === 2)
      s = n[1].getDataType();
    else if (n.length > 2)
      if (ts(n, t.Comma)) {
        s = d.Tuple;
        const o = n.slice(1), a = H.split(o, t.Comma), h = new mi(ge(o), o, t.TupleDefinition, a);
        n = [n[0], h];
      } else
        s = d.Invalid;
    super(e, n, t.ReturnStatement, c.MultipartValue, s);
    b(this, Oe);
    n.length === 2 && (n[1].addObserver(this), this.addConnection(n[1])), this.addRules([
      m(this, Oe, _l),
      m(this, Oe, Yl),
      m(this, Oe, zl),
      m(this, Oe, Zl)
    ]), this.addCounterRules([m(this, Oe, Hl), m(this, Oe, Ql)]);
  }
  getReturnedValue() {
    return this.getChildren().slice(1);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...this.getChildren().flatMap((n) => n.getAllNestedExpressions()).slice(1)];
  }
  toJSON() {
    const e = super.toJSON();
    return e.returnedValue = this.getReturnedValue().map((n) => n.toJSON()), e;
  }
}
Oe = new WeakSet(), /**
 * Counter rule function.
 * @param {ReturnStatement} returnExpression 
 * @returns {Symptom[]}
 */
Hl = function(e) {
  const n = [];
  let s = e.getReturnedValue()[0];
  return s.is(t.GroupStatement) && (s = s.getContents()[0]), s.getDataType() === d.Bool && !s.isOneOf([t.TrueType, t.FalseType, t.TernaryStatement]) && n.push(O.createStatementSymptom(B.NonLiteralBooleanReturned, e.getChildren(), 0, e.getChildren().length - 1, {
    expression: s.getTextValue()
  })), n;
}, /** 
 * Rule function. Checks if the returned value is in unnecessary parentheses and if so,
 * adds a new Symptom object.
 * @param {ReturnStatement} returnExpression
 * @returns {Symptom[]}
 */
zl = function(e) {
  var o;
  const n = [], s = e.getChildren();
  return s.length === 2 && s[1].is(t.GroupStatement) && n.push(O.createStatementSymptom(
    I.ReturnInParentheses,
    s,
    0,
    1,
    {
      contents: m(o = e, Oe, Xl).call(o, s[1]),
      textInParentheses: s[1].getTextValue().substring(1, s[1].getTextValue().length - 1)
    }
  )), n;
}, /** 
 * Count rule function. Checks if the returned value is not in unnecessary parentheses.
 * @param {ReturnStatement} returnExpression
 * @returns {Symptom[]}
 */
Ql = function(e) {
  const n = [], s = e.getChildren();
  return s.length === 2 && !s[1].is(t.GroupStatement) && n.push(O.createStatementSymptom(
    B.ReturnNoParentheses,
    s,
    0,
    1,
    {
      returnValue: s[1].getTextValue()
    }
  )), n;
}, /**
 * Gets the "summary" of the expressions inside parentheses e.g. a literal, a compound expression
 * @param {GroupElement} group The returned values
 * @returns {string} A string summarising the group contents
 */
Xl = function(e) {
  const n = e.getContents();
  if (n.length === 1) {
    if (n[0].isOneOf([c.Literals, c.Types]))
      return jc;
    if (n[0].isOneOf([t.VariableName, t.SubscriptedExpression]))
      return Hc;
    if (n[0].isOneOf([c.FunctionCall, c.MethodCall]))
      return Ro;
    if (n[0].is(c.CompoundTypes))
      return Eo;
  }
  return Uo;
}, /**
 * 
 * @param {ReturnStatement} exp 
 * @returns {Symptom[]}
 */
Zl = function(e) {
  const n = [], s = e.getChildren();
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(O.createStatementSymptom(I.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? s[o - 1].getTextValue() : we,
      after: o < s.length - 1 ? s[o + 1].getTextValue() : we
    }));
  return n;
}, /** 
 * Rule function. Checks if the statement Returns something with no value and if so,
 * adds a new Symptom object.
 * @param {ReturnStatement} returnExpression
 * @returns {Symptom[]}
 */
Yl = function(e) {
  const n = [], a = e.getChildren().flatMap((h) => h.is(t.GroupStatement) ? h.getContents() : h).filter((h) => tn(h) || h.getDataType() === d.None && !h.isOneOf([t.NoneType, t.VariableName]));
  return a.length > 0 && n.push(...a.map((h) => O.createStatementSymptom(
    I.AssignedNone,
    [h],
    0,
    0,
    {
      expression: h,
      usage: So
    }
  ))), n;
}, /** 
 * Rule function. Checks if the statement contains the AssignmentInReturn symptom and if so,
 * adds a new Symptom object.
 * @param {ReturnStatement} returnExpression
 * @returns {Symptom[]}
 */
_l = function(e) {
  const n = e.getChildren(), s = [];
  for (let o = 1; o < n.length; o++)
    if (n[o].is(t.AssignmentStatement)) {
      const a = n[o].getTargetVariables().map((h) => h.getTextValue());
      s.push(O.createStatementSymptom(
        I.AssignmentInReturn,
        n,
        o,
        o,
        {
          assignedVariables: a
        }
      ));
    }
  return s;
};
var di, Fn;
class Fd extends ee {
  /**
   * Creates a new ImportStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   */
  constructor(e, n) {
    super(e, n, t.ImportStatement, c.KeywordStatement, d.NA);
    /** @type {ModuleExpression} */
    b(this, di);
    /** @type {ExpressionNode[]} */
    b(this, Fn, []);
    if (n.length > 1 && (y(this, di, n[1]), n[0].is(t.FromKeyword)))
      for (let s = 3; s < n.length; s++)
        n[s].is(t.Comma) || u(this, Fn).push(n[s]);
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...u(this, Fn).flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.importedEntities = u(this, Fn).map((n) => n.toJSON()), e;
  }
}
di = new WeakMap(), Fn = new WeakMap();
var Nn;
class Nd extends ee {
  /**
   * Creates a new KeywordStatement 
   * @param {String} textValue The text of the node
   * @param {ExpressionNode[]} children The child ExpressionNodes
   */
  constructor(e, n) {
    if (n.length === 0)
      throw new Error("Not enough elements to make a statement");
    let s = t.Unknown;
    if (n[0].is(t.AssertKeyword))
      s = t.AssertStatement;
    else if (n[0].is(t.GlobalKeyword))
      s = t.GlobalStatement;
    else if (n[0].is(t.RaiseKeyword))
      s = t.ThrowStatement;
    else throw new Error("Unknown keyword");
    super(e, n, s, c.KeywordStatement, d.NA);
    b(this, Nn, []);
    y(this, Nn, n.slice(1));
  }
  /**
   * @inheritdoc
   */
  getAllNestedExpressions() {
    return [...super.getAllNestedExpressions(), ...u(this, Nn).flatMap((n) => n.getAllNestedExpressions())];
  }
  toJSON() {
    const e = super.toJSON();
    return e.keyword = this.getChildren()[0].toJSON(), e.values = u(this, Nn).map((n) => n.toJSON()), e;
  }
}
Nn = new WeakMap();
var jt, Ie, As, Bs, Ue, De, ao, ec, tc, nc, sc, ic, Tt, oc, rc, ac;
const kt = class kt extends pi {
  // The expressions summarised in tree form, with multipart expressions where needed e.g. function calls
  /**
   * Creates a new Statement. 
   * @param {String} rawText The raw text of the statement. 
   * @param {Number} firstLineNumber The document line number that the statement begins on.
   * @param {Indent} indent The indent object representing the number of spaces.
   * @param {ExpressionNode[]} expressions. Optional. The expression nodes that make up the statment.
   * @param {boolean} isComplete Optional. The statement is complete or not (in the case of continuation lines)
   * @param {boolean} isInClassDefinition Optional. This statement is at the top level of a class definition
   */
  constructor(e, n, s, o = [], a = !0, h = !1) {
    super();
    b(this, De);
    /** @type {String} */
    b(this, jt);
    // The raw text of the statement
    /** @type {Set<Number} */
    l(this, "lineNumbers", /* @__PURE__ */ new Set());
    // The document line number(s) of the statement
    /** @type {ExpressionNode[]} */
    b(this, Ie);
    // The most basic expressions found on the line, ignoring comments
    /** @type {Number} */
    b(this, As);
    /** @type {Indent} */
    b(this, Bs);
    /** @type {ExpressionNode[]} */
    b(this, Ue);
    y(this, jt, e), this.lineNumbers.add(n), y(this, Bs, s), y(this, As, s.getSpaceCount() + s.getTabCount()), o.length > 0 && (o[o.length - 1].is(t.ContinuationLine) && o.pop(), o.length > 0 && o[0].isOneOf([t.IfDefinition, t.ElifDefinition, t.WhileDefinition]) && (this.addRule(m(this, De, sc)), this.addCounterRule(m(this, De, ic)))), y(this, Ie, o), this.addRule(m(this, De, tc)), a && m(this, De, ao).call(this, h);
  }
  /**
   * Gets the raw text of the statement
   * @returns {String}
   */
  getRawText() {
    return u(this, jt);
  }
  /**
   * Sets the raw text of the statement.
   * @param {String} text The updated text.
   */
  updateRawText(e) {
    y(this, jt, e);
  }
  /**
   * Gets the document line numbers that the statement occurs on.
   * @returns {Set<Number>} The document line numbers.
   */
  getLineNumbers() {
    return this.lineNumbers;
  }
  /**
   * Gets the line number of the first line in the statement.
   * @returns {Number} The line number or -1 if there are no line numbers
   */
  getFirstLineNumber() {
    return this.lineNumbers.size > 0 ? Math.min(...Array.from(this.lineNumbers)) : -1;
  }
  /**
   * Gets the line number of the last line in the statement.
   * @returns {Number} The line number or -1 if there are no line numbers
   */
  getLastLineNumber() {
    return this.lineNumbers.size > 0 ? Math.max(...Array.from(this.lineNumbers)) : -1;
  }
  /**
   * Adds a line number that the statement occurs on.
   * @param {Number} lineNum The line number to add
   */
  addLineNumber(e) {
    this.lineNumbers.add(e);
  }
  /**
   * Gets the number of spaces at the start of the statement.
   * @returns {Number}
   */
  getIndentation() {
    return u(this, As);
  }
  /**
   * Gets the indent object describing the indentation
   * @returns {Indent}
   */
  getIndent() {
    return u(this, Bs);
  }
  /**
   * Gets the parsed expressions in the statement (the AST version)
   * @returns {ExpressionNode[]}
   */
  getExpressions() {
    return u(this, Ue) === void 0 ? u(this, Ie) : u(this, Ue);
  }
  /**
   * Gets the raw expressions - the most low level expressions
   * @returns {ExpressionNode[]}
   */
  getRawExpressions() {
    return u(this, Ie);
  }
  /**
   * Checks if this statement contains the given expression
   * @param {ExpressionNode} expression 
   * @returns 
   */
  containsExpression(e) {
    for (let n of this.getExpressions())
      if (n.contains(e))
        return !0;
    return !1;
  }
  /**
   * Get all variable expressions in the statement
   * @returns {Map<String, VariableExpression>}
   */
  getVariableUsages() {
    const e = /* @__PURE__ */ new Map();
    for (let n of u(this, Ue)) {
      const s = n.getVariableExpressions();
      for (let o of s)
        e.has(o.getTextValue()) || e.set(o.getTextValue(), []), e.get(o.getTextValue()).push(o);
    }
    return e;
  }
  /**
   * Checks if this statement is blank
   * @returns {Boolean} True if the statement has no expressions, false otherwise
   */
  isBlank() {
    return u(this, Ue).length === 0;
  }
  /**
   * Gets the first expression in the statement
   * @returns {ExpressionNode}
   * @throws Throws an error if the statement is blank
   */
  getFirstExpression() {
    if (this.isBlank())
      throw new Error("Statement is blank. Could not get first expression.");
    return u(this, Ue)[0];
  }
  /**
   * Whether or not this is a block statement e.g. a for loop or an if branch
   * @returns {Boolean}
   */
  isBlockStatement() {
    return !1;
  }
  /**
   * Checks if this statement is the definition line of a block
   * @returns {Boolean}
   */
  isDefinitionOfBlock() {
    return u(this, Ue).length === 0 ? !1 : u(this, Ue)[0].is(c.BlockDefinitionStatement);
  }
  /**
   * Creates a new Statement from a SourceProcessor object
   * @param {SourceProcessor} processedSource A processed line of source code
   * @param {boolean} isInClassDefinition If true, the statement could be a class attribute definition, so should not check for unexpected colon in case of type hinting
   * @returns {Statement} A new Statement object
   */
  static createFromSource(e, n = !1) {
    return new kt(e.getText(), e.getLineNumber(), e.getIndent(), e.getExpressions(), !e.continuesOnNextLine(), n);
  }
  /**
   * Adds another source line to the statement
   * @param {SourceProcessor} processedSource A processed line of source code that continues on from the existing statement
   */
  continueFromSource(e) {
    this.addLineNumber(e.getLineNumber()), m(this, De, ec).call(this, e.getExpressions()), this.updateRawText(u(this, jt) + `
` + e.getText()), e.continuesOnNextLine() || m(this, De, ao).call(this);
  }
  toJSON() {
    return {
      expressions: u(this, Ue).map((e) => e.toJSON())
    };
  }
};
jt = new WeakMap(), Ie = new WeakMap(), As = new WeakMap(), Bs = new WeakMap(), Ue = new WeakMap(), De = new WeakSet(), ao = function(e = !1) {
  y(this, Ue, H.createTree(u(this, Ie))), e || this.addRules([m(this, De, nc)]), this.checkRules(this), this.checkForCounterRules(this);
}, /**
 * Helper method called when adding a continuation line. Addresses the edge case that the
 * parentheses in function call are on a separate line from the function name.
 * @param {ExpressionNode[]} continuingExpressions 
 */
ec = function(e) {
  if (e.length > 0 && e[0].is(t.OpenParenthesis) && u(this, Ie).length > 0 && u(this, Ie)[u(this, Ie).length - 1].is(t.VariableName)) {
    const n = u(this, Ie).length - 1, s = u(this, Ie)[n];
    let o = Ze(u(this, Ie)[u(this, Ie).length - 1]);
    o.category !== c.BuiltInFunctions && (o = new Q(t.FunctionName, c.Identifiers)), u(this, Ie)[n] = sn(s.getTextValue(), o, s.getStartLineNumber(), s.getDocumentStartIndex(), s.getDocumentEndIndex(), s.getEndLineNumber());
  }
  y(this, Ie, u(this, Ie).concat(e));
}, /**
 * Rule checker. Checks symptoms in the raw expressions
 */
tc = function(e) {
  var o, a, h;
  const n = e.getRawExpressions(), s = [];
  for (let p = 0; p < n.length; p++)
    m(o = kt, Tt, oc).call(o, n, p) && s.push(O.createStatementSymptom(I.NaturalLanguageBoolean, n, p, p + 1, {
      form: Xc
    })), m(a = kt, Tt, ac).call(a, n, p) && s.push(O.createStatementSymptom(I.OutOfPlaceBooleanOperator, n, p, p)), m(h = kt, Tt, rc).call(h, n, p) && s.push(O.createStatementSymptom(I.DoubleComparisonOperators, n, p, p + 1));
  return s;
}, /**
 * 
 * @param {Statement} statement 
 * @returns 
 */
nc = function(e) {
  const n = [], s = u(e, Ue);
  for (let o = 0; o < s.length; o++)
    s[o].is(t.Colon) && n.push(O.createStatementSymptom(I.UnexpectedColon, s, 0, s.length - 1, {
      before: o > 0 ? {
        type: s[o - 1].getEntity().name,
        value: s[o - 1].getTextValue()
      } : { type: we },
      after: o < s.length - 1 ? {
        type: s[o + 1].getEntity().name,
        value: s[o + 1].getTextValue()
      } : { type: we }
    }));
  return n;
}, /**
 * Rule checker. Checks if the statement contains the AssignedInBoolean symptom and if so,
 * adds a new Symptom object.
 * @param {Statement} statement
 */
sc = function(e) {
  const n = e.getFirstExpression().getExpressionsOfKind(t.AssignmentStatement), s = [];
  for (const o of n)
    o.getExpressionsOfKind(t.WalrusOperator).length === 0 && s.push(O.createStatementSymptom(I.AssignmentInBoolean, [o], 0, 0, {
      parentText: e.getRawText()
    }));
  return s;
}, ic = function(e) {
  const n = e.getFirstExpression().getExpressionsOfKind(t.ComparisonExpression), s = [];
  for (const o of n)
    o.getExpressionsOfKind(t.EqualOperator).length > 0 && s.push(O.createStatementSymptom(B.EqualityExpression, [o], 0, 0, {
      parentText: e.getRawText(),
      tempExpression: o
    }));
  return s;
}, Tt = new WeakSet(), oc = function(e, n) {
  return e[n].is(t.AndOperator) && n < e.length - 1 && e[n + 1].is(t.OrOperator);
}, rc = function(e, n) {
  return n < e.length - 1 && e[n].isOneOf([t.AssignmentOperator, c.ComparisonOperators]) && e[n + 1].isOneOf([t.AssignmentOperator, c.ComparisonOperators]);
}, ac = function(e, n) {
  return e[n].is(c.LogicalOperators) ? !!(!e[n].is(t.NotOperator) && (n === 0 || e[n - 1].isOneOf([c.LogicalOperators, c.MathsOperators, c.ComparisonOperators, c.BlockDefinitions])) || !e[n].is(t.NotOperator) && n < e.length - 1 && e[n + 1].isOneOf([c.LogicalOperators, c.MathsOperators, c.ComparisonOperators, c.BlockDefinitions]) && !e[n + 1].is(t.NotOperator)) : !1;
}, b(kt, Tt);
let Yt = kt;
var Z, ks, Ps, Ce, lo, lc, Od, cc, co, uc, dc;
class Cd extends Yt {
  /**
   * Creates a new BlockStatement e.g an if branch or a for loop 
   * @param {Statement} definitionStatement The raw text of the statement. 
   * @param {String} scopeId The id of the scope block
   */
  constructor(e, n) {
    super(e.getRawText(), e.getFirstLineNumber(), e.getIndent());
    b(this, Ce);
    /** @type {Statement[]} */
    b(this, Z, []);
    b(this, ks, !1);
    b(this, Ps, !1);
    for (const s of e.getExpressions())
      s.setBlockId(`${e.getFirstLineNumber()}-${e.getRawExpressions()[0].getTextValue()}`), s.setScopeId(n);
    u(this, Z).push(e);
    for (const s of e.getLineNumbers())
      this.addLineNumber(s);
    this.addRules([m(this, Ce, lo)]), this.addCounterRules([m(this, Ce, co)]);
  }
  //#region - overrides
  /**
   * Additional rule check for just blocks
   */
  checkBlockRules(e) {
    if (!u(this, ks)) {
      for (const n of this.getRules())
        O.symptoms.push(...n(e));
      y(this, ks, !0);
    }
  }
  /**
   * Additional counter rules check for just blocks
   */
  checkBlockCounterRules(e) {
    if (!u(this, Ps)) {
      for (const n of this.getCounterRules())
        O.counterSymptoms.push(...n(e));
      y(this, Ps, !0);
    }
  }
  /**
   * @override
   */
  getExpressions() {
    let e = [];
    for (let n of u(this, Z))
      e = e.concat(n.getExpressions());
    return e;
  }
  /**
   * Get all variable expressions in the statement
   * @returns {Map<String, VariableExpression>}
   * @override
   */
  getVariableUsages() {
    const e = /* @__PURE__ */ new Map();
    for (let n of u(this, Z)) {
      const s = n.getVariableUsages();
      for (const [o, a] of s)
        if (!e.has(o))
          e.set(o, a);
        else {
          const h = e.get(o).concat(a);
          e.set(o, h);
        }
    }
    return e;
  }
  /**
   * Checks if this statement is blank
   * @returns {Boolean} True if the statement has no expressions, false otherwise
   * @override
   */
  isBlank() {
    return !1;
  }
  /**
   * Gets the first expression in the statement
   * @returns {ExpressionNode}
   * @throws Throws an error if the statement is blank
   * @override
   */
  getFirstExpression() {
    if (this.isBlank())
      throw new Error("Statement is blank. Could not get first expression.");
    return u(this, Z)[0].getFirstExpression();
  }
  /**
   * Whether or not this is a block statement e.g. a for loop or an if branch
   * @returns {Boolean}
   */
  isBlockStatement() {
    return !0;
  }
  /**
   * Gets the document line numbers that the statement occurs on.
   * @returns {Set<Number>} The document line numbers.
   */
  getLineNumbers() {
    const e = /* @__PURE__ */ new Set();
    for (let n of u(this, Z))
      for (let s = n.getFirstLineNumber(); s <= n.getLastLineNumber(); s++)
        e.add(s);
    return e;
  }
  /**
   * Gets the line number of the first line in the statement.
   * @returns {Number} The line number or -1 if there are no line numbers
   */
  getFirstLineNumber() {
    return u(this, Z).length === 0 ? -1 : u(this, Z)[0].getFirstLineNumber();
  }
  /**
   * Gets the line number of the last line in the statement.
   * @returns {Number} The line number or -1 if there are no line numbers
   */
  getLastLineNumber() {
    return u(this, Z).length === 0 ? -1 : u(this, Z)[u(this, Z).length - 1].getLastLineNumber();
  }
  //#endregion - overrides
  //#region - extensions
  /**
   * Gets all the statements in this block
   * @returns {Statement[]}
   */
  getStatements() {
    return u(this, Z);
  }
  /**
   * Gets the definition statement of this block
   * @returns {Statement}
   */
  getDefinitionStatement() {
    let e = u(this, Z)[0];
    for (; e.isBlockStatement(); )
      e = e.getDefinitionStatment();
    return e;
  }
  /**
   * Adds a statement to the block
   * @param {Statement} statement
   * @param {ScopeBlock} block 
   */
  addStatement(e, n) {
    const s = u(this, Z).length > 0 && u(this, Z)[u(this, Z).length - 1].getExpressions().length > 0 ? u(this, Z)[u(this, Z).length - 1].getFirstExpression().getBlockId() : "unknown";
    u(this, Z).push(e);
    for (const h of e.getExpressions())
      h.setBlockId(s), h.setScopeId(n.getScope().getId());
    const o = ge(this.getExpressions());
    this.updateRawText(o);
    for (let h of e.getLineNumbers())
      this.addLineNumber(h);
    H.connectVariableUsages(e, n);
    const a = n.getBlockEntity() === t.DocumentDefinition ? n : n.getParentBlock().getScope();
    H.connectUserDefinedFunctions(e, a), H.connectUserDefinedMethods(e, a), H.makeGraphConnections(u(this, Z));
  }
  /**
   * Gets the BlockStatement that a new statement should be added to, if any
   * @param {Number} newStatementIndent 
   * @returns {BlockStatement | undefined}
   */
  getBlockStatementForIndent(e) {
    if (u(this, Z).length === 0 || e <= this.getIndentation())
      return;
    const n = u(this, Z)[u(this, Z).length - 1];
    if (!n.isBlockStatement())
      return this;
    const s = n.getBlockStatementForIndent(e);
    return s === void 0 ? this : s;
  }
  getLastBlockStatement() {
    if (u(this, Z).length === 0)
      return;
    const e = u(this, Z)[u(this, Z).length - 1];
    if (!e.isBlockStatement())
      return this;
    const n = e.getLastBlockStatement();
    return n === void 0 ? this : n;
  }
  // #checkComparesLiteral(comparison) {
  //     const symptoms = [];
  //     const children = comparison.getChildren();
  //     if (children.length === 3 
  //         && children[0].getDataType() === DataType.Bool
  //         && children[1].isOneOf([ExpressionEntity.EqualOperator, ExpressionEntity.IsKeyword])
  //         && children[2].isOneOf([ExpressionEntity.TrueType, ExpressionEntity.FalseType])) {
  //             symptoms.push(SymptomFinder.createStatementSymptom(SymptomType.CompareBoolLiteral,
  //                                                                 children, 0, children.length - 1,
  //                                                                 {
  //                                                                     boolValue: children[0].getTextValue(),
  //                                                                     operator: children[1].getTextValue(),
  //                                                                     boolLiteral: children[2].getTextValue(),
  //                                                                     usedIn: comparison.getContextOfUse()
  //                                                                 }));   
  //     }
  //     return symptoms;
  // }
  //#endregion - counter symptoms
  toJSON() {
    return {
      definition: this.getDefinitionStatement().toJSON(),
      statements: u(this, Z).slice(1).map((e) => e.toJSON())
    };
  }
}
Z = new WeakMap(), ks = new WeakMap(), Ps = new WeakMap(), Ce = new WeakSet(), //#endregion - extensions
//#region - symptoms
lo = function(e) {
  var a, h, p;
  const n = [], s = e.getDefinitionStatement();
  try {
    s.getFirstExpression().is(t.ForDefinitionStatement) ? n.push(...m(a = e, Ce, cc).call(a, e, s)) : s.getFirstExpression().is(t.ExceptDefinitionStatement) && n.push(...m(h = e, Ce, lc).call(h, e, s));
  } catch {
  }
  const o = e.getStatements().filter((w) => w.isBlockStatement());
  for (const w of o)
    n.push(...m(p = w, Ce, lo).call(p, w));
  return n;
}, /**
 * Rule function. If the block is an except statement, checks if the same exception is thrown in the block
 * @param {BlockStatement} statement 
 * @param {Statement} definition
 * @returns {Symptom[]}
 */
lc = function(e, n) {
  const s = [];
  if (n.getFirstExpression().getChildren().length === 3 && n.getFirstExpression().getChildren()[1].is(t.ExceptionName)) {
    const o = n.getFirstExpression().getChildren()[1], a = e.getStatements().slice(1);
    for (const h of a) {
      const p = h.getFirstExpression();
      if (p.is(t.ThrowStatement)) {
        const w = p.getExpressionsOfKind(t.ExceptionName);
        for (const S of w)
          S.getTextValue() === o.getTextValue() && s.push(O.createStatementSymptom(I.RedundantException, [p], 0, 0));
      }
    }
  }
  return s;
}, /**
 * Rule function. If the block is a while loop, checks if it is infinite
 * @param {BlockStatement} statement 
 * @param {Statement} definition
 * @returns {Symptom[]}
 */
Od = function(e, n) {
  const s = [], o = n.getFirstExpression(), a = o.getVariableExpressions();
  for (const h of e.getStatements()) {
    const p = h.getExpressions();
    for (const w of p) {
      if (Pt(w))
        return s;
      const S = w.getVariableExpressions().filter((N) => N.isAssignedOrChanged()), F = new Set(S.map((N) => N.getTextValue()));
      for (const N of a)
        if (F.has(N.getTextValue()))
          return s;
    }
  }
  return s.push(O.createStatementSymptom(I.InfiniteLoop, [o], 0, 0)), s;
}, /**
 * Rule function. If the block is a for loop, checks if an iterator variable is modified then not used
 * @param {BlockStatement} statement 
 * @param {Statement} definition
 * @returns {Symptom[]}
 */
cc = function(e, n) {
  const s = [], o = n.getFirstExpression().getCondition()[0];
  if (o !== void 0 && o.is(t.IteratorExpression)) {
    const a = o.getLoopVariables(), h = e.getVariableUsages();
    for (const p of a)
      if (h.has(p.getTextValue())) {
        const w = h.get(p.getTextValue()).filter((S) => S.getStartLineNumber() !== n.getFirstLineNumber());
        for (let S = 0; S < w.length; S++) {
          const F = w[S].getParent();
          if (F.is(t.IteratorExpression) && F.getLoopVariables().filter((N) => N === w[S]).length > 0)
            break;
          if (w[S].isAssignedOrChanged() && !(w.slice(S + 1).filter((L) => !L.isAssignedOrChanged()).length > 0)) {
            const L = n.getFirstExpression().getTextValue(), U = p.getDataType().name;
            s.push(O.createStatementSymptom(I.ForLoopIteratorModified, [w[S]], 0, 0, {
              // Add the for loop definition text
              definitionText: L.trim(),
              loopVarTypeAtDefinition: U,
              modificationText: w[S].getParent().getTextValue()
            }));
            break;
          }
        }
      }
  }
  return s;
}, //#endregion - symptoms
//#region - counter symptoms
co = function(e) {
  var a, h, p;
  const n = [], s = e.getDefinitionStatement();
  try {
    s.getFirstExpression().isOneOf([t.IfDefinitionStatement, t.ElifDefinitionStatement, t.WhileDefinitionStatement]) && n.push(...m(a = e, Ce, uc).call(a, e, s));
  } catch {
  }
  try {
    s.getFirstExpression().is(t.ForDefinitionStatement) && n.push(...m(h = e, Ce, dc).call(h, e, s));
  } catch {
  }
  const o = e.getStatements().filter((w) => w.isBlockStatement());
  for (const w of o)
    n.push(...m(p = w, Ce, co).call(p, w));
  return n;
}, uc = function(e, n) {
  const s = [], o = n.getFirstExpression().getCondition()[0];
  if (o.is(t.VariableName) && o.getDataType() === d.Bool)
    s.push(O.createStatementSymptom(
      B.StandaloneBooleanVariable,
      [o],
      0,
      0,
      {
        boolValue: o.getTextValue(),
        usedIn: o.getContextOfUse()
      }
    ));
  else if (o.is(t.BooleanExpression)) {
    const a = o.getChildren();
    a.length === 2 && a[0].is(t.NotOperator) && a[1].is(t.VariableName) && a[1].getDataType() === d.Bool && s.push(O.createStatementSymptom(
      B.StandaloneBooleanVariable,
      a,
      0,
      a.length - 1,
      {
        boolValue: a[1].getTextValue(),
        usedIn: o.getContextOfUse()
      }
    ));
  }
  return s;
}, /**
 * Counter rule function. If the block is a for loop, checks if an iterator variable is used and not modified
 * @param {BlockStatement} statement 
 * @param {Statement} definition
 * @returns {Symptom[]}
 */
dc = function(e, n) {
  const s = [], o = n.getFirstExpression().getCondition()[0];
  if (o !== void 0 && o.is(t.IteratorExpression)) {
    const a = o.getLoopVariables(), h = e.getVariableUsages();
    let p = 0;
    for (const w of a) {
      let S = 0;
      if (h.has(w.getTextValue())) {
        const F = h.get(w.getTextValue()).filter((N) => N.getStartLineNumber() !== n.getFirstLineNumber());
        for (let N = 0; N < F.length; N++) {
          const L = F[N].getParent();
          if (L.is(t.IteratorExpression) && L.getLoopVariables().filter((U) => U === F[N]).length > 0)
            break;
          if (F[N].isAssignedOrChanged()) {
            S = 0;
            break;
          } else
            S++;
        }
      }
      p += S > 0 ? 1 : 0;
    }
    p === a.length && s.push(O.createStatementSymptom(B.ForLoopTargetNotModified, [o], 0, 0, {
      loopVars: a.map((w) => w.getTextValue())
    }));
  }
  return s;
};
const Td = (g, i, e) => {
  let n = /* @__PURE__ */ new Map();
  for (let [s, o] of Ih) {
    const a = o(g, i, e);
    a.length > 0 && n.set(s, Ys.create(s, a));
  }
  return n;
}, xd = (g, i, e) => {
  let n = /* @__PURE__ */ new Map();
  for (let [s, o] of yh) {
    const a = o(g, i, e);
    a.length > 0 && n.set(s, Ys.create(s, a));
  }
  return n;
}, Md = (g) => g.filter((e) => e.getID() === I.AssignmentInBoolean.name).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "A single equals operator is used in a boolean expression where a double equals operator might be expected."
))), Dd = (g) => {
  const i = g.filter((n) => n.getID() === I.UnexpectedColon.name && n.getAdditionalInfo().after.type !== we && n.getAdditionalInfo().before.type === t.VariableName.name);
  let e = [];
  for (let n of i) {
    const s = new k(
      [n],
      "The unexpected colon is preceded by a variable name and followed by a value. The intention may be to assign the value to the named variable."
    );
    e.push(new V(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, Ad = (g) => {
  const i = g.filter((o) => o.getID() === I.NaturalLanguageBoolean.name && o.getAdditionalInfo().operator === "or"), e = /* @__PURE__ */ new Map(), n = [];
  for (const o of i) {
    let a, h = o.getAdditionalInfo().tempExpression.is(t.BooleanExpression) ? o.getAdditionalInfo().tempExpression : void 0;
    try {
      for (a = o.getAdditionalInfo().tempExpression.getParent(); a.is(t.BooleanExpression); )
        h = a, a = a.getParent();
    } catch {
      a = void 0;
    }
    if (a)
      try {
        a.getFirstExpressionOf(t.ComparisonExpression) && o.getAdditionalInfo().operator === "or" ? (e.has(a) || e.set(a, []), e.get(a).push(o), o.getAdditionalInfo().parentText = a.getTextValue(), o.getAdditionalInfo().parentEntity = a.getEntity(), h && (o.getAdditionalInfo().completeBooleanExpression = h.getTextValue())) : n.push(o);
      } catch {
        n.push(o);
      }
    else
      n.push(o);
  }
  let s = [];
  for (const o of e.values()) {
    o.sort((h, p) => h.getDocIndex() - p.getDocIndex());
    const a = new k(
      o,
      "One or more non-boolean value is used where a boolean expression is expected."
    );
    s.push(new V(o[0].getLineNumber(), o[0].getDocIndex(), a));
  }
  return s;
}, Bd = (g) => {
  const i = g.filter((n) => n.getID() === I.CompareBoolLiteral.name);
  let e = [];
  for (let n of i) {
    const s = n.toJSON();
    if (s.boolLiteral === Kc) {
      const o = new k(
        [n],
        `${s.boolValue} is a boolean value so ${s.operator} ${s.boolLiteral} is redundant.`
      );
      e.push(new V(n.getLineNumber(), n.getDocIndex(), o));
    } else {
      const o = new k(
        [n],
        `${s.boolValue} is a boolean value so the expression can be rewritten as not ${s.boolValue}.`
      );
      e.push(new V(n.getLineNumber(), n.getDocIndex(), o));
    }
  }
  return e;
}, kd = (g) => {
  const i = g.filter((n) => n.getID() === I.UnreachableExit.name && n.getAdditionalInfo().exitKeyword === So);
  g.filter((n) => n.getID() === I.LoopReturn.name && n.getAdditionalInfo().loopType === "for" && n.getAdditionalInfo().exitType === "return");
  let e = [];
  for (let n of i) {
    const s = new k(
      [n],
      "Code follows a return statement in the same branch."
    );
    e.push(new V(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, Pd = (g) => {
  const i = g.filter((n) => n.getID() === I.OverwrittenVariable.name && n.getAdditionalInfo().overwriteType === bo && n.getAdditionalInfo().overwriteValue !== yo && !(n.getAdditionalInfo().prevUsageIsDefinition && n.getAdditionalInfo().overwrittenVar[n.getAdditionalInfo().overwrittenVar.length - 1].forLoopDefinition));
  let e = [];
  for (let n of i) {
    const s = new k(
      [n],
      `The iterating variable ${n.getAffectedText()} is initialised before the loop. ${n.getAdditionalInfo().overwriteValue === Go ? "The overwritten value is different from the value initialised by the loop" : "It could not be determined if the overwritten value is the same as the value initialised by the loop"}.`
    );
    e.push(new V(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, Vd = (g, i) => {
  const e = g.filter((h) => h.getID() === I.UndefinedVariable.name), n = Array.from(i.values()).flatMap((h) => h).flatMap((h) => h.getUsages()).filter((h) => h.getVariable().getDataType() === d.Function).map((h) => h.getVariable()), s = g.filter((h) => h.getID() === I.SubscriptedNonSubscriptable.name), o = g.filter((h) => h.getID() === I.VariableWithSameNameAsFunction.name && (h.getAdditionalInfo().funcType === Kn || h.getAdditionalInfo().funcType === $n && h.getAdditionalInfo().numArgsExpected > 0));
  let a = [];
  if (o.length === 0 || e.length === 0 && n.length === 0)
    return a;
  for (let h of o) {
    const p = h.getAffectedText(), w = h.getDocIndex();
    for (let S of e)
      if (S.getAffectedText() === p && S.getDocIndex() === w && s.filter((N) => N.getAdditionalInfo().varName === p && N.getDocIndex() === w).length === 0) {
        const N = new k(
          [S, h],
          `The variable ${p} has not been assigned a value and the file contains a user-defined function of the same name.`
        );
        a.push(new V(S.getLineNumber(), S.getDocIndex(), N));
      }
    for (let S of n)
      if (S.getTextValue() === p && S.getDocumentStartIndex() === w && s.filter((N) => N.getAdditionalInfo().varName === p && N.getDocIndex() === w).length === 0) {
        const N = new k(
          [h],
          `The variable ${p} has not been assigned a value and the file contains a user-defined function of the same name.`
        );
        a.push(new V(h.getLineNumber(), h.getDocIndex(), N));
      }
  }
  return a;
}, Ld = (g) => {
  const i = g.filter((s) => s.getID() === I.SubscriptedNonSubscriptable.name), e = g.filter((s) => s.getID() === I.VariableWithSameNameAsFunction.name);
  let n = [];
  for (let s of i) {
    let o = s.getAdditionalInfo().varName, a = s.getDocIndex();
    for (let h of e)
      if (h.getAffectedText() === o && h.getDocIndex() === a) {
        const p = s.getAdditionalInfo().isUndefined ? "undefined variable" : s.getAdditionalInfo().subscriptedType === "unknown data type" ? "variable with unknown data type" : `variable with ${s.getAdditionalInfo().subscriptedType} data type`, w = new k(
          [s, h],
          `${o} (${p}) has the same name as a function. ${o} is subscripted, suggesting a mistake may have been made while calling a function of the same name. It is possible there is confusion about when to use square brackets versus parentheses.`
        );
        n.push(new V(s.getLineNumber(), s.getDocIndex(), w));
      }
  }
  return n;
}, vd = (g) => {
  const i = g.filter((s) => s.getID() === I.LoopVarModifiedInChildLoop.name && s.getAdditionalInfo().modifiedIn.every((o) => o.loopType === "for" && o.varDataType === "int")), e = g.filter((s) => s.getID() === I.LoopVarNotModified.name);
  let n = [];
  for (let s of i) {
    const o = s.getAffectedText(), a = s.getBlock();
    for (const h of e)
      if (h.getBlock() === a && h.getAdditionalInfo().unmodifiedVars.includes(o)) {
        const p = new k(
          [s, h],
          `The int variable ${o} is referenced in a while loop condition but only modified in a nested for loop. If ${o} is being used to count the iterated items, the two loops could be replaced with a single for loop using enumerate() or range() to count the items.`
        );
        n.push(new V(s.getLineNumber(), s.getDocIndex(), p));
        break;
      }
  }
  return n;
}, Rd = (g) => {
  const i = g.filter((n) => n.getID() === I.OverwrittenVariable.name && n.getAdditionalInfo().overwriteType === bo && n.getAdditionalInfo().overwriteValue === yo && n.getAdditionalInfo().prevUsageIsDefinition && !n.getAdditionalInfo().overwrittenVar[n.getAdditionalInfo().overwrittenVar.length - 1].forLoopDefinition);
  let e = [];
  for (let n of i) {
    const s = new k(
      [n],
      `The iterating variable ${n.getAffectedText()} is initialised before the loop with the same value that it is initialised with in the for loop definition.`
    );
    e.push(new V(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, Ed = (g, i) => {
  const e = g.filter((s) => s.getID() === I.UndefinedVariable.name && s.getAdditionalInfo().variable.getScope().getBlockEntity() === t.DocumentDefinition);
  let n = [];
  for (let s of e) {
    const o = s.getAdditionalInfo().variable.getName(), a = i.get(o).filter((h) => h.getScope().getBlockEntity() !== t.DocumentDefinition);
    if (a.length > 0) {
      s.getAdditionalInfo().localVariables = [];
      for (const p of a) {
        const w = { scope: p.getScope().getBlockEntity().name };
        p.getScope().getBlockEntity() === t.FunctionDefinition && (w.functionName = p.getScope().getFunctionName()), s.getAdditionalInfo().localVariables.push(w);
      }
      const h = new k(
        [s],
        `The undefined variable ${s.getAffectedText()} has global scope. The document contains ${a.length} other ${a.length === 1 ? "variable" : "variables"} with the same name in function scope.`
      );
      n.push(new V(s.getLineNumber(), s.getDocIndex(), h));
    }
  }
  return n;
}, Ud = (g) => {
  let i = g.filter(
    (n) => n.getID() === I.ForLoopIteratorModified.name
    /*|| s.getID() === SymptomType.WhileLoopVarAssignedIntLiteral.name*/
  ), e = [];
  for (let n of i) {
    let s = "";
    s = `The for loop iterator variable ${n.getAffectedText()} is modified in the loop.`;
    const o = new k([n], s);
    e.push(new V(n.getLineNumber(), n.getDocIndex(), o));
  }
  return e;
}, Gd = (g) => {
  const i = g.filter((n) => n.getID() === I.OneLineConditional.name);
  let e = [];
  for (let n of i) {
    const s = n.toJSON();
    if (s.form === Ni) {
      const o = new k(
        [n],
        "Conditional returns a boolean literal that matches the value of the boolean expression in the if statement. The whole conditional could be replaced with a single line."
      );
      e.push(new V(n.getLineNumber(), n.getDocIndex(), o));
    } else if (s.form === Ci) {
      const o = new k(
        [n],
        `The variable ${s.variableAssigned} is assigned a boolean literal that matches the value of the boolean expression in the if statement. The whole conditional could be replaced with a single line.`
      );
      e.push(new V(n.getLineNumber(), n.getDocIndex(), o));
    }
  }
  return e;
}, Jd = (g) => {
  const i = g.filter((n) => n.getID() === I.TernaryReturnsBool.name);
  let e = [];
  for (let n of i) {
    const s = new k(
      [n],
      "Ternary returns a boolean literal that matches the value of the boolean expression in the ternary. The ternary could be replaced with the boolean expression alone."
    );
    e.push(new V(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, $d = (g) => {
  const i = g.filter((s) => s.getID() === I.UnexpectedColon.name && s.getAdditionalInfo().after.type === we && (s.getAdditionalInfo().before.type === t.FunctionName.name || s.getAdditionalInfo().before.type === Ao)), e = g.filter((s) => s.getID() === I.UnknownFunction.name);
  let n = [];
  for (let s of i)
    if (s.getAdditionalInfo().before.type === t.FunctionName.name) {
      let o = e.filter((a) => a.getAffectedText() === s.getAdditionalInfo().before.value);
      if (o.length > 0) {
        const a = new k(
          [s, o[0]],
          `The unexpected colon is preceded by a call to unknown function, ${o[0].getAffectedText()}. It is possible the intention was to declare a function but the def keyword has been omitted.`
        );
        n.push(new V(s.getLineNumber(), s.getDocIndex(), a));
      }
    } else if (s.getAdditionalInfo().before.type === Ao) {
      const o = new k(
        [s],
        "The unexpected colon is preceded by a Boolean expression. It is possible the intention was to declare a while, if, or elif but the keyword was omitted."
      );
      n.push(new V(s.getLineNumber(), s.getDocIndex(), o));
    }
  return n;
}, Kd = (g) => {
  const i = g.filter((s) => s.getID() === I.DefinitionFollowedByReservedWord.name), e = g.filter((s) => s.getID() === I.ReservedWordAssigned.name);
  let n = [];
  for (let s of i) {
    const o = new k(
      [s],
      `The reserved word, ${s.getAdditionalInfo().reservedWord}, follows the ${s.getAdditionalInfo().definitionType}.`
    );
    n.push(new V(s.getLineNumber(), s.getDocIndex(), o));
  }
  for (let s of e) {
    const o = new k(
      [s],
      `The reserved word, ${s.getAffectedText()}, is followed by the assignment operator.`
    );
    n.push(new V(s.getLineNumber(), s.getDocIndex(), o));
  }
  return n;
}, Wd = (g, i) => {
  const e = g.filter((h) => h.getID() === I.UndefinedVariable.name), n = Array.from(i.values()).flatMap((h) => h).flatMap((h) => h.getUsages()).filter((h) => h.getVariable().getDataType() === d.Function).map((h) => h.getVariable()), s = g.filter((h) => h.getID() === I.SubscriptedNonSubscriptable.name), o = g.filter((h) => h.getID() === I.VariableWithSameNameAsFunction.name && h.getAdditionalInfo().funcType === $n && h.getAdditionalInfo().numArgsExpected === 0);
  let a = [];
  if (o.length === 0 || e.length === 0 && n.length === 0)
    return a;
  for (let h of o) {
    const p = h.getAffectedText(), w = h.getDocIndex();
    for (let S of e)
      if (S.getAffectedText() === p && S.getDocIndex() === w && s.filter((N) => N.getAdditionalInfo().varName === p && N.getDocIndex() === w).length === 0) {
        const N = new k(
          [S, h],
          `The variable ${p} has not been assigned a value and the file contains a user-defined function of the same name, which does not expect any arguments.`
        );
        a.push(new V(S.getLineNumber(), S.getDocIndex(), N));
      }
    for (let S of n)
      if (S.getTextValue() === p && S.getDocumentStartIndex() === w && s.filter((N) => N.getAdditionalInfo().varName === p && N.getDocIndex() === w).length === 0) {
        const N = new k(
          [h],
          `The variable ${p} has not been assigned a value and the file contains a user-defined function of the same name, which does not expect any arguments.`
        );
        a.push(new V(h.getLineNumber(), h.getDocIndex(), N));
      }
  }
  return a;
}, qd = (g) => {
  const i = g.filter((o) => o.getID() === I.AssignedNone.name), e = g.filter((o) => o.getID() === I.FunctionPrints.name), n = g.filter((o) => o.getID() === I.UnusedReturn.name && o.getAdditionalInfo().expression.is(t.FunctionName));
  let s = [];
  for (let o of i) {
    const a = o.toJSON();
    if (a.expressionNoValue.type === $n) {
      const h = a.expressionNoValue.value.split("(")[0], p = e.filter((S) => S.getAffectedText() === h);
      if (p.length > 0) {
        const S = new k(
          [o, ...p],
          `User-defined function ${h} prints to the console but does not return a value.`
        );
        s.push(new V(o.getLineNumber(), o.getDocIndex(), S));
      } else {
        const S = new k(
          [o],
          `User-defined function ${h} does not return a value but it is used as if it does.`
        );
        s.push(new V(o.getLineNumber(), o.getDocIndex(), S));
      }
    } else if (a.expressionNoValue.type === Kn && a.expressionNoValue.value.indexOf("print(") === 0) {
      const h = new k(
        [o],
        "The print function does not return a value but it is used as if it does."
      );
      s.push(new V(o.getLineNumber(), o.getDocIndex(), h));
    }
  }
  for (let o of n) {
    const h = o.toJSON().unusedFunc.value, p = e.filter((S) => S.getAffectedText() === h);
    if (p.length > 0) {
      const S = new k(
        [o, ...p],
        `User-defined function ${h} prints to the console and returns a value but the value is not used.`
      );
      s.push(new V(o.getLineNumber(), o.getDocIndex(), S));
    }
  }
  return s;
}, jd = (g) => {
  const i = g.filter((s) => s.getID() === I.FunctionPrints.name), e = g.filter(
    (s) => s.getID() === I.UnusedReturn.name && !(s.getAdditionalInfo().expression.is(c.BuiltInMethods) && No.has(s.getAdditionalInfo().expression.getEntity())) && !s.getAdditionalInfo().expression.isOneOf([t.StrFunction, t.IntFunction, t.FloatFunction, t.BoolFunction, t.ListFunction, t.TupleFunction, t.SetFunction])
  ), n = [];
  for (let s of e) {
    const a = s.toJSON().unusedFunc.value;
    if (!(i.filter((w) => w.getAffectedText() === a).length > 0)) {
      const w = new k(
        [s],
        `The function ${a} returns a value but the value is not used.`
      );
      n.push(new V(s.getLineNumber(), s.getDocIndex(), w));
    }
  }
  return n;
}, Hd = (g) => {
  const i = g.filter((n) => n.getID() === I.ReturnInParentheses.name), e = (n) => n === Ro ? "function call" : n === Eo ? "compound type (e.g. list, set)" : n === Uo ? "compound expression" : n;
  return i.map((n) => new V(n.getLineNumber(), n.getDocIndex(), new k(
    [n],
    `The function returns a ${e(n.getAdditionalInfo().contents)} wrapped in parentheses. The parentheses are unnecessary.`
  )));
}, zd = (g) => {
  const i = g.filter((n) => n.getID() === I.SequentialIfs.name && n.getAdditionalInfo().branchMatches.length > 0);
  let e = [];
  for (let n of i)
    for (let s of n.getAdditionalInfo().branchMatches) {
      let o = s.map((h) => h.lineNum + 1).join(", "), a = o.lastIndexOf(",");
      o = o.substring(0, a) + " and" + o.substring(a + 1), s.length > 0 && e.push(new V(
        s[0].lineNum,
        s[0].docIndex,
        new k(
          [n],
          `The if statement is part of a sequence of if statements (lines ${o}) that have very similar boolean expressions.`
        )
      ));
    }
  return e;
}, Qd = (g, i, e) => {
  const n = new Set(g.filter((a) => a.getID() === I.AssignmentInReturn.name).map((a) => a.getLineNumber())), s = g.filter(
    (a) => a.getID() === I.OverwrittenVariable.name && a.getAdditionalInfo().isParameter && a.getAdditionalInfo().prevUsageIsDefinition && !n.has(a.getLineNumber())
  );
  let o = [];
  for (let a of s) {
    const h = a.getAdditionalInfo().functionBlock;
    let p = "";
    for (const [S, F] of e.entries())
      if (F.getBlockId() === h) {
        p = S;
        break;
      }
    a.getAdditionalInfo().functionBlock = p;
    const w = new k(
      [a],
      `The parameter ${a.getAffectedText()} is overwritten before use.`
    );
    o.push(new V(a.getLineNumber(), a.getDocIndex(), w));
  }
  return o;
}, Xd = (g) => {
  const i = g.filter(
    (n) => n.getID() === I.UnusedReturn.name && n.getAdditionalInfo().expression.is(c.BuiltInMethods) && No.has(n.getAdditionalInfo().expression.getEntity()) && n.getAdditionalInfo().expression.getParent().getObject().getDataType() === d.String
    // Only count if certain the object is a string
  );
  let e = [];
  for (let n of i) {
    const s = new k(
      [n],
      `A String method, ${n.getAdditionalInfo().expression.getTextValue()}, that returns a new string is called but the return value is not assigned or passed.`
    );
    e.push(new V(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, Zd = (g) => {
  const i = g.filter(
    (n) => n.getID() === I.UnusedReturn.name && n.getAdditionalInfo().expression.isOneOf([t.StrFunction, t.IntFunction, t.FloatFunction, t.BoolFunction, t.ListFunction, t.TupleFunction, t.SetFunction])
  );
  let e = [];
  for (let n of i) {
    const s = new k(
      [n],
      `${n.getAdditionalInfo().expression.getTextValue()}() is called but the converted value returned by the function is not saved or passed.`
    );
    e.push(new V(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, Yd = (g) => {
  const i = g.filter((s) => s.getID() === I.LoopVarNotModified.name), e = g.filter((s) => s.getID() === I.LoopReturn.name);
  let n = [];
  for (const s of e) {
    if (s.getAdditionalInfo().exitTypes.filter((a) => a !== "return").length > 0 || s.getAdditionalInfo().loopType === "while" && i.filter((a) => a.getBlock() === s.getBlock()).length > 0)
      continue;
    const o = new k(
      [s],
      `A ${s.getAdditionalInfo().loopType} always exits on the first iteration due to return statements. Related to DeferredReturn.`
    );
    n.push(new V(s.getLineNumber(), s.getDocIndex(), o));
  }
  return n;
}, _d = (g) => {
  const i = g.filter((s) => s.getID() === I.LoopVarNotModified.name), e = g.filter((s) => s.getID() === I.LoopReturn.name);
  let n = [];
  for (let s of i) {
    const o = e.filter((a) => a.getBlock() === s.getBlock());
    if (o.length > 0) {
      const a = new k(
        [s, ...o],
        "No while loop variables are modified (excluding modifications in any nested loops) and the loop always exits on the first iteration."
      );
      n.push(new V(s.getLineNumber(), s.getDocIndex(), a));
    }
  }
  return n;
}, eh = (g) => {
  const i = g.filter((n) => n.getID() === I.TypeUnnecessary.name);
  let e = [];
  for (let n of i) {
    const s = n.toJSON();
    let o;
    s.argType === Wc && s.convertedType === qc ? o = new k(
      [n],
      `A string value, ${s.convertedValue}, is converted to a list which may not be necessary. The programmer may not realise that much of the functionality provided by a list is also available to strings.`
    ) : o = new k(
      [n],
      `${s.convertedValue} is guaranteed to be a ${s.argType} so there is no need to convert it to ${s.convertedType}.`
    ), o !== void 0 && e.push(new V(n.getLineNumber(), n.getDocIndex(), o));
  }
  return e;
}, th = (g) => g.filter((e) => e.getID() === B.EqualityExpression.name).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "The equality operator is used in a Boolean expression."
))), nh = (g) => {
  const i = g.filter((n) => n.getID() === B.ValidAssignment.name);
  let e = [];
  for (let n of i) {
    const s = new k(
      [n],
      "A variable is assigned a value."
    );
    e.push(new V(n.getLineNumber(), n.getDocIndex(), s));
  }
  return e;
}, sh = (g) => {
  const i = g.filter((s) => s.getID() === B.EqualityExpression.name), e = /* @__PURE__ */ new Map();
  for (const s of i) {
    let o, a = s.getAdditionalInfo().tempExpression.is(t.BooleanExpression) ? s.getAdditionalInfo().tempExpression : void 0;
    try {
      for (o = s.getAdditionalInfo().tempExpression.getParent(); o.is(t.BooleanExpression); )
        a = o, o = o.getParent();
    } catch {
      o = void 0;
    }
    o && a && a.getTextValue().includes(" or ") && (e.has(o) || e.set(o, []), e.get(o).push(s), s.getAdditionalInfo().completeBooleanExpression = a.getTextValue());
  }
  for (const [s, o] of Array.from(e.entries())) {
    const a = [], h = /* @__PURE__ */ new Set();
    for (let p = 0; p < o.length; p++)
      if (!h.has(p)) {
        for (let w = 0; w < o.length; w++)
          if (w !== p && !h.has(w)) {
            const S = o[p].getAdditionalInfo().tempExpression, F = o[w].getAdditionalInfo().tempExpression;
            S.matchesPattern(F) && (h.has(p) || (a.push(o[p]), h.add(p)), a.push(o[w]), h.add(w));
          }
      }
    e.set(s, a);
  }
  let n = [];
  for (const s of Array.from(e.values()).filter((o) => o.length > 1)) {
    s.sort((a, h) => a.getDocIndex() - h.getDocIndex());
    const o = new k(
      s,
      "A Boolean expression contains multiple equality checks separated by an or."
    );
    n.push(new V(s[0].getLineNumber(), s[0].getDocIndex(), o));
  }
  return n;
}, ih = (g) => g.filter((e) => e.getID() === B.StandaloneBooleanVariable.name).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "A condition statement uses a single standalone Boolean variable as the condition instead of comparing it to True or False."
))), oh = (g, i, e) => {
  const n = new Set(i.filter((h) => h.getID() === I.UnreachableExit.name && h.getAdditionalInfo().exitKeyword === So).map((h) => h.getAdditionalInfo().functionBlock)), s = g.filter((h) => h.getID() === B.ReturnLast.name && !n.has(h.getAdditionalInfo().functionBlock)), o = /* @__PURE__ */ new Map();
  for (const [h, p] of e)
    if (!n.has(p.getBlockId())) {
      const w = s.filter((S) => S.getAdditionalInfo().functionBlock === p.getBlockId());
      w.length > 0 && o.set(h, w);
    }
  let a = [];
  for (const h of Array.from(o.values())) {
    h.sort((w, S) => w.getDocIndex() - S.getDocIndex());
    const p = new k(
      h,
      "All returns in a function are the last statements in their respective branches."
    );
    a.push(new V(h[0].getLineNumber(), h[0].getDocIndex(), p));
  }
  return a;
}, rh = (g) => g.filter((e) => e.getID() === B.NewForLoopVar.name).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "A for loop definition creates a new loop variable instead of overwriting an existing variable."
))), ah = (g) => g.filter((e) => e.getID() === B.ValidFunctionCall.name).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "A properly formed function call with parentheses and 0 or more arguments."
))), lh = (g) => g.filter((e) => e.getID() === B.CounterLoop.name && !e.getAdditionalInfo().isNestedInWhile).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "A counter loop (uses range or enumerate) is not nested inside a while loop."
))), ch = (g, i) => {
  const e = new Set(i.filter((o) => o.getID() === I.UndefinedVariable.name && o.getAdditionalInfo().variable.getScope().getBlockEntity() === t.DocumentDefinition).map((o) => o.getAffectedText())), n = g.filter((o) => o.getID() === B.ValidGlobalVariable.name), s = [];
  if (n.length > 0) {
    const o = g.filter((a) => a.getID() === B.FunctionScopeVariable.name && !e.has(a.getAffectedText()));
    o.length > 0 && (s.push(...n.map((a) => new V(a.getLineNumber(), a.getDocIndex(), new k(
      [a],
      "A variable is defined in document scope."
    )))), s.push(...o.map((a) => new V(a.getLineNumber(), a.getDocIndex(), new k(
      [a],
      "A variable defined in function scope does not have an undefined counterpart in document scope."
    )))));
  }
  return s;
}, uh = (g) => g.filter((e) => e.getID() === B.ForLoopTargetNotModified.name).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "The target variable(s) in a for loop iterator are used in the loop without modification."
))), dh = (g) => {
  const i = g.filter((s) => s.getID() === B.NonLiteralBooleanAssigned.name), e = g.filter((s) => s.getID() === B.NonLiteralBooleanReturned.name), n = i.map((s) => new V(s.getLineNumber(), s.getDocIndex(), new k(
    [s],
    "A non-literal Boolean expression is assigned directly to a variable."
  )));
  return n.push(...e.map((s) => new V(s.getLineNumber(), s.getDocIndex(), new k(
    [s],
    "A non-literal Boolean expression is returned directly."
  )))), n;
}, hh = (g) => g.filter((e) => e.getID() === B.UsedReturn.name).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "The value returned by a function call is used in some way."
))), fh = (g) => g.filter((e) => e.getID() === B.ReturnNoParentheses.name).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "An expression is returned without parentheses."
))), gh = (g) => g.filter((e) => e.getID() === B.IfElif.name).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "A conditional made up of multiple branches."
))), ph = (g) => g.filter((e) => e.getID() === B.ParameterCalled.name).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "A parameter is called in the function without modification."
))), mh = (g) => {
  const i = g.filter((n) => n.getID() === B.UsedReturn.name), e = [];
  for (const n of i) {
    const s = n.getAdditionalInfo().expression;
    No.has(s.getEntity()) && e.push(new V(n.getLineNumber(), n.getDocIndex(), new k(
      [n],
      "The result of a string method is used in some way."
    )));
  }
  return e;
}, wh = (g) => g.filter((e) => e.getID() === B.UsedReturn.name && e.getAdditionalInfo().expression.isOneOf([t.StrFunction, t.IntFunction, t.FloatFunction, t.BoolFunction, t.ListFunction, t.TupleFunction, t.SetFunction])).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "The result of a type conversion function is used in some way."
))), Sh = (g, i) => {
  const e = new Set(i.filter((s) => s.getID() === I.LoopReturn.name && s.getAdditionalInfo().loopType === "while").map((s) => s.getBlock()));
  return g.filter((s) => s.getID() === B.WhileLoopVarModified.name && !e.has(s.getBlock())).map((s) => new V(s.getLineNumber(), s.getDocIndex(), new k(
    [s],
    "A while loop progresses because a loop variable is modified and there is no early exit."
  )));
}, bh = (g) => g.filter((e) => e.getID() === B.LoopExitsSometimes.name).map((e) => new V(e.getLineNumber(), e.getDocIndex(), new k(
  [e],
  "A loop contains a return that is inside a conditional."
)));
var Cn, Vs, Ht;
const xo = class xo {
  // All occurrences of the misconception.
  /**
   * Creates a new Misconception
   * @param {MisconceptionType | ConceptType} misconType 
   * @param {MisconceptionOccurrence[]} occurrences 
   */
  constructor(i, e) {
    /** @type {MisconceptionType | ConceptType} */
    b(this, Cn);
    // The type of the misconception
    /** @type {string} */
    b(this, Vs);
    // A high level, abstract text discription of the symptoms associated with the misconception and their relationships
    /** @type {Array<MisconceptionOccurrence>} */
    b(this, Ht);
    y(this, Cn, i.name), y(this, Vs, i.description), y(this, Ht, e);
  }
  /**
   * Add a new occurrence of the misconception
   * @param {MisconceptionOccurrence} occurrence 
   */
  addOccurrence(i) {
    u(this, Ht).push(i);
  }
  /**
   * Gets the (String) name of the misconception.
   * @returns {string}
   */
  getName() {
    return u(this, Cn);
  }
  /**
   * Checks if any of the contributing symptoms occur in the given range
   * @param {number} startIndex The starting doc index of a token in the document
   * @param {number} endIndex The ending doc index of a token in the document
   * @returns {boolean} True if a contributing symptom is present in the given range
   */
  isPresentInToken(i, e) {
    for (const n of u(this, Ht))
      for (const s of n.getReason().getContributingSymptoms())
        if (i <= s.getDocIndex() && e >= s.getDocIndex())
          return !0;
    return !1;
  }
  /**
   * Creates a JSON-friendly representation of the object
   * @returns {Object} A JSON-friendly representation of the object
   */
  toJSON() {
    return {
      type: u(this, Cn),
      description: u(this, Vs),
      occurrences: u(this, Ht).map((i) => i.toJSON())
    };
  }
  /**
   * Static method. Creates a new Misconception
   * @param {MisconceptionType | ConceptType} misconceptionType 
   * @param {MisconceptionOccurrence[]} occurrences 
   * @returns {Misconception} A new misconception
   */
  static create(i, e) {
    return new xo(i, e);
  }
};
Cn = new WeakMap(), Vs = new WeakMap(), Ht = new WeakMap();
let Ys = xo;
var On, Tn, xn;
class V {
  // A description of the relevant symptoms, tailored to the specific occurrence
  /**
   * Creates a new MisconceptionOccurrence
   * @param {Number} line The document line number
   * @param {Number} docIndex The index in the document's raw text
   * @param {Reason} reason A description of the relevant symptoms
   */
  constructor(i, e, n) {
    /** @type {Number} */
    b(this, On);
    // The document line number
    /** @type {Number} */
    b(this, Tn);
    // The index in the document's raw text
    /** @type {Reason} */
    b(this, xn);
    y(this, On, i), y(this, Tn, e), y(this, xn, n);
  }
  /**
   * Gets the document line number
   * @returns {Number} The document line number
   */
  getLineNumber() {
    return u(this, On);
  }
  /**
   * Gets the index in the raw document text
   * @returns {Number} The index in the raw document text
   */
  getDocIndex() {
    return u(this, Tn);
  }
  /**
   * Gets the Reason for the occurrence
   * @returns {Reason} The Reason object that contains more information about the occurrence
   */
  getReason() {
    return u(this, xn);
  }
  /**
   * Creates a JSON-friendly representation of the Misconception
   * @returns {Object} A JSON-friendly representation of the Misconception.
   */
  toJSON() {
    return {
      line: u(this, On),
      docIndex: u(this, Tn),
      reason: u(this, xn).toJSON()
    };
  }
}
On = new WeakMap(), Tn = new WeakMap(), xn = new WeakMap();
var Mn, Ls;
class k {
  /**
   * Creates a new Reason.
   * @param {Symptom[]} contributingSymptoms 
   * @param {String} explanation 
   */
  constructor(i, e) {
    /** @type {Symptom[]} */
    b(this, Mn);
    /** @type {String} */
    b(this, Ls);
    y(this, Mn, i), y(this, Ls, e);
  }
  getContributingSymptoms() {
    return u(this, Mn);
  }
  /**
   * Creates a JSON representation of the reason.
   * @returns {Object} A JSON (or JSON-friendly) representation of the reason.
   */
  toJSON() {
    return {
      contributingSymptoms: u(this, Mn).map((i) => i.toJSON()),
      explanation: u(this, Ls)
    };
  }
}
Mn = new WeakMap(), Ls = new WeakMap();
const Ih = /* @__PURE__ */ new Map([
  [R.PrintSameAsReturn, qd],
  [R.UnusedReturn, jd],
  [R.MapToBooleanWithIf, Gd],
  [R.ComparisonWithBoolLiteral, Bd],
  [R.DeferredReturn, kd],
  [R.TypeMustBeSpecified, eh],
  [R.CompareMultipleValuesWithOr, Ad],
  [R.ParenthesesOnlyIfArgument, Wd],
  [R.FunctionCallsUseSquareBrackets, Ld],
  [R.FunctionCallsNoParentheses, Vd],
  [R.AssignCompares, Md],
  [R.ReturnCall, Hd],
  [R.SequentialIfsAreExclusive, zd],
  [R.WhileSameAsIf, _d],
  [R.IterationRequiresTwoLoops, vd],
  [R.StringMethodsModifyTheString, Xd],
  [R.TypeConversionModifiesArgument, Zd],
  [R.MapToBooleanWithTernaryOperator, Jd],
  [R.NoReservedWords, Kd],
  [R.ParameterMustBeAssignedInFunction, Qd],
  [R.LocalVariablesAreGlobal, Ed],
  [R.IteratorInitialisedOutsideLoop, Rd],
  [R.ForLoopVarIsLocal, Pd],
  [R.LoopCounter, Ud],
  [R.NoKeyword, $d],
  [R.ColonAssigns, Dd],
  [R.ReturnWaitsForLoop, Yd]
  //27
]), yh = /* @__PURE__ */ new Map([
  [oe.Equality, th],
  [oe.Assignment, nh],
  [oe.MultipleEquality, sh],
  [oe.BooleanVariableCondition, ih],
  [oe.ReturnLast, oh],
  [oe.NewForLoopVar, rh],
  [oe.FunctionCall, ah],
  [oe.SingleCounterLoop, lh],
  [oe.VariablesInMultipleScopes, ch],
  [oe.ForLoopTargetNotModified, uh],
  [oe.BooleanExpressionUsedAsValue, dh],
  [oe.UsedReturn, hh],
  [oe.ReturnNoParentheses, fh],
  [oe.MultiBranchConditional, gh],
  [oe.ParameterCalled, ph],
  [oe.StringMethodAssigned, mh],
  [oe.ConversionAssigned, wh],
  [oe.WhileLoopProgresses, Sh],
  [oe.LoopExitsSometimes, bh]
]);
var zt, We, Nt, vs, Qt, Xt, Dn, hi, fc;
class hc {
  /**
   * Creates a new GraphNode
   * @param {ExpressionNode} expressionNode The original ExpressionNode that this GraphNode is created from
   */
  constructor(i) {
    b(this, hi);
    /** @type {String} */
    b(this, zt);
    /** @type {ExpressionCategory} */
    b(this, We);
    /** @type {ExpressionEntity} */
    b(this, Nt);
    /** @type {ExpressionNode[]} */
    b(this, vs);
    /** @type {number} */
    b(this, Qt);
    /** @type {number} */
    b(this, Xt);
    /** @type {Set<String>} */
    b(this, Dn);
    y(this, zt, i.getTextValue()), y(this, We, i.getCategory()), y(this, Nt, i.getEntity()), y(this, Qt, i.getDocumentStartIndex()), y(this, Xt, i.getDocumentEndIndex()), y(this, vs, i.getConnectedTo()), y(this, Dn, /* @__PURE__ */ new Set());
  }
  /**
   * Gets the text value of this node.
   * @returns {String}
   */
  getText() {
    return u(this, zt);
  }
  /**
   * Get the ExpressionEntity of this node.
   * @returns {ExpressionEntity}
   */
  getEntity() {
    return u(this, Nt);
  }
  /**
   * Gets the ExpressionCategory of this node,
   * @returns {ExpressionCategory}
   */
  getCategory() {
    return u(this, We);
  }
  /**
   * Gets the connected ExpressionNodes.
   * @returns {ExpressionNode[]}
   */
  getConnectedTo() {
    return u(this, vs);
  }
  /**
   * If this node has a symptom that contributes to an occurrence of a 
   * misconception, this method will add the misconception ID name for tracking.
   * @param {String} misconName The name of the misconception
   */
  addMisconception(i) {
    u(this, Dn).add(i);
  }
  getID() {
    let i = `${u(this, Nt).name}_${u(this, We).name} ${u(this, zt)}`;
    return m(this, hi, fc).call(this) ? i : `${u(this, Qt)}_${u(this, Xt)}_${i}`;
  }
  getStartIndex() {
    return u(this, Qt);
  }
  getEndIndex() {
    return u(this, Xt);
  }
  /**
   * Converts this node to a JSON object.
   * @returns {Object}
   */
  toJSON() {
    return {
      id: this.getID(),
      text: u(this, zt),
      entity: u(this, Nt).name,
      category: u(this, We).name,
      startDocIndex: u(this, Qt),
      endDocIndex: u(this, Xt),
      misconceptions: Array.from(u(this, Dn))
    };
  }
}
zt = new WeakMap(), We = new WeakMap(), Nt = new WeakMap(), vs = new WeakMap(), Qt = new WeakMap(), Xt = new WeakMap(), Dn = new WeakMap(), hi = new WeakSet(), fc = function() {
  return u(this, Nt) === t.FunctionName && u(this, We) === c.Identifiers || u(this, We) === c.BuiltInFunctions || u(this, We) === c.BuiltInMethods || u(this, We) === c.BuiltInModules || u(this, We) === c.BuiltInExceptions;
};
var Ct, An, _e, gc, uo, pc, mc;
class Fh {
  /**
   * 
   * @param {GraphNode[]} allNodes 
   * @param {Map<MisconceptionType, Misconception>} misconceptions
   */
  constructor(i, e) {
    b(this, _e);
    /** @type {Map<String, GraphNode>} */
    b(this, Ct, /* @__PURE__ */ new Map());
    /** @type {Map<String, Set<String> >} */
    b(this, An, /* @__PURE__ */ new Map());
    const n = Array.from(e.values());
    for (const s of i)
      m(this, _e, gc).call(this, n, s), m(this, _e, uo).call(this, s);
    m(this, _e, pc).call(this);
  }
  toJSON() {
    const i = {
      nodes: {},
      edges: {}
    };
    for (const [e, n] of u(this, Ct))
      i.nodes[e] = n.toJSON();
    for (const [e, n] of u(this, An))
      i.edges[e] = Array.from(n);
    return i;
  }
}
Ct = new WeakMap(), An = new WeakMap(), _e = new WeakSet(), /**
 * Checks if any of the misconceptions have symptoms that occur in the node. If so, 
 * the misonception ID is added to the node
 * @param {Misconception[]} misconObjects 
 * @param {GraphNode} node 
 */
gc = function(i, e) {
  const n = i.filter((s) => s.isPresentInToken(e.getStartIndex(), e.getEndIndex()));
  for (const s of n)
    e.addMisconception(s.getName());
}, /**
 * 
 * @param {GraphNode} node 
 */
uo = function(i) {
  const e = i.getID();
  u(this, Ct).has(e) || (u(this, Ct).set(e, i), u(this, An).set(e, /* @__PURE__ */ new Set()));
}, pc = function() {
  for (const [i, e] of u(this, Ct)) {
    const n = e.getConnectedTo();
    for (const s of n) {
      const o = new hc(s);
      u(this, Ct).has(o.getID()) || m(this, _e, uo).call(this, o), i !== o.getID() && m(this, _e, mc).call(this, i, o.getID());
    }
  }
}, /**
 * 
 * @param {String} fromNode The ID of the node
 * @param {String} toNode The node to connect to
 */
mc = function(i, e) {
  u(this, An).get(i).add(e);
};
var Rs, Le, ye, E, wc, Dt, Sc, bc, Ic, yc, Fc, Nc, Cc, Oc, Tc, xc, ho, fo, Mc, Dc, Ac, Bc, kc, Pc, on;
class Nh {
  /**
   * Creates a new DocInfo object from Python raw text
   * @param {string} text The raw text of the Python file
   */
  constructor(i) {
    b(this, E);
    /** @type {string} */
    b(this, Rs);
    // The raw text in the document
    /** @type {Statement} */
    b(this, Le, []);
    /** @type {StatementBlock} */
    b(this, ye);
    l(this, "variables");
    /** @type {Map<String, UserDefinedFunctionExpression>} */
    l(this, "userDefinedFunctions");
    /** @type {Map<String, ClassNode} */
    l(this, "userDefinedClasses");
    /** @type {Map<string, ModuleInfo>} */
    l(this, "modules");
    y(this, Rs, i), y(this, ye, new Es()), this.variables = /* @__PURE__ */ new Map(), this.modules = /* @__PURE__ */ new Map(), O.symptoms = [], O.counterSymptoms = [];
    try {
      m(this, E, wc).call(this, i);
    } catch (e) {
      const n = `Unable to process ${i} due to error: ${e.stack}`;
      throw new Error(n);
    }
  }
  //#endregion
  /**
   * Gets all UserDefinedFunctions in the document.
   * @returns {Map<String, UserDefinedFunctionExpression>} A Map, where each key is the name of a function and each value is a UserDefinedFunction object
   */
  getUserDefinedFunctions() {
    return this.userDefinedFunctions;
  }
  /**
   * Gets all user defined classes in the document
   * @returns {Map<string, DataType}
   */
  getUserDefinedClasses() {
    return this.userDefinedClasses;
  }
  /**
   * Gets all variables defined in the document.
   * @returns {Map<String, VariableInfo[]>}
   */
  getVariables() {
    return this.variables;
  }
  /**
   * Gets all symptoms in the document.
   * @returns {Symptom[]} An array of all symptoms in the document.
   */
  getSymptoms() {
    return O.symptoms;
  }
  /**
   * Gets all counter symptoms in the document
   * @returns {Symptom[]} An array of all counter symptoms in the document
   */
  getCounterSymptoms() {
    return O.counterSymptoms;
  }
  /**
   * Gets all misconceptions in the document.
   * @returns {Map<MisconceptionType, Misconception>} A Map of all misconceptions found in the document
   */
  getMisconceptions() {
    return Td(O.symptoms, this.variables, this.getUserDefinedFunctions());
  }
  /**
   * Gets all concepts in the document.
   * @returns {Map<ConceptType, Misconception} A Map of all concepts found in the document
   */
  getConcepts() {
    return xd(O.counterSymptoms, O.symptoms, this.getUserDefinedFunctions());
  }
  /**
   * Gets the raw text in the document.
   * @returns {string} The raw text of the document.
   */
  getText() {
    return u(this, Rs);
  }
  /**
   * Gets all blocks in the document
   * @returns {Block} The document root block, which contains references to all child blocks.
   */
  getBlocks() {
    return u(this, ye);
  }
  /**
   * Returns the document as an Abstract Semantic Graph.
   * 
   *
   * A Graph object (to be implemented) containing: 
   * - An array all nodes in the graph (index = node ID, value = JSON attributes)
   * - A 2D array of all connections e.g. at index 0, there will be an array of the IDs of all nodes that node 0 connects to)
   */
  getGraph() {
    let i = [];
    for (const n of u(this, Le))
      for (const s of n.getExpressions()) {
        let o = s.getAllNestedExpressions();
        try {
          i.push(...o.map((a) => new hc(a)));
        } catch (a) {
          console.log("Unable to get graph nodes:", a);
        }
      }
    return new Fh(i, this.getMisconceptions());
  }
  //#endregion
}
Rs = new WeakMap(), Le = new WeakMap(), ye = new WeakMap(), E = new WeakSet(), //#region setup
/**
 * Main processing method. Converts the raw source code to an AST
 * @param {String} text 
 */
wc = function(i) {
  y(this, Le, []);
  let e = u(this, ye);
  const n = i.split(/\r?\n/), s = [...i.matchAll(/\r?\n/g)].map((o) => o[0]);
  if (n.length > 0) {
    let o = new Hn(n[0], 0, 0);
    u(this, Le).push(Yt.createFromSource(o)), o.continuesOnNextLine() || (e = m(this, E, fo).call(this, u(this, Le)[u(this, Le).length - 1], e));
    for (let a = 1; a < n.length; a++) {
      const h = e.isScopeBlock() ? m(this, E, ho).call(this, e) : m(this, E, ho).call(this, e.getScope()), p = Array.from(e.getScope().findAllModules().keys()), w = { varsWithTypeNames: h, moduleNames: p, classDefinitionInProgress: e.hasParentOfEntity(t.ClassDefinition) }, S = o.getDocumentStartIndex() + o.getText().length + s[a - 1].length;
      if (o.continuesOnNextLine())
        w.groupCharCounts = o.getOpenGroupChars(), w.lastLineExpressions = o.getExpressions(), o.hasOpenComment() && (w.multilineCommentDelimiter = o.getCommentDelimiter()), o.hasOpenString() && (w.stringLiteralDelimiter = o.getStringLiteralDelimiter()), o = new Hn(n[a], a, S, w), u(this, Le)[u(this, Le).length - 1].continueFromSource(o);
      else if (o.followedBySeparateStatement()) {
        a--;
        const F = o.getLineEndIndex() + 1;
        w.startFrom = F, o = new Hn(n[a], a, o.getDocumentStartIndex(), w), u(this, Le).push(Yt.createFromSource(o, e.getBlockEntity() === t.ClassDefinition));
      } else
        o = new Hn(n[a], a, S, w), u(this, Le).push(Yt.createFromSource(o, e.getBlockEntity() === t.ClassDefinition));
      o.continuesOnNextLine() || (e = m(this, E, fo).call(this, u(this, Le)[u(this, Le).length - 1], e));
    }
  }
  m(this, E, bc).call(this), m(this, E, Ic).call(this), m(this, E, Sc).call(this);
}, /**
 * Gets all the scope blocks in the document
 * @returns {ScopeBlock[]}
 */
Dt = function() {
  return [u(this, ye)].concat(u(this, ye).getChildBlocksOfKind(t.FunctionDefinition)).concat(u(this, ye).getChildBlocksOfKind(t.ClassDefinition)).concat(u(this, ye).getChildBlocksOfKind(t.ListComprehension));
}, Sc = function() {
  const i = m(this, E, Dt).call(this);
  for (const e of i)
    for (const n of e.getStatements()) {
      for (const s of n.getExpressions())
        s.checkForSymptoms(), s.checkForCounterRules(s);
      n.isBlockStatement() && (n.checkBlockRules(n), n.checkBlockCounterRules(n));
    }
  for (const e of this.variables.values())
    for (const n of e)
      n.checkRules(n), n.checkForCounterRules(n);
  for (const e of this.userDefinedFunctions.values()) {
    const n = e.getParent();
    if (n !== void 0 && n.is(t.FunctionDefinitionStatement)) {
      const s = n.getParameters().length - n.getOptionalParameterCount(), o = n.getParameters().length, a = Array.from(e.getObservers()).filter((h) => h.is(t.UserDefinedFunctionCall));
      for (const h of a) {
        const p = h.getArguments();
        (p.length < s || p.length > o) && O.symptoms.push(O.createStatementSymptom(I.WrongArgNumber, [h], 0, 0, {
          expectedMinArgs: s,
          expectedMaxArgs: o,
          receivedArgs: p.length
        }));
      }
    }
  }
  u(this, ye).checkRules(u(this, ye)), u(this, ye).checkForCounterRules(u(this, ye));
}, bc = function() {
  const i = /* @__PURE__ */ new Map(), e = m(this, E, Dt).call(this);
  for (const n of e) {
    const s = n.getVariableMap(), o = n.getUserDefinedFunctions();
    for (const [a, h] of s) {
      let p = !1;
      const w = h.getUsages()[0].getVariable();
      w.getDataType() === d.NotParsed && !w.isAssignedOrChanged() && !w.isParameter() && (H.checkIfVariableExistsInParent(h, n) ? p = !0 : o.has(a) ? w.setDataType(d.Function) : (h.getUsages()[0].getVariable().setDataType(d.Undefined), h.checkAndAdjustUndefined())), i.has(a) || i.set(a, []), p || i.get(a).push(h);
    }
  }
  this.variables = i;
}, Ic = function() {
  this.userDefinedFunctions = m(this, E, Cc).call(this), this.userDefinedClasses = u(this, ye).getUserDefinedClasses();
  const i = u(this, ye).getChildBlocksOfKind(t.FunctionDefinition);
  for (const n of i) {
    let s = n.getLastExecutedStatements();
    const o = n.alwaysReturnsAValue();
    if (o && (s = s.filter((a) => a.getFirstExpression().is(t.ReturnStatement))), n.getParentBlock().getBlockEntity() !== t.ClassDefinition)
      this.userDefinedFunctions.has(n.getFunctionName()) && this.userDefinedFunctions.get(n.getFunctionName()).is(t.FunctionName) && this.userDefinedFunctions.get(n.getFunctionName()).addReturns(s, !o);
    else {
      const a = n.getParentBlock().getClassType().name;
      if (this.userDefinedClasses.has(a)) {
        const h = this.userDefinedClasses.get(a).methods;
        h.has(n.getFunctionName()) && h.get(n.getFunctionName()).addReturns(s, !o);
      }
    }
  }
  m(this, E, Oc).call(this);
  const e = m(this, E, Fc).call(this);
  m(this, E, Nc).call(this, e), m(this, E, yc).call(this), m(this, E, Tc).call(this);
}, /**
 * Checks for a specific symptom - variables with the same name as a user defined function.
 * Can only be run after all variable and function processing is complete.
 */
yc = function() {
  const i = this.userDefinedFunctions.keys(), e = Array.from(i).filter((n) => this.variables.has(n));
  for (const n of e) {
    const s = this.userDefinedFunctions.get(n).getParent();
    if (s !== void 0) {
      for (const o of this.variables.get(n))
        if (o.getUsages().length > 0) {
          const a = o.getUsages()[0].getVariable();
          O.symptoms.push(O.createStatementSymptom(I.VariableWithSameNameAsFunction, [a], 0, 0, {
            funcType: $n,
            numArgsExpected: s.getParameters().length - s.getOptionalParameterCount(),
            varIsParameter: a.isParameter()
          }));
        }
    }
  }
}, /**
 * Helper method to find user defined functions with the same name as built in functions
 * @returns {String[]} An array of the function names
 */
Fc = function() {
  const i = this.userDefinedFunctions.keys(), e = [];
  for (const n of i)
    Ze(n).category === c.BuiltInFunctions && e.push(n);
  return e;
}, /**
 * Converts any calls to built in functions that have the same name as a user defined function to
 * the user defined function call
 * @param {String[]} functionNames 
 */
Nc = function(i) {
  if (i.length > 0) {
    const e = m(this, E, Dt).call(this);
    for (const n of e) {
      const s = n.getStatements();
      for (const o of s) {
        const h = o.getExpressions().flatMap((p) => p.getExpressionsOfKind(t.BuiltInFunctionCall)).filter((p) => i.includes(p.getFunctionName()));
        for (const p of h)
          i.includes(p.getFunctionName()) && p.convertToUserDefinedFunction(this.userDefinedFunctions.get(p.getFunctionName()));
      }
    }
  }
}, /**
 * Helper method. Finds all user defined functions in all scopes and returns a map.
 * @returns {Map<String, UserDefinedFunctionExpression>}
 */
Cc = function() {
  const i = /* @__PURE__ */ new Map();
  let e = m(this, E, Dt).call(this);
  for (const n of e) {
    const s = n.getUserDefinedFunctions();
    for (const [o, a] of s)
      i.set(o, a);
  }
  return i;
}, /**
 * Helper method to handle any calls to unknown functions
 */
Oc = function() {
  const i = m(this, E, Dt).call(this);
  for (const e of i) {
    const n = e.getUnconnectedFunctionCalls();
    for (let s of n)
      for (let o of s[1])
        if (this.userDefinedFunctions.has(s[0])) {
          const a = this.userDefinedFunctions.get(s[0]);
          a.addObserver(o), o.setDataType(a.getReturnType());
        } else m(this, E, xc).call(this, s[0], e) ? o.convertToImportedFunction() : (o.setDataType(d.Unknown), O.symptoms.push(O.createStatementSymptom(I.UnknownFunction, [o], 0, 0)));
  }
}, /**
 * Helper method to handle any calls to unknown functions
 */
Tc = function() {
  const i = m(this, E, Dt).call(this);
  for (const e of i) {
    const n = e.getUnconnectedMethodCalls();
    for (let s of n)
      for (let o of s[1]) {
        const a = o.getObject();
        let h;
        if (a.getDataType().isCustom)
          a.getDataType().methods.has(s[0]) && (h = a.getDataType().methods.get(s[0]));
        else
          for (const p of this.userDefinedClasses.values())
            if (p.methods.has(s[0])) {
              h = p.methods.get(s[0]);
              break;
            }
        h && (h.addObserver(o), o.setDataType(h.getReturnType()));
      }
  }
}, /**
 * Helper method to check if an unknown function is an imported entity
 * @param {String} funcName 
 * @param {ScopeBlock} scopeBlock 
 * @returns {Boolean}
 */
xc = function(i, e) {
  let n = e;
  for (; n !== void 0; ) {
    if (n.getModuleMap().has(i) || Array.from(n.getModuleMap().values()).filter((s) => s.hasDirectImport(i)).length > 0)
      return !0;
    n = n.getParentBlock() !== void 0 ? n.getParentBlock().getScope() : void 0;
  }
  return !1;
}, /**
 * Gets the names of variables in the current block that have names matching Python
 * type classes.
 * @param {StatementBlock} currentBlock 
 * @returns {String[]}
 */
ho = function(i) {
  const e = /* @__PURE__ */ new Set(["int", "float", "bool", "str", "list", "set", "dict"]);
  let n = Array.from(i.getVariableMap().keys()).filter((o) => e.has(o)), s = i;
  for (; s.getBlockEntity() !== t.DocumentDefinition; )
    s = s.getParentBlock().getScope(), n = n.concat(Array.from(s.getVariableMap().keys()).filter((o) => e.has(o)));
  return n;
}, /**
 * Adds the most recent statement to the current block or creates a new block as needed
 * @param {Statement} lastStatement
 * @param {StatementBlock} currentBlock
 * @returns {StatementBlock}
 */
fo = function(i, e) {
  if (!i.isBlank()) {
    const n = i.getFirstExpression(), s = i.getIndentation(), o = n.getStartLineNumber();
    let a;
    const h = m(this, E, Ac).call(this, i);
    e.isScopeBlock() || (a = e.getScope().getStatementToUpdate(s, o)), n.isOneOf([t.FunctionDefinitionStatement, t.MethodDefinitionStatement]) ? (e = m(this, E, kc).call(this, e, i, s), n.is(t.MethodDefinitionStatement) && m(this, E, Dc).call(this, e, n)) : n.is(t.ClassDefinitionStatement) ? e = m(this, E, Pc).call(this, e, i, s) : n.is(c.BlockDefinitionStatement) && !n.is(t.TernaryStatement) ? e = m(this, E, Bc).call(this, e, i, s, a) : a !== void 0 ? (e = m(this, E, on).call(this, s, e, o), a.addStatement(i, e)) : (e = m(this, E, on).call(this, s, e, o), e.addStatement(i)), h.length > 0 && m(this, E, Mc).call(this, h, e);
  }
  return e;
}, Mc = function(i, e) {
  for (let n of i) {
    const s = new Yu(e, n);
    e.addChildBlock(s);
  }
}, /**
 * Helper method to connect a method to its containing class
 * @param {FunctionBlock} methodBlock 
 * @param {MethodDefinitionStatement} methodDefinition
 */
Dc = function(i, e) {
  const n = i.getParentBlock();
  if (n && n.getBlockEntity() === t.ClassDefinition) {
    const s = n.getClassType(), o = e.getMethodNameExpression();
    o.setContainingClass(s), s.methods.set(o.getTextValue(), o);
  }
}, /**
 * Helper method that finds any list comprehensions within the statement. The list comprehensions
 * are copied and returned as an array to be added to a new block. The original expressions are converted
 * to placeholder data. This is to avoid variables within the list comprehension being counted twice.
 * @param {Statement} statement 
 * @returns {ListComprehensionExpression[]}
 */
Ac = function(i) {
  const e = i.getExpressions();
  let n = [];
  for (const s of e) {
    const o = s.getExpressionsOfKind(t.ListComprehension);
    for (const a of o)
      n.push(a.copyAndConvertToPlaceholder());
  }
  return n;
}, /**
 * Helper method. Creates a block for a new branch
 * @param {StatementBlock} currentBlock 
 * @param {Statement} lastStatement 
 * @param {Number} statementIndent 
 * @param {BlockStatement} blockStatementToUpdate
 * @returns {StatementBlock}
 */
Bc = function(i, e, n, s) {
  const o = new Cd(e, i.getScope().getId()), a = new ar(i, o), h = m(this, E, on).call(this, n, i, e.getFirstLineNumber()), p = o.getFirstExpression().isOneOf([t.ElifDefinitionStatement, t.ElseDefinitionStatement]), w = o.getFirstExpression().is(t.ExceptDefinitionStatement);
  if (o.isBlockStatement() && (p || w)) {
    const S = s ? s.getStatements() : h.getStatements(), F = S[S.length - 1], N = p ? [t.IfDefinitionStatement, t.ElifDefinitionStatement, t.ElseDefinitionStatement] : [t.TryDefinitionStatement];
    if (F !== void 0 && F.isBlockStatement() && F.getFirstExpression().isOneOf(N)) {
      const L = h.getChildBlocks(), U = L[L.length - 1], x = U.getBlockEntity();
      if (p && (x === t.IfDefinition || x === t.ElifDefinition) || w && x === t.TryDefinition) {
        const ot = U.getSiblingConditionalBranches();
        for (const Us of ot)
          a.addSibling(Us), Us.addSibling(a);
        U.addSibling(a), a.addSibling(U);
      }
    }
  }
  return h.addChildBlock(a), s ? s.addStatement(o, a) : h.addStatement(o), a;
}, /**
 * Helper method. Creates a block for a new function
 * @param {StatementBlock} currentBlock 
 * @param {Statement} lastStatement 
 * @param {Number} statementIndent 
 * @returns {StatementBlock}
 */
kc = function(i, e, n) {
  i = m(this, E, on).call(this, n, i, e.getFirstLineNumber());
  const s = new Pi(i, e);
  return i.addChildBlock(s), s;
}, /**
 * Helper method. Creates a block for a new class
 * @param {StatementBlock} currentBlock 
 * @param {Statement} lastStatement 
 * @param {Number} statementIndent 
 * @returns {StatementBlock}
 */
Pc = function(i, e, n) {
  i = m(this, E, on).call(this, n, i, e.getFirstLineNumber());
  const s = new Zu(i, e);
  return i.addChildBlock(s), s;
}, /**
 * 
 * @param {Number} statementIndent 
 * @param {StatementBlock} currentBlock 
 * @param {Number} statementStartLine 
 * @returns 
 */
on = function(i, e, n) {
  let s = e.getIndentation();
  const o = e.getStatements();
  if (o.length > 0 && o[o.length - 1].getLastLineNumber() === n)
    return e;
  for (; e.getBlockEntity() !== t.DocumentDefinition && i <= s; ) {
    let a = e.getParentBlock();
    e = a !== void 0 ? a : u(this, ye), s = e.getIndentation();
  }
  return e;
};
class _ {
  constructor(i, e, n, s, o) {
    l(this, "type");
    l(this, "docIndex");
    l(this, "affectedText");
    l(this, "firstMessage");
    l(this, "extendedFeedbackParams");
    for (this.type = i, this.docIndex = e, this.affectedText = n, this.firstMessage = s, this.extendedFeedbackParams = o; this.extendedFeedbackParams.includes("+"); )
      this.extendedFeedbackParams = this.extendedFeedbackParams.replace("+", "%2B");
    this.extendedFeedbackParams = encodeURI(this.extendedFeedbackParams);
  }
  static notImplemented() {
    return new _("Invalid", -1, "N/A", "No feedback", "");
  }
  toJSON() {
    return {
      type: this.type,
      docIndex: this.docIndex,
      affectedText: this.affectedText,
      firstMessage: this.firstMessage,
      extendedFeedbackParams: this.extendedFeedbackParams
    };
  }
}
const Ch = (g) => g.hasOwnProperty("reason") && g.reason.hasOwnProperty("contributingSymptoms") && g.reason.contributingSymptoms.length > 0, dt = (g, i) => g.type === i, Oh = (g) => {
  const i = [];
  try {
    for (const e of g.occurrences)
      if (Ch(e))
        switch (g.type) {
          case R.AssignCompares.name:
            i.push(Th(g.type, e));
            break;
          case R.ColonAssigns.name:
            i.push(xh(g.type, e));
            break;
          case R.CompareMultipleValuesWithOr.name:
            i.push(Mh(g.type, e));
            break;
          case R.ComparisonWithBoolLiteral.name:
            i.push(Dh(g.type, e));
            break;
          case R.DeferredReturn.name:
            i.push(Bh(g.type, e));
            break;
          case R.ForLoopVarIsLocal.name:
          // Warning
          case R.IteratorInitialisedOutsideLoop.name:
            i.push(kh(g.type, e));
            break;
          case R.FunctionCallsNoParentheses.name:
          // Warning
          case R.ParenthesesOnlyIfArgument.name:
            i.push(Vh(g.type, e));
            break;
          case R.IterationRequiresTwoLoops.name:
            i.push(Lh(g.type, e));
            break;
          case R.LocalVariablesAreGlobal.name:
            i.push(vh(g.type, e));
            break;
          case R.LoopCounter.name:
            i.push(Ph(g.type, e));
            break;
          case R.MapToBooleanWithIf.name:
            i.push(Rh(g.type, e));
            break;
          case R.MapToBooleanWithTernaryOperator.name:
            i.push(Eh(g.type, e));
            break;
          case R.ParameterMustBeAssignedInFunction.name:
            i.push(Uh(g.type, e));
            break;
          case R.PrintSameAsReturn.name:
            i.push(Gh(g.type, e));
            break;
          case R.ReturnCall.name:
            i.push(Jh(g.type, e));
            break;
          case R.ReturnWaitsForLoop.name:
            i.push(jh(g.type, e));
            break;
          case R.SequentialIfsAreExclusive.name:
            i.push(Ah(g.type, e));
            break;
          case R.StringMethodsModifyTheString.name:
            i.push($h(g.type, e));
            break;
          case R.TypeConversionModifiesArgument.name:
            i.push(Kh(g.type, e));
            break;
          case R.TypeMustBeSpecified.name:
            i.push(Wh(g.type, e));
            break;
          case R.UnusedReturn.name:
            i.push(qh(g.type, e));
            break;
          case R.WhileSameAsIf.name:
            i.push(Hh(g.type, e));
            break;
          default:
            console.log("Not implemented!", g.type);
        }
  } catch (e) {
    console.log(e);
  }
  return i;
}, re = (g, i) => `?miscon=${g}&lineNumber=${i.line + 1}`, Th = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "Should this = be == ?", a = `${re(g, i)}&text=${s}&parentText=${e.parentText}`;
  return new _(g, n, s, o, a);
}, xh = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "Should this : be = ?", a = `${re(g, i)}&text=${s}&variableName=${e.before.value}&assignedValue=${e.after.value}`;
  return new _(g, n, s, o, a);
}, Mh = (g, i) => {
  const e = "NA", n = i.docIndex, s = i.reason.contributingSymptoms[0].text ? i.reason.contributingSymptoms[0].text : e, o = i.reason.contributingSymptoms[0].completeBooleanExpression ? `${i.reason.contributingSymptoms[0].completeBooleanExpression} will always be True` : "This boolean expression will always be True";
  let a = e, h = e, p = e;
  const w = [], S = [], F = [], N = [], L = [];
  for (const x of i.reason.contributingSymptoms)
    dt(x, I.NaturalLanguageBoolean.name) && (x.completeBooleanExpression && (a = x.completeBooleanExpression), x.parentText && (h = x.parentText), x.parentEntity && (p = x.parentEntity), x.rightSideEntity && (x.rightSideEntity === t.ComparisonExpression.name && (w.length === 0 || w[0] !== x.rightSideText) ? w.unshift(x.rightSideText) : x.rightSideEntity !== t.BooleanExpression.name && (S.length === 0 || S[0] !== x.rightSideText) && (S.unshift(x.rightSideText), N.unshift(x.rightSideEntity), F.unshift(x.rightSideType))), x.leftSideEntity && (x.leftSideEntity === t.ComparisonExpression.name ? w.unshift(x.leftSideText) : x.leftSideEntity !== t.BooleanExpression.name && (S.unshift(x.leftSideText), N.unshift(x.leftSideEntity), F.unshift(x.leftSideType))), L.unshift(x.operator));
  const U = `${re(g, i)}&booleanExpressionText=${a}&parentText=${h}&parentEntity=${p}&${w.map((x) => "comparisonText=" + x).join("&")}&${S.map((x) => "otherText=" + x).join("&")}&${N.map((x) => "otherEntity=" + x).join("&")}&${F.map((x) => "otherType=" + x).join("&")}&${L.map((x) => "operator=" + x).join("&")}}`;
  return new _(g, n, s, o, U);
}, Dh = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = e.boolValue, a = e.boolLiteral, h = a === "True" ? `${o} is boolean so == True is not needed` : `${s} is the same as not ${o}`, p = `${re(g, i)}&text=${s}&boolValue=${o}&boolLiteral=${a}`;
  return new _(g, n, s, h, p);
}, Ah = (g, i) => {
  const e = i.docIndex;
  let n = i.reason.contributingSymptoms[0].text;
  const s = /* @__PURE__ */ new Set();
  for (const p of i.reason.contributingSymptoms) {
    if (!dt(p, I.SequentialIfs.name))
      continue;
    const w = p.branchMatches.flat();
    w.forEach((x) => {
      s.add(x.lineNum + 1);
    });
    const S = w[0].docIndex - p.docIndex, F = S, N = w[w.length - 1].docIndex - w[0].docIndex + S, L = n.substring(N).indexOf(`
`), U = L > -1 ? N + L : n.length;
    n = n.substring(F, U);
  }
  const a = `Should this sequence of if statements be if${Array(s.size - 1).fill("-elif").join("")} instead?`, h = `${re(g, i)}&fullText=${n}&${[...s].map((p) => "statementLine=" + p).join("&")}`;
  return new _(g, e, n, a, h);
}, Bh = (g, i) => {
  for (const e of i.reason.contributingSymptoms)
    if (dt(e, I.UnreachableExit.name) && e.exitKeyword === "return") {
      const n = e.docIndex, s = e.text, o = "This code will never execute", a = `${re(g, i)}&exitKeyword=${e.exitKeyword}`;
      return new _(g, n, s, o, a);
    }
  return _.notImplemented();
}, kh = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = e.text, s = e.usageText, o = e.overwrittenVar[e.overwrittenVar.length - 1].lineNum + 1, a = e.prevUsageIsDefinition, h = a ? `${n} does not need to be defined if it is only used in the for loop on line ${e.line + 1}` : `This for loop changes the value of an existing variable, ${n}`, p = a ? e.overwrittenVar[0].docIndex : i.docIndex, w = `${re(g, i)}&loopVariable=${n}&forDefinition=${s}&overwrittenVarLine=${o}&overwrittenIsDefinition=${a}`;
  return new _(g, p, n, h, w);
}, Ph = (g, i) => {
  const e = i.docIndex, n = i.reason.contributingSymptoms[0], s = n.text, o = `This value of ${s} will be ignored by the next loop iteration`, a = `${re(g, i)}&loopVarName=${s}&definitionText=${n.definitionText}&loopVarTypeAtDefinition=${n.loopVarTypeAtDefinition}&modificationText=${n.modificationText}`;
  return new _(g, e, s, o, a);
}, Vh = (g, i) => {
  let e = i.docIndex, n = `${re(g, i)}`, s = "";
  const o = i.reason.contributingSymptoms;
  if (o.length === 2) {
    const h = dt(o[0], I.UndefinedVariable.name) ? o[0] : o[1], p = dt(o[1], I.VariableWithSameNameAsFunction.name) ? o[1] : o[0];
    dt(h, I.UndefinedVariable.name) && dt(p, I.VariableWithSameNameAsFunction.name) && (s = p.text, e = h.docIndex, n = `${n}&funcName=${s}&funcType=${p.funcType}&funcExpectedArgs=${p.numArgsExpected}&matchesUndefinedVarOnLine=${h.line + 1}`);
  } else o.length === 1 && dt(o[0], I.VariableWithSameNameAsFunction.name) && (s = o[0].text, e = o[0].docIndex, n = `${n}&funcName=${s}&funcType=${o[0].funcType}&funcExpectedArgs=${o[0].numArgsExpected}`);
  const a = `Did you forget () after ${s}?`;
  return new _(g, e, s, a, n);
}, Lh = (g, i) => {
  const e = "This while loop might not be needed", n = i.reason.contributingSymptoms, s = n[0].type === I.LoopVarNotModified.name ? n[0] : n[1], o = n[0].type === I.LoopVarModifiedInChildLoop.name ? n[0] : n[1], a = s.text, h = s.docIndex, p = `${re(g, i)}&outerLoopText=${a}&outerLoopVariable=${o.text}${o.modifiedIn.map((w) => `&modifiedInType=${w.loopType}&modifiedInStartLine=${w.startLine + 1}`)}`;
  return new _(g, h, a, e, p);
}, vh = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = `${s} is undefined`;
  let a = `${re(g, i)}&text=${s}`;
  return e.hasOwnProperty("localVariables") && (a = `${a}${e.localVariables.map((h) => `&localScope=${h.scope}${h.hasOwnProperty("functionName") ? "&localFunction=" + h.functionName : "&localFunction=NA"}`).join()}`), new _(g, n, s, o, a);
}, Rh = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "This conditional could be shortened to one line";
  let a = `${re(g, i)}&text=${e.text}&form=${e.form}`;
  return e.form === "valueAssigned" && (a = `${a}&variableAssigned=${e.variableAssigned}`), e.condition && e.condition.length > 0 && (a = `${a}&condition=${e.condition}`), new _(g, n, s, o, a);
}, Eh = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "This ternary is not needed", a = `${re(g, i)}&text=${e.text}&boolExp=${e.boolValue}&valueIfTrue=${e.boolLiteralIfTrue}&valueIfFalse=${e.boolLiteralIfFalse}&parentText=${e.parentText}&parentEntity=${e.parentEntity}`;
  return new _(g, n, s, o, a);
}, Uh = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "This statement replaces the value of an argument passed to the function";
  let a = `${re(g, i)}&paramName=${s}`;
  return e.functionBlock !== "" && (a = `${a}&functionName=${e.functionBlock}`), new _(g, n, s, o, a);
}, Gh = (g, i) => {
  const e = i.reason.contributingSymptoms.filter((o) => o.type === I.AssignedNone.name), n = i.reason.contributingSymptoms.filter((o) => I.UnusedReturn);
  let s = `${re(g, i)}`;
  if (e.length > 0) {
    const o = e[0], a = o.docIndex, h = o.expressionNoValue.value, p = `${o.expressionNoValue.value} has no value`;
    if (s = `${s}&variant=AssignedNoReturn&expressionNoValueType=${o.expressionNoValue.type}&expressionNoValueUsage=${o.usage}&expressionNoValueText=${o.expressionNoValue.value}&expressionNoValueTarget=${o.target}`, o.expressionNoValue.type === "userDefinedFunction") {
      const w = i.reason.contributingSymptoms.filter((F) => F.type === I.FunctionPrints.name), S = w.length === 1 ? w[0] : void 0;
      S && S.printLines.filter((N) => N.isEndOfExitBranch).length > 0 && !S.functionReturns && (s = `${s}&isFuncPrintNoReturn=true`);
    }
    return new _(g, a, h, p, s);
  } else if (n.length > 0) {
    const o = n[0], a = o.docIndex, h = o.unusedFunc.value, p = `The value returned by ${h}() is not used`;
    if (s = `${s}&variant=UnusedReturn&expressionUnusedType=${o.unusedFunc.type}&expressionUnusedText=${o.unusedFunc.value}`, o.unusedFunc.type === "userDefinedFunction") {
      const w = i.reason.contributingSymptoms.filter((F) => F.type === I.FunctionPrints.name), S = w.length === 1 ? w[0] : void 0;
      S && S.text === o.unusedFunc.value && (s = `${s}&isFuncPrintsAndReturns=true`);
    }
    return new _(g, a, h, p, s);
  }
  return _.notImplemented();
}, Jh = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = `The () around ${e.textInParentheses} are not needed`, a = `${re(g, i)}&text=${s}&returnValueType=${e.contents}&returnValueText=${e.textInParentheses}`;
  return new _(g, n, s, o, a);
}, $h = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = e.unusedFunc.value, a = e.unusedFunc.returnType, h = new RegExp("[ ]*.[ ]*" + o), p = s.split(h)[0], w = `${o}() will not change ${p}`, S = `${re(g, i)}&text=${s}&unusedMethod=${o}&unusedReturnType=${a}&stringValue=${p}`;
  return new _(g, n, s, w, S);
}, Kh = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = e.unusedFunc.value, a = e.unusedFunc.returnType, h = s.substring(s.indexOf("(") + 1, s.lastIndexOf(")")), p = `${o}() will not change ${h}`, w = `${re(g, i)}&text=${s}&typeFunction=${o}&returnType=${a}&argument=${h}`;
  return new _(g, n, s, p, w);
}, Wh = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = "This type conversion is not needed", a = `${re(g, i)}&text=${s}&argType=${e.argType}&convertedType=${e.convertedType}&convertedValue=${e.convertedValue}`;
  return new _(g, n, s, o, a);
}, qh = (g, i) => {
  const e = i.reason.contributingSymptoms[0], n = i.docIndex, s = e.text, o = e.unusedFunc.returnType, a = o !== d.Unknown.name && o !== d.Invalid.name && o !== d.NA.name && o !== d.NotParsed.name, h = a ? `The ${o} returned by ${s} is not used` : `The value returned by ${s} is not used`, p = `${re(g, i)}&expressionUnusedType=${e.unusedFunc.type}&expressionUnusedText=${e.unusedFunc.value}${a ? "&returnType=" + o : ""}`;
  return new _(g, n, s, h, p);
}, jh = (g, i) => {
  const e = i.docIndex, n = i.reason.contributingSymptoms[0], s = n.text, o = n.loopType, a = n.exitTypes.length, h = n.exitLevel, p = `This ${o} loop always ends the first time it runs because of where return is used`, w = `${re(g, i)}&text=${s}&loopType=${o}&returnCount=${a}&exitLevel=${h}`;
  return new _(g, e, s, p, w);
}, Hh = (g, i) => {
  const e = i.docIndex, n = i.reason.contributingSymptoms, s = n.filter((h) => h.type === I.LoopReturn.name), o = n.filter((h) => h.type === I.LoopVarNotModified.name), a = re(g, i);
  if (o.length === 1) {
    const h = o[0].text, p = "Could this while loop be an if statement?", w = `${a}&variant=${o[0].type}&definitionText=${h}&loopText=${o[0].loopText}${o[0].unmodifiedVars.map((S) => `&loopVar=${S}`)}${s.map((S) => `&earlyExitLine=${S.line + 1}&earlyExitText=${S.text}`)}`;
    return new _(g, e, h, p, w);
  }
  return _.notImplemented();
}, Vc = (g, i) => g.getLineNumber() === i.getLineNumber() && g.getID() === i.getID() ? 0 : g.getLineNumber() < i.getLineNumber() || g.getLineNumber() === i.getLineNumber() && g.getID() < i.getID() ? -1 : 1, zh = (g, {
  showSymptoms: i = !0,
  showMisconceptions: e = !0,
  showCounterSymptoms: n = !1,
  showConcepts: s = !1,
  showBlocks: o = !1,
  showVariables: a = !1,
  showFunctions: h = !1,
  showClasses: p = !1,
  showTree: w = !1,
  showGraph: S = !1,
  showErrorDetail: F = !1
} = {}) => {
  const N = [];
  try {
    N.push("Sending to DocInfo");
    let L = new Nh(g);
    N.push("Getting symptom information");
    const U = i ? Qh(L) : [];
    N.push("Getting counter symptom information");
    const x = n ? Zh(L) : [];
    N.push("Getting variable information");
    const ot = a ? ef(L) : [];
    N.push("Getting function information");
    const Us = h ? tf(L) : [];
    N.push("Getting class information");
    const Lc = p ? nf(L) : [];
    N.push("Getting misconception information");
    const vc = e ? Xh(L) : [];
    N.push("Getting concept information");
    const Rc = s ? Yh(L) : [];
    N.push("Getting block information");
    const Mo = o ? _h(L) : [], wi = {
      misconceptions: vc,
      concepts: Rc,
      symptoms: U,
      counterSymptoms: x,
      blocks: Mo,
      //blocks.toJSON(),
      variables: ot,
      functions: Us,
      classes: Lc
    };
    if (w) {
      const Si = Mo.toTree();
      wi.tree = Si;
    }
    if (S) {
      const Si = L.getGraph();
      wi.graph = Si.toJSON();
    }
    return wi;
  } catch (L) {
    console.log("Unable to parse", L);
    const U = {
      misconceptions: [],
      concepts: [],
      symptoms: [],
      counterSymptoms: [],
      blocks: [],
      variables: [],
      functions: [],
      classes: [],
      error: `Unable to parse! ${L.toString()}`
    };
    return N.push(L.toString()), F && (U.errorDetail = N.join(`
`)), U;
  }
}, Qh = (g) => g.getSymptoms().sort(Vc).map((i) => {
  try {
    return i.toJSON();
  } catch (e) {
    return {
      error: "Could not process symptom",
      msg: e.toString()
    };
  }
}), Xh = (g) => Array.from(g.getMisconceptions().values()).map((i) => {
  try {
    return i.toJSON();
  } catch (e) {
    return {
      error: "Could not process misconception",
      msg: e.toString()
    };
  }
}), Zh = (g) => g.getCounterSymptoms().sort(Vc).map((i) => {
  try {
    return i.toJSON();
  } catch (e) {
    return {
      error: "Could not process counter symptom",
      msg: e.toString()
    };
  }
}), Yh = (g) => Array.from(g.getConcepts().values()).map((i) => {
  try {
    return i.toJSON();
  } catch (e) {
    return {
      error: "Could not process concept",
      msg: e.toString()
    };
  }
}), _h = (g) => {
  try {
    return g.getBlocks().toJSON();
  } catch {
    return [];
  }
}, ef = (g) => Array.from(g.getVariables().values()).flat().map((i) => {
  try {
    return i.toJSON();
  } catch (e) {
    return {
      error: "Could not process variable",
      msg: e.toString()
    };
  }
}), tf = (g) => Array.from(g.getUserDefinedFunctions().values()).filter((i) => i.is(t.FunctionName)).map((i) => {
  try {
    return i.toJSON();
  } catch (e) {
    return {
      error: "Could not process function",
      msg: e.toString()
    };
  }
}), nf = (g) => Array.from(g.getUserDefinedClasses().values()).map((i) => {
  try {
    return i.toJSON();
  } catch (e) {
    return {
      error: "Could not process class",
      msg: e.toString()
    };
  }
}), of = () => {
  let g = {};
  for (let i in I)
    g[I[i].name] = I[i].description;
  return g;
}, rf = () => {
  let g = {};
  for (let i in B)
    g[B[i].name] = B[i].description;
  return g;
}, af = () => {
  let g = {};
  for (let i in R)
    g[R[i].name] = R[i].description;
  return g;
}, lf = () => {
  let g = {};
  for (let i in oe)
    g[oe[i].name] = oe[i].description;
  return g;
}, cf = (g, i = !1, e = {}) => {
  const n = zh(g, e), s = {};
  if (i && (s.parse = n), s.feedback = [], n.hasOwnProperty("misconceptions"))
    for (const o of n.misconceptions)
      o.hasOwnProperty("type") && s.feedback.push(...Oh(o).map((a) => a.toJSON()));
  return s;
};
export {
  lf as conceptInfo,
  rf as counterSymptomInfo,
  cf as feedback,
  af as misconceptionInfo,
  zh as parse,
  of as symptomInfo
};
