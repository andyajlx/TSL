<template>
    <div>
        <h2>63a Three Phase</h2>
        <!-- Display four loads with a collapsed border table -->
        <div class="flex align-items-center justify-content-center p-2 gap-2">
            <table class="w-full border-collapse surface-border">
                <tr>
                    <td class="bg-brown w-3rem text-white text-center border border-1 surface-border">L1</td>
                    <td class="px-2 text-center border border-1 surface-border">{{ loadsToDisplay[0] }}a</td>
                </tr>
                <tr>
                    <td class="bg-black w-3rem text-white text-center border border-1 surface-border">L2</td>
                    <td class="px-2 text-center border border-1 surface-border">{{ loadsToDisplay[1] }}a</td>
                </tr>
                <tr>
                    <td class="bg-gray-700 w-3rem text-white text-center border border-1 surface-border">L3</td>
                    <td class="px-2 text-center border border-1 surface-border">{{ loadsToDisplay[2] }}a</td>
                </tr>
                <tr>
                    <td class="bg-blue-500 w-3rem text-white text-center border border-1 surface-border">L4</td>
                    <td class="px-2 text-center border border-1 surface-border">{{ loadsToDisplay[3] }}a</td>
                </tr>
            </table>
        </div>
        <div class="flex align-items-center justify-content-center mt-2">
            <Image :src="sixtyThreeAmp" alt="Image" width="250" />
        </div>
    </div>
</template>

<script setup>
import sixtyThreeAmp from '../../assets/Distro/63a.png';
import Image from 'primevue/image';
import { defineProps, computed } from 'vue';

// Define props for the component
const props = defineProps({
    loads: Array, // Array containing all load objects
    id: Number,   // The ID of the selected instance
});

console.log('Received loads:', props.loads, 'ID:', props.id);

// Compute the selected load based on the id prop
const selectedLoad = computed(() => {
    // Find the load value corresponding to the provided ID
    const loadItem = props.loads.find(item => item.Id === props.id);
    // Return the Loads array if it exists, otherwise return an empty array
    return loadItem && Array.isArray(loadItem.Loads) ? loadItem.Loads : [];
});

// Limit to the first four values to display four loads
const loadsToDisplay = computed(() => selectedLoad.value.slice(0, 4));
</script>

<style scoped>
.led-on {
    background-color: green;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.led-off {
    background-color: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

/* Custom brown color for Live 1 */
.bg-brown {
    background-color: #964B00;
    /* A common brown hex code */
}

.bg-black {
    background-color: #000000;
    /* A common brown hex code */
}

.border-collapse {
    border-collapse: collapse;
}

.border {
    border: 1px solid #000;
    /* Black border for cells */
}
</style>
