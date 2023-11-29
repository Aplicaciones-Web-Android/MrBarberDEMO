<script setup="ts">
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
            class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-FEF9C2 hover:text-d2ac67 "
            :class="route.name === 'new-appointment' ? 'bg-brown1 text-white' : 'bg-white text-brown1'"
        >
            Servicios
        </RouterLink>

        <RouterLink
            :to="{name: 'appointment-details'}"
            class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-FEF9C2 hover:text-white"
            :class="route.name === 'appointment-details' ? 'bg-brown1 text-white' : 'bg-white text-brown1'" 
        >
            Cita y Resumen
        </RouterLink>
    </nav>
    <div class="space-y-5">
        <RouterView />
    </div>
</template>

