<template>
    <h3>Soca Way {{ props.id }}</h3>
    <div class="flex align-items-center justify-content-center">

        <div class="flex-column align-content-between">
            <!-- Load and LED indicators for the first 3 loads (left side) -->
            <div v-for="(load, index) in loadsLeft" :key="index">
                <div v-if="load > 0" class="led led-on flex align-items-center justify-content-center m-2"></div>
                <div v-else class="led led-off flex align-items-center justify-content-center m-2"></div>
                <div class="flex align-items-center justify-content-center m-2">Way {{ index + 1 }} : {{ load }}a
                </div>
            </div>
        </div>

        <div>
            <Image :src="Soca" alt="Image" width="250" />
        </div>

        <div class="flex-column align-content-between">
            <!-- Load and LED indicators for the next 3 loads (right side) -->
            <div v-for="(load, index) in loadsRight" :key="index">
                <div v-if="load > 0" class="led led-on flex align-items-center justify-content-center m-2"></div>
                <div v-else class="led led-off flex align-items-center justify-content-center m-2"></div>
                <div class="flex align-items-center justify-content-center m-2">Load {{ load }}a
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Soca from '../../assets/Distro/Soca.png';
import Image from 'primevue/image';
import { defineProps, computed } from 'vue';

const props = defineProps({
    loads: Array, // Array of all load objects (parsed from CSV in the parent)
    id: Number,   // The ID of the selected instance
});



// Find the selected object's loads based on the provided id
const selectedLoads = computed(() => {
    const selectedItem = props.loads.find((item) => item.Id === props.id);
    // Ensure that the selected item and its Loads array exist
    return selectedItem && Array.isArray(selectedItem.Loads) ? selectedItem.Loads : [];
});

// Split the loads into left and right groups
const loadsLeft = computed(() => selectedLoads.value.slice(0, 3));
const loadsRight = computed(() => selectedLoads.value.slice(3, 6));

console.log('Selected loads:', selectedLoads.value);
console.log('Loads Left:', loadsLeft.value);
console.log('Loads Right:', loadsRight.value);
</script>

<style scoped>
.led-on {
    background-color: green;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

.led-off {
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}
</style>
