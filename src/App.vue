<template>
  <el-config-provider namespace="ep">
    <div>
      <el-button @click="open1">弹出message</el-button>
      <el-button @click="open2">弹出message-box</el-button>
    </div>
  </el-config-provider>
</template>
<script setup>
function open1() {
  ElMessage.info('This is a message')
}
function open2() {
  ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      })
    })
}
</script>
<style scoped></style>
