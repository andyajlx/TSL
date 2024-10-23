<template>
    <div class="grid h-screen">
        <!-- Left column for the Distro component -->
        <div class="col-6 p-5 overflow-y-auto">
            <Distro @id="handleId" :distroData="csvData" />
        </div>

        <!-- Right column for the SocapexOutlet component -->
        <div class="col-6 flex align-items-center justify-content-center">
            <div v-if="!showSoca && !showSixteen && !showThirtyTwo && !showSixtyThree" class="text-center">
                <h1>Select an outlet</h1>
            </div>
            <div v-if="showSoca">
                <SocapexOutletLarge :loads="csvData" :id="id" />
            </div>

            <div v-if="showSixteen">
                <SixteenAmpLarge :loads="csvData" :id="id" />
            </div>

            <div v-if="showThirtyTwo">
                <ThirtyTwoAmpLarge :loads="csvData" :id="id" />
            </div>

            <div v-if="showSixtyThree">
                <SixtyThreeAmpLarge :loads="csvData" :id="id" />
            </div>
        </div>
    </div>
</template>


<script setup>
import Distro from '../components/Distro/DistroComponent.vue';
import SocapexOutletLarge from '@/components/Distro/SocapexOutletLarge.vue';
import SixteenAmpLarge from '@/components/Distro/SixteenAmpLarge.vue'
import ThirtyTwoAmpLarge from '@/components/Distro/ThirtyTwoAmpLarge.vue';
import SixtyThreeAmpLarge from '@/components/Distro/SixtyThreeAmpLarge.vue'

import { ref, onMounted } from 'vue';
import Papa from 'papaparse';

// Reference to store parsed CSV data
const csvData = ref([]);

// Reference for the selected ID and whether to show the Socapex outlet
const id = ref(null);
const showSoca = ref(false);
const showSixteen = ref(false)
const showThirtyTwo = ref(false)
const showSixtyThree = ref(false)



// Load the CSV when the component is mounted
onMounted(() => {
    loadCSV();
    console.log('the cee ess vee', csvData.value)
});


const loadCSV = async () => {
    try {
        // Load the CSV file
        const response = await fetch(new URL('@/assets/data.csv', import.meta.url));
        const csvText = await response.text();

        // Parse the CSV using PapaParse
        Papa.parse(csvText, {
            header: true,
            complete: (results) => {
                // Map over the parsed data and keep Loads as an array of strings
                csvData.value = results.data.map(item => {
                    try {
                        // Manually parse the Loads field as an array of strings to preserve the format
                        const parsedLoads = typeof item.Loads === 'string'
                            ? item.Loads.replace(/^\[|\]$/g, '') // Remove the brackets
                                .split(',') // Split into individual elements
                                .map(num => num.trim()) // Trim any whitespace
                            : item.Loads;

                        // Ensure Id is a number
                        const parsedId = typeof item.Id === 'string' ? parseInt(item.Id, 10) : item.Id;

                        // Log the parsed data to verify
                        //   console.log(`Parsed Loads for ID ${parsedId}:`, parsedLoads);

                        return {
                            Id: parsedId,
                            Loads: parsedLoads // Keep as strings for display
                        };
                    } catch (error) {
                        // console.error(`Failed to parse Loads for ID ${item.Id}:`, item.Loads, error);
                        return {
                            Id: parseInt(item.Id, 10) || item.Id,
                            Loads: [] // Default to an empty array if parsing fails
                        };
                    }
                });
                // console.log('Parsed CSV data:', csvData.value);
            },
            error: (error) => {
                console.error('Parsing Error:', error.message);
            }
        });
    } catch (error) {
        console.error('File Load Error:', error.message);
    }
};
// Handle ID selection from the Distro component
const handleId = (input) => {
    id.value = input;
    // Show SocapexOutlet only for IDs between 1 and 12
    showSoca.value = input >= 1 && input <= 12;
    showSixteen.value = input >= 13 && input <= 18;
    showThirtyTwo.value = input === 19
    showSixtyThree.value = input === 20
};
</script>

<style scoped>
.body {
    height: 90vh;
    width: 100vw;
}

.pos {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
}
</style>
