export const id = "EVENT_ARRAY_INITIALIZE_ARRAY";
export const name = "Initialize Array";
export const groups = ["Array Functions"];

export const autoLabel = (fetchArg) => {
  return `Initialize Array`;
};

export const fields = [
  {
    key: `input_size`,
    label: "Size",
    type: "value",
    width: "50%",
    defaultValue: {
      type: "number",
      value: 0,
    },
  },
  {
    key: `ram_data_ptr`,
    label: "Starting Array Variable",
    type: "variable",
	defaultValue: {
	  variable: "LAST_VARIABLE",
	},
  },
];

export const compile = (input, helpers) => {
  const { _callNative, _stackPushConst, _stackPush, _stackPop, _declareLocal, variableSetToScriptValue, getVariableAlias } = helpers;
  
  const tmp0 = _declareLocal("tmp_0", 1, true);
  variableSetToScriptValue(tmp0, input.input_size);
  const variableAlias = getVariableAlias(input.ram_data_ptr);
  
  _stackPush(tmp0);
  _stackPushConst(variableAlias);
    		
  _callNative("initialize_array");
  _stackPop(2);  
  
};