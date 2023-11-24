<script setup>
    import { displayDate } from '../helpers/date'
    import { formatCurrency } from '../helpers';
    import { useAppointmentsStore } from '../stores/appointments'
    const appointments = useAppointmentsStore()

    defineProps({
        appointment: {
            type: Object
        }
    })
</script>


<template>
    <div class="bg-white p-5 space-y-3 rounded-lg">
        <p class="text-yellow-800 font-black">
            Fecha: <span class="font-light"> {{ displayDate( appointment.date ) }} </span>
            Hora: <span class="font-light"> {{ appointment.time }} Horas.</span>
        </p>

        <p class="text-lg font-black" style="color: #D2AC67" >Servicios Solicitados en la cita</p>
        <div v-for="service in appointment.services">
            <p>{{ service.name }}</p>
            <p class="text-2xl font-black text-green-800">{{ formatCurrency( service.price ) }}</p>
        </div>

        <p class="text-2xl font-black text-right">
            Total a pagar: <span class="text-green-800"> {{ formatCurrency( appointment.totalAmount ) }} </span>
        </p>

        <div class="flex gap-2 items-center">
            <RouterLink
                :to="{name: 'edit-appointment', params: { id : appointment._id} }"
                class="bg-yellow-800 rounded-lg p-3 text-white text-sm uppercase font-black flex-1 md:flex-none"
            >
                Editar Cita
            </RouterLink>

            <button
                class="bg-red-600 rounded-lg p-3 text-white text-sm uppercase font-black flex-1 md:flex-none"
                @click="appointments.cancelAppointment(appointment._id)"
            >
                Cancelar Cita
            </button>
        </div>
    </div>
</template>

