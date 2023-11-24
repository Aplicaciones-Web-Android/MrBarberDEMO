<script setup>
    import Appointment from '../../components/Appointment.vue'
    import { useUserStore } from '../../stores/user'
    const user = useUserStore()
</script>


<template>
<<<<<<< Updated upstream
    <h2 class="text-4xl font-extrabold text-white mt-10">Mis Citas</h2>
=======
    <h2 class="text-4xl font-extrabold mt-10 text-white">Mis Citas</h2>
>>>>>>> Stashed changes
    <p class="text-white text-lg mt-5">A continuación podrás administrar tus próximas citas</p>

    <p v-if="user.loading" class="text-white text-2xl text-center mt-5">Cargando...</p>

    <div v-else>
<<<<<<< Updated upstream
        <p v-if="user.noAppointments" class="text-white text-2xl text-center mt-5">No tienes próximas citas</p>
=======
        <p v-if="user.noAppointments" class="text-2xl text-center mt-5 text-white" >No tienes próximas citas</p>
>>>>>>> Stashed changes


        <div v-else class="grid grid-cols-1 gap-5 mt-10">
            <Appointment
                v-for="appointment in user.userAppointments"
                :key="appointment._id"
                :appointment="appointment"
            />
        </div>
    </div>


</template>