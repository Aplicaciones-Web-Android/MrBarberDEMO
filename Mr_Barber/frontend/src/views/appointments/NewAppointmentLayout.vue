<script setup>
import { RouterLink } from 'vue-router';

    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import { useAppointmentsStore } from '../../stores/appointments'

    const route = useRoute()
    const appointments = useAppointmentsStore()

    onMounted(() => {
        appointments.clearAppointmentData()
    })
</script>

bg-yellow-800 hover:text-white
<template>
    <nav class="my-5 flex gap-3">
        <RouterLink
            :to="{name: 'new-appointment'}"
            class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-yellow-100 hover:text-yellow-800 "
            :class="route.name === 'new-appointment' ? 'bg-yellow-800 text-white' : 'bg-white'" :style="{ color: route.name === 'new-appointment' ? '#D2AC67' : '#D2AC67' }"
        >
            Servicios
        </RouterLink>

        <RouterLink
            :to="{name: 'appointment-details'}"
            class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-yellow-100 hover:text-yellow-800"
            :class="route.name === 'appointment-details' ? 'bg-yellow-800 text-white' : 'bg-white'" :style="{ color: route.name === 'appointment-details' ? '#D2AC67' : '#D2AC67'}"
        >
            Cita y Resumen
        </RouterLink>
    </nav>
    <div class="space-y-5">
        <RouterView />
    </div>
</template>

