<template>
    <div
        :class="[
            { active: active },
            { disabled: disabled },
        ]"
    >
        <label v-if="label" :for="`meps-select-${label}`">{{
            label
        }}</label>
          <select
              :id="`meps-select-${label}`"
              v-model="selected"
              tabindex="-1"
              :disabled="disabled"
          >
              <option
                  v-for="(option, index) in options"
                  :key="index"
                  selected
                  :value="option.value"
              >
                  {{ option.name }}
              </option>
          </select>
        <span v-if="hint" >{{ hint }} {{ selected }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

interface SelectOption {
    name: String;
    value: String;
    id: String;
}

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    size: {
        type: String,
        required: false,
        default: 'sm',
    },
    active: {
        type: Boolean,
    },
    disabled: {
        type: Boolean,
    },
    label: {
        type: String,
        required: false,
        default: null,
    },
    hint: {
        type: String,
        required: false,
        default: null,
    },
    options: {
        type: Array as PropType<SelectOption[]>,
        required: false,
        default: () => [],
    },
    modelValue: {
        type: Object as PropType<SelectOption>,
        required: false,
        default: null,
    },
});

const selected = computed({
    get() {
        return props.modelValue;
    },
    set(selected) {
        emit('update:modelValue', selected);
    },
});
</script>
