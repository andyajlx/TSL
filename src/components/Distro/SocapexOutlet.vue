<template>
    <div class="flex align-items-center justify-content-center">
        <div class="flex-column align-content-between">
            <!-- Load and LED indicators for the first 3 loads (left side) -->
            <div v-for="(load, index) in loadsLeft" :key="index">
                <div v-if="load > 0" class="led led-on flex align-items-center justify-content-center m-2"></div>
                <div v-else class="led led-off flex align-items-center justify-content-center m-2"></div>

            </div>
        </div>

        <div>
            <Image :src="Soca" alt="Image" width="50" />
        </div>

        <div class="flex-column align-content-between">
            <!-- Load and LED indicators for the next 3 loads (right side) -->
            <div v-for="(load, index) in loadsRight" :key="index">
                <div v-if="load > 0" class="led led-on flex align-items-center justify-content-center m-2"></div>
                <div v-else class="led led-off flex align-items-center justify-content-center m-2"></div>

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
</script>

<style scoped>
.led-on {
    background-color: green;
    width: 7.5px;
    height: 7.5px;
    border-radius: 50%;
}

.led-off {
    background-color: red;
    width: 7.5px;
    height: 7.5px;
    border-radius: 50%;
}
</style>
