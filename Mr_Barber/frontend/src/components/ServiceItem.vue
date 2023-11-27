<script setup>
    import { formatCurrency } from '../helpers'
    import { useAppointmentsStore } from '../stores/appointments'

    const appointments = useAppointmentsStore()

    defineProps({
        service: {
            type: Object
        }
    })
</script>
bg-yellow-800 text-white' : 'bg-white'" :style="{ color: route.name === 'appointment-details' ? '#D2AC67' : '#D2AC67'}"
<template>
    <div
        class="p-5 space-y-5 rounded-lg cursor-pointer"
        :class="appointments.isServiceSelected(service._id) ? 'bg-brown1 text-white' : 'bg-white text-brown1'"
        @click="appointments.onServiceSelected(service)"
    >
        <p class="text-2xl font-light">{{ service.name }}</p>
        <p 
            class="text-4xl font-black"
            :class="appointments.isServiceSelected(service._id) ? 'text-yellow-100' : ''" :style="{ color: appointments.isServiceSelected(service._id) ? '' : '#D2AC67' }"
        >{{ formatCurrency( service.price ) }}</p>
    </div>
</template>