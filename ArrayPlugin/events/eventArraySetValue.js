export const id = "EVENT_ARRAY_SET_VALUE";
export const name = "Set Value to Index";
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
    key: `input_value`,
    label: "Value",
    type: "value",
    defaultValue: {
      type: "number",
      value: 0,
    },
  },
];

export const compile = (input, helpers) => {
  const { _callNative, _stackPushConst, _stackPush, _stackPop, _declareLocal, variableSetToScriptValue, getVariableAlias } = helpers;
  
  const tmp0 = _declareLocal("tmp_0", 1, true);
  const tmp1 = _declareLocal("tmp_1", 1, true);
  variableSetToScriptValue(tmp0, input.input_value);
  variableSetToScriptValue(tmp1, input.input_index);
  const variableAlias = getVariableAlias(input.array_data_ptr);
  
  
  _stackPush(tmp0);
  _stackPush(tmp1);
  _stackPushConst(variableAlias);
    		
  _callNative("set_value_to_index");
  _stackPop(3);  
  
};