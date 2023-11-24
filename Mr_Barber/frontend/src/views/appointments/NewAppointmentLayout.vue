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


<template>
    <nav class="my-5 flex gap-3">
        <RouterLink
            :to="{name: 'new-appointment'}"
<<<<<<< Updated upstream
            class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-blue-600 hover:text-white "
            :class="route.name === 'new-appointment' ? 'bg-blue-500 text-white'  :  'bg-white text-blue-500'"
=======
            class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-FEF9C2 hover:text-d2ac67 "
            :class="route.name === 'new-appointment' ? 'bg-brown1 text-white' : 'bg-white text-brown1'"
>>>>>>> Stashed changes
        >
            Servicios
        </RouterLink>

        <RouterLink
            :to="{name: 'appointment-details'}"
<<<<<<< Updated upstream
            class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-blue-600 hover:text-white"
            :class="route.name === 'appointment-details' ? 'bg-blue-500 text-white'  :  'bg-white text-blue-500'"
=======
            class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-FEF9C2 hover:text-white"
            :class="route.name === 'appointment-details' ? 'bg-brown1 text-white' : 'bg-white text-brown1'" 
>>>>>>> Stashed changes
        >
            Cita y Resumen
        </RouterLink>
    </nav>
    <div class="space-y-5">
        <RouterView />
    </div>
</template>

