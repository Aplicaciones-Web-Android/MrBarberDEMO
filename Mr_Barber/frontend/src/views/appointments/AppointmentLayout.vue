<script setup>
    import { useUserStore } from '../../stores/user'
    const user = useUserStore()
    import { RouterLink } from 'vue-router';

</script>



<template>
    <div class="flex justify-between">
        <h1 class="text-2xl lg:text-6xl font-black text-white">Mr Barber</h1>

        <div class="flex flex-col space-y-5">
           <div class="flex gap-2 items-center">
                <p class="text-white text-right">Hola: {{ user.getUserName }}</p>

                <button
                    type="button"
<<<<<<< Updated upstream
                    class="bg-red-600 hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
=======
                    class="bg-red hover:bg-red-700 p-2 text-white uppercase text-xs font-extrabold rounded-lg"
>>>>>>> Stashed changes
                    @click="user.logout"
                >
                    Cerrar Sesión
                </button>
           </div>

           <nav class="flex gap-2 items-center justify-end">
                <RouterLink
                    :to="{name: 'my-appointments'}"
                    class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg"
                >Mis Citas</RouterLink>

                <RouterLink
                    :to="{name: 'new-appointment'}"
<<<<<<< Updated upstream
                    class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg bg-blue-700"
=======
                    class="p-3 text-white uppercase text-xs font-black rounded-lg bg-brown1"
>>>>>>> Stashed changes
                >
                    Nueva Cita
                </RouterLink>
           </nav>
        </div>
    </div>

    <main>
        <RouterView />
    </main>
</template>

