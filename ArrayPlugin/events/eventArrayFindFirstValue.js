export const id = "EVENT_ARRAY_FIND_VALUE";
export const name = "Find First Index of Value";
export const groups = ["Array Functions"];

export const autoLabel = (fetchArg) => {
  return `Find First Index of Value`;
};

export const fields = [
  {
	label: "Returns the index of the first occurrence of a specific value in the array. Otherwise returns -1."  
  },
  {
    key: `array_data_ptr`,
    label: "Starting Array Variable",
    type: "variable",
	defaultValue: {
	  variable: "LAST_VARIABLE",
	},
  },
  {
    key: `input_size`,
    label: "Size",
    type: "value",
    defaultValue: {
      type: "number",
      value: 0,
    },
  },
  {
    key: `input_search`,
    label: "Find Value",
    type: "value",
    defaultValue: {
      type: "number",
      value: 0,
    },
  },
  {
    key: `return_data_ptr`,
    label: "Variable to Store Index In",
    type: "variable",
	defaultValue: {
	  variable: "LAST_VARIABLE",
	},
  },
];

export const compile = (input, helpers) => {
  const { _callNative, _stackPushConst, _stackPush, _stackPop, _declareLocal, variableSetToScriptValue, getVariableAlias } = helpers;
  
  const tmp0 = _declareLocal("tmp_0", 1, true);
  const tmp1 = _declareLocal("tmp_1", 1, true);
  variableSetToScriptValue(tmp0, input.input_size);
  variableSetToScriptValue(tmp1, input.input_search);
  const startArrayAlias = getVariableAlias(input.array_data_ptr);
  const returnVarAlias = getVariableAlias(input.return_data_ptr);
  
  _stackPush(tmp0);
  _stackPush(tmp1);
  _stackPushConst(returnVarAlias);
  _stackPushConst(startArrayAlias);
    		
  _callNative("find_first_value_from_array");
  _stackPop(4);  
  
};