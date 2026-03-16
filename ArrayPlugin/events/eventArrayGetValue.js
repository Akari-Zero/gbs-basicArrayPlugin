export const id = "EVENT_ARRAY_GET_VALUE";
export const name = "Get Value From Array to Variable";
export const groups = ["Array Functions"];

export const autoLabel = (fetchArg) => {
  return `Set Value to Index`;
};

export const fields = [
  {
    key: `array_data_ptr`,
    label: "Starting Array Variable",
    type: "variable",
	defaultValue: {
	  variable: "LAST_VARIABLE",
	},
  },
  {
    key: `input_index`,
    label: "Index",
    type: "value",
    defaultValue: {
      type: "number",
      value: 0,
    },
  },
  {
    key: `return_data_ptr`,
    label: "Variable to Store Value In",
    type: "variable",
	defaultValue: {
	  variable: "LAST_VARIABLE",
	},
  },
];

export const compile = (input, helpers) => {
  const { _callNative, _stackPushConst, _stackPush, _stackPop, _declareLocal, variableSetToScriptValue, getVariableAlias } = helpers;
  
  const tmp0 = _declareLocal("tmp_0", 1, true);
  variableSetToScriptValue(tmp0, input.input_index);
  const startArrayAlias = getVariableAlias(input.array_data_ptr);
  const returnVarAlias = getVariableAlias(input.return_data_ptr);
  
  _stackPush(tmp0);
  _stackPushConst(returnVarAlias);
  _stackPushConst(startArrayAlias);
    		
  _callNative("get_value_from_index");
  _stackPop(3);  
  
};