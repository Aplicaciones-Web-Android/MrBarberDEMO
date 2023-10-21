<script setup>
import { RouterView } from 'vue-router';


</script>

<template>
        <h1 class="text-6xl font-extrabold text-white text-center mt-10">Crea una cuenta</h1>
        <p class="text-2xl text-white text-center my-5">Crea una cuenta en Mr Barber</p>

        <FormKit
            type="form"
        >
            <FormKit
            type="text"
            label="Nombre"
            name="name"
            placeholder="Tu Nombre"
            validation="required|length:3"
            :validation-messages="{
                required: 'El Nombre es obligatorio',
                length: 'El nombre es muy corto'
            }"
            >


            </FormKit>

        </FormKit>
</template>