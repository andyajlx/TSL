import { defineStore } from 'pinia';
import { ref } from 'vue';

const generateRandomLoad = () => {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 17));
};

const generateLedArray = (loads) => {
    return loads.map(load => (load > 0 ? 1 : 0));
};

export const useDistroStore = defineStore('distroStore', () => {
    const items = ref([]);

    const initializeStore = () => {
        items.value = Array.from({ length: 20 }, (_, index) => {
            const id = index + 1;
            const loads = generateRandomLoad();
            const led = generateLedArray(loads);
            return {
                id,
                loads,
                led,
                isSelected: false,
            };
        });
    };

    const getSelectedLed = (id) => {
        const item = items.value.find(item => item.id === id);
        if (item) {
            return item.led;
        }
    }
    const setSelectedId = (id) => {
        const item = items.value.find(item => item.id === id);
        if (item) {
            item.isSelected = !item.isSelected;
        }
    };

    return {
        items,
        initializeStore,
        setSelectedId,
        getSelectedLed,
    };
});
