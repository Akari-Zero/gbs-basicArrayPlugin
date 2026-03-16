#pragma bank 255

#include <gbdk/platform.h>
#include "system.h"
#include "vm.h"
#include "gbs_types.h"
#include "bankdata.h"

void initialize_array(SCRIPT_CTX * THIS) OLDCALL BANKED {
	int16_t * ram_data_ptr = &script_memory[*(int16_t*)VM_REF_TO_PTR(FN_ARG0)];
    int16_t const array_size = *(int16_t *) VM_REF_TO_PTR(FN_ARG1);
    
    for(int16_t i = 0; i < array_size; i++, ram_data_ptr++) {
		*ram_data_ptr = 0;
	}
}

void set_value_to_index(SCRIPT_CTX * THIS) OLDCALL BANKED {
	int16_t * const ram_data_ptr = &script_memory[*(int16_t*)VM_REF_TO_PTR(FN_ARG0)];
    int16_t const index = *(int16_t *) VM_REF_TO_PTR(FN_ARG1);
	int16_t const value = *(int16_t *) VM_REF_TO_PTR(FN_ARG2);
	
	*(&ram_data_ptr[index]) = value;
}

void get_value_from_index(SCRIPT_CTX * THIS) OLDCALL BANKED {
	int16_t * const array_data_ptr = &script_memory[*(int16_t*)VM_REF_TO_PTR(FN_ARG0)];
	int16_t * const ram_data_ptr = &script_memory[*(int16_t*)VM_REF_TO_PTR(FN_ARG1)];
    int16_t const index = *(int16_t *) VM_REF_TO_PTR(FN_ARG2);
	
	*ram_data_ptr = *(&array_data_ptr[index]);
}

void find_first_value_from_array(SCRIPT_CTX * THIS) OLDCALL BANKED {
	int16_t * array_data_ptr = &script_memory[*(int16_t*)VM_REF_TO_PTR(FN_ARG0)];
	int16_t * const ram_data_ptr = &script_memory[*(int16_t*)VM_REF_TO_PTR(FN_ARG1)];
	int16_t const search_value = *(int16_t *) VM_REF_TO_PTR(FN_ARG2);
	int16_t const size = *(int16_t *) VM_REF_TO_PTR(FN_ARG3);
	
	*ram_data_ptr = -1;
	for(int16_t i = 0; i < size; i++, array_data_ptr++) {
		if(*array_data_ptr == search_value) {
			*ram_data_ptr = i;
			break;
		}
	}
}