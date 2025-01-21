<script setup lang="ts">
const {login} = useSanctumAuth()
</script>

<template>
    <Card>
        <template #header>
            <h1>Login</h1>
        </template>
        <template #content>
            <Form @submit="">
                <InputText type="email" size="large" title="email"></InputText>
            </Form>
        </template>
    </Card>
</template>

<style scoped>

</style>