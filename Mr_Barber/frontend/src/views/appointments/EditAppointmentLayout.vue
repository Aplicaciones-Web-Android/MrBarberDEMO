<script setup="ts">
import { RouterLink } from 'vue-router';

    import { onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import AppointmentAPI from '../../api/AppointmentAPI';
    import { useAppointmentsStore  } from '../../stores/appointments';


    const appointments = useAppointmentsStore()
    const route = useRoute()
    const router = useRouter()

    const { id } = route.params

    onMounted(async () => {
        try {
            const { data } = await AppointmentAPI.getById(id)
            appointments.setSelectedAppointment(data)
        } catch (error) {
            router.push({name: 'my-appointments'})
        }
    })
</script>

class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-yellow-100 hover:text-yellow-800"
:class="route.name === 'appointment-details' ? 'bg-yellow-800 text-white' : 'bg-white'" :style="{ color: route.name === 'appointment-details' ? '#D2AC67' : '#D2AC67'}"

<template>
    <nav class="my-5 flex gap-3">
        <RouterLink
            :to="{name: 'edit-appointment'}"
            class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-yellow-100 hover:text-yellow-800 "
            :class="route.name === 'edit-appointment' ? 'bg-yellow-800 text-white' : 'bg-white'" :style="{ color: route.name === 'new-appointment' ? '#D2AC67' : '#D2AC67' }"
        >
            Servicios
        </RouterLink>

        <RouterLink
            :to="{name: 'edit-appointment-details'}"
            class="flex-1 text-center p-3 uppercase font-extrabold hover:bg-yellow-100 hover:text-yellow-800"
            :class="route.name === 'edit-appointment-details' ? 'bg-yellow-800 text-white' : 'bg-white'" :style="{ color: route.name === 'appointment-details' ? '#D2AC67' : '#D2AC67'}"
        >
            Cita y Resumen
        </RouterLink>
    </nav>
    <div class="space-y-5">
        <RouterView />
    </div>
</template>

